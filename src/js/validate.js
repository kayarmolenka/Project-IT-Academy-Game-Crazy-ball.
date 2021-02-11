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
        console.dir(form)
        const inputName = form[0],
              inputEmail = form[1],
              inputPas = form[2],
              inputPasRep = form[3];
        
        const i1 = form.ownerDocument.all[62],
              i2 = form.ownerDocument.all[67],
              i3 = form.ownerDocument.all[72],
              i4 = form.ownerDocument.all[77],
              s1 = form.ownerDocument.all[63],
              s2 = form.ownerDocument.all[68],
              s3 = form.ownerDocument.all[73],
              s4 = form.ownerDocument.all[78];

        if(inputPas.value !== inputPasRep.value) {
            inputPas.classList.add('input_error');
            inputPasRep.classList.add('input_error');
            i3.classList.remove('fas', 'fa-check-circle');
            i3.classList.add('fas', 'fa-exclamation-circle', 'i_error');
            i4.classList.remove('fas', 'fa-check-circle');
            i4.classList.add('fas', 'fa-exclamation-circle', 'i_error');
            s3.innerHTML = 'password is incorrect';
            s3.classList.add('small_visible');
            s4.classList.add('small_visible');
        } else {                                           //change the style of the icon
            inputPas.classList.add('input_success');
            inputPasRep.classList.add('input_success');
            i3.classList.add('i_super');
            i4.classList.add('i_super');
            s3.classList.remove('small_visible');
            s4.classList.remove('small_visible');
            i3.classList.add('fa-check-circle');
            i3.classList.remove('fa-exclamation-circle', 'i_error');
            i4.classList.add('fa-check-circle');
            i4.classList.remove('fa-exclamation-circle', 'i_error');
            btn.style.background = 'green';
            btn.style.border = '1px solid green';
        } 
    });

}






export default actionBtn;
