<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\LoginController;


Route::get('/test', [TestController::class, 'show']);
Route::post('/login', [LoginController::class, 'login']);