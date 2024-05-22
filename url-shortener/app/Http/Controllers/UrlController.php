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
        if ($request->longUrl === null) {
            return;
        }

        $url = new Url;
        $url->longUrl = $request->longUrl;
        $url->shortUrl = Url::find($url->longUrl) === null
            ? bin2hex(random_bytes(4))
            : Url::where('longUrl', $url->longUrl);
        $url->save();
        return response()->noContent()->header('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    }
}
