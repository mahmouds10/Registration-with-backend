<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 1</title>
    <link rel="icon" href="./Imgs/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/index.css">
</head>

<body>

    <?php require ("components/Header.php"); ?>
    <?php require ("components/Form.php"); ?>
    <?php require ("components/Footer.php"); ?>

    <?php
        if (strtoupper($_SERVER['REQUEST_METHOD']) == "POST") {
            session_start();
            $_SESSION["fullname"] = $_POST['fullname'];
            $_SESSION["username"] = $_POST['username'];
            $_SESSION["email"] = $_POST['email'];
            $_SESSION["password"] = $_POST['password'];
            $_SESSION["confirmpassword"] = $_POST['confirmpassword'];
            $_SESSION["address"] = $_POST['address'];
            $_SESSION["phone"] = $_POST['phone'];
            $_SESSION["birthdate"] = $_POST['birthdate'];
            $_SESSION["phote"] = $_POST['phote'];
        }
    ?>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>