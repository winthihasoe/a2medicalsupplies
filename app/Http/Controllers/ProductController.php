<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Add new product from admin
    public function addProduct()
    {
        return Inertia::render('Admin/AddProduct');
    }

    // Store new product
    public function storeProduct(Request $request)
    {
        $data = $request->validate([
            'product_name' => 'required',
            'price' => 'required',
            'category' => 'required',
            'images' => 'nullable|array'
        ]);

       
         // Start a database transaction
         DB::beginTransaction();
 
         try {
            $images = [];

            foreach ($data['images'] as $image) {
                $fileName = uniqid().'_'.$image->getClientOriginalName();
                $image_path = $image->storeAs('images/products', $fileName,'public');
                array_push($images, $fileName);
            }
            
            $data['images'] = $images;

            Product::create($data);
            
            
             
             // Commit the transaction
             DB::commit();
 
 
             // Return a success response
             return redirect()->route('adminProducts')->with('success', 'Product added successfully');
         } catch (\Exception $e) {
             // Roll back the transaction in case of any error
             DB::rollBack();
 
             // Return an error response
             return back()->with('error', 'Product add failed!');
         }
 
    }

    // Update product 
    public function updateProduct($productId, Request $request)
    {
         // Validate the incoming request data
         $data = $request->validate([
            'product_name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'images' => 'nullable|array',
            'new_images' => 'nullable|array'
            // Add more validation rules as needed
        ]);
        
        // Find the product by its ID
        $product = Product::findOrFail($productId);


        
        if($request->hasFile('new_images')) {
            $images = [];
            foreach ($request->file('new_images') as $uploadedImage) {
                $fileName = uniqid().'_'.$uploadedImage->getClientOriginalName();
                $image_path = $uploadedImage->storeAs('images/products', $fileName,'public');
                $images[] = $fileName;
            }
            $data['images'] = $images;
        }


        $product->update($data);

        return redirect()->route('adminProducts')->with('success', 'Product update!');
    }

    // Show all Products to admin
    public function adminProducts()
    {
        
        return Inertia::render('Admin/AdminProducts', [
            'products' => Product::all(),
        ]);
    }

    // Show single product to admin
    public function adminSingleProduct($productId)
    {
        $product = Product::findOrFail($productId);
        $images = $product->images; // Array of image paths

        foreach ($images as $imagePath) {
            // Generate URLs to access the images
            $imageUrl = asset('storage/' . $imagePath);
        }

        return Inertia::render('Admin/AdminSingleProduct', [
            'product' => Product::findOrFail($productId),
        ]);
    }

    // Delete single image by name sent by admin when the admin press the delete button in image scroll
    public function removeProductImage($removeImageName, Request $request)
    {
        
        $imagePath = 'storage/images/products/'.$removeImageName;

        if (File::exists($imagePath)) {
            File::delete($imagePath);
            
            $updatedImages = [];
            foreach($request->images as $image) {
                if ($image !== $removeImageName) 
                {
                    $updatedImages[] = $image;
                }
            }
            $product = Product::findOrFail($request->id);
            $product->images = $updatedImages;

            return back()->with('message', 'Photo deleted!');
        }

        return response()->json(['message' => 'Image not found'], 404);
    }
}
