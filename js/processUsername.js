//need for everything, waits for the document 
//or page to load before this script belo can be executed
$(document).ready( function() {
// variable to hold request
// bind to the submit event of our form
//on the eventof the form being submitted
//$("#ajaxDemo2").submit(function(event){
$( "#UserName" ).blur(function() {
 
    // setup some local variables
	// (this) refers to the form itsself
	//this forms elements store in form variable
    var $form = $(this);
	//var fullName = $('input[name=fullName]').val();
	
	
    
 
    // serialize the data in the form
    //if you serialize you dont need to do this
    //$("#input_form").submit(function(){
    //var first name = $('input[name=first name]').val();
    //var last name = $('input[name=last name]').val();
    //var email = $('input[name=email]').val();
 
// serializedData is a string that contains form input variables
// The string is sent in the ajax request
	
	//all data from form is place in a querry string and seperaed with an amperstand symbol
	//in name/value pairs
    var serializedData = $form.serialize();
 
 
    // fire off the request to /form.php
    // request is a jqXHR object which handles the HTTP request and handles the callbacks 
    // of the request 
     
	

	
	var request;
	 
    request = $.ajax({
        //where data will be processed
        url: "process.php",
        //form method
        type: "post",
        //data from the form to be processed by test.php
        data: serializedData,
        //type of data to be returned to client(browser)
        dataType: "json"
    });
	
	//alert(request);
 
    // callback handler that will be called on success
    // response is the result of the processing by test.php, it is of type json
    // textStatus can be abort,error,notmodified,parsererror,success,timeout
    request.done(function (response, textStatus, jqXHR){
          //The json response object          
          //alert(response.returned_val);
          //Place the response in the div with id=result
          //you can access the response like you would an array
		  if(response.returned_val !=0){
         $("#result").html(response.returned_val);
		  }
		  //if the username is available
		  else{ 
		  $("#result").html("<span style='color:green;'>Username is Available!</span>");
		  }
    });
 
    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // alert the error
        alert( "Request failed: " + textStatus + errorThrown);
    });
 
    // prevent default posting of form
    event.preventDefault();
});




//check to see if th epassword is atleast 8 characters long
	$("#password").blur(function(){
	
	 var $form = $(this);
	
	 var serializedData = $form.serialize();
		
		
		var request;
	 
		request = $.ajax({
        //where data will be processed
        url: "passwordLength.php",
        //form method
        type: "post",
        //data from the form to be processed by test.php
        data: serializedData,
        //type of data to be returned to client(browser)
        dataType: "json"
    });
	
	 // callback handler that will be called on success
    // response is the result of the processing by test.php, it is of type json
    // textStatus can be abort,error,notmodified,parsererror,success,timeout
    request.done(function (response, textStatus, jqXHR){
          //The json response object          
          //alert(response.returned_val);
          //Place the response in the div with id=result
          //you can access the response like you would an array
		 if(response.password_val !=""){
        $("#result2").html(response.password_val);
		  }
		  //if the username is available
		  else{ 
		  $("#result2").html("<span style='color:green;'>Password meets the requirements!</span>");
		  }
         
		  
    });
 
    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // alert the error
        alert( "Request failed: " + textStatus + errorThrown);
    });
 
    // prevent default posting of form
    event.preventDefault();
});

});//ends all

