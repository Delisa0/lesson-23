function Validate(e){
    e.preventDefalt();
    const email=document.getElementById('email').value;
    const pass=document.getElementById('passowrd').value;
    const age=document.getElementById('age').value;
    const msgBox=document.getElementById('message');
    let message=' '
if (email === ' '){
    message='please enter an email.'
}  else if (pass === ' ') {
    message='Password must be at least 8 characters'
    msgBox.style.color='red';
} else if (age === ''){
    mesage='Age must be between 13 and 80';
    msgBox.style.color='red';
}
else{
    message='login succesful!';
    msgBox.style.color='green';
}
msgBox.innerText=message;
}