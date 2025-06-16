<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/address/{endpoint}', function ($endpoint) {
    $response = Http::get("https://infarmub.github.io/api-wilayah-indonesia/api/".$endpoint.".json");
    return $response;
})->where('endpoint', '.*');
