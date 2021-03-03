import {closeBtn, modal, dark, linkRegistration} from './windowLogin';
import callRegistrationWindow from './windowRegistr.js';
import actionBtn from './validate.js';
import {btn, form} from './windowRegistr.js';
import {createContentHeader} from './script';
import {linkLogReg} from './script';

export let saveNamePlayer;

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
              btnRegistration = document.querySelector('.btn_modal_registration_form'),
              dark2 = document.querySelector('.dark');

        closeRegistration.addEventListener('click', () => {
            modalRegistration.remove();
            dark2.remove(); 
        });
        
        //localStorage 
        btnRegistration.addEventListener('click', e => {
            const inputName = document.querySelector('#input_1'),
                  inputEmail = document.querySelector('#input_2'),
                  inputPas = document.querySelector('#input_3'),
                  inputPasRep = document.querySelector('#input_4'),
                  user = {
                    name: inputName.value,
                    email: inputEmail.value,
                    password: inputPas.value   
                  },
                  messageErrorEmail = document.querySelector('#small_email'),
                  messageErrorName = document.querySelector('#small_name'),
                  arrayPerson = JSON.parse(localStorage.getItem('arr')) || [];
            
                  const dataLocal = JSON.parse(localStorage.getItem('arr'));
                  if(dataLocal == null) {
                    arrayPerson.push(user);
                    localStorage.setItem('arr', JSON.stringify(arrayPerson));
                  } else {
                        const email = dataLocal.map(element => element.email);
                        const name = dataLocal.map(element => element.name);
                        
                        for(let i = 0; i < email.length; i++) {
                            if(inputName.value === '' || inputEmail.value === '' || inputPas.value === '' || inputPasRep.value === '') {
                                messageErrorName.setAttribute('class', 'small_visible');
                                messageErrorName.textContent = 'You did not fill in all the fields';
                                break;
                            } else if(inputName.value === name[i] && inputEmail.value === email[i]) {
                                messageErrorName.setAttribute('class', 'small_visible');
                                messageErrorName.textContent = 'This name is already in use';
                                messageErrorEmail.setAttribute('class', 'small_visible');
                                messageErrorEmail.textContent = 'This email is already in use';
                                break;
                            } else if(inputName.value === name[i]) {
                                messageErrorName.setAttribute('class', 'small_visible');
                                messageErrorName.textContent = 'This name is already in use';
                                break;
                            } else if(inputEmail.value === email[i]) {
                                messageErrorEmail.setAttribute('class', 'small_visible');
                                messageErrorEmail.textContent = 'This email is already in use';
                                break;
                            } else {
                                arrayPerson.push(user);
                                localStorage.setItem('arr', JSON.stringify(arrayPerson));
                                break;
                            }
                        }
                  }
        })                      
        //checking username and password at registration
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
          errorMessage = document.querySelector('.message_error_window_login'),
          arrayUsersLocalStorage = JSON.parse(localStorage.getItem('arr'));
    
    //checking username and password at login
    

     btnLodIn.addEventListener('click', e => {
        e.preventDefault();
        const dataLocal = JSON.parse(localStorage.getItem('arr')),
              password = dataLocal.map(element => element.password),
              name = dataLocal.map(element => element.name);
        
        for(let i = 0; i < password.length; i++) {  
            if(inputNameLogin.value === '' || inputPasLogin.value === '') {
                errorMessage.style.visibility = 'visible';
                errorMessage.innerHTML = 'You did not fill in the fields';
            } else if(name[i] === inputNameLogin.value && password[i] === inputPasLogin.value) {
                linkLogReg.style.display = 'none';
                modal.remove();
                dark.remove();
                createContentHeader(name[i]);
                saveNamePlayer = name[i];
            } else if(name[i] === inputNameLogin.value && password[i] !== inputPasLogin.value) {
                errorMessage.style.visibility = 'visible';
                errorMessage.innerHTML = 'Password incorrect';
                break;
            } else {
                errorMessage.style.visibility = 'visible';
                errorMessage.innerHTML = 'Such user is not registered';
            }
        }
    })
    // close modal window click of dark
    window.addEventListener('click', e => {
        if(e.target === dark) {
            modal.remove();
            dark.remove(); 
        }
    })
}

export default closeWindowLogin;