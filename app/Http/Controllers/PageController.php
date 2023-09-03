<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'description' => Product::all()
        ]);
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
    return Inertia::render('Admin/Dashboard');
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
   
   // Microscopes
   public function aesthetic()
   {
    $products = Product::where('category', 'LIKE', '%'.'aesthetic'.'%')->get();
    return Inertia::render('ProductList', [
        'products' => $products,
    ]);
   }
}
