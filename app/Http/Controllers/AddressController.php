<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function address()
    {
        return Inertia::render('User/Address');
    }
}
