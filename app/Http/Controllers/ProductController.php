<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Show all Products to admin
    public function adminProducts()
    {
        return Inertia::render('Admin/AdminProducts');
    }

    // Show single product to admin
    public function adminSingleProduct()
    {
        return Inertia::render('Admin/AdminSingleProduct');
    }
}
