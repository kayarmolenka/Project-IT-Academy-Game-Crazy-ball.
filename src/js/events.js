import {closeBtn, modal, dark, linkRegistration} from './windowLogin';
import callRegistrationWindow from './windowRegistr.js';
import actionBtn from './validate.js';
import {btn, form} from './windowRegistr.js';
import {createContentHeader} from './script';
import {linkLogReg} from './script';

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
            

            inputPasRep.addEventListener('input', () => {
                const pas1Value = inputPas.value.split(''),
                      pas2Value = inputPasRep.value.split(''),
                      i1 = document.querySelector('#form_modal_icon_1'),
                      i2 = document.querySelector('#form_modal_icon_2'),
                      i3 = document.querySelector('#form_modal_icon_3'),
                      i4 = document.querySelector('#form_modal_icon_4'),
                      s1 = document.querySelector('#small_name'),
                      s2 = document.querySelector('#small_email'),
                      s3 = document.querySelector('#small_password'),
                      s4 = document.querySelector('#small_repeat_passwords');
               
                for(let i = 0; i < pas2Value.length; i++) {
                    if(pas1Value[i] !== pas2Value[i]) {
                        i3.classList.add('i_error', 'fa-exclamation-circle');
                        i4.classList.add('i_error', 'fa-exclamation-circle');
                        i3.classList.remove('i_super', 'fa-check-circle');
                        i4.classList.remove('i_super', 'fa-check-circle');
                        inputPas.classList.add('input_error');
                        inputPasRep.classList.add('input_error');
                        s3.classList.add('small_visible');
                        s4.classList.add('small_visible');
                        s3.textContent = 'incorrect password';
                        s4.textContent = 'incorrect password';
                        break;
                    } else {
                        if(pas1Value.length === pas2Value.length && i === pas2Value.length - 1) {
                            i3.classList.add('i_super');
                            i4.classList.add('i_super');
                            inputPas.classList.add('input_success');
                            inputPasRep.classList.add('input_success');
                            btn.classList.add('btn_success');
                            btn.classList.remove('change_color_button');
                            i3.classList.remove('i_error', 'fa-exclamation-circle');
                            i4.classList.remove('i_error', 'fa-exclamation-circle');
                            s3.classList.remove('small_visible');
                            s4.classList.remove('small_visible');
                        }
                    }
                }
                
            });
            
        }
    });

    const inputNameLogin = document.querySelector('#input_name'),
          inputPasLogin =  document.querySelector('#input_pas'),
          btnLodIn =  document.querySelector('.button_registr'),
          arrayUsersLocalStorage = JSON.parse(localStorage.getItem('arr'));
    
    //checking username and password at login

     btnLodIn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const name = inputNameLogin.value,
              password = inputPasLogin.value;
        for (let a of arrayUsersLocalStorage) {
            if(a.name === name && a.password === password) {
                linkLogReg.style.display = 'none';
                modal.remove();
                dark.remove();  
                console.log(linkLogReg)
                createContentHeader(name)
                break; 
            } else if(a.name === name && a.password !== password) {
                alert('Пароль не верен'); 
                break; 
            } else {
                alert('Вы не зареганы');
                break; 
            }
        }       
        
    })

          console.log(inputNameLogin)
          console.log(inputPasLogin)
          console.log(btnLodIn)
          console.log(linkLogReg)


   
          

   
}

export default closeWindowLogin;