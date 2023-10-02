// XML-HTTP REQUEST:
// It is used to interact with the servers via api
// 4 important steps to perform the XML HTTP request

// Step 1: Create an XHR Object
var request=new XMLHttpRequest();
// {}
// Step 2:Opening a request
// It is in a inbuilt function, it takes 2 parameters
// HTTP METHOD,API LINK
request.open("GET","https://www.guvi.in/courses/?current_tab=myCourses");
// Step 3:Sending the request
request.send();
// Step:4 Once the data has been successfully received from the server
// status code:200
// Event:a specific task
// to perform some task we need events
// onload:this will be used when the data has been successfully loaded form server
// function:it is a set of code to perform some specific task
// conversion
request.onload=function(){
    var result=JSON.parse(Request.response);
    console.log( result);
}