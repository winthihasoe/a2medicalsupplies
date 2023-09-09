<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    // Create New order from Customer
    public function placeOrder(Request $request)
    {
        $request->validate([
            'totalAmount' => 'required',
            'address' => 'required',
            'city' => 'required',
            'phone' => 'required',
        ]);
        $user = Auth()->user();
        $address = $request->address.", ".$request->city.", ".$request->phone;
        
        DB::beginTransaction();
        try {
            // Create a new order
            $order = new Order();
            $order->user_id = $user->id;
            $order->total_amount = $request->totalAmount;
            $order->status = 'pending';
            $order->address = $address;
            $order->save();

            // Process each order item
            foreach ($request->items as $item) {
                // Create a new order item
                $orderItem = new OrderItem();
                $orderItem->order_id = $order->id;
                $orderItem->product_id = $item['product_id'];
                $orderItem->price = $item['product']['price'];
                $orderItem->qty = $item['qty'];
                $orderItem->save();

                // Substract from the product stock with ordered qty
            
                $product = Product::find($item['product_id']);
                if($product->stock !== 0) {
                    $product->stock = $product->stock - $item['qty'];
                    $product->save();
                }
            }

            // Delete the cart items
            Cart::where('user_id', $user->id)->delete();

            // Commit the transaction
            DB::commit();

            // return Inertia::visit(route('successOrder'))->with('success', 'Order successfully placed!');
            return redirect()->route('successOrder')->with('success', 'Order successfully placed!');
        } catch (\Exception $e) {
            // Roll back the transaction in case of any error
            DB::rollBack();

            // Return an error response
            return back()->with('error', 'Placed order failed.');
        }
    }

    // Success order page
    public function successOrder()
    {
        return Inertia::render('User/SuccessOrder');
    }

    // Show orders to related user
    public function userOrders()
    {
        $user = Auth::user();
        $orders = Order::where('user_id', $user->id)->get();
        return Inertia::render('User/MyOrders', [
            'orders' => $orders,
        ]);
    }

    // Show single order to user
    public function singleOrder($orderId)
    {
        $user = Auth::user();
        $order = Order::where('user_id', $user->id)->with('orderItems.product', 'user')->findOrFail($orderId);
        return Inertia::render('User/SingleOrder', [
            'order' => $order,
        ]);
    }

    // Review by customer
    public function reviewByCustomer(Request $request, $orderId)
    {
        $order = Order::findOrFail($orderId);
        $order->review_by_customer = $request->review;
        $order->update();
        return back()->with('success', 'Your review has been saved!');
    }

    // Delete review by customer
    public function deleteReview($orderId)
    {
        $order = Order::findOrFail($orderId);
        $order->review_by_customer = null;
        $order->update();
        return back()->with('success', 'Your review is deleted');
    }

    // Show order history to admin
    public function adminOrders()
    {
        $orders = Order::with('user')->paginate(10);
        return Inertia::render('Admin/AdminOrders', [
            'orders' => $orders
        ]);
    }

    // Show single order history to admin
    public function adminSingleOrder($orderId)
    {
        $order = Order::with('orderItems.product', 'user')->findOrFail($orderId);
        return Inertia::render('Admin/AdminSingleOrder', [
            'order' => $order,
        ]);
    }

    // Update status of specific order from admin
    public function adminUpdateOrder($orderId, Request $request)
    {
        $updateOrder = Order::findOrFail($orderId);
        $updateOrder->status = $request->status;
        $updateOrder->save();
        return redirect()->back()->with('success', 'Order status updated successfully');

    }
    
    // Update address of specific order from admin
    public function updateAddressByAdmin($orderId, Request $request)
    {
        $updateOrder = Order::findOrFail($orderId);
        $updateOrder->address = $request->address;
        $updateOrder->save();
        return redirect()->back()->with('success', 'Order address updated successfully');

    }

}
