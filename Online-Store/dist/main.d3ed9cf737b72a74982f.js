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
    //this.filterByColor();
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
        if (this.searchBarCurrentValue)
            return items.filter((item) => item.name.toLowerCase().includes(this.searchBarCurrentValue));
        else
            return items;
    }
    static addSearchListeners() {
        var _a;
        (_a = this.searchBar) === null || _a === void 0 ? void 0 : _a.addEventListener("input", (e) => this.inputChangeHandler(e));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kM2VkOWNmNzM3YjcyYTc0OTgyZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxnQkFBZ0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGdCQUFnQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1DQUFtQywrQ0FBK0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCb0I7QUFDTztBQUN4QztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQXVCO0FBQy9CLFFBQVEsNEVBQTBCO0FBQ2xDO0FBQ0E7QUFDQSxRQUFRLG9FQUFrQjtBQUMxQixRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZE87QUFDTztBQUNUO0FBQ047QUFDekI7QUFDUDtBQUNBO0FBQ0EsUUFBUSxvRUFBc0I7QUFDOUIsUUFBUSwwRUFBd0I7QUFDaEMsUUFBUSx5RUFBeUI7QUFDakMsUUFBUSw2RUFBMEI7QUFDbEM7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQztBQUNwQjtBQUNQO0FBQ0E7QUFDQSw2REFBNkQsR0FBRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QztBQUNBO0FBQ0EsdUNBQXVDLCtDQUErQztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxHQUFHO0FBQzlDO0FBQ0E7QUFDQSx1Q0FBdUMsK0NBQStDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBLG9FQUFvRSxZQUFZO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDLHFDQUFxQyxXQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRzQztBQUNQO0FBQ1Y7QUFDdkI7QUFDakI7QUFDUDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0Ysa0ZBQThCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2RUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSw2RUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUEwQjtBQUM5QjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BPQztBQUNoQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RmO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKdUI7QUFDbEI7QUFDQTtBQUNJO0FBQ0k7QUFDRjtBQUMvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrRUFBMkI7QUFDMUQ7QUFDQSxTQUFTO0FBQ1QsUUFBUSw4REFBZ0I7QUFDeEI7QUFDQTtBQUNBLHNCQUFzQixnREFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkVBQXlCO0FBQ3pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUSw0RkFBNEY7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0RBQVc7QUFDekQ7QUFDQTtBQUNBLHNDQUFzQywwRUFBMEI7QUFDaEU7QUFDQSxpQ0FBaUMsNEVBQTBCO0FBQzNEO0FBQ0E7QUFDQSxtQ0FBbUMsOEVBQTRCO0FBQy9EO0FBQ0E7QUFDQSxrQ0FBa0Msd0VBQXNCO0FBQ3hEO0FBQ0E7QUFDQSxnQ0FBZ0MsMkVBQXlCO0FBQ3pEO0FBQ0EsMkJBQTJCLDZEQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFc0I7QUFDeEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ5QjtBQUNBO0FBQzFCO0FBQ2Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGlFQUFrQjtBQUM3RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUVBQWtCO0FBQzdDLDJCQUEyQixpRUFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSwrRUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSwrRUFBNEI7QUFDcEM7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVMO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDBCO0FBQ3VCO0FBQ0U7QUFDVTtBQUNIO0FBQ0E7QUFDRztBQUNyQztBQUN3QjtBQUNUO0FBQ3ZDLGlCQUFpQiw2Q0FBSTtBQUNyQixtQkFBbUIsaUVBQU07QUFDekIsbUJBQW1CLG1FQUFNO0FBQ3pCLHVCQUF1Qix5RUFBVTtBQUNqQyxzQkFBc0IsdUVBQVMsQ0FBQyxxRUFBVztBQUMzQyxrRkFBbUI7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2FsZXJ0LnNjc3M/NDFhMyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9kYWtpbWFrdXJhL2Rha2ltYWt1cmEuc2Nzcz81YWJkIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5zY3NzPzNjOGMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5zY3NzPzliZmIiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdC5zY3NzPzFlYTkiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc29ydC9zb3J0LnNjc3M/MjAxYSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZ2xvYmFsLnNjc3M/ODE4ZiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9GaWx0ZXJzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL3BhZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZGFraW1ha3VyYS9kYWtpbWFrdXJhLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2l0ZW1zTGlzdC9pdGVtc0RCLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2l0ZW1zTGlzdC9pdGVtc0xpc3QudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zb3J0L3NvcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvSXRlbS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY2xhc3MgQ2FydCB7XHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWQoZGFraW1ha3VyYXMpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zSWQgPSBbXTtcclxuICAgICAgICBkYWtpbWFrdXJhcy5mb3JFYWNoKChkYWtpbWFrdXJhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7ZGFraW1ha3VyYS5uYW1lfWApID09PSBcInNlbGVjdGVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXNJZC5wdXNoKGRha2ltYWt1cmEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZERha2ltYWt1cmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYWtpbWFrdXJhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRCb29rbWFyayA9IHNlbGVjdGVkRGFraW1ha3VyYSA9PT0gbnVsbCB8fCBzZWxlY3RlZERha2ltYWt1cmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkRGFraW1ha3VyYS5xdWVyeVNlbGVjdG9yKFwiLmJvb2ttYXJrX3NlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2Rha2ltYWt1cmEubmFtZX1gKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRCb29rbWFyayAhPT0gbnVsbCAmJiBzZWxlY3RlZEJvb2ttYXJrICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyLW51bWJlclwiKTtcclxuICAgICAgICBpZiAoY291bnRlciAhPT0gdW5kZWZpbmVkICYmIGNvdW50ZXIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIikpfWA7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbXNJZDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZW5kQWxlcnQoKSB7XHJcbiAgICAgICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXIyMC1hbGVydFwiKTtcclxuICAgICAgICBpZiAoIShhbGVydCA9PT0gbnVsbCB8fCBhbGVydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxlcnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSkge1xyXG4gICAgICAgICAgICBhbGVydCA9PT0gbnVsbCB8fCBhbGVydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxlcnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gYWxlcnQgPT09IG51bGwgfHwgYWxlcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIiksIDUwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCJpbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5leHBvcnQgY2xhc3MgRmlsdGVyc0NvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHJlc2V0RmlsdGVycygpIHtcclxuICAgICAgICAvL2dlbmRlclxyXG4gICAgICAgIC8vbWF0ZXJpYWxcclxuICAgICAgICBGaWx0ZXIuc2V0QWxsQ29sb3JzVHJ1ZSgpO1xyXG4gICAgICAgIEZpbHRlci5zZXRBbGxNYXRlcmlhbHNUcnVlKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2VuZGVyXCIsIFwiYWxsLWdlbmRlclwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvbmx5LXBvcHVsYXJcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICBGaWx0ZXIuc2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnNDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9zZWFyY2gvc2VhcmNoXCI7XHJcbmltcG9ydCBTb3J0IGZyb20gXCIuLi9zb3J0L3NvcnRcIjtcclxuZXhwb3J0IGNsYXNzIFBhZ2VMb2FkZXIge1xyXG4gICAgc3RhdGljIGxvYWRQYWdlKCkge1xyXG4gICAgICAgIC8vSXRlbXNMaXN0LmZpbGxQYWdlKGRha2ltYWt1cmFzKTtcclxuICAgICAgICBTb3J0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgRmlsdGVyLmluaXRpYWxpemVGaWx0ZXJzKCk7XHJcbiAgICAgICAgU2VhcmNoLmFkZFNlYXJjaExpc3RlbmVycygpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRlcjtcclxuIiwiaW1wb3J0IFwiLi9kYWtpbWFrdXJhLnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIERha2ltYWt1cmEge1xyXG4gICAgc3RhdGljIGRha2ltYWt1cmFDbGlja0xpc3RlbmVyKGlkKSB7XHJcbiAgICAgICAgLy9DYXJ0LnNlbmRBbGVydCgpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWREYWtpbWFrdXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XHJcbiAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlci1udW1iZXJcIik7XHJcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlQ291bnRlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIik7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZUNvdW50ZXIgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgXCIwXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQm9va21hcmsgPSBjbGlja2VkRGFraW1ha3VyYSA9PT0gbnVsbCB8fCBjbGlja2VkRGFraW1ha3VyYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpY2tlZERha2ltYWt1cmEucXVlcnlTZWxlY3RvcihcIi5ib29rbWFya19zZWxlY3RlZFwiKTtcclxuICAgICAgICBjb25zdCBub3RTZWxlY3RlZEJvb2ttYXJrID0gY2xpY2tlZERha2ltYWt1cmEgPT09IG51bGwgfHwgY2xpY2tlZERha2ltYWt1cmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsaWNrZWREYWtpbWFrdXJhLnF1ZXJ5U2VsZWN0b3IoXCIuYm9va21hcmtfbm90LXNlbGVjdGVkXCIpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEJvb2ttYXJrID09PSBudWxsIHx8IHNlbGVjdGVkQm9va21hcmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQm9va21hcmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIG5vdFNlbGVjdGVkQm9va21hcmsgPT09IG51bGwgfHwgbm90U2VsZWN0ZWRCb29rbWFyayA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm90U2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpZH1gLCBgbm90LXNlbGVjdGVkYCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgU3RyaW5nKE51bWJlcihsb2NhbFN0b3JhZ2VDb3VudGVyKSAtIDEpKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyLmlubmVySFRNTCA9IGAke051bWJlcih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudGVyXCIpKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCb29rbWFyayA9PT0gbnVsbCB8fCBzZWxlY3RlZEJvb2ttYXJrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgbm90U2VsZWN0ZWRCb29rbWFyayA9PT0gbnVsbCB8fCBub3RTZWxlY3RlZEJvb2ttYXJrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub3RTZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2lkfWAsIGBzZWxlY3RlZGApO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIFN0cmluZyhOdW1iZXIobG9jYWxTdG9yYWdlQ291bnRlcikgKyAxKSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKSl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlRGFraW1ha3VyYShpbmZvKSB7XHJcbiAgICAgICAgY29uc3QgZGFraW1ha3VyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGFraW1ha3VyYS5jbGFzc05hbWUgPSBcImRha2ltYWt1cmFcIjtcclxuICAgICAgICBkYWtpbWFrdXJhLmlkID0gYCR7aW5mby5uYW1lfWA7XHJcbiAgICAgICAgZGFraW1ha3VyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5kYWtpbWFrdXJhQ2xpY2tMaXN0ZW5lcihpbmZvLm5hbWUpKTtcclxuICAgICAgICBkYWtpbWFrdXJhLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwiZGFraW1ha3VyYV9faW1nXCIgc3JjPVwiJHtpbmZvLmltZ1NyY31cIiBhbHQ9XCJkYWtpLWltZ1wiPlxuICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYm9va21hcmsucG5nXCIgY2xhc3M9XCJib29rbWFyayBib29rbWFya19ub3Qtc2VsZWN0ZWQgc2VsZWN0ZWRcIiBhbHQ9XCJib29rbWFya1wiPjwvaW1nPlxuICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYm9va21hcmstY2hvb3Nlbi5wbmdcIiBjbGFzcz1cImJvb2ttYXJrIGJvb2ttYXJrX3NlbGVjdGVkXCIgYWx0PVwiYm9va21hcmstY2hvb3NlblwiPjwvaW1nPlxuICAgIDxkaXYgY2xhc3M9XCJkYWtpbWFrdXJhX19tYWluLWluZm9cIj5cbiAgICAgIDxhIGNsYXNzPVwiZGFraW1ha3VyYV9fbmFtZVwiPiR7aW5mby5uYW1lfTwvYT5cbiAgICAgIDxhIGNsYXNzPVwiZGFraW1ha3VyYV9fcHJpY2VcIj4ke2luZm8ucHJpY2V9PGltZyBzcmM9XCIuL2ltYWdlcy95ZW4tc2lnbi5wbmdcIiBjbGFzcz1cImRha2ltYWt1cmFfX2N1cnJlbmN5XCIgYWx0PVwiY3VycmVuY3lcIj48L2ltZz48L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRha2ltYWt1cmFfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPlRpdGxlOiA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgaWQ9XCJ0aXRsZVwiPiR7aW5mby50aXRsZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPkdlbmRlcjogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwiZ2VuZGVyXCI+JHtpbmZvLmdlbmRlcn08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPkNvbG9yczogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwiY29sb3JzXCI+JHtbLi4uaW5mby5jb2xvcnNdfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYXR0cmlidXRlXCI+UG9wdWxhcjogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwicG9wdWxhclwiPiR7aW5mby5pc1BvcHVsYXJ9PC9zcGFuPlxuICAgIDwvZGl2PmA7XHJcbiAgICAgICAgcmV0dXJuIGRha2ltYWt1cmE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGFraW1ha3VyYTtcclxuIiwiaW1wb3J0IEZpbHRlcnNDb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyL0ZpbHRlcnNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGNvbG9ycywgbWF0ZXJpYWxzIH0gZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0RCXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuaW1wb3J0IFwiLi9maWx0ZXJzLnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICAvL1Jlc2V0XHJcbiAgICBzdGF0aWMgc2V0UmVzZXRMaXN0ZW5lcigpIHtcclxuICAgICAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnV0dG9uXCIpO1xyXG4gICAgICAgIHJlc2V0ID09PSBudWxsIHx8IHJlc2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRmlsdGVyc0NvbnRyb2xsZXIucmVzZXRGaWx0ZXJzKTtcclxuICAgIH1cclxuICAgIC8vQ29sb3JzXHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWRDb2xvcnMoKSB7XHJcbiAgICAgICAgY29sb3JzLmZvckVhY2goKGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sb3IpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbG9yKSA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgICAgICBjb2xvckJ1dHRvbiA9PT0gbnVsbCB8fCBjb2xvckJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY29sb3JCdXR0b24gPT09IG51bGwgfHwgY29sb3JCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0QWxsQ29sb3JzVHJ1ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWJ0blwiKS5mb3JFYWNoKChjb2xvckJ0bikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbG9yQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcclxuICAgICAgICAgICAgICAgIGNvbG9yQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb2xvckJ0bi5pZCwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFsbENvbG9yQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIEZpbHRlci5zZXRBbGxDb2xvcnNUcnVlKCk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRDb2xvcnNFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItYnRuXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNvbG9yQ2xpY2tIYW5kbGVyKGUsIGVsLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKF9iID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYWxsLWNvbG9yXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWxsQ29sb3JDbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFNlbGVjdGVkQ29sb3JzKCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNvbG9ycyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1idG5cIikpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9ycy5wdXNoKGJ1dHRvbi5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvbG9ycztcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWx0ZXJJdGVtc0J5Q29sb3IoaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVDb2xvcnMgPSB0aGlzLmdldFNlbGVjdGVkQ29sb3JzKCk7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUNvbG9ycy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbmRDb21tb24oaXRlbS5jb2xvcnMsIGFjdGl2ZUNvbG9ycykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbmRDb21tb24oYXJyMSwgYXJyMikge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgYXJyMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbkFycmF5KGVsLCBhcnIyKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5BcnJheShlbCwgYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGVsKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICAvL0dlbmRlclxyXG4gICAgc3RhdGljIHNldFNlbGVjdGVkR2VuZGVyKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkR2VuZGVyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2VuZGVyXCIpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEdlbmRlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRHZW5kZXIgPT09IFwiYm95XCIpIHtcclxuICAgICAgICAgICAgICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm95XCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIChfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2lybFwiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAoX2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1nZW5kZXJcIikpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkR2VuZGVyID09PSBcImdpcmxcIikge1xyXG4gICAgICAgICAgICAgICAgKF9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3lcIikpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgKF9lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXJsXCIpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIChfZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdlbmRlclwiKSkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRHZW5kZXIgPT09IFwiYWxsLWdlbmRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAoX2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveVwiKSkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAoX2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpcmxcIikpID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgKF9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2VuZGVyXCIpKSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ouY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZW5kZXJDbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdlbmRlclwiLCBlbGVtZW50LmlkKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkR2VuZGVyKCk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRHZW5kZXJzQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgYm95c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm95XCIpO1xyXG4gICAgICAgIGNvbnN0IGdpcmxzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXJsXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdlbmRlclwiKTtcclxuICAgICAgICBib3lzQnV0dG9uID09PSBudWxsIHx8IGJveXNCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJveXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmdlbmRlckNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgZ2lybHNCdXR0b24gPT09IG51bGwgfHwgZ2lybHNCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdpcmxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5nZW5kZXJDbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgICAgIGFsbEJ1dHRvbiA9PT0gbnVsbCB8fCBhbGxCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuZ2VuZGVyQ2xpY2tIYW5kbGVyKGUpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWx0ZXJJdGVtc0J5R2VuZGVyKGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRHZW5kZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZW5kZXJcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkR2VuZGVyID09PSBudWxsIHx8IHNlbGVjdGVkR2VuZGVyID09PSBcImFsbC1nZW5kZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGRha2kpID0+IGRha2kuZ2VuZGVyID09PSBzZWxlY3RlZEdlbmRlcik7XHJcbiAgICB9XHJcbiAgICAvL21hdGVyaWFsXHJcbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRNYXRlcmlhbHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRlcmlhbHMgPSBbXTtcclxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShtYXRlcmlhbCkgPT09IFwidHJ1ZVwiIHx8XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obWF0ZXJpYWwpID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTWF0ZXJpYWxzO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldFNlbGVjdGVkTWF0ZXJpYWxzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0ZXJpYWxzID0gdGhpcy5nZXRTZWxlY3RlZE1hdGVyaWFscygpO1xyXG4gICAgICAgIHNlbGVjdGVkTWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhbGxNYXRlcmlhbENsaWNrSGFuZGxlcigpIHtcclxuICAgICAgICAvKiBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1tYXRlcmlhbFwiKTtcclxuICAgICAgICBjb25zdCBzeW50aGV0aWNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bnRoZXRpY1wiKTtcclxuICAgICAgICBjb25zdCBjb3R0b25Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdHRvblwiKTtcclxuICAgICAgICBjb25zdCBwbHVzaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c2hcIik7XHJcbiAgICAgICAgY29uc3QgbGluZW5Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVuXCIpOyAqL1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtY2hlY2tib3hcIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrQm94ZXMpO1xyXG4gICAgICAgIGNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tCb3gpID0+IHtcclxuICAgICAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjaGVja0JveC5pZCwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWF0ZXJpYWxDaGVja0JveENsaWNrSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmIChjaGVja0JveC5jaGVja2VkKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY2hlY2tCb3guaWQsIFwidHJ1ZVwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjaGVja0JveC5pZCwgXCJmYWxzZVwiKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldE1hdGVyaWFsQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtbWF0ZXJpYWxcIik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtY2hlY2tib3hcIik7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja0JveCkgPT4gY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLm1hdGVyaWFsQ2hlY2tCb3hDbGlja0hhbmRsZXIoZSkpKTtcclxuICAgICAgICBhbGxCdXR0b24gPT09IG51bGwgfHwgYWxsQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWxsTWF0ZXJpYWxDbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbHRlckl0ZW1zQnlNYXRlcmlhbChpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0ZXJpYWxzID0gdGhpcy5nZXRTZWxlY3RlZE1hdGVyaWFscygpO1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkTWF0ZXJpYWxzLmluY2x1ZGVzKGl0ZW0ubWF0ZXJpYWwpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0QWxsTWF0ZXJpYWxzVHJ1ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hdGVyaWFsLWNoZWNrYm94XCIpLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY2hlY2tib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNoZWNrYm94LmlkLCBcInRydWVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL29ubHkgcG9wdWxhclxyXG4gICAgc3RhdGljIG9ubHlQb3B1bGFyQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qgb25seVBvcHVsYXJCb3ggPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKG9ubHlQb3B1bGFyQm94LmNoZWNrZWQpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9ubHktcG9wdWxhclwiLCBcInRydWVcIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvbmx5LXBvcHVsYXJcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldE9ubHlQb3B1bGFyQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgKF9hID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwib25seS1wb3B1bGFyXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLm9ubHlQb3B1bGFyQ2xpY2tIYW5kbGVyKGUpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRPbmx5UG9wdWxhcigpIHtcclxuICAgICAgICBjb25zdCBvbmx5UG9wdWxhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25seS1wb3B1bGFyXCIpO1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvbmx5LXBvcHVsYXJcIikgPT09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBvbmx5UG9wdWxhci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG9ubHlQb3B1bGFyLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWx0ZXJCeVBvcHVsYXIoaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBpc09ubHlQb3B1bGFyQ2hlY2tlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9ubHktcG9wdWxhclwiKTtcclxuICAgICAgICBpZiAoaXNPbmx5UG9wdWxhckNoZWNrZWQgPT09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtcykgPT4gaXRlbXMuaXNQb3B1bGFyID09PSBcIlllc1wiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuICAgIC8vY29tbW9uXHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZENvbG9ycygpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRHZW5kZXIoKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkTWF0ZXJpYWxzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRPbmx5UG9wdWxhcigpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLnNldENvbG9yc0V2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRSZXNldExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRHZW5kZXJzQ2xpY2tMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnNldE1hdGVyaWFsQ2xpY2tMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnNldE9ubHlQb3B1bGFyQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gICAgLy9tYWluXHJcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZUZpbHRlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn1cclxuRmlsdGVyLmNvbG9yQ2xpY2tIYW5kbGVyID0gKGUsIGNvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbG9yKTtcclxuICAgIGNvbG9yQnV0dG9uID09PSBudWxsIHx8IGNvbG9yQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb2xvckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbG9yLCBTdHJpbmcoY29sb3JCdXR0b24gPT09IG51bGwgfHwgY29sb3JCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkpO1xyXG4gICAgLy90aGlzLmZpbHRlckJ5Q29sb3IoKTtcclxuICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb2xvcik7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiaW1wb3J0IFwiLi9oZWFkZXIuc2Nzc1wiO1xyXG5leHBvcnQgY2xhc3MgSGVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgaXRlbUNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbXHJcbiAgICBcIndoaXRlXCIsXHJcbiAgICBcImJsYWNrXCIsXHJcbiAgICBcImJsdWVcIixcclxuICAgIFwiZ3JlZW5cIixcclxuICAgIFwicGlua1wiLFxyXG4gICAgXCJyZWRcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IG1hdGVyaWFscyA9IFtcInN5bnRoZXRpY1wiLCBcImNvdHRvblwiLCBcInBsdXNoXCIsIFwibGluZW5cIl07XHJcbmNvbnN0IGRha2ltYWt1cmFzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9nZW5zaGluLUppbm4uanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDE0OTAsXHJcbiAgICAgICAgbmFtZTogXCJKaW5uXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiR2Vuc2hpbi1JbXBhY3RcIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIiwgXCJibHVlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzLzJhcnZwby01a29fMTY0MzIyNDUwMS5qcGdcIixcclxuICAgICAgICBwcmljZTogMTc5OSxcclxuICAgICAgICBuYW1lOiBcIkxldmlcIixcclxuICAgICAgICB0aXRsZTogXCJBdHRhY2sgb24gVGl0YW5cIixcclxuICAgICAgICBnZW5kZXI6IFwiYm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJsaW5lblwiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzLzMwYWRlZWM4YTc5Y2IzYWU1M2E5NDVjZGRiNThhNGQyLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMTUwLFxyXG4gICAgICAgIG5hbWU6IFwiQXlhbmFtaSBSZWlcIixcclxuICAgICAgICB0aXRsZTogXCJFdmFuZ2VsaW9uXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcIndoaXRlXCIsIFwiYmx1ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJjb3R0b25cIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy8xMzVfZGFraW1ha3VyYV9nZW5zaGluX2ltcGFjdF9rYWVkZWhhcmFfa2FkenVoYS5wbmdcIixcclxuICAgICAgICBwcmljZTogMjM1MCxcclxuICAgICAgICBuYW1lOiBcIkthZHp1aGFyYVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdlbnNoaW4gSW1wYWN0XCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wicmVkXCIsIFwid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwicGx1c2hcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9Ub2hvIFByb2plY3QgSXpheW9pIFNha3V5YS5qcGdcIixcclxuICAgICAgICBwcmljZTogMTUxMCxcclxuICAgICAgICBuYW1lOiBcIkl6YXlvaSBTYWt1eWFcIixcclxuICAgICAgICB0aXRsZTogXCJUb2hvIFByb2plY3RcIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIiwgXCJibHVlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcImxpbmVuXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9mdWxsXzIxNTQyLUdlbnNoaW4tSW1wYWN0LUh1dGFvLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMTk5LFxyXG4gICAgICAgIG5hbWU6IFwiSHV0YW9cIixcclxuICAgICAgICB0aXRsZTogXCJHZW5zaGluIEltcGFjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJyZWRcIiwgXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9Ib25va2EgS29zYWthLSBMb3ZlIExpdmUucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzOTksXHJcbiAgICAgICAgbmFtZTogXCJIb25va2EgS29zYWthXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG92ZSBMaXZlXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcInBpbmtcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9rYXp1aGEtZ2Vuc2hpbi5qcGdcIixcclxuICAgICAgICBwcmljZTogMjc5OSxcclxuICAgICAgICBuYW1lOiBcIkthZWRlaGFyYSBLYXp1aGFcIixcclxuICAgICAgICB0aXRsZTogXCJHZW5zaGluIEltcGFjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcInJlZFwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9raXJpdG8tIHN3b3JkIGFydCBvbmxpbmUucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDIwOTksXHJcbiAgICAgICAgbmFtZTogXCJLaXJpdG9cIixcclxuICAgICAgICB0aXRsZTogXCJTd29yZCBBcnQgT25saW5lXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiYmxhY2tcIiwgXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9NaWtlIHRva3lvIHJldmVuZ2UucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDEyNDksXHJcbiAgICAgICAgbmFtZTogXCJNaWtlXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVG9reW8gUmV2ZW5nZVwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcImdyZWVuXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJOb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvUmltdXJ1LSB0aGF0IHRpbWUgaSBnb3QgcmVpbmNhcm5hdGVkIGFzIGEgc2xpbWUucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDE3ODksXHJcbiAgICAgICAgbmFtZTogXCJSaW11cnVcIixcclxuICAgICAgICB0aXRsZTogXCJSZWluY2FybmF0ZWQgYXMgYSBTbGltZVwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcImJsdWVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9zYXRvcnUgZ29qby0gSnVqdXRzdSBrYWlzZW4ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDEwMDAxLFxyXG4gICAgICAgIG5hbWU6IFwiU2F0b3J1IEdvam9cIixcclxuICAgICAgICB0aXRsZTogXCJKdWp1dHN1IEthaXNlblwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcImJsYWNrXCIsIFwid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvdmlvbGV0LSBldmVyZ2FyZGVuLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMDAyLFxyXG4gICAgICAgIG5hbWU6IFwiVmlvbGV0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVmlvbGV0IEV2ZXJnYXJkZW5cIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMveXVyaSAgLSBkb2tpX2Rva2lfbGl0ZXJhdHVyZV9jbHViXy5wbmdcIixcclxuICAgICAgICBwcmljZTogMTM0OSxcclxuICAgICAgICBuYW1lOiBcIll1cmlcIixcclxuICAgICAgICB0aXRsZTogXCJEb2tpIERva2kgQ2x1YlwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJwaW5rXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJOb1wiLFxyXG4gICAgfSxcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgZGFraW1ha3VyYXM7XHJcbiIsImltcG9ydCBEYWtpbWFrdXJhIGZyb20gXCIuLi9kYWtpbWFrdXJhL2Rha2ltYWt1cmFcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NhcnQvY2FydFwiO1xyXG5pbXBvcnQgU29ydCBmcm9tIFwiLi4vc29ydC9zb3J0XCI7XHJcbmltcG9ydCBkYWtpbWFrdXJhcyBmcm9tIFwiLi9pdGVtc0RCXCI7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2ZpbHRlcnMvZmlsdGVyc1wiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9zZWFyY2gvc2VhcmNoXCI7XHJcbmV4cG9ydCBjbGFzcyBJdGVtc0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IocGF0dGVybnMpIHtcclxuICAgICAgICB0aGlzLnBhdHRlcm5zID0gcGF0dGVybnM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsbFBhZ2UocGF0dGVybnMpIHtcclxuICAgICAgICBwYXR0ZXJucy5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgY29uc3QgZGFraW1ha3VyYSA9IERha2ltYWt1cmEuY3JlYXRlRGFraW1ha3VyYShwYXR0ZXJuKTtcclxuICAgICAgICAgICAgKF9hID0gSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKGRha2ltYWt1cmEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIENhcnQuc2V0U2VsZWN0ZWQocGF0dGVybnMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldEhpZGRlbigpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRha2ltYWt1cmFzO1xyXG4gICAgICAgIC8vZmlsdGVyIGJ5IGdlbmRlclxyXG4gICAgICAgIC8vZmlsdGVyIGJ5IG1hdGVyaWFsXHJcbiAgICAgICAgLy9maWx0ZXIgYnkgY29sb3JcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEJ5Q29sb3IgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeUNvbG9yKGl0ZW1zKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRha2ltYWt1cmFcIikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmaWx0ZXJlZEJ5Q29sb3IuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5uYW1lKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xlYXJJdGVtc0NvbnRhaW5lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtc0NvbnRhaW5lciA9PT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaXRlbXMgY29udGFpbmVyIGRvZXNudCBleGlzdFwiKTtcclxuICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlzcGxheVNvcnRlZEl0ZW1zKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1zQ29udGFpbmVyKCk7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKGVsKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRIaWRkZW4oKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZWZyZXNoSXRlbXNMaXN0KGl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1zQ29udGFpbmVyKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXNUb0ZpbHRlciA9IGl0ZW1zID8gaXRlbXMgOiBkYWtpbWFrdXJhcztcclxuICAgICAgICBjb25zdCBzb3J0VHlwZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvcnRcIik7XHJcbiAgICAgICAgLy9zZWFyY2hcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEJ5U2VhcmNoVmFsdWUgPSBTZWFyY2guZmlsdGVyQnlTZWFyY2hWYWx1ZShpdGVtc1RvRmlsdGVyKTtcclxuICAgICAgICAvL2dlbmRlclxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlHZW5kZXIgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeUdlbmRlcihmaWx0ZXJlZEJ5U2VhcmNoVmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQnlHZW5kZXIpO1xyXG4gICAgICAgIC8vbWF0ZXJpYWxcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEJ5TWF0ZXJpYWwgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeU1hdGVyaWFsKGZpbHRlcmVkQnlHZW5kZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQnlNYXRlcmlhbCk7XHJcbiAgICAgICAgLy9wb3B1bGFyXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRCeVBvcHVsYXIgPSBGaWx0ZXIuZmlsdGVyQnlQb3B1bGFyKGZpbHRlcmVkQnlNYXRlcmlhbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRCeVBvcHVsYXIpO1xyXG4gICAgICAgIC8vY29sb3JcclxuICAgICAgICBjb25zdCBmaW5hbGx5RmlsdGVyZWQgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeUNvbG9yKGZpbHRlcmVkQnlQb3B1bGFyKTtcclxuICAgICAgICBpZiAoc29ydFR5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gU29ydC5zb3J0QnlUeXBlKGZpbmFsbHlGaWx0ZXJlZCwgc29ydFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxQYWdlKHNvcnRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5maWxsUGFnZShmaW5hbGx5RmlsdGVyZWQpO1xyXG4gICAgfVxyXG59XHJcbkl0ZW1zTGlzdC5pdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXNcIik7XHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1zTGlzdDtcclxuIiwiaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5leHBvcnQgY2xhc3MgU2VhcmNoIHtcclxuICAgIHN0YXRpYyBpbnB1dENoYW5nZUhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoQmFyLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhckN1cnJlbnRWYWx1ZSA9IHNlYXJjaEJhci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsdGVyQnlTZWFyY2hWYWx1ZShpdGVtcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEJhckN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hCYXJDdXJyZW50VmFsdWUpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGRTZWFyY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IHRoaXMuc2VhcmNoQmFyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB0aGlzLmlucHV0Q2hhbmdlSGFuZGxlcihlKSk7XHJcbiAgICB9XHJcbn1cclxuU2VhcmNoLnNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWlucHV0XCIpO1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBkYWtpbWFrdXJhcyBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zREJcIjtcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5pbXBvcnQgXCIuL3NvcnQuc2Nzc1wiO1xyXG5leHBvcnQgY2xhc3MgU29ydCB7XHJcbiAgICBzdGF0aWMgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgcHJpY2VIaWdoZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoZXN0XCIpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlTG93ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3dlc3RcIik7XHJcbiAgICAgICAgY29uc3QgbmFtZUF6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBLVpcIik7XHJcbiAgICAgICAgY29uc3QgbmFtZVphID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJaLUFcIik7XHJcbiAgICAgICAgcHJpY2VIaWdoZXN0ID09PSBudWxsIHx8IHByaWNlSGlnaGVzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJpY2VIaWdoZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNvcnRCeVByaWNlSGFuZGxlcihcImhpZ2hlc3RcIikpO1xyXG4gICAgICAgIHByaWNlTG93ZXN0ID09PSBudWxsIHx8IHByaWNlTG93ZXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcmljZUxvd2VzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlQcmljZUhhbmRsZXIoXCJsb3dlc3RcIikpO1xyXG4gICAgICAgIG5hbWVBeiA9PT0gbnVsbCB8fCBuYW1lQXogPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVBei5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlOYW1lSGFuZGxlcihcIkEtWlwiKSk7XHJcbiAgICAgICAgbmFtZVphID09PSBudWxsIHx8IG5hbWVaYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZVphLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNvcnRCeU5hbWVIYW5kbGVyKFwiWi1BXCIpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXROb3RIaWRkZW5JdGVtcygpIHtcclxuICAgICAgICBjb25zdCBhbGxJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWtpbWFrdXJhXCIpKTtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtcyA9IGFsbEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiLmhpZGRlblwiKSk7XHJcbiAgICAgICAgcmV0dXJuIG5vdEhpZGRlbkl0ZW1zO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRCeVByaWNlKGl0ZW1zLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwibG93ZXN0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcmljZSAtIGIucHJpY2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBiLnByaWNlIC0gYS5wcmljZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzb3J0QnlOYW1lKGl0ZW1zLCB0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWVzID0gW107XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoZWwpID0+IGl0ZW1OYW1lcy5wdXNoKGVsLm5hbWUpKTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJBLVpcIilcclxuICAgICAgICAgICAgaXRlbU5hbWVzLnNvcnQoKS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQucHVzaChkYWtpbWFrdXJhcy5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbC5uYW1lID09PSBpdGVtO1xyXG4gICAgICAgICAgICB9KVswXSkpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5VHlwZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcImhpZ2hlc3RcIiB8fCB0eXBlID09PSBcImxvd2VzdFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0QnlQcmljZShpdGVtcywgdHlwZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0QnlOYW1lKGl0ZW1zLCB0eXBlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzb3J0QnlQcmljZUhhbmRsZXIodHlwZSkge1xyXG4gICAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zID0gdGhpcy5nZXROb3RIaWRkZW5JdGVtcygpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNvcnRcIiwgdHlwZSk7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRWxlbWVudHMgPSBub3RIaWRkZW5JdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFQcmljZSA9IGRha2ltYWt1cmFzLmZpbHRlcigoZGFraW1ha3VyYSkgPT4gZGFraW1ha3VyYS5uYW1lID09PSBhLmlkKVswXS5wcmljZTtcclxuICAgICAgICAgICAgY29uc3QgYlByaWNlID0gZGFraW1ha3VyYXMuZmlsdGVyKChkYWtpbWFrdXJhKSA9PiBkYWtpbWFrdXJhLm5hbWUgPT09IGIuaWQpWzBdLnByaWNlO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJsb3dlc3RcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBhUHJpY2UgLSBiUHJpY2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBiUHJpY2UgLSBhUHJpY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgSXRlbXNMaXN0LmRpc3BsYXlTb3J0ZWRJdGVtcyhzb3J0ZWRFbGVtZW50cyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5TmFtZUhhbmRsZXIodHlwZSkge1xyXG4gICAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zID0gdGhpcy5nZXROb3RIaWRkZW5JdGVtcygpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNvcnRcIiwgdHlwZSk7XHJcbiAgICAgICAgY29uc3Qgbm90SGlkZGVuSXRlbXNOYW1lcyA9IFtdO1xyXG4gICAgICAgIG5vdEhpZGRlbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IG5vdEhpZGRlbkl0ZW1zTmFtZXMucHVzaChpdGVtLmlkKSk7XHJcbiAgICAgICAgY29uc3Qgbm90SGlkZGVuSXRlbXNOYW1lc1NvcnRlZCA9IHR5cGUgPT09IFwiQS1aXCJcclxuICAgICAgICAgICAgPyBub3RIaWRkZW5JdGVtc05hbWVzLnNvcnQoKVxyXG4gICAgICAgICAgICA6IG5vdEhpZGRlbkl0ZW1zTmFtZXMuc29ydCgpLnJldmVyc2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhub3RIaWRkZW5JdGVtc05hbWVzU29ydGVkKTtcclxuICAgICAgICBjb25zdCBzb3J0ZWRFbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIG5vdEhpZGRlbkl0ZW1zTmFtZXNTb3J0ZWQuZm9yRWFjaCgoaXRlbU5hbWUpID0+IHtcclxuICAgICAgICAgICAgc29ydGVkRWxlbWVudHMucHVzaChub3RIaWRkZW5JdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGl0ZW1OYW1lKVswXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgSXRlbXNMaXN0LmRpc3BsYXlTb3J0ZWRJdGVtcyhzb3J0ZWRFbGVtZW50cyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29ydDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIGRhdGU6IHRoaXMuZGF0ZS50b0pTT04oKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyc1wiO1xyXG5pbXBvcnQgRGFraW1ha3VyYSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYWtpbWFrdXJhL2Rha2ltYWt1cmFcIjtcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9pdGVtc0xpc3QvaXRlbXNMaXN0XCI7XHJcbmltcG9ydCBkYWtpbWFrdXJhcyBmcm9tIFwiLi4vY29tcG9uZW50cy9pdGVtc0xpc3QvaXRlbXNEQlwiO1xyXG5pbXBvcnQgUGFnZUxvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250cm9sbGVyL3BhZ2VMb2FkZXJcIjtcclxuaW1wb3J0IFwiLi4vZ2xvYmFsLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9pdGVtc0xpc3QvaXRlbXNMaXN0LnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9jYXJ0L2FsZXJ0LnNjc3NcIjtcclxuY29uc3QgaXRlbSA9IG5ldyBJdGVtKFwiZGFraW1ha3VyYVwiKTtcclxuY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcihcIlNvZnR5XCIpO1xyXG5jb25zdCBmaWx0ZXIgPSBuZXcgRmlsdGVyKCk7XHJcbmNvbnN0IGRha2ltYWt1cmEgPSBuZXcgRGFraW1ha3VyYSgpO1xyXG5jb25zdCBpdGVtc0xpc3QgPSBuZXcgSXRlbXNMaXN0KGRha2ltYWt1cmFzKTtcclxuUGFnZUxvYWRlci5sb2FkUGFnZSgpO1xyXG5jb25zb2xlLmxvZyhcIkl0ZW0gdG8gU3RyaW5nOiBcIiwgaXRlbS50b1N0cmluZygpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9