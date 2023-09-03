<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory; use SoftDeletes;

    protected $fillable = ['product_name', 'category','price','description', 'images', 'stock'];

    
    protected $casts = [
        'images' => 'array'
    ];
}
