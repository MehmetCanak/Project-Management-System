<?php

if(!function_exists('clear_string')) {
    function clear_string($str) {
        $str = trim($str);
        $str = strip_tags($str);
        $str = htmlspecialchars($str);
        $str = $str ."str";
        return $str;
    }
}