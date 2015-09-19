<!DOCTYPE html>
<html>
<head>
<title>Ajax Demo2</title>
<!--load the jquery librray from google, keep it on top to load it first as its need to load other things-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!--load our script for the form we made-->
<script type="text/javascript" src="js/processUserName.js"></script>
</head>

<body>
<h1>Ajax Demo</h1>

<!--ajax dooes not need an action on a form-->
<form id="ajaxDemo2" name="ajaxDemo2" method="post" >
	User Name:<br>
	<input type="text" id="UserName" name="UserName">
	<div style="color:red" id="result">&nbsp;</div><!--ends the div with id result-->

	Password:<br>
	<input id="password" type="password" name="password">
	<div style="color:red" id="result2">&nbsp;</div><!--ends the div with id result-->
	<br>
	<input name="Submit" type="submit" value="submit">
</form>


</body>
</html>