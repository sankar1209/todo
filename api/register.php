<?php

include 'config/header.php';

// get database connection
include_once 'config/config.php';

$data = json_decode(file_get_contents("php://input"));

  
$name = $data->user->name;
$email = $data->user->email;
  

$stmt = $mysqli->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if($result->num_rows === 0)
{
    $istmt = $mysqli->prepare("INSERT INTO `users`(`name`, `email`) VALUES (?, ?)");
    $istmt->bind_param("ss", $name, $email);
    $istmt->execute();
    
    $uid = $mysqli->insert_id;
    
    $istmt->close();
    
}
else
{
    while($row = $result->fetch_assoc()) {
      $uid = $row['id'];
      $name = $row['name'];
      $email = $row['email'];
    }
}
    
$stmt->close();
  

$data = array('id'=>$uid, 'name' => $name, 'email' => $email);

echo  json_encode($data);
exit; 
  
  
?>
