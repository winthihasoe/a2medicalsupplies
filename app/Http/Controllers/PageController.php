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

   public function dashboard()
   {
    return Inertia::render('Admin/Dashboard');
   }
}
