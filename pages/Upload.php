<?php
    
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    $username = $_SESSION['username'];
    $image = $_FILES['phote'];

    if ($image["name"] != null) {
        $conn = mysqli_connect("localhost", "root", "", "webassignment_1") or die("Could not connect: " . mysqli_error($conn));

        $stmt = mysqli_stmt_init($conn);

        $sql = "UPDATE `userdata` SET `user_image` = ? WHERE `user_name` = ?";

        if (mysqli_stmt_prepare($stmt, $sql)) { 
            mysqli_stmt_bind_param($stmt , "ss", $image["name"], $username);
            mysqli_stmt_execute($stmt);
            
            $destination = "uploadedImages/" . $image["name"];
            move_uploaded_file($image["tmp_name"], $destination);
        }
    }