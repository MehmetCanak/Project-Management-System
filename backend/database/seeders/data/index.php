<?php

$files = 
[
    'Users'
];

foreach($files as $file)
{
    require $file.'.php';
    echo $file." Data Insert OK\n";
}