<!DOCTYPE html>
<html>
<head>

</head>


    <div class=main> 
    <h1>LOGIN</h1>
<form method="post">
        Username:<br>
        <input type="text" name="username">
        <br>
        PASSWORD:<br>
        <input type="password" name="password">
        <br>
        <input type="submit" >
</form>



</div>

</html>

<?php

    $username = $_POST['username'];
    $Password = $_POST["password"];

    $lines = file("./Accounts.csv");
    $Account = false;
    foreach($lines as $line_num => $line){
        list( $csvUsername, $csvPassword) = explode(",", $line);
        if($csvUsername === hash("sha256", $username)){
            if($csvPassword === hash("sha256", $Password) . "\n"){
                echo "<script>alert('Login erfolgreich!')</script>";
                $Account = true;
                break;
            }
        }
    }
    if(!$Account && ($username || $Password)){
        echo "<script>alert('Name oder Password falsch!')</script>";
    }

?>