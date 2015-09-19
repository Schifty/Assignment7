<?php
//make a connnection to the database
$con = mysqli_connect("localhost","root","","vet");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
 //grab the username name eing entered
 $postUserName = $_POST['UserName'];
  
 //make the sql staement
$sql = "SELECT * FROM users where UserName='$postUserName'";

 //doing an sql query to see if the username exists
$result = mysqli_query($con,$sql);

//get the result in an associative array
$row=mysqli_fetch_array($result);

//see how many rows were returned
$rowcount = mysqli_num_rows($result);

//save the name exists message
$exists = 'Sorry that username already exist, choose another';





if($rowcount>0){
	//conver the data to array
$returnData = array('returned_val' =>$exists);

//convert the php array to json to be handled by javascript
echo json_encode($returnData);
}
//if the name doesnt exist
else{
//conver the data to array
$returnData = array('returned_val' => 0);

//convert the php array to json to be handled by javascript
echo json_encode($returnData);
}
mysqli_close($con);


?> 