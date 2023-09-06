<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function showCheckout()
    {
        $userId = Auth::user()->id;
        $carts = Cart::where('user_id', $userId)->with('product')->get();
        
        $totalAmount = 0;
        
        foreach ($carts as $cart) {
          
            // Calculate total amount for product
            $totalAmount += $cart->product->price * $cart->qty;
        }
        return Inertia::render('User/Checkout', [
            'carts' => $carts,
            'totalAmount' => $totalAmount,
            'address' => Address::where('user_id', $userId)->latest()->first(),
        ]);
    }
}
