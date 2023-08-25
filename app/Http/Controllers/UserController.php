<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    // Show user account page
    public function account()
    {
        return Inertia::render('User/Account');
    }

    // Show user profile page
    public function profile()
    {
        return Inertia::render('User/Profile');
    }
}
