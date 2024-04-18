<?php
	
    require("userNameCheck.php");

    error_reporting(E_ERROR | E_PARSE);
    
    if (session_status() == PHP_SESSION_NONE) {
	   session_start();
	}
	
	if (strtoupper($_SERVER['REQUEST_METHOD']) == "POST") {
        $username = $_POST['username'];

        $_SESSION['username'] = $username;

        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmpassword = $_POST['confirmpassword'];
        $address = $_POST['address'];
        $phone = $_POST['phone'];
        $birthdate = $_POST['birthdate'];
		
    	$Conn = mysqli_connect("localhost", "root", "", "webassignment_1") or die("Could not connect: " . mysqli_error($conn));
    
        // to return json file response
        header('Content-Type: application/json; charset=utf-8');


    	if (checkIfUsernameIsFound($username, $Conn)){
    		return json_encode(array("status"=>403, "response" => "username is already taked."));
    	}

    	if ( ! createUserInDB($Conn, $fullname, $username, $email, $password, $confirmpassword, $address, $phone, $birthdate)){
    		return json_encode(array("status"=> 403, "response" => "invalid data."));
    	}

		// to upload check on image and upload it 
        require("pages\Upload.php");

        return json_encode(array("status"=> 201, "response" => "user created successfully."));
    }

    function createUserInDB($Conn, $name, $username, $email, $password, $confirmpassword, $address, $phone, $birthdate){

	    $stmt = mysqli_stmt_init($Conn);

    	$sql = "INSERT INTO `userdata` (`full_name`, `user_name`, `birthdate`, `phone`, `address`, `password`, `confirm_password`, `email`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";		    

		if (mysqli_stmt_prepare($stmt,$sql)) { 
    		mysqli_stmt_bind_param($stmt , "ssssssss", $name, $username, $birthdate, $phone, $address, $password, $confirmpassword, $email);
    		mysqli_stmt_execute($stmt);
    		return true;
    	}else{
    		return false;
    	}
    }
