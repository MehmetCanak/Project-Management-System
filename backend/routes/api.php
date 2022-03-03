<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\TestController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$data =
[
    'prefix' => 'v1',  
    'namespace' => 'Api\V1', 
    'middleware' => ['api', 'check_auth']
];

Route::get('/test', [TestController::class, 'show']);
Route::group($data, function () { require 'api_require.php'; });


Route::get('/', function () {
    return view('welcome');
});
