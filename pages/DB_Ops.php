<?php

	if (strtoupper($_SERVER['REQUEST_METHOD']) == "post") {
            $fullname = $_POST['fullname'];
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            $confirmpassword = $_POST['confirmpassword'];
            $address = $_POST['address'];
            $phone = $_POST['phone'];
            $birthdate = $_POST['birthdate'];

            $phote = $_FILES['phote'];
        }


        function createUserInDB($name, $username, $email, $password, $confirmpassword, $address, $phone, $birthdate, $phone){
        	$Conn = mysqli_connect("localhost", "root", "", "webassignment_1") or die("Could not connect: " . mysqli_error($conn));

		    $stmt = mysqli_stmt_init($Conn);
        	
        	$sql = "INSERT INTO `userdata` (`full_name`, `user_name`, `birthdate`, `phone`, `address`, `password`, `confirm_password`, `user_image`, `email`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";		    

    		if (mysqli_stmt_prepare($stmt,$sql)) { 
        		mysqli_stmt_bind_param($stmt , "sssssssss", $name);
        		mysqli_stmt_execute($stmt);
        	}
        }
