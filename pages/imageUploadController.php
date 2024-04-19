<?php
    
    require("DB_Ops.php");
    
    // to return json file response
    header('Content-Type: application/json; charset=utf-8');

    error_reporting(E_ERROR | E_PARSE);
    
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    $username = $_SESSION['username'];
    $image = $_FILES['photo'];

    if (strtoupper($_SERVER['REQUEST_METHOD']) == "POST") {
        $username = $_POST["username"];

        if (! $username) {
            if (!$username) {
                echo json_encode(array("status"=> 403,  "response"=>"must provide username."));
            }
        }

        if ($image["name"] == null) {
            echo json_encode(array("status"=> 403,  "response"=>"invalid image."));
        }

        else if(setUserImage($image, $username)){
            // put image file on server in uploadImages dir
            $destination = "../uploadedImages/" . $image["name"];
            copy($image["tmp_name"], $destination);

            echo json_encode(array("status"=> 200,  "response"=>"image edited successfully."));
        }
        else{
            echo json_encode(array("status"=> 500,  "response"=>"error while editing image."));
        }
        exit();
    }

