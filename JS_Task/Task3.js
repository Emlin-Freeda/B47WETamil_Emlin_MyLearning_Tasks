//RESUME DATA IN JSON FORMAT:

let myResume={
    "MyDetails": {
      "Name": "Emlin Freeda P",
      "EmailId": "emy199806now22@gmail.com",
      "Contact": 9791572259,
      "Degree": "MCA",
      "Address": {
        "DoorNo": "270,Big street",
        "postalCode": 614602,
        "city": "Thanjavur",
        "state": "Tamilnadu",
        "country": "India"
      },
    },
    "WorkExperience": [
      {
        "Company": "Infosys pvt ltd",
        "Designation": "Systems Engineer",
        "TotalExperience": "2 years",
      },
    ],
    "Education": [
      {
        "College": "Bishop Heber College",
        "Department": "Computer Application",
        "Passed Out": 2020,
        "cgpa": 8.27,
      }
    ],
    "skills": [
      {
        "ProgrammingLanguage": "Java, Spring, JavaScript, Html",
        "DataBase":"MySQL, Oracle SQL, MongoDB",
        "project": [
          "Poultry Management System"
        ]
      }
    ],
    "languagesKnown": [
      {
        "language": "Tamil,English",
      }
    ],
  }
  console.log(myResume);

// Iterations of JSON DATA 

var json = [{
    "Name" : "Emy", 
    "Greeting"   : "Good Morning , Have a great day!!!"
},
{
    "Name" : "Rose", 
    "Greeting"   : "Good Morning , Have a great day!!!"

}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.Name);
    console.log(obj.Greeting);
    

}
//for Each
json.forEach(function(obj) { console.log(obj.Greeting); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].Name);
  console.log(json[key].Greeting);
 
}
}
//for Of
let text = "";
for (let x of json[key].Name) {
 text += x; 
}
 console.log(text);

//  





  