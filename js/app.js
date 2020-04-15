// let cleanestCities = ['toyota', 'mazda', 'honda', 'infinity', 'kia'];
// let cityToCheck = prompt('quess a car on the list');
// cityToCheck.toLowerCase();




// var matchFound = false;
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
// }
// if (matchFound === false) {
//     alert("It's not on the list");

// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);

//     }
// }
// console.log(fullNames);


// const name = 'regina';
// const newName = Array.from(name);
// let otherName = newName.slice(0, 1 );

// console.log(otherName);

// let userName = prompt('what is your name');
// let newUser = Array.from(userName);

// let defaultPro = newUser.slice(0, 1);
// console.log(defaultPro);


const userProfile = document.querySelector('.user-tool');
const regCard = document.querySelector('.registration-card');
const submitButton = document.getElementById('submit-btn');
let userEmail = document.querySelector('.user-name p');
let userName = document.querySelector('.user-name h4');
let userText = document.querySelector('.user-bio p');
const loader = document.querySelector('.loader');
const defaultPic = document.querySelector('.profile-pic p');




const firstName = document.getElementById('firstName');
const secondName = document.getElementById('lastName');
const email = document.getElementById('email');
const text = document.getElementById('text');

class formValidations{
    static errorMsg(message){
        message.style.background = 'rgba(255, 0, 0, 0.288)';
        setTimeout(remove, 3000);
        message.focus();

        function remove(){
            message.style.background = '';
        }
    }

   
}




submitButton.addEventListener('click', function (e) {
    loader.style.display = 'block'
    setTimeout(validateProfile, 3000);
    e.preventDefault();
})


function validateProfile() {
    if (firstName.value && secondName.value && email.value && text.value) {

        let newabrr1 = firstName.value[0];

        console.log(newabrr1);
        defaultPic.appendChild(document.createTextNode(newabrr1));
        userEmail.textContent = email.value;
        userName.textContent = `${firstName.value.toUpperCase()} ${secondName.value.toUpperCase()}`;
        userText.textContent = text.value;
        regCard.classList.add('move');
        setTimeout(moveUp, 1000);
        loader.style.display = 'none';

    } else if(firstName.value === ''){
        formValidations.errorMsg(firstName);
        loader.style.display = 'none';
    }
    else if(secondName.value === ''){
        // alert('enter last name');
        formValidations.errorMsg(secondName);
        loader.style.display = 'none';
    }
    else if(email.value === ''){
        // alert('enter email');
        formValidations.errorMsg(email);
        loader.style.display = 'none';
    }
    else if(text.value === ''){
        // alert('say something');
        formValidations.errorMsg(text);
        loader.style.display = 'none';
    }
    
    else {
        return false;

    }
    function moveUp() {
        userProfile.classList.add('up');
    }
}



















