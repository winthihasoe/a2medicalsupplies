<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function createCategory()
    {
        return Inertia::render('Admin/CreateCategory', [
            'categories' => Category::all(),
        ]);
    }

    public function addCategory(Request $request)
    {
        $data = $request->validate([
            'category_name' => 'required'
        ]);

        Category::create($data);

        return back()->with('message', 'New category created!');
    }

    public function deleteCategory($categoryId)
    {
        $deleteCategory = Category::findOrFail($categoryId);
        $deleteCategory->delete();

        return back()->with('success', 'Category deleted');
    }
}
