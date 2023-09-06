<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/manikins', [PageController::class, 'manikins'])->name('manikins');
Route::get('/cpr', [PageController::class, 'cpr'])->name('cpr');
Route::get('/skeleton', [PageController::class, 'skeleton'])->name('skeleton');
Route::get('/microscope', [PageController::class, 'microscope'])->name('microscope');
Route::get('/aesthetic', [PageController::class, 'aesthetic'])->name('aesthetic');
// Route::get('/product-detail', [ProductController::class, 'productDetail'])->name('productDetail');

Route::middleware(['auth'])->group(function () {
    Route::post('/cart', [CartController::class, 'addToCart'])->name('addToCart');
    Route::get('/cart', [CartController::class, 'showCart'])->name('showCart');
    Route::put('/cart/{cartId}', [CartController::class, 'changeCartQty'])->name('changeCartQty');
    Route::delete('/cart/{cartId}', [CartController::class, 'deleteCart'])->name('deleteCart');
    Route::get('/checkout', [CheckoutController::class, 'showCheckout'])->name('showCheckout');
    Route::get('/success-order', [OrderController::class, 'successOrder'])->name('successOrder');
    
    // These routes are user account related pages
    Route::get('/account', [UserController::class, 'account'])->name('account');
    Route::get('/profile', [UserController::class, 'profile'])->name('profile');
    Route::post('/profile', [UserController::class, 'updateUser'])->name('updateUser');
    Route::get('/my-orders', [OrderController::class, 'userOrders'])->name('userOrders');
    Route::get('/my-single-order', [OrderController::class, 'userSingleOrder'])->name('userSingleOrder');
    Route::get('/address', [AddressController::class, 'address'])->name('address');
    Route::post('/address', [AddressController::class, 'storeAddress'])->name('storeAddress');

    // Show single product for user
    Route::get('/single-product/{productId}', [ProductController::class, 'singleProduct'])->name('singleProduct');
});

Route::prefix('admin')->middleware(['isAdmin'])->group(function() {
    Route::get('/dashboard', [PageController::class, 'dashboard'])->name('dashboard');
    Route::get('/order-history', [OrderController::class, 'adminOrders'])->name('adminOrders');
    Route::get('/single-order-history', [OrderController::class, 'adminSingleOrders'])->name('adminSingleOrders');

    // Product 
    Route::get('/add-product', [ProductController::class, 'addProduct'])->name('addProduct');
    Route::post('/add-product', [ProductController::class, 'storeProduct'])->name('storeProduct');
    Route::get('/products', [ProductController::class, 'adminProducts'])->name('adminProducts');
    Route::get('/single-product/{productId}', [ProductController::class, 'adminSingleProduct'])->name('adminSingleProduct');
    Route::post('/single-product/{productId}', [ProductController::class, 'updateProduct'])->name('updateProduct');
    Route::delete('/delete-product/{productId}', [ProductController::class, 'deleteProduct'])->name('deleteProduct');
    
    // Delete single product image when admin press the delete icon
    Route::delete('/single-product/{removeImageName}', [ProductController::class, 'removeProductImage'])->name('removeProductImage');

    // Category 
    Route::post('/add-category', [CategoryController::class, 'addCategory'])->name('addCategory');
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
