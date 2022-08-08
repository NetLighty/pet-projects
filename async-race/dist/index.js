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
            const res = yield AppController.request(this.apiUrl + '/garage?' + new URLSearchParams(params), 'GET');
            return res.json();
        });
    }
    getCar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield AppController.request(this.apiUrl + `/garage/${id}`, 'GET');
            return res.json();
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
            const res = yield AppController.request(this.apiUrl + '/engine?' + new URLSearchParams({ id: `${id}`, status }), 'PATCH');
            return res.json();
        });
    }
    driveCarEngine(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield AppController.request(this.apiUrl + '/engine?' + new URLSearchParams({ id: `${id}`, status }), 'PATCH').catch();
            return res.status !== 200 ? { success: false } : { success: true };
        });
    }
    getWinners(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield AppController.request(this.apiUrl + '/winners?' + new URLSearchParams(params), 'GET');
            return res.json();
        });
    }
    getWinner(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const winner = yield AppController.request(this.apiUrl + `/winners/${id}`, 'GET');
            return winner.json();
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
            return winner.json();
        });
    }
    updateWinner(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const winner = yield AppController.request(this.apiUrl + `/winners/${id}`, 'DELETE', data);
            return winner.json();
        });
    }
    static request(url, method, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(url, { method, body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
            return res;
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
        this.storage = { animations: [] };
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
                    const startRaceButton = carBlock.querySelector(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.startRaceButtonClass);
                    const stopRaceButton = carBlock.querySelector(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.stopRaceButtonClass);
                    deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener('click', () => this.deleteCar(car.id));
                    selectButton === null || selectButton === void 0 ? void 0 : selectButton.addEventListener('click', () => this.selectCar(car.id));
                    startRaceButton === null || startRaceButton === void 0 ? void 0 : startRaceButton.addEventListener('click', () => this.startCarRace(car.id));
                    stopRaceButton === null || stopRaceButton === void 0 ? void 0 : stopRaceButton.addEventListener('click', () => this.stopCarRace(car.id));
                    carBlocksContainer === null || carBlocksContainer === void 0 ? void 0 : carBlocksContainer.append(carBlock);
                });
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
    startCarRace(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const carBlock = document.getElementById(`${id}`);
            const carImg = carBlock === null || carBlock === void 0 ? void 0 : carBlock.querySelector('.car__img');
            const flag = carBlock === null || carBlock === void 0 ? void 0 : carBlock.querySelector('.flag');
            const engineData = yield this.controller.ruleCarEngine(id, 'started');
            const animationTime = engineData.distance / engineData.velocity;
            if (carImg && flag) {
                const distanceBetweenCarAndFlag = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getDistanceBetweenElems)(carImg, flag);
                this.storage.animations[id] = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.carDriveAnimation)(carImg, distanceBetweenCarAndFlag, animationTime);
                const driveRes = yield this.controller.driveCarEngine(id, 'drive');
                if (!driveRes.success) {
                    cancelAnimationFrame(this.storage.animations[id].id);
                }
            }
        });
    }
    stopCarRace(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.controller.ruleCarEngine(id, 'stopped');
            cancelAnimationFrame(this.storage.animations[id].id);
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
/* harmony export */   "carDriveAnimation": () => (/* binding */ carDriveAnimation),
/* harmony export */   "carsDB": () => (/* binding */ carsDB),
/* harmony export */   "createCarBlockElement": () => (/* binding */ createCarBlockElement),
/* harmony export */   "generateCarsNumber": () => (/* binding */ generateCarsNumber),
/* harmony export */   "getDistanceBetweenElems": () => (/* binding */ getDistanceBetweenElems),
/* harmony export */   "getRandomCarName": () => (/* binding */ getRandomCarName),
/* harmony export */   "getRandomColor": () => (/* binding */ getRandomColor),
/* harmony export */   "startRaceButtonClass": () => (/* binding */ startRaceButtonClass),
/* harmony export */   "stopRaceButtonClass": () => (/* binding */ stopRaceButtonClass)
/* harmony export */ });
const carsDB = {
    BMW: ['Gran Coupe', 'Active Tourer', 'Saloon', 'Z4 Roadster'],
    AUDI: ['e-tron', 'RS 7', 'Q8', 'Q6', 'Q3'],
    ISUZU: ['D-Max', 'MU-X', 'Mysterious Utility Wizard'],
    FORD: ['Kuga', 'Explorer', 'Fiesta', 'Edge'],
    FERRARI: [
        'LaFerrari',
        'Pisra Spider',
        'Portofino',
        'Challange',
        'LaFerrari Aperta'
    ],
    HAVAL: ['Big Dog']
};
const generateCarsNumber = 100;
const startRaceButtonClass = '.start-race-button';
const stopRaceButtonClass = '.stop-race-button';
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
const getDistanceBetweenElems = (elem1, elem2) => {
    const { x: elem1X } = elem1.getBoundingClientRect();
    const { x: elem2X } = elem2.getBoundingClientRect();
    return elem2X - elem1X;
};
const carDriveAnimation = (car, distance, animationDuration) => {
    let start = null;
    const resultDistance = distance + 1;
    const animationInfo = {};
    function step(timeStamp) {
        if (!start) {
            start = timeStamp;
        }
        const time = (timeStamp - start) / animationDuration; // ОТ 0 ДО 1
        const result = time * resultDistance;
        // const isFinished = result > resultDistance;
        // eslint-disable-next-line no-param-reassign
        car.style.transform = `translateX(${result}px) scale(-1, 1)`;
        if (time < 1) {
            animationInfo.id = requestAnimationFrame((timestamp) => step(timestamp));
        }
    }
    animationInfo.id = requestAnimationFrame((timestamp) => step(timestamp));
    return animationInfo;
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
      <button class="start-race-button">A</button>
      <button class="stop-race-button">B</button>
    </div>
    <div class="race">
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
      <svg class="flag" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 300.344 300.344" style="enable-background:new 0 0 300.344 300.344;" xml:space="preserve">
      <g>
        <path d="M289.286,28.36c-6.773-3.386-14.885-2.655-20.945,1.892c-23.387,17.547-46.014,10.395-80.992-2.728
        c-34.281-12.859-76.942-28.861-119.047,2.728c-5.034,3.777-7.997,9.704-7.997,15.998v119.112c0,7.576,4.281,14.502,11.058,17.89
        s14.887,2.654,20.945-1.892c23.387-17.547,46.014-10.395,80.992,2.728c19.513,7.319,41.739,15.657,65.034,15.657
        c17.631,0,35.874-4.776,54.013-18.385c5.034-3.777,7.997-9.704,7.997-15.998V46.25C300.344,38.674,296.063,31.748,289.286,28.36z"
        />
        <path d="M20,7.819c-11.046,0-20,8.954-20,20v244.705c0,11.046,8.954,20,20,20s20-8.954,20-20V27.819
        C40,16.773,31.046,7.819,20,7.819z"/>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ051QztBQUNoQjtBQUN1QjtBQUM5QyxnQkFBZ0IsMkRBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2dhcmFnZS9nYXJhZ2Uuc2Nzcz8xNmMyIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuc2Nzcz84MThmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9hcHBDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZ2FyYWdlL2dhcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9hcHBDb250cm9sbGVyJztcclxuaW1wb3J0IEdhcmFnZSBmcm9tICcuLi92aWV3L2dhcmFnZS9nYXJhZ2UnO1xyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLmdhcmFnZSA9IG5ldyBHYXJhZ2UodGhpcy5jb250cm9sbGVyKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYXJhZ2UuZ2VuZXJhdGVDYXJzKDEwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNsYXNzIEFwcENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcGlVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcclxuICAgIH1cclxuICAgIGdldENhcnMocGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy9nYXJhZ2U/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSwgJ0dFVCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldENhcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvZ2FyYWdlLyR7aWR9YCwgJ0dFVCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhcihkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy9nYXJhZ2UnLCAnUE9TVCcsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2FyKGlkLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC9nYXJhZ2UvJHtpZH1gLCAnUFVUJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL2dhcmFnZS8ke2lkfWAsICdERUxFVEUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJ1bGVDYXJFbmdpbmUoaWQsIHN0YXR1cykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvZW5naW5lPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgaWQ6IGAke2lkfWAsIHN0YXR1cyB9KSwgJ1BBVENIJyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZHJpdmVDYXJFbmdpbmUoaWQsIHN0YXR1cykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvZW5naW5lPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgaWQ6IGAke2lkfWAsIHN0YXR1cyB9KSwgJ1BBVENIJykuY2F0Y2goKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMgIT09IDIwMCA/IHsgc3VjY2VzczogZmFsc2UgfSA6IHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0V2lubmVycyhwYXJhbXMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyAnL3dpbm5lcnM/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSwgJ0dFVCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFdpbm5lcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvd2lubmVycy8ke2lkfWAsICdHRVQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbm5lci5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVXaW5uZXIoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvd2lubmVycycsICdQT1NUJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVXaW5uZXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5uZXIgPSB5aWVsZCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL3dpbm5lcnMvJHtpZH1gLCAnREVMRVRFJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5uZXIuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlV2lubmVyKGlkLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2lubmVyID0geWllbGQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC93aW5uZXJzLyR7aWR9YCwgJ0RFTEVURScsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gd2lubmVyLmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZXF1ZXN0KHVybCwgbWV0aG9kLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godXJsLCB7IG1ldGhvZCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xsZXI7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgY2FyRHJpdmVBbmltYXRpb24sIGNyZWF0ZUNhckJsb2NrRWxlbWVudCwgZ2VuZXJhdGVDYXJzTnVtYmVyLCBnZXREaXN0YW5jZUJldHdlZW5FbGVtcywgZ2V0UmFuZG9tQ2FyTmFtZSwgZ2V0UmFuZG9tQ29sb3IsIHN0YXJ0UmFjZUJ1dHRvbkNsYXNzLCBzdG9wUmFjZUJ1dHRvbkNsYXNzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5jbGFzcyBHYXJhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0geyBhbmltYXRpb25zOiBbXSB9O1xyXG4gICAgICAgIHRoaXMuY2FycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJJZCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC11cGRhdGUnKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2Fyc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZS1jYXJzLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuY2Fyc0Ftb3VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fycy1hbW91bnQnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5pbml0R2FyYWdlKCk7XHJcbiAgICB9XHJcbiAgICBpbml0R2FyYWdlKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1idXR0b24nKTtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy5nZW5lcmF0ZUNhcnNCdXR0b24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ2VuZXJhdGVDYXJzKGdlbmVyYXRlQ2Fyc051bWJlcikpO1xyXG4gICAgICAgICAgICAoX2IgPSB0aGlzLmNyZWF0ZUJ1dHRvbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jcmVhdGVDYXIoKSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUJ1dHRvbiA9PT0gbnVsbCB8fCB1cGRhdGVCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudXBkYXRlQ2FyKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaEdhcmFnZSgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCB0aGlzLnJlbmRlckNhcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJzQW1vdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJDYXJzKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnNEYXRhID0geWllbGQgdGhpcy5jb250cm9sbGVyLmdldENhcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJzID0gY2Fyc0RhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhckJsb2Nrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzLWxpc3QnKTtcclxuICAgICAgICAgICAgaWYgKGNhckJsb2Nrc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY2FyQmxvY2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJzLmZvckVhY2goKGNhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhckJsb2NrID0gY3JlYXRlQ2FyQmxvY2tFbGVtZW50KGNhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY2FyQmxvY2sucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFJhY2VCdXR0b24gPSBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKHN0YXJ0UmFjZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdG9wUmFjZUJ1dHRvbiA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3Ioc3RvcFJhY2VCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uID09PSBudWxsIHx8IGRlbGV0ZUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5kZWxldGVDYXIoY2FyLmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QnV0dG9uID09PSBudWxsIHx8IHNlbGVjdEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zZWxlY3RDYXIoY2FyLmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRSYWNlQnV0dG9uID09PSBudWxsIHx8IHN0YXJ0UmFjZUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhcnRSYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zdGFydENhclJhY2UoY2FyLmlkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcFJhY2VCdXR0b24gPT09IG51bGwgfHwgc3RvcFJhY2VCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0b3BSYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zdG9wQ2FyUmFjZShjYXIuaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJCbG9ja3NDb250YWluZXIgPT09IG51bGwgfHwgY2FyQmxvY2tzQ29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJCbG9ja3NDb250YWluZXIuYXBwZW5kKGNhckJsb2NrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJDYXJzQW1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcnNBbW91bnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyc0Ftb3VudEVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGhpcy5jYXJzLmxlbmd0aH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbmVyYXRlQ2FycyhuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IGdldFJhbmRvbUNvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21OYW1lID0gZ2V0UmFuZG9tQ2FyTmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzLnB1c2godGhpcy5jb250cm9sbGVyLmNyZWF0ZUNhcih7IGNvbG9yOiByYW5kb21Db2xvciwgbmFtZTogcmFuZG9tTmFtZSB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwocmVzcG9uc2VzKTtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCB0aGlzLmNvbnRyb2xsZXIuZGVsZXRlQ2FyKGlkKTtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY3JlYXRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JwaWNrZXItY3JlYXRlJyk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0SW5wdXQgJiYgY29sb3JJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jb250cm9sbGVyLmNyZWF0ZUNhcih7IG5hbWU6IHRleHRJbnB1dC52YWx1ZSwgY29sb3I6IGNvbG9ySW5wdXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0Q2FyKGlkKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2FyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcclxuICAgICAgICBjb25zdCBwYXN0U2VsZWN0ZWRDYXJCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuc2VsZWN0ZWRDYXJJZH1gKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENhck5hbWUgPSAoX2EgPSBzZWxlY3RlZENhckJsb2NrID09PSBudWxsIHx8IHNlbGVjdGVkQ2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ2FyQmxvY2sucXVlcnlTZWxlY3RvcignLmNhcl9fbmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVGV4dElucHV0ICYmIHNlbGVjdGVkQ2FyTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHRJbnB1dC52YWx1ZSA9IHNlbGVjdGVkQ2FyTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJJZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDYXJCbG9jayA9PT0gbnVsbCB8fCBzZWxlY3RlZENhckJsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZENhckJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENhckJsb2NrID09PSBudWxsIHx8IHNlbGVjdGVkQ2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQ2FyQmxvY2suY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcGFzdFNlbGVjdGVkQ2FyQmxvY2sgPT09IG51bGwgfHwgcGFzdFNlbGVjdGVkQ2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhc3RTZWxlY3RlZENhckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJJZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2FyKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JwaWNrZXItdXBkYXRlJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZVRleHRJbnB1dCAmJiBjb2xvcklucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmNvbnRyb2xsZXIudXBkYXRlQ2FyKHRoaXMuc2VsZWN0ZWRDYXJJZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudXBkYXRlVGV4dElucHV0LnZhbHVlLCBjb2xvcjogY29sb3JJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMucmVmcmVzaEdhcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhcnRDYXJSYWNlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcclxuICAgICAgICAgICAgY29uc3QgY2FySW1nID0gY2FyQmxvY2sgPT09IG51bGwgfHwgY2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jYXJfX2ltZycpO1xyXG4gICAgICAgICAgICBjb25zdCBmbGFnID0gY2FyQmxvY2sgPT09IG51bGwgfHwgY2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5mbGFnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZ2luZURhdGEgPSB5aWVsZCB0aGlzLmNvbnRyb2xsZXIucnVsZUNhckVuZ2luZShpZCwgJ3N0YXJ0ZWQnKTtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uVGltZSA9IGVuZ2luZURhdGEuZGlzdGFuY2UgLyBlbmdpbmVEYXRhLnZlbG9jaXR5O1xyXG4gICAgICAgICAgICBpZiAoY2FySW1nICYmIGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlQmV0d2VlbkNhckFuZEZsYWcgPSBnZXREaXN0YW5jZUJldHdlZW5FbGVtcyhjYXJJbWcsIGZsYWcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmFuaW1hdGlvbnNbaWRdID0gY2FyRHJpdmVBbmltYXRpb24oY2FySW1nLCBkaXN0YW5jZUJldHdlZW5DYXJBbmRGbGFnLCBhbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyaXZlUmVzID0geWllbGQgdGhpcy5jb250cm9sbGVyLmRyaXZlQ2FyRW5naW5lKGlkLCAnZHJpdmUnKTtcclxuICAgICAgICAgICAgICAgIGlmICghZHJpdmVSZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RvcmFnZS5hbmltYXRpb25zW2lkXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0b3BDYXJSYWNlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5jb250cm9sbGVyLnJ1bGVDYXJFbmdpbmUoaWQsICdzdG9wcGVkJyk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RvcmFnZS5hbmltYXRpb25zW2lkXS5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FyYWdlO1xyXG4iLCJleHBvcnQgY29uc3QgY2Fyc0RCID0ge1xyXG4gICAgQk1XOiBbJ0dyYW4gQ291cGUnLCAnQWN0aXZlIFRvdXJlcicsICdTYWxvb24nLCAnWjQgUm9hZHN0ZXInXSxcclxuICAgIEFVREk6IFsnZS10cm9uJywgJ1JTIDcnLCAnUTgnLCAnUTYnLCAnUTMnXSxcclxuICAgIElTVVpVOiBbJ0QtTWF4JywgJ01VLVgnLCAnTXlzdGVyaW91cyBVdGlsaXR5IFdpemFyZCddLFxyXG4gICAgRk9SRDogWydLdWdhJywgJ0V4cGxvcmVyJywgJ0ZpZXN0YScsICdFZGdlJ10sXHJcbiAgICBGRVJSQVJJOiBbXHJcbiAgICAgICAgJ0xhRmVycmFyaScsXHJcbiAgICAgICAgJ1Bpc3JhIFNwaWRlcicsXHJcbiAgICAgICAgJ1BvcnRvZmlubycsXHJcbiAgICAgICAgJ0NoYWxsYW5nZScsXHJcbiAgICAgICAgJ0xhRmVycmFyaSBBcGVydGEnXHJcbiAgICBdLFxyXG4gICAgSEFWQUw6IFsnQmlnIERvZyddXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNhcnNOdW1iZXIgPSAxMDA7XHJcbmV4cG9ydCBjb25zdCBzdGFydFJhY2VCdXR0b25DbGFzcyA9ICcuc3RhcnQtcmFjZS1idXR0b24nO1xyXG5leHBvcnQgY29uc3Qgc3RvcFJhY2VCdXR0b25DbGFzcyA9ICcuc3RvcC1yYWNlLWJ1dHRvbic7XHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21Db2xvciA9ICgpID0+IHtcclxuICAgIHJldHVybiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xyXG59O1xyXG5jb25zdCBnZXRSYW5kb21CcmFuZCA9IChjYXJzSW5mbykgPT4ge1xyXG4gICAgY29uc3QgYnJhbmRzID0gT2JqZWN0LmtleXMoY2Fyc0luZm8pO1xyXG4gICAgcmV0dXJuIGJyYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBicmFuZHMubGVuZ3RoKV07XHJcbn07XHJcbmNvbnN0IGdldFJhbmRvbU1vZGVsID0gKGJyYW5kKSA9PiB7XHJcbiAgICBjb25zdCBtb2RlbHMgPSBjYXJzREJbYnJhbmRdO1xyXG4gICAgcmV0dXJuIG1vZGVsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb2RlbHMubGVuZ3RoKV07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21DYXJOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tQnJhbmQgPSBnZXRSYW5kb21CcmFuZChjYXJzREIpO1xyXG4gICAgY29uc3QgcmFuZG9tTW9kZWwgPSBnZXRSYW5kb21Nb2RlbChyYW5kb21CcmFuZCk7XHJcbiAgICByZXR1cm4gYCR7cmFuZG9tQnJhbmR9ICR7cmFuZG9tTW9kZWx9YDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldERpc3RhbmNlQmV0d2VlbkVsZW1zID0gKGVsZW0xLCBlbGVtMikgPT4ge1xyXG4gICAgY29uc3QgeyB4OiBlbGVtMVggfSA9IGVsZW0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgeyB4OiBlbGVtMlggfSA9IGVsZW0yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIGVsZW0yWCAtIGVsZW0xWDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGNhckRyaXZlQW5pbWF0aW9uID0gKGNhciwgZGlzdGFuY2UsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICBsZXQgc3RhcnQgPSBudWxsO1xyXG4gICAgY29uc3QgcmVzdWx0RGlzdGFuY2UgPSBkaXN0YW5jZSArIDE7XHJcbiAgICBjb25zdCBhbmltYXRpb25JbmZvID0ge307XHJcbiAgICBmdW5jdGlvbiBzdGVwKHRpbWVTdGFtcCkge1xyXG4gICAgICAgIGlmICghc3RhcnQpIHtcclxuICAgICAgICAgICAgc3RhcnQgPSB0aW1lU3RhbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSAodGltZVN0YW1wIC0gc3RhcnQpIC8gYW5pbWF0aW9uRHVyYXRpb247IC8vINCe0KIgMCDQlNCeIDFcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aW1lICogcmVzdWx0RGlzdGFuY2U7XHJcbiAgICAgICAgLy8gY29uc3QgaXNGaW5pc2hlZCA9IHJlc3VsdCA+IHJlc3VsdERpc3RhbmNlO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgIGNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Jlc3VsdH1weCkgc2NhbGUoLTEsIDEpYDtcclxuICAgICAgICBpZiAodGltZSA8IDEpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZXN0YW1wKSA9PiBzdGVwKHRpbWVzdGFtcCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuaW1hdGlvbkluZm8uaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWVzdGFtcCkgPT4gc3RlcCh0aW1lc3RhbXApKTtcclxuICAgIHJldHVybiBhbmltYXRpb25JbmZvO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyQmxvY2tFbGVtZW50KGNhckRhdGEpIHtcclxuICAgIGNvbnN0IGNhckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJCbG9jay5jbGFzc05hbWUgPSAnY2FyLWJsb2NrJztcclxuICAgIGNhckJsb2NrLmlkID0gYCR7Y2FyRGF0YS5pZH1gO1xyXG4gICAgY2FyQmxvY2suaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiY2FyLWJsb2NrX19oZWFkXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInNlbGVjdFwiPlNlbGVjdDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICA8c3BhbiBjbGFzcz1cImNhcl9fbmFtZVwiPiR7Y2FyRGF0YS5uYW1lfTwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjYXItYmxvY2tfX2JvZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW5naW5lLWJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzdGFydC1yYWNlLWJ1dHRvblwiPkE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzdG9wLXJhY2UtYnV0dG9uXCI+QjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWNlXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJjYXJfX2ltZ1wiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLW9wYWNpdHk9XCIwLjJcIiBmaWxsPSR7Y2FyRGF0YS5jb2xvcn0gdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjMxLjQ0NXB4XCIgaGVpZ2h0PVwiMzEuNDQ1cHhcIlxuICAgICAgICAgdmlld0JveD1cIjAgMCAzMS40NDUgMzEuNDQ1XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NSAzMS40NDU7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInNjYWxlKC0xLCAxKVwiPlxuICAgICAgICAgPGc+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk03LjU5MiwxNi44NmMtMS43NywwLTMuMjAzLDEuNDM0LTMuMjAzLDMuMjA0czEuNDM0LDMuMjA0LDMuMjAzLDMuMjA0YzEuNzY4LDAsMy4yMDMtMS40MzQsMy4yMDMtMy4yMDRcbiAgICAgICAgICBTOS4zNiwxNi44Niw3LjU5MiwxNi44NnogTTcuNTkyLDIxLjAzMmMtMC41MzIsMC0wLjk2OC0wLjQzNC0wLjk2OC0wLjk2N3MwLjQzNi0wLjk2NywwLjk2OC0wLjk2N1xuICAgICAgICAgIGMwLjUzMSwwLDAuOTY2LDAuNDM0LDAuOTY2LDAuOTY3UzguMTI0LDIxLjAzMiw3LjU5MiwyMS4wMzJ6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMC45MTUsMTcuNDM5bC0wLjUyNC00LjI2MmMtMC4xMDMtMC44MTgtMC44MTgtMS40MTgtMS42NDMtMS4zNzNMMjcuNiwxMS44NjhsLTMuNTY0LTMuMjExXG4gICAgICAgICAgICBjLTAuMzQ0LTAuMzA5LTAuNzg3LTAuNDc5LTEuMjQ5LTAuNDc5bC03LjI0MS0wLjAwMWMtMS42MjUsMC0zLjIwMSwwLjU1NS00LjQ2OCwxLjU3M2wtNC4wNCwzLjI0NmwtNS40MzMsMS4zNThcbiAgICAgICAgICAgIGMtMC42OTgsMC4xNzQtMS4xODgsMC44MDItMS4xODgsMS41MjF2MS41NjZDMC4xODcsMTcuNDQsMCwxNy42MjYsMCwxNy44NTZ2Mi4wNzFjMCwwLjI5NSwwLjIzOSwwLjUzNCwwLjUzNCwwLjUzNGgzLjA2N1xuICAgICAgICAgICAgYy0wLjAxMy0wLjEzMy0wLjA0LTAuMjYtMC4wNC0wLjM5NmMwLTIuMjI3LDEuODA0LTQuMDI5LDQuMDMtNC4wMjlzNC4wMjksMS44MDIsNC4wMjksNC4wMjljMCwwLjEzNy0wLjAyOCwwLjI2NC0wLjA0MSwwLjM5NlxuICAgICAgICAgICAgICAgIGg4LjQ5M2MtMC4wMTItMC4xMzMtMC4wMzktMC4yNi0wLjAzOS0wLjM5NmMwLTIuMjI3LDEuODA0LTQuMDI5LDQuMDI5LTQuMDI5YzIuMjI3LDAsNC4wMjgsMS44MDIsNC4wMjgsNC4wMjlcbiAgICAgICAgICAgICAgICBjMCwwLjEzNy0wLjAyNiwwLjI2NC0wLjA0LDAuMzk2aDIuODYxYzAuMjk1LDAsMC41MzMtMC4yMzksMC41MzMtMC41MzR2LTEuOTUzQzMxLjQ0OSwxNy42OCwzMS4yMSwxNy40MzksMzAuOTE1LDE3LjQzOXpcbiAgICAgICAgICAgICAgICAgIE0yMC4xNjgsMTIuMjAybC0xMC4xMDIsMC41MTFMMTIsMTEuMTU4YzEuMDUxLTAuODQ1LDIuMzU3LTEuMzA1LDMuNzA2LTEuMzA1aDQuNDYyVjEyLjIwMnogTTIxLjg0NiwxMi4xMTdWOS44NTRoMC42NTdcbiAgICAgICAgICAgICAgICAgIGMwLjIyOCwwLDAuNDQ3LDAuMDg0LDAuNjE2LDAuMjM3bDIuMDYyLDEuODU2TDIxLjg0NiwxMi4xMTd6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNC4wNjQsMTYuODZjLTEuNzcsMC0zLjIwMywxLjQzNC0zLjIwMywzLjIwNHMxLjQzNCwzLjIwNCwzLjIwMywzLjIwNGMxLjc2OSwwLDMuMjAzLTEuNDM0LDMuMjAzLTMuMjA0XG4gICAgICAgICAgICAgICAgICBTMjUuODMzLDE2Ljg2LDI0LjA2NCwxNi44NnogTTI0LjA2NCwyMS4wMzJjLTAuNTMzLDAtMC45NjctMC40MzQtMC45NjctMC45NjdzMC40MzQtMC45NjcsMC45NjctMC45NjdcbiAgICAgICAgICAgICAgICBjMC41MzEsMCwwLjk2NywwLjQzNCwwLjk2NywwLjk2N1MyNC41OTYsMjEuMDMyLDI0LjA2NCwyMS4wMzJ6XCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPHN2ZyBjbGFzcz1cImZsYWdcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMDAuMzQ0IDMwMC4zNDRcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLjM0NCAzMDAuMzQ0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0yODkuMjg2LDI4LjM2Yy02Ljc3My0zLjM4Ni0xNC44ODUtMi42NTUtMjAuOTQ1LDEuODkyYy0yMy4zODcsMTcuNTQ3LTQ2LjAxNCwxMC4zOTUtODAuOTkyLTIuNzI4XG4gICAgICAgIGMtMzQuMjgxLTEyLjg1OS03Ni45NDItMjguODYxLTExOS4wNDcsMi43MjhjLTUuMDM0LDMuNzc3LTcuOTk3LDkuNzA0LTcuOTk3LDE1Ljk5OHYxMTkuMTEyYzAsNy41NzYsNC4yODEsMTQuNTAyLDExLjA1OCwxNy44OVxuICAgICAgICBzMTQuODg3LDIuNjU0LDIwLjk0NS0xLjg5MmMyMy4zODctMTcuNTQ3LDQ2LjAxNC0xMC4zOTUsODAuOTkyLDIuNzI4YzE5LjUxMyw3LjMxOSw0MS43MzksMTUuNjU3LDY1LjAzNCwxNS42NTdcbiAgICAgICAgYzE3LjYzMSwwLDM1Ljg3NC00Ljc3Niw1NC4wMTMtMTguMzg1YzUuMDM0LTMuNzc3LDcuOTk3LTkuNzA0LDcuOTk3LTE1Ljk5OFY0Ni4yNUMzMDAuMzQ0LDM4LjY3NCwyOTYuMDYzLDMxLjc0OCwyODkuMjg2LDI4LjM2elwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjAsNy44MTljLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwdjI0NC43MDVjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBzMjAtOC45NTQsMjAtMjBWMjcuODE5XG4gICAgICAgIEM0MCwxNi43NzMsMzEuMDQ2LDcuODE5LDIwLDcuODE5elwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xyXG4gICAgcmV0dXJuIGNhckJsb2NrO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XHJcbmltcG9ydCAnLi9nbG9iYWwuc2Nzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3ZpZXcvZ2FyYWdlL2dhcmFnZS5zY3NzJztcclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuc3RhcnQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9