<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/product-detail', [ProductController::class, 'productDetail'])->name('productDetail');

Route::middleware(['auth'])->group(function () {
    Route::get('/cart', [CartController::class, 'showCart'])->name('showCart');
    Route::get('/checkout', [CheckoutController::class, 'showCheckout'])->name('showCheckout');
    Route::get('/success-order', [OrderController::class, 'successOrder'])->name('successOrder');
    
    // These routes are user account related pages
    Route::get('/account', [UserController::class, 'account'])->name('account');
    Route::get('/profile', [UserController::class, 'profile'])->name('profile');
    Route::get('/my-orders', [OrderController::class, 'userOrders'])->name('userOrders');
    Route::get('/my-single-order', [OrderController::class, 'userSingleOrder'])->name('userSingleOrder');
    Route::get('address', [AddressController::class, 'address'])->name('address');
});

Route::prefix('admin')->middleware(['isAdmin'])->group(function() {
    Route::get('/dashboard', [PageController::class, 'dashboard'])->name('dashboard');
    Route::get('/order-history', [OrderController::class, 'adminOrders'])->name('adminOrders');
    Route::get('/single-order-history', [OrderController::class, 'adminSingleOrders'])->name('adminSingleOrders');
    Route::get('/add-product', [ProductController::class, 'addProduct'])->name('addProduct');
    Route::post('/add-product', [ProductController::class, 'storeProduct'])->name('storeProduct');
    Route::get('/products', [ProductController::class, 'adminProducts'])->name('adminProducts');
    Route::get('/single-product/{productId}', [ProductController::class, 'adminSingleProduct'])->name('adminSingleProduct');
    Route::post('/single-product/{productId}', [ProductController::class, 'updateProduct'])->name('updateProduct');
    Route::delete('/single-product/{removeImageName}', [ProductController::class, 'removeProductImage'])->name('removeProductImage');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
