<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function showCart()
    {
        return Inertia::render('User/Cart');
    }
}
