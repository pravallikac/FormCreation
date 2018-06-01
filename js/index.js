function validate(){
  var degree = document.getElementById("degree").value;
  var study = document.getElementById("study").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;
  var address =document.getElementById("address").value;
  
  var emailpattern = /^[a-z]+[a-z0-9\.\_]+[@]+[a-z\.]+[.]+[a-z]+$/;
  
  if(degree == 'Select'){
    document.getElementById("error").innerHTML = 'Please select degree type';
    document.getElementById("degree").focus();
    return false;
  }
  if(study == 'Select'){
    document.getElementById("error").innerHTML = 'Please select study type';
    document.getElementById("study").focus();
    return false;
  }
  if(fname.length == 0){
    document.getElementById("error").innerHTML = 'Please enter first name';
    document.getElementById("fname").focus();
    return false;
  }
  if(lname.length == 0){
    document.getElementById("error").innerHTML = 'Please enter last name';
    document.getElementById("lname").focus();
    return false;
  }
  if(email.length == 0 || !email.match(emailpattern)){
    document.getElementById("error").innerHTML = 'Please enter email ex. abc@xyz.com';
    document.getElementById("email").focus();
    return false;
  }
  if(tel.length == 0){
    document.getElementById("error").innerHTML = 'Please enter telphone';
    document.getElementById("tel").focus();
    return false;
  }
  if(address.length==0){
    document.getElementById("error").innerHTML = 'Please enter address';
    document.getElementById("address").focus();
    return false;
  }
  
}
function Degree(value){
  if(value != 'Select'){
    document.getElementById("error").innerHTML = '';
    document.getElementById("study").disabled=false;
    document.getElementById("study").style.background='';
   document.getElementById("study").focus(); document.getElementById("study").options[0].innerHTML='select study type';
  }
  else{
    document.getElementById("study").disabled=true;
   document.getElementById("study").options[0].innerHTML='Select degree from above'; 
   document.getElementById("study").options[0].selected=true;  document.getElementById("study").style.background='lightgray';
  }
}
function myFunction() {
    alert("The form was submitted");
}