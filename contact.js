const name =document.getElementById('name');
const email =document.getElementById('email');
const phone =document.getElementById('phone');
//Add event listener on form container...
const submit =document.getElementsByClassName('contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Clicked");
    // Email code here...
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "groupeheri1@hmail.com",
        Password : "8F2EC2413A46FF50A436B46CD5BB1FCB5CEA",
        To : 'groupeheri1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
    

})
