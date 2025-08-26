<?php 

require_once __DIR__ . "/core/autoloader.php";
$router = Router::getInstance();   

echo "PHP çalışıyor!";
exit; 
$router->redirect(Router::view('anasayfa'));

?>