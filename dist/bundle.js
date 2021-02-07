/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modal_Login.js":
/*!*******************************!*\
  !*** ./src/js/modal_Login.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./src/js/script.js");


function callRegistrationWindow() {

    const containerModal = document.createElement('div');

    containerModal.classList.add('container_modal');

    let header = document.createElement('div'),
        h2 = document.createElement('h2'),
        form = document.createElement('form');
        
    form.classList.add('form_registration');
    header.classList.add('header_modal_login');

    h2.textContent = 'Create Account';

    header.append(h2);
    containerModal.append(header, form);
    

    function createFormControl (nameInput, placehold) {
    let formControl = document.createElement('div'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        textLabel = document.createTextNode(nameInput),
        icon = document.createElement('i'),
        small = document.createElement('small'),
        textSmall = document.createTextNode('Error message');
        

    formControl.classList.add('formControl');
    label.setAttribute('for','username');
    input.setAttribute('type','text');
    input.setAttribute('placeholder',placehold);
    input.setAttribute('class','input');

    form.appendChild(formControl);
    formControl.appendChild(label);
    label.appendChild(textLabel);
    formControl.appendChild(input);
    formControl.appendChild(icon);
    formControl.appendChild(small);
    small.appendChild(textSmall);

    }

    createFormControl('Username', 'nic08');
    createFormControl('Email', 'kayarmolenka@gmail.com');
    createFormControl('Password', '47hYnn&');
    createFormControl('Password check','47hYnn&');

    function createButton() {
        const btn = document.createElement('button');

        form.append(btn);
        btn.insertAdjacentText('afterbegin','Sumbit');
    }
    
    createButton();

    _script_js__WEBPACK_IMPORTED_MODULE_0__.root.append(containerModal);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callRegistrationWindow);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _modal_Login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal_Login.js */ "./src/js/modal_Login.js");


const root = document.querySelector('.root');
let container;

function createHeader () {
    let header = document.createElement('header'),
        h1 = document.createElement('h1');

    header.classList.add('header');
    header.appendChild(h1);
    h1.innerHTML = 'My program very cool';
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
createLink('Log in', 'log_in');
createLink('Start', 'start');



const linkLogin = document.querySelector('#log_in');

linkLogin.addEventListener('click', () => {
    (0,_modal_Login_js__WEBPACK_IMPORTED_MODULE_0__.default)();
});



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