<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddressController extends Controller
{
    // Show address page in account section
    public function address()
    {
        $user = Auth::user();
        $addresses = Address::where('user_id', $user->id)->get();
        return Inertia::render('User/Address', [
            'addresses' => $addresses,
        ]);
    }

    // Store new address for user
    public function storeAddress(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            'address' => 'required',
            'city' => 'required',
            'phone' => 'required | min: 9 | max: 11',

        ]);

        Address::create([
            'user_id' => $user->id,
            'address' => $request->address,
            'city' => $request->city,
            'phone' => $request->phone,
        ]);

        return back();
    }
}
