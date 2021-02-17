import {closeBtn, modal, dark, linkRegistration} from './windowLogin';
import callRegistrationWindow from './windowRegistr.js';
import actionBtn from './validate.js';



function closeWindowLogin() {
  

    closeBtn.addEventListener('click', () => {
        modal.remove();
        dark.remove();    
    });

    linkRegistration.addEventListener('click', () => {
        modal.remove();
        dark.remove();
        callRegistrationWindow();
        actionBtn();
        
        const closeRegistration = document.querySelector('.close_btn_window_registration');
        const modalRegistration = document.querySelector('.container_modal');


        closeRegistration.addEventListener('click', (e) => {
            modalRegistration.remove();
        });

        modalRegistration.addEventListener('click', () => {
            const inputName = document.querySelector('#input_1'),
                  inputEmail = document.querySelector('#input_2'),
                  inputPas = document.querySelector('#input_3'),
                  inputPasRep = document.querySelector('#input_4'),
                  user = {
                    name: inputName.value,
                    email: inputEmail.value,
                    password: inputPas.value   
                  },
                  arrayPerson = [];
            
            localStorage.setItem('objPersons', JSON.stringify(user));

            const newUsers = JSON.parse(localStorage.getItem('objPersons')); 
            
            arrayPerson.push(newUsers);

            console.log(arrayPerson)
            
        });
    });

    
    
   
   
}

export default closeWindowLogin;