import {btn} from './modal_Login.js';



function actionBtn() {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('change_color_button'); 
    });

    btn.addEventListener('mouseout', () => {
        btn.classList.toggle('change_color_button');
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        console.dir(e.path[1])
        let o = e.path[1];
        console.log(o.elements[0]);
        console.log(o.elements[1]);
        let i2 = o.elements[2];
        let i3 = o.elements[3];

        if(i2.value !== i3.value) {
            i2.style.border = '2px solid red';
            i3.style.border = '2px solid red';
        } else {
            i2.style.border = '2px solid green';
            i3.style.border = '2px solid green';
        } 
    });

}






export default actionBtn;
