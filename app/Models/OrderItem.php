<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = ['order_id', 'product_id', 'price', 'qty'];

    // Define the relationship with the order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    // Define the relationship with the product
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
