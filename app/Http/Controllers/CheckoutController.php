<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function showCheckout()
    {
        return Inertia::render('User/Checkout');
    }
}
