<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drug extends Model
{
    use HasFactory;

    protected $fillable = ['drug_name', 'retail_price', 'dr_price', 'buying_price', 'supplier', 'purchase_date'];
    protected $guarded = [];
}
