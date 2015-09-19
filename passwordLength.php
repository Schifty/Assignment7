<?php
// get the password  and save it as a var
$postpassword = $_POST['password'];
//echo $postpassword; exit;
//check to see if the user has entered into the text field

//save the name exists message
$short="";
$PasswordOK = array('password_val' =>$short);

if(!empty($postpassword)) {
//do a sting count and save it a s a var
$plength = strlen($postpassword);

//check to see if the password is at least 8 char
if($plength < 8 ){
	//conver the data to array
	$short = 'your pssword must  have at least 8 characters';
	$PasswordOK = array('password_val' =>$short);
	
	
}//ends if plength

//convert the php array to json to be handled by javascript
echo json_encode($PasswordOK);
}//!empty












