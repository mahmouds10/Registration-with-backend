<?php
	
	if (strtoupper($_SERVER['REQUEST_METHOD']) == "POST") {
            $fullname = $_POST['fullname'];
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            $confirmpassword = $_POST['confirmpassword'];
            $address = $_POST['address'];
            $phone = $_POST['phone'];
            $birthdate = $_POST['birthdate'];
			
        	$Conn = mysqli_connect("localhost", "root", "", "webassignment_1") or die("Could not connect: " . mysqli_error($conn));

        	if (checkIfUsernameIsFound($username, $Conn)){
        		return array("status"=>403, "response" => "username is already taked.");
        	}

        	if ( ! createUserInDB($fullname, $username, $email, $password, $confirmpassword, $address, $phone, $birthdate)){
        		return array("status"=> 403, "response" => "invalid data.");
        	}

			// to upload check on image and upload it 
            require("pages/Upload.php");
        }


        // if username is found return true
        function checkIfUsernameIsFound($username, $conn){
        	if ($username == null) {
        		return true;
        	}

			$stmt = mysqli_stmt_init($conn);

        	$sql = "SELECT `user_name` FROM userdata WHERE `user_name` = ?";

    		if (mysqli_stmt_prepare($stmt, $sql)) { 
	    		mysqli_stmt_bind_param($stmt , "s", $username);
        		mysqli_stmt_execute($stmt);
        		$result = mysqli_stmt_get_result($stmt);
        		$row = $result->fetch_row();
        		
        		if ($row == null) {
        			return true;
        		}else{
        			return false;
        		}
        	}
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
