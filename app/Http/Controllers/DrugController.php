<?php

namespace App\Http\Controllers;

use App\Models\Drug;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DrugController extends Controller
{
    // Show all drugs to admin
    public function index()
    {
        return Inertia::render('Index', [
           'drugs' => Drug::get(),
        ]);
        
    }

    // Show add drug form
    public function add()
    {
        return Inertia::render('AddDrug');
    }

    // Store new drug
    public function store(Request $request)
    {
        
        $request->validate([
            'drug_name'=>'required',
            'retail_price'=>'required'
        ]);
        Drug::create($request->all());
        return redirect('/')->with('message', 'Drug was updated!');

    }

    // Show specific drug
    public function show(Drug $drug)
    {
        return Inertia::render('Drug', [
            'drug'=>$drug
        ]);
        
    }

    // Editing the existing durg - show edit drug form
    public function edit(Drug $drug)
    {
        return Inertia::render('EditDrug', [
            'drug'=>$drug
        ]);
    }

    // Updating the existing drug -> put request
    public function update(Request $request, $drug)
    {
        
        $updateDrug = Drug::find($drug);
        $updateDrug->update($request->all());
        return redirect(route('showDrug',[$drug]))->with('message', 'Drug was updated!');
    }

    // Delete the existing specific drug
    public function destroy(Drug $drug)
    {
        $drug->delete();
        return Redirect::route('dashboard')->with('success', 'Drug deleted.');
    }
}
