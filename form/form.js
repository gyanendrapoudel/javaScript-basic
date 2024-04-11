const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let userEmail = email.value
     let userPassword =password.value
     console.log(`Email: ${userEmail}`)
     console.log(`Password: ${userPassword}`)

})