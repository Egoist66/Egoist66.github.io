<?php 

    $textarea = $_POST['textarea'];
    $textarea = htmlspecialchars($textarea);
    $textarea = urldecode($textarea);

    echo $textarea;


    


?>