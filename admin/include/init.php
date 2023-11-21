<?php
ob_start();
date_default_timezone_set('Asia/Manila');
$webroot = "http://localhost/angular_projects/";
define('DS', '/');
define('SITE_ROOT', $webroot.DS.'admin');
define('INCLUDES_PATH', SITE_ROOT.DS.'include');
require_once("Helper.php");
require_once("config.php");
require_once("database.php");
require_once("db_object.php");
require_once("Session.php");
require_once("Accounts.php");
require_once("Account_Details.php");
require_once("Booking.php");
require_once("Guest.php");
require_once("Categories.php");
require_once("Features.php");
require_once("EventWedding.php");
require_once("Gallery.php");
require_once("Users.php");
require_once("Events.php");
require_once("Liquidation.php");
?>