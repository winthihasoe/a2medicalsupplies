<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DrugApiController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//Public routes
Route::post('/v1/register', [AuthController::class, 'register']);
Route::post('/v1/login', [AuthController::class, 'login']);

//Protected routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/v1/logout', [AuthController::class, 'logout']);
    Route::apiResource('/v1/drugs', DrugApiController::class);
    Route::get('/v1/user', [UserController::class, 'user']);
});
