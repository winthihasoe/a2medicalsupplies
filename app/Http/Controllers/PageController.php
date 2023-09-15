<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Drug;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    // Calculate more relevant data for search result
    private function calculateRelevanceScore(Collection $results, $keywords)
    {
        $scoredResults = $results->map(function ($result) use ($keywords) {
            $count = 0;

            // Calculate the number of matches in each property
            $properties = ['res_name', 'menu_name', 'cat_name', 'name'];
            foreach ($properties as $property) {
                $count += substr_count(strtolower($result->{$property}), strtolower($keywords));
            }

            // Assign the calculated count to the result as a 'relevance_score' property
            $result->relevance_score = $count;
            return $result;
        });

        // Sort the results based on the relevance score in descending order
        return $scoredResults->sortByDesc('relevance_score')->values();
    }

    // Search shops and restaurants
    public function searchEverything(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'keywords' => 'required|string',
        ]);

        if ($validator->fails()) {
            return back();
        }

        $keywords = $request->keywords;

        $products = Product::where('product_name', 'LIKE', '%' . $keywords . '%')->get();
        // $drugs = Drug::where('drug_name', 'LIKE', '%' . $keywords . '%')->select('id', 'drug_name', 'retail_price')->get();
        
        // Merge all the results into one collection
        $results = $products;

        // Calculate and sort the results based on the relevance score
        $sortedResults = $this->calculateRelevanceScore($results, $keywords);

        return Inertia::render('SearchResult', ['results' => $sortedResults, 'keywords' => $keywords]);
    }

    // Show login Form 
    public function showLogin()
    {
        return Inertia::render('Auth/Login');
    }

    // Show register Form 
    public function showRegister()
    {
        return Inertia::render('Auth/Register');
    }

   public function dashboard()
   {
    $stockList = Product::select('id', 'product_name', 'stock')->get();
    return Inertia::render('Admin/Dashboard', [
        'stockList' => $stockList,
    ]);
   }

   // --------- Showing product list from home page ---------

   // Manikins
   public function manikins()
   {
    $products = Product::where('category', 'LIKE', '%'.'manikin'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }

   // CPR 
   public function cpr()
   {
    $products = Product::where('category', 'LIKE', '%'.'cpr'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // Skeletons
   public function skeleton()
   {
    $products = Product::where('category', 'LIKE', '%'.'skeleton'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
  
   // Microscopes
   public function microscope()
   {
    $products = Product::where('category', 'LIKE', '%'.'microscope'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // Aesthetic
   public function aesthetic()
   {
    $products = Product::where('category', 'LIKE', '%'.'aesthetic'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // Arm IV practice 
   public function injectionArm()
   {
    $products = Product::where('category', 'LIKE', '%'.'Arm IV'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // ET tube insertion practice 
   public function etTube()
   {
    $products = Product::where('category', 'LIKE', '%'.'ET tube'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // Anatomy torso
   public function anatomy()
   {
    $products = Product::where('category', 'LIKE', '%'.'anatomy'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // Heart
   public function heart()
   {
    $products = Product::where('category', 'LIKE', '%'.'heart'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
    }

    // ovary
   public function ovary()
   {
    $products = Product::where('category', 'LIKE', '%'.'ovary'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
    
   // buttock
   public function buttock()
   {
    $products = Product::where('category', 'LIKE', '%'.'buttock'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // delivery
   public function delivery()
   {
    $products = Product::where('category', 'LIKE', '%'.'delivery'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // poster
   public function posters()
   {
    $products = Product::where('category', 'LIKE', '%'.'poster'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // skull
   public function skull()
   {
    $products = Product::where('category', 'LIKE', '%'.'skull'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // skin
   public function skin()
   {
    $products = Product::where('category', 'LIKE', '%'.'skin'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // pregnancy
   public function pregnancy()
   {
    $products = Product::where('category', 'LIKE', '%'.'pregnancy'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // cervical
   public function cervical()
   {
    $products = Product::where('category', 'LIKE', '%'.'cervical'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // breast
   public function breast()
   {
    $products = Product::where('category', 'LIKE', '%'.'breast'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // needle
   public function needle()
   {
    $products = Product::where('category', 'LIKE', '%'.'needle'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // suture
   public function suture()
   {
    $products = Product::where('category', 'LIKE', '%'.'suture'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // dressing
   public function dressing()
   {
    $products = Product::where('category', 'LIKE', '%'.'dressing'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
   
   // pen
   public function pen()
   {
    $products = Product::where('category', 'LIKE', '%'.'pen'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
}
