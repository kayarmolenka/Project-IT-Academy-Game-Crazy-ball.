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
/* harmony export */   "root": () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowRegistr.js */ "./src/js/windowRegistr.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate.js */ "./src/js/validate.js");
/* harmony import */ var _windowLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowLogin */ "./src/js/windowLogin.js");





const root = document.querySelector('.root');
let container;

function createHeader () {
    let header = document.createElement('header');
        // h1 = document.createElement('h1');

    header.classList.add('header');
    // header.appendChild(h1);
    // h1.innerHTML = 'My program very cool';
    root.appendChild(header);
}

createHeader();

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
createLink('registration', 'log_in');
createLink('LOGIN', 'log');


const linkLog = document.querySelector('#log');
const linkReg = document.querySelector('#log_in');

linkReg.addEventListener('click', () => {
    (0,_windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_validate_js__WEBPACK_IMPORTED_MODULE_1__.default)();

});

linkLog.addEventListener('click', () => {
    (0,_windowLogin__WEBPACK_IMPORTED_MODULE_2__.default)();
});



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
/* harmony export */   "btn": () => (/* binding */ btn),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./src/js/script.js");


let btn;
let form;
function callWindowLogin() {

    const containerModal = document.createElement('div');

    function createForm() {
        let header = document.createElement('div'),
        h2 = document.createElement('h2');
    
        form = document.createElement('form');

        h2.textContent = 'LOGIN';
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
        input.setAttribute('for',options.inputLab);
        label.setAttribute('id', options.labelID);

        icon.setAttribute('class','fas fa-check-circle'); 
        icon.setAttribute('id',options.iconID);

        label.appendChild(input);

        formControl.append(label, icon, small);

        form.append(formControl);

    }
    createFormControl({
        nameInput: '',
        placeholder: 'Username',
        iconID: 'form_modal_icon_1',
        inputID: 'input_1',
        inputType: 'text',
        inputLab: 'input_1',
        labelID: 'name_label'
    });

    
    createFormControl({
        nameInput: '',
        placeholder: 'Password',
        iconID: 'form_modal_icon_2',
        inputID: 'input_3',
        inputType: 'password',
        inputLab: 'input_3',
        labelID: 'pass_label'
    });

    createFormControl({
        nameInput: 'Remember me',
        placeholder: '',
        iconID: 'form_modal_icon_2',
        inputID: 'checkbox',
        inputType: 'checkbox',
        inputLab: 'checkbox',
        labelID: 'check_label'
    });
    
    function createButton() {
        btn = document.createElement('button');

        btn.classList.add('btn_modal_login');

        form.append(btn);
        btn.insertAdjacentText('afterbegin','Sumbit');
    }
    
    createButton();



    _script_js__WEBPACK_IMPORTED_MODULE_0__.root.append(containerModal);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callWindowLogin);

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