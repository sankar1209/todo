<?php


include 'config/header.php';

// get database connection
include_once 'config/config.php';

$data = json_decode(file_get_contents("php://input"));

  
$id = $data->item_obj->id;
$sts = $data->item_obj->sts;
  


$istmt = $mysqli->prepare("UPDATE `todo_items` SET status = ? WHERE id = ?");
$istmt->bind_param("ii", $sts, $id);
$istmt->execute();
    
$istmt->close();  

$data = array('status'=>'ok');

echo  json_encode($data);
exit; 
  
  
?>
