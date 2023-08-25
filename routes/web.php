<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/product-detail', [ProductController::class, 'productDetail'])->name('productDetail');

// These routes are middleware protected
Route::get('/cart', [CartController::class, 'showCart'])->name('showCart');
Route::get('/checkout', [CheckoutController::class, 'showCheckout'])->name('showCheckout');
Route::get('/success-order', [OrderController::class, 'successOrder'])->name('successOrder');

// These routes are user account related pages
Route::get('/account', [UserController::class, 'account'])->name('account');
Route::get('/profile', [UserController::class, 'profile'])->name('profile');
Route::get('/my-orders', [OrderController::class, 'userOrders'])->name('userOrders');
Route::get('/my-single-order', [OrderController::class, 'userSingleOrder'])->name('userSingleOrder');
Route::get('address', [AddressController::class, 'address'])->name('address');


// These routes are admin routes and protected by "Admin" middleware
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [PageController::class, 'dashboard'])->name('dashboard');
    Route::get('/order-history', [OrderController::class, 'adminOrders'])->name('adminOrders');
    Route::get('/single-order-history', [OrderController::class, 'adminSingleOrders'])->name('adminSingleOrders');
    Route::get('/products', [ProductController::class, 'adminProducts'])->name('adminProducts');
    Route::get('/single-product', [ProductController::class, 'adminSingleProduct'])->name('adminSingleProduct');
});