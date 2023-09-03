<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request)
    {
        $data = $request->validate([
            'category_name' => 'required'
        ]);

        Category::create($data);

        return back()->with('message', 'New category created!');
    }
}
