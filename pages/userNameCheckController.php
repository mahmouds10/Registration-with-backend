<?php
    
    require("DB_Ops.php");

    error_reporting(E_ERROR | E_PARSE);
    
    // to return json file response
    header('Content-Type: application/json; charset=utf-8');
    
    if (strtoupper($_SERVER['REQUEST_METHOD']) == "GET") {

        $username = $_GET['username'];

        if (checkIfUsernameIsFound($username)) {
            echo json_encode(array("status"=>403, "response" => "username is already taked."));
        }else{
            echo json_encode(array("status"=>200));
        }
        exit();
    }
?>