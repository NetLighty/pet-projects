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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _controller_appController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/appController */ "./src/components/controller/appController.ts");
/* harmony import */ var _view_garage_garage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/garage/garage */ "./src/components/view/garage/garage.ts");
/* harmony import */ var _view_winners_winners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/winners/winners */ "./src/components/view/winners/winners.ts");




class App {
    constructor() {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.renderPageTemplate)();
        this.controller = new _controller_appController__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.winners = new _view_winners_winners__WEBPACK_IMPORTED_MODULE_3__["default"](this.controller);
        this.garage = new _view_garage_garage__WEBPACK_IMPORTED_MODULE_2__["default"](this.controller, this.winners);
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
/* harmony export */   "renderPageTemplate": () => (/* binding */ renderPageTemplate),
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
const pageTemplate = `<div class="page">
<main>
  <div class="page__navigation">
    <button class="page__navigation__button garage-button">Garage</button>
    <button class="page__navigation__button winners-button">Winners</button>
  </div>
  <div class="garage">
    <div class="garage-container">
      <div class="garage__menu">
        <div class="create-form form">
          <input type="text" id="text-create"/>
          <input type="color" id="colorpicker-create" value="#ffffff">
          <button class="" id="create-button">Create</button>
        </div>
        <div class="update-form form">
          <input type="text" id="text-update"/>
          <input type="color" id="colorpicker-update" value="#ffffff">
          <button class="" id="update-button">Update</button>
        </div>
        <div class="garage-controls">
          <button class="start-race-button">Race</button>
          <button class="reset-button" disabled>Reset</button>
          <button class="" id="generate-cars-button">Generate Cars</button>
        </div>
      </div>
      <h1>Garage ( <span class="cars-amount">0</span> )</h1>
      <h2>Page # <span class="page-number">1</span></h2>
      <div class="cars-list">
      </div>
      <div class="pagination"></div>
    </div>
  </div>
</main>
</div>`;
const renderPageTemplate = () => {
    const body = document.body;
    body.innerHTML = pageTemplate;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDaEI7QUFDdUI7QUFDRTtBQUNoRCxnQkFBZ0IsMkRBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2dhcmFnZS9nYXJhZ2Uuc2Nzcz8xNmMyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvd2lubmVycy93aW5uZXJzLnNjc3M/NDNlYyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsLnNjc3M/ODE4ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvYXBwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2dhcmFnZS9nYXJhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy93aW5uZXJzL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXJQYWdlVGVtcGxhdGUgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvYXBwQ29udHJvbGxlcic7XHJcbmltcG9ydCBHYXJhZ2UgZnJvbSAnLi4vdmlldy9nYXJhZ2UvZ2FyYWdlJztcclxuaW1wb3J0IFdpbm5lcnMgZnJvbSAnLi4vdmlldy93aW5uZXJzL3dpbm5lcnMnO1xyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgcmVuZGVyUGFnZVRlbXBsYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLndpbm5lcnMgPSBuZXcgV2lubmVycyh0aGlzLmNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FyYWdlID0gbmV3IEdhcmFnZSh0aGlzLmNvbnRyb2xsZXIsIHRoaXMud2lubmVycyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0V2lubmVyc0FuZEdhcmFnZUJsb2NrcygpIHtcclxuICAgICAgICBjb25zdCBnYXJhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlJyk7XHJcbiAgICAgICAgY29uc3Qgd2lubmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgZ2FyYWdlLCB3aW5uZXJzIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2hvd0dhcmFnZSgpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXJBbmRHYXJhZ2UgPSBBcHAuZ2V0V2lubmVyc0FuZEdhcmFnZUJsb2NrcygpO1xyXG4gICAgICAgIHdpbm5lckFuZEdhcmFnZS5nYXJhZ2U/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVuJyk7XHJcbiAgICAgICAgd2lubmVyQW5kR2FyYWdlLndpbm5lcnM/LmNsYXNzTGlzdC5hZGQoJ2hpZGVuJyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2hvd1dpbm5lcnMoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyQW5kR2FyYWdlID0gQXBwLmdldFdpbm5lcnNBbmRHYXJhZ2VCbG9ja3MoKTtcclxuICAgICAgICB3aW5uZXJBbmRHYXJhZ2UuZ2FyYWdlPy5jbGFzc0xpc3QuYWRkKCdoaWRlbicpO1xyXG4gICAgICAgIHdpbm5lckFuZEdhcmFnZS53aW5uZXJzPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlbicpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLWJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGdhcmFnZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UtYnV0dG9uJyk7XHJcbiAgICAgICAgd2lubmVyc0J1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBcHAuc2hvd1dpbm5lcnMoKSk7XHJcbiAgICAgICAgZ2FyYWdlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFwcC5zaG93R2FyYWdlKCkpO1xyXG4gICAgICAgIHRoaXMuZ2FyYWdlLnJlZnJlc2hHYXJhZ2UoKTtcclxuICAgICAgICB0aGlzLndpbm5lcnMucmVuZGVyV2lubmVyc1BhZ2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImNsYXNzIEFwcENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcGlVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcclxuICAgIH1cclxuICAgIGFzeW5jIGdldENhcnMocGFyYW1zKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgJy9nYXJhZ2U/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSwgJ0dFVCcpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Q2FyKGlkKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC9nYXJhZ2UvJHtpZH1gLCAnR0VUJyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjcmVhdGVDYXIoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvZ2FyYWdlJywgJ1BPU1QnLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlQ2FyKGlkLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC9nYXJhZ2UvJHtpZH1gLCAnUFVUJywgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGFzeW5jIGRlbGV0ZUNhcihpZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvZ2FyYWdlLyR7aWR9YCwgJ0RFTEVURScpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBydWxlQ2FyRW5naW5lKGlkLCBzdGF0dXMpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyAnL2VuZ2luZT8nICsgbmV3IFVSTFNlYXJjaFBhcmFtcyh7IGlkOiBgJHtpZH1gLCBzdGF0dXMgfSksICdQQVRDSCcpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZHJpdmVDYXJFbmdpbmUoaWQsIHN0YXR1cykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvZW5naW5lPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgaWQ6IGAke2lkfWAsIHN0YXR1cyB9KSwgJ1BBVENIJykuY2F0Y2goKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyAhPT0gMjAwID8geyBzdWNjZXNzOiBmYWxzZSB9IDogeyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRXaW5uZXJzKHBhcmFtcykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvd2lubmVycz8nICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLCAnR0VUJyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRXaW5uZXIoaWQpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBhd2FpdCBBcHBDb250cm9sbGVyLnJlcXVlc3QodGhpcy5hcGlVcmwgKyBgL3dpbm5lcnMvJHtpZH1gLCAnR0VUJyk7XHJcbiAgICAgICAgcmV0dXJuIHdpbm5lci5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjcmVhdGVXaW5uZXIoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArICcvd2lubmVycycsICdQT1NUJywgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGFzeW5jIGRlbGV0ZVdpbm5lcihpZCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGF3YWl0IEFwcENvbnRyb2xsZXIucmVxdWVzdCh0aGlzLmFwaVVybCArIGAvd2lubmVycy8ke2lkfWAsICdERUxFVEUnKTtcclxuICAgICAgICByZXR1cm4gd2lubmVyLmpzb24oKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHVwZGF0ZVdpbm5lcihkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyID0gYXdhaXQgQXBwQ29udHJvbGxlci5yZXF1ZXN0KHRoaXMuYXBpVXJsICsgYC93aW5uZXJzLyR7ZGF0YS5pZH1gLCAnUFVUJywgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHdpbm5lci5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgcmVxdWVzdCh1cmwsIG1ldGhvZCwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBtZXRob2QsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9KTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xsZXI7XHJcbiIsImltcG9ydCB7IGNhckRyaXZlQW5pbWF0aW9uLCBjcmVhdGVDYXJCbG9ja0VsZW1lbnQsIGdlbmVyYXRlQ2Fyc051bWJlciwgZ2V0RGlzdGFuY2VCZXR3ZWVuRWxlbXMsIGdldFBhZ2luYXRpb25CdXR0b25zLCBnZXRSYW5kb21DYXJOYW1lLCBnZXRSYW5kb21Db2xvciwgcmVuZGVyV2lubmVyTWVzc2FnZSwgc3RhcnRSYWNlQnV0dG9uQ2xhc3MsIHN0b3BSYWNlQnV0dG9uQ2xhc3MsIHVua25vd25DYXJOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5jbGFzcyBHYXJhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlciwgd2lubmVycykge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy53aW5uZXJzID0gd2lubmVycztcclxuICAgICAgICB0aGlzLmFsbENhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhZ2VMaW1pdCA9IDc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5jYXJzSW5QYWdlID0gW107XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0geyBhbmltYXRpb25zOiBbXSB9O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJJZCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0VXBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC11cGRhdGUnKTtcclxuICAgICAgICB0aGlzLmNvbG9yVXBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JwaWNrZXItdXBkYXRlJyk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhcnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGUtY2Fycy1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5pbml0R2FyYWdlKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbml0R2FyYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRSYWNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LXJhY2UtYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnV0dG9uJyk7XHJcbiAgICAgICAgc3RhcnRSYWNlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc3RhcnRSYWNlKCkpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVzZXRDYXJzKCkpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYXJzQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ2VuZXJhdGVDYXJzKGdlbmVyYXRlQ2Fyc051bWJlcikpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY3JlYXRlQ2FyKCkpO1xyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnVwZGF0ZUNhcigpKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHJlZnJlc2hHYXJhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxDYXJzID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLmdldENhcnMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlckNhcnNQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ2Fyc0Ftb3VudCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUGFnaW5hdGlvbkJ1dHRvbnMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGNoYW5nZVBhZ2UocGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUGFnZU51bWJlcigpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyQ2Fyc1BhZ2UocGFnZSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdpbmF0aW9uQnV0dG9ucygpIHtcclxuICAgICAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb24nKTtcclxuICAgICAgICBjb25zdCBwYWdlc051bWJlciA9IHRoaXMuYWxsQ2Fycy5sZW5ndGggLyB0aGlzLnBhZ2VMaW1pdDtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZ2V0UGFnaW5hdGlvbkJ1dHRvbnMocGFnZXNOdW1iZXIpO1xyXG4gICAgICAgIGlmIChidXR0b25zQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jaGFuZ2VQYWdlKGluZGV4ICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVuZGVyQ2Fyc1BhZ2UocGFnZSkge1xyXG4gICAgICAgIGNvbnN0IGNhcnNEYXRhID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLmdldENhcnMoeyBfcGFnZTogYCR7cGFnZX1gLCBfbGltaXQ6IGAke3RoaXMucGFnZUxpbWl0fWAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXJzSW5QYWdlID0gY2Fyc0RhdGE7XHJcbiAgICAgICAgY29uc3QgY2FyQmxvY2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnMtbGlzdCcpO1xyXG4gICAgICAgIGlmIChjYXJCbG9ja3NDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY2FyQmxvY2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnNJblBhZ2UuZm9yRWFjaCgoY2FyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJCbG9jayA9IGNyZWF0ZUNhckJsb2NrRWxlbWVudChjYXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJCbG9ja0xpc3RlbmVycyhjYXJCbG9jayk7XHJcbiAgICAgICAgICAgICAgICBjYXJCbG9ja3NDb250YWluZXI/LmFwcGVuZChjYXJCbG9jayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldENhckJsb2NrTGlzdGVuZXJzKGNhckJsb2NrKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY2FyQmxvY2sucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcclxuICAgICAgICBjb25zdCBzdGFydFJhY2VCdXR0b24gPSBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKHN0YXJ0UmFjZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgICBjb25zdCBzdG9wUmFjZUJ1dHRvbiA9IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3Ioc3RvcFJhY2VCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZGVsZXRlQ2FyKCtjYXJCbG9jay5pZCkpO1xyXG4gICAgICAgIHNlbGVjdEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNlbGVjdENhcigrY2FyQmxvY2suaWQpKTtcclxuICAgICAgICBzdGFydFJhY2VCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zdGFydENhckVuZ2luZSgrY2FyQmxvY2suaWQpKTtcclxuICAgICAgICBzdG9wUmFjZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnN0b3BDYXJFbmdpbmUoK2NhckJsb2NrLmlkKSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJDYXJzQW1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IGNhcnNBbW91bnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnMtYW1vdW50Jyk7XHJcbiAgICAgICAgaWYgKGNhcnNBbW91bnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNhcnNBbW91bnRFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGhpcy5hbGxDYXJzLmxlbmd0aH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlclBhZ2VOdW1iZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1udW1iZXInKTtcclxuICAgICAgICBpZiAocGFnZU51bWJlckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcGFnZU51bWJlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0aGlzLmN1cnJlbnRQYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2VuZXJhdGVDYXJzKG4pIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IGdldFJhbmRvbUNvbG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU5hbWUgPSBnZXRSYW5kb21DYXJOYW1lKCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlcy5wdXNoKHRoaXMuY29udHJvbGxlci5jcmVhdGVDYXIoeyBjb2xvcjogcmFuZG9tQ29sb3IsIG5hbWU6IHJhbmRvbU5hbWUgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyZXNwb25zZXMpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaEdhcmFnZSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZGVsZXRlQ2FyKGlkKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jb250cm9sbGVyLmRlbGV0ZUNhcihpZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy53aW5uZXJzLmRlbGV0ZVdpbm5lcihpZCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjcmVhdGVDYXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY3JlYXRlJyk7XHJcbiAgICAgICAgY29uc3QgY29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcnBpY2tlci1jcmVhdGUnKTtcclxuICAgICAgICBpZiAodGV4dElucHV0ICYmIGNvbG9ySW5wdXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRleHRJbnB1dC52YWx1ZSA/IHRleHRJbnB1dC52YWx1ZSA6IHVua25vd25DYXJOYW1lO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuY3JlYXRlQ2FyKHsgbmFtZSwgY29sb3I6IGNvbG9ySW5wdXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaEdhcmFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdENhcihpZCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2FyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcclxuICAgICAgICBjb25zdCBwYXN0U2VsZWN0ZWRDYXJCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuc2VsZWN0ZWRDYXJJZH1gKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENhck5hbWUgPSBzZWxlY3RlZENhckJsb2NrPy5xdWVyeVNlbGVjdG9yKCcuY2FyX19uYW1lJyk/LnRleHRDb250ZW50O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2FyQ29sb3IgPSBzZWxlY3RlZENhckJsb2NrPy5xdWVyeVNlbGVjdG9yKCcuY2FyX19pbWcnKT8uZ2V0QXR0cmlidXRlKCdmaWxsJyk7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dFVwZGF0ZUlucHV0ICYmIHRoaXMuY29sb3JVcGRhdGVJbnB1dCAmJiBzZWxlY3RlZENhckNvbG9yICYmIHNlbGVjdGVkQ2FyTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRVcGRhdGVJbnB1dC52YWx1ZSA9IHNlbGVjdGVkQ2FyTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclVwZGF0ZUlucHV0LnZhbHVlID0gc2VsZWN0ZWRDYXJDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJJZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDYXJCbG9jaz8uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ2FyQmxvY2s/LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHBhc3RTZWxlY3RlZENhckJsb2NrPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FySWQgPSBpZDtcclxuICAgIH1cclxuICAgIGFzeW5jIHVwZGF0ZUNhcigpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0VXBkYXRlSW5wdXQgJiYgdGhpcy5jb2xvclVwZGF0ZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udHJvbGxlci51cGRhdGVDYXIodGhpcy5zZWxlY3RlZENhcklkLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRleHRVcGRhdGVJbnB1dC52YWx1ZSwgY29sb3I6IHRoaXMuY29sb3JVcGRhdGVJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0VXBkYXRlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoR2FyYWdlKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0Q2FyQmxvY2tFbGVtZW50cyhpZCkge1xyXG4gICAgICAgIGNvbnN0IGNhckJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XHJcbiAgICAgICAgY29uc3QgY2FySW1nID0gY2FyQmxvY2s/LnF1ZXJ5U2VsZWN0b3IoJy5jYXJfX2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGZsYWcgPSBjYXJCbG9jaz8ucXVlcnlTZWxlY3RvcignLmZsYWcnKTtcclxuICAgICAgICByZXR1cm4geyBibG9jazogY2FyQmxvY2ssIGltZzogY2FySW1nLCBmbGFnOiBmbGFnIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2hhbmdlQnV0dG9uc0Rpc2FibGVkKGNhcklkKSB7XHJcbiAgICAgICAgY29uc3QgY2FyRWxlbWVudHMgPSBHYXJhZ2UuZ2V0Q2FyQmxvY2tFbGVtZW50cyhjYXJJZCk7XHJcbiAgICAgICAgaWYgKGNhckVsZW1lbnRzLmJsb2NrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gY2FyRWxlbWVudHMuYmxvY2sucXVlcnlTZWxlY3RvcignLnN0YXJ0LXJhY2UtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3BCdXR0b24gPSBjYXJFbGVtZW50cy5ibG9jay5xdWVyeVNlbGVjdG9yKCcuc3RvcC1yYWNlLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRCdXR0b24gJiYgc3RvcEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3BCdXR0b24uZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHN0YXJ0Q2FyRW5naW5lKGlkKSB7XHJcbiAgICAgICAgY29uc3QgY2FyRWxlbWVudHMgPSBHYXJhZ2UuZ2V0Q2FyQmxvY2tFbGVtZW50cyhpZCk7XHJcbiAgICAgICAgR2FyYWdlLmNoYW5nZUJ1dHRvbnNEaXNhYmxlZChpZCk7XHJcbiAgICAgICAgY29uc3QgZW5naW5lRGF0YSA9IGF3YWl0IHRoaXMuY29udHJvbGxlci5ydWxlQ2FyRW5naW5lKGlkLCAnc3RhcnRlZCcpO1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblRpbWUgPSBlbmdpbmVEYXRhLmRpc3RhbmNlIC8gZW5naW5lRGF0YS52ZWxvY2l0eTtcclxuICAgICAgICBsZXQgZHJpdmVSZXMgPSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY2FyRWxlbWVudHMuaW1nICYmIGNhckVsZW1lbnRzLmZsYWcpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VCZXR3ZWVuQ2FyQW5kRmxhZyA9IGdldERpc3RhbmNlQmV0d2VlbkVsZW1zKGNhckVsZW1lbnRzLmltZywgY2FyRWxlbWVudHMuZmxhZyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5hbmltYXRpb25zW2lkXSA9IGNhckRyaXZlQW5pbWF0aW9uKGNhckVsZW1lbnRzLmltZywgZGlzdGFuY2VCZXR3ZWVuQ2FyQW5kRmxhZywgYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgICAgIGRyaXZlUmVzID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLmRyaXZlQ2FyRW5naW5lKGlkLCAnZHJpdmUnKTtcclxuICAgICAgICAgICAgaWYgKCFkcml2ZVJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnN0b3JhZ2UuYW5pbWF0aW9uc1tpZF0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGlkLCB0aW1lOiBhbmltYXRpb25UaW1lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChpZCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0U3RhcnRSYWNlQnV0dG9uRGlzYWJsZWQoc3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRSYWNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LXJhY2UtYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKHN0YXJ0UmFjZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBzdGFydFJhY2VCdXR0b24uZGlzYWJsZWQgPSBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldFJlc2V0QnV0dG9uRGlzYWJsZWQoc3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKHJlc2V0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmRpc2FibGVkID0gc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHN0YXJ0UmFjZSgpIHtcclxuICAgICAgICBHYXJhZ2Uuc2V0U3RhcnRSYWNlQnV0dG9uRGlzYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gW107XHJcbiAgICAgICAgdGhpcy5jYXJzSW5QYWdlLmZvckVhY2goKGNhcikgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZXMucHVzaCh0aGlzLnN0YXJ0Q2FyRW5naW5lKGNhci5pZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHdpbm5lcklkQW5kVGltZSA9IGF3YWl0IFByb21pc2UuYW55KHJlc3BvbnNlcykuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJXaW5uZXJNZXNzYWdlKGZhbHNlLCAnJywgMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHdpbm5lcklkQW5kVGltZSkge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5uZXJJbmZvID0gdGhpcy5jYXJzSW5QYWdlLmZpbmQoKHdpbm5lcikgPT4gd2lubmVyLmlkID09PSB3aW5uZXJJZEFuZFRpbWUuaWQpO1xyXG4gICAgICAgICAgICBjb25zdCB3aW5uZXJOYW1lID0gd2lubmVySW5mbz8ubmFtZTtcclxuICAgICAgICAgICAgaWYgKHdpbm5lck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcldpbm5lck1lc3NhZ2UodHJ1ZSwgd2lubmVyTmFtZSwgd2lubmVySWRBbmRUaW1lLnRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aW5uZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lcnMuYWRkV2lubmVySW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHdpbm5lckluZm8uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogd2lubmVySW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aW5uZXJJbmZvLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHdpbm5lcklkQW5kVGltZS50aW1lXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBHYXJhZ2Uuc2V0UmVzZXRCdXR0b25EaXNhYmxlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdG9wQ2FyRW5naW5lKGlkKSB7XHJcbiAgICAgICAgY29uc3QgY2FyRWxlbWVudHMgPSBHYXJhZ2UuZ2V0Q2FyQmxvY2tFbGVtZW50cyhpZCk7XHJcbiAgICAgICAgbGV0IHJlcyA9IHtcclxuICAgICAgICAgICAgdmVsb2NpdHk6IDAsXHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBHYXJhZ2UuY2hhbmdlQnV0dG9uc0Rpc2FibGVkKGlkKTtcclxuICAgICAgICBpZiAoY2FyRWxlbWVudHMuaW1nKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHRoaXMuY29udHJvbGxlci5ydWxlQ2FyRW5naW5lKGlkLCAnc3RvcHBlZCcpO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnN0b3JhZ2UuYW5pbWF0aW9uc1tpZF0uaWQpO1xyXG4gICAgICAgICAgICBjYXJFbGVtZW50cy5pbWcuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCkgc2NhbGUoLTEsIDEpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGFzeW5jIHJlc2V0Q2FycygpIHtcclxuICAgICAgICBHYXJhZ2Uuc2V0UmVzZXRCdXR0b25EaXNhYmxlZCh0cnVlKTtcclxuICAgICAgICBjb25zdCB3aW5uZXJNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1tZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNhcnNJblBhZ2UuZm9yRWFjaCgoY2FyKSA9PiB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5zdG9wQ2FyRW5naW5lKGNhci5pZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbm5lck1lc3NhZ2U/LnJlbW92ZSgpO1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICBHYXJhZ2Uuc2V0U3RhcnRSYWNlQnV0dG9uRGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhcmFnZTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlV2lubmVyc1ZpZXcsIGNyZWF0ZVdpbm5lclRhYmxlUm93LCBnZXRBcnJvdywgZ2V0UGFnaW5hdGlvbkJ1dHRvbnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XHJcbmNsYXNzIFdpbm5lcnMge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5wYWdlTGltaXQgPSAxMDtcclxuICAgICAgICB0aGlzLmFsbFdpbm5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLndpbm5lcnNPblBhZ2UgPSBbXTtcclxuICAgICAgICB0aGlzLmFsbENhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTb3J0ID0gJ3dpbnMnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9yZGVyID0gJ0RFU0MnO1xyXG4gICAgICAgIHRoaXMuaW5pdFdpbm5lcnMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGluaXRXaW5uZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lcnNWaWV3ID0gY3JlYXRlV2lubmVyc1ZpZXcoKTtcclxuICAgICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKTtcclxuICAgICAgICBwYWdlPy5hcHBlbmQod2lubmVyc1ZpZXcpO1xyXG4gICAgICAgIGNvbnN0IHdpbnNDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbnMnKTtcclxuICAgICAgICBjb25zdCBpZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWQnKTtcclxuICAgICAgICBjb25zdCB0aW1lQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJyk7XHJcbiAgICAgICAgd2luc0NlbGw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc29ydFdpbm5lcnMoZSkpO1xyXG4gICAgICAgIHdpbnNDZWxsPy5hcHBlbmQoZ2V0QXJyb3coKSk7XHJcbiAgICAgICAgaWRDZWxsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnNvcnRXaW5uZXJzKGUpKTtcclxuICAgICAgICB0aW1lQ2VsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zb3J0V2lubmVycyhlKSk7XHJcbiAgICAgICAgdGhpcy5hbGxDYXJzID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLmdldENhcnMoKTtcclxuICAgICAgICB0aGlzLmFsbFdpbm5lcnMgPSBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZ2V0V2lubmVycygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaFdpbm5lcnMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFdpbm5lcnNQYWdlKHBhZ2UsIHNvcnQsIG9yZGVyKSB7XHJcbiAgICAgICAgdGhpcy53aW5uZXJzT25QYWdlID0gYXdhaXQgdGhpcy5jb250cm9sbGVyLmdldFdpbm5lcnMoe1xyXG4gICAgICAgICAgICBfcGFnZTogYCR7cGFnZX1gLCBfbGltaXQ6IGAke3RoaXMucGFnZUxpbWl0fWAsIF9zb3J0OiBzb3J0LCBfb3JkZXI6IG9yZGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lubmVyc09uUGFnZTtcclxuICAgIH1cclxuICAgIGFzeW5jIHNvcnRXaW5uZXJzKGUpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKT8ucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgYXJyb3cgPSBnZXRBcnJvdygpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9yZGVyID0gdGhpcy5jdXJyZW50T3JkZXIgPT09ICdERVNDJyA/ICdBU0MnIDogJ0RFU0MnO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcmRlciA9PT0gJ0FTQycpIHtcclxuICAgICAgICAgICAgYXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXQuYXBwZW5kKGFycm93KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTb3J0ID0gdGFyZ2V0LmlkO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyV2lubmVyc1BhZ2UoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHJlbmRlcldpbm5lcnNQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lcnNEYXRhID0gYXdhaXQgdGhpcy5nZXRXaW5uZXJzUGFnZSh0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLmN1cnJlbnRTb3J0LCB0aGlzLmN1cnJlbnRPcmRlcik7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyc1RhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzX190YWJsZV9fYm9keScpO1xyXG4gICAgICAgIGlmICh3aW5uZXJzVGFibGVCb2R5KSB7XHJcbiAgICAgICAgICAgIHdpbm5lcnNUYWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIHdpbm5lcnNEYXRhLmZvckVhY2goKHdpbm5lckRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpbm5lckNhciA9IHRoaXMuYWxsQ2Fycy5maW5kKChjYXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FyLmlkID09PSB3aW5uZXJEYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2lubmVyQ2FyICYmIHdpbm5lcnNUYWJsZUJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZVJvdyA9IGNyZWF0ZVdpbm5lclRhYmxlUm93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpbm5lckRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHdpbm5lckNhci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2lubmVyQ2FyLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB3aW5uZXJEYXRhLnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbnM6IHdpbm5lckRhdGEud2luc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbm5lcnNUYWJsZUJvZHkuYXBwZW5kKHRhYmxlUm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY3JlYXRlV2lubmVyKGlkLCB3aW5zLCB0aW1lKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jb250cm9sbGVyLmNyZWF0ZVdpbm5lcih7IGlkLCB3aW5zLCB0aW1lIH0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaFdpbm5lcnMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHVwZGF0ZVdpbm5lcihpZCwgd2lucywgdGltZSwgbGFzdFRpbWUpIHtcclxuICAgICAgICBjb25zdCBiZXN0VGltZSA9IHRpbWUgPCBsYXN0VGltZSA/IHRpbWUgOiBsYXN0VGltZTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNvbnRyb2xsZXIudXBkYXRlV2lubmVyKHsgaWQsIHdpbnMsIHRpbWU6IGJlc3RUaW1lIH0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVmcmVzaFdpbm5lcnMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGFkZFdpbm5lckluZm8od2lubmVySW5mbykge1xyXG4gICAgICAgIGNvbnN0IGlzRXhpc3QgPSB0aGlzLmFsbFdpbm5lcnMuZmluZCgod2lubmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5uZXIuaWQgPT09IHdpbm5lckluZm8uaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGlzRXhpc3QpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVXaW5uZXIod2lubmVySW5mby5pZCwgaXNFeGlzdC53aW5zICsgMSwgd2lubmVySW5mby50aW1lLCBpc0V4aXN0LnRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVXaW5uZXIod2lubmVySW5mby5pZCwgMSwgd2lubmVySW5mby50aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdpbmF0aW9uQnV0dG9ucygpIHtcclxuICAgICAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMtcGFnaW5hdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VzTnVtYmVyID0gdGhpcy5hbGxXaW5uZXJzLmxlbmd0aCAvIHRoaXMucGFnZUxpbWl0O1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBnZXRQYWdpbmF0aW9uQnV0dG9ucyhwYWdlc051bWJlcik7XHJcbiAgICAgICAgaWYgKGJ1dHRvbnNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNoYW5nZVBhZ2UoaW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBjaGFuZ2VQYWdlKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlbmRlcldpbm5lcnNQYWdlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdlTnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyByZWZyZXNoV2lubmVycygpIHtcclxuICAgICAgICB0aGlzLmFsbFdpbm5lcnMgPSBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZ2V0V2lubmVycygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyV2lubmVyc1BhZ2UoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBhZ2luYXRpb25CdXR0b25zKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdlTnVtYmVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXaW5uZXJzQW1vdW50KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkZWxldGVXaW5uZXIoaWQpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmNvbnRyb2xsZXIuZGVsZXRlV2lubmVyKGlkKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJlZnJlc2hXaW5uZXJzKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJXaW5uZXJzQW1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lcnNBbW91bnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMtYW1vdW50Jyk7XHJcbiAgICAgICAgaWYgKHdpbm5lcnNBbW91bnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHdpbm5lcnNBbW91bnRFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGhpcy5hbGxXaW5uZXJzLmxlbmd0aH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlclBhZ2VOdW1iZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1wYWdlLW51bWJlcicpO1xyXG4gICAgICAgIGlmIChwYWdlTnVtYmVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBwYWdlTnVtYmVyRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RoaXMuY3VycmVudFBhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgV2lubmVycztcclxuIiwiZXhwb3J0IGNvbnN0IGNhcnNEQiA9IHtcclxuICAgIEJNVzogWydHcmFuIENvdXBlJywgJ0FjdGl2ZSBUb3VyZXInLCAnU2Fsb29uJywgJ1o0IFJvYWRzdGVyJ10sXHJcbiAgICBBVURJOiBbJ2UtdHJvbicsICdSUyA3JywgJ1E4JywgJ1E2JywgJ1EzJ10sXHJcbiAgICBJU1VaVTogWydELU1heCcsICdNVS1YJywgJ015c3RlcmlvdXMgVXRpbGl0eSddLFxyXG4gICAgRk9SRDogWydLdWdhJywgJ0V4cGxvcmVyJywgJ0ZpZXN0YScsICdFZGdlJ10sXHJcbiAgICBGRVJSQVJJOiBbXHJcbiAgICAgICAgJ0xhRmVycmFyaScsXHJcbiAgICAgICAgJ1Bpc3JhIFNwaWRlcicsXHJcbiAgICAgICAgJ1BvcnRvZmlubycsXHJcbiAgICAgICAgJ0NoYWxsZW5nZScsXHJcbiAgICAgICAgJ0xhRmVycmFyaSBBcGVydGEnXHJcbiAgICBdLFxyXG4gICAgSEFWQUw6IFsnQmlnIERvZyddXHJcbn07XHJcbmNvbnN0IHBhZ2VUZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuPG1haW4+XG4gIDxkaXYgY2xhc3M9XCJwYWdlX19uYXZpZ2F0aW9uXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2VfX25hdmlnYXRpb25fX2J1dHRvbiBnYXJhZ2UtYnV0dG9uXCI+R2FyYWdlPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2VfX25hdmlnYXRpb25fX2J1dHRvbiB3aW5uZXJzLWJ1dHRvblwiPldpbm5lcnM8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJnYXJhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FyYWdlLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdhcmFnZV9fbWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlLWZvcm0gZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGV4dC1jcmVhdGVcIi8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiY29sb3JwaWNrZXItY3JlYXRlXCIgdmFsdWU9XCIjZmZmZmZmXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlwiIGlkPVwiY3JlYXRlLWJ1dHRvblwiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVwZGF0ZS1mb3JtIGZvcm1cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRleHQtdXBkYXRlXCIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cImNvbG9ycGlja2VyLXVwZGF0ZVwiIHZhbHVlPVwiI2ZmZmZmZlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJcIiBpZD1cInVwZGF0ZS1idXR0b25cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYXJhZ2UtY29udHJvbHNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3RhcnQtcmFjZS1idXR0b25cIj5SYWNlPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc2V0LWJ1dHRvblwiIGRpc2FibGVkPlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIlwiIGlkPVwiZ2VuZXJhdGUtY2Fycy1idXR0b25cIj5HZW5lcmF0ZSBDYXJzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aDE+R2FyYWdlICggPHNwYW4gY2xhc3M9XCJjYXJzLWFtb3VudFwiPjA8L3NwYW4+ICk8L2gxPlxuICAgICAgPGgyPlBhZ2UgIyA8c3BhbiBjbGFzcz1cInBhZ2UtbnVtYmVyXCI+MTwvc3Bhbj48L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcnMtbGlzdFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvblwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbWFpbj5cbjwvZGl2PmA7XHJcbmV4cG9ydCBjb25zdCByZW5kZXJQYWdlVGVtcGxhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGJvZHkuaW5uZXJIVE1MID0gcGFnZVRlbXBsYXRlO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0QXJyb3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXJyb3cuY2xhc3NOYW1lID0gJ2Fycm93IGRvd24nO1xyXG4gICAgYXJyb3cuaW5uZXJIVE1MID0gYDxzdmcgZGF0YS1uYW1lPVwiMS1BcnJvdyBVcFwiXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgdmlld0JveD1cIjAgMCAzMiAzMlwiPjxwYXRoIGQ9XCJtMjYuNzEgMTAuMjktMTAtMTBhMVxuICAgIDEgMCAwIDAtMS40MSAwbC0xMCAxMCAxLjQxIDEuNDFMMTUgMy40MVYzMmgyVjMuNDFsOC4yOSA4LjI5elwiLz5cbiAgICA8L3N2Zz5gO1xyXG4gICAgcmV0dXJuIGFycm93O1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlRXhwbG9zaW9uR2lmID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZXhwbG9zaW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBleHBsb3Npb25JbWcuY2xhc3NOYW1lID0gJ2V4cGxvc2lvbi1naWYnO1xyXG4gICAgZXhwbG9zaW9uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2ltZ3MvZXhwbG9zaW9uLmdpZicpO1xyXG4gICAgcmV0dXJuIGV4cGxvc2lvbkltZztcclxufTtcclxuY29uc3QgZ2V0Q29sb3JlZFN2ZyA9IChjb2xvcikgPT4ge1xyXG4gICAgcmV0dXJuIGA8c3ZnIGNsYXNzPVwiY2FyX19pbWdcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS1vcGFjaXR5PVwiMC4yXCIgZmlsbD0ke2NvbG9yfSB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjMxLjQ0NXB4XCIgaGVpZ2h0PVwiMzEuNDQ1cHhcIlxuICB2aWV3Qm94PVwiMCAwIDMxLjQ0NSAzMS40NDVcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuNDQ1IDMxLjQ0NTtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gIHRyYW5zZm9ybT1cInNjYWxlKC0xLCAxKVwiPlxuICA8Zz5cbiAgICA8Zz5cbiAgICAgIDxwYXRoIGQ9XCJNNy41OTIsMTYuODZjLTEuNzcsMC0zLjIwMywxLjQzNC0zLjIwMywzLjIwNHMxLjQzNCwzLjIwNCwzLjIwMywzLjIwNGMxLjc2OCwwLDMuMjAzLTEuNDM0LDMuMjAzLTMuMjA0XG4gIFM5LjM2LDE2Ljg2LDcuNTkyLDE2Ljg2eiBNNy41OTIsMjEuMDMyYy0wLjUzMiwwLTAuOTY4LTAuNDM0LTAuOTY4LTAuOTY3czAuNDM2LTAuOTY3LDAuOTY4LTAuOTY3XG4gIGMwLjUzMSwwLDAuOTY2LDAuNDM0LDAuOTY2LDAuOTY3UzguMTI0LDIxLjAzMiw3LjU5MiwyMS4wMzJ6XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMzAuOTE1LDE3LjQzOWwtMC41MjQtNC4yNjJjLTAuMTAzLTAuODE4LTAuODE4LTEuNDE4LTEuNjQzLTEuMzczTDI3LjYsMTEuODY4bC0zLjU2NC0zLjIxMVxuICAgIGMtMC4zNDQtMC4zMDktMC43ODctMC40NzktMS4yNDktMC40NzlsLTcuMjQxLTAuMDAxYy0xLjYyNSwwLTMuMjAxLDAuNTU1LTQuNDY4LDEuNTczbC00LjA0LDMuMjQ2bC01LjQzMywxLjM1OFxuICAgIGMtMC42OTgsMC4xNzQtMS4xODgsMC44MDItMS4xODgsMS41MjF2MS41NjZDMC4xODcsMTcuNDQsMCwxNy42MjYsMCwxNy44NTZ2Mi4wNzFjMCwwLjI5NSwwLjIzOSwwLjUzNCwwLjUzNCwwLjUzNGgzLjA2N1xuICAgIGMtMC4wMTMtMC4xMzMtMC4wNC0wLjI2LTAuMDQtMC4zOTZjMC0yLjIyNywxLjgwNC00LjAyOSw0LjAzLTQuMDI5czQuMDI5LDEuODAyLDQuMDI5LDQuMDI5YzAsMC4xMzctMC4wMjgsMC4yNjQtMC4wNDEsMC4zOTZcbiAgICAgICAgaDguNDkzYy0wLjAxMi0wLjEzMy0wLjAzOS0wLjI2LTAuMDM5LTAuMzk2YzAtMi4yMjcsMS44MDQtNC4wMjksNC4wMjktNC4wMjljMi4yMjcsMCw0LjAyOCwxLjgwMiw0LjAyOCw0LjAyOVxuICAgICAgICBjMCwwLjEzNy0wLjAyNiwwLjI2NC0wLjA0LDAuMzk2aDIuODYxYzAuMjk1LDAsMC41MzMtMC4yMzksMC41MzMtMC41MzR2LTEuOTUzQzMxLjQ0OSwxNy42OCwzMS4yMSwxNy40MzksMzAuOTE1LDE3LjQzOXpcbiAgICAgICAgICBNMjAuMTY4LDEyLjIwMmwtMTAuMTAyLDAuNTExTDEyLDExLjE1OGMxLjA1MS0wLjg0NSwyLjM1Ny0xLjMwNSwzLjcwNi0xLjMwNWg0LjQ2MlYxMi4yMDJ6IE0yMS44NDYsMTIuMTE3VjkuODU0aDAuNjU3XG4gICAgICAgICAgYzAuMjI4LDAsMC40NDcsMC4wODQsMC42MTYsMC4yMzdsMi4wNjIsMS44NTZMMjEuODQ2LDEyLjExN3pcIiAvPlxuICAgICAgPHBhdGggZD1cIk0yNC4wNjQsMTYuODZjLTEuNzcsMC0zLjIwMywxLjQzNC0zLjIwMywzLjIwNHMxLjQzNCwzLjIwNCwzLjIwMywzLjIwNGMxLjc2OSwwLDMuMjAzLTEuNDM0LDMuMjAzLTMuMjA0XG4gICAgICAgICAgUzI1LjgzMywxNi44NiwyNC4wNjQsMTYuODZ6IE0yNC4wNjQsMjEuMDMyYy0wLjUzMywwLTAuOTY3LTAuNDM0LTAuOTY3LTAuOTY3czAuNDM0LTAuOTY3LDAuOTY3LTAuOTY3XG4gICAgICAgIGMwLjUzMSwwLDAuOTY3LDAuNDM0LDAuOTY3LDAuOTY3UzI0LjU5NiwyMS4wMzIsMjQuMDY0LDIxLjAzMnpcIiAvPlxuICAgIDwvZz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8Zz5cbiAgPC9nPlxuICA8L3N2Zz5gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgdW5rbm93bkNhck5hbWUgPSAnVW5rbm93bic7XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNhcnNOdW1iZXIgPSAxMDA7XHJcbmV4cG9ydCBjb25zdCBzdGFydFJhY2VCdXR0b25DbGFzcyA9ICcuc3RhcnQtcmFjZS1idXR0b24nO1xyXG5leHBvcnQgY29uc3Qgc3RvcFJhY2VCdXR0b25DbGFzcyA9ICcuc3RvcC1yYWNlLWJ1dHRvbic7XHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21Db2xvciA9ICgpID0+IHtcclxuICAgIHJldHVybiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xyXG59O1xyXG5jb25zdCBnZXRSYW5kb21CcmFuZCA9IChjYXJzSW5mbykgPT4ge1xyXG4gICAgY29uc3QgYnJhbmRzID0gT2JqZWN0LmtleXMoY2Fyc0luZm8pO1xyXG4gICAgcmV0dXJuIGJyYW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBicmFuZHMubGVuZ3RoKV07XHJcbn07XHJcbmNvbnN0IGdldFJhbmRvbU1vZGVsID0gKGJyYW5kKSA9PiB7XHJcbiAgICBjb25zdCBtb2RlbHMgPSBjYXJzREJbYnJhbmRdO1xyXG4gICAgcmV0dXJuIG1vZGVsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb2RlbHMubGVuZ3RoKV07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21DYXJOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tQnJhbmQgPSBnZXRSYW5kb21CcmFuZChjYXJzREIpO1xyXG4gICAgY29uc3QgcmFuZG9tTW9kZWwgPSBnZXRSYW5kb21Nb2RlbChyYW5kb21CcmFuZCk7XHJcbiAgICByZXR1cm4gYCR7cmFuZG9tQnJhbmR9ICR7cmFuZG9tTW9kZWx9YDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldERpc3RhbmNlQmV0d2VlbkVsZW1zID0gKGVsZW0xLCBlbGVtMikgPT4ge1xyXG4gICAgY29uc3QgeyB4OiBlbGVtMVggfSA9IGVsZW0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgeyB4OiBlbGVtMlggfSA9IGVsZW0yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIGVsZW0yWCAtIGVsZW0xWDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGNhckRyaXZlQW5pbWF0aW9uID0gKGNhciwgZGlzdGFuY2UsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICBsZXQgc3RhcnQgPSBudWxsO1xyXG4gICAgY29uc3QgcmVzdWx0RGlzdGFuY2UgPSBkaXN0YW5jZSArIDE7XHJcbiAgICBjb25zdCBhbmltYXRpb25JbmZvID0ge307XHJcbiAgICBmdW5jdGlvbiBzdGVwKHRpbWVTdGFtcCkge1xyXG4gICAgICAgIGlmICghc3RhcnQpIHtcclxuICAgICAgICAgICAgc3RhcnQgPSB0aW1lU3RhbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSAodGltZVN0YW1wIC0gc3RhcnQpIC8gYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGltZSAqIHJlc3VsdERpc3RhbmNlO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgIGNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Jlc3VsdH1weCkgc2NhbGUoLTEsIDEpYDtcclxuICAgICAgICBpZiAodGltZSA8IDEpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZXN0YW1wKSA9PiBzdGVwKHRpbWVzdGFtcCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuaW1hdGlvbkluZm8uaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWVzdGFtcCkgPT4gc3RlcCh0aW1lc3RhbXApKTtcclxuICAgIHJldHVybiBhbmltYXRpb25JbmZvO1xyXG59O1xyXG5jb25zdCBjcmVhdGVQYWdpbmF0aW9uQnV0dG9uID0gKG51bWJlck9mUGFnZSkgPT4ge1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcGFnaW5hdGlvbkJ1dHRvbi5jbGFzc05hbWUgPSAncGFnaW5hdGlvbi1idXR0b24nO1xyXG4gICAgcGFnaW5hdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9IGAke251bWJlck9mUGFnZX1gO1xyXG4gICAgcmV0dXJuIHBhZ2luYXRpb25CdXR0b247XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRQYWdpbmF0aW9uQnV0dG9ucyA9IChwYWdlc051bWJlcikgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlc051bWJlcjsgaSArPSAxKSB7XHJcbiAgICAgICAgYnV0dG9ucy5wdXNoKGNyZWF0ZVBhZ2luYXRpb25CdXR0b24oaSArIDEpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBidXR0b25zO1xyXG59O1xyXG5jb25zdCBjcmVhdGVXaW5uZXJNZXNzYWdlID0gKGlzRmluaXNoZWQsIG5hbWUsIHRpbWUpID0+IHtcclxuICAgIGNvbnN0IG1lc3NhZ2VCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbWVzc2FnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtZXNzYWdlQmxvY2suY2xhc3NOYW1lID0gJ3dpbm5lci1tZXNzYWdlJztcclxuICAgIG1lc3NhZ2VUZXh0LmNsYXNzTmFtZSA9ICd3aW5uZXItbWVzc2FnZV9fdGV4dCc7XHJcbiAgICBtZXNzYWdlVGV4dC50ZXh0Q29udGVudCA9IGlzRmluaXNoZWQgPyBgV2lubmVyIGlzICR7bmFtZX0sIHRpbWU6ICR7KHRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpfXNgIDogJ05vIG9uZSBGaW5pc2hlZCc7XHJcbiAgICBtZXNzYWdlQmxvY2suYXBwZW5kKG1lc3NhZ2VUZXh0KTtcclxuICAgIHJldHVybiBtZXNzYWdlQmxvY2s7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZVdpbm5lcnNUYWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgIGNvbnN0IHRhYmxlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XHJcbiAgICBjb25zdCBoZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIGNvbnN0IGlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCBjYXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IG5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IHdpbnNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IHRpbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcbiAgICB0YWJsZS5jbGFzc05hbWUgPSAnd2lubmVyc19fdGFibGUnO1xyXG4gICAgdGFibGVCb2R5LmNsYXNzTmFtZSA9ICd3aW5uZXJzX190YWJsZV9fYm9keSc7XHJcbiAgICBpZENlbGwuaWQgPSAnaWQnO1xyXG4gICAgaWRDZWxsLnRleHRDb250ZW50ID0gJ0lkJztcclxuICAgIGNhckNlbGwudGV4dENvbnRlbnQgPSAnQ2FyJztcclxuICAgIG5hbWVDZWxsLnRleHRDb250ZW50ID0gJ05hbWUnO1xyXG4gICAgd2luc0NlbGwuaWQgPSAnd2lucyc7XHJcbiAgICB3aW5zQ2VsbC50ZXh0Q29udGVudCA9ICdXaW5zJztcclxuICAgIHRpbWVDZWxsLmlkID0gJ3RpbWUnO1xyXG4gICAgdGltZUNlbGwudGV4dENvbnRlbnQgPSAnVGltZSc7XHJcbiAgICBoZWFkUm93LmFwcGVuZChpZENlbGwsIGNhckNlbGwsIG5hbWVDZWxsLCB3aW5zQ2VsbCwgdGltZUNlbGwpO1xyXG4gICAgdGFibGVIZWFkLmFwcGVuZChoZWFkUm93KTtcclxuICAgIHRhYmxlLmFwcGVuZCh0YWJsZUhlYWQsIHRhYmxlQm9keSk7XHJcbiAgICByZXR1cm4gdGFibGU7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVXaW5uZXJzVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdpbm5lcnNWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB3aW5uZXJzQW1vdW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCB3aW5uZXJzQW1vdW50VGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCB3aW5uZXJzSGVhZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2lubmVyc0hlYWRlcnNDb250YWluZXIuY2xhc3NOYW1lID0gJ3dpbm5lcnMtaGVhZGVycy1jb250YWluZXInO1xyXG4gICAgd2lubmVyc0Ftb3VudFRleHRFbGVtZW50LmNsYXNzTmFtZSA9ICd3aW5uZXJzLWFtb3VudCc7XHJcbiAgICB3aW5uZXJzQW1vdW50VGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICB3aW5uZXJzQW1vdW50RWxlbWVudC5pbm5lckhUTUwgPSAnV2lubmVycyAoIDxzcGFuIGNsYXNzPVwid2lubmVycy1hbW91bnRcIj4wPC9zcGFuPiApPC9zcGFuPic7XHJcbiAgICBjb25zdCBwYWdlTnVtYmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBwYWdlTnVtYmVyVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwYWdlTnVtYmVyVGV4dEVsZW1lbnQuY2xhc3NOYW1lID0gKCdwYWdlLW51bWJlcicpO1xyXG4gICAgcGFnZU51bWJlclRleHRFbGVtZW50LnRleHRDb250ZW50ID0gJzEnO1xyXG4gICAgcGFnZU51bWJlckVsZW1lbnQuaW5uZXJIVE1MID0gJ1BhZ2UgIyA8c3BhbiBjbGFzcz1cIndpbm5lcnMtcGFnZS1udW1iZXJcIj4xPC9zcGFuPic7XHJcbiAgICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgd2lubmVyc1RhYmxlID0gY3JlYXRlV2lubmVyc1RhYmxlKCk7XHJcbiAgICB0YWJsZUNvbnRhaW5lci5hcHBlbmQod2lubmVyc1RhYmxlKTtcclxuICAgIHRhYmxlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICgnd2lubmVycy10YWJsZS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHdpbm5lcnNQYWdpbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3aW5uZXJzVmlldy5jbGFzc05hbWUgPSAnd2lubmVycyBoaWRlbic7XHJcbiAgICB3aW5uZXJzUGFnaW5hdGlvbi5jbGFzc05hbWUgPSAoJ3dpbm5lcnMtcGFnaW5hdGlvbicpO1xyXG4gICAgd2lubmVyc0hlYWRlcnNDb250YWluZXIuYXBwZW5kKHdpbm5lcnNBbW91bnRFbGVtZW50LCBwYWdlTnVtYmVyRWxlbWVudCk7XHJcbiAgICB3aW5uZXJzVmlldy5hcHBlbmQod2lubmVyc0hlYWRlcnNDb250YWluZXIsIHRhYmxlQ29udGFpbmVyLCB3aW5uZXJzUGFnaW5hdGlvbik7XHJcbiAgICByZXR1cm4gd2lubmVyc1ZpZXc7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVXaW5uZXJUYWJsZVJvdyA9ICh3aW5uZXJEYXRhKSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgY29uc3QgaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNvbnN0IGNhckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY29uc3QgbmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY29uc3Qgd2luc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY29uc3QgdGltZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgaWRDZWxsLnRleHRDb250ZW50ID0gYCR7d2lubmVyRGF0YS5pZH1gO1xyXG4gICAgY2FyQ2VsbC5pbm5lckhUTUwgPSBnZXRDb2xvcmVkU3ZnKHdpbm5lckRhdGEuY29sb3IpO1xyXG4gICAgbmFtZUNlbGwudGV4dENvbnRlbnQgPSB3aW5uZXJEYXRhLm5hbWU7XHJcbiAgICB3aW5zQ2VsbC50ZXh0Q29udGVudCA9IGAke3dpbm5lckRhdGEud2luc31gO1xyXG4gICAgdGltZUNlbGwudGV4dENvbnRlbnQgPSBgJHsod2lubmVyRGF0YS50aW1lIC8gMTAwMCkudG9GaXhlZCgyKX1gO1xyXG4gICAgcm93LmFwcGVuZChpZENlbGwsIGNhckNlbGwsIG5hbWVDZWxsLCB3aW5zQ2VsbCwgdGltZUNlbGwpO1xyXG4gICAgcmV0dXJuIHJvdztcclxufTtcclxuZXhwb3J0IGNvbnN0IHJlbmRlcldpbm5lck1lc3NhZ2UgPSAoaXNGaW5pc2hlZCwgbmFtZSwgdGltZSkgPT4ge1xyXG4gICAgY29uc3QgZ2FyYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZVdpbm5lck1lc3NhZ2UoaXNGaW5pc2hlZCwgbmFtZSwgdGltZSk7XHJcbiAgICBnYXJhZ2U/LmFwcGVuZChtZXNzYWdlKTtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhckJsb2NrRWxlbWVudChjYXJEYXRhKSB7XHJcbiAgICBjb25zdCBjYXJCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyQmxvY2suY2xhc3NOYW1lID0gJ2Nhci1ibG9jayc7XHJcbiAgICBjYXJCbG9jay5pZCA9IGAke2NhckRhdGEuaWR9YDtcclxuICAgIGNhckJsb2NrLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImNhci1ibG9ja19faGVhZFwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJzZWxlY3RcIj5TZWxlY3Q8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgPHNwYW4gY2xhc3M9XCJjYXJfX25hbWVcIj4ke2NhckRhdGEubmFtZX08L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2FyLWJsb2NrX19ib2R5XCI+XG4gICAgPGRpdiBjbGFzcz1cImVuZ2luZS1idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic3RhcnQtcmFjZS1idXR0b25cIj5BPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic3RvcC1yYWNlLWJ1dHRvblwiIGRpc2FibGVkPkI8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmFjZVwiPlxuICAgICAgJHtnZXRDb2xvcmVkU3ZnKGNhckRhdGEuY29sb3IpfVxuICAgICAgPHN2ZyBjbGFzcz1cImZsYWdcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMDAuMzQ0IDMwMC4zNDRcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLjM0NCAzMDAuMzQ0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0yODkuMjg2LDI4LjM2Yy02Ljc3My0zLjM4Ni0xNC44ODUtMi42NTUtMjAuOTQ1LDEuODkyYy0yMy4zODcsMTcuNTQ3LTQ2LjAxNCwxMC4zOTUtODAuOTkyLTIuNzI4XG4gICAgICAgIGMtMzQuMjgxLTEyLjg1OS03Ni45NDItMjguODYxLTExOS4wNDcsMi43MjhjLTUuMDM0LDMuNzc3LTcuOTk3LDkuNzA0LTcuOTk3LDE1Ljk5OHYxMTkuMTEyYzAsNy41NzYsNC4yODEsMTQuNTAyLDExLjA1OCwxNy44OVxuICAgICAgICBzMTQuODg3LDIuNjU0LDIwLjk0NS0xLjg5MmMyMy4zODctMTcuNTQ3LDQ2LjAxNC0xMC4zOTUsODAuOTkyLDIuNzI4YzE5LjUxMyw3LjMxOSw0MS43MzksMTUuNjU3LDY1LjAzNCwxNS42NTdcbiAgICAgICAgYzE3LjYzMSwwLDM1Ljg3NC00Ljc3Niw1NC4wMTMtMTguMzg1YzUuMDM0LTMuNzc3LDcuOTk3LTkuNzA0LDcuOTk3LTE1Ljk5OFY0Ni4yNUMzMDAuMzQ0LDM4LjY3NCwyOTYuMDYzLDMxLjc0OCwyODkuMjg2LDI4LjM2elwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjAsNy44MTljLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwdjI0NC43MDVjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBzMjAtOC45NTQsMjAtMjBWMjcuODE5XG4gICAgICAgIEM0MCwxNi43NzMsMzEuMDQ2LDcuODE5LDIwLDcuODE5elwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Zz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xyXG4gICAgcmV0dXJuIGNhckJsb2NrO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XHJcbmltcG9ydCAnLi9nbG9iYWwuc2Nzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3ZpZXcvZ2FyYWdlL2dhcmFnZS5zY3NzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdmlldy93aW5uZXJzL3dpbm5lcnMuc2Nzcyc7XHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==