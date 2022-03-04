<?php
use App\Models\User;

$this->user = new User();
$this->user->name= 'test';
$this->user->email = 'm@mail.com';
$this->user->password = \Hash::make('123456');
$this->user->save();