function validation(){
    if(document.RegForm.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
}