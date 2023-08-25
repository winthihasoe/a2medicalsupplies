<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    // Success order page
    public function successOrder()
    {
        return Inertia::render('User/SuccessOrder');
    }

    // Show orders to related user
    public function userOrders()
    {
        return Inertia::render('User/MyOrders');
    }

    // Show single order to user
    public function userSingleOrder()
    {
        return Inertia::render('User/SingleOrder');
    }

    // Show order history to admin
    public function adminOrders()
    {
        return Inertia::render('Admin/AdminOrders');
    }

    // Show single order history to admin
    public function adminSingleOrders()
    {
        return Inertia::render('Admin/AdminSingleOrder');
    }
}
