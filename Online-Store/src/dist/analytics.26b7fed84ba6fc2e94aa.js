"use strict";
(self["webpackChunkonline_store"] = self["webpackChunkonline_store"] || []).push([["analytics"],{

/***/ "./src/scripts/analytics.ts":
/*!**********************************!*\
  !*** ./src/scripts/analytics.ts ***!
  \**********************************/
/***/ (() => {


function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;
    const listener = () => counter++;
    document.addEventListener("click", listener);
    return {
        destroy() {
            document.removeEventListener("click", listener);
            isDestroyed = true;
        },
        getClicks() {
            if (isDestroyed) {
                return `Analytics is destroyed. Total clicks: ${counter}`;
            }
            return counter;
        },
    };
}
window.analytics = createAnalytics();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/analytics.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLjI2YjdmZWQ4NGJhNmZjMmU5NGFhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnRUFBZ0UsUUFBUTtBQUN4RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHRzL2FuYWx5dGljcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gY3JlYXRlQW5hbHl0aWNzKCkge1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgbGV0IGlzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IGNvdW50ZXIrKztcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaXN0ZW5lcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldENsaWNrcygpIHtcclxuICAgICAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYEFuYWx5dGljcyBpcyBkZXN0cm95ZWQuIFRvdGFsIGNsaWNrczogJHtjb3VudGVyfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxud2luZG93LmFuYWx5dGljcyA9IGNyZWF0ZUFuYWx5dGljcygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=