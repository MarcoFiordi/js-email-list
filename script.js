'use strict'
const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailListElement = document.querySelector('#email-list');
const buttonGeneraElement = document.querySelector('#generate-btn');

function generaEmail() {

    emailListElement.innerHTML = '';

    for (let i = 0; i < 10; i++){
        
        fetch(apiUrl)
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            
            // prendo la mail
            const email = data.response;
            

            // creo elemento li
            const li = document.createElement('li');

            // inserisco la mail
            li.textContent = email;

            // aggiungo alla lista
            emailListElement.append(li);

            
        });
    }


}

// click sul bottone
buttonGeneraElement.addEventListener('click', generaEmail);

// generazione autamica all'avvio
generaEmail();