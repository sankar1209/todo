<?php


include 'config/header.php';

// get database connection
include_once 'config/config.php';

$data = json_decode(file_get_contents("php://input"));

  
$id = $data->item_obj->id;
$item = $data->item_obj->item;


$istmt = $mysqli->prepare("UPDATE `todo_items` SET  `item` = ? where id = ?");
$istmt->bind_param("si", $item, $id);
$istmt->execute();
    
$istmt->close();  

$data = array('status'=>'ok');

echo  json_encode($data);
exit; 
  
  
?>
