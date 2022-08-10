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

/***/ "./src/components/view/winners/winners.scss":
/*!**************************************************!*\
  !*** ./src/components/view/winners/winners.scss ***!
  \**************************************************/
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
/* harmony import */ var _view_winners_winners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/winners/winners */ "./src/components/view/winners/winners.ts");



class App {
    constructor() {
        this.controller = new _controller_appController__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.winners = new _view_winners_winners__WEBPACK_IMPORTED_MODULE_2__["default"](this.controller);
        this.garage = new _view_garage_garage__WEBPACK_IMPORTED_MODULE_1__["default"](this.controller, this.winners);
    }
    static getWinnersAndGarageBlocks() {
        const garage = document.querySelector('.garage');
        const winners = document.querySelector('.winners');
        return { garage, winners };
    }
    static showGarage() {
        const winnerAndGarage = App.getWinnersAndGarageBlocks();
        winnerAndGarage.garage?.classList.remove('hiden');
        winnerAndGarage.winners?.classList.add('hiden');
    }
    static showWinners() {
        const winnerAndGarage = App.getWinnersAndGarageBlocks();
        winnerAndGarage.garage?.classList.add('hiden');
        winnerAndGarage.winners?.classList.remove('hiden');
    }
    async start() {
        const winnersButton = document.querySelector('.winners-button');
        const garageButton = document.querySelector('.garage-button');
        winnersButton?.addEventListener('click', () => App.showWinners());
        garageButton?.addEventListener('click', () => App.showGarage());
        this.garage.refreshGarage();
        this.winners.renderWinnersPage();
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
class AppController {
    constructor() {
        this.apiUrl = 'http://127.0.0.1:3000';
    }
    async getCars(params) {
        const res = await AppController.request(this.apiUrl + '/garage?' + new URLSearchParams(params), 'GET');
        return res.json();
    }
    async getCar(id) {
        const res = await AppController.request(this.apiUrl + `/garage/${id}`, 'GET');
        return res.json();
    }
    async createCar(data) {
        const res = await AppController.request(this.apiUrl + '/garage', 'POST', data);
        return res;
    }
    async updateCar(id, data) {
        const res = await AppController.request(this.apiUrl + `/garage/${id}`, 'PUT', data);
        return res;
    }
    async deleteCar(id) {
        const res = await AppController.request(this.apiUrl + `/garage/${id}`, 'DELETE');
        return res;
    }
    async ruleCarEngine(id, status) {
        const res = await AppController.request(this.apiUrl + '/engine?' + new URLSearchParams({ id: `${id}`, status }), 'PATCH');
        return res.json();
    }
    async driveCarEngine(id, status) {
        const res = await AppController.request(this.apiUrl + '/engine?' + new URLSearchParams({ id: `${id}`, status }), 'PATCH').catch();
        return res.status !== 200 ? { success: false } : { success: true };
    }
    async getWinners(params) {
        const res = await AppController.request(this.apiUrl + '/winners?' + new URLSearchParams(params), 'GET');
        return res.json();
    }
    async getWinner(id) {
        const winner = await AppController.request(this.apiUrl + `/winners/${id}`, 'GET');
        return winner.json();
    }
    async createWinner(data) {
        const res = await AppController.request(this.apiUrl + '/winners', 'POST', data);
        return res;
    }
    async deleteWinner(id) {
        const winner = await AppController.request(this.apiUrl + `/winners/${id}`, 'DELETE');
        return winner.json();
    }
    async updateWinner(data) {
        const winner = await AppController.request(this.apiUrl + `/winners/${data.id}`, 'PUT', data);
        return winner.json();
    }
    static async request(url, method, data) {
        const res = await fetch(url, { method, body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
        return res;
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

class Garage {
    constructor(controller, winners) {
        this.controller = controller;
        this.winners = winners;
        this.allCars = [];
        this.pageLimit = 7;
        this.currentPage = 1;
        this.carsInPage = [];
        this.storage = { animations: [] };
        this.selectedCarId = 0;
        this.textUpdateInput = document.getElementById('text-update');
        this.colorUpdateInput = document.getElementById('colorpicker-update');
        this.generateCarsButton = document.getElementById('generate-cars-button');
        this.createButton = document.getElementById('create-button');
        this.initGarage();
    }
    async initGarage() {
        const updateButton = document.getElementById('update-button');
        const startRaceButton = document.querySelector('.start-race-button');
        const resetButton = document.querySelector('.reset-button');
        startRaceButton?.addEventListener('click', () => this.startRace());
        resetButton?.addEventListener('click', () => this.resetCars());
        this.generateCarsButton?.addEventListener('click', () => this.generateCars(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.generateCarsNumber));
        this.createButton?.addEventListener('click', () => this.createCar());
        updateButton?.addEventListener('click', () => this.updateCar());
    }
    async refreshGarage() {
        this.allCars = await this.controller.getCars();
        await this.renderCarsPage(this.currentPage);
        this.renderCarsAmount();
        this.renderPaginationButtons();
    }
    async changePage(page) {
        this.currentPage = page;
        this.renderPageNumber();
        await this.renderCarsPage(page);
    }
    renderPaginationButtons() {
        const buttonsContainer = document.querySelector('.pagination');
        const pagesNumber = this.allCars.length / this.pageLimit;
        const buttons = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getPaginationButtons)(pagesNumber);
        if (buttonsContainer) {
            buttonsContainer.innerHTML = '';
            buttons.forEach((button, index) => {
                button.addEventListener('click', () => this.changePage(index + 1));
                buttonsContainer.append(button);
            });
        }
    }
    async renderCarsPage(page) {
        const carsData = await this.controller.getCars({ _page: `${page}`, _limit: `${this.pageLimit}` });
        this.carsInPage = carsData;
        const carBlocksContainer = document.querySelector('.cars-list');
        if (carBlocksContainer) {
            carBlocksContainer.innerHTML = '';
            this.carsInPage.forEach((car) => {
                const carBlock = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createCarBlockElement)(car);
                this.setCarBlockListeners(carBlock);
                carBlocksContainer?.append(carBlock);
            });
        }
    }
    setCarBlockListeners(carBlock) {
        const deleteButton = carBlock.querySelector('.delete');
        const selectButton = carBlock.querySelector('.select');
        const startRaceButton = carBlock.querySelector(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.startRaceButtonClass);
        const stopRaceButton = carBlock.querySelector(_utils_utils__WEBPACK_IMPORTED_MODULE_0__.stopRaceButtonClass);
        deleteButton?.addEventListener('click', () => this.deleteCar(+carBlock.id));
        selectButton?.addEventListener('click', () => this.selectCar(+carBlock.id));
        startRaceButton?.addEventListener('click', () => this.startCarEngine(+carBlock.id));
        stopRaceButton?.addEventListener('click', () => this.stopCarEngine(+carBlock.id));
    }
    renderCarsAmount() {
        const carsAmountElement = document.querySelector('.cars-amount');
        if (carsAmountElement) {
            carsAmountElement.textContent = `${this.allCars.length}`;
        }
    }
    renderPageNumber() {
        const pageNumberElement = document.querySelector('.page-number');
        if (pageNumberElement) {
            pageNumberElement.textContent = `${this.currentPage}`;
        }
    }
    async generateCars(n) {
        const responses = [];
        for (let i = 0; i < n; i += 1) {
            const randomColor = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomColor)();
            const randomName = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomCarName)();
            responses.push(this.controller.createCar({ color: randomColor, name: randomName }));
        }
        await Promise.all(responses);
        await this.refreshGarage();
    }
    async deleteCar(id) {
        await this.controller.deleteCar(id);
        await this.refreshGarage();
    }
    async createCar() {
        const textInput = document.getElementById('text-create');
        const colorInput = document.getElementById('colorpicker-create');
        if (textInput && colorInput) {
            const name = textInput.value ? textInput.value : _utils_utils__WEBPACK_IMPORTED_MODULE_0__.unknownCarName;
            await this.controller.createCar({ name, color: colorInput.value });
            await this.refreshGarage();
        }
    }
    selectCar(id) {
        const selectedCarBlock = document.getElementById(`${id}`);
        const pastSelectedCarBlock = document.getElementById(`${this.selectedCarId}`);
        const selectedCarName = selectedCarBlock?.querySelector('.car__name')?.textContent;
        const selectedCarColor = selectedCarBlock?.querySelector('.car__img')?.getAttribute('fill');
        if (this.textUpdateInput && this.colorUpdateInput && selectedCarColor && selectedCarName) {
            this.textUpdateInput.value = selectedCarName;
            this.colorUpdateInput.value = selectedCarColor;
        }
        if (this.selectedCarId === id) {
            selectedCarBlock?.classList.toggle('selected');
        }
        else {
            selectedCarBlock?.classList.add('selected');
            pastSelectedCarBlock?.classList.remove('selected');
        }
        this.selectedCarId = id;
    }
    async updateCar() {
        if (this.textUpdateInput && this.colorUpdateInput) {
            await this.controller.updateCar(this.selectedCarId, {
                name: this.textUpdateInput.value, color: this.colorUpdateInput.value
            });
            this.textUpdateInput.value = '';
        }
        await this.refreshGarage();
    }
    static getCarBlockElements(id) {
        const carBlock = document.getElementById(`${id}`);
        const carImg = carBlock?.querySelector('.car__img');
        const flag = carBlock?.querySelector('.flag');
        return { block: carBlock, img: carImg, flag: flag };
    }
    async startCarEngine(id) {
        const carElements = Garage.getCarBlockElements(id);
        const engineData = await this.controller.ruleCarEngine(id, 'started');
        const animationTime = engineData.distance / engineData.velocity;
        let driveRes = {
            success: false
        };
        if (carElements.img && carElements.flag) {
            const distanceBetweenCarAndFlag = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getDistanceBetweenElems)(carElements.img, carElements.flag);
            this.storage.animations[id] = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.carDriveAnimation)(carElements.img, distanceBetweenCarAndFlag, animationTime);
            driveRes = await this.controller.driveCarEngine(id, 'drive');
            if (!driveRes.success) {
                cancelAnimationFrame(this.storage.animations[id].id);
            }
            else {
                return Promise.resolve({ id, time: animationTime });
            }
        }
        return Promise.reject(id);
    }
    async startRace() {
        const responses = [];
        this.carsInPage.forEach((car) => {
            responses.push(this.startCarEngine(car.id));
        });
        const winnerIdAndTime = await Promise.any(responses).catch(() => {
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.renderWinnerMessage)(false, '', 0);
        });
        if (winnerIdAndTime) {
            const winnerInfo = this.carsInPage.find((winner) => winner.id === winnerIdAndTime.id);
            const winnerName = winnerInfo?.name;
            if (winnerName) {
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.renderWinnerMessage)(true, winnerName, winnerIdAndTime.time);
            }
            if (winnerInfo) {
                this.winners.addWinnerInfo({
                    id: winnerInfo.id,
                    name: winnerInfo.name,
                    color: winnerInfo.color,
                    time: winnerIdAndTime.time
                });
            }
        }
    }
    async stopCarEngine(id) {
        const carElements = Garage.getCarBlockElements(id);
        if (carElements.img) {
            await this.controller.ruleCarEngine(id, 'stopped');
            cancelAnimationFrame(this.storage.animations[id].id);
            carElements.img.style.transform = 'translateX(0) scale(-1, 1)';
        }
    }
    async resetCars() {
        const winnerMessage = document.querySelector('.winner-message');
        this.carsInPage.forEach((car) => {
            this.stopCarEngine(car.id);
        });
        winnerMessage?.remove();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Garage);


/***/ }),

/***/ "./src/components/view/winners/winners.ts":
/*!************************************************!*\
  !*** ./src/components/view/winners/winners.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");

class Winners {
    constructor(controller) {
        this.controller = controller;
        this.pageLimit = 10;
        this.allWinners = [];
        this.winnersOnPage = [];
        this.allCars = [];
        this.currentPage = 1;
        this.currentSort = 'wins';
        this.currentOrder = 'DESC';
        this.initWinners();
    }
    async initWinners() {
        const winnersView = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createWinnersView)();
        const page = document.querySelector('.page');
        page?.append(winnersView);
        const winsCell = document.getElementById('wins');
        const idCell = document.getElementById('id');
        const timeCell = document.getElementById('time');
        winsCell?.addEventListener('click', (e) => this.sortWinners(e));
        winsCell?.append((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getArrow)());
        idCell?.addEventListener('click', (e) => this.sortWinners(e));
        timeCell?.addEventListener('click', (e) => this.sortWinners(e));
        this.allCars = await this.controller.getCars();
        this.allWinners = await this.controller.getWinners();
        await this.refreshWinners();
    }
    async getWinnersPage(page, sort, order) {
        this.winnersOnPage = await this.controller.getWinners({
            _page: `${page}`, _limit: `${this.pageLimit}`, _sort: sort, _order: order
        });
        return this.winnersOnPage;
    }
    async sortWinners(e) {
        document.querySelector('.arrow')?.remove();
        const target = e.target;
        const arrow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getArrow)();
        this.currentOrder = this.currentOrder === 'DESC' ? 'ASC' : 'DESC';
        if (this.currentOrder === 'ASC') {
            arrow.classList.remove('down');
        }
        target.append(arrow);
        this.currentSort = target.id;
        await this.renderWinnersPage();
    }
    async renderWinnersPage() {
        const winnersData = await this.getWinnersPage(this.currentPage, this.currentSort, this.currentOrder);
        const winnersTableBody = document.querySelector('.winners__table__body');
        if (winnersTableBody) {
            winnersTableBody.innerHTML = '';
            winnersData.forEach((winnerData) => {
                const winnerCar = this.allCars.find((car) => {
                    return car.id === winnerData.id;
                });
                if (winnerCar && winnersTableBody) {
                    const tableRow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createWinnerTableRow)({
                        id: winnerData.id,
                        name: winnerCar.name,
                        color: winnerCar.color,
                        time: winnerData.time,
                        wins: winnerData.wins
                    });
                    winnersTableBody.append(tableRow);
                }
            });
        }
    }
    async createWinner(id, wins, time) {
        await this.controller.createWinner({ id, wins, time });
        await this.refreshWinners();
    }
    async updateWinner(id, wins, time, lastTime) {
        const bestTime = time < lastTime ? time : lastTime;
        await this.controller.updateWinner({ id, wins, time: bestTime });
        await this.refreshWinners();
    }
    async addWinnerInfo(winnerInfo) {
        const isExist = this.allWinners.find((winner) => {
            return winner.id === winnerInfo.id;
        });
        if (isExist) {
            await this.updateWinner(winnerInfo.id, isExist.wins + 1, winnerInfo.time, isExist.time);
        }
        else {
            await this.createWinner(winnerInfo.id, 1, winnerInfo.time);
        }
    }
    renderPaginationButtons() {
        const buttonsContainer = document.querySelector('.winners-pagination');
        const pagesNumber = this.allWinners.length / this.pageLimit;
        const buttons = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getPaginationButtons)(pagesNumber);
        if (buttonsContainer) {
            buttonsContainer.innerHTML = '';
            buttons.forEach((button, index) => {
                button.addEventListener('click', () => this.changePage(index + 1));
                buttonsContainer.append(button);
            });
        }
    }
    async changePage(page) {
        this.currentPage = page;
        await this.renderWinnersPage();
    }
    async refreshWinners() {
        this.allWinners = await this.controller.getWinners();
        await this.renderWinnersPage();
        this.renderPaginationButtons();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Winners);


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
/* harmony export */   "createWinnerTableRow": () => (/* binding */ createWinnerTableRow),
/* harmony export */   "createWinnersView": () => (/* binding */ createWinnersView),
/* harmony export */   "generateCarsNumber": () => (/* binding */ generateCarsNumber),
/* harmony export */   "getArrow": () => (/* binding */ getArrow),
/* harmony export */   "getDistanceBetweenElems": () => (/* binding */ getDistanceBetweenElems),
/* harmony export */   "getPaginationButtons": () => (/* binding */ getPaginationButtons),
/* harmony export */   "getRandomCarName": () => (/* binding */ getRandomCarName),
/* harmony export */   "getRandomColor": () => (/* binding */ getRandomColor),
/* harmony export */   "renderWinnerMessage": () => (/* binding */ renderWinnerMessage),
/* harmony export */   "startRaceButtonClass": () => (/* binding */ startRaceButtonClass),
/* harmony export */   "stopRaceButtonClass": () => (/* binding */ stopRaceButtonClass),
/* harmony export */   "unknownCarName": () => (/* binding */ unknownCarName)
/* harmony export */ });
const carsDB = {
    BMW: ['Gran Coupe', 'Active Tourer', 'Saloon', 'Z4 Roadster'],
    AUDI: ['e-tron', 'RS 7', 'Q8', 'Q6', 'Q3'],
    ISUZU: ['D-Max', 'MU-X', 'Mysterious Utility'],
    FORD: ['Kuga', 'Explorer', 'Fiesta', 'Edge'],
    FERRARI: [
        'LaFerrari',
        'Pisra Spider',
        'Portofino',
        'Challenge',
        'LaFerrari Aperta'
    ],
    HAVAL: ['Big Dog']
};
const getArrow = () => {
    const arrow = document.createElement('div');
    arrow.className = 'arrow down';
    arrow.innerHTML = `<svg data-name="1-Arrow Up"
  xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1
    1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/>
    </svg>`;
    return arrow;
};
const getColoredSvg = (color) => {
    return `<svg class="car__img" stroke="white" stroke-opacity="0.2" fill=${color} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
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
  </svg>`;
};
const unknownCarName = 'Unknown';
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
        const time = (timeStamp - start) / animationDuration;
        const result = time * resultDistance;
        // eslint-disable-next-line no-param-reassign
        car.style.transform = `translateX(${result}px) scale(-1, 1)`;
        if (time < 1) {
            animationInfo.id = requestAnimationFrame((timestamp) => step(timestamp));
        }
    }
    animationInfo.id = requestAnimationFrame((timestamp) => step(timestamp));
    return animationInfo;
};
const createPaginationButton = (numberOfPage) => {
    const paginationButton = document.createElement('button');
    paginationButton.className = 'pagination-button';
    paginationButton.textContent = `${numberOfPage}`;
    return paginationButton;
};
const getPaginationButtons = (pagesNumber) => {
    const buttons = [];
    for (let i = 0; i < pagesNumber; i += 1) {
        buttons.push(createPaginationButton(i + 1));
    }
    return buttons;
};
const createWinnerMessage = (isFinished, name, time) => {
    const messageBlock = document.createElement('div');
    const messageText = document.createElement('span');
    messageBlock.className = 'winner-message';
    messageText.className = 'winner-message__text';
    messageText.textContent = isFinished ? `Winner is ${name}, time: ${(time / 1000).toFixed(2)}s` : 'No one Finished';
    messageBlock.append(messageText);
    return messageBlock;
};
const createWinnersTable = () => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const idCell = document.createElement('th');
    const carCell = document.createElement('th');
    const nameCell = document.createElement('th');
    const winsCell = document.createElement('th');
    const timeCell = document.createElement('th');
    const tableBody = document.createElement('tbody');
    table.className = 'winners__table';
    tableBody.className = 'winners__table__body';
    idCell.id = 'id';
    idCell.textContent = 'Id';
    carCell.textContent = 'Car';
    nameCell.textContent = 'Name';
    winsCell.id = 'wins';
    winsCell.textContent = 'Wins';
    timeCell.id = 'time';
    timeCell.textContent = 'Time';
    headRow.append(idCell, carCell, nameCell, winsCell, timeCell);
    tableHead.append(headRow);
    table.append(tableHead, tableBody);
    return table;
};
const createWinnersView = () => {
    const winnersView = document.createElement('div');
    const tableContainer = document.createElement('div');
    const winnersTable = createWinnersTable();
    tableContainer.append(winnersTable);
    tableContainer.className = ('winners-table-container');
    const winnersPagination = document.createElement('div');
    winnersView.className = 'winners hiden';
    winnersPagination.className = ('winners-pagination');
    winnersView.append(tableContainer, winnersPagination);
    return winnersView;
};
const createWinnerTableRow = (winnerData) => {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    const carCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const winsCell = document.createElement('td');
    const timeCell = document.createElement('td');
    idCell.textContent = `${winnerData.id}`;
    carCell.innerHTML = getColoredSvg(winnerData.color);
    nameCell.textContent = winnerData.name;
    winsCell.textContent = `${winnerData.wins}`;
    timeCell.textContent = `${(winnerData.time / 1000).toFixed(2)}`;
    row.append(idCell, carCell, nameCell, winsCell, timeCell);
    return row;
};
const renderWinnerMessage = (isFinished, name, time) => {
    const garage = document.querySelector('.garage');
    const message = createWinnerMessage(isFinished, name, time);
    garage?.append(message);
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
      ${getColoredSvg(carData.color)}
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
/* harmony import */ var _components_view_winners_winners_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/view/winners/winners.scss */ "./src/components/view/winners/winners.scss");




const app = new _components_app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDelFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDaEI7QUFDdUI7QUFDRTtBQUNoRCxnQkFBZ0IsMkRBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2dhcmFnZS9nYXJhZ2Uuc2Nzcz8xNmMyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvd2lubmVycy93aW5uZXJzLnNjc3M/NDNlYyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsLnNjc3M/ODE4ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvYXBwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2dhcmFnZS9nYXJhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy93aW5uZXJzL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgQXBwQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL2FwcENvbnRyb2xsZXInO1xyXG5pbXBvcnQgR2FyYWdlIGZyb20gJy4uL3ZpZXcvZ2FyYWdlL2dhcmFnZSc7XHJcbmltcG9ydCBXaW5uZXJzIGZyb20gJy4uL3ZpZXcvd2lubmVycy93aW5uZXJzJztcclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBBcHBDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy53aW5uZXJzID0gbmV3IFdpbm5lcnModGhpcy5jb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmdhcmFnZSA9IG5ldyBHYXJhZ2UodGhpcy5jb250cm9sbGVyLCB0aGlzLndpbm5lcnMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFdpbm5lcnNBbmRHYXJhZ2VCbG9ja3MoKSB7XHJcbiAgICAgICAgY29uc3QgZ2FyYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xyXG4gICAgICAgIGNvbnN0IHdpbm5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycycpO1xyXG4gICAgICAgIHJldHVybiB7IGdhcmFnZSwgd2lubmVycyB9O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNob3dHYXJhZ2UoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyQW5kR2FyYWdlID0gQXBwLmdldFdpbm5lcnNBbmRHYXJhZ2VCbG9ja3MoKTtcclxuICAgICAgICB3aW5uZXJBbmRHYXJhZ2UuZ2FyYWdlPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlbicpO1xyXG4gICAgICAgIHdpbm5lckFuZEdhcmFnZS53aW5uZXJzPy5jbGFzc0xpc3QuYWRkKCdoaWRlbicpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNob3dXaW5uZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lckFuZEdhcmFnZSA9IEFwcC5nZXRXaW5uZXJzQW5kR2FyYWdlQmxvY2tzKCk7XHJcbiAgICAgICAgd2lubmVyQW5kR2FyYWdlLmdhcmFnZT8uY2xhc3NMaXN0LmFkZCgnaGlkZW4nKTtcclxuICAgICAgICB3aW5uZXJBbmRHYXJhZ2Uud2lubmVycz8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZW4nKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lcnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1idXR0b24nKTtcclxuICAgICAgICBjb25zdCBnYXJhZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLWJ1dHRvbicpO1xyXG4gICAgICAgIHdpbm5lcnNCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQXBwLnNob3dXaW5uZXJzKCkpO1xyXG4gICAgICAgIGdhcmFnZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBcHAuc2hvd0dhcmFnZSgpKTtcclxuICAgICAgICB0aGlzLmdhcmFnZS5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICAgICAgdGhpcy53aW5uZXJzLnJlbmRlcldpbm5lcnNQYWdlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJjbGFzcyBBcHBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRDYXJzKHBhcmFtcykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvZ2FyYWdlPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyksICdHRVQnKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldENhcihpZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvZ2FyYWdlLyR7aWR9YCwgJ0dFVCcpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY3JlYXRlQ2FyKGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyAnL2dhcmFnZScsICdQT1NUJywgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGFzeW5jIHVwZGF0ZUNhcihpZCwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvZ2FyYWdlLyR7aWR9YCwgJ1BVVCcsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkZWxldGVDYXIoaWQpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL2dhcmFnZS8ke2lkfWAsICdERUxFVEUnKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcnVsZUNhckVuZ2luZShpZCwgc3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy9lbmdpbmU/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMoeyBpZDogYCR7aWR9YCwgc3RhdHVzIH0pLCAnUEFUQ0gnKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGRyaXZlQ2FyRW5naW5lKGlkLCBzdGF0dXMpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyAnL2VuZ2luZT8nICsgbmV3IFVSTFNlYXJjaFBhcmFtcyh7IGlkOiBgJHtpZH1gLCBzdGF0dXMgfSksICdQQVRDSCcpLmNhdGNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMgIT09IDIwMCA/IHsgc3VjY2VzczogZmFsc2UgfSA6IHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0V2lubmVycyhwYXJhbXMpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyAnL3dpbm5lcnM/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSwgJ0dFVCcpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0V2lubmVyKGlkKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC93aW5uZXJzLyR7aWR9YCwgJ0dFVCcpO1xyXG4gICAgICAgIHJldHVybiB3aW5uZXIuanNvbigpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY3JlYXRlV2lubmVyKGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyAnL3dpbm5lcnMnLCAnUE9TVCcsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkZWxldGVXaW5uZXIoaWQpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL3dpbm5lcnMvJHtpZH1gLCAnREVMRVRFJyk7XHJcbiAgICAgICAgcmV0dXJuIHdpbm5lci5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyB1cGRhdGVXaW5uZXIoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvd2lubmVycy8ke2RhdGEuaWR9YCwgJ1BVVCcsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiB3aW5uZXIuanNvbigpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIHJlcXVlc3QodXJsLCBtZXRob2QsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbWV0aG9kLCBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgeyBjYXJEcml2ZUFuaW1hdGlvbiwgY3JlYXRlQ2FyQmxvY2tFbGVtZW50LCBnZW5lcmF0ZUNhcnNOdW1iZXIsIGdldERpc3RhbmNlQmV0d2VlbkVsZW1zLCBnZXRQYWdpbmF0aW9uQnV0dG9ucywgZ2V0UmFuZG9tQ2FyTmFtZSwgZ2V0UmFuZG9tQ29sb3IsIHJlbmRlcldpbm5lck1lc3NhZ2UsIHN0YXJ0UmFjZUJ1dHRvbkNsYXNzLCBzdG9wUmFjZUJ1dHRvbkNsYXNzLCB1bmtub3duQ2FyTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcclxuY2xhc3MgR2FyYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIsIHdpbm5lcnMpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMud2lubmVycyA9IHdpbm5lcnM7XHJcbiAgICAgICAgdGhpcy5hbGxDYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5wYWdlTGltaXQgPSA3O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuY2Fyc0luUGFnZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHsgYW5pbWF0aW9uczogW10gfTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FySWQgPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dFVwZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtdXBkYXRlJyk7XHJcbiAgICAgICAgdGhpcy5jb2xvclVwZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9ycGlja2VyLXVwZGF0ZScpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYXJzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlLWNhcnMtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuaW5pdEdhcmFnZSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgaW5pdEdhcmFnZSgpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UmFjZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1yYWNlLWJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ1dHRvbicpO1xyXG4gICAgICAgIHN0YXJ0UmFjZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnN0YXJ0UmFjZSgpKTtcclxuICAgICAgICByZXNldEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlc2V0Q2FycygpKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2Fyc0J1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmdlbmVyYXRlQ2FycyhnZW5lcmF0ZUNhcnNOdW1iZXIpKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNyZWF0ZUNhcigpKTtcclxuICAgICAgICB1cGRhdGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy51cGRhdGVDYXIoKSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyByZWZyZXNoR2FyYWdlKCkge1xyXG4gICAgICAgIHRoaXMuYWxsQ2FycyA9IGF3YWl0IHRoaXMuY29udHJvbGxlci5nZXRDYXJzKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJDYXJzUGFnZSh0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNhcnNBbW91bnQoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBhZ2luYXRpb25CdXR0b25zKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjaGFuZ2VQYWdlKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLnJlbmRlclBhZ2VOdW1iZXIoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlckNhcnNQYWdlKHBhZ2UpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUGFnaW5hdGlvbkJ1dHRvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcGFnZXNOdW1iZXIgPSB0aGlzLmFsbENhcnMubGVuZ3RoIC8gdGhpcy5wYWdlTGltaXQ7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGdldFBhZ2luYXRpb25CdXR0b25zKHBhZ2VzTnVtYmVyKTtcclxuICAgICAgICBpZiAoYnV0dG9uc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBidXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2hhbmdlUGFnZShpbmRleCArIDEpKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHJlbmRlckNhcnNQYWdlKHBhZ2UpIHtcclxuICAgICAgICBjb25zdCBjYXJzRGF0YSA9IGF3YWl0IHRoaXMuY29udHJvbGxlci5nZXRDYXJzKHsgX3BhZ2U6IGAke3BhZ2V9YCwgX2xpbWl0OiBgJHt0aGlzLnBhZ2VMaW1pdH1gIH0pO1xyXG4gICAgICAgIHRoaXMuY2Fyc0luUGFnZSA9IGNhcnNEYXRhO1xyXG4gICAgICAgIGNvbnN0IGNhckJsb2Nrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzLWxpc3QnKTtcclxuICAgICAgICBpZiAoY2FyQmxvY2tzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNhckJsb2Nrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5jYXJzSW5QYWdlLmZvckVhY2goKGNhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyQmxvY2sgPSBjcmVhdGVDYXJCbG9ja0VsZW1lbnQoY2FyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyQmxvY2tMaXN0ZW5lcnMoY2FyQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgY2FyQmxvY2tzQ29udGFpbmVyPy5hcHBlbmQoY2FyQmxvY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDYXJCbG9ja0xpc3RlbmVycyhjYXJCbG9jaykge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RCdXR0b24gPSBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Jyk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRSYWNlQnV0dG9uID0gY2FyQmxvY2sucXVlcnlTZWxlY3RvcihzdGFydFJhY2VCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgY29uc3Qgc3RvcFJhY2VCdXR0b24gPSBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKHN0b3BSYWNlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmRlbGV0ZUNhcigrY2FyQmxvY2suaWQpKTtcclxuICAgICAgICBzZWxlY3RCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zZWxlY3RDYXIoK2NhckJsb2NrLmlkKSk7XHJcbiAgICAgICAgc3RhcnRSYWNlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3RhcnRDYXJFbmdpbmUoK2NhckJsb2NrLmlkKSk7XHJcbiAgICAgICAgc3RvcFJhY2VCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zdG9wQ2FyRW5naW5lKCtjYXJCbG9jay5pZCkpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQ2Fyc0Ftb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjYXJzQW1vdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzLWFtb3VudCcpO1xyXG4gICAgICAgIGlmIChjYXJzQW1vdW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjYXJzQW1vdW50RWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RoaXMuYWxsQ2Fycy5sZW5ndGh9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdlTnVtYmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtbnVtYmVyJyk7XHJcbiAgICAgICAgaWYgKHBhZ2VOdW1iZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXJFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGhpcy5jdXJyZW50UGFnZX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGdlbmVyYXRlQ2FycyhuKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBnZXRSYW5kb21Db2xvcigpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21OYW1lID0gZ2V0UmFuZG9tQ2FyTmFtZSgpO1xyXG4gICAgICAgICAgICByZXNwb25zZXMucHVzaCh0aGlzLmNvbnRyb2xsZXIuY3JlYXRlQ2FyKHsgY29sb3I6IHJhbmRvbUNvbG9yLCBuYW1lOiByYW5kb21OYW1lIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVzcG9uc2VzKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGRlbGV0ZUNhcihpZCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY29udHJvbGxlci5kZWxldGVDYXIoaWQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaEdhcmFnZSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY3JlYXRlQ2FyKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LWNyZWF0ZScpO1xyXG4gICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JwaWNrZXItY3JlYXRlJyk7XHJcbiAgICAgICAgaWYgKHRleHRJbnB1dCAmJiBjb2xvcklucHV0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0ZXh0SW5wdXQudmFsdWUgPyB0ZXh0SW5wdXQudmFsdWUgOiB1bmtub3duQ2FyTmFtZTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb250cm9sbGVyLmNyZWF0ZUNhcih7IG5hbWUsIGNvbG9yOiBjb2xvcklucHV0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3RDYXIoaWQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENhckJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XHJcbiAgICAgICAgY29uc3QgcGFzdFNlbGVjdGVkQ2FyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLnNlbGVjdGVkQ2FySWR9YCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXJOYW1lID0gc2VsZWN0ZWRDYXJCbG9jaz8ucXVlcnlTZWxlY3RvcignLmNhcl9fbmFtZScpPy50ZXh0Q29udGVudDtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENhckNvbG9yID0gc2VsZWN0ZWRDYXJCbG9jaz8ucXVlcnlTZWxlY3RvcignLmNhcl9faW1nJyk/LmdldEF0dHJpYnV0ZSgnZmlsbCcpO1xyXG4gICAgICAgIGlmICh0aGlzLnRleHRVcGRhdGVJbnB1dCAmJiB0aGlzLmNvbG9yVXBkYXRlSW5wdXQgJiYgc2VsZWN0ZWRDYXJDb2xvciAmJiBzZWxlY3RlZENhck5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0VXBkYXRlSW5wdXQudmFsdWUgPSBzZWxlY3RlZENhck5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JVcGRhdGVJbnB1dC52YWx1ZSA9IHNlbGVjdGVkQ2FyQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FySWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ2FyQmxvY2s/LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENhckJsb2NrPy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBwYXN0U2VsZWN0ZWRDYXJCbG9jaz8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcklkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBhc3luYyB1cGRhdGVDYXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dFVwZGF0ZUlucHV0ICYmIHRoaXMuY29sb3JVcGRhdGVJbnB1dCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbnRyb2xsZXIudXBkYXRlQ2FyKHRoaXMuc2VsZWN0ZWRDYXJJZCwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50ZXh0VXBkYXRlSW5wdXQudmFsdWUsIGNvbG9yOiB0aGlzLmNvbG9yVXBkYXRlSW5wdXQudmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFVwZGF0ZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaEdhcmFnZSgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldENhckJsb2NrRWxlbWVudHMoaWQpIHtcclxuICAgICAgICBjb25zdCBjYXJCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xyXG4gICAgICAgIGNvbnN0IGNhckltZyA9IGNhckJsb2NrPy5xdWVyeVNlbGVjdG9yKCcuY2FyX19pbWcnKTtcclxuICAgICAgICBjb25zdCBmbGFnID0gY2FyQmxvY2s/LnF1ZXJ5U2VsZWN0b3IoJy5mbGFnJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgYmxvY2s6IGNhckJsb2NrLCBpbWc6IGNhckltZywgZmxhZzogZmxhZyB9O1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RhcnRDYXJFbmdpbmUoaWQpIHtcclxuICAgICAgICBjb25zdCBjYXJFbGVtZW50cyA9IEdhcmFnZS5nZXRDYXJCbG9ja0VsZW1lbnRzKGlkKTtcclxuICAgICAgICBjb25zdCBlbmdpbmVEYXRhID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLnJ1bGVDYXJFbmdpbmUoaWQsICdzdGFydGVkJyk7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVGltZSA9IGVuZ2luZURhdGEuZGlzdGFuY2UgLyBlbmdpbmVEYXRhLnZlbG9jaXR5O1xyXG4gICAgICAgIGxldCBkcml2ZVJlcyA9IHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjYXJFbGVtZW50cy5pbWcgJiYgY2FyRWxlbWVudHMuZmxhZykge1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUJldHdlZW5DYXJBbmRGbGFnID0gZ2V0RGlzdGFuY2VCZXR3ZWVuRWxlbXMoY2FyRWxlbWVudHMuaW1nLCBjYXJFbGVtZW50cy5mbGFnKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmFuaW1hdGlvbnNbaWRdID0gY2FyRHJpdmVBbmltYXRpb24oY2FyRWxlbWVudHMuaW1nLCBkaXN0YW5jZUJldHdlZW5DYXJBbmRGbGFnLCBhbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgZHJpdmVSZXMgPSBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZHJpdmVDYXJFbmdpbmUoaWQsICdkcml2ZScpO1xyXG4gICAgICAgICAgICBpZiAoIWRyaXZlUmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RvcmFnZS5hbmltYXRpb25zW2lkXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgaWQsIHRpbWU6IGFuaW1hdGlvblRpbWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGlkKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHN0YXJ0UmFjZSgpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNhcnNJblBhZ2UuZm9yRWFjaCgoY2FyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlcy5wdXNoKHRoaXMuc3RhcnRDYXJFbmdpbmUoY2FyLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgd2lubmVySWRBbmRUaW1lID0gYXdhaXQgUHJvbWlzZS5hbnkocmVzcG9uc2VzKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcldpbm5lck1lc3NhZ2UoZmFsc2UsICcnLCAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAod2lubmVySWRBbmRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lckluZm8gPSB0aGlzLmNhcnNJblBhZ2UuZmluZCgod2lubmVyKSA9PiB3aW5uZXIuaWQgPT09IHdpbm5lcklkQW5kVGltZS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lck5hbWUgPSB3aW5uZXJJbmZvPy5uYW1lO1xyXG4gICAgICAgICAgICBpZiAod2lubmVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyV2lubmVyTWVzc2FnZSh0cnVlLCB3aW5uZXJOYW1lLCB3aW5uZXJJZEFuZFRpbWUudGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHdpbm5lckluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVycy5hZGRXaW5uZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogd2lubmVySW5mby5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aW5uZXJJbmZvLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdpbm5lckluZm8uY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogd2lubmVySWRBbmRUaW1lLnRpbWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RvcENhckVuZ2luZShpZCkge1xyXG4gICAgICAgIGNvbnN0IGNhckVsZW1lbnRzID0gR2FyYWdlLmdldENhckJsb2NrRWxlbWVudHMoaWQpO1xyXG4gICAgICAgIGlmIChjYXJFbGVtZW50cy5pbWcpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb250cm9sbGVyLnJ1bGVDYXJFbmdpbmUoaWQsICdzdG9wcGVkJyk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RvcmFnZS5hbmltYXRpb25zW2lkXS5pZCk7XHJcbiAgICAgICAgICAgIGNhckVsZW1lbnRzLmltZy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSBzY2FsZSgtMSwgMSknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHJlc2V0Q2FycygpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXJNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1tZXNzYWdlJyk7XHJcbiAgICAgICAgdGhpcy5jYXJzSW5QYWdlLmZvckVhY2goKGNhcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BDYXJFbmdpbmUoY2FyLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5uZXJNZXNzYWdlPy5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYXJhZ2U7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdpbm5lcnNWaWV3LCBjcmVhdGVXaW5uZXJUYWJsZVJvdywgZ2V0QXJyb3csIGdldFBhZ2luYXRpb25CdXR0b25zIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5jbGFzcyBXaW5uZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMucGFnZUxpbWl0ID0gMTA7XHJcbiAgICAgICAgdGhpcy5hbGxXaW5uZXJzID0gW107XHJcbiAgICAgICAgdGhpcy53aW5uZXJzT25QYWdlID0gW107XHJcbiAgICAgICAgdGhpcy5hbGxDYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U29ydCA9ICd3aW5zJztcclxuICAgICAgICB0aGlzLmN1cnJlbnRPcmRlciA9ICdERVNDJztcclxuICAgICAgICB0aGlzLmluaXRXaW5uZXJzKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbml0V2lubmVycygpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXJzVmlldyA9IGNyZWF0ZVdpbm5lcnNWaWV3KCk7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XHJcbiAgICAgICAgcGFnZT8uYXBwZW5kKHdpbm5lcnNWaWV3KTtcclxuICAgICAgICBjb25zdCB3aW5zQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5zJyk7XHJcbiAgICAgICAgY29uc3QgaWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgdGltZUNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpO1xyXG4gICAgICAgIHdpbnNDZWxsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnNvcnRXaW5uZXJzKGUpKTtcclxuICAgICAgICB3aW5zQ2VsbD8uYXBwZW5kKGdldEFycm93KCkpO1xyXG4gICAgICAgIGlkQ2VsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zb3J0V2lubmVycyhlKSk7XHJcbiAgICAgICAgdGltZUNlbGw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc29ydFdpbm5lcnMoZSkpO1xyXG4gICAgICAgIHRoaXMuYWxsQ2FycyA9IGF3YWl0IHRoaXMuY29udHJvbGxlci5nZXRDYXJzKCk7XHJcbiAgICAgICAgdGhpcy5hbGxXaW5uZXJzID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLmdldFdpbm5lcnMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hXaW5uZXJzKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRXaW5uZXJzUGFnZShwYWdlLCBzb3J0LCBvcmRlcikge1xyXG4gICAgICAgIHRoaXMud2lubmVyc09uUGFnZSA9IGF3YWl0IHRoaXMuY29udHJvbGxlci5nZXRXaW5uZXJzKHtcclxuICAgICAgICAgICAgX3BhZ2U6IGAke3BhZ2V9YCwgX2xpbWl0OiBgJHt0aGlzLnBhZ2VMaW1pdH1gLCBfc29ydDogc29ydCwgX29yZGVyOiBvcmRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpbm5lcnNPblBhZ2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzb3J0V2lubmVycyhlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93Jyk/LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGFycm93ID0gZ2V0QXJyb3coKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRPcmRlciA9IHRoaXMuY3VycmVudE9yZGVyID09PSAnREVTQycgPyAnQVNDJyA6ICdERVNDJztcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3JkZXIgPT09ICdBU0MnKSB7XHJcbiAgICAgICAgICAgIGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2Rvd24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0LmFwcGVuZChhcnJvdyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U29ydCA9IHRhcmdldC5pZDtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcldpbm5lcnNQYWdlKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyByZW5kZXJXaW5uZXJzUGFnZSgpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXJzRGF0YSA9IGF3YWl0IHRoaXMuZ2V0V2lubmVyc1BhZ2UodGhpcy5jdXJyZW50UGFnZSwgdGhpcy5jdXJyZW50U29ydCwgdGhpcy5jdXJyZW50T3JkZXIpO1xyXG4gICAgICAgIGNvbnN0IHdpbm5lcnNUYWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyc19fdGFibGVfX2JvZHknKTtcclxuICAgICAgICBpZiAod2lubmVyc1RhYmxlQm9keSkge1xyXG4gICAgICAgICAgICB3aW5uZXJzVGFibGVCb2R5LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB3aW5uZXJzRGF0YS5mb3JFYWNoKCh3aW5uZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5uZXJDYXIgPSB0aGlzLmFsbENhcnMuZmluZCgoY2FyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhci5pZCA9PT0gd2lubmVyRGF0YS5pZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbm5lckNhciAmJiB3aW5uZXJzVGFibGVCb2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGVSb3cgPSBjcmVhdGVXaW5uZXJUYWJsZVJvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB3aW5uZXJEYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aW5uZXJDYXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdpbm5lckNhci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogd2lubmVyRGF0YS50aW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5zOiB3aW5uZXJEYXRhLndpbnNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5uZXJzVGFibGVCb2R5LmFwcGVuZCh0YWJsZVJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGNyZWF0ZVdpbm5lcihpZCwgd2lucywgdGltZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY29udHJvbGxlci5jcmVhdGVXaW5uZXIoeyBpZCwgd2lucywgdGltZSB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hXaW5uZXJzKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyB1cGRhdGVXaW5uZXIoaWQsIHdpbnMsIHRpbWUsIGxhc3RUaW1lKSB7XHJcbiAgICAgICAgY29uc3QgYmVzdFRpbWUgPSB0aW1lIDwgbGFzdFRpbWUgPyB0aW1lIDogbGFzdFRpbWU7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jb250cm9sbGVyLnVwZGF0ZVdpbm5lcih7IGlkLCB3aW5zLCB0aW1lOiBiZXN0VGltZSB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hXaW5uZXJzKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBhZGRXaW5uZXJJbmZvKHdpbm5lckluZm8pIHtcclxuICAgICAgICBjb25zdCBpc0V4aXN0ID0gdGhpcy5hbGxXaW5uZXJzLmZpbmQoKHdpbm5lcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2lubmVyLmlkID09PSB3aW5uZXJJbmZvLmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc0V4aXN0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlV2lubmVyKHdpbm5lckluZm8uaWQsIGlzRXhpc3Qud2lucyArIDEsIHdpbm5lckluZm8udGltZSwgaXNFeGlzdC50aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlV2lubmVyKHdpbm5lckluZm8uaWQsIDEsIHdpbm5lckluZm8udGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyUGFnaW5hdGlvbkJ1dHRvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLXBhZ2luYXRpb24nKTtcclxuICAgICAgICBjb25zdCBwYWdlc051bWJlciA9IHRoaXMuYWxsV2lubmVycy5sZW5ndGggLyB0aGlzLnBhZ2VMaW1pdDtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZ2V0UGFnaW5hdGlvbkJ1dHRvbnMocGFnZXNOdW1iZXIpO1xyXG4gICAgICAgIGlmIChidXR0b25zQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jaGFuZ2VQYWdlKGluZGV4ICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2hhbmdlUGFnZShwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJXaW5uZXJzUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVmcmVzaFdpbm5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxXaW5uZXJzID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLmdldFdpbm5lcnMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcldpbm5lcnNQYWdlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdpbmF0aW9uQnV0dG9ucygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdpbm5lcnM7XHJcbiIsImV4cG9ydCBjb25zdCBjYXJzREIgPSB7XHJcbiAgICBCTVc6IFsnR3JhbiBDb3VwZScsICdBY3RpdmUgVG91cmVyJywgJ1NhbG9vbicsICdaNCBSb2Fkc3RlciddLFxyXG4gICAgQVVESTogWydlLXRyb24nLCAnUlMgNycsICdROCcsICdRNicsICdRMyddLFxyXG4gICAgSVNVWlU6IFsnRC1NYXgnLCAnTVUtWCcsICdNeXN0ZXJpb3VzIFV0aWxpdHknXSxcclxuICAgIEZPUkQ6IFsnS3VnYScsICdFeHBsb3JlcicsICdGaWVzdGEnLCAnRWRnZSddLFxyXG4gICAgRkVSUkFSSTogW1xyXG4gICAgICAgICdMYUZlcnJhcmknLFxyXG4gICAgICAgICdQaXNyYSBTcGlkZXInLFxyXG4gICAgICAgICdQb3J0b2Zpbm8nLFxyXG4gICAgICAgICdDaGFsbGVuZ2UnLFxyXG4gICAgICAgICdMYUZlcnJhcmkgQXBlcnRhJ1xyXG4gICAgXSxcclxuICAgIEhBVkFMOiBbJ0JpZyBEb2cnXVxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0QXJyb3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXJyb3cuY2xhc3NOYW1lID0gJ2Fycm93IGRvd24nO1xyXG4gICAgYXJyb3cuaW5uZXJIVE1MID0gYDxzdmcgZGF0YS1uYW1lPVwiMS1BcnJvdyBVcFwiXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgdmlld0JveD1cIjAgMCAzMiAzMlwiPjxwYXRoIGQ9XCJtMjYuNzEgMTAuMjktMTAtMTBhMVxuICAgIDEgMCAwIDAtMS40MSAwbC0xMCAxMCAxLjQxIDEuNDFMMTUgMy40MVYzMmgyVjMuNDFsOC4yOSA4LjI5elwiLz5cbiAgICA8L3N2Zz5gO1xyXG4gICAgcmV0dXJuIGFycm93O1xyXG59O1xyXG5jb25zdCBnZXRDb2xvcmVkU3ZnID0gKGNvbG9yKSA9PiB7XHJcbiAgICByZXR1cm4gYDxzdmcgY2xhc3M9XCJjYXJfX2ltZ1wiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLW9wYWNpdHk9XCIwLjJcIiBmaWxsPSR7Y29sb3J9IHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMzEuNDQ1cHhcIiBoZWlnaHQ9XCIzMS40NDVweFwiXG4gIHZpZXdCb3g9XCIwIDAgMzEuNDQ1IDMxLjQ0NVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMS40NDUgMzEuNDQ1O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcbiAgdHJhbnNmb3JtPVwic2NhbGUoLTEsIDEpXCI+XG4gIDxnPlxuICAgIDxnPlxuICAgICAgPHBhdGggZD1cIk03LjU5MiwxNi44NmMtMS43NywwLTMuMjAzLDEuNDM0LTMuMjAzLDMuMjA0czEuNDM0LDMuMjA0LDMuMjAzLDMuMjA0YzEuNzY4LDAsMy4yMDMtMS40MzQsMy4yMDMtMy4yMDRcbiAgUzkuMzYsMTYuODYsNy41OTIsMTYuODZ6IE03LjU5MiwyMS4wMzJjLTAuNTMyLDAtMC45NjgtMC40MzQtMC45NjgtMC45NjdzMC40MzYtMC45NjcsMC45NjgtMC45NjdcbiAgYzAuNTMxLDAsMC45NjYsMC40MzQsMC45NjYsMC45NjdTOC4xMjQsMjEuMDMyLDcuNTkyLDIxLjAzMnpcIiAvPlxuICAgICAgPHBhdGggZD1cIk0zMC45MTUsMTcuNDM5bC0wLjUyNC00LjI2MmMtMC4xMDMtMC44MTgtMC44MTgtMS40MTgtMS42NDMtMS4zNzNMMjcuNiwxMS44NjhsLTMuNTY0LTMuMjExXG4gICAgYy0wLjM0NC0wLjMwOS0wLjc4Ny0wLjQ3OS0xLjI0OS0wLjQ3OWwtNy4yNDEtMC4wMDFjLTEuNjI1LDAtMy4yMDEsMC41NTUtNC40NjgsMS41NzNsLTQuMDQsMy4yNDZsLTUuNDMzLDEuMzU4XG4gICAgYy0wLjY5OCwwLjE3NC0xLjE4OCwwLjgwMi0xLjE4OCwxLjUyMXYxLjU2NkMwLjE4NywxNy40NCwwLDE3LjYyNiwwLDE3Ljg1NnYyLjA3MWMwLDAuMjk1LDAuMjM5LDAuNTM0LDAuNTM0LDAuNTM0aDMuMDY3XG4gICAgYy0wLjAxMy0wLjEzMy0wLjA0LTAuMjYtMC4wNC0wLjM5NmMwLTIuMjI3LDEuODA0LTQuMDI5LDQuMDMtNC4wMjlzNC4wMjksMS44MDIsNC4wMjksNC4wMjljMCwwLjEzNy0wLjAyOCwwLjI2NC0wLjA0MSwwLjM5NlxuICAgICAgICBoOC40OTNjLTAuMDEyLTAuMTMzLTAuMDM5LTAuMjYtMC4wMzktMC4zOTZjMC0yLjIyNywxLjgwNC00LjAyOSw0LjAyOS00LjAyOWMyLjIyNywwLDQuMDI4LDEuODAyLDQuMDI4LDQuMDI5XG4gICAgICAgIGMwLDAuMTM3LTAuMDI2LDAuMjY0LTAuMDQsMC4zOTZoMi44NjFjMC4yOTUsMCwwLjUzMy0wLjIzOSwwLjUzMy0wLjUzNHYtMS45NTNDMzEuNDQ5LDE3LjY4LDMxLjIxLDE3LjQzOSwzMC45MTUsMTcuNDM5elxuICAgICAgICAgIE0yMC4xNjgsMTIuMjAybC0xMC4xMDIsMC41MTFMMTIsMTEuMTU4YzEuMDUxLTAuODQ1LDIuMzU3LTEuMzA1LDMuNzA2LTEuMzA1aDQuNDYyVjEyLjIwMnogTTIxLjg0NiwxMi4xMTdWOS44NTRoMC42NTdcbiAgICAgICAgICBjMC4yMjgsMCwwLjQ0NywwLjA4NCwwLjYxNiwwLjIzN2wyLjA2MiwxLjg1NkwyMS44NDYsMTIuMTE3elwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTI0LjA2NCwxNi44NmMtMS43NywwLTMuMjAzLDEuNDM0LTMuMjAzLDMuMjA0czEuNDM0LDMuMjA0LDMuMjAzLDMuMjA0YzEuNzY5LDAsMy4yMDMtMS40MzQsMy4yMDMtMy4yMDRcbiAgICAgICAgICBTMjUuODMzLDE2Ljg2LDI0LjA2NCwxNi44NnogTTI0LjA2NCwyMS4wMzJjLTAuNTMzLDAtMC45NjctMC40MzQtMC45NjctMC45NjdzMC40MzQtMC45NjcsMC45NjctMC45NjdcbiAgICAgICAgYzAuNTMxLDAsMC45NjcsMC40MzQsMC45NjcsMC45NjdTMjQuNTk2LDIxLjAzMiwyNC4wNjQsMjEuMDMyelwiIC8+XG4gICAgPC9nPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDxnPlxuICA8L2c+XG4gIDwvc3ZnPmA7XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1bmtub3duQ2FyTmFtZSA9ICdVbmtub3duJztcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ2Fyc051bWJlciA9IDEwMDtcclxuZXhwb3J0IGNvbnN0IHN0YXJ0UmFjZUJ1dHRvbkNsYXNzID0gJy5zdGFydC1yYWNlLWJ1dHRvbic7XHJcbmV4cG9ydCBjb25zdCBzdG9wUmFjZUJ1dHRvbkNsYXNzID0gJy5zdG9wLXJhY2UtYnV0dG9uJztcclxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbUNvbG9yID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWA7XHJcbn07XHJcbmNvbnN0IGdldFJhbmRvbUJyYW5kID0gKGNhcnNJbmZvKSA9PiB7XHJcbiAgICBjb25zdCBicmFuZHMgPSBPYmplY3Qua2V5cyhjYXJzSW5mbyk7XHJcbiAgICByZXR1cm4gYnJhbmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJyYW5kcy5sZW5ndGgpXTtcclxufTtcclxuY29uc3QgZ2V0UmFuZG9tTW9kZWwgPSAoYnJhbmQpID0+IHtcclxuICAgIGNvbnN0IG1vZGVscyA9IGNhcnNEQlticmFuZF07XHJcbiAgICByZXR1cm4gbW9kZWxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vZGVscy5sZW5ndGgpXTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbUNhck5hbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByYW5kb21CcmFuZCA9IGdldFJhbmRvbUJyYW5kKGNhcnNEQik7XHJcbiAgICBjb25zdCByYW5kb21Nb2RlbCA9IGdldFJhbmRvbU1vZGVsKHJhbmRvbUJyYW5kKTtcclxuICAgIHJldHVybiBgJHtyYW5kb21CcmFuZH0gJHtyYW5kb21Nb2RlbH1gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0RGlzdGFuY2VCZXR3ZWVuRWxlbXMgPSAoZWxlbTEsIGVsZW0yKSA9PiB7XHJcbiAgICBjb25zdCB7IHg6IGVsZW0xWCB9ID0gZWxlbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB7IHg6IGVsZW0yWCB9ID0gZWxlbTIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4gZWxlbTJYIC0gZWxlbTFYO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY2FyRHJpdmVBbmltYXRpb24gPSAoY2FyLCBkaXN0YW5jZSwgYW5pbWF0aW9uRHVyYXRpb24pID0+IHtcclxuICAgIGxldCBzdGFydCA9IG51bGw7XHJcbiAgICBjb25zdCByZXN1bHREaXN0YW5jZSA9IGRpc3RhbmNlICsgMTtcclxuICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSB7fTtcclxuICAgIGZ1bmN0aW9uIHN0ZXAodGltZVN0YW1wKSB7XHJcbiAgICAgICAgaWYgKCFzdGFydCkge1xyXG4gICAgICAgICAgICBzdGFydCA9IHRpbWVTdGFtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGltZSA9ICh0aW1lU3RhbXAgLSBzdGFydCkgLyBhbmltYXRpb25EdXJhdGlvbjtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aW1lICogcmVzdWx0RGlzdGFuY2U7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7cmVzdWx0fXB4KSBzY2FsZSgtMSwgMSlgO1xyXG4gICAgICAgIGlmICh0aW1lIDwgMSkge1xyXG4gICAgICAgICAgICBhbmltYXRpb25JbmZvLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lc3RhbXApID0+IHN0ZXAodGltZXN0YW1wKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5pbWF0aW9uSW5mby5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZXN0YW1wKSA9PiBzdGVwKHRpbWVzdGFtcCkpO1xyXG4gICAgcmV0dXJuIGFuaW1hdGlvbkluZm87XHJcbn07XHJcbmNvbnN0IGNyZWF0ZVBhZ2luYXRpb25CdXR0b24gPSAobnVtYmVyT2ZQYWdlKSA9PiB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwYWdpbmF0aW9uQnV0dG9uLmNsYXNzTmFtZSA9ICdwYWdpbmF0aW9uLWJ1dHRvbic7XHJcbiAgICBwYWdpbmF0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gYCR7bnVtYmVyT2ZQYWdlfWA7XHJcbiAgICByZXR1cm4gcGFnaW5hdGlvbkJ1dHRvbjtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFBhZ2luYXRpb25CdXR0b25zID0gKHBhZ2VzTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b25zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzTnVtYmVyOyBpICs9IDEpIHtcclxuICAgICAgICBidXR0b25zLnB1c2goY3JlYXRlUGFnaW5hdGlvbkJ1dHRvbihpICsgMSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1dHRvbnM7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZVdpbm5lck1lc3NhZ2UgPSAoaXNGaW5pc2hlZCwgbmFtZSwgdGltZSkgPT4ge1xyXG4gICAgY29uc3QgbWVzc2FnZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtZXNzYWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1lc3NhZ2VCbG9jay5jbGFzc05hbWUgPSAnd2lubmVyLW1lc3NhZ2UnO1xyXG4gICAgbWVzc2FnZVRleHQuY2xhc3NOYW1lID0gJ3dpbm5lci1tZXNzYWdlX190ZXh0JztcclxuICAgIG1lc3NhZ2VUZXh0LnRleHRDb250ZW50ID0gaXNGaW5pc2hlZCA/IGBXaW5uZXIgaXMgJHtuYW1lfSwgdGltZTogJHsodGltZSAvIDEwMDApLnRvRml4ZWQoMil9c2AgOiAnTm8gb25lIEZpbmlzaGVkJztcclxuICAgIG1lc3NhZ2VCbG9jay5hcHBlbmQobWVzc2FnZVRleHQpO1xyXG4gICAgcmV0dXJuIG1lc3NhZ2VCbG9jaztcclxufTtcclxuY29uc3QgY3JlYXRlV2lubmVyc1RhYmxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgY29uc3QgdGFibGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuICAgIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgY29uc3QgaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IGNhckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgY29uc3QgbmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgY29uc3Qgd2luc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgY29uc3QgdGltZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIHRhYmxlLmNsYXNzTmFtZSA9ICd3aW5uZXJzX190YWJsZSc7XHJcbiAgICB0YWJsZUJvZHkuY2xhc3NOYW1lID0gJ3dpbm5lcnNfX3RhYmxlX19ib2R5JztcclxuICAgIGlkQ2VsbC5pZCA9ICdpZCc7XHJcbiAgICBpZENlbGwudGV4dENvbnRlbnQgPSAnSWQnO1xyXG4gICAgY2FyQ2VsbC50ZXh0Q29udGVudCA9ICdDYXInO1xyXG4gICAgbmFtZUNlbGwudGV4dENvbnRlbnQgPSAnTmFtZSc7XHJcbiAgICB3aW5zQ2VsbC5pZCA9ICd3aW5zJztcclxuICAgIHdpbnNDZWxsLnRleHRDb250ZW50ID0gJ1dpbnMnO1xyXG4gICAgdGltZUNlbGwuaWQgPSAndGltZSc7XHJcbiAgICB0aW1lQ2VsbC50ZXh0Q29udGVudCA9ICdUaW1lJztcclxuICAgIGhlYWRSb3cuYXBwZW5kKGlkQ2VsbCwgY2FyQ2VsbCwgbmFtZUNlbGwsIHdpbnNDZWxsLCB0aW1lQ2VsbCk7XHJcbiAgICB0YWJsZUhlYWQuYXBwZW5kKGhlYWRSb3cpO1xyXG4gICAgdGFibGUuYXBwZW5kKHRhYmxlSGVhZCwgdGFibGVCb2R5KTtcclxuICAgIHJldHVybiB0YWJsZTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdpbm5lcnNWaWV3ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lubmVyc1ZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB3aW5uZXJzVGFibGUgPSBjcmVhdGVXaW5uZXJzVGFibGUoKTtcclxuICAgIHRhYmxlQ29udGFpbmVyLmFwcGVuZCh3aW5uZXJzVGFibGUpO1xyXG4gICAgdGFibGVDb250YWluZXIuY2xhc3NOYW1lID0gKCd3aW5uZXJzLXRhYmxlLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3Qgd2lubmVyc1BhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdpbm5lcnNWaWV3LmNsYXNzTmFtZSA9ICd3aW5uZXJzIGhpZGVuJztcclxuICAgIHdpbm5lcnNQYWdpbmF0aW9uLmNsYXNzTmFtZSA9ICgnd2lubmVycy1wYWdpbmF0aW9uJyk7XHJcbiAgICB3aW5uZXJzVmlldy5hcHBlbmQodGFibGVDb250YWluZXIsIHdpbm5lcnNQYWdpbmF0aW9uKTtcclxuICAgIHJldHVybiB3aW5uZXJzVmlldztcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdpbm5lclRhYmxlUm93ID0gKHdpbm5lckRhdGEpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBjb25zdCBpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY29uc3QgY2FyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjb25zdCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjb25zdCB3aW5zQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjb25zdCB0aW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBpZENlbGwudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJEYXRhLmlkfWA7XHJcbiAgICBjYXJDZWxsLmlubmVySFRNTCA9IGdldENvbG9yZWRTdmcod2lubmVyRGF0YS5jb2xvcik7XHJcbiAgICBuYW1lQ2VsbC50ZXh0Q29udGVudCA9IHdpbm5lckRhdGEubmFtZTtcclxuICAgIHdpbnNDZWxsLnRleHRDb250ZW50ID0gYCR7d2lubmVyRGF0YS53aW5zfWA7XHJcbiAgICB0aW1lQ2VsbC50ZXh0Q29udGVudCA9IGAkeyh3aW5uZXJEYXRhLnRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpfWA7XHJcbiAgICByb3cuYXBwZW5kKGlkQ2VsbCwgY2FyQ2VsbCwgbmFtZUNlbGwsIHdpbnNDZWxsLCB0aW1lQ2VsbCk7XHJcbiAgICByZXR1cm4gcm93O1xyXG59O1xyXG5leHBvcnQgY29uc3QgcmVuZGVyV2lubmVyTWVzc2FnZSA9IChpc0ZpbmlzaGVkLCBuYW1lLCB0aW1lKSA9PiB7XHJcbiAgICBjb25zdCBnYXJhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJyk7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlV2lubmVyTWVzc2FnZShpc0ZpbmlzaGVkLCBuYW1lLCB0aW1lKTtcclxuICAgIGdhcmFnZT8uYXBwZW5kKG1lc3NhZ2UpO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyQmxvY2tFbGVtZW50KGNhckRhdGEpIHtcclxuICAgIGNvbnN0IGNhckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJCbG9jay5jbGFzc05hbWUgPSAnY2FyLWJsb2NrJztcclxuICAgIGNhckJsb2NrLmlkID0gYCR7Y2FyRGF0YS5pZH1gO1xyXG4gICAgY2FyQmxvY2suaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiY2FyLWJsb2NrX19oZWFkXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInNlbGVjdFwiPlNlbGVjdDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5EZWxldGU8L2J1dHRvbj5cbiAgICA8c3BhbiBjbGFzcz1cImNhcl9fbmFtZVwiPiR7Y2FyRGF0YS5uYW1lfTwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjYXItYmxvY2tfX2JvZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW5naW5lLWJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzdGFydC1yYWNlLWJ1dHRvblwiPkE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzdG9wLXJhY2UtYnV0dG9uXCI+QjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWNlXCI+XG4gICAgICAke2dldENvbG9yZWRTdmcoY2FyRGF0YS5jb2xvcil9XG4gICAgICA8c3ZnIGNsYXNzPVwiZmxhZ1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwMC4zNDQgMzAwLjM0NFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDAuMzQ0IDMwMC4zNDQ7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwiTTI4OS4yODYsMjguMzZjLTYuNzczLTMuMzg2LTE0Ljg4NS0yLjY1NS0yMC45NDUsMS44OTJjLTIzLjM4NywxNy41NDctNDYuMDE0LDEwLjM5NS04MC45OTItMi43MjhcbiAgICAgICAgYy0zNC4yODEtMTIuODU5LTc2Ljk0Mi0yOC44NjEtMTE5LjA0NywyLjcyOGMtNS4wMzQsMy43NzctNy45OTcsOS43MDQtNy45OTcsMTUuOTk4djExOS4xMTJjMCw3LjU3Niw0LjI4MSwxNC41MDIsMTEuMDU4LDE3Ljg5XG4gICAgICAgIHMxNC44ODcsMi42NTQsMjAuOTQ1LTEuODkyYzIzLjM4Ny0xNy41NDcsNDYuMDE0LTEwLjM5NSw4MC45OTIsMi43MjhjMTkuNTEzLDcuMzE5LDQxLjczOSwxNS42NTcsNjUuMDM0LDE1LjY1N1xuICAgICAgICBjMTcuNjMxLDAsMzUuODc0LTQuNzc2LDU0LjAxMy0xOC4zODVjNS4wMzQtMy43NzcsNy45OTctOS43MDQsNy45OTctMTUuOTk4VjQ2LjI1QzMwMC4zNDQsMzguNjc0LDI5Ni4wNjMsMzEuNzQ4LDI4OS4yODYsMjguMzZ6XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGggZD1cIk0yMCw3LjgxOWMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjB2MjQ0LjcwNWMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMHMyMC04Ljk1NCwyMC0yMFYyNy44MTlcbiAgICAgICAgQzQwLDE2Ljc3MywzMS4wNDYsNy44MTksMjAsNy44MTl6XCIvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnPlxuICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XHJcbiAgICByZXR1cm4gY2FyQmxvY2s7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0ICcuL2dsb2JhbC5zY3NzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdmlldy9nYXJhZ2UvZ2FyYWdlLnNjc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy92aWV3L3dpbm5lcnMvd2lubmVycy5zY3NzJztcclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuc3RhcnQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9