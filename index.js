const name =document.getElementById('name');
const email =document.getElementById('email');
const phone =document.getElementById('phone');
const message =document.getElementById('message');
const submit =document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");

    Email.send({
        SecureToken : "08c80b8e-ff4b-4d17-bc29-d932cf0beb66",
        To : 'dhqbui246@gmail.com',
        From : "dhqbui246@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
    
})

