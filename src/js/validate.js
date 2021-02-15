import {btn, form} from './windowRegistr.js';



function actionBtn() {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('change_color_button'); //change the style of the button
    });

    btn.addEventListener('mouseout', () => {
        btn.classList.toggle('change_color_button'); //change the style of the button
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const inputName = document.querySelector('#input_1'),
              inputEmail = document.querySelector('#input_2'),
              inputPas = document.querySelector('#input_3'),
              inputPasRep = document.querySelector('#input_4'),        
              i1 = document.querySelector('#form_modal_icon_1'),
              i2 = document.querySelector('#form_modal_icon_2'),
              i3 = document.querySelector('#form_modal_icon_3'),
              i4 = document.querySelector('#form_modal_icon_4'),
              s1 = document.querySelector('#small_name'),
              s2 = document.querySelector('#small_email'),
              s3 = document.querySelector('#small_password'),
              s4 = document.querySelector('#small_repeat_passwords');
     
        if(inputPas.value !== inputPasRep.value) {
            i3.classList.add('i_error');
            i4.classList.add('i_error');
            inputPas.classList.add('input_error');
            inputPasRep.classList.add('input_error');
            s3.classList.add('small_visible');
            s4.classList.add('small_visible');
            s3.textContent = 'incorrect password';
            s4.textContent = 'incorrect password';
        } else {
            i3.classList.add('i_super');
            i4.classList.add('i_super');
            inputPas.classList.add('input_success');
            inputPasRep.classList.add('input_success');
            btn.classList.add('btn_success');
            btn.classList.remove('change_color_button');
        }    
    });

}

export default actionBtn;
