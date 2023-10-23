<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\DrugController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'index'])->name('home');

// Search everything in UserLayout
Route::get('/search-products-drugs', [PageController::class, 'searchEverything'])->name('searchEverything');

Route::get('/manikins', [PageController::class, 'manikins'])->name('manikins');
Route::get('/cpr', [PageController::class, 'cpr'])->name('cpr');
Route::get('/skeleton', [PageController::class, 'skeleton'])->name('skeleton');
Route::get('/microscope', [PageController::class, 'microscope'])->name('microscope');
Route::get('/aesthetic', [PageController::class, 'aesthetic'])->name('aesthetic');
Route::get('/arm-iv-practice', [PageController::class, 'injectionArm'])->name('injectionArm');
Route::get('/et-tube-practice', [PageController::class, 'etTube'])->name('etTube');
Route::get('/anatomy-torso', [PageController::class, 'anatomy'])->name('anatomy');
Route::get('/heart', [PageController::class, 'heart'])->name('heart');
Route::get('/ovary', [PageController::class, 'ovary'])->name('ovary');
Route::get('/buttock-im-practice', [PageController::class, 'buttock'])->name('buttock');
Route::get('/delivery-practice', [PageController::class, 'delivery'])->name('delivery');
Route::get('/posters', [PageController::class, 'posters'])->name('posters');
Route::get('/skull', [PageController::class, 'skull'])->name('skull');
Route::get('/skin', [PageController::class, 'skin'])->name('skin');
Route::get('/pregnancy', [PageController::class, 'pregnancy'])->name('pregnancy');
Route::get('/cervical', [PageController::class, 'cervical'])->name('cervical');
Route::get('/breast', [PageController::class, 'breast'])->name('breast');
Route::get('/needle', [PageController::class, 'needle'])->name('needle');
Route::get('/suture-kit', [PageController::class, 'suture'])->name('suture');
Route::get('/dressing-box', [PageController::class, 'dressing'])->name('dressing');
Route::get('/surgical-marker-pen', [PageController::class, 'pen'])->name('pen');

// Show single product for user
Route::get('/single-product/{productId}', [ProductController::class, 'singleProduct'])->name('singleProduct');

Route::middleware(['auth'])->group(function () {
    Route::post('/cart', [CartController::class, 'addToCart'])->name('addToCart');
    Route::get('/cart', [CartController::class, 'showCart'])->name('showCart');
    Route::put('/cart/{cartId}', [CartController::class, 'changeCartQty'])->name('changeCartQty');
    Route::delete('/cart/{cartId}', [CartController::class, 'deleteCart'])->name('deleteCart');
    Route::get('/checkout', [CheckoutController::class, 'showCheckout'])->name('showCheckout');
    Route::post('/place-order', [OrderController::class, 'placeOrder'])->name('placeOrder');
    Route::get('/success-order', [OrderController::class, 'successOrder'])->name('successOrder');
    
    // These routes are user account related pages
    Route::get('/account', [UserController::class, 'account'])->name('account');
    Route::get('/profile', [UserController::class, 'profile'])->name('profile');
    Route::post('/profile', [UserController::class, 'updateUser'])->name('updateUser');
    Route::get('/my-orders', [OrderController::class, 'userOrders'])->name('userOrders');
    Route::get('/my-single-order/{orderId}', [OrderController::class, 'singleOrder'])->middleware('order.owner')->name('singleOrder');
    Route::get('/address', [AddressController::class, 'address'])->name('address');
    Route::post('/address', [AddressController::class, 'storeAddress'])->name('storeAddress');
    Route::put('/review-by-customer/{orderId}', [OrderController::class, 'reviewByCustomer'])->name('reviewByCustomer');
    Route::put('delete-review/{orderId}', [OrderController::class, 'deleteReview'])->name('deleteReview');
    
});

Route::prefix('admin')->middleware(['isEditor'])->group(function() {
    Route::get('/dashboard', [PageController::class, 'dashboard'])->name('dashboard');

    Route::get('/order-history', [OrderController::class, 'adminOrders'])->name('adminOrders');
    Route::get('single-order-history/{orderId}', [OrderController::class, 'adminSingleOrder'])->name('adminSingleOrder');
    
    // Update status by admin
    Route::put('/orders/{orderId}', [OrderController::class, 'adminUpdateOrder'])->name('adminUpdateOrder');
    
    // Update address by admin
    Route::put('/orders/update-address/{orderId}', [OrderController::class, 'updateAddressByAdmin'])->name('updateAddressByAdmin');
    
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
    Route::get('/add-category', [CategoryController::class, 'createCategory'])->name('createCategory'); // route for showing create category form
    Route::post('/add-category', [CategoryController::class, 'addCategory'])->name('addCategory'); // route for create new category
    Route::delete('/delete-category/{categoryId}', [CategoryController::class, 'deleteCategory'])->name('deleteCategory'); // route for delete category

    //Pharmacy
    Route::get('drugs', [DrugController::class, 'index'])->name('allDrugs');
    Route::get('add-drug', [DrugController::class, 'add']);
    Route::post('add-drug', [DrugController::class, 'store']);
    Route::get('{drugId}', [DrugController::class, 'show'])->name('adminSingleDrug');
    Route::get('drug/{drugId}', [DrugController::class, 'edit'])->name('editDrug');
    Route::put('drug/update/{drugId}', [DrugController::class, 'update'])->name('updateDrug');
    Route::delete('drug/destroy/{drugId}', [DrugController::class, 'destroy'])->name('deleteDrug');
    
});

Route::prefix('super-admin')->middleware(['isAdmin'])->group(function() {
    Route::get('/users', [UserController::class, 'allUsers'])->name('allUsers');
    Route::get('/users/{userId}', [UserController::class, 'showUser'])->name('showUser');
    Route::put('/users/{userId}', [UserController::class, 'updateRole'])->name('updateRole');
});

require __DIR__.'/auth.php';
