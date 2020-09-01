<?php


include 'config/header.php';

// get database connection
include_once 'config/config.php';

$data = json_decode(file_get_contents("php://input"));

  
$id = $data->item_obj->id;
$item = $data->item_obj->item;
$sts  = 0;
  


$istmt = $mysqli->prepare("INSERT INTO `todo_items`(`user_id`, `item`, `status`) VALUES (?,?,?)");
$istmt->bind_param("isi", $id, $item, $sts);
$istmt->execute();
    
$istmt->close();  

$data = array('status'=>'ok');

echo  json_encode($data);
exit; 
  
  
?>
