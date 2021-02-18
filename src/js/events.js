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
        
        const closeRegistration = document.querySelector('.close_btn_window_registration'),
              modalRegistration = document.querySelector('.container_modal'),
              btnRegistration = document.querySelector('.btn_modal_registration_form');

        closeRegistration.addEventListener('click', (e) => {
            modalRegistration.remove();
        });

        //localStorage 
        btnRegistration.addEventListener('click', () => {
            const inputName = document.querySelector('#input_1'),
                  inputEmail = document.querySelector('#input_2'),
                  inputPas = document.querySelector('#input_3'),
                  inputPasRep = document.querySelector('#input_4'),
                  user = {
                    name: inputName.value,
                    email: inputEmail.value,
                    password: inputPas.value   
                  },
                  arrayPerson = JSON.parse(localStorage.getItem('arr')) || [];
                       
            arrayPerson.push(user);
              
            localStorage.setItem('arr', JSON.stringify(arrayPerson));
        });

        {
            const inputName = document.querySelector('#input_1'),
                  inputEmail = document.querySelector('#input_2'),
                  inputPas = document.querySelector('#input_3'),
                  inputPasRep = document.querySelector('#input_4');
            let pas1Value = inputPas.value.split('');
            let pas2Value = inputPasRep.value.split('');

            inputPasRep.addEventListener('input', () => {
                for(let i = 0; i < pas1Value.length; i++) {
                    if(pas1Value[i] !== pas2Value[i]) {
                        console.log('Пароли не верны');
                        break;
                    } else {
                        if(pas1Value.length === pas2Value.length && i === pas2Value.length - 1) {
                            console.log('Пароли верны');
                        }
                    }
                }
                console.log(pas1Value)
            console.log(pas2Value)
            });
            
        }
            
           
        
    });

    const inputNameLogin = document.querySelector('#input_name'),
          inputPasLogin =  document.querySelector('#input_pas'),
          btnLodIn =  document.querySelector('.button_registr');

    btnLodIn.addEventListener('click', () => {

    })

          console.log(inputNameLogin)
          console.log(inputPasLogin)
          console.log(btnLodIn)


   
          

   
}

export default closeWindowLogin;