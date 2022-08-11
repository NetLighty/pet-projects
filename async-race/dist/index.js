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
        await this.winners.deleteWinner(id);
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
    static changeButtonsDisabled(carId) {
        const carElements = Garage.getCarBlockElements(carId);
        if (carElements.block) {
            const startButton = carElements.block.querySelector('.start-race-button');
            const stopButton = carElements.block.querySelector('.stop-race-button');
            if (startButton && stopButton) {
                if (stopButton.disabled) {
                    stopButton.disabled = false;
                    startButton.disabled = true;
                }
                else {
                    stopButton.disabled = true;
                    startButton.disabled = false;
                }
            }
        }
    }
    async startCarEngine(id) {
        const carElements = Garage.getCarBlockElements(id);
        Garage.changeButtonsDisabled(id);
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
    static setStartRaceButtonDisabled(status) {
        const startRaceButton = document.querySelector('.start-race-button');
        if (startRaceButton) {
            startRaceButton.disabled = status;
        }
    }
    static setResetButtonDisabled(status) {
        const resetButton = document.querySelector('.reset-button');
        if (resetButton) {
            resetButton.disabled = status;
        }
    }
    async startRace() {
        Garage.setStartRaceButtonDisabled(true);
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
        Garage.setResetButtonDisabled(false);
    }
    async stopCarEngine(id) {
        const carElements = Garage.getCarBlockElements(id);
        let res = {
            velocity: 0,
            distance: 0
        };
        Garage.changeButtonsDisabled(id);
        if (carElements.img) {
            res = await this.controller.ruleCarEngine(id, 'stopped');
            cancelAnimationFrame(this.storage.animations[id].id);
            carElements.img.style.transform = 'translateX(0) scale(-1, 1)';
        }
        return res;
    }
    async resetCars() {
        Garage.setResetButtonDisabled(true);
        const winnerMessage = document.querySelector('.winner-message');
        const promises = [];
        this.carsInPage.forEach((car) => {
            promises.push(this.stopCarEngine(car.id));
        });
        winnerMessage?.remove();
        await Promise.all(promises);
        Garage.setStartRaceButtonDisabled(false);
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
        this.renderPageNumber();
    }
    async refreshWinners() {
        this.allWinners = await this.controller.getWinners();
        await this.renderWinnersPage();
        this.renderPaginationButtons();
        this.renderPageNumber();
        this.renderWinnersAmount();
    }
    async deleteWinner(id) {
        await this.controller.deleteWinner(id);
        await this.refreshWinners();
    }
    renderWinnersAmount() {
        const winnersAmountElement = document.querySelector('.winners-amount');
        if (winnersAmountElement) {
            winnersAmountElement.textContent = `${this.allWinners.length}`;
        }
    }
    renderPageNumber() {
        const pageNumberElement = document.querySelector('.winners-page-number');
        if (pageNumberElement) {
            pageNumberElement.textContent = `${this.currentPage}`;
        }
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
/* harmony export */   "createExplosionGif": () => (/* binding */ createExplosionGif),
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
const createExplosionGif = () => {
    const explosionImg = document.createElement('img');
    explosionImg.className = 'explosion-gif';
    explosionImg.setAttribute('src', '../imgs/explosion.gif');
    return explosionImg;
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
    const winnersAmountElement = document.createElement('h1');
    const winnersAmountTextElement = document.createElement('span');
    const winnersHeadersContainer = document.createElement('div');
    winnersHeadersContainer.className = 'winners-headers-container';
    winnersAmountTextElement.className = 'winners-amount';
    winnersAmountTextElement.textContent = '0';
    winnersAmountElement.innerHTML = 'Winners ( <span class="winners-amount">0</span> )</span>';
    const pageNumberElement = document.createElement('h2');
    const pageNumberTextElement = document.createElement('span');
    pageNumberTextElement.className = ('page-number');
    pageNumberTextElement.textContent = '1';
    pageNumberElement.innerHTML = 'Page # <span class="winners-page-number">1</span>';
    const tableContainer = document.createElement('div');
    const winnersTable = createWinnersTable();
    tableContainer.append(winnersTable);
    tableContainer.className = ('winners-table-container');
    const winnersPagination = document.createElement('div');
    winnersView.className = 'winners hiden';
    winnersPagination.className = ('winners-pagination');
    winnersHeadersContainer.append(winnersAmountElement, pageNumberElement);
    winnersView.append(winnersHeadersContainer, tableContainer, winnersPagination);
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
      <button class="stop-race-button" disabled>B</button>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2UvZ2FyYWdlLnNjc3M/MTZjMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3dpbm5lcnMvd2lubmVycy5zY3NzPzQzZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5zY3NzPzgxOGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL2FwcENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9nYXJhZ2UvZ2FyYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvd2lubmVycy93aW5uZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9hcHBDb250cm9sbGVyJztcclxuaW1wb3J0IEdhcmFnZSBmcm9tICcuLi92aWV3L2dhcmFnZS9nYXJhZ2UnO1xyXG5pbXBvcnQgV2lubmVycyBmcm9tICcuLi92aWV3L3dpbm5lcnMvd2lubmVycyc7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQXBwQ29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMud2lubmVycyA9IG5ldyBXaW5uZXJzKHRoaXMuY29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5nYXJhZ2UgPSBuZXcgR2FyYWdlKHRoaXMuY29udHJvbGxlciwgdGhpcy53aW5uZXJzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRXaW5uZXJzQW5kR2FyYWdlQmxvY2tzKCkge1xyXG4gICAgICAgIGNvbnN0IGdhcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKTtcclxuICAgICAgICBjb25zdCB3aW5uZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBnYXJhZ2UsIHdpbm5lcnMgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzaG93R2FyYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lckFuZEdhcmFnZSA9IEFwcC5nZXRXaW5uZXJzQW5kR2FyYWdlQmxvY2tzKCk7XHJcbiAgICAgICAgd2lubmVyQW5kR2FyYWdlLmdhcmFnZT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZW4nKTtcclxuICAgICAgICB3aW5uZXJBbmRHYXJhZ2Uud2lubmVycz8uY2xhc3NMaXN0LmFkZCgnaGlkZW4nKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzaG93V2lubmVycygpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXJBbmRHYXJhZ2UgPSBBcHAuZ2V0V2lubmVyc0FuZEdhcmFnZUJsb2NrcygpO1xyXG4gICAgICAgIHdpbm5lckFuZEdhcmFnZS5nYXJhZ2U/LmNsYXNzTGlzdC5hZGQoJ2hpZGVuJyk7XHJcbiAgICAgICAgd2lubmVyQW5kR2FyYWdlLndpbm5lcnM/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVuJyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXJzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMtYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgZ2FyYWdlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1idXR0b24nKTtcclxuICAgICAgICB3aW5uZXJzQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFwcC5zaG93V2lubmVycygpKTtcclxuICAgICAgICBnYXJhZ2VCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQXBwLnNob3dHYXJhZ2UoKSk7XHJcbiAgICAgICAgdGhpcy5nYXJhZ2UucmVmcmVzaEdhcmFnZSgpO1xyXG4gICAgICAgIHRoaXMud2lubmVycy5yZW5kZXJXaW5uZXJzUGFnZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiY2xhc3MgQXBwQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFwaVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Q2FycyhwYXJhbXMpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyAnL2dhcmFnZT8nICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLCAnR0VUJyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRDYXIoaWQpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL2dhcmFnZS8ke2lkfWAsICdHRVQnKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGNyZWF0ZUNhcihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy9nYXJhZ2UnLCAnUE9TVCcsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhc3luYyB1cGRhdGVDYXIoaWQsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL2dhcmFnZS8ke2lkfWAsICdQVVQnLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZGVsZXRlQ2FyKGlkKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC9nYXJhZ2UvJHtpZH1gLCAnREVMRVRFJyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGFzeW5jIHJ1bGVDYXJFbmdpbmUoaWQsIHN0YXR1cykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvZW5naW5lPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgaWQ6IGAke2lkfWAsIHN0YXR1cyB9KSwgJ1BBVENIJyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkcml2ZUNhckVuZ2luZShpZCwgc3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy9lbmdpbmU/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMoeyBpZDogYCR7aWR9YCwgc3RhdHVzIH0pLCAnUEFUQ0gnKS5jYXRjaCgpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzICE9PSAyMDAgPyB7IHN1Y2Nlc3M6IGZhbHNlIH0gOiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFdpbm5lcnMocGFyYW1zKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy93aW5uZXJzPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyksICdHRVQnKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFdpbm5lcihpZCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvd2lubmVycy8ke2lkfWAsICdHRVQnKTtcclxuICAgICAgICByZXR1cm4gd2lubmVyLmpzb24oKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGNyZWF0ZVdpbm5lcihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy93aW5uZXJzJywgJ1BPU1QnLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZGVsZXRlV2lubmVyKGlkKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC93aW5uZXJzLyR7aWR9YCwgJ0RFTEVURScpO1xyXG4gICAgICAgIHJldHVybiB3aW5uZXIuanNvbigpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlV2lubmVyKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL3dpbm5lcnMvJHtkYXRhLmlkfWAsICdQVVQnLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gd2lubmVyLmpzb24oKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyByZXF1ZXN0KHVybCwgbWV0aG9kLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZCwgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udHJvbGxlcjtcclxuIiwiaW1wb3J0IHsgY2FyRHJpdmVBbmltYXRpb24sIGNyZWF0ZUNhckJsb2NrRWxlbWVudCwgZ2VuZXJhdGVDYXJzTnVtYmVyLCBnZXREaXN0YW5jZUJldHdlZW5FbGVtcywgZ2V0UGFnaW5hdGlvbkJ1dHRvbnMsIGdldFJhbmRvbUNhck5hbWUsIGdldFJhbmRvbUNvbG9yLCByZW5kZXJXaW5uZXJNZXNzYWdlLCBzdGFydFJhY2VCdXR0b25DbGFzcywgc3RvcFJhY2VCdXR0b25DbGFzcywgdW5rbm93bkNhck5hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XHJcbmNsYXNzIEdhcmFnZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyLCB3aW5uZXJzKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLndpbm5lcnMgPSB3aW5uZXJzO1xyXG4gICAgICAgIHRoaXMuYWxsQ2FycyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFnZUxpbWl0ID0gNztcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgICB0aGlzLmNhcnNJblBhZ2UgPSBbXTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7IGFuaW1hdGlvbnM6IFtdIH07XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcklkID0gMDtcclxuICAgICAgICB0aGlzLnRleHRVcGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXVwZGF0ZScpO1xyXG4gICAgICAgIHRoaXMuY29sb3JVcGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcnBpY2tlci11cGRhdGUnKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2Fyc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZS1jYXJzLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmluaXRHYXJhZ2UoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGluaXRHYXJhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1idXR0b24nKTtcclxuICAgICAgICBjb25zdCBzdGFydFJhY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtcmFjZS1idXR0b24nKTtcclxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idXR0b24nKTtcclxuICAgICAgICBzdGFydFJhY2VCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zdGFydFJhY2UoKSk7XHJcbiAgICAgICAgcmVzZXRCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZXNldENhcnMoKSk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhcnNCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5nZW5lcmF0ZUNhcnMoZ2VuZXJhdGVDYXJzTnVtYmVyKSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jcmVhdGVDYXIoKSk7XHJcbiAgICAgICAgdXBkYXRlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudXBkYXRlQ2FyKCkpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVmcmVzaEdhcmFnZSgpIHtcclxuICAgICAgICB0aGlzLmFsbENhcnMgPSBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZ2V0Q2FycygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyQ2Fyc1BhZ2UodGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDYXJzQW1vdW50KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdpbmF0aW9uQnV0dG9ucygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY2hhbmdlUGFnZShwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdlTnVtYmVyKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJDYXJzUGFnZShwYWdlKTtcclxuICAgIH1cclxuICAgIHJlbmRlclBhZ2luYXRpb25CdXR0b25zKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VzTnVtYmVyID0gdGhpcy5hbGxDYXJzLmxlbmd0aCAvIHRoaXMucGFnZUxpbWl0O1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBnZXRQYWdpbmF0aW9uQnV0dG9ucyhwYWdlc051bWJlcik7XHJcbiAgICAgICAgaWYgKGJ1dHRvbnNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNoYW5nZVBhZ2UoaW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyByZW5kZXJDYXJzUGFnZShwYWdlKSB7XHJcbiAgICAgICAgY29uc3QgY2Fyc0RhdGEgPSBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZ2V0Q2Fycyh7IF9wYWdlOiBgJHtwYWdlfWAsIF9saW1pdDogYCR7dGhpcy5wYWdlTGltaXR9YCB9KTtcclxuICAgICAgICB0aGlzLmNhcnNJblBhZ2UgPSBjYXJzRGF0YTtcclxuICAgICAgICBjb25zdCBjYXJCbG9ja3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fycy1saXN0Jyk7XHJcbiAgICAgICAgaWYgKGNhckJsb2Nrc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjYXJCbG9ja3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fyc0luUGFnZS5mb3JFYWNoKChjYXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhckJsb2NrID0gY3JlYXRlQ2FyQmxvY2tFbGVtZW50KGNhcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhckJsb2NrTGlzdGVuZXJzKGNhckJsb2NrKTtcclxuICAgICAgICAgICAgICAgIGNhckJsb2Nrc0NvbnRhaW5lcj8uYXBwZW5kKGNhckJsb2NrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Q2FyQmxvY2tMaXN0ZW5lcnMoY2FyQmxvY2spIHtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0QnV0dG9uID0gY2FyQmxvY2sucXVlcnlTZWxlY3RvcignLnNlbGVjdCcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UmFjZUJ1dHRvbiA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3Ioc3RhcnRSYWNlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BSYWNlQnV0dG9uID0gY2FyQmxvY2sucXVlcnlTZWxlY3RvcihzdG9wUmFjZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgICBkZWxldGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5kZWxldGVDYXIoK2NhckJsb2NrLmlkKSk7XHJcbiAgICAgICAgc2VsZWN0QnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2VsZWN0Q2FyKCtjYXJCbG9jay5pZCkpO1xyXG4gICAgICAgIHN0YXJ0UmFjZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnN0YXJ0Q2FyRW5naW5lKCtjYXJCbG9jay5pZCkpO1xyXG4gICAgICAgIHN0b3BSYWNlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3RvcENhckVuZ2luZSgrY2FyQmxvY2suaWQpKTtcclxuICAgIH1cclxuICAgIHJlbmRlckNhcnNBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY2Fyc0Ftb3VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fycy1hbW91bnQnKTtcclxuICAgICAgICBpZiAoY2Fyc0Ftb3VudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY2Fyc0Ftb3VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0aGlzLmFsbENhcnMubGVuZ3RofWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyUGFnZU51bWJlcigpIHtcclxuICAgICAgICBjb25zdCBwYWdlTnVtYmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLW51bWJlcicpO1xyXG4gICAgICAgIGlmIChwYWdlTnVtYmVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBwYWdlTnVtYmVyRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RoaXMuY3VycmVudFBhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZW5lcmF0ZUNhcnMobikge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gZ2V0UmFuZG9tQ29sb3IoKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tTmFtZSA9IGdldFJhbmRvbUNhck5hbWUoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2VzLnB1c2godGhpcy5jb250cm9sbGVyLmNyZWF0ZUNhcih7IGNvbG9yOiByYW5kb21Db2xvciwgbmFtZTogcmFuZG9tTmFtZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHJlc3BvbnNlcyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkZWxldGVDYXIoaWQpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZGVsZXRlQ2FyKGlkKTtcclxuICAgICAgICBhd2FpdCB0aGlzLndpbm5lcnMuZGVsZXRlV2lubmVyKGlkKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGNyZWF0ZUNhcigpIHtcclxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jcmVhdGUnKTtcclxuICAgICAgICBjb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9ycGlja2VyLWNyZWF0ZScpO1xyXG4gICAgICAgIGlmICh0ZXh0SW5wdXQgJiYgY29sb3JJbnB1dCkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGV4dElucHV0LnZhbHVlID8gdGV4dElucHV0LnZhbHVlIDogdW5rbm93bkNhck5hbWU7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udHJvbGxlci5jcmVhdGVDYXIoeyBuYW1lLCBjb2xvcjogY29sb3JJbnB1dC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0Q2FyKGlkKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXJCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xyXG4gICAgICAgIGNvbnN0IHBhc3RTZWxlY3RlZENhckJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5zZWxlY3RlZENhcklkfWApO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2FyTmFtZSA9IHNlbGVjdGVkQ2FyQmxvY2s/LnF1ZXJ5U2VsZWN0b3IoJy5jYXJfX25hbWUnKT8udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXJDb2xvciA9IHNlbGVjdGVkQ2FyQmxvY2s/LnF1ZXJ5U2VsZWN0b3IoJy5jYXJfX2ltZycpPy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcclxuICAgICAgICBpZiAodGhpcy50ZXh0VXBkYXRlSW5wdXQgJiYgdGhpcy5jb2xvclVwZGF0ZUlucHV0ICYmIHNlbGVjdGVkQ2FyQ29sb3IgJiYgc2VsZWN0ZWRDYXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFVwZGF0ZUlucHV0LnZhbHVlID0gc2VsZWN0ZWRDYXJOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yVXBkYXRlSW5wdXQudmFsdWUgPSBzZWxlY3RlZENhckNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENhcklkID09PSBpZCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENhckJsb2NrPy5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDYXJCbG9jaz8uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcGFzdFNlbGVjdGVkQ2FyQmxvY2s/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJJZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlQ2FyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRleHRVcGRhdGVJbnB1dCAmJiB0aGlzLmNvbG9yVXBkYXRlSW5wdXQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb250cm9sbGVyLnVwZGF0ZUNhcih0aGlzLnNlbGVjdGVkQ2FySWQsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGV4dFVwZGF0ZUlucHV0LnZhbHVlLCBjb2xvcjogdGhpcy5jb2xvclVwZGF0ZUlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRVcGRhdGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRDYXJCbG9ja0VsZW1lbnRzKGlkKSB7XHJcbiAgICAgICAgY29uc3QgY2FyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcclxuICAgICAgICBjb25zdCBjYXJJbWcgPSBjYXJCbG9jaz8ucXVlcnlTZWxlY3RvcignLmNhcl9faW1nJyk7XHJcbiAgICAgICAgY29uc3QgZmxhZyA9IGNhckJsb2NrPy5xdWVyeVNlbGVjdG9yKCcuZmxhZycpO1xyXG4gICAgICAgIHJldHVybiB7IGJsb2NrOiBjYXJCbG9jaywgaW1nOiBjYXJJbWcsIGZsYWc6IGZsYWcgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaGFuZ2VCdXR0b25zRGlzYWJsZWQoY2FySWQpIHtcclxuICAgICAgICBjb25zdCBjYXJFbGVtZW50cyA9IEdhcmFnZS5nZXRDYXJCbG9ja0VsZW1lbnRzKGNhcklkKTtcclxuICAgICAgICBpZiAoY2FyRWxlbWVudHMuYmxvY2spIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBjYXJFbGVtZW50cy5ibG9jay5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtcmFjZS1idXR0b24nKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcEJ1dHRvbiA9IGNhckVsZW1lbnRzLmJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zdG9wLXJhY2UtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEJ1dHRvbiAmJiBzdG9wQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcEJ1dHRvbi5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3BCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RhcnRDYXJFbmdpbmUoaWQpIHtcclxuICAgICAgICBjb25zdCBjYXJFbGVtZW50cyA9IEdhcmFnZS5nZXRDYXJCbG9ja0VsZW1lbnRzKGlkKTtcclxuICAgICAgICBHYXJhZ2UuY2hhbmdlQnV0dG9uc0Rpc2FibGVkKGlkKTtcclxuICAgICAgICBjb25zdCBlbmdpbmVEYXRhID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLnJ1bGVDYXJFbmdpbmUoaWQsICdzdGFydGVkJyk7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVGltZSA9IGVuZ2luZURhdGEuZGlzdGFuY2UgLyBlbmdpbmVEYXRhLnZlbG9jaXR5O1xyXG4gICAgICAgIGxldCBkcml2ZVJlcyA9IHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjYXJFbGVtZW50cy5pbWcgJiYgY2FyRWxlbWVudHMuZmxhZykge1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUJldHdlZW5DYXJBbmRGbGFnID0gZ2V0RGlzdGFuY2VCZXR3ZWVuRWxlbXMoY2FyRWxlbWVudHMuaW1nLCBjYXJFbGVtZW50cy5mbGFnKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmFuaW1hdGlvbnNbaWRdID0gY2FyRHJpdmVBbmltYXRpb24oY2FyRWxlbWVudHMuaW1nLCBkaXN0YW5jZUJldHdlZW5DYXJBbmRGbGFnLCBhbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgZHJpdmVSZXMgPSBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZHJpdmVDYXJFbmdpbmUoaWQsICdkcml2ZScpO1xyXG4gICAgICAgICAgICBpZiAoIWRyaXZlUmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RvcmFnZS5hbmltYXRpb25zW2lkXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgaWQsIHRpbWU6IGFuaW1hdGlvblRpbWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGlkKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRTdGFydFJhY2VCdXR0b25EaXNhYmxlZChzdGF0dXMpIHtcclxuICAgICAgICBjb25zdCBzdGFydFJhY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtcmFjZS1idXR0b24nKTtcclxuICAgICAgICBpZiAoc3RhcnRSYWNlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UmFjZUJ1dHRvbi5kaXNhYmxlZCA9IHN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0UmVzZXRCdXR0b25EaXNhYmxlZChzdGF0dXMpIHtcclxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idXR0b24nKTtcclxuICAgICAgICBpZiAocmVzZXRCdXR0b24pIHtcclxuICAgICAgICAgICAgcmVzZXRCdXR0b24uZGlzYWJsZWQgPSBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RhcnRSYWNlKCkge1xyXG4gICAgICAgIEdhcmFnZS5zZXRTdGFydFJhY2VCdXR0b25EaXNhYmxlZCh0cnVlKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNhcnNJblBhZ2UuZm9yRWFjaCgoY2FyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlcy5wdXNoKHRoaXMuc3RhcnRDYXJFbmdpbmUoY2FyLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgd2lubmVySWRBbmRUaW1lID0gYXdhaXQgUHJvbWlzZS5hbnkocmVzcG9uc2VzKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcldpbm5lck1lc3NhZ2UoZmFsc2UsICcnLCAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAod2lubmVySWRBbmRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lckluZm8gPSB0aGlzLmNhcnNJblBhZ2UuZmluZCgod2lubmVyKSA9PiB3aW5uZXIuaWQgPT09IHdpbm5lcklkQW5kVGltZS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lck5hbWUgPSB3aW5uZXJJbmZvPy5uYW1lO1xyXG4gICAgICAgICAgICBpZiAod2lubmVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyV2lubmVyTWVzc2FnZSh0cnVlLCB3aW5uZXJOYW1lLCB3aW5uZXJJZEFuZFRpbWUudGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHdpbm5lckluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVycy5hZGRXaW5uZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogd2lubmVySW5mby5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aW5uZXJJbmZvLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdpbm5lckluZm8uY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogd2lubmVySWRBbmRUaW1lLnRpbWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdhcmFnZS5zZXRSZXNldEJ1dHRvbkRpc2FibGVkKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHN0b3BDYXJFbmdpbmUoaWQpIHtcclxuICAgICAgICBjb25zdCBjYXJFbGVtZW50cyA9IEdhcmFnZS5nZXRDYXJCbG9ja0VsZW1lbnRzKGlkKTtcclxuICAgICAgICBsZXQgcmVzID0ge1xyXG4gICAgICAgICAgICB2ZWxvY2l0eTogMCxcclxuICAgICAgICAgICAgZGlzdGFuY2U6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIEdhcmFnZS5jaGFuZ2VCdXR0b25zRGlzYWJsZWQoaWQpO1xyXG4gICAgICAgIGlmIChjYXJFbGVtZW50cy5pbWcpIHtcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLnJ1bGVDYXJFbmdpbmUoaWQsICdzdG9wcGVkJyk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RvcmFnZS5hbmltYXRpb25zW2lkXS5pZCk7XHJcbiAgICAgICAgICAgIGNhckVsZW1lbnRzLmltZy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSBzY2FsZSgtMSwgMSknO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVzZXRDYXJzKCkge1xyXG4gICAgICAgIEdhcmFnZS5zZXRSZXNldEJ1dHRvbkRpc2FibGVkKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHdpbm5lck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyLW1lc3NhZ2UnKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2Fyc0luUGFnZS5mb3JFYWNoKChjYXIpID0+IHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLnN0b3BDYXJFbmdpbmUoY2FyLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2lubmVyTWVzc2FnZT8ucmVtb3ZlKCk7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIEdhcmFnZS5zZXRTdGFydFJhY2VCdXR0b25EaXNhYmxlZChmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FyYWdlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVXaW5uZXJzVmlldywgY3JlYXRlV2lubmVyVGFibGVSb3csIGdldEFycm93LCBnZXRQYWdpbmF0aW9uQnV0dG9ucyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcclxuY2xhc3MgV2lubmVycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLnBhZ2VMaW1pdCA9IDEwO1xyXG4gICAgICAgIHRoaXMuYWxsV2lubmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMud2lubmVyc09uUGFnZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWxsQ2FycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNvcnQgPSAnd2lucyc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T3JkZXIgPSAnREVTQyc7XHJcbiAgICAgICAgdGhpcy5pbml0V2lubmVycygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgaW5pdFdpbm5lcnMoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyc1ZpZXcgPSBjcmVhdGVXaW5uZXJzVmlldygpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpO1xyXG4gICAgICAgIHBhZ2U/LmFwcGVuZCh3aW5uZXJzVmlldyk7XHJcbiAgICAgICAgY29uc3Qgd2luc0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lucycpO1xyXG4gICAgICAgIGNvbnN0IGlkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKTtcclxuICAgICAgICB3aW5zQ2VsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zb3J0V2lubmVycyhlKSk7XHJcbiAgICAgICAgd2luc0NlbGw/LmFwcGVuZChnZXRBcnJvdygpKTtcclxuICAgICAgICBpZENlbGw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc29ydFdpbm5lcnMoZSkpO1xyXG4gICAgICAgIHRpbWVDZWxsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnNvcnRXaW5uZXJzKGUpKTtcclxuICAgICAgICB0aGlzLmFsbENhcnMgPSBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZ2V0Q2FycygpO1xyXG4gICAgICAgIHRoaXMuYWxsV2lubmVycyA9IGF3YWl0IHRoaXMuY29udHJvbGxlci5nZXRXaW5uZXJzKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoV2lubmVycygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0V2lubmVyc1BhZ2UocGFnZSwgc29ydCwgb3JkZXIpIHtcclxuICAgICAgICB0aGlzLndpbm5lcnNPblBhZ2UgPSBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZ2V0V2lubmVycyh7XHJcbiAgICAgICAgICAgIF9wYWdlOiBgJHtwYWdlfWAsIF9saW1pdDogYCR7dGhpcy5wYWdlTGltaXR9YCwgX3NvcnQ6IHNvcnQsIF9vcmRlcjogb3JkZXJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy53aW5uZXJzT25QYWdlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc29ydFdpbm5lcnMoZSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpPy5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCBhcnJvdyA9IGdldEFycm93KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T3JkZXIgPSB0aGlzLmN1cnJlbnRPcmRlciA9PT0gJ0RFU0MnID8gJ0FTQycgOiAnREVTQyc7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9yZGVyID09PSAnQVNDJykge1xyXG4gICAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldC5hcHBlbmQoYXJyb3cpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNvcnQgPSB0YXJnZXQuaWQ7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJXaW5uZXJzUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVuZGVyV2lubmVyc1BhZ2UoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyc0RhdGEgPSBhd2FpdCB0aGlzLmdldFdpbm5lcnNQYWdlKHRoaXMuY3VycmVudFBhZ2UsIHRoaXMuY3VycmVudFNvcnQsIHRoaXMuY3VycmVudE9yZGVyKTtcclxuICAgICAgICBjb25zdCB3aW5uZXJzVGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnNfX3RhYmxlX19ib2R5Jyk7XHJcbiAgICAgICAgaWYgKHdpbm5lcnNUYWJsZUJvZHkpIHtcclxuICAgICAgICAgICAgd2lubmVyc1RhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgd2lubmVyc0RhdGEuZm9yRWFjaCgod2lubmVyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lubmVyQ2FyID0gdGhpcy5hbGxDYXJzLmZpbmQoKGNhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXIuaWQgPT09IHdpbm5lckRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5uZXJDYXIgJiYgd2lubmVyc1RhYmxlQm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlUm93ID0gY3JlYXRlV2lubmVyVGFibGVSb3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogd2lubmVyRGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogd2lubmVyQ2FyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aW5uZXJDYXIuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHdpbm5lckRhdGEudGltZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luczogd2lubmVyRGF0YS53aW5zXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lubmVyc1RhYmxlQm9keS5hcHBlbmQodGFibGVSb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBjcmVhdGVXaW5uZXIoaWQsIHdpbnMsIHRpbWUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuY3JlYXRlV2lubmVyKHsgaWQsIHdpbnMsIHRpbWUgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoV2lubmVycygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlV2lubmVyKGlkLCB3aW5zLCB0aW1lLCBsYXN0VGltZSkge1xyXG4gICAgICAgIGNvbnN0IGJlc3RUaW1lID0gdGltZSA8IGxhc3RUaW1lID8gdGltZSA6IGxhc3RUaW1lO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY29udHJvbGxlci51cGRhdGVXaW5uZXIoeyBpZCwgd2lucywgdGltZTogYmVzdFRpbWUgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoV2lubmVycygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgYWRkV2lubmVySW5mbyh3aW5uZXJJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgaXNFeGlzdCA9IHRoaXMuYWxsV2lubmVycy5maW5kKCh3aW5uZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbm5lci5pZCA9PT0gd2lubmVySW5mby5pZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaXNFeGlzdCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVdpbm5lcih3aW5uZXJJbmZvLmlkLCBpc0V4aXN0LndpbnMgKyAxLCB3aW5uZXJJbmZvLnRpbWUsIGlzRXhpc3QudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVdpbm5lcih3aW5uZXJJbmZvLmlkLCAxLCB3aW5uZXJJbmZvLnRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlclBhZ2luYXRpb25CdXR0b25zKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1wYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcGFnZXNOdW1iZXIgPSB0aGlzLmFsbFdpbm5lcnMubGVuZ3RoIC8gdGhpcy5wYWdlTGltaXQ7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGdldFBhZ2luYXRpb25CdXR0b25zKHBhZ2VzTnVtYmVyKTtcclxuICAgICAgICBpZiAoYnV0dG9uc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBidXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2hhbmdlUGFnZShpbmRleCArIDEpKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGNoYW5nZVBhZ2UocGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyV2lubmVyc1BhZ2UoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBhZ2VOdW1iZXIoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHJlZnJlc2hXaW5uZXJzKCkge1xyXG4gICAgICAgIHRoaXMuYWxsV2lubmVycyA9IGF3YWl0IHRoaXMuY29udHJvbGxlci5nZXRXaW5uZXJzKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJXaW5uZXJzUGFnZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUGFnaW5hdGlvbkJ1dHRvbnMoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBhZ2VOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcldpbm5lcnNBbW91bnQoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGRlbGV0ZVdpbm5lcihpZCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY29udHJvbGxlci5kZWxldGVXaW5uZXIoaWQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaFdpbm5lcnMoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcldpbm5lcnNBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyc0Ftb3VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1hbW91bnQnKTtcclxuICAgICAgICBpZiAod2lubmVyc0Ftb3VudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgd2lubmVyc0Ftb3VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0aGlzLmFsbFdpbm5lcnMubGVuZ3RofWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyUGFnZU51bWJlcigpIHtcclxuICAgICAgICBjb25zdCBwYWdlTnVtYmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLXBhZ2UtbnVtYmVyJyk7XHJcbiAgICAgICAgaWYgKHBhZ2VOdW1iZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXJFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGhpcy5jdXJyZW50UGFnZX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXaW5uZXJzO1xyXG4iLCJleHBvcnQgY29uc3QgY2Fyc0RCID0ge1xyXG4gICAgQk1XOiBbJ0dyYW4gQ291cGUnLCAnQWN0aXZlIFRvdXJlcicsICdTYWxvb24nLCAnWjQgUm9hZHN0ZXInXSxcclxuICAgIEFVREk6IFsnZS10cm9uJywgJ1JTIDcnLCAnUTgnLCAnUTYnLCAnUTMnXSxcclxuICAgIElTVVpVOiBbJ0QtTWF4JywgJ01VLVgnLCAnTXlzdGVyaW91cyBVdGlsaXR5J10sXHJcbiAgICBGT1JEOiBbJ0t1Z2EnLCAnRXhwbG9yZXInLCAnRmllc3RhJywgJ0VkZ2UnXSxcclxuICAgIEZFUlJBUkk6IFtcclxuICAgICAgICAnTGFGZXJyYXJpJyxcclxuICAgICAgICAnUGlzcmEgU3BpZGVyJyxcclxuICAgICAgICAnUG9ydG9maW5vJyxcclxuICAgICAgICAnQ2hhbGxlbmdlJyxcclxuICAgICAgICAnTGFGZXJyYXJpIEFwZXJ0YSdcclxuICAgIF0sXHJcbiAgICBIQVZBTDogWydCaWcgRG9nJ11cclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEFycm93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFycm93LmNsYXNzTmFtZSA9ICdhcnJvdyBkb3duJztcclxuICAgIGFycm93LmlubmVySFRNTCA9IGA8c3ZnIGRhdGEtbmFtZT1cIjEtQXJyb3cgVXBcIlxuICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj48cGF0aCBkPVwibTI2LjcxIDEwLjI5LTEwLTEwYTFcbiAgICAxIDAgMCAwLTEuNDEgMGwtMTAgMTAgMS40MSAxLjQxTDE1IDMuNDFWMzJoMlYzLjQxbDguMjkgOC4yOXpcIi8+XG4gICAgPC9zdmc+YDtcclxuICAgIHJldHVybiBhcnJvdztcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4cGxvc2lvbkdpZiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGV4cGxvc2lvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZXhwbG9zaW9uSW1nLmNsYXNzTmFtZSA9ICdleHBsb3Npb24tZ2lmJztcclxuICAgIGV4cGxvc2lvbkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9pbWdzL2V4cGxvc2lvbi5naWYnKTtcclxuICAgIHJldHVybiBleHBsb3Npb25JbWc7XHJcbn07XHJcbmNvbnN0IGdldENvbG9yZWRTdmcgPSAoY29sb3IpID0+IHtcclxuICAgIHJldHVybiBgPHN2ZyBjbGFzcz1cImNhcl9faW1nXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utb3BhY2l0eT1cIjAuMlwiIGZpbGw9JHtjb2xvcn0gdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIzMS40NDVweFwiIGhlaWdodD1cIjMxLjQ0NXB4XCJcbiAgdmlld0JveD1cIjAgMCAzMS40NDUgMzEuNDQ1XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ0NSAzMS40NDU7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICB0cmFuc2Zvcm09XCJzY2FsZSgtMSwgMSlcIj5cbiAgPGc+XG4gICAgPGc+XG4gICAgICA8cGF0aCBkPVwiTTcuNTkyLDE2Ljg2Yy0xLjc3LDAtMy4yMDMsMS40MzQtMy4yMDMsMy4yMDRzMS40MzQsMy4yMDQsMy4yMDMsMy4yMDRjMS43NjgsMCwzLjIwMy0xLjQzNCwzLjIwMy0zLjIwNFxuICBTOS4zNiwxNi44Niw3LjU5MiwxNi44NnogTTcuNTkyLDIxLjAzMmMtMC41MzIsMC0wLjk2OC0wLjQzNC0wLjk2OC0wLjk2N3MwLjQzNi0wLjk2NywwLjk2OC0wLjk2N1xuICBjMC41MzEsMCwwLjk2NiwwLjQzNCwwLjk2NiwwLjk2N1M4LjEyNCwyMS4wMzIsNy41OTIsMjEuMDMyelwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTMwLjkxNSwxNy40MzlsLTAuNTI0LTQuMjYyYy0wLjEwMy0wLjgxOC0wLjgxOC0xLjQxOC0xLjY0My0xLjM3M0wyNy42LDExLjg2OGwtMy41NjQtMy4yMTFcbiAgICBjLTAuMzQ0LTAuMzA5LTAuNzg3LTAuNDc5LTEuMjQ5LTAuNDc5bC03LjI0MS0wLjAwMWMtMS42MjUsMC0zLjIwMSwwLjU1NS00LjQ2OCwxLjU3M2wtNC4wNCwzLjI0NmwtNS40MzMsMS4zNThcbiAgICBjLTAuNjk4LDAuMTc0LTEuMTg4LDAuODAyLTEuMTg4LDEuNTIxdjEuNTY2QzAuMTg3LDE3LjQ0LDAsMTcuNjI2LDAsMTcuODU2djIuMDcxYzAsMC4yOTUsMC4yMzksMC41MzQsMC41MzQsMC41MzRoMy4wNjdcbiAgICBjLTAuMDEzLTAuMTMzLTAuMDQtMC4yNi0wLjA0LTAuMzk2YzAtMi4yMjcsMS44MDQtNC4wMjksNC4wMy00LjAyOXM0LjAyOSwxLjgwMiw0LjAyOSw0LjAyOWMwLDAuMTM3LTAuMDI4LDAuMjY0LTAuMDQxLDAuMzk2XG4gICAgICAgIGg4LjQ5M2MtMC4wMTItMC4xMzMtMC4wMzktMC4yNi0wLjAzOS0wLjM5NmMwLTIuMjI3LDEuODA0LTQuMDI5LDQuMDI5LTQuMDI5YzIuMjI3LDAsNC4wMjgsMS44MDIsNC4wMjgsNC4wMjlcbiAgICAgICAgYzAsMC4xMzctMC4wMjYsMC4yNjQtMC4wNCwwLjM5NmgyLjg2MWMwLjI5NSwwLDAuNTMzLTAuMjM5LDAuNTMzLTAuNTM0di0xLjk1M0MzMS40NDksMTcuNjgsMzEuMjEsMTcuNDM5LDMwLjkxNSwxNy40Mzl6XG4gICAgICAgICAgTTIwLjE2OCwxMi4yMDJsLTEwLjEwMiwwLjUxMUwxMiwxMS4xNThjMS4wNTEtMC44NDUsMi4zNTctMS4zMDUsMy43MDYtMS4zMDVoNC40NjJWMTIuMjAyeiBNMjEuODQ2LDEyLjExN1Y5Ljg1NGgwLjY1N1xuICAgICAgICAgIGMwLjIyOCwwLDAuNDQ3LDAuMDg0LDAuNjE2LDAuMjM3bDIuMDYyLDEuODU2TDIxLjg0NiwxMi4xMTd6XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjQuMDY0LDE2Ljg2Yy0xLjc3LDAtMy4yMDMsMS40MzQtMy4yMDMsMy4yMDRzMS40MzQsMy4yMDQsMy4yMDMsMy4yMDRjMS43NjksMCwzLjIwMy0xLjQzNCwzLjIwMy0zLjIwNFxuICAgICAgICAgIFMyNS44MzMsMTYuODYsMjQuMDY0LDE2Ljg2eiBNMjQuMDY0LDIxLjAzMmMtMC41MzMsMC0wLjk2Ny0wLjQzNC0wLjk2Ny0wLjk2N3MwLjQzNC0wLjk2NywwLjk2Ny0wLjk2N1xuICAgICAgICBjMC41MzEsMCwwLjk2NywwLjQzNCwwLjk2NywwLjk2N1MyNC41OTYsMjEuMDMyLDI0LjA2NCwyMS4wMzJ6XCIgLz5cbiAgICA8L2c+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPGc+XG4gIDwvZz5cbiAgPC9zdmc+YDtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVua25vd25DYXJOYW1lID0gJ1Vua25vd24nO1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVDYXJzTnVtYmVyID0gMTAwO1xyXG5leHBvcnQgY29uc3Qgc3RhcnRSYWNlQnV0dG9uQ2xhc3MgPSAnLnN0YXJ0LXJhY2UtYnV0dG9uJztcclxuZXhwb3J0IGNvbnN0IHN0b3BSYWNlQnV0dG9uQ2xhc3MgPSAnLnN0b3AtcmFjZS1idXR0b24nO1xyXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tQ29sb3IgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcclxufTtcclxuY29uc3QgZ2V0UmFuZG9tQnJhbmQgPSAoY2Fyc0luZm8pID0+IHtcclxuICAgIGNvbnN0IGJyYW5kcyA9IE9iamVjdC5rZXlzKGNhcnNJbmZvKTtcclxuICAgIHJldHVybiBicmFuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYnJhbmRzLmxlbmd0aCldO1xyXG59O1xyXG5jb25zdCBnZXRSYW5kb21Nb2RlbCA9IChicmFuZCkgPT4ge1xyXG4gICAgY29uc3QgbW9kZWxzID0gY2Fyc0RCW2JyYW5kXTtcclxuICAgIHJldHVybiBtb2RlbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9kZWxzLmxlbmd0aCldO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tQ2FyTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbUJyYW5kID0gZ2V0UmFuZG9tQnJhbmQoY2Fyc0RCKTtcclxuICAgIGNvbnN0IHJhbmRvbU1vZGVsID0gZ2V0UmFuZG9tTW9kZWwocmFuZG9tQnJhbmQpO1xyXG4gICAgcmV0dXJuIGAke3JhbmRvbUJyYW5kfSAke3JhbmRvbU1vZGVsfWA7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXREaXN0YW5jZUJldHdlZW5FbGVtcyA9IChlbGVtMSwgZWxlbTIpID0+IHtcclxuICAgIGNvbnN0IHsgeDogZWxlbTFYIH0gPSBlbGVtMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHsgeDogZWxlbTJYIH0gPSBlbGVtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiBlbGVtMlggLSBlbGVtMVg7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjYXJEcml2ZUFuaW1hdGlvbiA9IChjYXIsIGRpc3RhbmNlLCBhbmltYXRpb25EdXJhdGlvbikgPT4ge1xyXG4gICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgIGNvbnN0IHJlc3VsdERpc3RhbmNlID0gZGlzdGFuY2UgKyAxO1xyXG4gICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IHt9O1xyXG4gICAgZnVuY3Rpb24gc3RlcCh0aW1lU3RhbXApIHtcclxuICAgICAgICBpZiAoIXN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gdGltZVN0YW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0aW1lID0gKHRpbWVTdGFtcCAtIHN0YXJ0KSAvIGFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRpbWUgKiByZXN1bHREaXN0YW5jZTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICBjYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtyZXN1bHR9cHgpIHNjYWxlKC0xLCAxKWA7XHJcbiAgICAgICAgaWYgKHRpbWUgPCAxKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWVzdGFtcCkgPT4gc3RlcCh0aW1lc3RhbXApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbmltYXRpb25JbmZvLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lc3RhbXApID0+IHN0ZXAodGltZXN0YW1wKSk7XHJcbiAgICByZXR1cm4gYW5pbWF0aW9uSW5mbztcclxufTtcclxuY29uc3QgY3JlYXRlUGFnaW5hdGlvbkJ1dHRvbiA9IChudW1iZXJPZlBhZ2UpID0+IHtcclxuICAgIGNvbnN0IHBhZ2luYXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHBhZ2luYXRpb25CdXR0b24uY2xhc3NOYW1lID0gJ3BhZ2luYXRpb24tYnV0dG9uJztcclxuICAgIHBhZ2luYXRpb25CdXR0b24udGV4dENvbnRlbnQgPSBgJHtudW1iZXJPZlBhZ2V9YDtcclxuICAgIHJldHVybiBwYWdpbmF0aW9uQnV0dG9uO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0UGFnaW5hdGlvbkJ1dHRvbnMgPSAocGFnZXNOdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNOdW1iZXI7IGkgKz0gMSkge1xyXG4gICAgICAgIGJ1dHRvbnMucHVzaChjcmVhdGVQYWdpbmF0aW9uQnV0dG9uKGkgKyAxKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnV0dG9ucztcclxufTtcclxuY29uc3QgY3JlYXRlV2lubmVyTWVzc2FnZSA9IChpc0ZpbmlzaGVkLCBuYW1lLCB0aW1lKSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbWVzc2FnZUJsb2NrLmNsYXNzTmFtZSA9ICd3aW5uZXItbWVzc2FnZSc7XHJcbiAgICBtZXNzYWdlVGV4dC5jbGFzc05hbWUgPSAnd2lubmVyLW1lc3NhZ2VfX3RleHQnO1xyXG4gICAgbWVzc2FnZVRleHQudGV4dENvbnRlbnQgPSBpc0ZpbmlzaGVkID8gYFdpbm5lciBpcyAke25hbWV9LCB0aW1lOiAkeyh0aW1lIC8gMTAwMCkudG9GaXhlZCgyKX1zYCA6ICdObyBvbmUgRmluaXNoZWQnO1xyXG4gICAgbWVzc2FnZUJsb2NrLmFwcGVuZChtZXNzYWdlVGV4dCk7XHJcbiAgICByZXR1cm4gbWVzc2FnZUJsb2NrO1xyXG59O1xyXG5jb25zdCBjcmVhdGVXaW5uZXJzVGFibGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICBjb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBjb25zdCBpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgY29uc3QgY2FyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCB3aW5zQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCB0aW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gICAgdGFibGUuY2xhc3NOYW1lID0gJ3dpbm5lcnNfX3RhYmxlJztcclxuICAgIHRhYmxlQm9keS5jbGFzc05hbWUgPSAnd2lubmVyc19fdGFibGVfX2JvZHknO1xyXG4gICAgaWRDZWxsLmlkID0gJ2lkJztcclxuICAgIGlkQ2VsbC50ZXh0Q29udGVudCA9ICdJZCc7XHJcbiAgICBjYXJDZWxsLnRleHRDb250ZW50ID0gJ0Nhcic7XHJcbiAgICBuYW1lQ2VsbC50ZXh0Q29udGVudCA9ICdOYW1lJztcclxuICAgIHdpbnNDZWxsLmlkID0gJ3dpbnMnO1xyXG4gICAgd2luc0NlbGwudGV4dENvbnRlbnQgPSAnV2lucyc7XHJcbiAgICB0aW1lQ2VsbC5pZCA9ICd0aW1lJztcclxuICAgIHRpbWVDZWxsLnRleHRDb250ZW50ID0gJ1RpbWUnO1xyXG4gICAgaGVhZFJvdy5hcHBlbmQoaWRDZWxsLCBjYXJDZWxsLCBuYW1lQ2VsbCwgd2luc0NlbGwsIHRpbWVDZWxsKTtcclxuICAgIHRhYmxlSGVhZC5hcHBlbmQoaGVhZFJvdyk7XHJcbiAgICB0YWJsZS5hcHBlbmQodGFibGVIZWFkLCB0YWJsZUJvZHkpO1xyXG4gICAgcmV0dXJuIHRhYmxlO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlV2lubmVyc1ZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3aW5uZXJzVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgd2lubmVyc0Ftb3VudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29uc3Qgd2lubmVyc0Ftb3VudFRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3Qgd2lubmVyc0hlYWRlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdpbm5lcnNIZWFkZXJzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd3aW5uZXJzLWhlYWRlcnMtY29udGFpbmVyJztcclxuICAgIHdpbm5lcnNBbW91bnRUZXh0RWxlbWVudC5jbGFzc05hbWUgPSAnd2lubmVycy1hbW91bnQnO1xyXG4gICAgd2lubmVyc0Ftb3VudFRleHRFbGVtZW50LnRleHRDb250ZW50ID0gJzAnO1xyXG4gICAgd2lubmVyc0Ftb3VudEVsZW1lbnQuaW5uZXJIVE1MID0gJ1dpbm5lcnMgKCA8c3BhbiBjbGFzcz1cIndpbm5lcnMtYW1vdW50XCI+MDwvc3Bhbj4gKTwvc3Bhbj4nO1xyXG4gICAgY29uc3QgcGFnZU51bWJlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgcGFnZU51bWJlclRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcGFnZU51bWJlclRleHRFbGVtZW50LmNsYXNzTmFtZSA9ICgncGFnZS1udW1iZXInKTtcclxuICAgIHBhZ2VOdW1iZXJUZXh0RWxlbWVudC50ZXh0Q29udGVudCA9ICcxJztcclxuICAgIHBhZ2VOdW1iZXJFbGVtZW50LmlubmVySFRNTCA9ICdQYWdlICMgPHNwYW4gY2xhc3M9XCJ3aW5uZXJzLXBhZ2UtbnVtYmVyXCI+MTwvc3Bhbj4nO1xyXG4gICAgY29uc3QgdGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHdpbm5lcnNUYWJsZSA9IGNyZWF0ZVdpbm5lcnNUYWJsZSgpO1xyXG4gICAgdGFibGVDb250YWluZXIuYXBwZW5kKHdpbm5lcnNUYWJsZSk7XHJcbiAgICB0YWJsZUNvbnRhaW5lci5jbGFzc05hbWUgPSAoJ3dpbm5lcnMtdGFibGUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB3aW5uZXJzUGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2lubmVyc1ZpZXcuY2xhc3NOYW1lID0gJ3dpbm5lcnMgaGlkZW4nO1xyXG4gICAgd2lubmVyc1BhZ2luYXRpb24uY2xhc3NOYW1lID0gKCd3aW5uZXJzLXBhZ2luYXRpb24nKTtcclxuICAgIHdpbm5lcnNIZWFkZXJzQ29udGFpbmVyLmFwcGVuZCh3aW5uZXJzQW1vdW50RWxlbWVudCwgcGFnZU51bWJlckVsZW1lbnQpO1xyXG4gICAgd2lubmVyc1ZpZXcuYXBwZW5kKHdpbm5lcnNIZWFkZXJzQ29udGFpbmVyLCB0YWJsZUNvbnRhaW5lciwgd2lubmVyc1BhZ2luYXRpb24pO1xyXG4gICAgcmV0dXJuIHdpbm5lcnNWaWV3O1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlV2lubmVyVGFibGVSb3cgPSAod2lubmVyRGF0YSkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIGNvbnN0IGlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjb25zdCBjYXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNvbnN0IG5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNvbnN0IHdpbnNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNvbnN0IHRpbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGlkQ2VsbC50ZXh0Q29udGVudCA9IGAke3dpbm5lckRhdGEuaWR9YDtcclxuICAgIGNhckNlbGwuaW5uZXJIVE1MID0gZ2V0Q29sb3JlZFN2Zyh3aW5uZXJEYXRhLmNvbG9yKTtcclxuICAgIG5hbWVDZWxsLnRleHRDb250ZW50ID0gd2lubmVyRGF0YS5uYW1lO1xyXG4gICAgd2luc0NlbGwudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJEYXRhLndpbnN9YDtcclxuICAgIHRpbWVDZWxsLnRleHRDb250ZW50ID0gYCR7KHdpbm5lckRhdGEudGltZSAvIDEwMDApLnRvRml4ZWQoMil9YDtcclxuICAgIHJvdy5hcHBlbmQoaWRDZWxsLCBjYXJDZWxsLCBuYW1lQ2VsbCwgd2luc0NlbGwsIHRpbWVDZWxsKTtcclxuICAgIHJldHVybiByb3c7XHJcbn07XHJcbmV4cG9ydCBjb25zdCByZW5kZXJXaW5uZXJNZXNzYWdlID0gKGlzRmluaXNoZWQsIG5hbWUsIHRpbWUpID0+IHtcclxuICAgIGNvbnN0IGdhcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKTtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVXaW5uZXJNZXNzYWdlKGlzRmluaXNoZWQsIG5hbWUsIHRpbWUpO1xyXG4gICAgZ2FyYWdlPy5hcHBlbmQobWVzc2FnZSk7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJCbG9ja0VsZW1lbnQoY2FyRGF0YSkge1xyXG4gICAgY29uc3QgY2FyQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhckJsb2NrLmNsYXNzTmFtZSA9ICdjYXItYmxvY2snO1xyXG4gICAgY2FyQmxvY2suaWQgPSBgJHtjYXJEYXRhLmlkfWA7XHJcbiAgICBjYXJCbG9jay5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJjYXItYmxvY2tfX2hlYWRcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwic2VsZWN0XCI+U2VsZWN0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgIDxzcGFuIGNsYXNzPVwiY2FyX19uYW1lXCI+JHtjYXJEYXRhLm5hbWV9PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNhci1ibG9ja19fYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJlbmdpbmUtYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN0YXJ0LXJhY2UtYnV0dG9uXCI+QTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN0b3AtcmFjZS1idXR0b25cIiBkaXNhYmxlZD5CPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhY2VcIj5cbiAgICAgICR7Z2V0Q29sb3JlZFN2ZyhjYXJEYXRhLmNvbG9yKX1cbiAgICAgIDxzdmcgY2xhc3M9XCJmbGFnXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAwLjM0NCAzMDAuMzQ0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMC4zNDQgMzAwLjM0NDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjg5LjI4NiwyOC4zNmMtNi43NzMtMy4zODYtMTQuODg1LTIuNjU1LTIwLjk0NSwxLjg5MmMtMjMuMzg3LDE3LjU0Ny00Ni4wMTQsMTAuMzk1LTgwLjk5Mi0yLjcyOFxuICAgICAgICBjLTM0LjI4MS0xMi44NTktNzYuOTQyLTI4Ljg2MS0xMTkuMDQ3LDIuNzI4Yy01LjAzNCwzLjc3Ny03Ljk5Nyw5LjcwNC03Ljk5NywxNS45OTh2MTE5LjExMmMwLDcuNTc2LDQuMjgxLDE0LjUwMiwxMS4wNTgsMTcuODlcbiAgICAgICAgczE0Ljg4NywyLjY1NCwyMC45NDUtMS44OTJjMjMuMzg3LTE3LjU0Nyw0Ni4wMTQtMTAuMzk1LDgwLjk5MiwyLjcyOGMxOS41MTMsNy4zMTksNDEuNzM5LDE1LjY1Nyw2NS4wMzQsMTUuNjU3XG4gICAgICAgIGMxNy42MzEsMCwzNS44NzQtNC43NzYsNTQuMDEzLTE4LjM4NWM1LjAzNC0zLjc3Nyw3Ljk5Ny05LjcwNCw3Ljk5Ny0xNS45OThWNDYuMjVDMzAwLjM0NCwzOC42NzQsMjk2LjA2MywzMS43NDgsMjg5LjI4NiwyOC4zNnpcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aCBkPVwiTTIwLDcuODE5Yy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMHYyNDQuNzA1YzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwczIwLTguOTU0LDIwLTIwVjI3LjgxOVxuICAgICAgICBDNDAsMTYuNzczLDMxLjA0Niw3LjgxOSwyMCw3LjgxOXpcIi8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGc+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcclxuICAgIHJldHVybiBjYXJCbG9jaztcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xyXG5pbXBvcnQgJy4vZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy92aWV3L2dhcmFnZS9nYXJhZ2Uuc2Nzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3ZpZXcvd2lubmVycy93aW5uZXJzLnNjc3MnO1xyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5zdGFydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=