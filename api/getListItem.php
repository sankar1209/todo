<?php

//include header
include 'config/header.php';

// get database connection
include_once 'config/config.php';


$id = $_REQUEST['id'];


//Get items

$stmt = $mysqli->prepare("SELECT * FROM `todo_items` WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();

$result = $stmt->get_result();

$items = array();
if($result->num_rows != 0)
{
    while($row = $result->fetch_assoc())
    {
        $i['id'] = $row['id'];
        $i['item'] = $row['item'];
        $i['status'] = $row['status'];
        
        array_push($items, $i);
        
    }
}

echo json_encode(array('item'=>$items));
exit;

?>
