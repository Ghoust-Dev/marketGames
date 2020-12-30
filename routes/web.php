<?php

use Illuminate\Support\Facades\Route;


/* Route::get('/', function () {
    return view('index');
}); */


Route::get('/{vue?}', function () {
    return view('index');
})->where('vue', '[\/\w\.-]*');