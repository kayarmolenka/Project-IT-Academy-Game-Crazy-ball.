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
        
        let closeRegistration = document.querySelector('.close_btn_window_registration');
        let modalRegistration = document.querySelector('.container_modal');


        closeRegistration.addEventListener('click', (e) => {
            modalRegistration.remove();
        });
    });

    
    
   
   
}

export default closeWindowLogin;