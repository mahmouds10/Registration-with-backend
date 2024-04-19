<?php
	

    // to connect to database and create sql
    // AffectedRowOrResult is param that define what user need affected rows or the result  
    function executeQueryOnDataBase($sql, $params, $AffectedRowOrResult = 2){
        mysqli_report(MYSQLI_REPORT_OFF);
        $conn = mysqli_connect("localhost", "root", "", "webassignment_1") or die("Could not connect: " . mysqli_error($conn));
        $stmt = mysqli_stmt_init($conn);

        if (! $stmt){
            echo "Something happen error" . "<br>";
            exit();
        }

        if (mysqli_stmt_prepare($stmt,$sql)) { 
            try{
                mysqli_stmt_execute($stmt, $params);
            }
            catch(Exception $e){
                echo "error while execution " . "<br>";
                exit();
            }

            if ($AffectedRowOrResult == 2) {
                $result = mysqli_stmt_get_result($stmt);
                return $result;
            }
            else if ($AffectedRowOrResult == 1) {
                return mysqli_affected_rows($conn);
            }
        }
        else{
            echo "Sql Query is wrong, please type write one";
        }
    }


    function createUserInDB($name, $username, $email, $password, $confirmpassword, $address, $phone, $birthdate){

    	$sql = "INSERT INTO `userdata` (`full_name`, `user_name`, `birthdate`, `phone`, `address`, `password`, `confirm_password`, `email`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";		    

        $affectedRows = executeQueryOnDataBase($sql, array($name, $username, $birthdate, $phone, $address, $password, $confirmpassword, $email), 1);

        if ($affectedRows > 0) {
            return true;
        }
        return false;
    }


    // if username is found in database or null return true
    function checkIfUsernameIsFound($username, $conn = null){
        if ($username == null) {
            return true;
        }

        $sql = "SELECT `user_name` FROM userdata WHERE `user_name` = ?";

        $result = executeQueryOnDataBase($sql, array($username));

        if ($result->fetch_row() == null) {
            return false;
        }else{
            return true;
        }
    }


    function setUserImage($image, $username){

        $conn = mysqli_connect("localhost", "root", "", "webassignment_1") or die("Could not connect: " . mysqli_error($conn));

        $stmt = mysqli_stmt_init($conn);

        $sql = "UPDATE `userdata` SET `user_image` = ? WHERE `user_name` = ?";

        $affectedRows = executeQueryOnDataBase($sql, array($image["name"], $username), 1);

        if ($affectedRows > 0) {
            return true;
        }
        return false;
    }

