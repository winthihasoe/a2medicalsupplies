<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
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
        $user = Auth()->user();
        return Inertia::render('User/Profile', [
            'user' => $user,
        ]);
    }

    // Updata user data
    public function updateUser(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore(auth()->id()),
            ],
            'phone' => [
                'required',
                Rule::unique('users')->ignore(auth()->id()),
            ],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'current_password' => 'nullable|string',
            'password' =>  ['nullable', 'different:current_password', 'confirmed', Rules\Password::defaults()],
        ]);

        // Update user information
        $user = Auth::user();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->save();
        
        // Update password if provided
        if ($request->filled('current_password') && $request->filled('password')) {
            if (Hash::check($request->current_password, $user->password)) {
                if ($request->current_password === $request->password) {
                    return back()->with('message', 'Password is the same as the current password.');
                }
                $user->password = Hash::make($request->password);
                $user->save();
            } else{
                return back()->with('error', 'Wrong current password');
            }
        } 
        
        return redirect()->route('account')->with('success', 'Update successful');
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


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);


        Auth::login($user);

        return redirect('/');
    }


    // This is from API
    function user (Request $request){
        return $request->user();       
    }

    // Show all user to super-admin middleware
    public function allUsers()
    {
        $users = User::select('id', 'name', 'email', 'phone', 'is_admin', 'is_editor')->get();
        return Inertia::render('Admin/Users', [ 
            'users' => $users,
        ]);
    }
    
    // Show all user to super-admin middleware
    public function showUser($userId)
    {
        $user = User::findOrFail($userId);
        return Inertia::render('Admin/UserDetail', [ 
            'user' => $user,
        ]);
    }

    // update role for the specific user
    public function updateRole($userId, Request $request)
    {
        $updateRole = User::findOrFail($userId);

        $request->validate([
            'is_admin'=>'required',
            'is_editor'=>'required',
            
        ]);

        try {
            $updateRole->update([
                'is_admin'=>$request->is_admin,
                'is_editor'=>$request->is_editor,
            ]);
            return redirect()->route('allUsers')->with('success', "User's role updated");
        } catch(\Exception $e) {
            return back()->with('error', 'Update role failed!');
        }


    }

}
