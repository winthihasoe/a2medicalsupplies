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
        return Inertia::render('Admin/Drugs/AdminDrugIndex', [
           'drugs' => Drug::all(),
        ]);
        
    }

    // Show add drug form
    public function add()
    {
        return Inertia::render('Admin/Drugs/AddDrug');
    }

    // Store new drug
    public function store(Request $request)
    {
        
        $request->validate([
            'drug_name'=>'required',
            'retail_price'=>'required'
        ]);
        Drug::create($request->all());
        return redirect(route('allDrugs'))->with('success', 'Drug was added!');

    }

    // Show specific drug
    public function show($drugId)
    {
        return Inertia::render('Admin/Drugs/AdminSingleDrug', [
            'drug'=>Drug::findOrFail($drugId),
        ]);
        
    }

    // Editing the existing durg - show edit drug form
    public function edit($drugId)
    {
        return Inertia::render('Admin/Drugs/AdminEditDrug', [
            'drug'=>Drug::findOrFail($drugId),
        ]);
    }

    // Updating the existing drug -> put request
    public function update(Request $request, $drugId)
    {
        $updateDrug = Drug::findOrFail($drugId);
        $updateDrug->update($request->all());
        return redirect(route('adminSingleDrug', $drugId))->with('success', 'Drug was updated!');
    }

    // Delete the existing specific drug
    public function destroy($drugId)
    {
        $drug = Drug::findOrFail($drugId);
        $drug->delete();
        return Redirect::route('allDrugs')->with('success', 'Drug deleted.');
    }
}
