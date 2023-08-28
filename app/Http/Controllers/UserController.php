<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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

    // Create new user via Register form
    public function createUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|unique:users',
            'password' => 'required | confirmed | min: 8',
        ]);

        dd($request);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);


        Auth::login($user);

        return redirect('/');
    }
}
