<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function showCart()
    {
        $userId = Auth::user()->id;
        $carts = Cart::where('user_id', $userId)->with('product')->get();
        
        $totalAmount = 0;
        
        foreach ($carts as $cart) {
          
            // Calculate total amount for product
            $totalAmount += $cart->product->price * $cart->qty;
        
        }
        return Inertia::render('User/Cart', [
            'carts' => $carts,
            'totalAmount' => $totalAmount,
        ]);
    }

    // Add to cart function
    public function addToCart(Request $request)
    {
        
        $data = $request->validate([
            'user_id' => 'required',
            'product_id' => 'required',
            'qty' => 'required'
        ]);

        $existingCart = Cart::where('user_id', $request->user_id)->where('product_id', $request->product_id)->first();
    
            if($existingCart){
                // If the cart item already exists, update the quantity
                $existingCart->qty += $request->qty;
                $existingCart->save();
            }else{
                Cart::create($data);
            }
        return redirect()->route('showCart')->with('success', 'Product added to cart!');
    }

    // Chaange Cart Qty from CartQtyToggle component
    public function changeCartQty(Request $request, $cartId)
    {
        $cart = Cart::findOrFail($cartId);
        $cart->qty = $request->input('qty');
        $cart->save();

        return back()->with('success', 'Quantity changed!');
    }

    // Delete specific cart 
    public function deleteCart($cartId)
    {
        $deleteCart = Cart::findOrFail($cartId);
        $deleteCart->delete();
        return back()->with('success', 'Cart deleted');
    }
}
