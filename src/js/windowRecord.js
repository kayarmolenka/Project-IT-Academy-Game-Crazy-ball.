import {root} from './script';


function createWindowRecord() {

    let modal, containerRecord;

    function createModal() {
        modal = document.createElement('div');
        modal.classList.add('modal_record');
        root.appendChild(modal);
    }

    function createDark() {
        const dark = document.createElement('div');
        dark.classList.add('dark_record');
        root.appendChild(dark);
    }
    function createClose() {
        const closeBtn = document.createElement('i');
        closeBtn.classList.add('fas', 'fa-times', 'close_btn_window_record');
        modal.appendChild(closeBtn);
    }

    createModal();
    createDark();
    createClose();

    function createHeader() {
        const div = document.createElement('div');
        div.classList.add('header_record');
        div.textContent = 'List of records';
        modal.appendChild(div);
    }
    createHeader();

    function createContainerRecord() {
        containerRecord = document.createElement('div');
        containerRecord.classList.add('container_record');
        modal.appendChild(containerRecord);
    }
    createContainerRecord();

    function createManyDiv(text) {
        const div = document.createElement('div');
        div.classList.add('cel_record');
        div.textContent = text;
        containerRecord.appendChild(div);
    }

    createManyDiv('№');
    createManyDiv('Name');
    createManyDiv('Points');

    let num = 1;
    const getPointsLocalStorage = JSON.parse(localStorage.getItem('points'));
    if(getPointsLocalStorage) {
        getPointsLocalStorage.sort((a,b) => b.points - a.points).forEach(person => {
            if(Object.keys(person).length > 1) {
                // if(person.points < 999) {
                //     person.points = `0${person.points}`;
                // }
                createManyDiv(num);
                createManyDiv(person.name);
                createManyDiv(person.points);
                num++;
            }
        });
    }
    function closeWindowRecord() {
        const d = document.querySelector('.dark_record'),
        m = document.querySelector('.modal_record'),
        iconsClose = document.querySelector('.close_btn_window_record');

        window.addEventListener('click', e => {
            if(e.target === d) {
                m.remove();
                d.remove(); 
            }
        });
        
        iconsClose.addEventListener('click', () => {
            m.remove();
            d.remove();  
        })
    }
    closeWindowRecord();
}

export default createWindowRecord;