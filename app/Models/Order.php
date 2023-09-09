<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['order_number', 'user_id', 'customer_name', 'total_amount', 'address', 'delivery_fee', 'status', 'payment_method', 'payment_status', 'promo_code', 'discount_amount', 'remark_by_customer', 'remark_by_admin', 'review_by_customer'];

    // Create order number
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($order) {
            $order->order_number = 'Inv-' . uniqid(); // Generate a unique order number
        });
    }

    // Define the relationship with order items
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    // Define the relationship with user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    

}
