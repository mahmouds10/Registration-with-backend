<?php
    
    error_reporting(E_ERROR | E_PARSE);
    
    if (strtoupper($_SERVER['REQUEST_METHOD']) == "GET") {

        $username = $_GET['username'];

        // to return json file response

        header('Content-Type: application/json; charset=utf-8');
        if (checkIfUsernameIsFound($username)) {
            echo json_encode(array("status"=>403, "response" => "username is already taked."));
        }else{
            echo json_encode(array("status"=>200));
        }
    }


    // if username is found or null return true
    function checkIfUsernameIsFound($username, $conn = null){
    	if ($username == null) {
    		return true;
    	}

        if (!$conn) {
            $conn = mysqli_connect("localhost", "root", "", "webassignment_1") or die("Could not connect: " . mysqli_error($conn));
        }

		$stmt = mysqli_stmt_init($conn);

    	$sql = "SELECT `user_name` FROM userdata WHERE `user_name` = ?";

		if (mysqli_stmt_prepare($stmt, $sql)) {
    		mysqli_stmt_bind_param($stmt , "s", $username);
    		mysqli_stmt_execute($stmt);
    		$result = mysqli_stmt_get_result($stmt);
    		$row = $result->fetch_row();
    		
    		if ($row == null) {
    			return false;
    		}else{
    			return true;
    		}
    	}
    }

?>