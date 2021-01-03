var userName = document.getElementById("username").value;

var passWord = document.getElementById("password").value;

var errorMessageName = document.getElementById("errorName");

var errorMessagePass = document.getElementById("errorPass");

var users = ['zumthezazaking','humthehahaking'];

var passwords = ['12345678', 'password']


function login(){

    errorMessageName.classList.add('hide');

    errorMessagePass.classList.add('hide');

    var userName = document.getElementById("username").value;

    var passWord = document.getElementById("password").value;

    if (userName == users[0]){

        if (passWord == passwords[0]){
    
            window.location.href = 'next.html';
    
        } else {

            errorMessagePass.classList.remove('hide');

            document.getElementById("password").value = '';
    
            errorMessagePass.innerHTML = 'Incorrect Password';
    
        }
    
    } else if (userName == users[1]){
    
        if (passWord == passwords[1]){
    
            window.location.href = 'next.html';
    
        } else {

            errorMessagePass.classList.remove('hide');

            document.getElementById("password").value = '';
    
            errorMessagePass.innerHTML = 'Incorrect Password';
    
        }
    
    } else if (userName == ''){

        errorMessageName.classList.remove('hide');
    
        errorMessageName.innerHTML = 'Please Enter Username';
    
    } else {

        errorMessageName.classList.remove('hide');

        document.getElementById("username").value = '';
    
        errorMessageName.innerHTML = 'Invalid Username';
    
    }

}

