<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UrlController extends Controller
{

    public function index()
    {
        $urls = Url::all(['longUrl', 'shortUrl']);
        return response()->json($urls)
            ->header('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    }

    public function store(Request $request)
    {
        if ($request->longUrl === null) {
            return;
        }

        $url = new Url;
        $url->longUrl = $request->longUrl;
        $existingUrl = Url::where('longUrl', $request->longUrl)->first();
        $url->shortUrl = $existingUrl ? false : bin2hex(random_bytes(4));
        if ($url->shortUrl !== false) {
            $url->save();
        }
        return Inertia::share('newUrl', $url);
    }
}
