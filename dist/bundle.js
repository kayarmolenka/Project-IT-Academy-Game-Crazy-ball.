/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "linkLogReg": () => (/* binding */ linkLogReg)
/* harmony export */ });
/* harmony import */ var _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowRegistr.js */ "./src/js/windowRegistr.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate.js */ "./src/js/validate.js");
/* harmony import */ var _windowLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowLogin */ "./src/js/windowLogin.js");





const root = document.querySelector('.root');
let container, inputFile, imgAccount, labelAccount, header;

function createHeader () {
    header = document.createElement('header');
       
    header.classList.add('header');
        
    root.appendChild(header);
}

createHeader();

function createContentHeader() {
    const  div = document.createElement('div'),
           a = document.createElement('a');

    imgAccount = document.createElement('img'),
    inputFile = document.createElement('input');
    labelAccount = document.createElement('label');

    imgAccount.setAttribute('src', 'img/account_icon.png');
    imgAccount.setAttribute('alt', 'account_img');
    imgAccount.classList.add('img_account');
    div.textContent = 'Username';
    a.classList.add('list_acc');
    inputFile.setAttribute('type', 'file');
    inputFile.setAttribute('id', 'account_file');
    labelAccount.setAttribute('for', 'account_file');
    labelAccount.setAttribute('id', 'label_account');

    labelAccount.append(inputFile, imgAccount);
    a.append(div, labelAccount);
    header.append(a);
}

// createContentHeader();

// inputFile.addEventListener('change', (event) => {
//     const selectedFile = event.target.files[0];
//     const reader = new FileReader();
    
//     imgAccount.title = selectedFile.name;
      
//     reader.onload = function(event) {
//         imgAccount.src = event.target.result;
//     };
//     reader.readAsDataURL(selectedFile);
// })
let linkLogReg;
function createHeaderLoginRegistration() {
    linkLogReg = document.createElement('a');

    linkLogReg.classList.add('link_log_reg');
    linkLogReg.textContent = 'Log in / Registration';

    header.append(linkLogReg);
}

createHeaderLoginRegistration();

(0,_windowLogin__WEBPACK_IMPORTED_MODULE_2__.default)();



function createContainer() {
    container = document.createElement('div');
    container.classList.add('container');
    root.appendChild(container);
}

createContainer();

function createLink (title, id) {
    let a = document.createElement('a');

    a.innerHTML = title;
    a.classList.add('a');
    a.setAttribute('href', '#');
    a.setAttribute('id', id);      
    container.appendChild(a);
}

createLink('Main', 'main');
createLink('Record', 'record');
createLink('Help', 'help');
// createLink('registration', 'log_in');
// createLink('LOGIN', 'log');


// const linkLog = document.querySelector('#log');
// const linkReg = document.querySelector('#log_in');

// linkLogReg.addEventListener('click', () => {
//     callRegistrationWindow();
//     actionBtn();                                    window registration

// });





/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowRegistr.js */ "./src/js/windowRegistr.js");




function actionBtn() {
    _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.addEventListener('mouseover', () => {
        _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.classList.add('change_color_button'); //change the style of the button
    });

    _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.addEventListener('mouseout', () => {
        _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.classList.toggle('change_color_button'); //change the style of the button
    });

    _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.dir(_windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form)
        const inputName = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form[0],
              inputEmail = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form[1],
              inputPas = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form[2],
              inputPasRep = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form[3];
        
        const i1 = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form.ownerDocument.all[62],
              i2 = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form.ownerDocument.all[67],
              i3 = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form.ownerDocument.all[72],
              i4 = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form.ownerDocument.all[77],
              s1 = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form.ownerDocument.all[63],
              s2 = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form.ownerDocument.all[68],
              s3 = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form.ownerDocument.all[73],
              s4 = _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.form.ownerDocument.all[78];

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
            _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.style.background = 'green';
            _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.style.border = '1px solid green';
        } 
    });

}






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionBtn);


/***/ }),

/***/ "./src/js/windowLogin.js":
/*!*******************************!*\
  !*** ./src/js/windowLogin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/js/script.js");


function m () {

let a, header, modal, form;

function createHeader() {
    header = document.createElement('header');
    document.body.appendChild(header);
}
createHeader();

function createModal() {
    modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);
}

function createDark() {
    const dark = document.createElement('div');
    dark.classList.add('dark');
    document.body.appendChild(dark);
}


function createHeaderModal() {
    let headerModal = document.createElement('div');

    headerModal.textContent = 'LOG IN';
    headerModal.classList.add('header_modal');
    modal.appendChild(headerModal);
}



function createLinks(nameLink, NameClassLink){
    const ul = document.createElement('ul'),
        li = document.createElement('li'),
        icon = document.createElement('i');
    a = document.createElement('a');

    a.classList.add(NameClassLink);

    a.textContent = nameLink;
    icon.classList.add('fa', 'fa-sign-in');

    a.appendChild(icon);
    li.appendChild(a);
    ul.appendChild(li);
    header.appendChild(ul);
}

createLinks('Log in','link_login');

function createForm() {
    form = document.createElement('form');
    form.classList.add('form_modal');
    modal.appendChild(form);
}

function createInput(ID, NamePlaceholder, TypeInput,labelFor, labelText,labelID) {
    const input = document.createElement('input'),
        label = document.createElement('label'),
        divInput = document.createElement('div');

    input.setAttribute('type', TypeInput);
    input.setAttribute('placeholder', NamePlaceholder);
    divInput.classList.add('form_row'); 
    input.setAttribute('id', ID);
    label.setAttribute('for', labelFor);
    label.setAttribute('id', labelID);
    label.textContent = labelText;


    divInput.appendChild(input);  
    divInput.appendChild(label);  
    form.appendChild(divInput); 

}

function createLinkForgot() {
    let linkForgot = document.createElement('a'),
        divAnhor = document.createElement('div');

    divAnhor.classList.add('form_forgot'); 
    linkForgot.classList.add('link_forgot'); 
    linkForgot.textContent = 'Forgot Password?'; 

    divAnhor.appendChild(linkForgot);
    form.appendChild(divAnhor);
}

let btn;
function createButton() {
    btn = document.createElement('button');
    let containerBtn = document.createElement('div'); 

    containerBtn.classList.add('form_row', 'form_button'); 
    btn.classList.add('button_registr');
    btn.textContent = 'LOG IN';

    containerBtn.appendChild(btn);
    form.appendChild(containerBtn);   
}


_script__WEBPACK_IMPORTED_MODULE_0__.linkLogReg.addEventListener('click', (e) => {
    e.preventDefault();
    createModal();
    createDark();
    createHeaderModal();
    createForm(); 
    createInput('input_name', 'Username', 'text', 'input_name','', 'label_1');
    createInput('input_pas', 'Password', 'password', 'input_pas','', 'label_2'); 
    createInput('input_box', '', 'checkbox', 'input_box', 'Remember me', 'label_3');
    createButton();
    createLinkForgot();
    console.log('Hi')
    console.log(a)
    // pro()
});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (m);

    




/***/ }),

/***/ "./src/js/windowRegistr.js":
/*!*********************************!*\
  !*** ./src/js/windowRegistr.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btn": () => (/* binding */ btn),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./src/js/script.js");


let btn;
let form;
function callRegistrationWindow() {

    const containerModal = document.createElement('div');

    function createForm() {
        let header = document.createElement('div'),
        h2 = document.createElement('h2');
    
        form = document.createElement('form');

        h2.textContent = 'Create Account';
        form.classList.add('form_registration');
        form.setAttribute('name', 'form_inputs');
        header.classList.add('header_modal_login');
        containerModal.classList.add('container_modal');
    
        header.append(h2);
        containerModal.append(header, form);
    }

    createForm();
    
    function createFormControl (options) {
        let formControl = document.createElement('div'),
            label = document.createElement('label'),
            input = document.createElement('input'),
            icon = document.createElement('i'),
            small = document.createElement('small');
            
        label.textContent = options.nameInput;
        small.textContent = 'Error message';

        formControl.classList.add('form_control');
        input.setAttribute('type',options.inputType);
        input.setAttribute('placeholder',options.placeholder);
        input.setAttribute('class','input');
        input.setAttribute('id',options.inputID);

        icon.setAttribute('class','fas fa-check-circle'); 
        icon.setAttribute('id',options.iconID);

        formControl.append(label, input, icon, small);

        form.append(formControl);

    }
    createFormControl({
        nameInput: 'Username',
        placeholder: 'nic08',
        iconID: 'form_modal_icon_1',
        inputID: 'input_1',
        inputType: 'text'
    });

    createFormControl({
        nameInput: 'Email',
        placeholder: 'kayarmolenka@gmail.com',
        iconID: 'form_modal_icon_2',
        inputID: 'input_2',
        inputType: 'email'
    });

    createFormControl({
        nameInput: 'Password',
        placeholder: '47hYnn&',
        iconID: 'form_modal_icon_2',
        inputID: 'input_3',
        inputType: 'password'
    });

    createFormControl({
        nameInput: 'Password check',
        placeholder: '47hYnn&',
        iconID: 'form_modal_icon_4',
        inputID: 'input_4',
        inputType: 'password'
    });
    
    function createButton() {
        btn = document.createElement('button');
        
        btn.classList.add('btn_modal_registration');

        form.append(btn);
        btn.insertAdjacentText('afterbegin','Sumbit');
    }
    
    createButton();



    _script_js__WEBPACK_IMPORTED_MODULE_0__.root.append(containerModal);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callRegistrationWindow);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/script.js");
/******/ })()
;
//# sourceMappingURL=bundle.js.map