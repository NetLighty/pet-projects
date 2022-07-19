"use strict";
(self["webpackChunkonline_store"] = self["webpackChunkonline_store"] || []).push([["main"],{

/***/ "./src/components/cart/alert.scss":
/*!****************************************!*\
  !*** ./src/components/cart/alert.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/dakimakura/dakimakura.scss":
/*!***************************************************!*\
  !*** ./src/components/dakimakura/dakimakura.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/filters/filters.scss":
/*!*********************************************!*\
  !*** ./src/components/filters/filters.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/itemsList/itemsList.scss":
/*!*************************************************!*\
  !*** ./src/components/itemsList/itemsList.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/search/search.scss":
/*!*******************************************!*\
  !*** ./src/components/search/search.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/sort/sort.scss":
/*!***************************************!*\
  !*** ./src/components/sort/sort.scss ***!
  \***************************************/
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

/***/ "./src/components/cart/cart.ts":
/*!*************************************!*\
  !*** ./src/components/cart/cart.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Cart {
    static setSelected(dakimakuras) {
        const selectedItemsId = [];
        dakimakuras.forEach((dakimakura) => {
            if (window.localStorage.getItem(`${dakimakura.name}`) === "selected") {
                selectedItemsId.push(dakimakura.name);
                const selectedDakimakura = document.getElementById(dakimakura.name);
                const selectedBookmark = selectedDakimakura === null || selectedDakimakura === void 0 ? void 0 : selectedDakimakura.querySelector(".bookmark_selected");
                console.log(window.localStorage.getItem(`${dakimakura.name}`));
                if (selectedBookmark !== null && selectedBookmark !== undefined)
                    selectedBookmark.classList.add("selected");
            }
        });
        const counter = document.querySelector(".counter-number");
        if (counter !== undefined && counter !== null)
            counter.innerHTML = `${Number(window.localStorage.getItem("counter"))}`;
        return selectedItemsId;
    }
    static sendAlert() {
        const alert = document.querySelector(".over20-alert");
        if (!(alert === null || alert === void 0 ? void 0 : alert.classList.contains("active"))) {
            alert === null || alert === void 0 ? void 0 : alert.classList.add("active");
            window.setTimeout(() => alert === null || alert === void 0 ? void 0 : alert.classList.remove("active"), 5000);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


/***/ }),

/***/ "./src/components/controller/FiltersController.ts":
/*!********************************************************!*\
  !*** ./src/components/controller/FiltersController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersController": () => (/* binding */ FiltersController),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filters/filters */ "./src/components/filters/filters.ts");
/* harmony import */ var _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");


class FiltersController {
    static resetFilters() {
        //gender
        //material
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].setAllColorsTrue();
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].setAllMaterialsTrue();
        window.localStorage.setItem("gender", "all-gender");
        window.localStorage.setItem("only-popular", "false");
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].setSelected();
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__["default"].refreshItemsList();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersController);


/***/ }),

/***/ "./src/components/controller/pageLoader.ts":
/*!*************************************************!*\
  !*** ./src/components/controller/pageLoader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoader": () => (/* binding */ PageLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filters/filters */ "./src/components/filters/filters.ts");
/* harmony import */ var _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search */ "./src/components/search/search.ts");
/* harmony import */ var _sort_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sort/sort */ "./src/components/sort/sort.ts");




class PageLoader {
    static loadPage() {
        //ItemsList.fillPage(dakimakuras);
        _sort_sort__WEBPACK_IMPORTED_MODULE_3__["default"].setEventListeners();
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].initializeFilters();
        _search_search__WEBPACK_IMPORTED_MODULE_2__["default"].addSearchListeners();
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__["default"].refreshItemsList();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLoader);


/***/ }),

/***/ "./src/components/dakimakura/dakimakura.ts":
/*!*************************************************!*\
  !*** ./src/components/dakimakura/dakimakura.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dakimakura": () => (/* binding */ Dakimakura),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dakimakura_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dakimakura.scss */ "./src/components/dakimakura/dakimakura.scss");

class Dakimakura {
    static dakimakuraClickListener(id) {
        //Cart.sendAlert();
        const clickedDakimakura = document.getElementById(`${id}`);
        const counter = document.querySelector(".counter-number");
        const localStorageCounter = window.localStorage.getItem("counter");
        if (localStorageCounter === null)
            window.localStorage.setItem("counter", "0");
        const selectedBookmark = clickedDakimakura === null || clickedDakimakura === void 0 ? void 0 : clickedDakimakura.querySelector(".bookmark_selected");
        const notSelectedBookmark = clickedDakimakura === null || clickedDakimakura === void 0 ? void 0 : clickedDakimakura.querySelector(".bookmark_not-selected");
        if (selectedBookmark === null || selectedBookmark === void 0 ? void 0 : selectedBookmark.classList.contains("selected")) {
            selectedBookmark.classList.remove("selected");
            notSelectedBookmark === null || notSelectedBookmark === void 0 ? void 0 : notSelectedBookmark.classList.add("selected");
            window.localStorage.setItem(`${id}`, `not-selected`);
            window.localStorage.setItem("counter", String(Number(localStorageCounter) - 1));
            if (counter !== null)
                counter.innerHTML = `${Number(window.localStorage.getItem("counter"))}`;
        }
        else {
            selectedBookmark === null || selectedBookmark === void 0 ? void 0 : selectedBookmark.classList.add("selected");
            notSelectedBookmark === null || notSelectedBookmark === void 0 ? void 0 : notSelectedBookmark.classList.remove("selected");
            window.localStorage.setItem(`${id}`, `selected`);
            window.localStorage.setItem("counter", String(Number(localStorageCounter) + 1));
            if (counter !== null)
                counter.innerHTML = `${Number(window.localStorage.getItem("counter"))}`;
        }
    }
    static createDakimakura(info) {
        const dakimakura = document.createElement("div");
        dakimakura.className = "dakimakura";
        dakimakura.id = `${info.name}`;
        dakimakura.addEventListener("click", () => this.dakimakuraClickListener(info.name));
        dakimakura.innerHTML = `<img class="dakimakura__img" src="${info.imgSrc}" alt="daki-img">
    <img src="./images/bookmark.png" class="bookmark bookmark_not-selected selected" alt="bookmark"></img>
    <img src="./images/bookmark-choosen.png" class="bookmark bookmark_selected" alt="bookmark-choosen"></img>
    <div class="dakimakura__main-info">
      <a class="dakimakura__name">${info.name}</a>
      <a class="dakimakura__price">${info.price}<img src="./images/yen-sign.png" class="dakimakura__currency" alt="currency"></img></a>
    </div>
    <div class="dakimakura__description">
      <span class="attribute">Title: </span>
      <span class="value" id="title">${info.title}</span>
      <span class="attribute">Gender: </span>
      <span class="value" id="gender">${info.gender}</span>
      <span class="attribute">Colors: </span>
      <span class="value" id="colors">${[...info.colors]}</span>
      <span class="attribute">Popular: </span>
      <span class="value" id="popular">${info.isPopular}</span>
    </div>`;
        return dakimakura;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dakimakura);


/***/ }),

/***/ "./src/components/filters/filters.ts":
/*!*******************************************!*\
  !*** ./src/components/filters/filters.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filter": () => (/* binding */ Filter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_FiltersController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/FiltersController */ "./src/components/controller/FiltersController.ts");
/* harmony import */ var _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsList/itemsDB */ "./src/components/itemsList/itemsDB.ts");
/* harmony import */ var _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");
/* harmony import */ var _filters_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters.scss */ "./src/components/filters/filters.scss");




class Filter {
    //Reset
    static setResetListener() {
        const reset = document.querySelector(".reset-button");
        reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", _controller_FiltersController__WEBPACK_IMPORTED_MODULE_0__["default"].resetFilters);
    }
    //Colors
    static setSelectedColors() {
        _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_1__.colors.forEach((color) => {
            const colorButton = document.getElementById(color);
            if (window.localStorage.getItem(color) === "true")
                colorButton === null || colorButton === void 0 ? void 0 : colorButton.classList.add("active");
            else
                colorButton === null || colorButton === void 0 ? void 0 : colorButton.classList.remove("active");
        });
    }
    static setAllColorsTrue() {
        document.querySelectorAll(".color-btn").forEach((colorBtn) => {
            if (!colorBtn.classList.contains("active"))
                colorBtn.classList.add("active");
            window.localStorage.setItem(colorBtn.id, "true");
        });
    }
    static allColorClickHandler() {
        Filter.setAllColorsTrue();
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__["default"].refreshItemsList();
    }
    static setColorsEventListeners() {
        var _a, _b;
        (_a = document.querySelectorAll(".color-btn")) === null || _a === void 0 ? void 0 : _a.forEach((el) => {
            el.addEventListener("click", (e) => this.colorClickHandler(e, el.id));
        });
        (_b = document
            .getElementById("all-color")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.allColorClickHandler);
    }
    static getSelectedColors() {
        const activeColors = [];
        Array.from(document.querySelectorAll(".color-btn")).forEach((button) => {
            if (button.classList.contains("active"))
                activeColors.push(button.id);
        });
        return activeColors;
    }
    static filterItemsByColor(items) {
        const activeColors = this.getSelectedColors();
        if (activeColors.length === 0)
            return items;
        const filteredItems = items.filter((item) => {
            if (this.findCommon(item.colors, activeColors).length > 0)
                return true;
        });
        return filteredItems;
    }
    static findCommon(arr1, arr2) {
        const result = [];
        for (const el of arr1) {
            if (this.inArray(el, arr2)) {
                result.push(el);
            }
        }
        return result;
    }
    static inArray(el, arr) {
        return arr.indexOf(el) !== -1;
    }
    //Gender
    static setSelectedGender() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const selectedGender = window.localStorage.getItem("gender");
        if (selectedGender !== null) {
            if (selectedGender === "boy") {
                (_a = document.getElementById("boy")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
                (_b = document.getElementById("girl")) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
                (_c = document.getElementById("all-gender")) === null || _c === void 0 ? void 0 : _c.classList.remove("active");
            }
            else if (selectedGender === "girl") {
                (_d = document.getElementById("boy")) === null || _d === void 0 ? void 0 : _d.classList.remove("active");
                (_e = document.getElementById("girl")) === null || _e === void 0 ? void 0 : _e.classList.add("active");
                (_f = document.getElementById("all-gender")) === null || _f === void 0 ? void 0 : _f.classList.remove("active");
            }
            else if (selectedGender === "all-gender") {
                (_g = document.getElementById("boy")) === null || _g === void 0 ? void 0 : _g.classList.remove("active");
                (_h = document.getElementById("girl")) === null || _h === void 0 ? void 0 : _h.classList.remove("active");
                (_j = document.getElementById("all-gender")) === null || _j === void 0 ? void 0 : _j.classList.add("active");
            }
        }
    }
    static genderClickHandler(event) {
        const element = event.target;
        if (element.classList.contains("active"))
            return;
        window.localStorage.setItem("gender", element.id);
        this.setSelectedGender();
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__["default"].refreshItemsList();
    }
    static setGendersClickListeners() {
        const boysButton = document.getElementById("boy");
        const girlsButton = document.getElementById("girl");
        const allButton = document.getElementById("all-gender");
        boysButton === null || boysButton === void 0 ? void 0 : boysButton.addEventListener("click", (e) => this.genderClickHandler(e));
        girlsButton === null || girlsButton === void 0 ? void 0 : girlsButton.addEventListener("click", (e) => this.genderClickHandler(e));
        allButton === null || allButton === void 0 ? void 0 : allButton.addEventListener("click", (e) => this.genderClickHandler(e));
    }
    static filterItemsByGender(items) {
        const selectedGender = window.localStorage.getItem("gender");
        if (selectedGender === null || selectedGender === "all-gender")
            return items;
        return items.filter((daki) => daki.gender === selectedGender);
    }
    //material
    static getSelectedMaterials() {
        const selectedMaterials = [];
        _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_1__.materials.forEach((material) => {
            if (window.localStorage.getItem(material) === "true" ||
                window.localStorage.getItem(material) === null)
                selectedMaterials.push(material);
        });
        return selectedMaterials;
    }
    static setSelectedMaterials() {
        const selectedMaterials = this.getSelectedMaterials();
        selectedMaterials.forEach((material) => {
            const checkBox = document.getElementById(material);
            checkBox.checked = true;
        });
    }
    static allMaterialClickHandler() {
        /* const allButton = document.getElementById("all-material");
        const syntheticBox = document.getElementById("synthetic");
        const cottonBox = document.getElementById("cotton");
        const plushBox = document.getElementById("plush");
        const linenBox = document.getElementById("linen"); */
        const checkBoxes = Array.from(document.querySelectorAll(".material-checkbox"));
        console.log(checkBoxes);
        checkBoxes.forEach((checkBox) => {
            checkBox.checked = true;
            window.localStorage.setItem(checkBox.id, "true");
        });
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__["default"].refreshItemsList();
    }
    static materialCheckBoxClickHandler(event) {
        const checkBox = event.target;
        if (checkBox.checked)
            window.localStorage.setItem(checkBox.id, "true");
        else
            window.localStorage.setItem(checkBox.id, "false");
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__["default"].refreshItemsList();
    }
    static setMaterialClickListeners() {
        const allButton = document.getElementById("all-material");
        const checkBoxes = document.querySelectorAll(".material-checkbox");
        checkBoxes.forEach((checkBox) => checkBox.addEventListener("click", (e) => this.materialCheckBoxClickHandler(e)));
        allButton === null || allButton === void 0 ? void 0 : allButton.addEventListener("click", this.allMaterialClickHandler);
    }
    static filterItemsByMaterial(items) {
        const selectedMaterials = this.getSelectedMaterials();
        return items.filter((item) => {
            if (selectedMaterials.includes(item.material))
                return true;
        });
    }
    static setAllMaterialsTrue() {
        document.querySelectorAll(".material-checkbox").forEach((checkbox) => {
            if (!checkbox.classList.contains("active"))
                checkbox.classList.add("active");
            window.localStorage.setItem(checkbox.id, "true");
        });
    }
    //only popular
    static onlyPopularClickHandler(event) {
        const onlyPopularBox = event.target;
        if (onlyPopularBox.checked)
            window.localStorage.setItem("only-popular", "true");
        else
            window.localStorage.setItem("only-popular", "false");
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__["default"].refreshItemsList();
    }
    static setOnlyPopularClickListener() {
        var _a;
        (_a = document
            .getElementById("only-popular")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => this.onlyPopularClickHandler(e));
    }
    static setOnlyPopular() {
        const onlyPopular = document.getElementById("only-popular");
        if (window.localStorage.getItem("only-popular") === "true")
            onlyPopular.checked = true;
        else
            onlyPopular.checked = false;
    }
    static filterByPopular(items) {
        const isOnlyPopularChecked = window.localStorage.getItem("only-popular");
        if (isOnlyPopularChecked === "true")
            return items.filter((items) => items.isPopular === "Yes");
        else
            return items;
    }
    //common
    static setSelected() {
        this.setSelectedColors();
        this.setSelectedGender();
        this.setSelectedMaterials();
        this.setOnlyPopular();
    }
    static setListeners() {
        this.setColorsEventListeners();
        this.setResetListener();
        this.setGendersClickListeners();
        this.setMaterialClickListeners();
        this.setOnlyPopularClickListener();
    }
    //main
    static initializeFilters() {
        this.setSelected();
        this.setListeners();
    }
}
Filter.colorClickHandler = (e, color) => {
    const colorButton = document.getElementById(color);
    colorButton === null || colorButton === void 0 ? void 0 : colorButton.classList.toggle("active");
    window.localStorage.setItem(color, String(colorButton === null || colorButton === void 0 ? void 0 : colorButton.classList.contains("active")));
    _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__["default"].refreshItemsList();
    console.log(color);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);


/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");

class Header {
    constructor(name) {
        this.name = name;
    }
    itemClick() {
        console.log("clicked");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/components/itemsList/itemsDB.ts":
/*!*********************************************!*\
  !*** ./src/components/itemsList/itemsDB.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": () => (/* binding */ colors),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "materials": () => (/* binding */ materials)
/* harmony export */ });
const colors = [
    "white",
    "black",
    "blue",
    "green",
    "pink",
    "red",
];
const materials = ["synthetic", "cotton", "plush", "linen"];
const dakimakuras = [
    {
        imgSrc: "./images/genshin-Jinn.jpg",
        price: 1490,
        name: "Jinn",
        title: "Genshin-Impact",
        gender: "girl",
        colors: ["white", "blue"],
        material: "synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/2arvpo-5ko_1643224501.jpg",
        price: 1799,
        name: "Levi",
        title: "Attack on Titan",
        gender: "boy",
        colors: ["white"],
        material: "linen",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/30adeec8a79cb3ae53a945cddb58a4d2.jpg",
        price: 2150,
        name: "Ayanami Rei",
        title: "Evangelion",
        gender: "girl",
        colors: ["white", "blue"],
        material: "cotton",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/135_dakimakura_genshin_impact_kaedehara_kadzuha.png",
        price: 2350,
        name: "Kadzuhara",
        title: "Genshin Impact",
        gender: "boy",
        colors: ["red", "white"],
        material: "plush",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/Toho Project Izayoi Sakuya.jpg",
        price: 1510,
        name: "Izayoi Sakuya",
        title: "Toho Project",
        gender: "girl",
        colors: ["white", "blue"],
        material: "linen",
        isPopular: "No",
    },
    {
        imgSrc: "./images/full_21542-Genshin-Impact-Hutao.jpg",
        price: 2199,
        name: "Hutao",
        title: "Genshin Impact",
        gender: "girl",
        colors: ["red", "white"],
        material: "synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/Honoka Kosaka- Love Live.png",
        price: 1399,
        name: "Honoka Kosaka",
        title: "Love Live",
        gender: "girl",
        colors: ["pink"],
        material: "synthetic",
        isPopular: "No",
    },
    {
        imgSrc: "./images/kazuha-genshin.jpg",
        price: 2799,
        name: "Kaedehara Kazuha",
        title: "Genshin Impact",
        gender: "boy",
        colors: ["red"],
        material: "synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/kirito- sword art online.png",
        price: 2099,
        name: "Kirito",
        title: "Sword Art Online",
        gender: "boy",
        colors: ["black", "white"],
        material: "synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/Mike tokyo revenge.png",
        price: 1249,
        name: "Mike",
        title: "Tokyo Revenge",
        gender: "boy",
        colors: ["green"],
        material: "synthetic",
        isPopular: "No",
    },
    {
        imgSrc: "./images/Rimuru- that time i got reincarnated as a slime.png",
        price: 1789,
        name: "Rimuru",
        title: "Reincarnated as a Slime",
        gender: "boy",
        colors: ["blue"],
        material: "synthetic",
        isPopular: "No",
    },
    {
        imgSrc: "./images/satoru gojo- Jujutsu kaisen.png",
        price: 10001,
        name: "Satoru Gojo",
        title: "Jujutsu Kaisen",
        gender: "boy",
        colors: ["black", "white"],
        material: "synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/violet- evergarden.png",
        price: 2002,
        name: "Violet",
        title: "Violet Evergarden",
        gender: "girl",
        colors: ["white"],
        material: "synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/yuri  - doki_doki_literature_club_.png",
        price: 1349,
        name: "Yuri",
        title: "Doki Doki Club",
        gender: "girl",
        colors: ["pink"],
        material: "synthetic",
        isPopular: "No",
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dakimakuras);


/***/ }),

/***/ "./src/components/itemsList/itemsList.ts":
/*!***********************************************!*\
  !*** ./src/components/itemsList/itemsList.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsList": () => (/* binding */ ItemsList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dakimakura_dakimakura__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dakimakura/dakimakura */ "./src/components/dakimakura/dakimakura.ts");
/* harmony import */ var _cart_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart/cart */ "./src/components/cart/cart.ts");
/* harmony import */ var _sort_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sort/sort */ "./src/components/sort/sort.ts");
/* harmony import */ var _itemsDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemsDB */ "./src/components/itemsList/itemsDB.ts");
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filters/filters */ "./src/components/filters/filters.ts");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search */ "./src/components/search/search.ts");






class ItemsList {
    constructor(patterns) {
        this.patterns = patterns;
    }
    static fillPage(patterns) {
        patterns.forEach((pattern) => {
            var _a;
            const dakimakura = _dakimakura_dakimakura__WEBPACK_IMPORTED_MODULE_0__["default"].createDakimakura(pattern);
            (_a = ItemsList.itemsContainer) === null || _a === void 0 ? void 0 : _a.append(dakimakura);
        });
        _cart_cart__WEBPACK_IMPORTED_MODULE_1__["default"].setSelected(patterns);
    }
    static createNothingFoundMessage() {
        const nothingFoundMessage = document.createElement("span");
        nothingFoundMessage.className = "nothing-found";
        nothingFoundMessage.innerHTML = "Sorry, nothing found";
        return nothingFoundMessage;
    }
    static appendNothinFoundMessage() {
        var _a;
        const nothingFoundMessage = this.createNothingFoundMessage();
        (_a = document.querySelector(".items")) === null || _a === void 0 ? void 0 : _a.append(nothingFoundMessage);
    }
    static setHidden() {
        const items = _itemsDB__WEBPACK_IMPORTED_MODULE_3__["default"];
        //filter by gender
        //filter by material
        //filter by color
        const filteredByColor = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByColor(items);
        document.querySelectorAll(".dakimakura").forEach((el) => {
            el.classList.add("hidden");
        });
        filteredByColor.forEach((el) => {
            var _a;
            (_a = document.getElementById(el.name)) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        });
    }
    static clearItemsContainer() {
        if (this.itemsContainer === null)
            throw new Error("items container doesnt exist");
        this.itemsContainer.innerHTML = "";
    }
    static displaySortedItems(elements) {
        this.clearItemsContainer();
        elements.forEach((el) => { var _a; return (_a = ItemsList.itemsContainer) === null || _a === void 0 ? void 0 : _a.append(el); });
        this.setHidden();
    }
    static refreshItemsList(items) {
        this.clearItemsContainer();
        const itemsToFilter = items ? items : _itemsDB__WEBPACK_IMPORTED_MODULE_3__["default"];
        const sortType = window.localStorage.getItem("sort");
        //search
        const filteredBySearchValue = _search_search__WEBPACK_IMPORTED_MODULE_5__["default"].filterBySearchValue(itemsToFilter);
        //gender
        const filteredByGender = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByGender(filteredBySearchValue);
        console.log(filteredByGender);
        //material
        const filteredByMaterial = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByMaterial(filteredByGender);
        console.log(filteredByMaterial);
        //popular
        const filteredByPopular = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterByPopular(filteredByMaterial);
        console.log(filteredByPopular);
        //color
        const finallyFiltered = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByColor(filteredByPopular);
        if (finallyFiltered.length === 0) {
            this.appendNothinFoundMessage();
        }
        if (sortType !== null) {
            const sorted = _sort_sort__WEBPACK_IMPORTED_MODULE_2__["default"].sortByType(finallyFiltered, sortType);
            this.fillPage(sorted);
        }
        else
            this.fillPage(finallyFiltered);
    }
}
ItemsList.itemsContainer = document.querySelector(".items");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemsList);


/***/ }),

/***/ "./src/components/search/search.ts":
/*!*****************************************!*\
  !*** ./src/components/search/search.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search": () => (/* binding */ Search),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");

class Search {
    static inputChangeHandler(event) {
        const searchBar = event.target;
        console.log(searchBar.value);
        this.searchBarCurrentValue = searchBar.value.toLowerCase();
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_0__["default"].refreshItemsList();
    }
    static filterBySearchValue(items) {
        const searchBar = document.querySelector(".search-input");
        if (searchBar && searchBar.value !== "")
            return items.filter((item) => item.name.toLowerCase().includes(this.searchBarCurrentValue));
        else
            return items;
    }
    static clearCressClickHandler() {
        const searchBar = document.querySelector(".search-input");
        if (searchBar !== null)
            searchBar.value = "";
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_0__["default"].refreshItemsList();
    }
    static addSearchListeners() {
        var _a, _b;
        (_a = this.searchBar) === null || _a === void 0 ? void 0 : _a.addEventListener("input", (e) => this.inputChangeHandler(e));
        (_b = document
            .querySelector(".clear-cress")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.clearCressClickHandler);
    }
}
Search.searchBar = document.querySelector(".search-input");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ "./src/components/sort/sort.ts":
/*!*************************************!*\
  !*** ./src/components/sort/sort.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sort": () => (/* binding */ Sort),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../itemsList/itemsDB */ "./src/components/itemsList/itemsDB.ts");
/* harmony import */ var _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");
/* harmony import */ var _sort_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort.scss */ "./src/components/sort/sort.scss");



class Sort {
    static setEventListeners() {
        const priceHighest = document.getElementById("highest");
        const priceLowest = document.getElementById("lowest");
        const nameAz = document.getElementById("A-Z");
        const nameZa = document.getElementById("Z-A");
        priceHighest === null || priceHighest === void 0 ? void 0 : priceHighest.addEventListener("click", () => this.sortByPriceHandler("highest"));
        priceLowest === null || priceLowest === void 0 ? void 0 : priceLowest.addEventListener("click", () => this.sortByPriceHandler("lowest"));
        nameAz === null || nameAz === void 0 ? void 0 : nameAz.addEventListener("click", () => this.sortByNameHandler("A-Z"));
        nameZa === null || nameZa === void 0 ? void 0 : nameZa.addEventListener("click", () => this.sortByNameHandler("Z-A"));
    }
    static getNotHiddenItems() {
        const allItems = Array.from(document.querySelectorAll(".dakimakura"));
        const notHiddenItems = allItems.filter((item) => !item.classList.contains(".hidden"));
        return notHiddenItems;
    }
    static sortByPrice(items, type) {
        return items.sort(function (a, b) {
            if (type === "lowest")
                return a.price - b.price;
            else
                return b.price - a.price;
        });
    }
    static sortByName(items, type) {
        const result = [];
        const itemNames = [];
        items.forEach((el) => itemNames.push(el.name));
        if (type === "A-Z")
            itemNames.sort().forEach((item) => result.push(_itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_0__["default"].filter((el) => {
                el.name === item;
            })[0]));
        return result;
    }
    static sortByType(items, type) {
        if (type === "highest" || type === "lowest")
            return this.sortByPrice(items, type);
        else
            return this.sortByName(items, type);
    }
    static sortByPriceHandler(type) {
        const notHiddenItems = this.getNotHiddenItems();
        window.localStorage.setItem("sort", type);
        const sortedElements = notHiddenItems.sort(function (a, b) {
            const aPrice = _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_0__["default"].filter((dakimakura) => dakimakura.name === a.id)[0].price;
            const bPrice = _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_0__["default"].filter((dakimakura) => dakimakura.name === b.id)[0].price;
            if (type === "lowest")
                return aPrice - bPrice;
            else
                return bPrice - aPrice;
        });
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__["default"].displaySortedItems(sortedElements);
    }
    static sortByNameHandler(type) {
        const notHiddenItems = this.getNotHiddenItems();
        window.localStorage.setItem("sort", type);
        const notHiddenItemsNames = [];
        notHiddenItems.forEach((item) => notHiddenItemsNames.push(item.id));
        const notHiddenItemsNamesSorted = type === "A-Z"
            ? notHiddenItemsNames.sort()
            : notHiddenItemsNames.sort().reverse();
        console.log(notHiddenItemsNamesSorted);
        const sortedElements = [];
        notHiddenItemsNamesSorted.forEach((itemName) => {
            sortedElements.push(notHiddenItems.filter((item) => item.id === itemName)[0]);
        });
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__["default"].displaySortedItems(sortedElements);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sort);


/***/ }),

/***/ "./src/scripts/Item.ts":
/*!*****************************!*\
  !*** ./src/scripts/Item.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
class Item {
    constructor(title) {
        this.title = title;
        this.date = new Date();
    }
    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
        });
    }
}


/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/scripts/Item.ts");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ "./src/components/header/header.ts");
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/filters/filters */ "./src/components/filters/filters.ts");
/* harmony import */ var _components_dakimakura_dakimakura__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dakimakura/dakimakura */ "./src/components/dakimakura/dakimakura.ts");
/* harmony import */ var _components_itemsList_itemsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");
/* harmony import */ var _components_itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/itemsList/itemsDB */ "./src/components/itemsList/itemsDB.ts");
/* harmony import */ var _components_controller_pageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controller/pageLoader */ "./src/components/controller/pageLoader.ts");
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global.scss */ "./src/global.scss");
/* harmony import */ var _components_itemsList_itemsList_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/itemsList/itemsList.scss */ "./src/components/itemsList/itemsList.scss");
/* harmony import */ var _components_cart_alert_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cart/alert.scss */ "./src/components/cart/alert.scss");
/* harmony import */ var _components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer/footer.scss */ "./src/components/footer/footer.scss");
/* harmony import */ var _components_search_search_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/search/search.scss */ "./src/components/search/search.scss");












const item = new _Item__WEBPACK_IMPORTED_MODULE_0__["default"]("dakimakura");
const header = new _components_header_header__WEBPACK_IMPORTED_MODULE_1__["default"]("Softy");
const filter = new _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__["default"]();
const dakimakura = new _components_dakimakura_dakimakura__WEBPACK_IMPORTED_MODULE_3__["default"]();
const itemsList = new _components_itemsList_itemsList__WEBPACK_IMPORTED_MODULE_4__["default"](_components_itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_5__["default"]);
_components_controller_pageLoader__WEBPACK_IMPORTED_MODULE_6__["default"].loadPage();
console.log("Item to String: ", item.toString());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZTQ5ZDM0ZDdkMWYzZmNmZjc4Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZ0JBQWdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUNBQW1DLCtDQUErQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJvQjtBQUNPO0FBQ3hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RUFBdUI7QUFDL0IsUUFBUSw0RUFBMEI7QUFDbEM7QUFDQTtBQUNBLFFBQVEsb0VBQWtCO0FBQzFCLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkTztBQUNPO0FBQ1Q7QUFDTjtBQUN6QjtBQUNQO0FBQ0E7QUFDQSxRQUFRLG9FQUFzQjtBQUM5QixRQUFRLDBFQUF3QjtBQUNoQyxRQUFRLHlFQUF5QjtBQUNqQyxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JDO0FBQ3BCO0FBQ1A7QUFDQTtBQUNBLDZEQUE2RCxHQUFHO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxHQUFHO0FBQzlDO0FBQ0E7QUFDQSx1Q0FBdUMsK0NBQStDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEdBQUc7QUFDOUM7QUFDQTtBQUNBLHVDQUF1QywrQ0FBK0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0Esb0VBQW9FLFlBQVk7QUFDaEY7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUMscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBLHdDQUF3QyxpQkFBaUI7QUFDekQ7QUFDQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRHNDO0FBQ1A7QUFDVjtBQUN2QjtBQUNqQjtBQUNQO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixrRkFBOEI7QUFDcEg7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUEwQjtBQUM5QjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25PQztBQUNoQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RmO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKdUI7QUFDbEI7QUFDQTtBQUNJO0FBQ0k7QUFDRjtBQUMvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrRUFBMkI7QUFDMUQ7QUFDQSxTQUFTO0FBQ1QsUUFBUSw4REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJFQUF5QjtBQUN6RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVEsNEZBQTRGO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGdEQUFXO0FBQ3pEO0FBQ0E7QUFDQSxzQ0FBc0MsMEVBQTBCO0FBQ2hFO0FBQ0EsaUNBQWlDLDRFQUEwQjtBQUMzRDtBQUNBO0FBQ0EsbUNBQW1DLDhFQUE0QjtBQUMvRDtBQUNBO0FBQ0Esa0NBQWtDLHdFQUFzQjtBQUN4RDtBQUNBO0FBQ0EsZ0NBQWdDLDJFQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2REFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRnNCO0FBQ3hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QnlCO0FBQ0E7QUFDMUI7QUFDZDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsaUVBQWtCO0FBQzdFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpRUFBa0I7QUFDN0MsMkJBQTJCLGlFQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLCtFQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLCtFQUE0QjtBQUNwQztBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4RUw7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gwQjtBQUN1QjtBQUNFO0FBQ1U7QUFDSDtBQUNBO0FBQ0c7QUFDckM7QUFDd0I7QUFDVDtBQUNHO0FBQ0E7QUFDMUMsaUJBQWlCLDZDQUFJO0FBQ3JCLG1CQUFtQixpRUFBTTtBQUN6QixtQkFBbUIsbUVBQU07QUFDekIsdUJBQXVCLHlFQUFVO0FBQ2pDLHNCQUFzQix1RUFBUyxDQUFDLHFFQUFXO0FBQzNDLGtGQUFtQjtBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQvYWxlcnQuc2Nzcz80MWEzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Rha2ltYWt1cmEvZGFraW1ha3VyYS5zY3NzPzVhYmQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLnNjc3M/M2M4YyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3M/YzgwZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnNjc3M/OWJmYiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9pdGVtc0xpc3QvaXRlbXNMaXN0LnNjc3M/MWVhOSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnNjc3M/ZDFlYSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zb3J0L3NvcnQuc2Nzcz8yMDFhIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9nbG9iYWwuc2Nzcz84MThmIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQvY2FydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL0ZpbHRlcnNDb250cm9sbGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvcGFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9kYWtpbWFrdXJhL2Rha2ltYWt1cmEudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zREIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NvcnQvc29ydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9JdGVtLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHRzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjbGFzcyBDYXJ0IHtcclxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZChkYWtpbWFrdXJhcykge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXNJZCA9IFtdO1xyXG4gICAgICAgIGRha2ltYWt1cmFzLmZvckVhY2goKGRha2ltYWt1cmEpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtkYWtpbWFrdXJhLm5hbWV9YCkgPT09IFwic2VsZWN0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtc0lkLnB1c2goZGFraW1ha3VyYS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGFraW1ha3VyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRha2ltYWt1cmEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEJvb2ttYXJrID0gc2VsZWN0ZWREYWtpbWFrdXJhID09PSBudWxsIHx8IHNlbGVjdGVkRGFraW1ha3VyYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWREYWtpbWFrdXJhLnF1ZXJ5U2VsZWN0b3IoXCIuYm9va21hcmtfc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7ZGFraW1ha3VyYS5uYW1lfWApKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEJvb2ttYXJrICE9PSBudWxsICYmIHNlbGVjdGVkQm9va21hcmsgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXItbnVtYmVyXCIpO1xyXG4gICAgICAgIGlmIChjb3VudGVyICE9PSB1bmRlZmluZWQgJiYgY291bnRlciAhPT0gbnVsbClcclxuICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKSl9YDtcclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtc0lkO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNlbmRBbGVydCgpIHtcclxuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcjIwLWFsZXJ0XCIpO1xyXG4gICAgICAgIGlmICghKGFsZXJ0ID09PSBudWxsIHx8IGFsZXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhbGVydC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0ID09PSBudWxsIHx8IGFsZXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhbGVydC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBhbGVydCA9PT0gbnVsbCB8fCBhbGVydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxlcnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSwgNTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2ZpbHRlcnMvZmlsdGVyc1wiO1xyXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gXCIuLi9pdGVtc0xpc3QvaXRlbXNMaXN0XCI7XHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJzQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgcmVzZXRGaWx0ZXJzKCkge1xyXG4gICAgICAgIC8vZ2VuZGVyXHJcbiAgICAgICAgLy9tYXRlcmlhbFxyXG4gICAgICAgIEZpbHRlci5zZXRBbGxDb2xvcnNUcnVlKCk7XHJcbiAgICAgICAgRmlsdGVyLnNldEFsbE1hdGVyaWFsc1RydWUoKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnZW5kZXJcIiwgXCJhbGwtZ2VuZGVyXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9ubHktcG9wdWxhclwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIEZpbHRlci5zZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyc0NvbnRyb2xsZXI7XHJcbiIsImltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2ZpbHRlcnMvZmlsdGVyc1wiO1xyXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gXCIuLi9pdGVtc0xpc3QvaXRlbXNMaXN0XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL3NlYXJjaC9zZWFyY2hcIjtcclxuaW1wb3J0IFNvcnQgZnJvbSBcIi4uL3NvcnQvc29ydFwiO1xyXG5leHBvcnQgY2xhc3MgUGFnZUxvYWRlciB7XHJcbiAgICBzdGF0aWMgbG9hZFBhZ2UoKSB7XHJcbiAgICAgICAgLy9JdGVtc0xpc3QuZmlsbFBhZ2UoZGFraW1ha3VyYXMpO1xyXG4gICAgICAgIFNvcnQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICBGaWx0ZXIuaW5pdGlhbGl6ZUZpbHRlcnMoKTtcclxuICAgICAgICBTZWFyY2guYWRkU2VhcmNoTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9hZGVyO1xyXG4iLCJpbXBvcnQgXCIuL2Rha2ltYWt1cmEuc2Nzc1wiO1xyXG5leHBvcnQgY2xhc3MgRGFraW1ha3VyYSB7XHJcbiAgICBzdGF0aWMgZGFraW1ha3VyYUNsaWNrTGlzdGVuZXIoaWQpIHtcclxuICAgICAgICAvL0NhcnQuc2VuZEFsZXJ0KCk7XHJcbiAgICAgICAgY29uc3QgY2xpY2tlZERha2ltYWt1cmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcclxuICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyLW51bWJlclwiKTtcclxuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VDb3VudGVyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlQ291bnRlciA9PT0gbnVsbClcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBcIjBcIik7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRCb29rbWFyayA9IGNsaWNrZWREYWtpbWFrdXJhID09PSBudWxsIHx8IGNsaWNrZWREYWtpbWFrdXJhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbGlja2VkRGFraW1ha3VyYS5xdWVyeVNlbGVjdG9yKFwiLmJvb2ttYXJrX3NlbGVjdGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IG5vdFNlbGVjdGVkQm9va21hcmsgPSBjbGlja2VkRGFraW1ha3VyYSA9PT0gbnVsbCB8fCBjbGlja2VkRGFraW1ha3VyYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpY2tlZERha2ltYWt1cmEucXVlcnlTZWxlY3RvcihcIi5ib29rbWFya19ub3Qtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkQm9va21hcmsgPT09IG51bGwgfHwgc2VsZWN0ZWRCb29rbWFyayA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgbm90U2VsZWN0ZWRCb29rbWFyayA9PT0gbnVsbCB8fCBub3RTZWxlY3RlZEJvb2ttYXJrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub3RTZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2lkfWAsIGBub3Qtc2VsZWN0ZWRgKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBTdHJpbmcoTnVtYmVyKGxvY2FsU3RvcmFnZUNvdW50ZXIpIC0gMSkpO1xyXG4gICAgICAgICAgICBpZiAoY291bnRlciAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIikpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJvb2ttYXJrID09PSBudWxsIHx8IHNlbGVjdGVkQm9va21hcmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQm9va21hcmsuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBub3RTZWxlY3RlZEJvb2ttYXJrID09PSBudWxsIHx8IG5vdFNlbGVjdGVkQm9va21hcmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vdFNlbGVjdGVkQm9va21hcmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aWR9YCwgYHNlbGVjdGVkYCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgU3RyaW5nKE51bWJlcihsb2NhbFN0b3JhZ2VDb3VudGVyKSArIDEpKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyLmlubmVySFRNTCA9IGAke051bWJlcih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudGVyXCIpKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVEYWtpbWFrdXJhKGluZm8pIHtcclxuICAgICAgICBjb25zdCBkYWtpbWFrdXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYWtpbWFrdXJhLmNsYXNzTmFtZSA9IFwiZGFraW1ha3VyYVwiO1xyXG4gICAgICAgIGRha2ltYWt1cmEuaWQgPSBgJHtpbmZvLm5hbWV9YDtcclxuICAgICAgICBkYWtpbWFrdXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmRha2ltYWt1cmFDbGlja0xpc3RlbmVyKGluZm8ubmFtZSkpO1xyXG4gICAgICAgIGRha2ltYWt1cmEuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJkYWtpbWFrdXJhX19pbWdcIiBzcmM9XCIke2luZm8uaW1nU3JjfVwiIGFsdD1cImRha2ktaW1nXCI+XG4gICAgPGltZyBzcmM9XCIuL2ltYWdlcy9ib29rbWFyay5wbmdcIiBjbGFzcz1cImJvb2ttYXJrIGJvb2ttYXJrX25vdC1zZWxlY3RlZCBzZWxlY3RlZFwiIGFsdD1cImJvb2ttYXJrXCI+PC9pbWc+XG4gICAgPGltZyBzcmM9XCIuL2ltYWdlcy9ib29rbWFyay1jaG9vc2VuLnBuZ1wiIGNsYXNzPVwiYm9va21hcmsgYm9va21hcmtfc2VsZWN0ZWRcIiBhbHQ9XCJib29rbWFyay1jaG9vc2VuXCI+PC9pbWc+XG4gICAgPGRpdiBjbGFzcz1cImRha2ltYWt1cmFfX21haW4taW5mb1wiPlxuICAgICAgPGEgY2xhc3M9XCJkYWtpbWFrdXJhX19uYW1lXCI+JHtpbmZvLm5hbWV9PC9hPlxuICAgICAgPGEgY2xhc3M9XCJkYWtpbWFrdXJhX19wcmljZVwiPiR7aW5mby5wcmljZX08aW1nIHNyYz1cIi4vaW1hZ2VzL3llbi1zaWduLnBuZ1wiIGNsYXNzPVwiZGFraW1ha3VyYV9fY3VycmVuY3lcIiBhbHQ9XCJjdXJyZW5jeVwiPjwvaW1nPjwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGFraW1ha3VyYV9fZGVzY3JpcHRpb25cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYXR0cmlidXRlXCI+VGl0bGU6IDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIiBpZD1cInRpdGxlXCI+JHtpbmZvLnRpdGxlfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYXR0cmlidXRlXCI+R2VuZGVyOiA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgaWQ9XCJnZW5kZXJcIj4ke2luZm8uZ2VuZGVyfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYXR0cmlidXRlXCI+Q29sb3JzOiA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgaWQ9XCJjb2xvcnNcIj4ke1suLi5pbmZvLmNvbG9yc119PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhdHRyaWJ1dGVcIj5Qb3B1bGFyOiA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgaWQ9XCJwb3B1bGFyXCI+JHtpbmZvLmlzUG9wdWxhcn08L3NwYW4+XG4gICAgPC9kaXY+YDtcclxuICAgICAgICByZXR1cm4gZGFraW1ha3VyYTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYWtpbWFrdXJhO1xyXG4iLCJpbXBvcnQgRmlsdGVyc0NvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXIvRmlsdGVyc0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgY29sb3JzLCBtYXRlcmlhbHMgfSBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zREJcIjtcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5pbXBvcnQgXCIuL2ZpbHRlcnMuc2Nzc1wiO1xyXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcclxuICAgIC8vUmVzZXRcclxuICAgIHN0YXRpYyBzZXRSZXNldExpc3RlbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldC1idXR0b25cIik7XHJcbiAgICAgICAgcmVzZXQgPT09IG51bGwgfHwgcmVzZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBGaWx0ZXJzQ29udHJvbGxlci5yZXNldEZpbHRlcnMpO1xyXG4gICAgfVxyXG4gICAgLy9Db2xvcnNcclxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZENvbG9ycygpIHtcclxuICAgICAgICBjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb2xvcik7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oY29sb3IpID09PSBcInRydWVcIilcclxuICAgICAgICAgICAgICAgIGNvbG9yQnV0dG9uID09PSBudWxsIHx8IGNvbG9yQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb2xvckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjb2xvckJ1dHRvbiA9PT0gbnVsbCB8fCBjb2xvckJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRBbGxDb2xvcnNUcnVlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItYnRuXCIpLmZvckVhY2goKGNvbG9yQnRuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY29sb3JCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICAgICAgY29sb3JCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbG9yQnRuLmlkLCBcInRydWVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWxsQ29sb3JDbGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgRmlsdGVyLnNldEFsbENvbG9yc1RydWUoKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldENvbG9yc0V2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1idG5cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuY29sb3JDbGlja0hhbmRsZXIoZSwgZWwuaWQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAoX2IgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtY29sb3JcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hbGxDb2xvckNsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRDb2xvcnMoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlQ29sb3JzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWJ0blwiKSkuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3JzLnB1c2goYnV0dG9uLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlQ29sb3JzO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbHRlckl0ZW1zQnlDb2xvcihpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNvbG9ycyA9IHRoaXMuZ2V0U2VsZWN0ZWRDb2xvcnMoKTtcclxuICAgICAgICBpZiAoYWN0aXZlQ29sb3JzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmluZENvbW1vbihpdGVtLmNvbG9ycywgYWN0aXZlQ29sb3JzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkSXRlbXM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmluZENvbW1vbihhcnIxLCBhcnIyKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBhcnIxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluQXJyYXkoZWwsIGFycjIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpbkFycmF5KGVsLCBhcnIpIHtcclxuICAgICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWwpICE9PSAtMTtcclxuICAgIH1cclxuICAgIC8vR2VuZGVyXHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWRHZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2o7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRHZW5kZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZW5kZXJcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkR2VuZGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEdlbmRlciA9PT0gXCJib3lcIikge1xyXG4gICAgICAgICAgICAgICAgKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3lcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgKF9iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXJsXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIChfYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdlbmRlclwiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRHZW5kZXIgPT09IFwiZ2lybFwiKSB7XHJcbiAgICAgICAgICAgICAgICAoX2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveVwiKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAoX2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpcmxcIikpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgKF9mID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2VuZGVyXCIpKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RlZEdlbmRlciA9PT0gXCJhbGwtZ2VuZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIChfZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm95XCIpKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIChfaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2lybFwiKSkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAoX2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1nZW5kZXJcIikpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdlbmRlckNsaWNrSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2VuZGVyXCIsIGVsZW1lbnQuaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRHZW5kZXIoKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldEdlbmRlcnNDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBib3lzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3lcIik7XHJcbiAgICAgICAgY29uc3QgZ2lybHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpcmxcIik7XHJcbiAgICAgICAgY29uc3QgYWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2VuZGVyXCIpO1xyXG4gICAgICAgIGJveXNCdXR0b24gPT09IG51bGwgfHwgYm95c0J1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm95c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuZ2VuZGVyQ2xpY2tIYW5kbGVyKGUpKTtcclxuICAgICAgICBnaXJsc0J1dHRvbiA9PT0gbnVsbCB8fCBnaXJsc0J1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2lybHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmdlbmRlckNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgYWxsQnV0dG9uID09PSBudWxsIHx8IGFsbEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5nZW5kZXJDbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbHRlckl0ZW1zQnlHZW5kZXIoaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEdlbmRlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdlbmRlclwiKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRHZW5kZXIgPT09IG51bGwgfHwgc2VsZWN0ZWRHZW5kZXIgPT09IFwiYWxsLWdlbmRlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoZGFraSkgPT4gZGFraS5nZW5kZXIgPT09IHNlbGVjdGVkR2VuZGVyKTtcclxuICAgIH1cclxuICAgIC8vbWF0ZXJpYWxcclxuICAgIHN0YXRpYyBnZXRTZWxlY3RlZE1hdGVyaWFscygpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGVyaWFscyA9IFtdO1xyXG4gICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKChtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG1hdGVyaWFsKSA9PT0gXCJ0cnVlXCIgfHxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShtYXRlcmlhbCkgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRNYXRlcmlhbHM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWRNYXRlcmlhbHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRlcmlhbHMgPSB0aGlzLmdldFNlbGVjdGVkTWF0ZXJpYWxzKCk7XHJcbiAgICAgICAgc2VsZWN0ZWRNYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFsbE1hdGVyaWFsQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIC8qIGNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLW1hdGVyaWFsXCIpO1xyXG4gICAgICAgIGNvbnN0IHN5bnRoZXRpY0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ludGhldGljXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvdHRvbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY290dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IHBsdXNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzaFwiKTtcclxuICAgICAgICBjb25zdCBsaW5lbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZW5cIik7ICovXHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3hlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1jaGVja2JveFwiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tCb3hlcyk7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja0JveCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNoZWNrQm94LmlkLCBcInRydWVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBtYXRlcmlhbENoZWNrQm94Q2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjaGVja0JveC5pZCwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNoZWNrQm94LmlkLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0TWF0ZXJpYWxDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1tYXRlcmlhbFwiKTtcclxuICAgICAgICBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1jaGVja2JveFwiKTtcclxuICAgICAgICBjaGVja0JveGVzLmZvckVhY2goKGNoZWNrQm94KSA9PiBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMubWF0ZXJpYWxDaGVja0JveENsaWNrSGFuZGxlcihlKSkpO1xyXG4gICAgICAgIGFsbEJ1dHRvbiA9PT0gbnVsbCB8fCBhbGxCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hbGxNYXRlcmlhbENsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsdGVySXRlbXNCeU1hdGVyaWFsKGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRlcmlhbHMgPSB0aGlzLmdldFNlbGVjdGVkTWF0ZXJpYWxzKCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRNYXRlcmlhbHMuaW5jbHVkZXMoaXRlbS5tYXRlcmlhbCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRBbGxNYXRlcmlhbHNUcnVlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtY2hlY2tib3hcIikuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja2JveC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpXHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY2hlY2tib3guaWQsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vb25seSBwb3B1bGFyXHJcbiAgICBzdGF0aWMgb25seVBvcHVsYXJDbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBvbmx5UG9wdWxhckJveCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAob25seVBvcHVsYXJCb3guY2hlY2tlZClcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib25seS1wb3B1bGFyXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9ubHktcG9wdWxhclwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0T25seVBvcHVsYXJDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJvbmx5LXBvcHVsYXJcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMub25seVBvcHVsYXJDbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldE9ubHlQb3B1bGFyKCkge1xyXG4gICAgICAgIGNvbnN0IG9ubHlQb3B1bGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmx5LXBvcHVsYXJcIik7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9ubHktcG9wdWxhclwiKSA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIG9ubHlQb3B1bGFyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb25seVBvcHVsYXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbHRlckJ5UG9wdWxhcihpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IGlzT25seVBvcHVsYXJDaGVja2VkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib25seS1wb3B1bGFyXCIpO1xyXG4gICAgICAgIGlmIChpc09ubHlQb3B1bGFyQ2hlY2tlZCA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW1zKSA9PiBpdGVtcy5pc1BvcHVsYXIgPT09IFwiWWVzXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG4gICAgLy9jb21tb25cclxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZCgpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkQ29sb3JzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEdlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRNYXRlcmlhbHMoKTtcclxuICAgICAgICB0aGlzLnNldE9ubHlQb3B1bGFyKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3JzRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnNldFJlc2V0TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLnNldEdlbmRlcnNDbGlja0xpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuc2V0TWF0ZXJpYWxDbGlja0xpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuc2V0T25seVBvcHVsYXJDbGlja0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgICAvL21haW5cclxuICAgIHN0YXRpYyBpbml0aWFsaXplRmlsdGVycygpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufVxyXG5GaWx0ZXIuY29sb3JDbGlja0hhbmRsZXIgPSAoZSwgY29sb3IpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sb3IpO1xyXG4gICAgY29sb3JCdXR0b24gPT09IG51bGwgfHwgY29sb3JCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY29sb3IsIFN0cmluZyhjb2xvckJ1dHRvbiA9PT0gbnVsbCB8fCBjb2xvckJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSk7XHJcbiAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgY29uc29sZS5sb2coY29sb3IpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XHJcbiIsImltcG9ydCBcIi4vaGVhZGVyLnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIEhlYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIGl0ZW1DbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJleHBvcnQgY29uc3QgY29sb3JzID0gW1xyXG4gICAgXCJ3aGl0ZVwiLFxyXG4gICAgXCJibGFja1wiLFxyXG4gICAgXCJibHVlXCIsXHJcbiAgICBcImdyZWVuXCIsXHJcbiAgICBcInBpbmtcIixcclxuICAgIFwicmVkXCIsXHJcbl07XHJcbmV4cG9ydCBjb25zdCBtYXRlcmlhbHMgPSBbXCJzeW50aGV0aWNcIiwgXCJjb3R0b25cIiwgXCJwbHVzaFwiLCBcImxpbmVuXCJdO1xyXG5jb25zdCBkYWtpbWFrdXJhcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvZ2Vuc2hpbi1KaW5uLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxNDkwLFxyXG4gICAgICAgIG5hbWU6IFwiSmlublwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdlbnNoaW4tSW1wYWN0XCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcIndoaXRlXCIsIFwiYmx1ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy8yYXJ2cG8tNWtvXzE2NDMyMjQ1MDEuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDE3OTksXHJcbiAgICAgICAgbmFtZTogXCJMZXZpXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQXR0YWNrIG9uIFRpdGFuXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwibGluZW5cIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy8zMGFkZWVjOGE3OWNiM2FlNTNhOTQ1Y2RkYjU4YTRkMi5qcGdcIixcclxuICAgICAgICBwcmljZTogMjE1MCxcclxuICAgICAgICBuYW1lOiBcIkF5YW5hbWkgUmVpXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRXZhbmdlbGlvblwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwiY290dG9uXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvMTM1X2Rha2ltYWt1cmFfZ2Vuc2hpbl9pbXBhY3Rfa2FlZGVoYXJhX2thZHp1aGEucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDIzNTAsXHJcbiAgICAgICAgbmFtZTogXCJLYWR6dWhhcmFcIixcclxuICAgICAgICB0aXRsZTogXCJHZW5zaGluIEltcGFjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcInJlZFwiLCBcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInBsdXNoXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvVG9obyBQcm9qZWN0IEl6YXlvaSBTYWt1eWEuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDE1MTAsXHJcbiAgICAgICAgbmFtZTogXCJJemF5b2kgU2FrdXlhXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVG9obyBQcm9qZWN0XCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcIndoaXRlXCIsIFwiYmx1ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJsaW5lblwiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJOb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvZnVsbF8yMTU0Mi1HZW5zaGluLUltcGFjdC1IdXRhby5qcGdcIixcclxuICAgICAgICBwcmljZTogMjE5OSxcclxuICAgICAgICBuYW1lOiBcIkh1dGFvXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiR2Vuc2hpbiBJbXBhY3RcIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wicmVkXCIsIFwid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvSG9ub2thIEtvc2FrYS0gTG92ZSBMaXZlLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxMzk5LFxyXG4gICAgICAgIG5hbWU6IFwiSG9ub2thIEtvc2FrYVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvdmUgTGl2ZVwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJwaW5rXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJOb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMva2F6dWhhLWdlbnNoaW4uanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDI3OTksXHJcbiAgICAgICAgbmFtZTogXCJLYWVkZWhhcmEgS2F6dWhhXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiR2Vuc2hpbiBJbXBhY3RcIixcclxuICAgICAgICBnZW5kZXI6IFwiYm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJyZWRcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMva2lyaXRvLSBzd29yZCBhcnQgb25saW5lLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMDk5LFxyXG4gICAgICAgIG5hbWU6IFwiS2lyaXRvXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU3dvcmQgQXJ0IE9ubGluZVwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcImJsYWNrXCIsIFwid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvTWlrZSB0b2t5byByZXZlbmdlLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxMjQ5LFxyXG4gICAgICAgIG5hbWU6IFwiTWlrZVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRva3lvIFJldmVuZ2VcIixcclxuICAgICAgICBnZW5kZXI6IFwiYm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJncmVlblwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiTm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL1JpbXVydS0gdGhhdCB0aW1lIGkgZ290IHJlaW5jYXJuYXRlZCBhcyBhIHNsaW1lLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxNzg5LFxyXG4gICAgICAgIG5hbWU6IFwiUmltdXJ1XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiUmVpbmNhcm5hdGVkIGFzIGEgU2xpbWVcIixcclxuICAgICAgICBnZW5kZXI6IFwiYm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJibHVlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJOb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvc2F0b3J1IGdvam8tIEp1anV0c3Uga2Fpc2VuLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxMDAwMSxcclxuICAgICAgICBuYW1lOiBcIlNhdG9ydSBHb2pvXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiSnVqdXRzdSBLYWlzZW5cIixcclxuICAgICAgICBnZW5kZXI6IFwiYm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJibGFja1wiLCBcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3Zpb2xldC0gZXZlcmdhcmRlbi5wbmdcIixcclxuICAgICAgICBwcmljZTogMjAwMixcclxuICAgICAgICBuYW1lOiBcIlZpb2xldFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZpb2xldCBFdmVyZ2FyZGVuXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3l1cmkgIC0gZG9raV9kb2tpX2xpdGVyYXR1cmVfY2x1Yl8ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzNDksXHJcbiAgICAgICAgbmFtZTogXCJZdXJpXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRG9raSBEb2tpIENsdWJcIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wicGlua1wiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiTm9cIixcclxuICAgIH0sXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGRha2ltYWt1cmFzO1xyXG4iLCJpbXBvcnQgRGFraW1ha3VyYSBmcm9tIFwiLi4vZGFraW1ha3VyYS9kYWtpbWFrdXJhXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IFNvcnQgZnJvbSBcIi4uL3NvcnQvc29ydFwiO1xyXG5pbXBvcnQgZGFraW1ha3VyYXMgZnJvbSBcIi4vaXRlbXNEQlwiO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vc2VhcmNoL3NlYXJjaFwiO1xyXG5leHBvcnQgY2xhc3MgSXRlbXNMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhdHRlcm5zKSB7XHJcbiAgICAgICAgdGhpcy5wYXR0ZXJucyA9IHBhdHRlcm5zO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbGxQYWdlKHBhdHRlcm5zKSB7XHJcbiAgICAgICAgcGF0dGVybnMuZm9yRWFjaCgocGF0dGVybikgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGNvbnN0IGRha2ltYWt1cmEgPSBEYWtpbWFrdXJhLmNyZWF0ZURha2ltYWt1cmEocGF0dGVybik7XHJcbiAgICAgICAgICAgIChfYSA9IEl0ZW1zTGlzdC5pdGVtc0NvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZChkYWtpbWFrdXJhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBDYXJ0LnNldFNlbGVjdGVkKHBhdHRlcm5zKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVOb3RoaW5nRm91bmRNZXNzYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IG5vdGhpbmdGb3VuZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBub3RoaW5nRm91bmRNZXNzYWdlLmNsYXNzTmFtZSA9IFwibm90aGluZy1mb3VuZFwiO1xyXG4gICAgICAgIG5vdGhpbmdGb3VuZE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJTb3JyeSwgbm90aGluZyBmb3VuZFwiO1xyXG4gICAgICAgIHJldHVybiBub3RoaW5nRm91bmRNZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFwcGVuZE5vdGhpbkZvdW5kTWVzc2FnZSgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3Qgbm90aGluZ0ZvdW5kTWVzc2FnZSA9IHRoaXMuY3JlYXRlTm90aGluZ0ZvdW5kTWVzc2FnZSgpO1xyXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXNcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQobm90aGluZ0ZvdW5kTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0SGlkZGVuKCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGFraW1ha3VyYXM7XHJcbiAgICAgICAgLy9maWx0ZXIgYnkgZ2VuZGVyXHJcbiAgICAgICAgLy9maWx0ZXIgYnkgbWF0ZXJpYWxcclxuICAgICAgICAvL2ZpbHRlciBieSBjb2xvclxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlDb2xvciA9IEZpbHRlci5maWx0ZXJJdGVtc0J5Q29sb3IoaXRlbXMpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFraW1ha3VyYVwiKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpbHRlcmVkQnlDb2xvci5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLm5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjbGVhckl0ZW1zQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1zQ29udGFpbmVyID09PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpdGVtcyBjb250YWluZXIgZG9lc250IGV4aXN0XCIpO1xyXG4gICAgICAgIHRoaXMuaXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXNwbGF5U29ydGVkSXRlbXMoZWxlbWVudHMpIHtcclxuICAgICAgICB0aGlzLmNsZWFySXRlbXNDb250YWluZXIoKTtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBJdGVtc0xpc3QuaXRlbXNDb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQoZWwpOyB9KTtcclxuICAgICAgICB0aGlzLnNldEhpZGRlbigpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlZnJlc2hJdGVtc0xpc3QoaXRlbXMpIHtcclxuICAgICAgICB0aGlzLmNsZWFySXRlbXNDb250YWluZXIoKTtcclxuICAgICAgICBjb25zdCBpdGVtc1RvRmlsdGVyID0gaXRlbXMgPyBpdGVtcyA6IGRha2ltYWt1cmFzO1xyXG4gICAgICAgIGNvbnN0IHNvcnRUeXBlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29ydFwiKTtcclxuICAgICAgICAvL3NlYXJjaFxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlTZWFyY2hWYWx1ZSA9IFNlYXJjaC5maWx0ZXJCeVNlYXJjaFZhbHVlKGl0ZW1zVG9GaWx0ZXIpO1xyXG4gICAgICAgIC8vZ2VuZGVyXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRCeUdlbmRlciA9IEZpbHRlci5maWx0ZXJJdGVtc0J5R2VuZGVyKGZpbHRlcmVkQnlTZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRCeUdlbmRlcik7XHJcbiAgICAgICAgLy9tYXRlcmlhbFxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlNYXRlcmlhbCA9IEZpbHRlci5maWx0ZXJJdGVtc0J5TWF0ZXJpYWwoZmlsdGVyZWRCeUdlbmRlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRCeU1hdGVyaWFsKTtcclxuICAgICAgICAvL3BvcHVsYXJcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEJ5UG9wdWxhciA9IEZpbHRlci5maWx0ZXJCeVBvcHVsYXIoZmlsdGVyZWRCeU1hdGVyaWFsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEJ5UG9wdWxhcik7XHJcbiAgICAgICAgLy9jb2xvclxyXG4gICAgICAgIGNvbnN0IGZpbmFsbHlGaWx0ZXJlZCA9IEZpbHRlci5maWx0ZXJJdGVtc0J5Q29sb3IoZmlsdGVyZWRCeVBvcHVsYXIpO1xyXG4gICAgICAgIGlmIChmaW5hbGx5RmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kTm90aGluRm91bmRNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3J0VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBTb3J0LnNvcnRCeVR5cGUoZmluYWxseUZpbHRlcmVkLCBzb3J0VHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFBhZ2Uoc29ydGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZpbGxQYWdlKGZpbmFsbHlGaWx0ZXJlZCk7XHJcbiAgICB9XHJcbn1cclxuSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtc1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0O1xyXG4iLCJpbXBvcnQgSXRlbXNMaXN0IGZyb20gXCIuLi9pdGVtc0xpc3QvaXRlbXNMaXN0XCI7XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2gge1xyXG4gICAgc3RhdGljIGlucHV0Q2hhbmdlSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hCYXIudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyQ3VycmVudFZhbHVlID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWx0ZXJCeVNlYXJjaFZhbHVlKGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaW5wdXRcIik7XHJcbiAgICAgICAgaWYgKHNlYXJjaEJhciAmJiBzZWFyY2hCYXIudmFsdWUgIT09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoQmFyQ3VycmVudFZhbHVlKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xlYXJDcmVzc0NsaWNrSGFuZGxlcigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dFwiKTtcclxuICAgICAgICBpZiAoc2VhcmNoQmFyICE9PSBudWxsKVxyXG4gICAgICAgICAgICBzZWFyY2hCYXIudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkU2VhcmNoTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgKF9hID0gdGhpcy5zZWFyY2hCYXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHRoaXMuaW5wdXRDaGFuZ2VIYW5kbGVyKGUpKTtcclxuICAgICAgICAoX2IgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5jbGVhci1jcmVzc1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsZWFyQ3Jlc3NDbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG59XHJcblNlYXJjaC5zZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dFwiKTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJpbXBvcnQgZGFraW1ha3VyYXMgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0RCXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuaW1wb3J0IFwiLi9zb3J0LnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIFNvcnQge1xyXG4gICAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHByaWNlSGlnaGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaGVzdFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUxvd2VzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93ZXN0XCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVBeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQS1aXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVaYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiWi1BXCIpO1xyXG4gICAgICAgIHByaWNlSGlnaGVzdCA9PT0gbnVsbCB8fCBwcmljZUhpZ2hlc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByaWNlSGlnaGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlQcmljZUhhbmRsZXIoXCJoaWdoZXN0XCIpKTtcclxuICAgICAgICBwcmljZUxvd2VzdCA9PT0gbnVsbCB8fCBwcmljZUxvd2VzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJpY2VMb3dlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydEJ5UHJpY2VIYW5kbGVyKFwibG93ZXN0XCIpKTtcclxuICAgICAgICBuYW1lQXogPT09IG51bGwgfHwgbmFtZUF6ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lQXouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydEJ5TmFtZUhhbmRsZXIoXCJBLVpcIikpO1xyXG4gICAgICAgIG5hbWVaYSA9PT0gbnVsbCB8fCBuYW1lWmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVaYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlOYW1lSGFuZGxlcihcIlotQVwiKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0Tm90SGlkZGVuSXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFraW1ha3VyYVwiKSk7XHJcbiAgICAgICAgY29uc3Qgbm90SGlkZGVuSXRlbXMgPSBhbGxJdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIi5oaWRkZW5cIikpO1xyXG4gICAgICAgIHJldHVybiBub3RIaWRkZW5JdGVtcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBzb3J0QnlQcmljZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImxvd2VzdFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5wcmljZSAtIGEucHJpY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5TmFtZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lcyA9IFtdO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGVsKSA9PiBpdGVtTmFtZXMucHVzaChlbC5uYW1lKSk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiQS1aXCIpXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lcy5zb3J0KCkuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LnB1c2goZGFraW1ha3VyYXMuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwubmFtZSA9PT0gaXRlbTtcclxuICAgICAgICAgICAgfSlbMF0pKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRCeVR5cGUoaXRlbXMsIHR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJoaWdoZXN0XCIgfHwgdHlwZSA9PT0gXCJsb3dlc3RcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5UHJpY2UoaXRlbXMsIHR5cGUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5TmFtZShpdGVtcywgdHlwZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5UHJpY2VIYW5kbGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtcyA9IHRoaXMuZ2V0Tm90SGlkZGVuSXRlbXMoKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3J0XCIsIHR5cGUpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZEVsZW1lbnRzID0gbm90SGlkZGVuSXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBjb25zdCBhUHJpY2UgPSBkYWtpbWFrdXJhcy5maWx0ZXIoKGRha2ltYWt1cmEpID0+IGRha2ltYWt1cmEubmFtZSA9PT0gYS5pZClbMF0ucHJpY2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGJQcmljZSA9IGRha2ltYWt1cmFzLmZpbHRlcigoZGFraW1ha3VyYSkgPT4gZGFraW1ha3VyYS5uYW1lID09PSBiLmlkKVswXS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwibG93ZXN0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYVByaWNlIC0gYlByaWNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYlByaWNlIC0gYVByaWNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5kaXNwbGF5U29ydGVkSXRlbXMoc29ydGVkRWxlbWVudHMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRCeU5hbWVIYW5kbGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtcyA9IHRoaXMuZ2V0Tm90SGlkZGVuSXRlbXMoKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3J0XCIsIHR5cGUpO1xyXG4gICAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zTmFtZXMgPSBbXTtcclxuICAgICAgICBub3RIaWRkZW5JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBub3RIaWRkZW5JdGVtc05hbWVzLnB1c2goaXRlbS5pZCkpO1xyXG4gICAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zTmFtZXNTb3J0ZWQgPSB0eXBlID09PSBcIkEtWlwiXHJcbiAgICAgICAgICAgID8gbm90SGlkZGVuSXRlbXNOYW1lcy5zb3J0KClcclxuICAgICAgICAgICAgOiBub3RIaWRkZW5JdGVtc05hbWVzLnNvcnQoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm90SGlkZGVuSXRlbXNOYW1lc1NvcnRlZCk7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRWxlbWVudHMgPSBbXTtcclxuICAgICAgICBub3RIaWRkZW5JdGVtc05hbWVzU29ydGVkLmZvckVhY2goKGl0ZW1OYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHNvcnRlZEVsZW1lbnRzLnB1c2gobm90SGlkZGVuSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtTmFtZSlbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5kaXNwbGF5U29ydGVkSXRlbXMoc29ydGVkRWxlbWVudHMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLmRhdGUudG9KU09OKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IERha2ltYWt1cmEgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFraW1ha3VyYS9kYWtpbWFrdXJhXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5pbXBvcnQgZGFraW1ha3VyYXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zREJcIjtcclxuaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udHJvbGxlci9wYWdlTG9hZGVyXCI7XHJcbmltcG9ydCBcIi4uL2dsb2JhbC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvY2FydC9hbGVydC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5zY3NzXCI7XHJcbmNvbnN0IGl0ZW0gPSBuZXcgSXRlbShcImRha2ltYWt1cmFcIik7XHJcbmNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIoXCJTb2Z0eVwiKTtcclxuY29uc3QgZmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG5jb25zdCBkYWtpbWFrdXJhID0gbmV3IERha2ltYWt1cmEoKTtcclxuY29uc3QgaXRlbXNMaXN0ID0gbmV3IEl0ZW1zTGlzdChkYWtpbWFrdXJhcyk7XHJcblBhZ2VMb2FkZXIubG9hZFBhZ2UoKTtcclxuY29uc29sZS5sb2coXCJJdGVtIHRvIFN0cmluZzogXCIsIGl0ZW0udG9TdHJpbmcoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==