<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\USerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/", [ApiController::class, "index"]);

// Route::group()

Route::post('/register', [USerController::class, 'register']);
Route::put('/users/update/{id}', [USerController::class, 'updateUser']);
Route::delete('/users/delete/{id}', [USerController::class, 'deleteUser']);
Route::get('/users/details/{id}', [USerController::class, 'getUser']);
