<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectsController;


Route::get('/test', [TestController::class, 'show']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::post('/user', [AuthController::class, 'index']);

Route::group(['prefix' => 'project'], function () { 
    Route::get('/store', [ProjectsController::class, 'store']);
 });