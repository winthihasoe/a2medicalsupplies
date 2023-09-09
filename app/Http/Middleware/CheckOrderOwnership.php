<?php

namespace App\Http\Middleware;

use App\Models\Order;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckOrderOwnership
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $orderId = $request->route('orderId'); // Assuming your route parameter is named 'order'

        $order = Order::find($orderId); // Replace 'Order' with your actual Eloquent model for orders

        if (!$order) {
            abort(404); // Order not found
        }

        if ($order->user_id !== auth()->id()) {
            abort(404); // User does not own this order
        }

        return $next($request);
    }
}
