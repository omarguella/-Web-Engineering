<!DOCTYPE html>
<html>
<head>

</head>


    <div class=main> 
    <h1>Registrierung</h1>
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
    if(isset($_POST['username']) && isset($_POST['password'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $file = './Accounts.csv';
        $new_line = hash("sha256", $username) . ',' . hash("sha256", $password) . "\n";
        if(file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)){
            echo "<script>alert('Erfolgreich registriert')</script>";
        }
    }
?>
    