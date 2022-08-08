/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/view/garage/garage.scss":
/*!************************************************!*\
  !*** ./src/components/view/garage/garage.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_appController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/appController */ "./src/components/controller/appController.ts");
/* harmony import */ var _view_garage_garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/garage/garage */ "./src/components/view/garage/garage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class App {
    constructor() {
        this.controller = new _controller_appController__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.garage = new _view_garage_garage__WEBPACK_IMPORTED_MODULE_1__["default"](this.controller);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.garage.refreshGarage();
            // this.garage.generateCars(100);
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/controller/appController.ts":
/*!****************************************************!*\
  !*** ./src/components/controller/appController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AppController {
    constructor() {
        this.apiUrl = 'http://127.0.0.1:3000';
    }
    getCars(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const cars = yield AppController.request(this.apiUrl + '/garage?' + new URLSearchParams(params), 'GET');
            return cars;
        });
    }
    getCar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const car = yield AppController.request(this.apiUrl + `/garage/${id}`, 'GET');
            return car;
        });
    }
    createCar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield AppController.request(this.apiUrl + '/garage', 'POST', data);
            return res;
        });
    }
    updateCar(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield AppController.request(this.apiUrl + `/garage/${id}`, 'PUT', data);
            return res;
        });
    }
    deleteCar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield AppController.request(this.apiUrl + `/garage/${id}`, 'DELETE');
            return res;
        });
    }
    ruleCarEngine(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield AppController.request(this.apiUrl + '/engine?' + new URLSearchParams({ id, status }), 'PATCH');
            return res;
        });
    }
    getWinners(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const winners = yield AppController.request(this.apiUrl + '/winners?' + new URLSearchParams(params), 'GET');
            return winners;
        });
    }
    getWinner(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const winner = yield AppController.request(this.apiUrl + `/winners/${id}`, 'GET');
            return winner;
        });
    }
    createWinner(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield AppController.request(this.apiUrl + '/winners', 'POST', data);
            return res;
        });
    }
    deleteWinner(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const winner = yield AppController.request(this.apiUrl + `/winners/${id}`, 'DELETE');
            return winner;
        });
    }
    updateWinner(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const winner = yield AppController.request(this.apiUrl + `/winners/${id}`, 'DELETE', data);
            return winner;
        });
    }
    static request(url, method, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(url, { method, body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
            return res.json();
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppController);


/***/ }),

/***/ "./src/components/view/garage/garage.ts":
/*!**********************************************!*\
  !*** ./src/components/view/garage/garage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* import { ICarDB } from "../../controller/appController.types"; */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Garage {
    constructor(controller) {
        this.controller = controller;
        this.cars = [];
        this.selectedCarId = 0;
        this.updateTextInput = document.getElementById('text-update');
        this.generateCarsButton = document.getElementById('generate-cars-button');
        this.carsAmountElement = document.querySelector('.cars-amount');
        this.createButton = document.getElementById('create-button');
        this.initGarage();
    }
    initGarage() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const updateButton = document.getElementById('update-button');
            (_a = this.generateCarsButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.generateCars(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.generateCarsNumber));
            (_b = this.createButton) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => this.createCar());
            updateButton === null || updateButton === void 0 ? void 0 : updateButton.addEventListener('click', () => this.updateCar());
        });
    }
    refreshGarage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.renderCars();
            this.renderCarsAmount();
        });
    }
    renderCars() {
        return __awaiter(this, void 0, void 0, function* () {
            const carsData = yield this.controller.getCars();
            this.cars = carsData;
            const carBlocksContainer = document.querySelector('.cars-list');
            if (carBlocksContainer) {
                carBlocksContainer.innerHTML = '';
                this.cars.forEach((car) => {
                    const carBlock = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createCarBlockElement)(car);
                    const deleteButton = carBlock.querySelector('.delete');
                    const selectButton = carBlock.querySelector('.select');
                    deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener('click', () => this.deleteCar(car.id));
                    selectButton === null || selectButton === void 0 ? void 0 : selectButton.addEventListener('click', () => this.selectCar(car.id));
                    carBlocksContainer === null || carBlocksContainer === void 0 ? void 0 : carBlocksContainer.append(carBlock);
                });
            }
            try {
                console.log('dasdsad');
            }
            finally {
                console.log('finally');
            }
        });
    }
    renderCarsAmount() {
        if (this.carsAmountElement) {
            this.carsAmountElement.innerHTML = `${this.cars.length}`;
        }
    }
    generateCars(n) {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = [];
            for (let i = 0; i < n; i += 1) {
                const randomColor = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomColor)();
                const randomName = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomCarName)();
                responses.push(this.controller.createCar({ color: randomColor, name: randomName }));
            }
            yield Promise.all(responses);
            yield this.refreshGarage();
        });
    }
    deleteCar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.controller.deleteCar(id);
            yield this.refreshGarage();
        });
    }
    createCar() {
        return __awaiter(this, void 0, void 0, function* () {
            const textInput = document.getElementById('text-create');
            const colorInput = document.getElementById('colorpicker-create');
            if (textInput && colorInput) {
                yield this.controller.createCar({ name: textInput.value, color: colorInput.value });
                yield this.refreshGarage();
            }
        });
    }
    selectCar(id) {
        var _a;
        const selectedCarBlock = document.getElementById(`${id}`);
        const pastSelectedCarBlock = document.getElementById(`${this.selectedCarId}`);
        const selectedCarName = (_a = selectedCarBlock === null || selectedCarBlock === void 0 ? void 0 : selectedCarBlock.querySelector('.car__name')) === null || _a === void 0 ? void 0 : _a.textContent;
        if (this.updateTextInput && selectedCarName) {
            this.updateTextInput.value = selectedCarName;
        }
        if (this.selectedCarId === id) {
            selectedCarBlock === null || selectedCarBlock === void 0 ? void 0 : selectedCarBlock.classList.toggle('selected');
        }
        else {
            selectedCarBlock === null || selectedCarBlock === void 0 ? void 0 : selectedCarBlock.classList.add('selected');
            pastSelectedCarBlock === null || pastSelectedCarBlock === void 0 ? void 0 : pastSelectedCarBlock.classList.remove('selected');
        }
        this.selectedCarId = id;
    }
    updateCar() {
        return __awaiter(this, void 0, void 0, function* () {
            const colorInput = document.getElementById('colorpicker-update');
            if (this.updateTextInput && colorInput) {
                yield this.controller.updateCar(this.selectedCarId, {
                    name: this.updateTextInput.value, color: colorInput.value
                });
                this.updateTextInput.value = '';
            }
            yield this.refreshGarage();
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Garage);


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carsDB": () => (/* binding */ carsDB),
/* harmony export */   "createCarBlockElement": () => (/* binding */ createCarBlockElement),
/* harmony export */   "generateCarsNumber": () => (/* binding */ generateCarsNumber),
/* harmony export */   "getRandomCarName": () => (/* binding */ getRandomCarName),
/* harmony export */   "getRandomColor": () => (/* binding */ getRandomColor)
/* harmony export */ });
const carsDB = {
    BMW: ['Gran Coupe', 'Active Tourer', 'Saloon', 'Z4 Roadster'],
    AUDI: ['e-tron', 'RS 7', 'Q8', 'Q6', 'Q3'],
    ISUZU: ['D-Max', 'MU-X', 'Mysterious Utility Wizard'],
    FORD: ['Kuga', 'Explorer', 'Fiesta', 'Edge'],
    FERRARI: ['LaFerrari', 'Pisra Spider', 'Portofino', 'Challange', 'LaFerrari Aperta'],
    HAVAL: ['Big Dog']
};
const generateCarsNumber = 100;
const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const getRandomBrand = (carsInfo) => {
    const brands = Object.keys(carsInfo);
    return brands[Math.floor(Math.random() * brands.length)];
};
const getRandomModel = (brand) => {
    const models = carsDB[brand];
    return models[Math.floor(Math.random() * models.length)];
};
const getRandomCarName = () => {
    const randomBrand = getRandomBrand(carsDB);
    const randomModel = getRandomModel(randomBrand);
    return `${randomBrand} ${randomModel}`;
};
function createCarBlockElement(carData) {
    const carBlock = document.createElement('div');
    carBlock.className = 'car-block';
    carBlock.id = `${carData.id}`;
    carBlock.innerHTML = `
  <div class="car-block__head">
    <button class="select">Select</button>
    <button class="delete">Delete</button>
    <span class="car__name">${carData.name}</span>
  </div>
  <div class="car-block__body">
    <div class="engine-buttons">
      <button>A</button>
      <button>B</button>
    </div>
    <div class="">
      <svg class="car__img" stroke="white" stroke-opacity="0.2" fill=${carData.color} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="31.445px" height="31.445px"
        viewBox="0 0 31.445 31.445" style="enable-background:new 0 0 31.445 31.445;" xml:space="preserve"
        transform="scale(-1, 1)">
        <g>
          <g>
            <path d="M7.592,16.86c-1.77,0-3.203,1.434-3.203,3.204s1.434,3.204,3.203,3.204c1.768,0,3.203-1.434,3.203-3.204
      S9.36,16.86,7.592,16.86z M7.592,21.032c-0.532,0-0.968-0.434-0.968-0.967s0.436-0.967,0.968-0.967
        c0.531,0,0.966,0.434,0.966,0.967S8.124,21.032,7.592,21.032z" />
            <path d="M30.915,17.439l-0.524-4.262c-0.103-0.818-0.818-1.418-1.643-1.373L27.6,11.868l-3.564-3.211
          c-0.344-0.309-0.787-0.479-1.249-0.479l-7.241-0.001c-1.625,0-3.201,0.555-4.468,1.573l-4.04,3.246l-5.433,1.358
          c-0.698,0.174-1.188,0.802-1.188,1.521v1.566C0.187,17.44,0,17.626,0,17.856v2.071c0,0.295,0.239,0.534,0.534,0.534h3.067
          c-0.013-0.133-0.04-0.26-0.04-0.396c0-2.227,1.804-4.029,4.03-4.029s4.029,1.802,4.029,4.029c0,0.137-0.028,0.264-0.041,0.396
              h8.493c-0.012-0.133-0.039-0.26-0.039-0.396c0-2.227,1.804-4.029,4.029-4.029c2.227,0,4.028,1.802,4.028,4.029
              c0,0.137-0.026,0.264-0.04,0.396h2.861c0.295,0,0.533-0.239,0.533-0.534v-1.953C31.449,17.68,31.21,17.439,30.915,17.439z
                 M20.168,12.202l-10.102,0.511L12,11.158c1.051-0.845,2.357-1.305,3.706-1.305h4.462V12.202z M21.846,12.117V9.854h0.657
                c0.228,0,0.447,0.084,0.616,0.237l2.062,1.856L21.846,12.117z" />
            <path d="M24.064,16.86c-1.77,0-3.203,1.434-3.203,3.204s1.434,3.204,3.203,3.204c1.769,0,3.203-1.434,3.203-3.204
                S25.833,16.86,24.064,16.86z M24.064,21.032c-0.533,0-0.967-0.434-0.967-0.967s0.434-0.967,0.967-0.967
               c0.531,0,0.967,0.434,0.967,0.967S24.596,21.032,24.064,21.032z" />
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </svg>
    </div>
  </div>
`;
    return carBlock;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts");
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.scss */ "./src/global.scss");
/* harmony import */ var _components_view_garage_garage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view/garage/garage.scss */ "./src/components/view/garage/garage.scss");



const app = new _components_app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VDbEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ051QztBQUNoQjtBQUN1QjtBQUM5QyxnQkFBZ0IsMkRBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2dhcmFnZS9nYXJhZ2Uuc2Nzcz8xNmMyIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuc2Nzcz84MThmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9hcHBDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZ2FyYWdlL2dhcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9hcHBDb250cm9sbGVyJztcclxuaW1wb3J0IEdhcmFnZSBmcm9tICcuLi92aWV3L2dhcmFnZS9nYXJhZ2UnO1xyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLmdhcmFnZSA9IG5ldyBHYXJhZ2UodGhpcy5jb250cm9sbGVyKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYXJhZ2UuZ2VuZXJhdGVDYXJzKDEwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNsYXNzIEFwcENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcGlVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcclxuICAgIH1cclxuICAgIGdldENhcnMocGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FycyA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvZ2FyYWdlPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyksICdHRVQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRDYXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXIgPSB5aWVsZCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL2dhcmFnZS8ke2lkfWAsICdHRVQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhcihkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy9nYXJhZ2UnLCAnUE9TVCcsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2FyKGlkLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC9nYXJhZ2UvJHtpZH1gLCAnUFVUJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL2dhcmFnZS8ke2lkfWAsICdERUxFVEUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJ1bGVDYXJFbmdpbmUoaWQsIHN0YXR1cykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvZW5naW5lPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgaWQsIHN0YXR1cyB9KSwgJ1BBVENIJyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRXaW5uZXJzKHBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lcnMgPSB5aWVsZCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyAnL3dpbm5lcnM/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSwgJ0dFVCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gd2lubmVycztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFdpbm5lcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvd2lubmVycy8ke2lkfWAsICdHRVQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVdpbm5lcihkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy93aW5uZXJzJywgJ1BPU1QnLCBkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVdpbm5lcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvd2lubmVycy8ke2lkfWAsICdERUxFVEUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVdpbm5lcihpZCwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvd2lubmVycy8ke2lkfWAsICdERUxFVEUnLCBkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZXF1ZXN0KHVybCwgbWV0aG9kLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godXJsLCB7IG1ldGhvZCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250cm9sbGVyO1xyXG4iLCIvKiBpbXBvcnQgeyBJQ2FyREIgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlci9hcHBDb250cm9sbGVyLnR5cGVzXCI7ICovXHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY3JlYXRlQ2FyQmxvY2tFbGVtZW50LCBnZW5lcmF0ZUNhcnNOdW1iZXIsIGdldFJhbmRvbUNhck5hbWUsIGdldFJhbmRvbUNvbG9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5jbGFzcyBHYXJhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcklkID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXVwZGF0ZScpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYXJzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlLWNhcnMtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5jYXJzQW1vdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzLWFtb3VudCcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmluaXRHYXJhZ2UoKTtcclxuICAgIH1cclxuICAgIGluaXRHYXJhZ2UoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLmdlbmVyYXRlQ2Fyc0J1dHRvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5nZW5lcmF0ZUNhcnMoZ2VuZXJhdGVDYXJzTnVtYmVyKSk7XHJcbiAgICAgICAgICAgIChfYiA9IHRoaXMuY3JlYXRlQnV0dG9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNyZWF0ZUNhcigpKTtcclxuICAgICAgICAgICAgdXBkYXRlQnV0dG9uID09PSBudWxsIHx8IHVwZGF0ZUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy51cGRhdGVDYXIoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoR2FyYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMucmVuZGVyQ2FycygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNhcnNBbW91bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlckNhcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY2Fyc0RhdGEgPSB5aWVsZCB0aGlzLmNvbnRyb2xsZXIuZ2V0Q2FycygpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnMgPSBjYXJzRGF0YTtcclxuICAgICAgICAgICAgY29uc3QgY2FyQmxvY2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnMtbGlzdCcpO1xyXG4gICAgICAgICAgICBpZiAoY2FyQmxvY2tzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJCbG9ja3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnMuZm9yRWFjaCgoY2FyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyQmxvY2sgPSBjcmVhdGVDYXJCbG9ja0VsZW1lbnQoY2FyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0QnV0dG9uID0gY2FyQmxvY2sucXVlcnlTZWxlY3RvcignLnNlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbiA9PT0gbnVsbCB8fCBkZWxldGVCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZGVsZXRlQ2FyKGNhci5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEJ1dHRvbiA9PT0gbnVsbCB8fCBzZWxlY3RCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2VsZWN0Q2FyKGNhci5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhckJsb2Nrc0NvbnRhaW5lciA9PT0gbnVsbCB8fCBjYXJCbG9ja3NDb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhckJsb2Nrc0NvbnRhaW5lci5hcHBlbmQoY2FyQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXNkc2FkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmluYWxseScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJDYXJzQW1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcnNBbW91bnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyc0Ftb3VudEVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGhpcy5jYXJzLmxlbmd0aH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbmVyYXRlQ2FycyhuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IGdldFJhbmRvbUNvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21OYW1lID0gZ2V0UmFuZG9tQ2FyTmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzLnB1c2godGhpcy5jb250cm9sbGVyLmNyZWF0ZUNhcih7IGNvbG9yOiByYW5kb21Db2xvciwgbmFtZTogcmFuZG9tTmFtZSB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwocmVzcG9uc2VzKTtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCB0aGlzLmNvbnRyb2xsZXIuZGVsZXRlQ2FyKGlkKTtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY3JlYXRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JwaWNrZXItY3JlYXRlJyk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0SW5wdXQgJiYgY29sb3JJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jb250cm9sbGVyLmNyZWF0ZUNhcih7IG5hbWU6IHRleHRJbnB1dC52YWx1ZSwgY29sb3I6IGNvbG9ySW5wdXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0Q2FyKGlkKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2FyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcclxuICAgICAgICBjb25zdCBwYXN0U2VsZWN0ZWRDYXJCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuc2VsZWN0ZWRDYXJJZH1gKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENhck5hbWUgPSAoX2EgPSBzZWxlY3RlZENhckJsb2NrID09PSBudWxsIHx8IHNlbGVjdGVkQ2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ2FyQmxvY2sucXVlcnlTZWxlY3RvcignLmNhcl9fbmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVGV4dElucHV0ICYmIHNlbGVjdGVkQ2FyTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHRJbnB1dC52YWx1ZSA9IHNlbGVjdGVkQ2FyTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJJZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDYXJCbG9jayA9PT0gbnVsbCB8fCBzZWxlY3RlZENhckJsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZENhckJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENhckJsb2NrID09PSBudWxsIHx8IHNlbGVjdGVkQ2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ2FyQmxvY2suY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcGFzdFNlbGVjdGVkQ2FyQmxvY2sgPT09IG51bGwgfHwgcGFzdFNlbGVjdGVkQ2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhc3RTZWxlY3RlZENhckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJJZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2FyKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JwaWNrZXItdXBkYXRlJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZVRleHRJbnB1dCAmJiBjb2xvcklucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmNvbnRyb2xsZXIudXBkYXRlQ2FyKHRoaXMuc2VsZWN0ZWRDYXJJZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudXBkYXRlVGV4dElucHV0LnZhbHVlLCBjb2xvcjogY29sb3JJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMucmVmcmVzaEdhcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhcmFnZTtcclxuIiwiZXhwb3J0IGNvbnN0IGNhcnNEQiA9IHtcclxuICAgIEJNVzogWydHcmFuIENvdXBlJywgJ0FjdGl2ZSBUb3VyZXInLCAnU2Fsb29uJywgJ1o0IFJvYWRzdGVyJ10sXHJcbiAgICBBVURJOiBbJ2UtdHJvbicsICdSUyA3JywgJ1E4JywgJ1E2JywgJ1EzJ10sXHJcbiAgICBJU1VaVTogWydELU1heCcsICdNVS1YJywgJ015c3RlcmlvdXMgVXRpbGl0eSBXaXphcmQnXSxcclxuICAgIEZPUkQ6IFsnS3VnYScsICdFeHBsb3JlcicsICdGaWVzdGEnLCAnRWRnZSddLFxyXG4gICAgRkVSUkFSSTogWydMYUZlcnJhcmknLCAnUGlzcmEgU3BpZGVyJywgJ1BvcnRvZmlubycsICdDaGFsbGFuZ2UnLCAnTGFGZXJyYXJpIEFwZXJ0YSddLFxyXG4gICAgSEFWQUw6IFsnQmlnIERvZyddXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNhcnNOdW1iZXIgPSAxMDA7XHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21Db2xvciA9ICgpID0+IHtcclxuICAgIHJldHVybiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xyXG59O1xyXG5jb25zdCBnZXRSYW5kb21CcmFuZCA9IChjYXJzSW5mbykgPT4ge1xyXG4gICAgY29uc3QgYnJhbmRzID0gT2JqZWN0LmtleXMoY2Fyc0luZm8pO1xyXG4gICAgcmV0dXJuIGJyYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBicmFuZHMubGVuZ3RoKV07XHJcbn07XHJcbmNvbnN0IGdldFJhbmRvbU1vZGVsID0gKGJyYW5kKSA9PiB7XHJcbiAgICBjb25zdCBtb2RlbHMgPSBjYXJzREJbYnJhbmRdO1xyXG4gICAgcmV0dXJuIG1vZGVsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb2RlbHMubGVuZ3RoKV07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21DYXJOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tQnJhbmQgPSBnZXRSYW5kb21CcmFuZChjYXJzREIpO1xyXG4gICAgY29uc3QgcmFuZG9tTW9kZWwgPSBnZXRSYW5kb21Nb2RlbChyYW5kb21CcmFuZCk7XHJcbiAgICByZXR1cm4gYCR7cmFuZG9tQnJhbmR9ICR7cmFuZG9tTW9kZWx9YDtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhckJsb2NrRWxlbWVudChjYXJEYXRhKSB7XHJcbiAgICBjb25zdCBjYXJCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyQmxvY2suY2xhc3NOYW1lID0gJ2Nhci1ibG9jayc7XHJcbiAgICBjYXJCbG9jay5pZCA9IGAke2NhckRhdGEuaWR9YDtcclxuICAgIGNhckJsb2NrLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImNhci1ibG9ja19faGVhZFwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJzZWxlY3RcIj5TZWxlY3Q8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgPHNwYW4gY2xhc3M9XCJjYXJfX25hbWVcIj4ke2NhckRhdGEubmFtZX08L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyLWJsb2NrX19ib2R5XCI+XG4gICAgPGRpdiBjbGFzcz1cImVuZ2luZS1idXR0b25zXCI+XG4gICAgICA8YnV0dG9uPkE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24+QjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJjYXJfX2ltZ1wiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLW9wYWNpdHk9XCIwLjJcIiBmaWxsPSR7Y2FyRGF0YS5jb2xvcn0gdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIzMS40NDVweFwiIGhlaWdodD1cIjMxLjQ0NXB4XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAzMS40NDUgMzEuNDQ1XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NSAzMS40NDU7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICB0cmFuc2Zvcm09XCJzY2FsZSgtMSwgMSlcIj5cbiAgICAgICAgPGc+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcuNTkyLDE2Ljg2Yy0xLjc3LDAtMy4yMDMsMS40MzQtMy4yMDMsMy4yMDRzMS40MzQsMy4yMDQsMy4yMDMsMy4yMDRjMS43NjgsMCwzLjIwMy0xLjQzNCwzLjIwMy0zLjIwNFxuICAgICAgUzkuMzYsMTYuODYsNy41OTIsMTYuODZ6IE03LjU5MiwyMS4wMzJjLTAuNTMyLDAtMC45NjgtMC40MzQtMC45NjgtMC45NjdzMC40MzYtMC45NjcsMC45NjgtMC45NjdcbiAgICAgICAgYzAuNTMxLDAsMC45NjYsMC40MzQsMC45NjYsMC45NjdTOC4xMjQsMjEuMDMyLDcuNTkyLDIxLjAzMnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0zMC45MTUsMTcuNDM5bC0wLjUyNC00LjI2MmMtMC4xMDMtMC44MTgtMC44MTgtMS40MTgtMS42NDMtMS4zNzNMMjcuNiwxMS44NjhsLTMuNTY0LTMuMjExXG4gICAgICAgICAgYy0wLjM0NC0wLjMwOS0wLjc4Ny0wLjQ3OS0xLjI0OS0wLjQ3OWwtNy4yNDEtMC4wMDFjLTEuNjI1LDAtMy4yMDEsMC41NTUtNC40NjgsMS41NzNsLTQuMDQsMy4yNDZsLTUuNDMzLDEuMzU4XG4gICAgICAgICAgYy0wLjY5OCwwLjE3NC0xLjE4OCwwLjgwMi0xLjE4OCwxLjUyMXYxLjU2NkMwLjE4NywxNy40NCwwLDE3LjYyNiwwLDE3Ljg1NnYyLjA3MWMwLDAuMjk1LDAuMjM5LDAuNTM0LDAuNTM0LDAuNTM0aDMuMDY3XG4gICAgICAgICAgYy0wLjAxMy0wLjEzMy0wLjA0LTAuMjYtMC4wNC0wLjM5NmMwLTIuMjI3LDEuODA0LTQuMDI5LDQuMDMtNC4wMjlzNC4wMjksMS44MDIsNC4wMjksNC4wMjljMCwwLjEzNy0wLjAyOCwwLjI2NC0wLjA0MSwwLjM5NlxuICAgICAgICAgICAgICBoOC40OTNjLTAuMDEyLTAuMTMzLTAuMDM5LTAuMjYtMC4wMzktMC4zOTZjMC0yLjIyNywxLjgwNC00LjAyOSw0LjAyOS00LjAyOWMyLjIyNywwLDQuMDI4LDEuODAyLDQuMDI4LDQuMDI5XG4gICAgICAgICAgICAgIGMwLDAuMTM3LTAuMDI2LDAuMjY0LTAuMDQsMC4zOTZoMi44NjFjMC4yOTUsMCwwLjUzMy0wLjIzOSwwLjUzMy0wLjUzNHYtMS45NTNDMzEuNDQ5LDE3LjY4LDMxLjIxLDE3LjQzOSwzMC45MTUsMTcuNDM5elxuICAgICAgICAgICAgICAgICBNMjAuMTY4LDEyLjIwMmwtMTAuMTAyLDAuNTExTDEyLDExLjE1OGMxLjA1MS0wLjg0NSwyLjM1Ny0xLjMwNSwzLjcwNi0xLjMwNWg0LjQ2MlYxMi4yMDJ6IE0yMS44NDYsMTIuMTE3VjkuODU0aDAuNjU3XG4gICAgICAgICAgICAgICAgYzAuMjI4LDAsMC40NDcsMC4wODQsMC42MTYsMC4yMzdsMi4wNjIsMS44NTZMMjEuODQ2LDEyLjExN3pcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNC4wNjQsMTYuODZjLTEuNzcsMC0zLjIwMywxLjQzNC0zLjIwMywzLjIwNHMxLjQzNCwzLjIwNCwzLjIwMywzLjIwNGMxLjc2OSwwLDMuMjAzLTEuNDM0LDMuMjAzLTMuMjA0XG4gICAgICAgICAgICAgICAgUzI1LjgzMywxNi44NiwyNC4wNjQsMTYuODZ6IE0yNC4wNjQsMjEuMDMyYy0wLjUzMywwLTAuOTY3LTAuNDM0LTAuOTY3LTAuOTY3czAuNDM0LTAuOTY3LDAuOTY3LTAuOTY3XG4gICAgICAgICAgICAgICBjMC41MzEsMCwwLjk2NywwLjQzNCwwLjk2NywwLjk2N1MyNC41OTYsMjEuMDMyLDI0LjA2NCwyMS4wMzJ6XCIgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XHJcbiAgICByZXR1cm4gY2FyQmxvY2s7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0ICcuL2dsb2JhbC5zY3NzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdmlldy9nYXJhZ2UvZ2FyYWdlLnNjc3MnO1xyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5zdGFydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=