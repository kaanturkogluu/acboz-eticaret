<?php 

require_once __DIR__. "/../panel/core/autoloader.php";

$router = Router::getInstance();
$csrf = CSRF::getInstance();
$session = Session::getInstance(); 

require_once __DIR__. "/head.php";
require_once __DIR__. "/header.php";