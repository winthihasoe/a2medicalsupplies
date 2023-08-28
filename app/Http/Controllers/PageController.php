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
}
