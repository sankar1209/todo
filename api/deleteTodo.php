<?php


include 'config/header.php';

// get database connection
include_once 'config/config.php';

$data = json_decode(file_get_contents("php://input"));

  
$id = $data->item_obj->id;

$istmt = $mysqli->prepare("DELETE FROM `todo_items` WHERE id = ?");
$istmt->bind_param("i", $id);
$istmt->execute();
    
$istmt->close();  

$data = array('status'=>'ok');

echo  json_encode($data);
exit; 
  
  
?>
