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
            counter.innerHTML = `${selectedItemsId.length}`;
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
/* harmony import */ var _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsList/itemsDB */ "./src/components/itemsList/itemsDB.ts");
/* harmony import */ var _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");



class FiltersController {
    static resetFilters() {
        //gender
        //material
        _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_1__.colors.forEach((color) => {
            window.localStorage.removeItem(color);
        });
        _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_1__.materials.forEach((material) => {
            window.localStorage.setItem(material, "true");
        });
        window.localStorage.setItem("gender", "all-gender");
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].initializeFilters();
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_2__["default"].refreshItemsList();
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
/* harmony import */ var _sort_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sort/sort */ "./src/components/sort/sort.ts");



class PageLoader {
    static loadPage() {
        //ItemsList.fillPage(dakimakuras);
        _sort_sort__WEBPACK_IMPORTED_MODULE_2__["default"].setEventListeners();
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].initializeFilters();
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
/* harmony import */ var _cart_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart/cart */ "./src/components/cart/cart.ts");
/* harmony import */ var _dakimakura_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dakimakura.scss */ "./src/components/dakimakura/dakimakura.scss");


class Dakimakura {
    static dakimakuraClickListener(id) {
        _cart_cart__WEBPACK_IMPORTED_MODULE_0__["default"].sendAlert();
        const clickedDakimakura = document.getElementById(`${id}`);
        const counter = document.querySelector(".counter-number");
        const selectedBookmark = clickedDakimakura === null || clickedDakimakura === void 0 ? void 0 : clickedDakimakura.querySelector(".bookmark_selected");
        const notSelectedBookmark = clickedDakimakura === null || clickedDakimakura === void 0 ? void 0 : clickedDakimakura.querySelector(".bookmark_not-selected");
        if (selectedBookmark === null || selectedBookmark === void 0 ? void 0 : selectedBookmark.classList.contains("selected")) {
            selectedBookmark.classList.remove("selected");
            notSelectedBookmark === null || notSelectedBookmark === void 0 ? void 0 : notSelectedBookmark.classList.add("selected");
            window.localStorage.setItem(`${id}`, `not-selected`);
            if (counter !== null)
                counter.innerHTML = `${Number(counter === null || counter === void 0 ? void 0 : counter.innerHTML) - 1}`;
        }
        else {
            selectedBookmark === null || selectedBookmark === void 0 ? void 0 : selectedBookmark.classList.add("selected");
            notSelectedBookmark === null || notSelectedBookmark === void 0 ? void 0 : notSelectedBookmark.classList.remove("selected");
            window.localStorage.setItem(`${id}`, `selected`);
            if (counter !== null)
                counter.innerHTML = `${Number(counter === null || counter === void 0 ? void 0 : counter.innerHTML) + 1}`;
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
    static allColorClickHandler() {
        document.querySelectorAll(".color-btn").forEach((colorBtn) => {
            if (!colorBtn.classList.contains("active"))
                colorBtn.classList.add("active");
            window.localStorage.setItem(colorBtn.id, "true");
        });
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
            if (window.localStorage.getItem(material) === "true")
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
        console.log("////");
        console.log(selectedMaterials);
        return items.filter((item) => {
            if (selectedMaterials.includes(item.material))
                return true;
        });
    }
    //common
    static setSelected() {
        this.setSelectedColors();
        this.setSelectedGender();
        this.setSelectedMaterials();
    }
    static setListeners() {
        this.setColorsEventListeners();
        this.setResetListener();
        this.setGendersClickListeners();
        this.setMaterialClickListeners();
    }
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
    static refreshItemsList() {
        this.clearItemsContainer();
        const items = _itemsDB__WEBPACK_IMPORTED_MODULE_3__["default"];
        const sortType = window.localStorage.getItem("sort");
        //gender
        const filteredByGender = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByGender(items);
        console.log(filteredByGender);
        //material
        const filteredByMaterial = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByMaterial(filteredByGender);
        console.log(filteredByMaterial);
        //color
        const finallyFiltered = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByColor(filteredByMaterial);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUI7QUFDekI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQTBCO0FBQzlCO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxDO0FBQ2hCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxL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RUFBTTtBQUN6Qix1QkFBdUIseUVBQVU7QUFDakMsc0JBQXNCLHVFQUFTLENBQUMscUVBQVc7QUFDM0Msa0ZBQW1CO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9hbGVydC5zY3NzPzQxYTMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZGFraW1ha3VyYS9kYWtpbWFrdXJhLnNjc3M/NWFiZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuc2Nzcz8zYzhjIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzcz85YmZiIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2l0ZW1zTGlzdC9pdGVtc0xpc3Quc2Nzcz8xZWE5Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NvcnQvc29ydC5zY3NzPzIwMWEiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5zY3NzPzgxOGYiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvRmlsdGVyc0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9wYWdlTG9hZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Rha2ltYWt1cmEvZGFraW1ha3VyYS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9pdGVtc0xpc3QvaXRlbXNEQi50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9pdGVtc0xpc3QvaXRlbXNMaXN0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NvcnQvc29ydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9JdGVtLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHRzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjbGFzcyBDYXJ0IHtcclxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZChkYWtpbWFrdXJhcykge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXNJZCA9IFtdO1xyXG4gICAgICAgIGRha2ltYWt1cmFzLmZvckVhY2goKGRha2ltYWt1cmEpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtkYWtpbWFrdXJhLm5hbWV9YCkgPT09IFwic2VsZWN0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtc0lkLnB1c2goZGFraW1ha3VyYS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGFraW1ha3VyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRha2ltYWt1cmEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEJvb2ttYXJrID0gc2VsZWN0ZWREYWtpbWFrdXJhID09PSBudWxsIHx8IHNlbGVjdGVkRGFraW1ha3VyYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWREYWtpbWFrdXJhLnF1ZXJ5U2VsZWN0b3IoXCIuYm9va21hcmtfc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7ZGFraW1ha3VyYS5uYW1lfWApKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEJvb2ttYXJrICE9PSBudWxsICYmIHNlbGVjdGVkQm9va21hcmsgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXItbnVtYmVyXCIpO1xyXG4gICAgICAgIGlmIChjb3VudGVyICE9PSB1bmRlZmluZWQgJiYgY291bnRlciAhPT0gbnVsbClcclxuICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtzZWxlY3RlZEl0ZW1zSWQubGVuZ3RofWA7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbXNJZDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZW5kQWxlcnQoKSB7XHJcbiAgICAgICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXIyMC1hbGVydFwiKTtcclxuICAgICAgICBpZiAoIShhbGVydCA9PT0gbnVsbCB8fCBhbGVydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxlcnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSkge1xyXG4gICAgICAgICAgICBhbGVydCA9PT0gbnVsbCB8fCBhbGVydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxlcnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gYWxlcnQgPT09IG51bGwgfHwgYWxlcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIiksIDUwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCJpbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgY29sb3JzLCBtYXRlcmlhbHMgfSBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zREJcIjtcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5leHBvcnQgY2xhc3MgRmlsdGVyc0NvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHJlc2V0RmlsdGVycygpIHtcclxuICAgICAgICAvL2dlbmRlclxyXG4gICAgICAgIC8vbWF0ZXJpYWxcclxuICAgICAgICBjb2xvcnMuZm9yRWFjaCgoY29sb3IpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGNvbG9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG1hdGVyaWFsLCBcInRydWVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2VuZGVyXCIsIFwiYWxsLWdlbmRlclwiKTtcclxuICAgICAgICBGaWx0ZXIuaW5pdGlhbGl6ZUZpbHRlcnMoKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnNDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tIFwiLi4vaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5pbXBvcnQgU29ydCBmcm9tIFwiLi4vc29ydC9zb3J0XCI7XHJcbmV4cG9ydCBjbGFzcyBQYWdlTG9hZGVyIHtcclxuICAgIHN0YXRpYyBsb2FkUGFnZSgpIHtcclxuICAgICAgICAvL0l0ZW1zTGlzdC5maWxsUGFnZShkYWtpbWFrdXJhcyk7XHJcbiAgICAgICAgU29ydC5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIEZpbHRlci5pbml0aWFsaXplRmlsdGVycygpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRlcjtcclxuIiwiaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NhcnQvY2FydFwiO1xyXG5pbXBvcnQgXCIuL2Rha2ltYWt1cmEuc2Nzc1wiO1xyXG5leHBvcnQgY2xhc3MgRGFraW1ha3VyYSB7XHJcbiAgICBzdGF0aWMgZGFraW1ha3VyYUNsaWNrTGlzdGVuZXIoaWQpIHtcclxuICAgICAgICBDYXJ0LnNlbmRBbGVydCgpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWREYWtpbWFrdXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XHJcbiAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlci1udW1iZXJcIik7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRCb29rbWFyayA9IGNsaWNrZWREYWtpbWFrdXJhID09PSBudWxsIHx8IGNsaWNrZWREYWtpbWFrdXJhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbGlja2VkRGFraW1ha3VyYS5xdWVyeVNlbGVjdG9yKFwiLmJvb2ttYXJrX3NlbGVjdGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IG5vdFNlbGVjdGVkQm9va21hcmsgPSBjbGlja2VkRGFraW1ha3VyYSA9PT0gbnVsbCB8fCBjbGlja2VkRGFraW1ha3VyYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpY2tlZERha2ltYWt1cmEucXVlcnlTZWxlY3RvcihcIi5ib29rbWFya19ub3Qtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkQm9va21hcmsgPT09IG51bGwgfHwgc2VsZWN0ZWRCb29rbWFyayA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgbm90U2VsZWN0ZWRCb29rbWFyayA9PT0gbnVsbCB8fCBub3RTZWxlY3RlZEJvb2ttYXJrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub3RTZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2lkfWAsIGBub3Qtc2VsZWN0ZWRgKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyLmlubmVySFRNTCA9IGAke051bWJlcihjb3VudGVyID09PSBudWxsIHx8IGNvdW50ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvdW50ZXIuaW5uZXJIVE1MKSAtIDF9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQm9va21hcmsgPT09IG51bGwgfHwgc2VsZWN0ZWRCb29rbWFyayA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIG5vdFNlbGVjdGVkQm9va21hcmsgPT09IG51bGwgfHwgbm90U2VsZWN0ZWRCb29rbWFyayA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm90U2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpZH1gLCBgc2VsZWN0ZWRgKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyLmlubmVySFRNTCA9IGAke051bWJlcihjb3VudGVyID09PSBudWxsIHx8IGNvdW50ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvdW50ZXIuaW5uZXJIVE1MKSArIDF9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlRGFraW1ha3VyYShpbmZvKSB7XHJcbiAgICAgICAgY29uc3QgZGFraW1ha3VyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGFraW1ha3VyYS5jbGFzc05hbWUgPSBcImRha2ltYWt1cmFcIjtcclxuICAgICAgICBkYWtpbWFrdXJhLmlkID0gYCR7aW5mby5uYW1lfWA7XHJcbiAgICAgICAgZGFraW1ha3VyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5kYWtpbWFrdXJhQ2xpY2tMaXN0ZW5lcihpbmZvLm5hbWUpKTtcclxuICAgICAgICBkYWtpbWFrdXJhLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwiZGFraW1ha3VyYV9faW1nXCIgc3JjPVwiJHtpbmZvLmltZ1NyY31cIiBhbHQ9XCJkYWtpLWltZ1wiPlxuICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYm9va21hcmsucG5nXCIgY2xhc3M9XCJib29rbWFyayBib29rbWFya19ub3Qtc2VsZWN0ZWQgc2VsZWN0ZWRcIiBhbHQ9XCJib29rbWFya1wiPjwvaW1nPlxuICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYm9va21hcmstY2hvb3Nlbi5wbmdcIiBjbGFzcz1cImJvb2ttYXJrIGJvb2ttYXJrX3NlbGVjdGVkXCIgYWx0PVwiYm9va21hcmstY2hvb3NlblwiPjwvaW1nPlxuICAgIDxkaXYgY2xhc3M9XCJkYWtpbWFrdXJhX19tYWluLWluZm9cIj5cbiAgICAgIDxhIGNsYXNzPVwiZGFraW1ha3VyYV9fbmFtZVwiPiR7aW5mby5uYW1lfTwvYT5cbiAgICAgIDxhIGNsYXNzPVwiZGFraW1ha3VyYV9fcHJpY2VcIj4ke2luZm8ucHJpY2V9PGltZyBzcmM9XCIuL2ltYWdlcy95ZW4tc2lnbi5wbmdcIiBjbGFzcz1cImRha2ltYWt1cmFfX2N1cnJlbmN5XCIgYWx0PVwiY3VycmVuY3lcIj48L2ltZz48L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRha2ltYWt1cmFfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPlRpdGxlOiA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgaWQ9XCJ0aXRsZVwiPiR7aW5mby50aXRsZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPkdlbmRlcjogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwiZ2VuZGVyXCI+JHtpbmZvLmdlbmRlcn08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPkNvbG9yczogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwiY29sb3JzXCI+JHtbLi4uaW5mby5jb2xvcnNdfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYXR0cmlidXRlXCI+UG9wdWxhcjogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwicG9wdWxhclwiPiR7aW5mby5pc1BvcHVsYXJ9PC9zcGFuPlxuICAgIDwvZGl2PmA7XHJcbiAgICAgICAgcmV0dXJuIGRha2ltYWt1cmE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGFraW1ha3VyYTtcclxuIiwiaW1wb3J0IEZpbHRlcnNDb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyL0ZpbHRlcnNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGNvbG9ycywgbWF0ZXJpYWxzIH0gZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0RCXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuaW1wb3J0IFwiLi9maWx0ZXJzLnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICAvL1Jlc2V0XHJcbiAgICBzdGF0aWMgc2V0UmVzZXRMaXN0ZW5lcigpIHtcclxuICAgICAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnV0dG9uXCIpO1xyXG4gICAgICAgIHJlc2V0ID09PSBudWxsIHx8IHJlc2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRmlsdGVyc0NvbnRyb2xsZXIucmVzZXRGaWx0ZXJzKTtcclxuICAgIH1cclxuICAgIC8vQ29sb3JzXHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWRDb2xvcnMoKSB7XHJcbiAgICAgICAgY29sb3JzLmZvckVhY2goKGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sb3IpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbG9yKSA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgICAgICBjb2xvckJ1dHRvbiA9PT0gbnVsbCB8fCBjb2xvckJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY29sb3JCdXR0b24gPT09IG51bGwgfHwgY29sb3JCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWxsQ29sb3JDbGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1idG5cIikuZm9yRWFjaCgoY29sb3JCdG4pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb2xvckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpXHJcbiAgICAgICAgICAgICAgICBjb2xvckJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY29sb3JCdG4uaWQsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldENvbG9yc0V2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1idG5cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuY29sb3JDbGlja0hhbmRsZXIoZSwgZWwuaWQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAoX2IgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtY29sb3JcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hbGxDb2xvckNsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRDb2xvcnMoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlQ29sb3JzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWJ0blwiKSkuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3JzLnB1c2goYnV0dG9uLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlQ29sb3JzO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbHRlckl0ZW1zQnlDb2xvcihpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNvbG9ycyA9IHRoaXMuZ2V0U2VsZWN0ZWRDb2xvcnMoKTtcclxuICAgICAgICBpZiAoYWN0aXZlQ29sb3JzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmluZENvbW1vbihpdGVtLmNvbG9ycywgYWN0aXZlQ29sb3JzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkSXRlbXM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmluZENvbW1vbihhcnIxLCBhcnIyKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBhcnIxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluQXJyYXkoZWwsIGFycjIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpbkFycmF5KGVsLCBhcnIpIHtcclxuICAgICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWwpICE9PSAtMTtcclxuICAgIH1cclxuICAgIC8vR2VuZGVyXHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWRHZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2o7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRHZW5kZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZW5kZXJcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkR2VuZGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEdlbmRlciA9PT0gXCJib3lcIikge1xyXG4gICAgICAgICAgICAgICAgKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3lcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgKF9iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXJsXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIChfYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdlbmRlclwiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRHZW5kZXIgPT09IFwiZ2lybFwiKSB7XHJcbiAgICAgICAgICAgICAgICAoX2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveVwiKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAoX2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpcmxcIikpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgKF9mID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2VuZGVyXCIpKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RlZEdlbmRlciA9PT0gXCJhbGwtZ2VuZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIChfZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm95XCIpKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIChfaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2lybFwiKSkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAoX2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1nZW5kZXJcIikpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdlbmRlckNsaWNrSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2VuZGVyXCIsIGVsZW1lbnQuaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRHZW5kZXIoKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldEdlbmRlcnNDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBib3lzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3lcIik7XHJcbiAgICAgICAgY29uc3QgZ2lybHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpcmxcIik7XHJcbiAgICAgICAgY29uc3QgYWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2VuZGVyXCIpO1xyXG4gICAgICAgIGJveXNCdXR0b24gPT09IG51bGwgfHwgYm95c0J1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm95c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuZ2VuZGVyQ2xpY2tIYW5kbGVyKGUpKTtcclxuICAgICAgICBnaXJsc0J1dHRvbiA9PT0gbnVsbCB8fCBnaXJsc0J1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2lybHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmdlbmRlckNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgYWxsQnV0dG9uID09PSBudWxsIHx8IGFsbEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5nZW5kZXJDbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbHRlckl0ZW1zQnlHZW5kZXIoaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEdlbmRlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdlbmRlclwiKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRHZW5kZXIgPT09IG51bGwgfHwgc2VsZWN0ZWRHZW5kZXIgPT09IFwiYWxsLWdlbmRlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoZGFraSkgPT4gZGFraS5nZW5kZXIgPT09IHNlbGVjdGVkR2VuZGVyKTtcclxuICAgIH1cclxuICAgIC8vbWF0ZXJpYWxcclxuICAgIHN0YXRpYyBnZXRTZWxlY3RlZE1hdGVyaWFscygpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE1hdGVyaWFscyA9IFtdO1xyXG4gICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKChtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG1hdGVyaWFsKSA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRNYXRlcmlhbHM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWRNYXRlcmlhbHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRlcmlhbHMgPSB0aGlzLmdldFNlbGVjdGVkTWF0ZXJpYWxzKCk7XHJcbiAgICAgICAgc2VsZWN0ZWRNYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFsbE1hdGVyaWFsQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIC8qIGNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLW1hdGVyaWFsXCIpO1xyXG4gICAgICAgIGNvbnN0IHN5bnRoZXRpY0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ludGhldGljXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvdHRvbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY290dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IHBsdXNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzaFwiKTtcclxuICAgICAgICBjb25zdCBsaW5lbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZW5cIik7ICovXHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3hlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1jaGVja2JveFwiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2tCb3hlcyk7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja0JveCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNoZWNrQm94LmlkLCBcInRydWVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBtYXRlcmlhbENoZWNrQm94Q2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjaGVja0JveC5pZCwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNoZWNrQm94LmlkLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0TWF0ZXJpYWxDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1tYXRlcmlhbFwiKTtcclxuICAgICAgICBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1jaGVja2JveFwiKTtcclxuICAgICAgICBjaGVja0JveGVzLmZvckVhY2goKGNoZWNrQm94KSA9PiBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMubWF0ZXJpYWxDaGVja0JveENsaWNrSGFuZGxlcihlKSkpO1xyXG4gICAgICAgIGFsbEJ1dHRvbiA9PT0gbnVsbCB8fCBhbGxCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hbGxNYXRlcmlhbENsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsdGVySXRlbXNCeU1hdGVyaWFsKGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRlcmlhbHMgPSB0aGlzLmdldFNlbGVjdGVkTWF0ZXJpYWxzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIvLy8vXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkTWF0ZXJpYWxzKTtcclxuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE1hdGVyaWFscy5pbmNsdWRlcyhpdGVtLm1hdGVyaWFsKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9jb21tb25cclxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZCgpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkQ29sb3JzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEdlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRNYXRlcmlhbHMoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcnNFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuc2V0UmVzZXRMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuc2V0R2VuZGVyc0NsaWNrTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRNYXRlcmlhbENsaWNrTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZUZpbHRlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbn1cclxuRmlsdGVyLmNvbG9yQ2xpY2tIYW5kbGVyID0gKGUsIGNvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbG9yKTtcclxuICAgIGNvbG9yQnV0dG9uID09PSBudWxsIHx8IGNvbG9yQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb2xvckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbG9yLCBTdHJpbmcoY29sb3JCdXR0b24gPT09IG51bGwgfHwgY29sb3JCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkpO1xyXG4gICAgLy90aGlzLmZpbHRlckJ5Q29sb3IoKTtcclxuICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb2xvcik7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiaW1wb3J0IFwiLi9oZWFkZXIuc2Nzc1wiO1xyXG5leHBvcnQgY2xhc3MgSGVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgaXRlbUNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbXHJcbiAgICBcIndoaXRlXCIsXHJcbiAgICBcImJsYWNrXCIsXHJcbiAgICBcImJsdWVcIixcclxuICAgIFwiZ3JlZW5cIixcclxuICAgIFwicGlua1wiLFxyXG4gICAgXCJyZWRcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IG1hdGVyaWFscyA9IFtcInN5bnRoZXRpY1wiLCBcImNvdHRvblwiLCBcInBsdXNoXCIsIFwibGluZW5cIl07XHJcbmNvbnN0IGRha2ltYWt1cmFzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9nZW5zaGluLUppbm4uanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDE0OTAsXHJcbiAgICAgICAgbmFtZTogXCJKaW5uXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiR2Vuc2hpbi1JbXBhY3RcIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIiwgXCJibHVlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzLzJhcnZwby01a29fMTY0MzIyNDUwMS5qcGdcIixcclxuICAgICAgICBwcmljZTogMTc5OSxcclxuICAgICAgICBuYW1lOiBcIkxldmlcIixcclxuICAgICAgICB0aXRsZTogXCJBdHRhY2sgb24gVGl0YW5cIixcclxuICAgICAgICBnZW5kZXI6IFwiYm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJsaW5lblwiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzLzMwYWRlZWM4YTc5Y2IzYWU1M2E5NDVjZGRiNThhNGQyLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMTUwLFxyXG4gICAgICAgIG5hbWU6IFwiQXlhbmFtaSBSZWlcIixcclxuICAgICAgICB0aXRsZTogXCJFdmFuZ2VsaW9uXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcIndoaXRlXCIsIFwiYmx1ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJjb3R0b25cIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy8xMzVfZGFraW1ha3VyYV9nZW5zaGluX2ltcGFjdF9rYWVkZWhhcmFfa2FkenVoYS5wbmdcIixcclxuICAgICAgICBwcmljZTogMjM1MCxcclxuICAgICAgICBuYW1lOiBcIkthZHp1aGFyYVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdlbnNoaW4gSW1wYWN0XCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wicmVkXCIsIFwid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwicGx1c2hcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9Ub2hvIFByb2plY3QgSXpheW9pIFNha3V5YS5qcGdcIixcclxuICAgICAgICBwcmljZTogMTUxMCxcclxuICAgICAgICBuYW1lOiBcIkl6YXlvaSBTYWt1eWFcIixcclxuICAgICAgICB0aXRsZTogXCJUb2hvIFByb2plY3RcIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIiwgXCJibHVlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcImxpbmVuXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9mdWxsXzIxNTQyLUdlbnNoaW4tSW1wYWN0LUh1dGFvLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMTk5LFxyXG4gICAgICAgIG5hbWU6IFwiSHV0YW9cIixcclxuICAgICAgICB0aXRsZTogXCJHZW5zaGluIEltcGFjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJyZWRcIiwgXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9Ib25va2EgS29zYWthLSBMb3ZlIExpdmUucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzOTksXHJcbiAgICAgICAgbmFtZTogXCJIb25va2EgS29zYWthXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG92ZSBMaXZlXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcInBpbmtcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9rYXp1aGEtZ2Vuc2hpbi5qcGdcIixcclxuICAgICAgICBwcmljZTogMjc5OSxcclxuICAgICAgICBuYW1lOiBcIkthZWRlaGFyYSBLYXp1aGFcIixcclxuICAgICAgICB0aXRsZTogXCJHZW5zaGluIEltcGFjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcInJlZFwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9raXJpdG8tIHN3b3JkIGFydCBvbmxpbmUucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDIwOTksXHJcbiAgICAgICAgbmFtZTogXCJLaXJpdG9cIixcclxuICAgICAgICB0aXRsZTogXCJTd29yZCBBcnQgT25saW5lXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiYmxhY2tcIiwgXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9NaWtlIHRva3lvIHJldmVuZ2UucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDEyNDksXHJcbiAgICAgICAgbmFtZTogXCJNaWtlXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVG9reW8gUmV2ZW5nZVwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcImdyZWVuXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJOb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvUmltdXJ1LSB0aGF0IHRpbWUgaSBnb3QgcmVpbmNhcm5hdGVkIGFzIGEgc2xpbWUucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDE3ODksXHJcbiAgICAgICAgbmFtZTogXCJSaW11cnVcIixcclxuICAgICAgICB0aXRsZTogXCJSZWluY2FybmF0ZWQgYXMgYSBTbGltZVwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcImJsdWVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9zYXRvcnUgZ29qby0gSnVqdXRzdSBrYWlzZW4ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDEwMDAxLFxyXG4gICAgICAgIG5hbWU6IFwiU2F0b3J1IEdvam9cIixcclxuICAgICAgICB0aXRsZTogXCJKdWp1dHN1IEthaXNlblwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcImJsYWNrXCIsIFwid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvdmlvbGV0LSBldmVyZ2FyZGVuLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMDAyLFxyXG4gICAgICAgIG5hbWU6IFwiVmlvbGV0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVmlvbGV0IEV2ZXJnYXJkZW5cIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMveXVyaSAgLSBkb2tpX2Rva2lfbGl0ZXJhdHVyZV9jbHViXy5wbmdcIixcclxuICAgICAgICBwcmljZTogMTM0OSxcclxuICAgICAgICBuYW1lOiBcIll1cmlcIixcclxuICAgICAgICB0aXRsZTogXCJEb2tpIERva2kgQ2x1YlwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJwaW5rXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJOb1wiLFxyXG4gICAgfSxcclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgZGFraW1ha3VyYXM7XHJcbiIsImltcG9ydCBEYWtpbWFrdXJhIGZyb20gXCIuLi9kYWtpbWFrdXJhL2Rha2ltYWt1cmFcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NhcnQvY2FydFwiO1xyXG5pbXBvcnQgU29ydCBmcm9tIFwiLi4vc29ydC9zb3J0XCI7XHJcbmltcG9ydCBkYWtpbWFrdXJhcyBmcm9tIFwiLi9pdGVtc0RCXCI7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2ZpbHRlcnMvZmlsdGVyc1wiO1xyXG5leHBvcnQgY2xhc3MgSXRlbXNMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhdHRlcm5zKSB7XHJcbiAgICAgICAgdGhpcy5wYXR0ZXJucyA9IHBhdHRlcm5zO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbGxQYWdlKHBhdHRlcm5zKSB7XHJcbiAgICAgICAgcGF0dGVybnMuZm9yRWFjaCgocGF0dGVybikgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGNvbnN0IGRha2ltYWt1cmEgPSBEYWtpbWFrdXJhLmNyZWF0ZURha2ltYWt1cmEocGF0dGVybik7XHJcbiAgICAgICAgICAgIChfYSA9IEl0ZW1zTGlzdC5pdGVtc0NvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZChkYWtpbWFrdXJhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBDYXJ0LnNldFNlbGVjdGVkKHBhdHRlcm5zKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRIaWRkZW4oKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBkYWtpbWFrdXJhcztcclxuICAgICAgICAvL2ZpbHRlciBieSBnZW5kZXJcclxuICAgICAgICAvL2ZpbHRlciBieSBtYXRlcmlhbFxyXG4gICAgICAgIC8vZmlsdGVyIGJ5IGNvbG9yXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRCeUNvbG9yID0gRmlsdGVyLmZpbHRlckl0ZW1zQnlDb2xvcihpdGVtcyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWtpbWFrdXJhXCIpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlsdGVyZWRCeUNvbG9yLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwubmFtZSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNsZWFySXRlbXNDb250YWluZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXNDb250YWluZXIgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIml0ZW1zIGNvbnRhaW5lciBkb2VzbnQgZXhpc3RcIik7XHJcbiAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpc3BsYXlTb3J0ZWRJdGVtcyhlbGVtZW50cykge1xyXG4gICAgICAgIHRoaXMuY2xlYXJJdGVtc0NvbnRhaW5lcigpO1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IEl0ZW1zTGlzdC5pdGVtc0NvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZChlbCk7IH0pO1xyXG4gICAgICAgIHRoaXMuc2V0SGlkZGVuKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVmcmVzaEl0ZW1zTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFySXRlbXNDb250YWluZXIoKTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRha2ltYWt1cmFzO1xyXG4gICAgICAgIGNvbnN0IHNvcnRUeXBlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29ydFwiKTtcclxuICAgICAgICAvL2dlbmRlclxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlHZW5kZXIgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeUdlbmRlcihpdGVtcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRCeUdlbmRlcik7XHJcbiAgICAgICAgLy9tYXRlcmlhbFxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlNYXRlcmlhbCA9IEZpbHRlci5maWx0ZXJJdGVtc0J5TWF0ZXJpYWwoZmlsdGVyZWRCeUdlbmRlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRCeU1hdGVyaWFsKTtcclxuICAgICAgICAvL2NvbG9yXHJcbiAgICAgICAgY29uc3QgZmluYWxseUZpbHRlcmVkID0gRmlsdGVyLmZpbHRlckl0ZW1zQnlDb2xvcihmaWx0ZXJlZEJ5TWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmIChzb3J0VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBTb3J0LnNvcnRCeVR5cGUoZmluYWxseUZpbHRlcmVkLCBzb3J0VHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFBhZ2Uoc29ydGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZpbGxQYWdlKGZpbmFsbHlGaWx0ZXJlZCk7XHJcbiAgICB9XHJcbn1cclxuSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtc1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0O1xyXG4iLCJpbXBvcnQgZGFraW1ha3VyYXMgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0RCXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuaW1wb3J0IFwiLi9zb3J0LnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIFNvcnQge1xyXG4gICAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHByaWNlSGlnaGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaGVzdFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUxvd2VzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93ZXN0XCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVBeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQS1aXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVaYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiWi1BXCIpO1xyXG4gICAgICAgIHByaWNlSGlnaGVzdCA9PT0gbnVsbCB8fCBwcmljZUhpZ2hlc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByaWNlSGlnaGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlQcmljZUhhbmRsZXIoXCJoaWdoZXN0XCIpKTtcclxuICAgICAgICBwcmljZUxvd2VzdCA9PT0gbnVsbCB8fCBwcmljZUxvd2VzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJpY2VMb3dlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydEJ5UHJpY2VIYW5kbGVyKFwibG93ZXN0XCIpKTtcclxuICAgICAgICBuYW1lQXogPT09IG51bGwgfHwgbmFtZUF6ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lQXouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydEJ5TmFtZUhhbmRsZXIoXCJBLVpcIikpO1xyXG4gICAgICAgIG5hbWVaYSA9PT0gbnVsbCB8fCBuYW1lWmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVaYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlOYW1lSGFuZGxlcihcIlotQVwiKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0Tm90SGlkZGVuSXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFraW1ha3VyYVwiKSk7XHJcbiAgICAgICAgY29uc3Qgbm90SGlkZGVuSXRlbXMgPSBhbGxJdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIi5oaWRkZW5cIikpO1xyXG4gICAgICAgIHJldHVybiBub3RIaWRkZW5JdGVtcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBzb3J0QnlQcmljZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImxvd2VzdFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5wcmljZSAtIGEucHJpY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5TmFtZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lcyA9IFtdO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGVsKSA9PiBpdGVtTmFtZXMucHVzaChlbC5uYW1lKSk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiQS1aXCIpXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lcy5zb3J0KCkuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LnB1c2goZGFraW1ha3VyYXMuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwubmFtZSA9PT0gaXRlbTtcclxuICAgICAgICAgICAgfSlbMF0pKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRCeVR5cGUoaXRlbXMsIHR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJoaWdoZXN0XCIgfHwgdHlwZSA9PT0gXCJsb3dlc3RcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5UHJpY2UoaXRlbXMsIHR5cGUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5TmFtZShpdGVtcywgdHlwZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5UHJpY2VIYW5kbGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtcyA9IHRoaXMuZ2V0Tm90SGlkZGVuSXRlbXMoKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3J0XCIsIHR5cGUpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZEVsZW1lbnRzID0gbm90SGlkZGVuSXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBjb25zdCBhUHJpY2UgPSBkYWtpbWFrdXJhcy5maWx0ZXIoKGRha2ltYWt1cmEpID0+IGRha2ltYWt1cmEubmFtZSA9PT0gYS5pZClbMF0ucHJpY2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGJQcmljZSA9IGRha2ltYWt1cmFzLmZpbHRlcigoZGFraW1ha3VyYSkgPT4gZGFraW1ha3VyYS5uYW1lID09PSBiLmlkKVswXS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwibG93ZXN0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYVByaWNlIC0gYlByaWNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYlByaWNlIC0gYVByaWNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5kaXNwbGF5U29ydGVkSXRlbXMoc29ydGVkRWxlbWVudHMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRCeU5hbWVIYW5kbGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtcyA9IHRoaXMuZ2V0Tm90SGlkZGVuSXRlbXMoKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3J0XCIsIHR5cGUpO1xyXG4gICAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zTmFtZXMgPSBbXTtcclxuICAgICAgICBub3RIaWRkZW5JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBub3RIaWRkZW5JdGVtc05hbWVzLnB1c2goaXRlbS5pZCkpO1xyXG4gICAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zTmFtZXNTb3J0ZWQgPSB0eXBlID09PSBcIkEtWlwiXHJcbiAgICAgICAgICAgID8gbm90SGlkZGVuSXRlbXNOYW1lcy5zb3J0KClcclxuICAgICAgICAgICAgOiBub3RIaWRkZW5JdGVtc05hbWVzLnNvcnQoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm90SGlkZGVuSXRlbXNOYW1lc1NvcnRlZCk7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRWxlbWVudHMgPSBbXTtcclxuICAgICAgICBub3RIaWRkZW5JdGVtc05hbWVzU29ydGVkLmZvckVhY2goKGl0ZW1OYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHNvcnRlZEVsZW1lbnRzLnB1c2gobm90SGlkZGVuSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtTmFtZSlbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5kaXNwbGF5U29ydGVkSXRlbXMoc29ydGVkRWxlbWVudHMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLmRhdGUudG9KU09OKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IERha2ltYWt1cmEgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFraW1ha3VyYS9kYWtpbWFrdXJhXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5pbXBvcnQgZGFraW1ha3VyYXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zREJcIjtcclxuaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udHJvbGxlci9wYWdlTG9hZGVyXCI7XHJcbmltcG9ydCBcIi4uL2dsb2JhbC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvY2FydC9hbGVydC5zY3NzXCI7XHJcbmNvbnN0IGl0ZW0gPSBuZXcgSXRlbShcImRha2ltYWt1cmFcIik7XHJcbmNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIoXCJTb2Z0eVwiKTtcclxuY29uc3QgZmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG5jb25zdCBkYWtpbWFrdXJhID0gbmV3IERha2ltYWt1cmEoKTtcclxuY29uc3QgaXRlbXNMaXN0ID0gbmV3IEl0ZW1zTGlzdChkYWtpbWFrdXJhcyk7XHJcblBhZ2VMb2FkZXIubG9hZFBhZ2UoKTtcclxuY29uc29sZS5sb2coXCJJdGVtIHRvIFN0cmluZzogXCIsIGl0ZW0udG9TdHJpbmcoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==