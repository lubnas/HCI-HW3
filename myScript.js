function storeText(inputID, usera, userplace) {

   
//check to see if the localStorage item already exists
var userInput = sessionStorage.userInfo;
var usersarea = sessionStorage.userd;
var usercol= sessionStorage.usercoll; 
   
//set it up for new data to be appended
if( userInput !=null) userInput+=" ";
else userInput="";
    
    if( usersarea !=null) usersarea+=" ";
else usersarea="";
    
 if( usercol !=null) usercol+=" ";
else usercol="";
    
//add the new data
userInput = document.getElementById(inputID).value;
usersarea = document.getElementById(usera).value;
usercol = document.getElementById(userplace).value;
   // if(document.getElementById(userpriv).checked) usertype += document.getElementById(userpriv).value;
  //  else usertype += document.getElementById(userpub).value;
   
     window.location.href = "published.html";
//set the localStorage field with the updated data
sessionStorage.userInfo = userInput;
sessionStorage.userd = usersarea;
sessionStorage.usercoll = usercol;
    
//window.location.href = "published.html";
}

function printInfo(){
document.getElementById("titleresult").innerHTML = sessionStorage.userInfo ;
    document.getElementById("descresult").innerHTML = sessionStorage.userd ;
    document.getElementById("colresult").innerHTML = sessionStorage.usercoll ;

}
/*function onload{
    //write it to the page
document.getElementById("result").innerHTML = localStorage.userInfo + " - entered to date";
}
 
function storeevent(){
    
    var usertext= localStorage.setItem('');
}*/