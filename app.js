var email = document.getElementById("email");
var password = document.getElementById("password");
var autMassage = document.getElementById("message");
function btn1(){
var req = email.value;
if(req.slice(req.length - 4) === ".com"){
var users = localStorage.getItem("users");
console.log(users)
var userExit = false;
if(users === null){
users =[];
}
else{
users = JSON.parse(users);
console.log(users);
}
var user = {
email : email.value,
password : password.value
}
for(var i= 0; i < users.length; i++){
if(users[i].email === email.value){
userExit = true;
}
}
if(userExit === true){
    autMassage.innerHTML = "user already Exists!";
}
else{
users.push(user);
users = JSON.stringify(users);
localStorage.setItem("users", users);
email.value = "";
password.value = "";

autMassage.innerHTML = "seccessfully signup!"
}

}
else{
alert("inviled velue");
}

}
function login(){
   
  
var users=localStorage.getItem("users");
console.log(users);
var user = {
email : email.value,
password : password.value
}

if(users === null){
users = [];   
}

else{
users = JSON.parse(users);   
}
var check1 = false;
for(i = 0; i < users.length; i++){
if(users[i].email === email.value&&users[i].password === password.value){
check1 = true                 
}
}
if(check1 === false){
autMassage.innerHTML = "login faild"
} 
else{
window.location.href = ("all/index.html");
var newUser = JSON.stringify(user);
localStorage.setItem("newUser", newUser)
email.value = "";
password.value= "";
}
}
    
    
    
 