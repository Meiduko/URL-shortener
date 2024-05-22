<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
        $url = new Url;
        $url->longUrl = $request->longUrl;
        if (Url::find($url->longUrl) !== null) {
            return response()->conflict(409);
        };
        $url->shortUrl = bin2hex(random_bytes(4));
        $url->save();
        return inertia($status = 201);
    }
}
