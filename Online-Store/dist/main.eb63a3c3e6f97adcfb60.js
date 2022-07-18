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
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].setColorsEventListeners();
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].setSelectedColors();
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
/* harmony import */ var _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../itemsList/itemsDB */ "./src/components/itemsList/itemsDB.ts");
/* harmony import */ var _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");
/* harmony import */ var _filters_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.scss */ "./src/components/filters/filters.scss");



class Filter {
    static setSelectedColors() {
        _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_0__.colors.forEach((color) => {
            var _a;
            if (window.localStorage.getItem(color) === "true")
                (_a = document.getElementById(color)) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        });
    }
    static setColorsEventListeners() {
        var _a;
        (_a = document.querySelectorAll(".color-btn")) === null || _a === void 0 ? void 0 : _a.forEach((el) => {
            el.addEventListener("click", (e) => this.colorClickHandler(e, el.id));
        });
    }
    static getSelectedColors() {
        const activeColors = [];
        Array.from(document.querySelectorAll(".color-btn")).forEach((button) => {
            if (button.classList.contains("active"))
                activeColors.push(button.id);
        });
        return activeColors;
    }
    /* static filterByColor() {
      const notHiddenItems = Sort.getNotHiddenItems();
      const activeColors = this.getSelectedColors();
      const filteredItems = notHiddenItems.filter((item) => {
        const itemPattern = dakimakuras.filter(
          (dakimakura) => dakimakura.name === item.id
        )[0];
        if (this.findCommon(itemPattern.colors, activeColors).length > 0)
          return true;
      });
      ItemsList.refreshItemsList(filteredItems);
    } */
    static filterItemsByColor(items) {
        const activeColors = this.getSelectedColors();
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
}
Filter.colorClickHandler = (e, color) => {
    const colorButton = document.getElementById(color);
    colorButton === null || colorButton === void 0 ? void 0 : colorButton.classList.toggle("active");
    window.localStorage.setItem(color, String(colorButton === null || colorButton === void 0 ? void 0 : colorButton.classList.contains("active")));
    //this.filterByColor();
    _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__["default"].refreshItemsList();
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const colors = [
    "white",
    "black",
    "blue",
    "green",
    "pink",
    "red",
];
const dakimakuras = [
    {
        imgSrc: "./images/genshin-Jinn.jpg",
        price: 1490,
        name: "Jinn",
        title: "Genshin-Impact",
        gender: "Girl",
        colors: ["white", "blue"],
        material: "Synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/2arvpo-5ko_1643224501.jpg",
        price: 1799,
        name: "Levi",
        title: "Attack on Titan",
        gender: "Boy",
        colors: ["white"],
        material: "Linen",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/30adeec8a79cb3ae53a945cddb58a4d2.jpg",
        price: 2150,
        name: "Ayanami Rei",
        title: "Evangelion",
        gender: "Girl",
        colors: ["white", "blue"],
        material: "Cotton",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/135_dakimakura_genshin_impact_kaedehara_kadzuha.png",
        price: 2350,
        name: "Kadzuhara",
        title: "Genshin Impact",
        gender: "Boy",
        colors: ["red", "white"],
        material: "Plush",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/Toho Project Izayoi Sakuya.jpg",
        price: 1510,
        name: "Izayoi Sakuya",
        title: "Toho Project",
        gender: "Girl",
        colors: ["white", "blue"],
        material: "Linen",
        isPopular: "No",
    },
    {
        imgSrc: "./images/full_21542-Genshin-Impact-Hutao.jpg",
        price: 2199,
        name: "Hutao",
        title: "Genshin Impact",
        gender: "Girl",
        colors: ["red", "white"],
        material: "Synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/Honoka Kosaka- Love Live.png",
        price: 1399,
        name: "Honoka Kosaka",
        title: "Love Live",
        gender: "Girl",
        colors: ["pink"],
        material: "Synthetic",
        isPopular: "No",
    },
    {
        imgSrc: "./images/kazuha-genshin.jpg",
        price: 2799,
        name: "Kaedehara Kazuha",
        title: "Genshin Impact",
        gender: "Boy",
        colors: ["red"],
        material: "Synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/kirito- sword art online.png",
        price: 2099,
        name: "Kirito",
        title: "Sword Art Online",
        gender: "Boy",
        colors: ["black", "white"],
        material: "Synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/Mike tokyo revenge.png",
        price: 1249,
        name: "Mike",
        title: "Tokyo Revenge",
        gender: "Boy",
        colors: ["green"],
        material: "Synthetic",
        isPopular: "No",
    },
    {
        imgSrc: "./images/Rimuru- that time i got reincarnated as a slime.png",
        price: 1789,
        name: "Rimuru",
        title: "Reincarnated as a Slime",
        gender: "Boy",
        colors: ["blue"],
        material: "Synthetic",
        isPopular: "No",
    },
    {
        imgSrc: "./images/satoru gojo- Jujutsu kaisen.png",
        price: 10001,
        name: "Satoru Gojo",
        title: "Jujutsu Kaisen",
        gender: "Boy",
        colors: ["black", "white"],
        material: "Synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/violet- evergarden.png",
        price: 2002,
        name: "Violet",
        title: "Violet Evergarden",
        gender: "Girl",
        colors: ["white"],
        material: "Synthetic",
        isPopular: "Yes",
    },
    {
        imgSrc: "./images/yuri  - doki_doki_literature_club_.png",
        price: 1349,
        name: "Yuri",
        title: "Doki Doki Club",
        gender: "Girl",
        colors: ["pink"],
        material: "Synthetic",
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
        //material
        //color
        const finallyFiltered = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByColor(items);
        console.log(finallyFiltered);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMscUVBQVc7QUFDM0Msa0ZBQW1CO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9hbGVydC5zY3NzPzQxYTMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZGFraW1ha3VyYS9kYWtpbWFrdXJhLnNjc3M/NWFiZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuc2Nzcz8zYzhjIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzcz85YmZiIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2l0ZW1zTGlzdC9pdGVtc0xpc3Quc2Nzcz8xZWE5Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NvcnQvc29ydC5zY3NzPzIwMWEiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5zY3NzPzgxOGYiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvcGFnZUxvYWRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9kYWtpbWFrdXJhL2Rha2ltYWt1cmEudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zREIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zb3J0L3NvcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvSXRlbS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY2xhc3MgQ2FydCB7XHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWQoZGFraW1ha3VyYXMpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zSWQgPSBbXTtcclxuICAgICAgICBkYWtpbWFrdXJhcy5mb3JFYWNoKChkYWtpbWFrdXJhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7ZGFraW1ha3VyYS5uYW1lfWApID09PSBcInNlbGVjdGVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXNJZC5wdXNoKGRha2ltYWt1cmEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZERha2ltYWt1cmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYWtpbWFrdXJhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRCb29rbWFyayA9IHNlbGVjdGVkRGFraW1ha3VyYSA9PT0gbnVsbCB8fCBzZWxlY3RlZERha2ltYWt1cmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkRGFraW1ha3VyYS5xdWVyeVNlbGVjdG9yKFwiLmJvb2ttYXJrX3NlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2Rha2ltYWt1cmEubmFtZX1gKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRCb29rbWFyayAhPT0gbnVsbCAmJiBzZWxlY3RlZEJvb2ttYXJrICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyLW51bWJlclwiKTtcclxuICAgICAgICBpZiAoY291bnRlciAhPT0gdW5kZWZpbmVkICYmIGNvdW50ZXIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYCR7c2VsZWN0ZWRJdGVtc0lkLmxlbmd0aH1gO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1zSWQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2VuZEFsZXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVyMjAtYWxlcnRcIik7XHJcbiAgICAgICAgaWYgKCEoYWxlcnQgPT09IG51bGwgfHwgYWxlcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsZXJ0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkpIHtcclxuICAgICAgICAgICAgYWxlcnQgPT09IG51bGwgfHwgYWxlcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsZXJ0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGFsZXJ0ID09PSBudWxsIHx8IGFsZXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhbGVydC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpLCA1MDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwiaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vZmlsdGVycy9maWx0ZXJzXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuaW1wb3J0IFNvcnQgZnJvbSBcIi4uL3NvcnQvc29ydFwiO1xyXG5leHBvcnQgY2xhc3MgUGFnZUxvYWRlciB7XHJcbiAgICBzdGF0aWMgbG9hZFBhZ2UoKSB7XHJcbiAgICAgICAgLy9JdGVtc0xpc3QuZmlsbFBhZ2UoZGFraW1ha3VyYXMpO1xyXG4gICAgICAgIFNvcnQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICBGaWx0ZXIuc2V0Q29sb3JzRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICBGaWx0ZXIuc2V0U2VsZWN0ZWRDb2xvcnMoKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2FkZXI7XHJcbiIsImltcG9ydCBDYXJ0IGZyb20gXCIuLi9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IFwiLi9kYWtpbWFrdXJhLnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIERha2ltYWt1cmEge1xyXG4gICAgc3RhdGljIGRha2ltYWt1cmFDbGlja0xpc3RlbmVyKGlkKSB7XHJcbiAgICAgICAgQ2FydC5zZW5kQWxlcnQoKTtcclxuICAgICAgICBjb25zdCBjbGlja2VkRGFraW1ha3VyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXItbnVtYmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQm9va21hcmsgPSBjbGlja2VkRGFraW1ha3VyYSA9PT0gbnVsbCB8fCBjbGlja2VkRGFraW1ha3VyYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpY2tlZERha2ltYWt1cmEucXVlcnlTZWxlY3RvcihcIi5ib29rbWFya19zZWxlY3RlZFwiKTtcclxuICAgICAgICBjb25zdCBub3RTZWxlY3RlZEJvb2ttYXJrID0gY2xpY2tlZERha2ltYWt1cmEgPT09IG51bGwgfHwgY2xpY2tlZERha2ltYWt1cmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsaWNrZWREYWtpbWFrdXJhLnF1ZXJ5U2VsZWN0b3IoXCIuYm9va21hcmtfbm90LXNlbGVjdGVkXCIpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEJvb2ttYXJrID09PSBudWxsIHx8IHNlbGVjdGVkQm9va21hcmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQm9va21hcmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIG5vdFNlbGVjdGVkQm9va21hcmsgPT09IG51bGwgfHwgbm90U2VsZWN0ZWRCb29rbWFyayA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm90U2VsZWN0ZWRCb29rbWFyay5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpZH1gLCBgbm90LXNlbGVjdGVkYCk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIoY291bnRlciA9PT0gbnVsbCB8fCBjb3VudGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb3VudGVyLmlubmVySFRNTCkgLSAxfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEJvb2ttYXJrID09PSBudWxsIHx8IHNlbGVjdGVkQm9va21hcmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlbGVjdGVkQm9va21hcmsuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBub3RTZWxlY3RlZEJvb2ttYXJrID09PSBudWxsIHx8IG5vdFNlbGVjdGVkQm9va21hcmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vdFNlbGVjdGVkQm9va21hcmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aWR9YCwgYHNlbGVjdGVkYCk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIoY291bnRlciA9PT0gbnVsbCB8fCBjb3VudGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb3VudGVyLmlubmVySFRNTCkgKyAxfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZURha2ltYWt1cmEoaW5mbykge1xyXG4gICAgICAgIGNvbnN0IGRha2ltYWt1cmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRha2ltYWt1cmEuY2xhc3NOYW1lID0gXCJkYWtpbWFrdXJhXCI7XHJcbiAgICAgICAgZGFraW1ha3VyYS5pZCA9IGAke2luZm8ubmFtZX1gO1xyXG4gICAgICAgIGRha2ltYWt1cmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuZGFraW1ha3VyYUNsaWNrTGlzdGVuZXIoaW5mby5uYW1lKSk7XHJcbiAgICAgICAgZGFraW1ha3VyYS5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cImRha2ltYWt1cmFfX2ltZ1wiIHNyYz1cIiR7aW5mby5pbWdTcmN9XCIgYWx0PVwiZGFraS1pbWdcIj5cbiAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2Jvb2ttYXJrLnBuZ1wiIGNsYXNzPVwiYm9va21hcmsgYm9va21hcmtfbm90LXNlbGVjdGVkIHNlbGVjdGVkXCIgYWx0PVwiYm9va21hcmtcIj48L2ltZz5cbiAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2Jvb2ttYXJrLWNob29zZW4ucG5nXCIgY2xhc3M9XCJib29rbWFyayBib29rbWFya19zZWxlY3RlZFwiIGFsdD1cImJvb2ttYXJrLWNob29zZW5cIj48L2ltZz5cbiAgICA8ZGl2IGNsYXNzPVwiZGFraW1ha3VyYV9fbWFpbi1pbmZvXCI+XG4gICAgICA8YSBjbGFzcz1cImRha2ltYWt1cmFfX25hbWVcIj4ke2luZm8ubmFtZX08L2E+XG4gICAgICA8YSBjbGFzcz1cImRha2ltYWt1cmFfX3ByaWNlXCI+JHtpbmZvLnByaWNlfTxpbWcgc3JjPVwiLi9pbWFnZXMveWVuLXNpZ24ucG5nXCIgY2xhc3M9XCJkYWtpbWFrdXJhX19jdXJyZW5jeVwiIGFsdD1cImN1cnJlbmN5XCI+PC9pbWc+PC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYWtpbWFrdXJhX19kZXNjcmlwdGlvblwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhdHRyaWJ1dGVcIj5UaXRsZTogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwidGl0bGVcIj4ke2luZm8udGl0bGV9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhdHRyaWJ1dGVcIj5HZW5kZXI6IDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIiBpZD1cImdlbmRlclwiPiR7aW5mby5nZW5kZXJ9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhdHRyaWJ1dGVcIj5Db2xvcnM6IDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIiBpZD1cImNvbG9yc1wiPiR7Wy4uLmluZm8uY29sb3JzXX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPlBvcHVsYXI6IDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIiBpZD1cInBvcHVsYXJcIj4ke2luZm8uaXNQb3B1bGFyfTwvc3Bhbj5cbiAgICA8L2Rpdj5gO1xyXG4gICAgICAgIHJldHVybiBkYWtpbWFrdXJhO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERha2ltYWt1cmE7XHJcbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi9pdGVtc0xpc3QvaXRlbXNEQlwiO1xyXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gXCIuLi9pdGVtc0xpc3QvaXRlbXNMaXN0XCI7XHJcbmltcG9ydCBcIi4vZmlsdGVycy5zY3NzXCI7XHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xyXG4gICAgc3RhdGljIHNldFNlbGVjdGVkQ29sb3JzKCkge1xyXG4gICAgICAgIGNvbG9ycy5mb3JFYWNoKChjb2xvcikgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oY29sb3IpID09PSBcInRydWVcIilcclxuICAgICAgICAgICAgICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbG9yKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0Q29sb3JzRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItYnRuXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNvbG9yQ2xpY2tIYW5kbGVyKGUsIGVsLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRDb2xvcnMoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlQ29sb3JzID0gW107XHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWJ0blwiKSkuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3JzLnB1c2goYnV0dG9uLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlQ29sb3JzO1xyXG4gICAgfVxyXG4gICAgLyogc3RhdGljIGZpbHRlckJ5Q29sb3IoKSB7XHJcbiAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zID0gU29ydC5nZXROb3RIaWRkZW5JdGVtcygpO1xyXG4gICAgICBjb25zdCBhY3RpdmVDb2xvcnMgPSB0aGlzLmdldFNlbGVjdGVkQ29sb3JzKCk7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBub3RIaWRkZW5JdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtUGF0dGVybiA9IGRha2ltYWt1cmFzLmZpbHRlcihcclxuICAgICAgICAgIChkYWtpbWFrdXJhKSA9PiBkYWtpbWFrdXJhLm5hbWUgPT09IGl0ZW0uaWRcclxuICAgICAgICApWzBdO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmRDb21tb24oaXRlbVBhdHRlcm4uY29sb3JzLCBhY3RpdmVDb2xvcnMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KGZpbHRlcmVkSXRlbXMpO1xyXG4gICAgfSAqL1xyXG4gICAgc3RhdGljIGZpbHRlckl0ZW1zQnlDb2xvcihpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNvbG9ycyA9IHRoaXMuZ2V0U2VsZWN0ZWRDb2xvcnMoKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbmRDb21tb24oaXRlbS5jb2xvcnMsIGFjdGl2ZUNvbG9ycykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbmRDb21tb24oYXJyMSwgYXJyMikge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgYXJyMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbkFycmF5KGVsLCBhcnIyKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5BcnJheShlbCwgYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGVsKSAhPT0gLTE7XHJcbiAgICB9XHJcbn1cclxuRmlsdGVyLmNvbG9yQ2xpY2tIYW5kbGVyID0gKGUsIGNvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbG9yKTtcclxuICAgIGNvbG9yQnV0dG9uID09PSBudWxsIHx8IGNvbG9yQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb2xvckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbG9yLCBTdHJpbmcoY29sb3JCdXR0b24gPT09IG51bGwgfHwgY29sb3JCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkpO1xyXG4gICAgLy90aGlzLmZpbHRlckJ5Q29sb3IoKTtcclxuICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb2xvcik7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiaW1wb3J0IFwiLi9oZWFkZXIuc2Nzc1wiO1xyXG5leHBvcnQgY2xhc3MgSGVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgaXRlbUNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbXHJcbiAgICBcIndoaXRlXCIsXHJcbiAgICBcImJsYWNrXCIsXHJcbiAgICBcImJsdWVcIixcclxuICAgIFwiZ3JlZW5cIixcclxuICAgIFwicGlua1wiLFxyXG4gICAgXCJyZWRcIixcclxuXTtcclxuY29uc3QgZGFraW1ha3VyYXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2dlbnNoaW4tSmlubi5qcGdcIixcclxuICAgICAgICBwcmljZTogMTQ5MCxcclxuICAgICAgICBuYW1lOiBcIkppbm5cIixcclxuICAgICAgICB0aXRsZTogXCJHZW5zaGluLUltcGFjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJHaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwiU3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvMmFydnBvLTVrb18xNjQzMjI0NTAxLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxNzk5LFxyXG4gICAgICAgIG5hbWU6IFwiTGV2aVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkF0dGFjayBvbiBUaXRhblwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJCb3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcIkxpbmVuXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvMzBhZGVlYzhhNzljYjNhZTUzYTk0NWNkZGI1OGE0ZDIuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDIxNTAsXHJcbiAgICAgICAgbmFtZTogXCJBeWFuYW1pIFJlaVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkV2YW5nZWxpb25cIixcclxuICAgICAgICBnZW5kZXI6IFwiR2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIiwgXCJibHVlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcIkNvdHRvblwiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzLzEzNV9kYWtpbWFrdXJhX2dlbnNoaW5faW1wYWN0X2thZWRlaGFyYV9rYWR6dWhhLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMzUwLFxyXG4gICAgICAgIG5hbWU6IFwiS2FkenVoYXJhXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiR2Vuc2hpbiBJbXBhY3RcIixcclxuICAgICAgICBnZW5kZXI6IFwiQm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJyZWRcIiwgXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJQbHVzaFwiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL1RvaG8gUHJvamVjdCBJemF5b2kgU2FrdXlhLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxNTEwLFxyXG4gICAgICAgIG5hbWU6IFwiSXpheW9pIFNha3V5YVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRvaG8gUHJvamVjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJHaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwiTGluZW5cIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiTm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2Z1bGxfMjE1NDItR2Vuc2hpbi1JbXBhY3QtSHV0YW8uanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDIxOTksXHJcbiAgICAgICAgbmFtZTogXCJIdXRhb1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdlbnNoaW4gSW1wYWN0XCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcIkdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcInJlZFwiLCBcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcIlN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL0hvbm9rYSBLb3Nha2EtIExvdmUgTGl2ZS5wbmdcIixcclxuICAgICAgICBwcmljZTogMTM5OSxcclxuICAgICAgICBuYW1lOiBcIkhvbm9rYSBLb3Nha2FcIixcclxuICAgICAgICB0aXRsZTogXCJMb3ZlIExpdmVcIixcclxuICAgICAgICBnZW5kZXI6IFwiR2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wicGlua1wiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJTeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiTm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2thenVoYS1nZW5zaGluLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyNzk5LFxyXG4gICAgICAgIG5hbWU6IFwiS2FlZGVoYXJhIEthenVoYVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdlbnNoaW4gSW1wYWN0XCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcIkJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wicmVkXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcIlN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2tpcml0by0gc3dvcmQgYXJ0IG9ubGluZS5wbmdcIixcclxuICAgICAgICBwcmljZTogMjA5OSxcclxuICAgICAgICBuYW1lOiBcIktpcml0b1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIlN3b3JkIEFydCBPbmxpbmVcIixcclxuICAgICAgICBnZW5kZXI6IFwiQm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJibGFja1wiLCBcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcIlN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL01pa2UgdG9reW8gcmV2ZW5nZS5wbmdcIixcclxuICAgICAgICBwcmljZTogMTI0OSxcclxuICAgICAgICBuYW1lOiBcIk1pa2VcIixcclxuICAgICAgICB0aXRsZTogXCJUb2t5byBSZXZlbmdlXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcIkJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiZ3JlZW5cIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwiU3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9SaW11cnUtIHRoYXQgdGltZSBpIGdvdCByZWluY2FybmF0ZWQgYXMgYSBzbGltZS5wbmdcIixcclxuICAgICAgICBwcmljZTogMTc4OSxcclxuICAgICAgICBuYW1lOiBcIlJpbXVydVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlJlaW5jYXJuYXRlZCBhcyBhIFNsaW1lXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcIkJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiYmx1ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJTeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiTm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3NhdG9ydSBnb2pvLSBKdWp1dHN1IGthaXNlbi5wbmdcIixcclxuICAgICAgICBwcmljZTogMTAwMDEsXHJcbiAgICAgICAgbmFtZTogXCJTYXRvcnUgR29qb1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkp1anV0c3UgS2Fpc2VuXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcIkJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiYmxhY2tcIiwgXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJTeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy92aW9sZXQtIGV2ZXJnYXJkZW4ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDIwMDIsXHJcbiAgICAgICAgbmFtZTogXCJWaW9sZXRcIixcclxuICAgICAgICB0aXRsZTogXCJWaW9sZXQgRXZlcmdhcmRlblwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJHaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJTeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy95dXJpICAtIGRva2lfZG9raV9saXRlcmF0dXJlX2NsdWJfLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxMzQ5LFxyXG4gICAgICAgIG5hbWU6IFwiWXVyaVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkRva2kgRG9raSBDbHViXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcIkdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcInBpbmtcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwiU3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBkYWtpbWFrdXJhcztcclxuIiwiaW1wb3J0IERha2ltYWt1cmEgZnJvbSBcIi4uL2Rha2ltYWt1cmEvZGFraW1ha3VyYVwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY2FydC9jYXJ0XCI7XHJcbmltcG9ydCBTb3J0IGZyb20gXCIuLi9zb3J0L3NvcnRcIjtcclxuaW1wb3J0IGRha2ltYWt1cmFzIGZyb20gXCIuL2l0ZW1zREJcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vZmlsdGVycy9maWx0ZXJzXCI7XHJcbmV4cG9ydCBjbGFzcyBJdGVtc0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IocGF0dGVybnMpIHtcclxuICAgICAgICB0aGlzLnBhdHRlcm5zID0gcGF0dGVybnM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsbFBhZ2UocGF0dGVybnMpIHtcclxuICAgICAgICBwYXR0ZXJucy5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgY29uc3QgZGFraW1ha3VyYSA9IERha2ltYWt1cmEuY3JlYXRlRGFraW1ha3VyYShwYXR0ZXJuKTtcclxuICAgICAgICAgICAgKF9hID0gSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKGRha2ltYWt1cmEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIENhcnQuc2V0U2VsZWN0ZWQocGF0dGVybnMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldEhpZGRlbigpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRha2ltYWt1cmFzO1xyXG4gICAgICAgIC8vZmlsdGVyIGJ5IGdlbmRlclxyXG4gICAgICAgIC8vZmlsdGVyIGJ5IG1hdGVyaWFsXHJcbiAgICAgICAgLy9maWx0ZXIgYnkgY29sb3JcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEJ5Q29sb3IgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeUNvbG9yKGl0ZW1zKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRha2ltYWt1cmFcIikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmaWx0ZXJlZEJ5Q29sb3IuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5uYW1lKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xlYXJJdGVtc0NvbnRhaW5lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtc0NvbnRhaW5lciA9PT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaXRlbXMgY29udGFpbmVyIGRvZXNudCBleGlzdFwiKTtcclxuICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlzcGxheVNvcnRlZEl0ZW1zKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1zQ29udGFpbmVyKCk7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKGVsKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRIaWRkZW4oKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZWZyZXNoSXRlbXNMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJJdGVtc0NvbnRhaW5lcigpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGFraW1ha3VyYXM7XHJcbiAgICAgICAgY29uc3Qgc29ydFR5cGUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpO1xyXG4gICAgICAgIC8vZ2VuZGVyXHJcbiAgICAgICAgLy9tYXRlcmlhbFxyXG4gICAgICAgIC8vY29sb3JcclxuICAgICAgICBjb25zdCBmaW5hbGx5RmlsdGVyZWQgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeUNvbG9yKGl0ZW1zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaW5hbGx5RmlsdGVyZWQpO1xyXG4gICAgICAgIGlmIChzb3J0VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBTb3J0LnNvcnRCeVR5cGUoZmluYWxseUZpbHRlcmVkLCBzb3J0VHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFBhZ2Uoc29ydGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZpbGxQYWdlKGZpbmFsbHlGaWx0ZXJlZCk7XHJcbiAgICB9XHJcbn1cclxuSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtc1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0O1xyXG4iLCJpbXBvcnQgZGFraW1ha3VyYXMgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0RCXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuaW1wb3J0IFwiLi9zb3J0LnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIFNvcnQge1xyXG4gICAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHByaWNlSGlnaGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaGVzdFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUxvd2VzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93ZXN0XCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVBeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQS1aXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVaYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiWi1BXCIpO1xyXG4gICAgICAgIHByaWNlSGlnaGVzdCA9PT0gbnVsbCB8fCBwcmljZUhpZ2hlc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByaWNlSGlnaGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlQcmljZUhhbmRsZXIoXCJoaWdoZXN0XCIpKTtcclxuICAgICAgICBwcmljZUxvd2VzdCA9PT0gbnVsbCB8fCBwcmljZUxvd2VzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJpY2VMb3dlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydEJ5UHJpY2VIYW5kbGVyKFwibG93ZXN0XCIpKTtcclxuICAgICAgICBuYW1lQXogPT09IG51bGwgfHwgbmFtZUF6ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lQXouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydEJ5TmFtZUhhbmRsZXIoXCJBLVpcIikpO1xyXG4gICAgICAgIG5hbWVaYSA9PT0gbnVsbCB8fCBuYW1lWmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVaYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlOYW1lSGFuZGxlcihcIlotQVwiKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0Tm90SGlkZGVuSXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFraW1ha3VyYVwiKSk7XHJcbiAgICAgICAgY29uc3Qgbm90SGlkZGVuSXRlbXMgPSBhbGxJdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIi5oaWRkZW5cIikpO1xyXG4gICAgICAgIHJldHVybiBub3RIaWRkZW5JdGVtcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBzb3J0QnlQcmljZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImxvd2VzdFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5wcmljZSAtIGEucHJpY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5TmFtZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lcyA9IFtdO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGVsKSA9PiBpdGVtTmFtZXMucHVzaChlbC5uYW1lKSk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiQS1aXCIpXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lcy5zb3J0KCkuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LnB1c2goZGFraW1ha3VyYXMuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwubmFtZSA9PT0gaXRlbTtcclxuICAgICAgICAgICAgfSlbMF0pKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRCeVR5cGUoaXRlbXMsIHR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJoaWdoZXN0XCIgfHwgdHlwZSA9PT0gXCJsb3dlc3RcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5UHJpY2UoaXRlbXMsIHR5cGUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5TmFtZShpdGVtcywgdHlwZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5UHJpY2VIYW5kbGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtcyA9IHRoaXMuZ2V0Tm90SGlkZGVuSXRlbXMoKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3J0XCIsIHR5cGUpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZEVsZW1lbnRzID0gbm90SGlkZGVuSXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBjb25zdCBhUHJpY2UgPSBkYWtpbWFrdXJhcy5maWx0ZXIoKGRha2ltYWt1cmEpID0+IGRha2ltYWt1cmEubmFtZSA9PT0gYS5pZClbMF0ucHJpY2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGJQcmljZSA9IGRha2ltYWt1cmFzLmZpbHRlcigoZGFraW1ha3VyYSkgPT4gZGFraW1ha3VyYS5uYW1lID09PSBiLmlkKVswXS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwibG93ZXN0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYVByaWNlIC0gYlByaWNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYlByaWNlIC0gYVByaWNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5kaXNwbGF5U29ydGVkSXRlbXMoc29ydGVkRWxlbWVudHMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRCeU5hbWVIYW5kbGVyKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtcyA9IHRoaXMuZ2V0Tm90SGlkZGVuSXRlbXMoKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3J0XCIsIHR5cGUpO1xyXG4gICAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zTmFtZXMgPSBbXTtcclxuICAgICAgICBub3RIaWRkZW5JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBub3RIaWRkZW5JdGVtc05hbWVzLnB1c2goaXRlbS5pZCkpO1xyXG4gICAgICAgIGNvbnN0IG5vdEhpZGRlbkl0ZW1zTmFtZXNTb3J0ZWQgPSB0eXBlID09PSBcIkEtWlwiXHJcbiAgICAgICAgICAgID8gbm90SGlkZGVuSXRlbXNOYW1lcy5zb3J0KClcclxuICAgICAgICAgICAgOiBub3RIaWRkZW5JdGVtc05hbWVzLnNvcnQoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm90SGlkZGVuSXRlbXNOYW1lc1NvcnRlZCk7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRWxlbWVudHMgPSBbXTtcclxuICAgICAgICBub3RIaWRkZW5JdGVtc05hbWVzU29ydGVkLmZvckVhY2goKGl0ZW1OYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHNvcnRlZEVsZW1lbnRzLnB1c2gobm90SGlkZGVuSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtTmFtZSlbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5kaXNwbGF5U29ydGVkSXRlbXMoc29ydGVkRWxlbWVudHMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLmRhdGUudG9KU09OKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IERha2ltYWt1cmEgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGFraW1ha3VyYS9kYWtpbWFrdXJhXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdFwiO1xyXG5pbXBvcnQgZGFraW1ha3VyYXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zREJcIjtcclxuaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udHJvbGxlci9wYWdlTG9hZGVyXCI7XHJcbmltcG9ydCBcIi4uL2dsb2JhbC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvY2FydC9hbGVydC5zY3NzXCI7XHJcbmNvbnN0IGl0ZW0gPSBuZXcgSXRlbShcImRha2ltYWt1cmFcIik7XHJcbmNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIoXCJTb2Z0eVwiKTtcclxuY29uc3QgZmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG5jb25zdCBkYWtpbWFrdXJhID0gbmV3IERha2ltYWt1cmEoKTtcclxuY29uc3QgaXRlbXNMaXN0ID0gbmV3IEl0ZW1zTGlzdChkYWtpbWFrdXJhcyk7XHJcblBhZ2VMb2FkZXIubG9hZFBhZ2UoKTtcclxuY29uc29sZS5sb2coXCJJdGVtIHRvIFN0cmluZzogXCIsIGl0ZW0udG9TdHJpbmcoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==