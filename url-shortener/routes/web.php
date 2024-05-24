<?php

use App\Http\Controllers\UrlController;
use App\Models\Url;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return inertia('Home');
});

Route::get('/urls', [UrlController::class, 'index']);
Route::post('/urls', [UrlController::class, 'store']);

Route::get('/{page}', function (string $shortUrl) {
  $url = Url::where('shortUrl', $shortUrl)->first();
  if ($url) {
    return redirect($url->longUrl);
  } else {
    return redirect('/');
  }
});
