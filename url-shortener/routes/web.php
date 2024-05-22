<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\UrlController;
use App\Models\Url;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');
Route::inertia('/about', 'Dashboard');
Route::controller(UrlController::class)->group(function () {
  Route::get('/urls', 'index');
  Route::post('/urls', 'store');
});

Route::get('/{page}', function (string $shortUrl) {
  $url = Url::where('shortUrl', $shortUrl)->first();
  return redirect($url->longUrl);
});
