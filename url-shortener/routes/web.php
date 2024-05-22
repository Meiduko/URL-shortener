<?php

use App\Http\Controllers\UrlController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::inertia('/about', 'Dashboard');
Route::controller(UrlController::class)->group(function () {
  Route::get('/urls', 'index');
  Route::post('/urls', 'store');
});
