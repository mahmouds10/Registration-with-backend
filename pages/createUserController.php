<?php

    require("DB_Ops.php");
    require("helperFunctions.php");

    // to return json file response
    header('Content-Type: application/json; charset=utf-8');

    error_reporting(E_ERROR | E_PARSE);
    
    if (session_status() == PHP_SESSION_NONE) {
	   session_start();
	}
	
	if (strtoupper($_SERVER['REQUEST_METHOD']) == "POST") {
        // to return json file response
        header('Content-Type: application/json; charset=utf-8');


        $username = $_POST['username'];
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmpassword = $_POST['confirmpassword'];
        $address = $_POST['address'];
        $phone = $_POST['phone'];
        $birthdate = $_POST['birthdate'];

        $notFilledFields = getRequiredFieldsNotFill(array("username"=>$username, "birthdate"=>$birthdate, "email"=>$email, "password"=>$password, "confirmpassword"=>$confirmpassword));


        if ($notFilledFields){
            $arr = array();            
            foreach($notFilledFields as $key => $value){
                $arr[$value] = "is a reqired field.";
            }

            echo json_encode(array("status"=> 403, "response"=> $arr));
            exit();
        }

    	else if (checkIfUsernameIsFound($username)){
    		echo json_encode(array("status"=>403, "response" => "username is already taked."));
            exit();
    	}

    	else if (createUserInDB($fullname, $username, $email, $password, $confirmpassword, $address, $phone, $birthdate)){

            $_SESSION['username'] = $username;

            echo json_encode(array("status"=> 201, "response" => "user created successfully."));
    	}
        else{
            echo json_encode(array("status"=> 500,  "response"=>"error while save user."));
            exit();
        }


        // to upload image if he provide it
        $image = $_FILES['photo'];

        if ($image == null){
            exit();
        }
        if ($image["name"] == null) {
            echo json_encode(array("status"=> 403,  "response"=>"invalid image."));
        }

        else if(setUserImage($image, $username)){
            $destination = "../uploadedImages/" . $image["name"];
            copy($image["tmp_name"], $destination);
        }else{
            echo json_encode(array("status"=> 500,  "response"=>"error while editing image."));
        }
        exit();
    }