(self["webpackChunkonline_store"] = self["webpackChunkonline_store"] || []).push([["slider"],{

/***/ "./node_modules/nouislider/dist/nouislider.scss":
/*!******************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/dakimakura/dakimakura.scss":
/*!***************************************************!*\
  !*** ./src/components/dakimakura/dakimakura.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/filters/filters.scss":
/*!*********************************************!*\
  !*** ./src/components/filters/filters.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/sort/sort.scss":
/*!***************************************!*\
  !*** ./src/components/sort/sort.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/slider.scss":
/*!********************************!*\
  !*** ./src/styles/slider.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                });
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                });
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) {
                to = scope_Spectrum.getStep(to);
            }
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state =
                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips, // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize,
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports["default"] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./src/components/cart/cart.ts":
/*!*************************************!*\
  !*** ./src/components/cart/cart.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
        window.localStorage.setItem("input-0", "0");
        window.localStorage.setItem("input-1", "10001");
        _filters_filters__WEBPACK_IMPORTED_MODULE_0__["default"].setSelected();
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__["default"].refreshItemsList();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersController);


/***/ }),

/***/ "./src/components/dakimakura/dakimakura.ts":
/*!*************************************************!*\
  !*** ./src/components/dakimakura/dakimakura.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dakimakura": () => (/* binding */ Dakimakura),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cart_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart/cart */ "./src/components/cart/cart.ts");
/* harmony import */ var _dakimakura_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dakimakura.scss */ "./src/components/dakimakura/dakimakura.scss");


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
            if (Number(localStorageCounter) >= 10) {
                _cart_cart__WEBPACK_IMPORTED_MODULE_0__["default"].sendAlert();
                return;
            }
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
      <span class="attribute">Material: </span>
      <span class="value" id="popular">${info.material}</span>
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filter": () => (/* binding */ Filter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/slider */ "./src/scripts/slider.ts");
/* harmony import */ var _controller_FiltersController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/FiltersController */ "./src/components/controller/FiltersController.ts");
/* harmony import */ var _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../itemsList/itemsDB */ "./src/components/itemsList/itemsDB.ts");
/* harmony import */ var _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");
/* harmony import */ var _filters_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters.scss */ "./src/components/filters/filters.scss");





class Filter {
    //Reset
    static setResetListener() {
        const reset = document.querySelector(".reset-button");
        reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", _controller_FiltersController__WEBPACK_IMPORTED_MODULE_1__["default"].resetFilters);
    }
    //Colors
    static setSelectedColors() {
        _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_2__.colors.forEach((color) => {
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
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__["default"].refreshItemsList();
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
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__["default"].refreshItemsList();
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
        _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_2__.materials.forEach((material) => {
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
        //console.log(checkBoxes);
        checkBoxes.forEach((checkBox) => {
            checkBox.checked = true;
            window.localStorage.setItem(checkBox.id, "true");
        });
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__["default"].refreshItemsList();
    }
    static materialCheckBoxClickHandler(event) {
        const checkBox = event.target;
        if (checkBox.checked)
            window.localStorage.setItem(checkBox.id, "true");
        else
            window.localStorage.setItem(checkBox.id, "false");
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__["default"].refreshItemsList();
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
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__["default"].refreshItemsList();
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
    //priceRange
    static setPriceRangeValues() {
        const input0LocalValue = window.localStorage.getItem("input-0");
        const input1LocalValue = window.localStorage.getItem("input-1");
        const minPrice = input0LocalValue !== null ? input0LocalValue : "0";
        const maxPrice = input1LocalValue !== null ? input1LocalValue : "10001";
        (0,_scripts_slider__WEBPACK_IMPORTED_MODULE_0__.setSliderValues)(Number(minPrice), Number(maxPrice));
    }
    static filterByPriceRange(items) {
        const input0 = document.getElementById("input-0");
        const input1 = document.getElementById("input-1");
        if (input0 === null || input1 === null)
            return items;
        const minPrice = Number(input0.value);
        const maxPrice = Number(input1.value);
        //console.log(minPrice);
        //console.log(maxPrice);
        return items.filter((item) => item.price >= minPrice && item.price <= maxPrice);
    }
    //common
    static setSelected() {
        this.setSelectedColors();
        this.setSelectedGender();
        this.setSelectedMaterials();
        this.setOnlyPopular();
        this.setPriceRangeValues();
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
    _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__["default"].refreshItemsList();
    //console.log(color);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);


/***/ }),

/***/ "./src/components/itemsList/itemsDB.ts":
/*!*********************************************!*\
  !*** ./src/components/itemsList/itemsDB.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
        //console.log(filteredByGender);
        //material
        const filteredByMaterial = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByMaterial(filteredByGender);
        //console.log(filteredByMaterial);
        //popular
        const filteredByPopular = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterByPopular(filteredByMaterial);
        //console.log(filteredByPopular);
        //priceRange
        const filteredByPriceRange = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterByPriceRange(filteredByPopular);
        //color
        const finallyFiltered = _filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"].filterItemsByColor(filteredByPriceRange);
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

"use strict";
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

"use strict";
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
        const itemNames = items.map((el) => el.name);
        const sortedItemNames = type === "A-Z" ? itemNames.sort() : itemNames.sort().reverse();
        return sortedItemNames.map((itemName) => _itemsList_itemsDB__WEBPACK_IMPORTED_MODULE_0__["default"].filter((dakimakura) => dakimakura.name === itemName)[0]);
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
        //console.log(notHiddenItemsNamesSorted);
        const sortedElements = [];
        notHiddenItemsNamesSorted.forEach((itemName) => {
            sortedElements.push(notHiddenItems.filter((item) => item.id === itemName)[0]);
        });
        _itemsList_itemsList__WEBPACK_IMPORTED_MODULE_1__["default"].displaySortedItems(sortedElements);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sort);


/***/ }),

/***/ "./src/scripts/slider.ts":
/*!*******************************!*\
  !*** ./src/scripts/slider.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSliderValues": () => (/* binding */ setSliderValues)
/* harmony export */ });
/* harmony import */ var _node_modules_nouislider_dist_nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/nouislider/dist/nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var _node_modules_nouislider_dist_nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nouislider_dist_nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider_dist_nouislider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider/dist/nouislider.scss */ "./node_modules/nouislider/dist/nouislider.scss");
/* harmony import */ var _styles_slider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/slider.scss */ "./src/styles/slider.scss");
/* harmony import */ var _components_itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/itemsList/itemsList */ "./src/components/itemsList/itemsList.ts");




const slider = document.getElementById("slider");
/* function sliderUpdateHandler(input0Value: string, input1Value: string) {

} */
function sliderChangeHandler(input0Value, input1Value) {
    //console.log("slider-change-event");
    window.localStorage.setItem("input-0", input0Value);
    window.localStorage.setItem("input-1", input1Value);
    _components_itemsList_itemsList__WEBPACK_IMPORTED_MODULE_3__["default"].refreshItemsList();
}
function setSliderValues(value0, value1) {
    if (slider.noUiSlider)
        slider.noUiSlider.set([value0, value1]);
}
if (slider) {
    _node_modules_nouislider_dist_nouislider__WEBPACK_IMPORTED_MODULE_0__.create(slider, {
        start: [0, 10001],
        connect: true,
        step: 1,
        range: {
            min: [0],
            max: [10001],
        },
    });
    const input0 = document.getElementById("input-0");
    const input1 = document.getElementById("input-1");
    const inputs = [input0, input1];
    if (slider.noUiSlider !== undefined) {
        slider.noUiSlider.on("update", function (values, handle) {
            inputs[handle].value = String(Math.round(Number(values[handle])));
            //sliderUpdateHandler(String(values[0]), String(values[1]));
        });
        slider.noUiSlider.on("change", function (values) {
            sliderChangeHandler(String(values[0]), String(values[1]));
        });
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/slider.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLjk3ODRlZDlmYjdhMTUwZjkwNjM3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBSSxLQUE0RDtBQUNoRSxJQUFJLENBQzJHO0FBQy9HLENBQUMsOEJBQThCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNENBQTRDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxzQ0FBc0MseUNBQXlDO0FBQy9FLGtDQUFrQyxxQ0FBcUM7QUFDdkUsbUNBQW1DLHNDQUFzQztBQUN6RSxxQkFBcUIsdUJBQXVCO0FBQzVDLHVCQUF1Qix5QkFBeUI7QUFDaEQseUJBQXlCLDJCQUEyQjtBQUNwRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHVCQUF1QiwwQkFBMEI7QUFDakQsaUNBQWlDLG9DQUFvQztBQUNyRSxxQkFBcUIsdUJBQXVCO0FBQzVDLDJCQUEyQiw4QkFBOEI7QUFDekQsc0JBQXNCLHlCQUF5QjtBQUMvQyxxQkFBcUIsd0JBQXdCO0FBQzdDLHVCQUF1QiwwQkFBMEI7QUFDakQseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNkJBQTZCO0FBQ3ZELHNCQUFzQix5QkFBeUI7QUFDL0Msd0JBQXdCLDJCQUEyQjtBQUNuRCwrQkFBK0IsaUNBQWlDO0FBQ2hFLCtCQUErQixrQ0FBa0M7QUFDakUseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNEJBQTRCO0FBQ3RELGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGdCQUFnQjtBQUNoRztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsYUFBYTs7QUFFaEUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3c0VNO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZ0JBQWdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUNBQW1DLCtDQUErQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCb0I7QUFDTztBQUN4QztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQXVCO0FBQy9CLFFBQVEsNEVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBa0I7QUFDMUIsUUFBUSw2RUFBMEI7QUFDbEM7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQ0w7QUFDcEI7QUFDUDtBQUNBO0FBQ0EsNkRBQTZELEdBQUc7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEdBQUc7QUFDOUM7QUFDQTtBQUNBLHVDQUF1QywrQ0FBK0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEdBQUc7QUFDOUM7QUFDQTtBQUNBLHVDQUF1QywrQ0FBK0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0Esb0VBQW9FLFlBQVk7QUFDaEY7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUMscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBLHdDQUF3QyxpQkFBaUI7QUFDekQ7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUQ2QjtBQUNTO0FBQ1A7QUFDVjtBQUN2QjtBQUNqQjtBQUNQO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixrRkFBOEI7QUFDcEg7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2RUFBMEI7QUFDOUI7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFBmO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SnVCO0FBQ2xCO0FBQ0E7QUFDSTtBQUNJO0FBQ0Y7QUFDL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0VBQTJCO0FBQzFEO0FBQ0EsU0FBUztBQUNULFFBQVEsOERBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyRUFBeUI7QUFDekQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRLDRGQUE0RjtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnREFBVztBQUN6RDtBQUNBO0FBQ0Esc0NBQXNDLDBFQUEwQjtBQUNoRTtBQUNBLGlDQUFpQyw0RUFBMEI7QUFDM0Q7QUFDQTtBQUNBLG1DQUFtQyw4RUFBNEI7QUFDL0Q7QUFDQTtBQUNBLGtDQUFrQyx3RUFBc0I7QUFDeEQ7QUFDQTtBQUNBLHFDQUFxQywyRUFBeUI7QUFDOUQ7QUFDQSxnQ0FBZ0MsMkVBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZEQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRnNCO0FBQ3hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0J5QjtBQUNBO0FBQzFCO0FBQ2Q7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUVBQWtCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUVBQWtCO0FBQzdDLDJCQUEyQixpRUFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSwrRUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSwrRUFBNEI7QUFDcEM7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkV3RDtBQUNuQztBQUNWO0FBQzJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0ZBQTBCO0FBQzlCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLnNjc3M/MDUwOCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9kYWtpbWFrdXJhL2Rha2ltYWt1cmEuc2Nzcz81YWJkIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5zY3NzPzNjOGMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc29ydC9zb3J0LnNjc3M/MjAxYSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc3R5bGVzL3NsaWRlci5zY3NzP2NmYTQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQvY2FydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL0ZpbHRlcnNDb250cm9sbGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Rha2ltYWt1cmEvZGFraW1ha3VyYS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zREIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaXRlbXNMaXN0L2l0ZW1zTGlzdC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NvcnQvc29ydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9zbGlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5ub1VpU2xpZGVyID0ge30pKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgICBleHBvcnRzLlBpcHNNb2RlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc01vZGUpIHtcbiAgICAgICAgUGlwc01vZGVbXCJSYW5nZVwiXSA9IFwicmFuZ2VcIjtcbiAgICAgICAgUGlwc01vZGVbXCJTdGVwc1wiXSA9IFwic3RlcHNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJQb3NpdGlvbnNcIl0gPSBcInBvc2l0aW9uc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIkNvdW50XCJdID0gXCJjb3VudFwiO1xuICAgICAgICBQaXBzTW9kZVtcIlZhbHVlc1wiXSA9IFwidmFsdWVzXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzTW9kZSB8fCAoZXhwb3J0cy5QaXBzTW9kZSA9IHt9KSk7XG4gICAgZXhwb3J0cy5QaXBzVHlwZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNUeXBlKSB7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9uZVwiXSA9IC0xXSA9IFwiTm9uZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vVmFsdWVcIl0gPSAwXSA9IFwiTm9WYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIkxhcmdlVmFsdWVcIl0gPSAxXSA9IFwiTGFyZ2VWYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIlNtYWxsVmFsdWVcIl0gPSAyXSA9IFwiU21hbGxWYWx1ZVwiO1xuICAgIH0pKGV4cG9ydHMuUGlwc1R5cGUgfHwgKGV4cG9ydHMuUGlwc1R5cGUgPSB7fSkpO1xuICAgIC8vcmVnaW9uIEhlbHBlciBNZXRob2RzXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICByZXR1cm4gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpICYmIHR5cGVvZiBlbnRyeS5mcm9tID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIC8vIHBhcnRpYWwgZm9ybWF0dGVycyBvbmx5IG5lZWQgYSB0byBmdW5jdGlvbiBhbmQgbm90IGEgZnJvbSBmdW5jdGlvblxuICAgICAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRyeS50byA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1NldCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQmluZGFibGUgdmVyc2lvblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBSZW1vdmVzIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheS5cbiAgICBmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzW2FdID8gKHRoaXNbYV0gPSB0cnVlKSA6IGZhbHNlO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8vIFJvdW5kIGEgdmFsdWUgdG8gdGhlIGNsb3Nlc3QgJ3RvJy5cbiAgICBmdW5jdGlvbiBjbG9zZXN0KHZhbHVlLCB0bykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRvKSAqIHRvO1xuICAgIH1cbiAgICAvLyBDdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuICAgIGZ1bmN0aW9uIG9mZnNldChlbGVtLCBvcmllbnRhdGlvbikge1xuICAgICAgICB2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHBhZ2VPZmZzZXQgPSBnZXRQYWdlT2Zmc2V0KGRvYyk7XG4gICAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjb250YWlucyBsZWZ0IHNjcm9sbCBpbiBDaHJvbWUgb24gQW5kcm9pZC5cbiAgICAgICAgLy8gSSBoYXZlbid0IGZvdW5kIGEgZmVhdHVyZSBkZXRlY3Rpb24gdGhhdCBwcm92ZXMgdGhpcy4gV29yc3QgY2FzZVxuICAgICAgICAvLyBzY2VuYXJpbyBvbiBtaXMtbWF0Y2g6IHRoZSAndGFwJyBmZWF0dXJlIG9uIGhvcml6b250YWwgc2xpZGVycyBicmVha3MuXG4gICAgICAgIGlmICgvd2Via2l0LipDaHJvbWUuKk1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHBhZ2VPZmZzZXQueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uID8gcmVjdC50b3AgKyBwYWdlT2Zmc2V0LnkgLSBkb2NFbGVtLmNsaWVudFRvcCA6IHJlY3QubGVmdCArIHBhZ2VPZmZzZXQueCAtIGRvY0VsZW0uY2xpZW50TGVmdDtcbiAgICB9XG4gICAgLy8gQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudW1lcmljYWwuXG4gICAgZnVuY3Rpb24gaXNOdW1lcmljKGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmICFpc05hTihhKSAmJiBpc0Zpbml0ZShhKTtcbiAgICB9XG4gICAgLy8gU2V0cyBhIGNsYXNzIGFuZCByZW1vdmVzIGl0IGFmdGVyIFtkdXJhdGlvbl0gbXMuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3NGb3IoZWxlbWVudCwgY2xhc3NOYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBMaW1pdHMgYSB2YWx1ZSB0byAwIC0gMTAwXG4gICAgZnVuY3Rpb24gbGltaXQoYSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oYSwgMTAwKSwgMCk7XG4gICAgfVxuICAgIC8vIFdyYXBzIGEgdmFyaWFibGUgYXMgYW4gYXJyYXksIGlmIGl0IGlzbid0IG9uZSB5ZXQuXG4gICAgLy8gTm90ZSB0aGF0IGFuIGlucHV0IGFycmF5IGlzIHJldHVybmVkIGJ5IHJlZmVyZW5jZSFcbiAgICBmdW5jdGlvbiBhc0FycmF5KGEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgPyBhIDogW2FdO1xuICAgIH1cbiAgICAvLyBDb3VudHMgZGVjaW1hbHNcbiAgICBmdW5jdGlvbiBjb3VudERlY2ltYWxzKG51bVN0cikge1xuICAgICAgICBudW1TdHIgPSBTdHJpbmcobnVtU3RyKTtcbiAgICAgICAgdmFyIHBpZWNlcyA9IG51bVN0ci5zcGxpdChcIi5cIik7XG4gICAgICAgIHJldHVybiBwaWVjZXMubGVuZ3RoID4gMSA/IHBpZWNlc1sxXS5sZW5ndGggOiAwO1xuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jYWRkX2NsYXNzXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jcmVtb3ZlX2NsYXNzXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcYnwkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L2F0dHJpYnV0ZXMvYWRkaW5nLXJlbW92aW5nLWFuZC10ZXN0aW5nLWZvci1jbGFzc2VzLTkvXG4gICAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0ID8gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOiBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGNsYXNzTmFtZSArIFwiXFxcXGJcIikudGVzdChlbC5jbGFzc05hbWUpO1xuICAgIH1cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFkjTm90ZXNcbiAgICBmdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KGRvYykge1xuICAgICAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2MuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCI7XG4gICAgICAgIHZhciB4ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICB2YXIgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gd2UgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgY29uc3RhbnRzIGluc3RlYWRcbiAgICAvLyBvZiBhY2Nlc3Npbmcgd2luZG93LiogYXMgc29vbiBhcyB0aGUgbW9kdWxlIG5lZWRzIGl0XG4gICAgLy8gc28gdGhhdCB3ZSBkbyBub3QgY29tcHV0ZSBhbnl0aGluZyBpZiBub3QgbmVlZGVkXG4gICAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBldmVudHMgdG8gYmluZC4gSUUxMSBpbXBsZW1lbnRzIHBvaW50ZXJFdmVudHMgd2l0aG91dFxuICAgICAgICAvLyBhIHByZWZpeCwgd2hpY2ggYnJlYWtzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgSUUxMCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcInBvaW50ZXJkb3duXCIsXG4gICAgICAgICAgICAgICAgbW92ZTogXCJwb2ludGVybW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJwb2ludGVydXBcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIk1TUG9pbnRlckRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJNU1BvaW50ZXJNb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJNU1BvaW50ZXJVcFwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJtb3VzZW1vdmUgdG91Y2htb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJtb3VzZXVwIHRvdWNoZW5kXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbiAgICAvLyBJc3N1ZSAjNzg1XG4gICAgZnVuY3Rpb24gZ2V0U3VwcG9ydHNQYXNzaXZlKCkge1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMgJiYgQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBSYW5nZSBDYWxjdWxhdGlvblxuICAgIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiBhIHN1Yi1yYW5nZSBpbiByZWxhdGlvbiB0byBhIGZ1bGwgcmFuZ2UuXG4gICAgZnVuY3Rpb24gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpIHtcbiAgICAgICAgcmV0dXJuIDEwMCAvIChwYiAtIHBhKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEhvdyBtYW55IHBlcmNlbnQgaXMgdGhpcyB2YWx1ZSBvZiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGZyb21QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSwgc3RhcnRSYW5nZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogMTAwKSAvIChyYW5nZVtzdGFydFJhbmdlICsgMV0gLSByYW5nZVtzdGFydFJhbmdlXSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBXaGVyZSBpcyB0aGlzIHZhbHVlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gdG9QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnJvbVBlcmNlbnRhZ2UocmFuZ2UsIHJhbmdlWzBdIDwgMCA/IHZhbHVlICsgTWF0aC5hYnMocmFuZ2VbMF0pIDogdmFsdWUgLSByYW5nZVswXSwgMCk7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSG93IG11Y2ggaXMgdGhpcyBwZXJjZW50YWdlIG9uIHRoaXMgcmFuZ2U/XG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSAvIDEwMCArIHJhbmdlWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRKKHZhbHVlLCBhcnIpIHtcbiAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICB3aGlsZSAodmFsdWUgPj0gYXJyW2pdKSB7XG4gICAgICAgICAgICBqICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGo7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBJbnB1dCBhIHZhbHVlLCBmaW5kIHdoZXJlLCBvbiBhIHNjYWxlIG9mIDAtMTAwLCBpdCBhcHBsaWVzLlxuICAgIGZ1bmN0aW9uIHRvU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IHhWYWwuc2xpY2UoLTEpWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFZhbCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIHBhICsgdG9QZXJjZW50YWdlKFt2YSwgdmJdLCB2YWx1ZSkgLyBzdWJSYW5nZVJhdGlvKHBhLCBwYik7XG4gICAgfVxuICAgIC8vICh2YWx1ZSkgSW5wdXQgYSBwZXJjZW50YWdlLCBmaW5kIHdoZXJlIGl0IGlzIG9uIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG4gICAgZnVuY3Rpb24gZnJvbVN0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIHJhbmdlIGdyb3VwIHRoYXQgZml0cyAxMDBcbiAgICAgICAgaWYgKHZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHhWYWwuc2xpY2UoLTEpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgICAgICB2YXIgdmIgPSB4VmFsW2pdO1xuICAgICAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICAgICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICAgICAgcmV0dXJuIGlzUGVyY2VudGFnZShbdmEsIHZiXSwgKHZhbHVlIC0gcGEpICogc3ViUmFuZ2VSYXRpbyhwYSwgcGIpKTtcbiAgICB9XG4gICAgLy8gKHBlcmNlbnRhZ2UpIEdldCB0aGUgc3RlcCB0aGF0IGFwcGxpZXMgYXQgYSBjZXJ0YWluIHZhbHVlLlxuICAgIGZ1bmN0aW9uIGdldFN0ZXAoeFBjdCwgeFN0ZXBzLCBzbmFwLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgICAgIHZhciBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBiID0geFBjdFtqXTtcbiAgICAgICAgLy8gSWYgJ3NuYXAnIGlzIHNldCwgc3RlcHMgYXJlIHVzZWQgYXMgZml4ZWQgcG9pbnRzIG9uIHRoZSBzbGlkZXIuXG4gICAgICAgIGlmIChzbmFwKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHBvc2l0aW9uLCBhIG9yIGIuXG4gICAgICAgICAgICBpZiAodmFsdWUgLSBhID4gKGIgLSBhKSAvIDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmICgheFN0ZXBzW2ogLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4UGN0W2ogLSAxXSArIGNsb3Nlc3QodmFsdWUgLSB4UGN0W2ogLSAxXSwgeFN0ZXBzW2ogLSAxXSk7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gU3BlY3RydW1cbiAgICB2YXIgU3BlY3RydW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFNwZWN0cnVtKGVudHJ5LCBzbmFwLCBzaW5nbGVTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnhQY3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFZhbCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwID0gW107XG4gICAgICAgICAgICB0aGlzLnhTdGVwcyA9IFtzaW5nbGVTdGVwIHx8IGZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gW2ZhbHNlXTtcbiAgICAgICAgICAgIHRoaXMuc25hcCA9IHNuYXA7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgb3JkZXJlZCA9IFtdO1xuICAgICAgICAgICAgLy8gTWFwIHRoZSBvYmplY3Qga2V5cyB0byBhbiBhcnJheS5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIG9yZGVyZWQucHVzaChbYXNBcnJheShlbnRyeVtpbmRleF0pLCBpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTb3J0IGFsbCBlbnRyaWVzIGJ5IHZhbHVlIChudW1lcmljIHNvcnQpLlxuICAgICAgICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMF1bMF0gLSBiWzBdWzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBlbnRyaWVzIHRvIHN1YnJhbmdlcy5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRyeVBvaW50KG9yZGVyZWRbaW5kZXhdWzFdLCBvcmRlcmVkW2luZGV4XVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgYWN0dWFsIHN0ZXAgdmFsdWVzLlxuICAgICAgICAgICAgLy8geFN0ZXBzIGlzIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB4UGN0IGFuZCB4VmFsLlxuICAgICAgICAgICAgdGhpcy54TnVtU3RlcHMgPSB0aGlzLnhTdGVwcy5zbGljZSgwKTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgYWxsIG51bWVyaWMgc3RlcHMgdG8gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHN1YnJhbmdlIHRoZXkgcmVwcmVzZW50LlxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwUG9pbnQoaW5kZXgsIHRoaXMueE51bVN0ZXBzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy54TnVtU3RlcHMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlc1tpbmRleF0gPSBmcm9tUGVyY2VudGFnZSh0aGlzLnhWYWwsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VzO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb3ZlciB0aGUgd2hvbGUgc2NhbGUgb2YgcmFuZ2VzLlxuICAgICAgICAvLyBkaXJlY3Rpb246IDAgPSBiYWNrd2FyZHMgLyAxID0gZm9yd2FyZHNcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldEFic29sdXRlRGlzdGFuY2UgPSBmdW5jdGlvbiAodmFsdWUsIGRpc3RhbmNlcywgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgeFBjdF9pbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcmFuZ2Ugd2hlcmUgdG8gc3RhcnQgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAodmFsdWUgPiB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gdGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXggPSB0aGlzLnhQY3QubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGxvb2tpbmcgYmFja3dhcmRzIGFuZCB0aGUgdmFsdWUgaXMgZXhhY3RseSBhdCBhIHJhbmdlIHNlcGFyYXRvciB0aGVuIGxvb2sgb25lIHJhbmdlIGZ1cnRoZXJcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uICYmIHZhbHVlID09PSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgIHZhciByZXN0X2ZhY3RvciA9IDE7XG4gICAgICAgICAgICB2YXIgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleF07XG4gICAgICAgICAgICB2YXIgcmFuZ2VfcGN0ID0gMDtcbiAgICAgICAgICAgIHZhciByZWxfcmFuZ2VfZGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgdmFyIGFic19kaXN0YW5jZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIHZhciByYW5nZV9jb3VudGVyID0gMDtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aGF0IHBhcnQgb2YgdGhlIHN0YXJ0IHJhbmdlIHRoZSB2YWx1ZSBpc1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHN0YXJ0X2ZhY3RvciA9ICh2YWx1ZSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHZhbHVlKSAvICh0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvIHVudGlsIHRoZSBjb21wbGV0ZSBkaXN0YW5jZSBhY3Jvc3MgcmFuZ2VzIGlzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIHdoaWxlIChyZXN0X3JlbF9kaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgdG90YWwgcmFuZ2VcbiAgICAgICAgICAgICAgICByYW5nZV9wY3QgPSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDEgKyByYW5nZV9jb3VudGVyXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHRoZSBtYXJnaW4sIHBhZGRpbmcgb3IgbGltaXQgaXMgbGFyZ2VyIHRoZW4gdGhlIGN1cnJlbnQgcmFuZ2UgYW5kIGNhbGN1bGF0ZVxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3IgKyAxMDAgLSBzdGFydF9mYWN0b3IgKiAxMDAgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbGFyZ2VyIHRoZW4gdGFrZSB0aGUgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiB0aGUgd2hvbGUgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gcmFuZ2VfcGN0ICogc3RhcnRfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0IGZhY3RvciBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzdF9mYWN0b3IgPSAocmVzdF9yZWxfZGlzdGFuY2UgLSAxMDAgKiBzdGFydF9mYWN0b3IpIC8gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHN0YXJ0IGZhY3RvciB0byAxIGFzIGZvciBuZXh0IHJhbmdlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgICAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc21hbGxlciBvciBlcXVhbCB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIGNhbGN1bGF0ZSBwZXJjZW50dWFsIHBhcnQgb2YgdGhhdCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZWxfcmFuZ2VfZGlzdGFuY2UgPSAoKGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl0gKiByYW5nZV9wY3QpIC8gMTAwKSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAvLyBObyByZXN0IGxlZnQgYXMgdGhlIHJlc3QgZml0cyBpbiBjdXJyZW50IHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyIC0gcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBmaXJzdCByYW5nZSB3aGVuIGRpc3RhbmNlIGJlY29tZXMgb3V0c2lkZSBvZiBtaW5pbXVtIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhQY3QubGVuZ3RoICsgcmFuZ2VfY291bnRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFic19kaXN0YW5jZV9jb3VudGVyID0gYWJzX2Rpc3RhbmNlX2NvdW50ZXIgKyByZWxfcmFuZ2VfZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGxhc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWF4aW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCAtIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgcmVzdF9yZWxfZGlzdGFuY2UgPSBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBhYnNfZGlzdGFuY2VfY291bnRlcjtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLnRvU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZnJvbVN0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVN0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldFN0ZXAodGhpcy54UGN0LCB0aGlzLnhTdGVwcywgdGhpcy5zbmFwLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREZWZhdWx0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSwgaXNEb3duLCBzaXplKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICAvLyBXaGVuIGF0IHRoZSB0b3Agb3Igc3RlcHBpbmcgZG93biwgbG9vayBhdCB0aGUgcHJldmlvdXMgc3ViLXJhbmdlXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDEwMCB8fCAoaXNEb3duICYmIHZhbHVlID09PSB0aGlzLnhQY3RbaiAtIDFdKSkge1xuICAgICAgICAgICAgICAgIGogPSBNYXRoLm1heChqIC0gMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueFZhbFtqXSAtIHRoaXMueFZhbFtqIC0gMV0pIC8gc2l6ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmdldE5lYXJieVN0ZXBzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0ZXBCZWZvcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDJdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzU3RlcDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAxXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0ZXBBZnRlcjoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbal0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2pdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvdW50U3RlcERlY2ltYWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHRoaXMueE51bVN0ZXBzLm1hcChjb3VudERlY2ltYWxzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBzdGVwRGVjaW1hbHMpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFzTm9TaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueFZhbFswXSA9PT0gdGhpcy54VmFsW3RoaXMueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gT3V0c2lkZSB0ZXN0aW5nXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlRW50cnlQb2ludCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlO1xuICAgICAgICAgICAgLy8gQ292ZXJ0IG1pbi9tYXggc3ludGF4IHRvIDAgYW5kIDEwMC5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGNvcnJlY3QgaW5wdXQuXG4gICAgICAgICAgICBpZiAoIWlzTnVtZXJpYyhwZXJjZW50YWdlKSB8fCAhaXNOdW1lcmljKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgdmFsdWUgaXNuJ3QgbnVtZXJpYy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXMuXG4gICAgICAgICAgICB0aGlzLnhQY3QucHVzaChwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHRoaXMueFZhbC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZTEgPSBOdW1iZXIodmFsdWVbMV0pO1xuICAgICAgICAgICAgLy8gTmFOIHdpbGwgZXZhbHVhdGUgdG8gZmFsc2UgdG9vLCBidXQgdG8ga2VlcFxuICAgICAgICAgICAgLy8gbG9nZ2luZyBjbGVhciwgc2V0IHN0ZXAgZXhwbGljaXRseS4gTWFrZSBzdXJlXG4gICAgICAgICAgICAvLyBub3QgdG8gb3ZlcnJpZGUgdGhlICdzdGVwJyBzZXR0aW5nIHdpdGggZmFsc2UuXG4gICAgICAgICAgICBpZiAoIXBlcmNlbnRhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbMF0gPSB2YWx1ZTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHMucHVzaChpc05hTih2YWx1ZTEpID8gZmFsc2UgOiB2YWx1ZTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlU3RlcFBvaW50ID0gZnVuY3Rpb24gKGksIG4pIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSAnZmFsc2UnIHN0ZXBwaW5nLlxuICAgICAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICBpZiAodGhpcy54VmFsW2ldID09PSB0aGlzLnhWYWxbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPSB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gdGhpcy54VmFsW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZhY3RvciB0byByYW5nZSByYXRpb1xuICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPVxuICAgICAgICAgICAgICAgIGZyb21QZXJjZW50YWdlKFt0aGlzLnhWYWxbaV0sIHRoaXMueFZhbFtpICsgMV1dLCBuLCAwKSAvIHN1YlJhbmdlUmF0aW8odGhpcy54UGN0W2ldLCB0aGlzLnhQY3RbaSArIDFdKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFN0ZXBzID0gKHRoaXMueFZhbFtpICsgMV0gLSB0aGlzLnhWYWxbaV0pIC8gdGhpcy54TnVtU3RlcHNbaV07XG4gICAgICAgICAgICB2YXIgaGlnaGVzdFN0ZXAgPSBNYXRoLmNlaWwoTnVtYmVyKHRvdGFsU3RlcHMudG9GaXhlZCgzKSkgLSAxKTtcbiAgICAgICAgICAgIHZhciBzdGVwID0gdGhpcy54VmFsW2ldICsgdGhpcy54TnVtU3RlcHNbaV0gKiBoaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSBzdGVwO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU3BlY3RydW07XG4gICAgfSgpKTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIE9wdGlvbnNcbiAgICAvKlx0RXZlcnkgaW5wdXQgb3B0aW9uIGlzIHRlc3RlZCBhbmQgcGFyc2VkLiBUaGlzIHdpbGwgcHJldmVudFxuICAgICAgICBlbmRsZXNzIHZhbGlkYXRpb24gaW4gaW50ZXJuYWwgbWV0aG9kcy4gVGhlc2UgdGVzdHMgYXJlXG4gICAgICAgIHN0cnVjdHVyZWQgd2l0aCBhbiBpdGVtIGZvciBldmVyeSBvcHRpb24gYXZhaWxhYmxlLiBBblxuICAgICAgICBvcHRpb24gY2FuIGJlIG1hcmtlZCBhcyByZXF1aXJlZCBieSBzZXR0aW5nIHRoZSAncicgZmxhZy5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgICAgICAtIFRoZSBwcm92aWRlZCB2YWx1ZSBmb3IgdGhlIG9wdGlvbjtcbiAgICAgICAgICAgIC0gQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgb2JqZWN0O1xuICAgICAgICAgICAgLSBUaGUgbmFtZSBmb3IgdGhlIG9wdGlvbjtcblxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHdoZW4gYW4gZXJyb3IgaXMgZGV0ZWN0ZWQsXG4gICAgICAgIG9yIHRydWUgd2hlbiBldmVyeXRoaW5nIGlzIE9LLiBJdCBjYW4gYWxzbyBtb2RpZnkgdGhlIG9wdGlvblxuICAgICAgICBvYmplY3QsIHRvIG1ha2Ugc3VyZSBhbGwgdmFsdWVzIGNhbiBiZSBjb3JyZWN0bHkgbG9vcGVkIGVsc2V3aGVyZS4gKi9cbiAgICAvL3JlZ2lvbiBEZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0Rm9ybWF0dGVyID0ge1xuICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICB9LFxuICAgICAgICBmcm9tOiBOdW1iZXIsXG4gICAgfTtcbiAgICB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAgICAgdGFyZ2V0OiBcInRhcmdldFwiLFxuICAgICAgICBiYXNlOiBcImJhc2VcIixcbiAgICAgICAgb3JpZ2luOiBcIm9yaWdpblwiLFxuICAgICAgICBoYW5kbGU6IFwiaGFuZGxlXCIsXG4gICAgICAgIGhhbmRsZUxvd2VyOiBcImhhbmRsZS1sb3dlclwiLFxuICAgICAgICBoYW5kbGVVcHBlcjogXCJoYW5kbGUtdXBwZXJcIixcbiAgICAgICAgdG91Y2hBcmVhOiBcInRvdWNoLWFyZWFcIixcbiAgICAgICAgaG9yaXpvbnRhbDogXCJob3Jpem9udGFsXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICBjb25uZWN0OiBcImNvbm5lY3RcIixcbiAgICAgICAgY29ubmVjdHM6IFwiY29ubmVjdHNcIixcbiAgICAgICAgbHRyOiBcImx0clwiLFxuICAgICAgICBydGw6IFwicnRsXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25MdHI6IFwidHh0LWRpci1sdHJcIixcbiAgICAgICAgdGV4dERpcmVjdGlvblJ0bDogXCJ0eHQtZGlyLXJ0bFwiLFxuICAgICAgICBkcmFnZ2FibGU6IFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIGRyYWc6IFwic3RhdGUtZHJhZ1wiLFxuICAgICAgICB0YXA6IFwic3RhdGUtdGFwXCIsXG4gICAgICAgIGFjdGl2ZTogXCJhY3RpdmVcIixcbiAgICAgICAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG4gICAgICAgIHBpcHM6IFwicGlwc1wiLFxuICAgICAgICBwaXBzSG9yaXpvbnRhbDogXCJwaXBzLWhvcml6b250YWxcIixcbiAgICAgICAgcGlwc1ZlcnRpY2FsOiBcInBpcHMtdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyOiBcIm1hcmtlclwiLFxuICAgICAgICBtYXJrZXJIb3Jpem9udGFsOiBcIm1hcmtlci1ob3Jpem9udGFsXCIsXG4gICAgICAgIG1hcmtlclZlcnRpY2FsOiBcIm1hcmtlci12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXJOb3JtYWw6IFwibWFya2VyLW5vcm1hbFwiLFxuICAgICAgICBtYXJrZXJMYXJnZTogXCJtYXJrZXItbGFyZ2VcIixcbiAgICAgICAgbWFya2VyU3ViOiBcIm1hcmtlci1zdWJcIixcbiAgICAgICAgdmFsdWU6IFwidmFsdWVcIixcbiAgICAgICAgdmFsdWVIb3Jpem9udGFsOiBcInZhbHVlLWhvcml6b250YWxcIixcbiAgICAgICAgdmFsdWVWZXJ0aWNhbDogXCJ2YWx1ZS12ZXJ0aWNhbFwiLFxuICAgICAgICB2YWx1ZU5vcm1hbDogXCJ2YWx1ZS1ub3JtYWxcIixcbiAgICAgICAgdmFsdWVMYXJnZTogXCJ2YWx1ZS1sYXJnZVwiLFxuICAgICAgICB2YWx1ZVN1YjogXCJ2YWx1ZS1zdWJcIixcbiAgICB9O1xuICAgIC8vIE5hbWVzcGFjZXMgb2YgaW50ZXJuYWwgZXZlbnQgbGlzdGVuZXJzXG4gICAgdmFyIElOVEVSTkFMX0VWRU5UX05TID0ge1xuICAgICAgICB0b29sdGlwczogXCIuX190b29sdGlwc1wiLFxuICAgICAgICBhcmlhOiBcIi5fX2FyaWFcIixcbiAgICB9O1xuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gdGVzdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHN0ZXAgb3B0aW9uIGNhbiBzdGlsbCBiZSB1c2VkIHRvIHNldCBzdGVwcGluZ1xuICAgICAgICAvLyBmb3IgbGluZWFyIHNsaWRlcnMuIE92ZXJ3cml0dGVuIGlmIHNldCBpbiAncmFuZ2UnLlxuICAgICAgICBwYXJzZWQuc2luZ2xlU3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkUGFnZU11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRQYWdlTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkRGVmYXVsdFN0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmREZWZhdWx0U3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UmFuZ2UocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBGaWx0ZXIgaW5jb3JyZWN0IGlucHV0LlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIGlzIG5vdCBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoIG1pc3Npbmcgc3RhcnQgb3IgZW5kLlxuICAgICAgICBpZiAoZW50cnkubWluID09PSB1bmRlZmluZWQgfHwgZW50cnkubWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IE1pc3NpbmcgJ21pbicgb3IgJ21heCcgaW4gJ3JhbmdlJy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLnNwZWN0cnVtID0gbmV3IFNwZWN0cnVtKGVudHJ5LCBwYXJzZWQuc25hcCB8fCBmYWxzZSwgcGFyc2VkLnNpbmdsZVN0ZXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U3RhcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbnB1dC4gVmFsdWVzIGFyZW4ndCB0ZXN0ZWQsIGFzIHRoZSBwdWJsaWMgLnZhbCBtZXRob2RcbiAgICAgICAgLy8gd2lsbCBhbHdheXMgcHJvdmlkZSBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGFydCcgb3B0aW9uIGlzIGluY29ycmVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmUgdGhlIG51bWJlciBvZiBoYW5kbGVzLlxuICAgICAgICBwYXJzZWQuaGFuZGxlcyA9IGVudHJ5Lmxlbmd0aDtcbiAgICAgICAgLy8gV2hlbiB0aGUgc2xpZGVyIGlzIGluaXRpYWxpemVkLCB0aGUgLnZhbCBtZXRob2Qgd2lsbFxuICAgICAgICAvLyBiZSBjYWxsZWQgd2l0aCB0aGUgc3RhcnQgb3B0aW9ucy5cbiAgICAgICAgcGFyc2VkLnN0YXJ0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTbmFwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzbmFwJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuc25hcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0ZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0ZScgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLmFuaW1hdGUgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGlvbkR1cmF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGlvbkR1cmF0aW9uJyBvcHRpb24gbXVzdCBiZSBhIG51bWJlci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFuaW1hdGlvbkR1cmF0aW9uID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDb25uZWN0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGNvbm5lY3QgPSBbZmFsc2VdO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgLy8gTWFwIGxlZ2FjeSBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gXCJsb3dlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFt0cnVlLCBmYWxzZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09IFwidXBwZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbZmFsc2UsIHRydWVdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBib29sZWFuIG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29ubmVjdC5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWplY3QgaW52YWxpZCBpbnB1dFxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCB8fCBlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzICsgMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nvbm5lY3QnIG9wdGlvbiBkb2Vzbid0IG1hdGNoIGhhbmRsZSBjb3VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25uZWN0ID0gZW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNvbm5lY3QgPSBjb25uZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0T3JpZW50YXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgb3JpZW50YXRpb24gdG8gYW4gYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3lcbiAgICAgICAgLy8gYXJyYXkgc2VsZWN0aW9uLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdvcmllbnRhdGlvbicgb3B0aW9uIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RNYXJnaW4ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElzc3VlICM1ODJcbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLm1hcmdpbiA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RMaW1pdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubGltaXQgPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgICAgICBpZiAoIXBhcnNlZC5saW1pdCB8fCBwYXJzZWQuaGFuZGxlcyA8IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RQYWRkaW5nKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpICYmICEoZW50cnkubGVuZ3RoID09PSAyIHx8IGlzTnVtZXJpYyhlbnRyeVswXSkgfHwgaXNOdW1lcmljKGVudHJ5WzFdKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtlbnRyeSwgZW50cnldO1xuICAgICAgICB9XG4gICAgICAgIC8vICdnZXREaXN0YW5jZScgcmV0dXJucyBmYWxzZSBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgICAgIHBhcnNlZC5wYWRkaW5nID0gW3BhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVswXSksIHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVsxXSldO1xuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwYXJzZWQuc3BlY3RydW0ueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vIGxhc3QgXCJyYW5nZVwiIGNhbid0IGNvbnRhaW4gc3RlcCBzaXplIGFzIGl0IGlzIHB1cmVseSBhbiBlbmRwb2ludC5cbiAgICAgICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXVtpbmRleF0gPCAwIHx8IHBhcnNlZC5wYWRkaW5nWzFdW2luZGV4XSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0b3RhbFBhZGRpbmcgPSBlbnRyeVswXSArIGVudHJ5WzFdO1xuICAgICAgICB2YXIgZmlyc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICB2YXIgbGFzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbcGFyc2VkLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0b3RhbFBhZGRpbmcgLyAobGFzdFZhbHVlIC0gZmlyc3RWYWx1ZSkgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3Qgbm90IGV4Y2VlZCAxMDAlIG9mIHRoZSByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERpcmVjdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBkaXJlY3Rpb24gYXMgYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3kgcGFyc2luZy5cbiAgICAgICAgLy8gSW52ZXJ0IGNvbm5lY3Rpb24gZm9yIFJUTCBzbGlkZXJzLCBzbyB0aGF0IHRoZSBwcm9wZXJcbiAgICAgICAgLy8gaGFuZGxlcyBnZXQgdGhlIGNvbm5lY3QvYmFja2dyb3VuZCBjbGFzc2VzLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwibHRyXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicnRsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdkaXJlY3Rpb24nIG9wdGlvbiB3YXMgbm90IHJlY29nbml6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RCZWhhdmlvdXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGlucHV0IGlzIGEgc3RyaW5nLlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYmVoYXZpb3VyJyBtdXN0IGJlIGEgc3RyaW5nIGNvbnRhaW5pbmcgb3B0aW9ucy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBjb250YWlucyBhbnkga2V5d29yZHMuXG4gICAgICAgIC8vIE5vbmUgYXJlIHJlcXVpcmVkLlxuICAgICAgICB2YXIgdGFwID0gZW50cnkuaW5kZXhPZihcInRhcFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZyA9IGVudHJ5LmluZGV4T2YoXCJkcmFnXCIpID49IDA7XG4gICAgICAgIHZhciBmaXhlZCA9IGVudHJ5LmluZGV4T2YoXCJmaXhlZFwiKSA+PSAwO1xuICAgICAgICB2YXIgc25hcCA9IGVudHJ5LmluZGV4T2YoXCJzbmFwXCIpID49IDA7XG4gICAgICAgIHZhciBob3ZlciA9IGVudHJ5LmluZGV4T2YoXCJob3ZlclwiKSA+PSAwO1xuICAgICAgICB2YXIgdW5jb25zdHJhaW5lZCA9IGVudHJ5LmluZGV4T2YoXCJ1bmNvbnN0cmFpbmVkXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnQWxsID0gZW50cnkuaW5kZXhPZihcImRyYWctYWxsXCIpID49IDA7XG4gICAgICAgIHZhciBzbW9vdGhTdGVwcyA9IGVudHJ5LmluZGV4T2YoXCJzbW9vdGgtc3RlcHNcIikgPj0gMDtcbiAgICAgICAgaWYgKGZpeGVkKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLmhhbmRsZXMgIT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZml4ZWQnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVc2UgbWFyZ2luIHRvIGVuZm9yY2UgZml4ZWQgc3RhdGVcbiAgICAgICAgICAgIHRlc3RNYXJnaW4ocGFyc2VkLCBwYXJzZWQuc3RhcnRbMV0gLSBwYXJzZWQuc3RhcnRbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd1bmNvbnN0cmFpbmVkJyBiZWhhdmlvdXIgY2Fubm90IGJlIHVzZWQgd2l0aCBtYXJnaW4gb3IgbGltaXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIHRhcDogdGFwIHx8IHNuYXAsXG4gICAgICAgICAgICBkcmFnOiBkcmFnLFxuICAgICAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgICAgIHNtb290aFN0ZXBzOiBzbW9vdGhTdGVwcyxcbiAgICAgICAgICAgIGZpeGVkOiBmaXhlZCxcbiAgICAgICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgICAgICBob3ZlcjogaG92ZXIsXG4gICAgICAgICAgICB1bmNvbnN0cmFpbmVkOiB1bmNvbnN0cmFpbmVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0VG9vbHRpcHMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBmb3JtYXR0ZXIgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybWF0dGVyICE9PSBcImJvb2xlYW5cIiAmJiAhaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZm9ybWF0dGVyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndG9vbHRpcHMnIG11c3QgYmUgcGFzc2VkIGEgZm9ybWF0dGVyIG9yICdmYWxzZScuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEhhbmRsZUF0dHJpYnV0ZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgYXR0cmlidXRlcyBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5oYW5kbGVBdHRyaWJ1dGVzID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBcmlhRm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhcmlhRm9ybWF0JyByZXF1aXJlcyAndG8nIG1ldGhvZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFyaWFGb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmb3JtYXQnIHJlcXVpcmVzICd0bycgYW5kICdmcm9tJyBtZXRob2RzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFN1cHBvcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkU3VwcG9ydCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRTdXBwb3J0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REb2N1bWVudEVsZW1lbnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBUaGlzIGlzIGFuIGFkdmFuY2VkIG9wdGlvbi4gUGFzc2VkIHZhbHVlcyBhcmUgdXNlZCB3aXRob3V0IHZhbGlkYXRpb24uXG4gICAgICAgIHBhcnNlZC5kb2N1bWVudEVsZW1lbnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc1ByZWZpeChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIgJiYgZW50cnkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzUHJlZml4JyBtdXN0IGJlIGEgc3RyaW5nIG9yIGBmYWxzZWAuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jc3NQcmVmaXggPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc0NsYXNzZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzQ2xhc3NlcycgbXVzdCBiZSBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkLmNzc1ByZWZpeCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3Nlc1trZXldID0gcGFyc2VkLmNzc1ByZWZpeCArIGVudHJ5W2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGVzdCBhbGwgZGV2ZWxvcGVyIHNldHRpbmdzIGFuZCBwYXJzZSB0byBhc3N1bXB0aW9uLXNhZmUgdmFsdWVzLlxuICAgIGZ1bmN0aW9uIHRlc3RPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVG8gcHJvdmUgYSBmaXggZm9yICM1MzcsIGZyZWV6ZSBvcHRpb25zIGhlcmUuXG4gICAgICAgIC8vIElmIHRoZSBvYmplY3QgaXMgbW9kaWZpZWQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICAgICAgICAvLyBPYmplY3QuZnJlZXplKG9wdGlvbnMpO1xuICAgICAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICAgICAgbWFyZ2luOiBudWxsLFxuICAgICAgICAgICAgbGltaXQ6IG51bGwsXG4gICAgICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICAgICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICB9O1xuICAgICAgICAvLyBUZXN0cyBhcmUgZXhlY3V0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHByZXNlbnRlZCBoZXJlLlxuICAgICAgICB2YXIgdGVzdHMgPSB7XG4gICAgICAgICAgICBzdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U3RlcCB9LFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAgfSxcbiAgICAgICAgICAgIHN0YXJ0OiB7IHI6IHRydWUsIHQ6IHRlc3RTdGFydCB9LFxuICAgICAgICAgICAgY29ubmVjdDogeyByOiB0cnVlLCB0OiB0ZXN0Q29ubmVjdCB9LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB7IHI6IHRydWUsIHQ6IHRlc3REaXJlY3Rpb24gfSxcbiAgICAgICAgICAgIHNuYXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTbmFwIH0sXG4gICAgICAgICAgICBhbmltYXRlOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0ZSB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRpb25EdXJhdGlvbiB9LFxuICAgICAgICAgICAgcmFuZ2U6IHsgcjogdHJ1ZSwgdDogdGVzdFJhbmdlIH0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdE9yaWVudGF0aW9uIH0sXG4gICAgICAgICAgICBtYXJnaW46IHsgcjogZmFsc2UsIHQ6IHRlc3RNYXJnaW4gfSxcbiAgICAgICAgICAgIGxpbWl0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0TGltaXQgfSxcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgcjogZmFsc2UsIHQ6IHRlc3RQYWRkaW5nIH0sXG4gICAgICAgICAgICBiZWhhdmlvdXI6IHsgcjogdHJ1ZSwgdDogdGVzdEJlaGF2aW91ciB9LFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEFyaWFGb3JtYXQgfSxcbiAgICAgICAgICAgIGZvcm1hdDogeyByOiBmYWxzZSwgdDogdGVzdEZvcm1hdCB9LFxuICAgICAgICAgICAgdG9vbHRpcHM6IHsgcjogZmFsc2UsIHQ6IHRlc3RUb29sdGlwcyB9LFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB7IHI6IHRydWUsIHQ6IHRlc3RLZXlib2FyZFN1cHBvcnQgfSxcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudDogeyByOiBmYWxzZSwgdDogdGVzdERvY3VtZW50RWxlbWVudCB9LFxuICAgICAgICAgICAgY3NzUHJlZml4OiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NQcmVmaXggfSxcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IHsgcjogdHJ1ZSwgdDogdGVzdENzc0NsYXNzZXMgfSxcbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZXM6IHsgcjogZmFsc2UsIHQ6IHRlc3RIYW5kbGVBdHRyaWJ1dGVzIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGNvbm5lY3Q6IGZhbHNlLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICAgICAgYmVoYXZpb3VyOiBcInRhcFwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxuICAgICAgICAgICAgY3NzUHJlZml4OiBcIm5vVWktXCIsXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogNSxcbiAgICAgICAgICAgIGtleWJvYXJkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IDEwLFxuICAgICAgICB9O1xuICAgICAgICAvLyBBcmlhRm9ybWF0IGRlZmF1bHRzIHRvIHJlZ3VsYXIgZm9ybWF0LCBpZiBhbnkuXG4gICAgICAgIGlmIChvcHRpb25zLmZvcm1hdCAmJiAhb3B0aW9ucy5hcmlhRm9ybWF0KSB7XG4gICAgICAgICAgICBvcHRpb25zLmFyaWFGb3JtYXQgPSBvcHRpb25zLmZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSdW4gYWxsIG9wdGlvbnMgdGhyb3VnaCBhIHRlc3RpbmcgbWVjaGFuaXNtIHRvIGVuc3VyZSBjb3JyZWN0XG4gICAgICAgIC8vIGlucHV0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCBvcHRpb25zIG1pZ2h0IGdldCBtb2RpZmllZCB0b1xuICAgICAgICAvLyBiZSBoYW5kbGVkIHByb3Blcmx5LiBFLmcuIHdyYXBwaW5nIGludGVnZXJzIGluIGFycmF5cy5cbiAgICAgICAgT2JqZWN0LmtleXModGVzdHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb24gaXNuJ3Qgc2V0LCBidXQgaXQgaXMgcmVxdWlyZWQsIHRocm93IGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKCFpc1NldChvcHRpb25zW25hbWVdKSAmJiBkZWZhdWx0c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RzW25hbWVdLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ1wiICsgbmFtZSArIFwiJyBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlc3RzW25hbWVdLnQocGFyc2VkLCAhaXNTZXQob3B0aW9uc1tuYW1lXSkgPyBkZWZhdWx0c1tuYW1lXSA6IG9wdGlvbnNbbmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRm9yd2FyZCBwaXBzIG9wdGlvbnNcbiAgICAgICAgcGFyc2VkLnBpcHMgPSBvcHRpb25zLnBpcHM7XG4gICAgICAgIC8vIEFsbCByZWNlbnQgYnJvd3NlcnMgYWNjZXB0IHVucHJlZml4ZWQgdHJhbnNmb3JtLlxuICAgICAgICAvLyBXZSBuZWVkIC1tcy0gZm9yIElFOSBhbmQgLXdlYmtpdC0gZm9yIG9sZGVyIEFuZHJvaWQ7XG4gICAgICAgIC8vIEFzc3VtZSB1c2Ugb2YgLXdlYmtpdC0gaWYgdW5wcmVmaXhlZCBhbmQgLW1zLSBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD10cmFuc2Zvcm1zMmRcbiAgICAgICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbXNQcmVmaXggPSBkLnN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBub1ByZWZpeCA9IGQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHBhcnNlZC50cmFuc2Zvcm1SdWxlID0gbm9QcmVmaXggPyBcInRyYW5zZm9ybVwiIDogbXNQcmVmaXggPyBcIm1zVHJhbnNmb3JtXCIgOiBcIndlYmtpdFRyYW5zZm9ybVwiO1xuICAgICAgICAvLyBQaXBzIGRvbid0IG1vdmUsIHNvIHdlIGNhbiBwbGFjZSB0aGVtIHVzaW5nIGxlZnQvdG9wLlxuICAgICAgICB2YXIgc3R5bGVzID0gW1xuICAgICAgICAgICAgW1wibGVmdFwiLCBcInRvcFwiXSxcbiAgICAgICAgICAgIFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdLFxuICAgICAgICBdO1xuICAgICAgICBwYXJzZWQuc3R5bGUgPSBzdHlsZXNbcGFyc2VkLmRpcl1bcGFyc2VkLm9ydF07XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSA9IGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCk7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSAmJiBnZXRTdXBwb3J0c1Bhc3NpdmUoKTtcbiAgICAgICAgLy8gQWxsIHZhcmlhYmxlcyBsb2NhbCB0byAnc2NvcGUnIGFyZSBwcmVmaXhlZCB3aXRoICdzY29wZV8nXG4gICAgICAgIC8vIFNsaWRlciBET00gTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX1RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdmFyIHNjb3BlX0Jhc2U7XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVzO1xuICAgICAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgICAgIHZhciBzY29wZV9QaXBzO1xuICAgICAgICB2YXIgc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICAgICAgdmFyIHNjb3BlX1NwZWN0cnVtID0gb3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgdmFyIHNjb3BlX1ZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgIHZhciBzY29wZV9IYW5kbGVOdW1iZXJzID0gW107XG4gICAgICAgIHZhciBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPSAwO1xuICAgICAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgICAgIC8vIERvY3VtZW50IE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudCA9IHRhcmdldC5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnRFbGVtZW50ID0gb3B0aW9ucy5kb2N1bWVudEVsZW1lbnQgfHwgc2NvcGVfRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgc2NvcGVfQm9keSA9IHNjb3BlX0RvY3VtZW50LmJvZHk7XG4gICAgICAgIC8vIEZvciBob3Jpem9udGFsIHNsaWRlcnMgaW4gc3RhbmRhcmQgbHRyIGRvY3VtZW50cyxcbiAgICAgICAgLy8gbWFrZSAubm9VaS1vcmlnaW4gb3ZlcmZsb3cgdG8gdGhlIGxlZnQgc28gdGhlIGRvY3VtZW50IGRvZXNuJ3Qgc2Nyb2xsLlxuICAgICAgICB2YXIgc2NvcGVfRGlyT2Zmc2V0ID0gc2NvcGVfRG9jdW1lbnQuZGlyID09PSBcInJ0bFwiIHx8IG9wdGlvbnMub3J0ID09PSAxID8gMCA6IDEwMDtcbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5vZGUsIGFkZHMgaXQgdG8gdGFyZ2V0LCByZXR1cm5zIHRoZSBuZXcgbm9kZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkTm9kZVRvKGFkZFRhcmdldCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2YXIgZGl2ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhkaXYsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGEgb3JpZ2luIHRvIHRoZSBiYXNlXG4gICAgICAgIGZ1bmN0aW9uIGFkZE9yaWdpbihiYXNlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm9yaWdpbik7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkTm9kZVRvKG9yaWdpbiwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZSk7XG4gICAgICAgICAgICBhZGROb2RlVG8oaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMudG91Y2hBcmVhKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhhbmRsZVwiLCBTdHJpbmcoaGFuZGxlTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL3RhYmluZGV4XG4gICAgICAgICAgICAgICAgLy8gMCA9IGZvY3VzYWJsZSBhbmQgcmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlc18xID0gb3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc18xKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNfMVthdHRyaWJ1dGVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwic2xpZGVyXCIpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImFyaWEtb3JpZW50YXRpb25cIiwgb3B0aW9ucy5vcnQgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlTG93ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlTnVtYmVyID09PSBvcHRpb25zLmhhbmRsZXMgLSAxKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlVXBwZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbnNlcnQgbm9kZXMgZm9yIGNvbm5lY3QgZWxlbWVudHNcbiAgICAgICAgZnVuY3Rpb24gYWRkQ29ubmVjdChiYXNlLCBhZGQpIHtcbiAgICAgICAgICAgIGlmICghYWRkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGhhbmRsZXMgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICBmdW5jdGlvbiBhZGRFbGVtZW50cyhjb25uZWN0T3B0aW9ucywgYmFzZSkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3RCYXNlID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0cyk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1swXSkpO1xuICAgICAgICAgICAgLy8gWzo6OjpPPT09PU89PT09Tz09PT1dXG4gICAgICAgICAgICAvLyBjb25uZWN0T3B0aW9ucyA9IFswLCAxLCAxLCAxXVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmhhbmRsZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEtlZXAgYSBsaXN0IG9mIGFsbCBhZGRlZCBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMucHVzaChhZGRPcmlnaW4oYmFzZSwgaSkpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnNbaV0gPSBpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbaSArIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhIHNpbmdsZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlcihhZGRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IGNsYXNzZXMgYW5kIGRhdGEgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5sdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMucnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9ydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmhvcml6b250YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudmVydGljYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRleHREaXJlY3Rpb24gPSBnZXRDb21wdXRlZFN0eWxlKGFkZFRhcmdldCkuZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHRleHREaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uUnRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25MdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5iYXNlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRUb29sdGlwKGhhbmRsZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMudG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oaGFuZGxlLmZpcnN0Q2hpbGQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b29sdGlwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1NsaWRlckRpc2FibGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1RhcmdldC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBzbGlkZXIgZHJhZ2dpbmcgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgICAgICBmdW5jdGlvbiBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZU9yaWdpbiA9IHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVPcmlnaW4uaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQodG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHRvb2x0aXBzIG9wdGlvbiBpcyBhIHNob3J0aGFuZCBmb3IgdXNpbmcgdGhlICd1cGRhdGUnIGV2ZW50LlxuICAgICAgICBmdW5jdGlvbiB0b29sdGlwcygpIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICAvLyBUb29sdGlwcyBhcmUgYWRkZWQgd2l0aCBvcHRpb25zLnRvb2x0aXBzIGluIG9yaWdpbmFsIG9yZGVyLlxuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBzY29wZV9IYW5kbGVzLm1hcChhZGRUb29sdGlwKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZV9Ub29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0udG8odW5lbmNvZGVkW2hhbmRsZU51bWJlcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdLmlubmVySFRNTCA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXJpYSgpIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhKTtcbiAgICAgICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQsIHRhcCwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEFyaWEgVmFsdWVzIGZvciBhbGwgaGFuZGxlcywgYXMgYSBjaGFuZ2UgaW4gb25lIGNoYW5nZXMgbWluIGFuZCBtYXggdmFsdWVzIGZvciB0aGUgbmV4dC5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDEwMCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXR0ZWQgdmFsdWUgZm9yIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcob3B0aW9ucy5hcmlhRm9ybWF0LnRvKHVuZW5jb2RlZFtpbmRleF0pKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFwIHRvIHNsaWRlciByYW5nZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgbWluID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1pbikudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG1heCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgbm93ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG5vdykudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIiwgbWluKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIiwgbWF4KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIiwgbm93KTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIsIHRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0R3JvdXAocGlwcykge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSByYW5nZS5cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUmFuZ2UgfHwgcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLnhWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLkNvdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpcHMudmFsdWVzIDwgMikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndmFsdWVzJyAoPj0gMikgcmVxdWlyZWQgZm9yIG1vZGUgJ2NvdW50Jy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERpdmlkZSAwIC0gMTAwIGluICdjb3VudCcgcGFydHMuXG4gICAgICAgICAgICAgICAgdmFyIGludGVydmFsID0gcGlwcy52YWx1ZXMgLSAxO1xuICAgICAgICAgICAgICAgIHZhciBzcHJlYWQgPSAxMDAgLyBpbnRlcnZhbDtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgLy8gTGlzdCB0aGVzZSBwYXJ0cyBhbmQgaGF2ZSB0aGVtIGhhbmRsZWQgYXMgJ3Bvc2l0aW9ucycuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGludGVydmFsLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ludGVydmFsXSA9IGludGVydmFsICogc3ByZWFkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCgxMDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuUG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFwIGFsbCBwZXJjZW50YWdlcyB0byBvbi1yYW5nZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UocGlwcy52YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlZhbHVlcykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBtdXN0IGJlIHN0ZXBwZWQsIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBhIHBlcmNlbnRhZ2UgZmlyc3QuXG4gICAgICAgICAgICAgICAgaWYgKHBpcHMuc3RlcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0byBwZXJjZW50YWdlLCBhcHBseSBzdGVwLCByZXR1cm4gdG8gdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAoc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgY2FuIHNpbXBseSB1c2UgdGhlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107IC8vIHBpcHMubW9kZSA9IG5ldmVyXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFwVG9SYW5nZSh2YWx1ZXMsIHN0ZXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc3RlcHBlZCA/IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodmFsdWUpIDogdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVTcHJlYWQocGlwcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gc2FmZUluY3JlbWVudCh2YWx1ZSwgaW5jcmVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgZmxvYXRpbmcgcG9pbnQgdmFyaWFuY2UgYnkgZHJvcHBpbmcgdGhlIHNtYWxsZXN0IGRlY2ltYWwgcGxhY2VzLlxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoKHZhbHVlICsgaW5jcmVtZW50KS50b0ZpeGVkKDcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBncm91cCA9IGdldEdyb3VwKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ZXMgPSB7fTtcbiAgICAgICAgICAgIHZhciBmaXJzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgdmFyIGxhc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFtzY29wZV9TcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaWdub3JlTGFzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHByZXZQY3QgPSAwO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZ3JvdXAsIHNvcnQgaXQgYW5kIGZpbHRlciBhd2F5IGFsbCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgZ3JvdXAgPSB1bmlxdWUoZ3JvdXAuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSByYW5nZSBzdGFydHMgd2l0aCB0aGUgZmlyc3QgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChncm91cFswXSAhPT0gZmlyc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAudW5zaGlmdChmaXJzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpa2V3aXNlIGZvciB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbZ3JvdXAubGVuZ3RoIC0gMV0gIT09IGxhc3RJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChsYXN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlTGFzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgbG93ZXIgKyB1cHBlciBwb3NpdGlvbnMuXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIHE7XG4gICAgICAgICAgICAgICAgdmFyIGxvdyA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGhpZ2ggPSBncm91cFtpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgdmFyIHBjdERpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgdmFyIHBjdFBvcztcbiAgICAgICAgICAgICAgICB2YXIgdHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3RlcHMgPSBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHM7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB1c2luZyAnc3RlcHMnIG1vZGUsIHVzZSB0aGUgcHJvdmlkZWQgc3RlcHMuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdsbCBzdGVwIG9uIHRvIHRoZSBuZXh0IHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGlmIChpc1N0ZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS54TnVtU3RlcHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgJ2Z1bGwnIHN0ZXAuXG4gICAgICAgICAgICAgICAgaWYgKCFzdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBoaWdoIC0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBoaWdoIGlzIHVuZGVmaW5lZCB3ZSBhcmUgYXQgdGhlIGxhc3Qgc3VicmFuZ2UuIE1ha2Ugc3VyZSBpdCBpdGVyYXRlcyBvbmNlICgjMTA4OClcbiAgICAgICAgICAgICAgICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2ggPSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBzdGVwIGlzbid0IDAsIHdoaWNoIHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AgKCM2NTQpXG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRmluZCBhbGwgc3RlcHMgaW4gdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpID0gc2FmZUluY3JlbWVudChpLCBzdGVwKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHBlcmNlbnRhZ2UgdmFsdWUgZm9yIHRoZSBjdXJyZW50IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgc2l6ZSBmb3IgdGhlIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBuZXdQY3QgPSBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKGkpO1xuICAgICAgICAgICAgICAgICAgICBwY3REaWZmZXJlbmNlID0gbmV3UGN0IC0gcHJldlBjdDtcbiAgICAgICAgICAgICAgICAgICAgc3RlcHMgPSBwY3REaWZmZXJlbmNlIC8gKHBpcHMuZGVuc2l0eSB8fCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhbFN0ZXBzID0gTWF0aC5yb3VuZChzdGVwcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcmF0aW8gcmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHBlcmNlbnRhZ2Utc3BhY2UgYSBwb2ludCBpbmRpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBhIGRlbnNpdHkgMSB0aGUgcG9pbnRzL3BlcmNlbnRhZ2UgPSAxLiBGb3IgZGVuc2l0eSAyLCB0aGF0IHBlcmNlbnRhZ2UgbmVlZHMgdG8gYmUgcmUtZGl2aWRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gUm91bmQgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IHRvIGFuIGV2ZW4gbnVtYmVyLCB0aGVuIGRpdmlkZSBieSB0d29cbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gc3ByZWFkIHRoZSBvZmZzZXQgb24gYm90aCBzaWRlcyBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplID0gcGN0RGlmZmVyZW5jZSAvIHJlYWxTdGVwcztcbiAgICAgICAgICAgICAgICAgICAgLy8gRGl2aWRlIGFsbCBwb2ludHMgZXZlbmx5LCBhZGRpbmcgdGhlIGNvcnJlY3QgbnVtYmVyIHRvIHRoaXMgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biB1cCB0byA8PSBzbyB0aGF0IDEwMCUgZ2V0cyBhIHBvaW50LCBldmVudCBpZiBpZ25vcmVMYXN0IGlzIHNldC5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChxID0gMTsgcSA8PSByZWFsU3RlcHM7IHEgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJhdGlvIGJldHdlZW4gdGhlIHJvdW5kZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2l6ZSBtaWdodCBiZSB+MSUgb2ZmLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgYnkgdGhlIG51bWJlciBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlciBzdWJyYW5nZS4gZGVuc2l0eSA9IDEgd2lsbCByZXN1bHQgaW4gMTAwIHBvaW50cyBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bGwgcmFuZ2UsIDIgZm9yIDUwLCA0IGZvciAyNSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICAgICAgcGN0UG9zID0gcHJldlBjdCArIHEgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbcGN0UG9zLnRvRml4ZWQoNSldID0gW3Njb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhwY3RQb3MpLCAwXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHBvaW50IHR5cGUuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBncm91cC5pbmRleE9mKGkpID4gLTEgPyBleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWUgOiBpc1N0ZXBzID8gZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlIDogZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBFbmZvcmNlIHRoZSAnaWdub3JlRmlyc3QnIG9wdGlvbiBieSBvdmVyd3JpdGluZyB0aGUgdHlwZSBmb3IgMC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmRleCAmJiBpZ25vcmVGaXJzdCAmJiBpICE9PSBoaWdoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpID09PSBoaWdoICYmIGlnbm9yZUxhc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSAndHlwZScgb2YgdGhpcyBwb2ludC4gMCA9IHBsYWluLCAxID0gcmVhbCB2YWx1ZSwgMiA9IHN0ZXAgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW25ld1BjdC50b0ZpeGVkKDUpXSA9IFtpLCB0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHBlcmNlbnRhZ2UgY291bnQuXG4gICAgICAgICAgICAgICAgICAgIHByZXZQY3QgPSBuZXdQY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyRnVuYywgZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlU2l6ZUNsYXNzZXMgPSAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVMYXJnZSxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlU3ViLFxuICAgICAgICAgICAgICAgIF9hKTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJTaXplQ2xhc3NlcyA9IChfYiA9IHt9LFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTm9ybWFsLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJTdWIsXG4gICAgICAgICAgICAgICAgX2IpO1xuICAgICAgICAgICAgdmFyIHZhbHVlT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVZlcnRpY2FsXTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLmNzc0NsYXNzZXMucGlwcyk7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBvcHRpb25zLm9ydCA9PT0gMCA/IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzSG9yaXpvbnRhbCA6IG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzVmVydGljYWwpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3Nlcyh0eXBlLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHNvdXJjZSA9PT0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbkNsYXNzZXMgPSBhID8gdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgOiBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNpemVDbGFzc2VzID0gYSA/IHZhbHVlU2l6ZUNsYXNzZXMgOiBtYXJrZXJTaXplQ2xhc3NlcztcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlICsgXCIgXCIgKyBvcmllbnRhdGlvbkNsYXNzZXNbb3B0aW9ucy5vcnRdICsgXCIgXCIgKyBzaXplQ2xhc3Nlc1t0eXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFNwcmVhZChvZmZzZXQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlciBmdW5jdGlvbiwgaWYgaXQgaXMgc2V0LlxuICAgICAgICAgICAgICAgIHR5cGUgPSBmaWx0ZXJGdW5jID8gZmlsdGVyRnVuYyh2YWx1ZSwgdHlwZSkgOiB0eXBlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBleHBvcnRzLlBpcHNUeXBlLk5vbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBtYXJrZXIgZm9yIGV2ZXJ5IHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyKTtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBvbmx5IGFwcGVuZGVkIGZvciBwb2ludHMgbWFya2VkICcxJyBvciAnMicuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZ2V0Q2xhc3Nlcyh0eXBlLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoZm9ybWF0dGVyLnRvKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXBwZW5kIGFsbCBwb2ludHMuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcHJlYWQpLmZvckVhY2goZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGFkZFNwcmVhZChvZmZzZXQsIHNwcmVhZFtvZmZzZXRdWzBdLCBzcHJlYWRbb2Zmc2V0XVsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVBpcHMoKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVfUGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQoc2NvcGVfUGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfUGlwcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGlwcyhwaXBzKSB7XG4gICAgICAgICAgICAvLyBGaXggIzY2OVxuICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgdmFyIHNwcmVhZCA9IGdlbmVyYXRlU3ByZWFkKHBpcHMpO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHBpcHMuZmlsdGVyO1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IHBpcHMuZm9ybWF0IHx8IHtcbiAgICAgICAgICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2NvcGVfUGlwcyA9IHNjb3BlX1RhcmdldC5hcHBlbmRDaGlsZChhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyLCBmb3JtYXQpKTtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9QaXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNob3J0aGFuZCBmb3IgYmFzZSBkaW1lbnNpb25zLlxuICAgICAgICBmdW5jdGlvbiBiYXNlU2l6ZSgpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2NvcGVfQmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciBhbHQgPSAoXCJvZmZzZXRcIiArIFtcIldpZHRoXCIsIFwiSGVpZ2h0XCJdW29wdGlvbnMub3J0XSk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vcnQgPT09IDAgPyByZWN0LndpZHRoIHx8IHNjb3BlX0Jhc2VbYWx0XSA6IHJlY3QuaGVpZ2h0IHx8IHNjb3BlX0Jhc2VbYWx0XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVyIGZvciBhdHRhY2hpbmcgZXZlbnRzIHRyb3VnaCBhIHByb3h5LlxuICAgICAgICBmdW5jdGlvbiBhdHRhY2hFdmVudChldmVudHMsIGVsZW1lbnQsIGNhbGxiYWNrLCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvICdmaWx0ZXInIGV2ZW50cyB0byB0aGUgc2xpZGVyLlxuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhIG5vZGUsIG5vdCBhIG5vZGVMaXN0XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBmaXhFdmVudChldmVudCwgZGF0YS5wYWdlT2Zmc2V0LCBkYXRhLnRhcmdldCB8fCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBmaXhFdmVudCByZXR1cm5zIGZhbHNlIGlmIHRoaXMgZXZlbnQgaGFzIGEgZGlmZmVyZW50IHRhcmdldFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gaGFuZGxpbmcgKG11bHRpLSkgdG91Y2ggZXZlbnRzO1xuICAgICAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvTm90UmVqZWN0IGlzIHBhc3NlZCBieSBhbGwgZW5kIGV2ZW50cyB0byBtYWtlIHN1cmUgcmVsZWFzZWQgdG91Y2hlc1xuICAgICAgICAgICAgICAgIC8vIGFyZSBub3QgcmVqZWN0ZWQsIGxlYXZpbmcgdGhlIHNsaWRlciBcInN0dWNrXCIgdG8gdGhlIGN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBhbiBhY3RpdmUgJ3RhcCcgdHJhbnNpdGlvbiBpcyB0YWtpbmcgcGxhY2UuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmlnaHQgb3IgbWlkZGxlIGNsaWNrcyBvbiBzdGFydCAjNDU0XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cyA9PT0gYWN0aW9ucy5zdGFydCAmJiBlLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhvdmVyICYmIGUuYnV0dG9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICdzdXBwb3J0c1Bhc3NpdmUnIGlzIG9ubHkgdHJ1ZSBpZiBhIGJyb3dzZXIgYWxzbyBzdXBwb3J0cyB0b3VjaC1hY3Rpb246IG5vbmUgaW4gQ1NTLlxuICAgICAgICAgICAgICAgIC8vIGlPUyBzYWZhcmkgZG9lcyBub3QsIHNvIGl0IGRvZXNuJ3QgZ2V0IHRvIGJlbmVmaXQgZnJvbSBwYXNzaXZlIHNjcm9sbGluZy4gaU9TIGRvZXMgc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uLCBidXQgdGhhdCBhbGxvd3MgcGFubmluZywgd2hpY2ggYnJlYWtzXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVycyBhZnRlciB6b29taW5nL29uIG5vbi1yZXNwb25zaXZlIHBhZ2VzLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzMzExMlxuICAgICAgICAgICAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5jYWxjUG9pbnQgPSBlLnBvaW50c1tvcHRpb25zLm9ydF07XG4gICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgZXZlbnQgaGFuZGxlciB3aXRoIHRoZSBldmVudCBbIGFuZCBhZGRpdGlvbmFsIGRhdGEgXS5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgIC8vIEJpbmQgYSBjbG9zdXJlIG9uIHRoZSB0YXJnZXQgZm9yIGV2ZXJ5IGV2ZW50IHR5cGUuXG4gICAgICAgICAgICBldmVudHMuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG1ldGhvZCwgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKFtldmVudE5hbWUsIG1ldGhvZF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kcztcbiAgICAgICAgfVxuICAgICAgICAvLyBQcm92aWRlIGEgY2xlYW4gZXZlbnQgd2l0aCBzdGFuZGFyZGl6ZWQgb2Zmc2V0IHZhbHVlcy5cbiAgICAgICAgZnVuY3Rpb24gZml4RXZlbnQoZSwgcGFnZU9mZnNldCwgZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEZpbHRlciB0aGUgZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIHR5cGUsIHdoaWNoIGNhbiBiZVxuICAgICAgICAgICAgLy8gdG91Y2gsIG1vdXNlIG9yIHBvaW50ZXIuIE9mZnNldCBjaGFuZ2VzIG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIG1hZGUgb24gYW4gZXZlbnQgc3BlY2lmaWMgYmFzaXMuXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIG1vdXNlID0gZS50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBwb2ludGVyID0gZS50eXBlLmluZGV4T2YoXCJwb2ludGVyXCIpID09PSAwO1xuICAgICAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICAgICAgLy8gSUUxMCBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyB3aXRoIGEgcHJlZml4O1xuICAgICAgICAgICAgaWYgKGUudHlwZS5pbmRleE9mKFwiTVNQb2ludGVyXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFcnJvbmVvdXMgZXZlbnRzIHNlZW0gdG8gYmUgcGFzc2VkIGluIG9jY2FzaW9uYWxseSBvbiBpT1MvaVBhZE9TIGFmdGVyIHVzZXIgZmluaXNoZXMgaW50ZXJhY3Rpbmcgd2l0aFxuICAgICAgICAgICAgLy8gdGhlIHNsaWRlci4gVGhleSBhcHBlYXIgdG8gYmUgb2YgdHlwZSBNb3VzZUV2ZW50LCB5ZXQgdGhleSBkb24ndCBoYXZlIHVzdWFsIHByb3BlcnRpZXMgc2V0LiBJZ25vcmVcbiAgICAgICAgICAgIC8vIGV2ZW50cyB0aGF0IGhhdmUgbm8gdG91Y2hlcyBvciBidXR0b25zIGFzc29jaWF0ZWQgd2l0aCB0aGVtLiAoIzEwNTcsICMxMDc5LCAjMTA5NSlcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIgJiYgIWUuYnV0dG9ucyAmJiAhZS50b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgb25lIGhhbmRsZSBzaG91bGQgYmUgY29uY2VybmVkIGFib3V0IGlzIHRoZSB0b3VjaGVzIHRoYXQgb3JpZ2luYXRlZCBvbiB0b3Agb2YgaXQuXG4gICAgICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgYSB0b3VjaCBvcmlnaW5hdGVkIG9uIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAgICAgdmFyIGlzVG91Y2hPblRhcmdldCA9IGZ1bmN0aW9uIChjaGVja1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBjaGVja1RvdWNoLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0YXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5jb250YWlucyh0YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jb21wb3NlZCAmJiBlLmNvbXBvc2VkUGF0aCgpLnNoaWZ0KCkgPT09IGV2ZW50VGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0b3VjaHN0YXJ0IGV2ZW50cywgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgc3RpbGwgbm8gbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgICAgIC8vIHRvdWNoIG9uIHRoZSB0YXJnZXQgc28gd2UgbG9vayBhbW9uZ3N0IGFsbCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUudG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IHN1cHBvcnQgbW9yZSB0aGFuIG9uZSB0b3VjaCBwZXIgaGFuZGxlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIG90aGVyIGNhc2VzLCBmaW5kIG9uIGNoYW5nZWRUb3VjaGVzIGlzIGVub3VnaC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFRvdWNoID0gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChlLmNoYW5nZWRUb3VjaGVzLCBpc1RvdWNoT25UYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgaWYgdGhlIHRhcmdldCB0b3VjaCBoYXMgbm90IG1vdmVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2gucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQgfHwgZ2V0UGFnZU9mZnNldChzY29wZV9Eb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAobW91c2UgfHwgcG9pbnRlcikge1xuICAgICAgICAgICAgICAgIHggPSBlLmNsaWVudFggKyBwYWdlT2Zmc2V0Lng7XG4gICAgICAgICAgICAgICAgeSA9IGUuY2xpZW50WSArIHBhZ2VPZmZzZXQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQ7XG4gICAgICAgICAgICBlLnBvaW50cyA9IFt4LCB5XTtcbiAgICAgICAgICAgIGUuY3Vyc29yID0gbW91c2UgfHwgcG9pbnRlcjsgLy8gRml4ICM0MzVcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBhIGNvb3JkaW5hdGUgaW4gdGhlIGRvY3VtZW50IHRvIGEgcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNQb2ludFRvUGVyY2VudGFnZShjYWxjUG9pbnQpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNhbGNQb2ludCAtIG9mZnNldChzY29wZV9CYXNlLCBvcHRpb25zLm9ydCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobG9jYXRpb24gKiAxMDApIC8gYmFzZVNpemUoKTtcbiAgICAgICAgICAgIC8vIENsYW1wIHByb3Bvc2FsIGJldHdlZW4gMCUgYW5kIDEwMCVcbiAgICAgICAgICAgIC8vIE91dC1vZi1ib3VuZCBjb29yZGluYXRlcyBtYXkgb2NjdXIgd2hlbiAubm9VaS1iYXNlIHBzZXVkby1lbGVtZW50c1xuICAgICAgICAgICAgLy8gYXJlIHVzZWQgKGUuZy4gY29udGFpbmVkIGhhbmRsZXMgZmVhdHVyZSlcbiAgICAgICAgICAgIHByb3Bvc2FsID0gbGltaXQocHJvcG9zYWwpO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gcHJvcG9zYWwgOiBwcm9wb3NhbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGhhbmRsZSBjbG9zZXN0IHRvIGEgY2VydGFpbiBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2xvc2VzdEhhbmRsZShjbGlja2VkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzbWFsbGVzdERpZmZlcmVuY2UgPSAxMDA7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZmFsc2U7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlZCBoYW5kbGVzIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRGlzYWJsZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID0gTWF0aC5hYnMoaGFuZGxlUG9zaXRpb24gLSBjbGlja2VkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgICAgICB2YXIgY2xpY2tBdEVkZ2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPT09IDEwMCAmJiBzbWFsbGVzdERpZmZlcmVuY2UgPT09IDEwMDtcbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbmNlIHdpdGggdGhpcyBoYW5kbGUgaXMgc21hbGxlciB0aGFuIHRoZSBwcmV2aW91c2x5IGNoZWNrZWQgaGFuZGxlXG4gICAgICAgICAgICAgICAgdmFyIGlzQ2xvc2VyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDwgc21hbGxlc3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlckFmdGVyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDw9IHNtYWxsZXN0RGlmZmVyZW5jZSAmJiBjbGlja2VkUG9zaXRpb24gPiBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoaXNDbG9zZXIgfHwgaXNDbG9zZXJBZnRlciB8fCBjbGlja0F0RWRnZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgc21hbGxlc3REaWZmZXJlbmNlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlICdlbmQnIHdoZW4gYSBtb3VzZSBvciBwZW4gbGVhdmVzIHRoZSBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZG9jdW1lbnRMZWF2ZShldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2VvdXRcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJIVE1MXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBtb3ZlbWVudCBvbiBkb2N1bWVudCBmb3IgaGFuZGxlIGFuZCByYW5nZSBkcmFnLlxuICAgICAgICBmdW5jdGlvbiBldmVudE1vdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNDk4XG4gICAgICAgICAgICAvLyBDaGVjayB2YWx1ZSBvZiAuYnV0dG9ucyBpbiAnc3RhcnQnIHRvIHdvcmsgYXJvdW5kIGEgYnVnIGluIElFMTAgbW9iaWxlIChkYXRhLmJ1dHRvbnNQcm9wZXJ0eSkuXG4gICAgICAgICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzkyNzAwNS9tb2JpbGUtaWUxMC13aW5kb3dzLXBob25lLWJ1dHRvbnMtcHJvcGVydHktb2YtcG9pbnRlcm1vdmUtZXZlbnQtYWx3YXlzLXplcm9cbiAgICAgICAgICAgIC8vIElFOSBoYXMgLmJ1dHRvbnMgYW5kIC53aGljaCB6ZXJvIG9uIG1vdXNlbW92ZS5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggYnJlYWtzIHRoZSBzcGVjIE1ETiBkZWZpbmVzLlxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNU0lFIDlcIikgPT09IC0xICYmIGV2ZW50LmJ1dHRvbnMgPT09IDAgJiYgZGF0YS5idXR0b25zUHJvcGVydHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIG1vdmluZyB1cCBvciBkb3duXG4gICAgICAgICAgICB2YXIgbW92ZW1lbnQgPSAob3B0aW9ucy5kaXIgPyAtMSA6IDEpICogKGV2ZW50LmNhbGNQb2ludCAtIGRhdGEuc3RhcnRDYWxjUG9pbnQpO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgbW92ZW1lbnQgaW50byBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHNsaWRlciB3aWR0aC9oZWlnaHRcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IChtb3ZlbWVudCAqIDEwMCkgLyBkYXRhLmJhc2VTaXplO1xuICAgICAgICAgICAgbW92ZUhhbmRsZXMobW92ZW1lbnQgPiAwLCBwcm9wb3NhbCwgZGF0YS5sb2NhdGlvbnMsIGRhdGEuaGFuZGxlTnVtYmVycywgZGF0YS5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVbmJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQsIGNhbGwgY2FsbGJhY2tzLlxuICAgICAgICBmdW5jdGlvbiBldmVudEVuZChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhlIGhhbmRsZSBpcyBubyBsb25nZXIgYWN0aXZlLCBzbyByZW1vdmUgdGhlIGNsYXNzLlxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZGF0YS5oYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLCB3aGljaCBhcmUgYWRkZWQgb24gJ3N0YXJ0Jy5cbiAgICAgICAgICAgIGRhdGEubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Eb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjWzBdLCBjWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkcmFnZ2luZyBjbGFzcy5cbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY3Vyc29yIHN0eWxlcyBhbmQgdGV4dC1zZWxlY3Rpb24gZXZlbnRzIGJvdW5kIHRvIHRoZSBib2R5LlxuICAgICAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXZlbnRzLnNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImVuZFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQmluZCBtb3ZlIGV2ZW50cyBvbiBkb2N1bWVudC5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRTdGFydChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIGV2ZW50IGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZU51bWJlcnMuc29tZShpc0hhbmRsZURpc2FibGVkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2RhdGEuaGFuZGxlTnVtYmVyc1swXV07XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gaGFuZGxlT3JpZ2luLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGhhbmRsZSBhcyAnYWN0aXZlJyBzbyBpdCBjYW4gYmUgc3R5bGVkLlxuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBIGRyYWcgc2hvdWxkIG5ldmVyIHByb3BhZ2F0ZSB1cCB0byB0aGUgJ3RhcCcgZXZlbnQuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLlxuICAgICAgICAgICAgdmFyIG1vdmVFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudE1vdmUsIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZXZlbnQgdGFyZ2V0IGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSBvcmlnaW5hbCBvbmUgc28gdGhhdCB3ZSBrZWVwXG4gICAgICAgICAgICAgICAgLy8gcmVseWluZyBvbiBpdCB0byBleHRyYWN0IHRhcmdldCB0b3VjaGVzLlxuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGRhdGEuY29ubmVjdCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBzdGFydENhbGNQb2ludDogZXZlbnQuY2FsY1BvaW50LFxuICAgICAgICAgICAgICAgIGJhc2VTaXplOiBiYXNlU2l6ZSgpLFxuICAgICAgICAgICAgICAgIHBhZ2VPZmZzZXQ6IGV2ZW50LnBhZ2VPZmZzZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNQcm9wZXJ0eTogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZW5kRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLmVuZCwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudEVuZCwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG91dEV2ZW50ID0gYXR0YWNoRXZlbnQoXCJtb3VzZW91dFwiLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50TGVhdmUsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIHB1c2hlZCB0aGUgbGlzdGVuZXJzIGluIHRoZSBsaXN0ZW5lciBsaXN0IHJhdGhlciB0aGFuIGNyZWF0aW5nXG4gICAgICAgICAgICAvLyBhIG5ldyBvbmUgYXMgaXQgaGFzIGFscmVhZHkgYmVlbiBwYXNzZWQgdG8gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2guYXBwbHkobGlzdGVuZXJzLCBtb3ZlRXZlbnQuY29uY2F0KGVuZEV2ZW50LCBvdXRFdmVudCkpO1xuICAgICAgICAgICAgLy8gVGV4dCBzZWxlY3Rpb24gaXNuJ3QgYW4gaXNzdWUgb24gdG91Y2ggZGV2aWNlcyxcbiAgICAgICAgICAgIC8vIHNvIGFkZGluZyBjdXJzb3Igc3R5bGVzIGNhbiBiZSBza2lwcGVkLlxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnNvcikge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlICdJJyBjdXJzb3IgYW5kIGV4dGVuZCB0aGUgcmFuZ2UtZHJhZyBjdXJzb3IuXG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5zdHlsZS5jdXJzb3IgPSBnZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIHRhcmdldCB3aXRoIGEgZHJhZ2dpbmcgc3RhdGUuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0ZXh0IHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgICAgIC8vIEluIG5vVWlTbGlkZXIgPD0gOS4yLjAsIHRoaXMgd2FzIGhhbmRsZWQgYnkgY2FsbGluZyBwcmV2ZW50RGVmYXVsdCBvbiBtb3VzZS90b3VjaCBzdGFydC9tb3ZlLFxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIHNjcm9sbCBibG9ja2luZy4gVGhlIHNlbGVjdHN0YXJ0IGV2ZW50IGlzIHN1cHBvcnRlZCBieSBGaXJlRm94IHN0YXJ0aW5nIGZyb20gdmVyc2lvbiA1MixcbiAgICAgICAgICAgICAgICAvLyBtZWFuaW5nIHRoZSBvbmx5IGhvbGRvdXQgaXMgaU9TIFNhZmFyaS4gVGhpcyBkb2Vzbid0IG1hdHRlcjogdGV4dCBzZWxlY3Rpb24gaXNuJ3QgdHJpZ2dlcmVkIHRoZXJlLlxuICAgICAgICAgICAgICAgIC8vIFRoZSAnY3Vyc29yJyBmbGFnIGlzIGZhbHNlLlxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2VsZWN0c3RhcnRcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInN0YXJ0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGNsb3Nlc3QgaGFuZGxlIHRvIHRhcHBlZCBsb2NhdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRUYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoZSB0YXAgZXZlbnQgc2hvdWxkbid0IHByb3BhZ2F0ZSB1cFxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXIgPSBnZXRDbG9zZXN0SGFuZGxlKHByb3Bvc2FsKTtcbiAgICAgICAgICAgIC8vIFRhY2tsZSB0aGUgY2FzZSB0aGF0IGFsbCBoYW5kbGVzIGFyZSAnZGlzYWJsZWQnLlxuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGbGFnIHRoZSBzbGlkZXIgYXMgaXQgaXMgbm93IGluIGEgdHJhbnNpdGlvbmFsIHN0YXRlLlxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiB0YWtlcyBhIGNvbmZpZ3VyYWJsZSBhbW91bnQgb2YgbXMgKGRlZmF1bHQgMzAwKS4gUmUtZW5hYmxlIHRoZSBzbGlkZXIgYWZ0ZXIgdGhhdC5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBwcm9wb3NhbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRaaW5kZXgoKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNsaWRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImNoYW5nZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRTdGFydChldmVudCwgeyBoYW5kbGVOdW1iZXJzOiBbaGFuZGxlTnVtYmVyXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJlcyBhICdob3ZlcicgZXZlbnQgZm9yIGEgaG92ZXJlZCBtb3VzZS9wZW4gcG9zaXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50SG92ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICAgICAgdmFyIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChwcm9wb3NhbCk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcImhvdmVyXCIgPT09IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNjb3BlX1NlbGYsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlcyBrZXlkb3duIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICAvLyBEb24ndCBtb3ZlIHRoZSBkb2N1bWVudCB3aGVuIHByZXNzaW5nIGFycm93IGtleXMgb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoaXNTbGlkZXJEaXNhYmxlZCgpIHx8IGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBob3Jpem9udGFsS2V5cyA9IFtcIkxlZnRcIiwgXCJSaWdodFwiXTtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNhbEtleXMgPSBbXCJEb3duXCIsIFwiVXBcIl07XG4gICAgICAgICAgICB2YXIgbGFyZ2VTdGVwS2V5cyA9IFtcIlBhZ2VEb3duXCIsIFwiUGFnZVVwXCJdO1xuICAgICAgICAgICAgdmFyIGVkZ2VLZXlzID0gW1wiSG9tZVwiLCBcIkVuZFwiXTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciAmJiAhb3B0aW9ucy5vcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBPbiBhbiByaWdodC10by1sZWZ0IHNsaWRlciwgdGhlIGxlZnQgYW5kIHJpZ2h0IGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEtleXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5vcnQgJiYgIW9wdGlvbnMuZGlyKSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYSB0b3AtdG8tYm90dG9tIHNsaWRlciwgdGhlIHVwIGFuZCBkb3duIGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICAgICAgdmVydGljYWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBsYXJnZVN0ZXBLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0cmlwIFwiQXJyb3dcIiBmb3IgSUUgY29tcGF0aWJpbGl0eS4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQva2V5XG4gICAgICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5LnJlcGxhY2UoXCJBcnJvd1wiLCBcIlwiKTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlRG93biA9IGtleSA9PT0gbGFyZ2VTdGVwS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc0xhcmdlVXAgPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMV07XG4gICAgICAgICAgICB2YXIgaXNEb3duID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSB8fCBpc0xhcmdlRG93bjtcbiAgICAgICAgICAgIHZhciBpc1VwID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMV0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1sxXSB8fCBpc0xhcmdlVXA7XG4gICAgICAgICAgICB2YXIgaXNNaW4gPSBrZXkgPT09IGVkZ2VLZXlzWzBdO1xuICAgICAgICAgICAgdmFyIGlzTWF4ID0ga2V5ID09PSBlZGdlS2V5c1sxXTtcbiAgICAgICAgICAgIGlmICghaXNEb3duICYmICFpc1VwICYmICFpc01pbiAmJiAhaXNNYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdG87XG4gICAgICAgICAgICBpZiAoaXNVcCB8fCBpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNEb3duID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzID0gZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSBzdGVwc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgICAgIC8vIEF0IHRoZSBlZGdlIG9mIGEgc2xpZGVyLCBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBzdGVwIHNldCwgdXNlIHRoZSBkZWZhdWx0IG9mIDEwJSBvZiB0aGUgc3ViLXJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPSBzY29wZV9TcGVjdHJ1bS5nZXREZWZhdWx0U3RlcChzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSwgaXNEb3duLCBvcHRpb25zLmtleWJvYXJkRGVmYXVsdFN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZVVwIHx8IGlzTGFyZ2VEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZFBhZ2VNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IGZvciBkb3duIHN0ZXBzXG4gICAgICAgICAgICAgICAgc3RlcCA9IChpc0Rvd24gPyAtMSA6IDEpICogc3RlcDtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdICsgc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTWF4KSB7XG4gICAgICAgICAgICAgICAgLy8gRW5kIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsW29wdGlvbnMuc3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhvbWUga2V5XG4gICAgICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHRvKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBldmVudHMgdG8gc2V2ZXJhbCBzbGlkZXIgcGFydHMuXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRTbGlkZXJFdmVudHMoYmVoYXZpb3VyKSB7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHN0YW5kYXJkIGRyYWcgZXZlbnQgdG8gdGhlIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAoIWJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBldmVudHMgYXJlIG9ubHkgYm91bmQgdG8gdGhlIHZpc3VhbCBoYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgbm90IHRoZSAncmVhbCcgb3JpZ2luIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGhhbmRsZS5jaGlsZHJlblswXSwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHRhcCBldmVudCB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLnRhcCkge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIHNjb3BlX0Jhc2UsIGV2ZW50VGFwLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJlIGhvdmVyIGV2ZW50c1xuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5ob3Zlcikge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfQmFzZSwgZXZlbnRIb3Zlciwge1xuICAgICAgICAgICAgICAgICAgICBob3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIHJhbmdlIGRyYWdnYWJsZS5cbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZykge1xuICAgICAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ID09PSBmYWxzZSB8fCBpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gc2NvcGVfQ29ubmVjdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVCZWZvcmUgPSBzY29wZV9IYW5kbGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVBZnRlciA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRIb2xkZXJzID0gW2Nvbm5lY3RdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlc1RvRHJhZyA9IFtoYW5kbGVCZWZvcmUsIGhhbmRsZUFmdGVyXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBbaW5kZXggLSAxLCBpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKGNvbm5lY3QsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSByYW5nZSBpcyBmaXhlZCwgdGhlIGVudGlyZSByYW5nZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gYmUgZHJhZ2dlZCBieSB0aGUgaGFuZGxlcy4gVGhlIGhhbmRsZSBpbiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gb3JpZ2luIHdpbGwgcHJvcGFnYXRlIHRoZSBzdGFydCBldmVudCB1cHdhcmQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBuZWVkcyB0byBiZSBib3VuZCBtYW51YWxseSBvbiB0aGUgb3RoZXIuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUJlZm9yZS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVBZnRlci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzVG9EcmFnID0gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnNUb0RyYWcgPSBzY29wZV9IYW5kbGVOdW1iZXJzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgZXZlbnRIb2xkZXIsIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzOiBoYW5kbGVzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGhhbmRsZU51bWJlcnNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggYW4gZXZlbnQgdG8gdGhpcyBzbGlkZXIsIHBvc3NpYmx5IGluY2x1ZGluZyBhIG5hbWVzcGFjZVxuICAgICAgICBmdW5jdGlvbiBiaW5kRXZlbnQobmFtZXNwYWNlZEV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gPSBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSB8fCBbXTtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGV2ZW50IGJvdW5kIGlzICd1cGRhdGUsJyBmaXJlIGl0IGltbWVkaWF0ZWx5IGZvciBhbGwgaGFuZGxlcy5cbiAgICAgICAgICAgIGlmIChuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWxOYW1lc3BhY2UobmFtZXNwYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXNwYWNlID09PSBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhIHx8IG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5kbyBhdHRhY2htZW50IG9mIGV2ZW50XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5hbWVzcGFjZWRFdmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmFtZXNwYWNlZEV2ZW50ICYmIG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnQgPyBuYW1lc3BhY2VkRXZlbnQuc3Vic3RyaW5nKGV2ZW50Lmxlbmd0aCkgOiBuYW1lc3BhY2VkRXZlbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdEV2ZW50ID0gYmluZC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICAgICAgdmFyIHROYW1lc3BhY2UgPSBiaW5kLnN1YnN0cmluZyh0RXZlbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoKCFldmVudCB8fCBldmVudCA9PT0gdEV2ZW50KSAmJiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZGVsZXRlIHByb3RlY3RlZCBpbnRlcm5hbCBldmVudCBpZiBpbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW50ZXJuYWxOYW1lc3BhY2UodE5hbWVzcGFjZSkgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGVfRXZlbnRzW2JpbmRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXh0ZXJuYWwgZXZlbnQgaGFuZGxpbmdcbiAgICAgICAgZnVuY3Rpb24gZmlyZUV2ZW50KGV2ZW50TmFtZSwgaGFuZGxlTnVtYmVyLCB0YXApIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUeXBlID0gdGFyZ2V0RXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzbGlkZXIgcHVibGljIEFQSSBhcyB0aGUgc2NvcGUgKCd0aGlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHZhbHVlcyBhcyBhcnJheSwgc28gYXJnXzFbYXJnXzJdIGlzIGFsd2F5cyB2YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBpbmRleCwgMCBvciAxXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW4tZm9ybWF0dGVkIHNsaWRlciB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50IGlzIGZpcmVkIGJ5IHRhcCwgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwIHx8IGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlZnQgb2Zmc2V0IG9mIHRoZSBoYW5kbGUsIGluIHJlbGF0aW9uIHRvIHRoZSBzbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgdG8gYW4gYWNjZXNzaWJsZSBwYXJhbWV0ZXIgd2hlbiB0aGlzIGlzIHVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BsaXQgb3V0IHRoZSBoYW5kbGUgcG9zaXRpb25pbmcgbG9naWMgc28gdGhlIE1vdmUgZXZlbnQgY2FuIHVzZSBpdCwgdG9vXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSGFuZGxlUG9zaXRpb24ocmVmZXJlbmNlLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBnZXRWYWx1ZSwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZTtcbiAgICAgICAgICAgIC8vIEZvciBzbGlkZXJzIHdpdGggbXVsdGlwbGUgaGFuZGxlcywgbGltaXQgbW92ZW1lbnQgdG8gdGhlIG90aGVyIGhhbmRsZS5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBtYXJnaW4gb3B0aW9uIGJ5IGFkZGluZyBpdCB0byB0aGUgaGFuZGxlIHBvc2l0aW9ucy5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgIW9wdGlvbnMuZXZlbnRzLnVuY29uc3RyYWluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5tYXJnaW4sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubWFyZ2luLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBsaW1pdCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBlZmZlY3QsIGxpbWl0aW5nIGhhbmRsZXMgdG8gYVxuICAgICAgICAgICAgLy8gbWF4aW11bSBkaXN0YW5jZSBmcm9tIGFub3RoZXIuIExpbWl0IG11c3QgYmUgPiAwLCBhcyBvdGhlcndpc2VcbiAgICAgICAgICAgIC8vIGhhbmRsZXMgd291bGQgYmUgdW5tb3ZhYmxlLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubGltaXQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubGltaXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIHBhZGRpbmcgb3B0aW9uIGtlZXBzIHRoZSBoYW5kbGVzIGEgY2VydGFpbiBkaXN0YW5jZSBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gZWRnZXMgb2YgdGhlIHNsaWRlci4gUGFkZGluZyBtdXN0IGJlID4gMC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgwLCBvcHRpb25zLnBhZGRpbmdbMF0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDEwMCwgb3B0aW9ucy5wYWRkaW5nWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc21vb3RoU3RlcHMpIHtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGltaXQgcGVyY2VudGFnZSB0byB0aGUgMCAtIDEwMCByYW5nZVxuICAgICAgICAgICAgdG8gPSBsaW1pdCh0byk7XG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgaGFuZGxlIGNhbid0IG1vdmVcbiAgICAgICAgICAgIGlmICh0byA9PT0gcmVmZXJlbmNlW2hhbmRsZU51bWJlcl0gJiYgIWdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZXMgc2xpZGVyIG9yaWVudGF0aW9uIHRvIGNyZWF0ZSBDU1MgcnVsZXMuIGEgPSBiYXNlIHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBpblJ1bGVPcmRlcih2LCBhKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG9wdGlvbnMub3J0O1xuICAgICAgICAgICAgcmV0dXJuIChvID8gYSA6IHYpICsgXCIsIFwiICsgKG8gPyB2IDogYSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZXMgaGFuZGxlKHMpIGJ5IGEgcGVyY2VudGFnZVxuICAgICAgICAvLyAoYm9vbCwgJSB0byBtb3ZlLCBbJSB3aGVyZSBoYW5kbGUgc3RhcnRlZCwgLi4uXSwgW2luZGV4IGluIHNjb3BlX0hhbmRsZXMsIC4uLl0pXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIGxvY2F0aW9ucywgaGFuZGxlTnVtYmVycywgY29ubmVjdCkge1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FscyA9IGxvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgLy8gU3RvcmUgZmlyc3QgaGFuZGxlIG5vdywgc28gd2Ugc3RpbGwgaGF2ZSBpdCBpbiBjYXNlIGhhbmRsZU51bWJlcnMgaXMgcmV2ZXJzZWRcbiAgICAgICAgICAgIHZhciBmaXJzdEhhbmRsZSA9IGhhbmRsZU51bWJlcnNbMF07XG4gICAgICAgICAgICB2YXIgc21vb3RoU3RlcHMgPSBvcHRpb25zLmV2ZW50cy5zbW9vdGhTdGVwcztcbiAgICAgICAgICAgIHZhciBiID0gWyF1cHdhcmQsIHVwd2FyZF07XG4gICAgICAgICAgICB2YXIgZiA9IFt1cHdhcmQsICF1cHdhcmRdO1xuICAgICAgICAgICAgLy8gQ29weSBoYW5kbGVOdW1iZXJzIHNvIHdlIGRvbid0IGNoYW5nZSB0aGUgZGF0YXNldFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycyA9IGhhbmRsZU51bWJlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSB3aGljaCBoYW5kbGUgaXMgJ2xlYWRpbmcnLlxuICAgICAgICAgICAgLy8gSWYgdGhhdCBvbmUgY2FuJ3QgbW92ZSB0aGUgc2Vjb25kIGNhbid0IGVpdGhlci5cbiAgICAgICAgICAgIGlmICh1cHdhcmQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgMTogZ2V0IHRoZSBtYXhpbXVtIHBlcmNlbnRhZ2UgdGhhdCBhbnkgb2YgdGhlIGhhbmRsZXMgY2FuIG1vdmVcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHByb3Bvc2FscywgaGFuZGxlTnVtYmVyLCBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIG9uZSBvZiB0aGUgaGFuZGxlcyBjYW4ndCBtb3ZlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCA9IHRvIC0gcHJvcG9zYWxzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1c2luZyBvbmUgaGFuZGxlLCBjaGVjayBiYWNrd2FyZCBBTkQgZm9yd2FyZFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYiA9IGYgPSBbdHJ1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMjogVHJ5IHRvIHNldCB0aGUgaGFuZGxlcyB3aXRoIHRoZSBmb3VuZCBwZXJjZW50YWdlXG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgIHN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgbG9jYXRpb25zW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKSB8fCBzdGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3RlcCAzOiBJZiBhIGhhbmRsZSBtb3ZlZCwgZmlyZSBldmVudHNcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGNvbm5lY3QsIHRoZW4gZmlyZSBkcmFnIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImRyYWdcIiwgZmlyc3RIYW5kbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUYWtlcyBhIGJhc2UgdmFsdWUgYW5kIGFuIG9mZnNldC4gVGhpcyBvZmZzZXQgaXMgdXNlZCBmb3IgdGhlIGNvbm5lY3QgYmFyIHNpemUuXG4gICAgICAgIC8vIEluIHRoZSBpbml0aWFsIGRlc2lnbiBmb3IgdGhpcyBmZWF0dXJlLCB0aGUgb3JpZ2luIGVsZW1lbnQgd2FzIDElIHdpZGUuXG4gICAgICAgIC8vIFVuZm9ydHVuYXRlbHksIGEgcm91bmRpbmcgYnVnIGluIENocm9tZSBtYWtlcyBpdCBpbXBvc3NpYmxlIHRvIGltcGxlbWVudCB0aGlzIGZlYXR1cmVcbiAgICAgICAgLy8gaW4gdGhpcyBtYW5uZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5ODIyM1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gYSAtIGIgOiBhO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc2NvcGVfTG9jYXRpb25zIGFuZCBzY29wZV9WYWx1ZXMsIHVwZGF0ZXMgdmlzdWFsIHN0YXRlXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvbnMuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgdmFsdWUgdG8gdGhlIHNsaWRlciBzdGVwcGluZy9yYW5nZS5cbiAgICAgICAgICAgIHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IHRyYW5zZm9ybURpcmVjdGlvbih0bywgMCkgLSBzY29wZV9EaXJPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNsYXRpb24gKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9IHRyYW5zbGF0ZVJ1bGU7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlciArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMgYmVmb3JlIHRoZSBzbGlkZXIgbWlkZGxlIGFyZSBzdGFja2VkIGxhdGVyID0gaGlnaGVyLFxuICAgICAgICAvLyBIYW5kbGVzIGFmdGVyIHRoZSBtaWRkbGUgbGF0ZXIgaXMgbG93ZXJcbiAgICAgICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgICAgICBmdW5jdGlvbiBzZXRaaW5kZXgoKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIHZhciB6SW5kZXggPSAzICsgKHNjb3BlX0hhbmRsZXMubGVuZ3RoICsgZGlyICogaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGUuekluZGV4ID0gU3RyaW5nKHpJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHN1Z2dlc3RlZCB2YWx1ZXMgYW5kIGFwcGx5IG1hcmdpbiwgc3RlcC5cbiAgICAgICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICAgICAgZnVuY3Rpb24gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGV4YWN0SW5wdXQsIHNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICBpZiAoIWV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlcyBzdHlsZSBhdHRyaWJ1dGUgZm9yIGNvbm5lY3Qgbm9kZXNcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAgICAgLy8gU2tpcCBjb25uZWN0cyBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIGlmICghc2NvcGVfQ29ubmVjdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGwgPSAwO1xuICAgICAgICAgICAgdmFyIGggPSAxMDA7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBsID0gc2NvcGVfTG9jYXRpb25zW2luZGV4IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBoID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHVzZSB0d28gcnVsZXM6XG4gICAgICAgICAgICAvLyAndHJhbnNsYXRlJyB0byBjaGFuZ2UgdGhlIGxlZnQvdG9wIG9mZnNldDtcbiAgICAgICAgICAgIC8vICdzY2FsZScgdG8gY2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgZWxlbWVudDtcbiAgICAgICAgICAgIC8vIEFzIHRoZSBlbGVtZW50IGhhcyBhIHdpZHRoIG9mIDEwMCUsIGEgdHJhbnNsYXRpb24gb2YgMTAwJSBpcyBlcXVhbCB0byAxMDAlIG9mIHRoZSBwYXJlbnQgKC5ub1VpLWJhc2UpXG4gICAgICAgICAgICB2YXIgY29ubmVjdFdpZHRoID0gaCAtIGw7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNmb3JtRGlyZWN0aW9uKGwsIGNvbm5lY3RXaWR0aCkgKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICB2YXIgc2NhbGVSdWxlID0gXCJzY2FsZShcIiArIGluUnVsZU9yZGVyKGNvbm5lY3RXaWR0aCAvIDEwMCwgXCIxXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0c1tpbmRleF0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlUnVsZSArIFwiIFwiICsgc2NhbGVSdWxlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFBhcnNlcyB2YWx1ZSBwYXNzZWQgdG8gLnNldCBtZXRob2QuIFJldHVybnMgY3VycmVudCB2YWx1ZSBpZiBub3QgcGFyc2UtYWJsZS5cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVRvVmFsdWUodG8sIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxuICAgICAgICAgICAgLy8gSW5wdXR0aW5nICdmYWxzZScgaXMgaW52YWxpZC5cbiAgICAgICAgICAgIGlmICh0byA9PT0gbnVsbCB8fCB0byA9PT0gZmFsc2UgfHwgdG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgZm9ybWF0dGVkIG51bWJlciB3YXMgcGFzc2VkLCBhdHRlbXB0IHRvIGRlY29kZSBpdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB0byA9IFN0cmluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuZm9ybWF0LmZyb20odG8pO1xuICAgICAgICAgICAgaWYgKHRvICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBwYXJzaW5nIHRoZSBudW1iZXIgZmFpbGVkLCB1c2UgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzTmFOKHRvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXQoaW5wdXQsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xuICAgICAgICAgICAgdmFyIGlzSW5pdCA9IHNjb3BlX0xvY2F0aW9uc1swXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gRXZlbnQgZmlyZXMgYnkgZGVmYXVsdFxuICAgICAgICAgICAgZmlyZVNldEV2ZW50ID0gZmlyZVNldEV2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmlyZVNldEV2ZW50O1xuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGlzIG9wdGlvbmFsLlxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbml0aWFsIHZhbHVlcyB3ZXJlIHNldCBiZWZvcmUgdXNpbmcgYW5pbWF0ZWQgcGxhY2VtZW50LlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZSAmJiAhaXNJbml0KSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcnN0IHBhc3MsIHdpdGhvdXQgbG9va0FoZWFkIGJ1dCB3aXRoIGxvb2tCYWNrd2FyZC4gVmFsdWVzIGFyZSBzZXQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCByZXNvbHZlVG9WYWx1ZSh2YWx1ZXNbaGFuZGxlTnVtYmVyXSwgaGFuZGxlTnVtYmVyKSwgdHJ1ZSwgZmFsc2UsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgaSA9IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICAvLyBTcHJlYWQgaGFuZGxlcyBldmVubHkgYWNyb3NzIHRoZSBzbGlkZXIgaWYgdGhlIHJhbmdlIGhhcyBubyBzaXplIChtaW49bWF4KVxuICAgICAgICAgICAgaWYgKGlzSW5pdCAmJiBzY29wZV9TcGVjdHJ1bS5oYXNOb1NpemUoKSkge1xuICAgICAgICAgICAgICAgIGV4YWN0SW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1swXSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhY2VfMSA9IDEwMCAvIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSBoYW5kbGVOdW1iZXIgKiBzcGFjZV8xO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWNvbmRhcnkgcGFzc2VzLiBOb3cgdGhhdCBhbGwgYmFzZSB2YWx1ZXMgYXJlIHNldCwgYXBwbHkgY29uc3RyYWludHMuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIGFsbCBoYW5kbGVzIHRvIGVuc3VyZSBjb25zdHJhaW50cyBhcmUgYXBwbGllZCBmb3IgdGhlIGVudGlyZSBzbGlkZXIgKElzc3VlICMxMDA5KVxuICAgICAgICAgICAgZm9yICg7IGkgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgdGhlIGV2ZW50IG9ubHkgZm9yIGhhbmRsZXMgdGhhdCByZWNlaXZlZCBhIG5ldyB2YWx1ZSwgYXMgcGVyICM1NzlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHNsaWRlciB0byBpbml0aWFsIHZhbHVlc1xuICAgICAgICBmdW5jdGlvbiB2YWx1ZVJlc2V0KGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdmFsdWUgZm9yIGEgc2luZ2xlIGhhbmRsZVxuICAgICAgICBmdW5jdGlvbiB2YWx1ZVNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHZhbHVlLCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBudW1lcmljIGlucHV0XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXIgPSBOdW1iZXIoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmICghKGhhbmRsZU51bWJlciA+PSAwICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIiArIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMb29rIGJvdGggYmFja3dhcmQgYW5kIGZvcndhcmQsIHNpbmNlIHdlIGRvbid0IHdhbnQgdGhpcyBoYW5kbGUgdG8gXCJwdXNoXCIgb3RoZXIgaGFuZGxlcyAoIzk2MCk7XG4gICAgICAgICAgICAvLyBUaGUgZXhhY3RJbnB1dCBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBpZ25vcmUgc2xpZGVyIHN0ZXBwaW5nICgjNDM2KVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlR2V0KHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCA9PT0gdm9pZCAwKSB7IHVuZW5jb2RlZCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGEgY29weSBvZiB0aGUgcmF3IHZhbHVlc1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9WYWx1ZXMubGVuZ3RoID09PSAxID8gc2NvcGVfVmFsdWVzWzBdIDogc2NvcGVfVmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHNjb3BlX1ZhbHVlcy5tYXAob3B0aW9ucy5mb3JtYXQudG8pO1xuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgaGFuZGxlIGlzIHVzZWQsIHJldHVybiBhIHNpbmdsZSB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlcyBjbGFzc2VzIGZyb20gdGhlIHJvb3QgYW5kIGVtcHRpZXMgaXQuXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgcHJvdGVjdGVkIGludGVybmFsIGxpc3RlbmVyc1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmNzc0NsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aGlsZSAoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9UYXJnZXQucmVtb3ZlQ2hpbGQoc2NvcGVfVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIHNjb3BlX1RhcmdldC5ub1VpU2xpZGVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIG5lYXJieVN0ZXBzID0gc2NvcGVfU3BlY3RydW0uZ2V0TmVhcmJ5U3RlcHMobG9jYXRpb24pO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIHZhciBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc25hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlIC0gdmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIG5leHQgdmFsdWUgaW4gdGhpcyBzdGVwIG1vdmVzIGludG8gdGhlIG5leHQgc3RlcCxcbiAgICAgICAgICAgIC8vIHRoZSBpbmNyZW1lbnQgaXMgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IHN0ZXAgLSB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgKyBpbmNyZW1lbnQgPiBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBiZXlvbmQgdGhlIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgaGFuZGxlIGlzIGF0IHRoZSBzdGFydCBvZiBhIHN0ZXAsIGl0IGFsd2F5cyBzdGVwcyBiYWNrIGludG8gdGhlIHByZXZpb3VzIHN0ZXAgZmlyc3RcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vdywgaWYgYXQgdGhlIHNsaWRlciBlZGdlcywgdGhlcmUgaXMgbm8gaW4vZGVjcmVtZW50XG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT09IDEwMCkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcyBwZXIgIzM5MSwgdGhlIGNvbXBhcmlzb24gZm9yIHRoZSBkZWNyZW1lbnQgc3RlcCBjYW4gaGF2ZSBzb21lIHJvdW5kaW5nIGlzc3Vlcy5cbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSBzY29wZV9TcGVjdHJ1bS5jb3VudFN0ZXBEZWNpbWFscygpO1xuICAgICAgICAgICAgLy8gUm91bmQgcGVyICMzOTFcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwgJiYgaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IE51bWJlcihpbmNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWNyZW1lbnQgIT09IG51bGwgJiYgZGVjcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IE51bWJlcihkZWNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZGVjcmVtZW50LCBpbmNyZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIHNpemUgZm9yIHRoZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwcygpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVOdW1iZXJzLm1hcChnZXROZXh0U3RlcHNGb3JIYW5kbGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0YWJsZTogbWFyZ2luLCBsaW1pdCwgcGFkZGluZywgc3RlcCwgcmFuZ2UsIGFuaW1hdGUsIHNuYXBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRpb25zVG9VcGRhdGUsIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgLy8gU3BlY3RydW0gaXMgY3JlYXRlZCB1c2luZyB0aGUgcmFuZ2UsIHNuYXAsIGRpcmVjdGlvbiBhbmQgc3RlcCBvcHRpb25zLlxuICAgICAgICAgICAgLy8gJ3NuYXAnIGFuZCAnc3RlcCcgY2FuIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICAvLyBJZiAnc25hcCcgYW5kICdzdGVwJyBhcmUgbm90IHBhc3NlZCwgdGhleSBzaG91bGQgcmVtYWluIHVuY2hhbmdlZC5cbiAgICAgICAgICAgIHZhciB2ID0gdmFsdWVHZXQoKTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVBYmxlID0gW1xuICAgICAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICAgICAgXCJsaW1pdFwiLFxuICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VcIixcbiAgICAgICAgICAgICAgICBcImFuaW1hdGVcIixcbiAgICAgICAgICAgICAgICBcInNuYXBcIixcbiAgICAgICAgICAgICAgICBcInN0ZXBcIixcbiAgICAgICAgICAgICAgICBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIFwicGlwc1wiLFxuICAgICAgICAgICAgICAgIFwidG9vbHRpcHNcIixcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cbiAgICAgICAgICAgIHVwZGF0ZUFibGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB1bmRlZmluZWQuIG51bGwgcmVtb3ZlcyB0aGUgdmFsdWUuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsT3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNUb1VwZGF0ZVtuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBuZXdPcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgICAgIC8vIExvYWQgbmV3IG9wdGlvbnMgaW50byB0aGUgc2xpZGVyIHN0YXRlXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tuYW1lXSA9IG5ld09wdGlvbnNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY29wZV9TcGVjdHJ1bSA9IG5ld09wdGlvbnMuc3BlY3RydW07XG4gICAgICAgICAgICAvLyBMaW1pdCwgbWFyZ2luIGFuZCBwYWRkaW5nIGRlcGVuZCBvbiB0aGUgc3BlY3RydW0gYnV0IGFyZSBzdG9yZWQgb3V0c2lkZSBvZiBpdC4gKCM2NzcpXG4gICAgICAgICAgICBvcHRpb25zLm1hcmdpbiA9IG5ld09wdGlvbnMubWFyZ2luO1xuICAgICAgICAgICAgb3B0aW9ucy5saW1pdCA9IG5ld09wdGlvbnMubGltaXQ7XG4gICAgICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSBuZXdPcHRpb25zLnBhZGRpbmc7XG4gICAgICAgICAgICAvLyBVcGRhdGUgcGlwcywgcmVtb3ZlcyBleGlzdGluZy5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdG9vbHRpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUgY3VycmVudCBwb3NpdGlvbmluZyBzbyB2YWx1ZVNldCBmb3JjZXMgYW4gdXBkYXRlLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgICAgICAgICB2YWx1ZVNldChpc1NldChvcHRpb25zVG9VcGRhdGUuc3RhcnQpID8gb3B0aW9uc1RvVXBkYXRlLnN0YXJ0IDogdiwgZmlyZVNldEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXphdGlvbiBzdGVwc1xuICAgICAgICBmdW5jdGlvbiBzZXR1cFNsaWRlcigpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBlbGVtZW50LCBpbml0aWFsaXplIEhUTUwgYW5kIHNldCBjbGFzc2VzLlxuICAgICAgICAgICAgLy8gQWRkIGhhbmRsZXMgYW5kIGNvbm5lY3QgZWxlbWVudHMuXG4gICAgICAgICAgICBzY29wZV9CYXNlID0gYWRkU2xpZGVyKHNjb3BlX1RhcmdldCk7XG4gICAgICAgICAgICBhZGRFbGVtZW50cyhvcHRpb25zLmNvbm5lY3QsIHNjb3BlX0Jhc2UpO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHVzZXIgZXZlbnRzLlxuICAgICAgICAgICAgYmluZFNsaWRlckV2ZW50cyhvcHRpb25zLmV2ZW50cyk7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHB1YmxpYyB2YWx1ZSBtZXRob2QgdG8gc2V0IHRoZSBzdGFydCB2YWx1ZXMuXG4gICAgICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmlhKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0dXBTbGlkZXIoKTtcbiAgICAgICAgdmFyIHNjb3BlX1NlbGYgPSB7XG4gICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICAgICAgc3RlcHM6IGdldE5leHRTdGVwcyxcbiAgICAgICAgICAgIG9uOiBiaW5kRXZlbnQsXG4gICAgICAgICAgICBvZmY6IHJlbW92ZUV2ZW50LFxuICAgICAgICAgICAgZ2V0OiB2YWx1ZUdldCxcbiAgICAgICAgICAgIHNldDogdmFsdWVTZXQsXG4gICAgICAgICAgICBzZXRIYW5kbGU6IHZhbHVlU2V0SGFuZGxlLFxuICAgICAgICAgICAgcmVzZXQ6IHZhbHVlUmVzZXQsXG4gICAgICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgICAgICBfX21vdmVIYW5kbGVzOiBmdW5jdGlvbiAodXB3YXJkLCBwcm9wb3NhbCwgaGFuZGxlTnVtYmVycykge1xuICAgICAgICAgICAgICAgIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogb3JpZ2luYWxPcHRpb25zLFxuICAgICAgICAgICAgdXBkYXRlT3B0aW9uczogdXBkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIHRhcmdldDogc2NvcGVfVGFyZ2V0LFxuICAgICAgICAgICAgcmVtb3ZlUGlwczogcmVtb3ZlUGlwcyxcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzOiByZW1vdmVUb29sdGlwcyxcbiAgICAgICAgICAgIGdldFBvc2l0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUb29sdGlwczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRPcmlnaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlwczogcGlwcywgLy8gSXNzdWUgIzU5NFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2NvcGVfU2VsZjtcbiAgICB9XG4gICAgLy8gUnVuIHRoZSBzdGFuZGFyZCBpbml0aWFsaXplclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUodGFyZ2V0LCBvcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5ub2RlTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSBzbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAgICAgIGlmICh0YXJnZXQubm9VaVNsaWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogU2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHRoZSBvcHRpb25zIGFuZCBjcmVhdGUgdGhlIHNsaWRlciBlbnZpcm9ubWVudDtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB2YXIgYXBpID0gc2NvcGUodGFyZ2V0LCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICB0YXJnZXQubm9VaVNsaWRlciA9IGFwaTtcbiAgICAgICAgcmV0dXJuIGFwaTtcbiAgICB9XG4gICAgdmFyIG5vdWlzbGlkZXIgPSB7XG4gICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXG4gICAgICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IGNsYXNzZXMsIGFsbG93cyBnbG9iYWwgY2hhbmdlcy5cbiAgICAgICAgLy8gVXNlIHRoZSBjc3NDbGFzc2VzIG9wdGlvbiBmb3IgY2hhbmdlcyB0byBvbmUgc2xpZGVyLlxuICAgICAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgICAgICBjcmVhdGU6IGluaXRpYWxpemUsXG4gICAgfTtcblxuICAgIGV4cG9ydHMuY3JlYXRlID0gaW5pdGlhbGl6ZTtcbiAgICBleHBvcnRzLmNzc0NsYXNzZXMgPSBjc3NDbGFzc2VzO1xuICAgIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbm91aXNsaWRlcjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbiIsImV4cG9ydCBjbGFzcyBDYXJ0IHtcclxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZChkYWtpbWFrdXJhcykge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXNJZCA9IFtdO1xyXG4gICAgICAgIGRha2ltYWt1cmFzLmZvckVhY2goKGRha2ltYWt1cmEpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtkYWtpbWFrdXJhLm5hbWV9YCkgPT09IFwic2VsZWN0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtc0lkLnB1c2goZGFraW1ha3VyYS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGFraW1ha3VyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRha2ltYWt1cmEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEJvb2ttYXJrID0gc2VsZWN0ZWREYWtpbWFrdXJhID09PSBudWxsIHx8IHNlbGVjdGVkRGFraW1ha3VyYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VsZWN0ZWREYWtpbWFrdXJhLnF1ZXJ5U2VsZWN0b3IoXCIuYm9va21hcmtfc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7ZGFraW1ha3VyYS5uYW1lfWApKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEJvb2ttYXJrICE9PSBudWxsICYmIHNlbGVjdGVkQm9va21hcmsgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXItbnVtYmVyXCIpO1xyXG4gICAgICAgIGlmIChjb3VudGVyICE9PSB1bmRlZmluZWQgJiYgY291bnRlciAhPT0gbnVsbClcclxuICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKSl9YDtcclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtc0lkO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNlbmRBbGVydCgpIHtcclxuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcjIwLWFsZXJ0XCIpO1xyXG4gICAgICAgIGlmICghKGFsZXJ0ID09PSBudWxsIHx8IGFsZXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhbGVydC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0ID09PSBudWxsIHx8IGFsZXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhbGVydC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBhbGVydCA9PT0gbnVsbCB8fCBhbGVydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxlcnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSwgNTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2ZpbHRlcnMvZmlsdGVyc1wiO1xyXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gXCIuLi9pdGVtc0xpc3QvaXRlbXNMaXN0XCI7XHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJzQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgcmVzZXRGaWx0ZXJzKCkge1xyXG4gICAgICAgIC8vZ2VuZGVyXHJcbiAgICAgICAgLy9tYXRlcmlhbFxyXG4gICAgICAgIEZpbHRlci5zZXRBbGxDb2xvcnNUcnVlKCk7XHJcbiAgICAgICAgRmlsdGVyLnNldEFsbE1hdGVyaWFsc1RydWUoKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnZW5kZXJcIiwgXCJhbGwtZ2VuZGVyXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9ubHktcG9wdWxhclwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlucHV0LTBcIiwgXCIwXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlucHV0LTFcIiwgXCIxMDAwMVwiKTtcclxuICAgICAgICBGaWx0ZXIuc2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnNDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgQ2FydCBmcm9tIFwiLi4vY2FydC9jYXJ0XCI7XHJcbmltcG9ydCBcIi4vZGFraW1ha3VyYS5zY3NzXCI7XHJcbmV4cG9ydCBjbGFzcyBEYWtpbWFrdXJhIHtcclxuICAgIHN0YXRpYyBkYWtpbWFrdXJhQ2xpY2tMaXN0ZW5lcihpZCkge1xyXG4gICAgICAgIC8vQ2FydC5zZW5kQWxlcnQoKTtcclxuICAgICAgICBjb25zdCBjbGlja2VkRGFraW1ha3VyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXItbnVtYmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUNvdW50ZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudGVyXCIpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2VDb3VudGVyID09PSBudWxsKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIFwiMFwiKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEJvb2ttYXJrID0gY2xpY2tlZERha2ltYWt1cmEgPT09IG51bGwgfHwgY2xpY2tlZERha2ltYWt1cmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsaWNrZWREYWtpbWFrdXJhLnF1ZXJ5U2VsZWN0b3IoXCIuYm9va21hcmtfc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgY29uc3Qgbm90U2VsZWN0ZWRCb29rbWFyayA9IGNsaWNrZWREYWtpbWFrdXJhID09PSBudWxsIHx8IGNsaWNrZWREYWtpbWFrdXJhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbGlja2VkRGFraW1ha3VyYS5xdWVyeVNlbGVjdG9yKFwiLmJvb2ttYXJrX25vdC1zZWxlY3RlZFwiKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRCb29rbWFyayA9PT0gbnVsbCB8fCBzZWxlY3RlZEJvb2ttYXJrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQm9va21hcmsuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBub3RTZWxlY3RlZEJvb2ttYXJrID09PSBudWxsIHx8IG5vdFNlbGVjdGVkQm9va21hcmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vdFNlbGVjdGVkQm9va21hcmsuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aWR9YCwgYG5vdC1zZWxlY3RlZGApO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIFN0cmluZyhOdW1iZXIobG9jYWxTdG9yYWdlQ291bnRlcikgLSAxKSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKSl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIobG9jYWxTdG9yYWdlQ291bnRlcikgPj0gMTApIHtcclxuICAgICAgICAgICAgICAgIENhcnQuc2VuZEFsZXJ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZWN0ZWRCb29rbWFyayA9PT0gbnVsbCB8fCBzZWxlY3RlZEJvb2ttYXJrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgbm90U2VsZWN0ZWRCb29rbWFyayA9PT0gbnVsbCB8fCBub3RTZWxlY3RlZEJvb2ttYXJrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub3RTZWxlY3RlZEJvb2ttYXJrLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2lkfWAsIGBzZWxlY3RlZGApO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIFN0cmluZyhOdW1iZXIobG9jYWxTdG9yYWdlQ291bnRlcikgKyAxKSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKSl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlRGFraW1ha3VyYShpbmZvKSB7XHJcbiAgICAgICAgY29uc3QgZGFraW1ha3VyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGFraW1ha3VyYS5jbGFzc05hbWUgPSBcImRha2ltYWt1cmFcIjtcclxuICAgICAgICBkYWtpbWFrdXJhLmlkID0gYCR7aW5mby5uYW1lfWA7XHJcbiAgICAgICAgZGFraW1ha3VyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5kYWtpbWFrdXJhQ2xpY2tMaXN0ZW5lcihpbmZvLm5hbWUpKTtcclxuICAgICAgICBkYWtpbWFrdXJhLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwiZGFraW1ha3VyYV9faW1nXCIgc3JjPVwiJHtpbmZvLmltZ1NyY31cIiBhbHQ9XCJkYWtpLWltZ1wiPlxuICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYm9va21hcmsucG5nXCIgY2xhc3M9XCJib29rbWFyayBib29rbWFya19ub3Qtc2VsZWN0ZWQgc2VsZWN0ZWRcIiBhbHQ9XCJib29rbWFya1wiPjwvaW1nPlxuICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvYm9va21hcmstY2hvb3Nlbi5wbmdcIiBjbGFzcz1cImJvb2ttYXJrIGJvb2ttYXJrX3NlbGVjdGVkXCIgYWx0PVwiYm9va21hcmstY2hvb3NlblwiPjwvaW1nPlxuICAgIDxkaXYgY2xhc3M9XCJkYWtpbWFrdXJhX19tYWluLWluZm9cIj5cbiAgICAgIDxhIGNsYXNzPVwiZGFraW1ha3VyYV9fbmFtZVwiPiR7aW5mby5uYW1lfTwvYT5cbiAgICAgIDxhIGNsYXNzPVwiZGFraW1ha3VyYV9fcHJpY2VcIj4ke2luZm8ucHJpY2V9PGltZyBzcmM9XCIuL2ltYWdlcy95ZW4tc2lnbi5wbmdcIiBjbGFzcz1cImRha2ltYWt1cmFfX2N1cnJlbmN5XCIgYWx0PVwiY3VycmVuY3lcIj48L2ltZz48L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRha2ltYWt1cmFfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPlRpdGxlOiA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgaWQ9XCJ0aXRsZVwiPiR7aW5mby50aXRsZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPkdlbmRlcjogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwiZ2VuZGVyXCI+JHtpbmZvLmdlbmRlcn08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImF0dHJpYnV0ZVwiPkNvbG9yczogPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIGlkPVwiY29sb3JzXCI+JHtbLi4uaW5mby5jb2xvcnNdfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYXR0cmlidXRlXCI+TWF0ZXJpYWw6IDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIiBpZD1cInBvcHVsYXJcIj4ke2luZm8ubWF0ZXJpYWx9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhdHRyaWJ1dGVcIj5Qb3B1bGFyOiA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgaWQ9XCJwb3B1bGFyXCI+JHtpbmZvLmlzUG9wdWxhcn08L3NwYW4+XG4gICAgPC9kaXY+YDtcclxuICAgICAgICByZXR1cm4gZGFraW1ha3VyYTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYWtpbWFrdXJhO1xyXG4iLCJpbXBvcnQgeyBzZXRTbGlkZXJWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zbGlkZXJcIjtcclxuaW1wb3J0IEZpbHRlcnNDb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyL0ZpbHRlcnNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGNvbG9ycywgbWF0ZXJpYWxzIH0gZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0RCXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuaW1wb3J0IFwiLi9maWx0ZXJzLnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICAvL1Jlc2V0XHJcbiAgICBzdGF0aWMgc2V0UmVzZXRMaXN0ZW5lcigpIHtcclxuICAgICAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnV0dG9uXCIpO1xyXG4gICAgICAgIHJlc2V0ID09PSBudWxsIHx8IHJlc2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRmlsdGVyc0NvbnRyb2xsZXIucmVzZXRGaWx0ZXJzKTtcclxuICAgIH1cclxuICAgIC8vQ29sb3JzXHJcbiAgICBzdGF0aWMgc2V0U2VsZWN0ZWRDb2xvcnMoKSB7XHJcbiAgICAgICAgY29sb3JzLmZvckVhY2goKGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sb3IpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbG9yKSA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgICAgICBjb2xvckJ1dHRvbiA9PT0gbnVsbCB8fCBjb2xvckJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY29sb3JCdXR0b24gPT09IG51bGwgfHwgY29sb3JCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0QWxsQ29sb3JzVHJ1ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWJ0blwiKS5mb3JFYWNoKChjb2xvckJ0bikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbG9yQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcclxuICAgICAgICAgICAgICAgIGNvbG9yQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb2xvckJ0bi5pZCwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFsbENvbG9yQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIEZpbHRlci5zZXRBbGxDb2xvcnNUcnVlKCk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRDb2xvcnNFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItYnRuXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNvbG9yQ2xpY2tIYW5kbGVyKGUsIGVsLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKF9iID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYWxsLWNvbG9yXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWxsQ29sb3JDbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFNlbGVjdGVkQ29sb3JzKCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNvbG9ycyA9IFtdO1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1idG5cIikpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9ycy5wdXNoKGJ1dHRvbi5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvbG9ycztcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWx0ZXJJdGVtc0J5Q29sb3IoaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVDb2xvcnMgPSB0aGlzLmdldFNlbGVjdGVkQ29sb3JzKCk7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUNvbG9ycy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbmRDb21tb24oaXRlbS5jb2xvcnMsIGFjdGl2ZUNvbG9ycykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbmRDb21tb24oYXJyMSwgYXJyMikge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgYXJyMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbkFycmF5KGVsLCBhcnIyKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5BcnJheShlbCwgYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGVsKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICAvL0dlbmRlclxyXG4gICAgc3RhdGljIHNldFNlbGVjdGVkR2VuZGVyKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkR2VuZGVyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2VuZGVyXCIpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEdlbmRlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRHZW5kZXIgPT09IFwiYm95XCIpIHtcclxuICAgICAgICAgICAgICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm95XCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIChfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2lybFwiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAoX2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1nZW5kZXJcIikpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkR2VuZGVyID09PSBcImdpcmxcIikge1xyXG4gICAgICAgICAgICAgICAgKF9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3lcIikpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgKF9lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXJsXCIpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIChfZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdlbmRlclwiKSkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRHZW5kZXIgPT09IFwiYWxsLWdlbmRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAoX2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveVwiKSkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAoX2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpcmxcIikpID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgKF9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtZ2VuZGVyXCIpKSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ouY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZW5kZXJDbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdlbmRlclwiLCBlbGVtZW50LmlkKTtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkR2VuZGVyKCk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRHZW5kZXJzQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgYm95c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm95XCIpO1xyXG4gICAgICAgIGNvbnN0IGdpcmxzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnaXJsXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLWdlbmRlclwiKTtcclxuICAgICAgICBib3lzQnV0dG9uID09PSBudWxsIHx8IGJveXNCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJveXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmdlbmRlckNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgZ2lybHNCdXR0b24gPT09IG51bGwgfHwgZ2lybHNCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdpcmxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5nZW5kZXJDbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgICAgIGFsbEJ1dHRvbiA9PT0gbnVsbCB8fCBhbGxCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuZ2VuZGVyQ2xpY2tIYW5kbGVyKGUpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWx0ZXJJdGVtc0J5R2VuZGVyKGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRHZW5kZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnZW5kZXJcIik7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkR2VuZGVyID09PSBudWxsIHx8IHNlbGVjdGVkR2VuZGVyID09PSBcImFsbC1nZW5kZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGRha2kpID0+IGRha2kuZ2VuZGVyID09PSBzZWxlY3RlZEdlbmRlcik7XHJcbiAgICB9XHJcbiAgICAvL21hdGVyaWFsXHJcbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRNYXRlcmlhbHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRlcmlhbHMgPSBbXTtcclxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaCgobWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShtYXRlcmlhbCkgPT09IFwidHJ1ZVwiIHx8XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obWF0ZXJpYWwpID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTWF0ZXJpYWxzO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldFNlbGVjdGVkTWF0ZXJpYWxzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTWF0ZXJpYWxzID0gdGhpcy5nZXRTZWxlY3RlZE1hdGVyaWFscygpO1xyXG4gICAgICAgIHNlbGVjdGVkTWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhbGxNYXRlcmlhbENsaWNrSGFuZGxlcigpIHtcclxuICAgICAgICAvKiBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1tYXRlcmlhbFwiKTtcclxuICAgICAgICBjb25zdCBzeW50aGV0aWNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bnRoZXRpY1wiKTtcclxuICAgICAgICBjb25zdCBjb3R0b25Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdHRvblwiKTtcclxuICAgICAgICBjb25zdCBwbHVzaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c2hcIik7XHJcbiAgICAgICAgY29uc3QgbGluZW5Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVuXCIpOyAqL1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtY2hlY2tib3hcIikpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hlY2tCb3hlcyk7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja0JveCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNoZWNrQm94LmlkLCBcInRydWVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBtYXRlcmlhbENoZWNrQm94Q2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjaGVja0JveC5pZCwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGNoZWNrQm94LmlkLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0TWF0ZXJpYWxDbGlja0xpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC1tYXRlcmlhbFwiKTtcclxuICAgICAgICBjb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1jaGVja2JveFwiKTtcclxuICAgICAgICBjaGVja0JveGVzLmZvckVhY2goKGNoZWNrQm94KSA9PiBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMubWF0ZXJpYWxDaGVja0JveENsaWNrSGFuZGxlcihlKSkpO1xyXG4gICAgICAgIGFsbEJ1dHRvbiA9PT0gbnVsbCB8fCBhbGxCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hbGxNYXRlcmlhbENsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsdGVySXRlbXNCeU1hdGVyaWFsKGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXRlcmlhbHMgPSB0aGlzLmdldFNlbGVjdGVkTWF0ZXJpYWxzKCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRNYXRlcmlhbHMuaW5jbHVkZXMoaXRlbS5tYXRlcmlhbCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRBbGxNYXRlcmlhbHNUcnVlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtY2hlY2tib3hcIikuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjaGVja2JveC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpXHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY2hlY2tib3guaWQsIFwidHJ1ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vb25seSBwb3B1bGFyXHJcbiAgICBzdGF0aWMgb25seVBvcHVsYXJDbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBvbmx5UG9wdWxhckJveCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAob25seVBvcHVsYXJCb3guY2hlY2tlZClcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib25seS1wb3B1bGFyXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9ubHktcG9wdWxhclwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0T25seVBvcHVsYXJDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAoX2EgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJvbmx5LXBvcHVsYXJcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMub25seVBvcHVsYXJDbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldE9ubHlQb3B1bGFyKCkge1xyXG4gICAgICAgIGNvbnN0IG9ubHlQb3B1bGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmx5LXBvcHVsYXJcIik7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9ubHktcG9wdWxhclwiKSA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIG9ubHlQb3B1bGFyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb25seVBvcHVsYXIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbHRlckJ5UG9wdWxhcihpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IGlzT25seVBvcHVsYXJDaGVja2VkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib25seS1wb3B1bGFyXCIpO1xyXG4gICAgICAgIGlmIChpc09ubHlQb3B1bGFyQ2hlY2tlZCA9PT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW1zKSA9PiBpdGVtcy5pc1BvcHVsYXIgPT09IFwiWWVzXCIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG4gICAgLy9wcmljZVJhbmdlXHJcbiAgICBzdGF0aWMgc2V0UHJpY2VSYW5nZVZhbHVlcygpIHtcclxuICAgICAgICBjb25zdCBpbnB1dDBMb2NhbFZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW5wdXQtMFwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dDFMb2NhbFZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW5wdXQtMVwiKTtcclxuICAgICAgICBjb25zdCBtaW5QcmljZSA9IGlucHV0MExvY2FsVmFsdWUgIT09IG51bGwgPyBpbnB1dDBMb2NhbFZhbHVlIDogXCIwXCI7XHJcbiAgICAgICAgY29uc3QgbWF4UHJpY2UgPSBpbnB1dDFMb2NhbFZhbHVlICE9PSBudWxsID8gaW5wdXQxTG9jYWxWYWx1ZSA6IFwiMTAwMDFcIjtcclxuICAgICAgICBzZXRTbGlkZXJWYWx1ZXMoTnVtYmVyKG1pblByaWNlKSwgTnVtYmVyKG1heFByaWNlKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZmlsdGVyQnlQcmljZVJhbmdlKGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC0wXCIpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtMVwiKTtcclxuICAgICAgICBpZiAoaW5wdXQwID09PSBudWxsIHx8IGlucHV0MSA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIGNvbnN0IG1pblByaWNlID0gTnVtYmVyKGlucHV0MC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgbWF4UHJpY2UgPSBOdW1iZXIoaW5wdXQxLnZhbHVlKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1pblByaWNlKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG1heFByaWNlKTtcclxuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnByaWNlID49IG1pblByaWNlICYmIGl0ZW0ucHJpY2UgPD0gbWF4UHJpY2UpO1xyXG4gICAgfVxyXG4gICAgLy9jb21tb25cclxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZCgpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkQ29sb3JzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEdlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRNYXRlcmlhbHMoKTtcclxuICAgICAgICB0aGlzLnNldE9ubHlQb3B1bGFyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRQcmljZVJhbmdlVmFsdWVzKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3JzRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnNldFJlc2V0TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLnNldEdlbmRlcnNDbGlja0xpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuc2V0TWF0ZXJpYWxDbGlja0xpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuc2V0T25seVBvcHVsYXJDbGlja0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgICAvL21haW5cclxuICAgIHN0YXRpYyBpbml0aWFsaXplRmlsdGVycygpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxufVxyXG5GaWx0ZXIuY29sb3JDbGlja0hhbmRsZXIgPSAoZSwgY29sb3IpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29sb3IpO1xyXG4gICAgY29sb3JCdXR0b24gPT09IG51bGwgfHwgY29sb3JCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbG9yQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oY29sb3IsIFN0cmluZyhjb2xvckJ1dHRvbiA9PT0gbnVsbCB8fCBjb2xvckJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29sb3JCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSk7XHJcbiAgICBJdGVtc0xpc3QucmVmcmVzaEl0ZW1zTGlzdCgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjb2xvcik7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFtcclxuICAgIFwid2hpdGVcIixcclxuICAgIFwiYmxhY2tcIixcclxuICAgIFwiYmx1ZVwiLFxyXG4gICAgXCJncmVlblwiLFxyXG4gICAgXCJwaW5rXCIsXHJcbiAgICBcInJlZFwiLFxyXG5dO1xyXG5leHBvcnQgY29uc3QgbWF0ZXJpYWxzID0gW1wic3ludGhldGljXCIsIFwiY290dG9uXCIsIFwicGx1c2hcIiwgXCJsaW5lblwiXTtcclxuY29uc3QgZGFraW1ha3VyYXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2dlbnNoaW4tSmlubi5qcGdcIixcclxuICAgICAgICBwcmljZTogMTQ5MCxcclxuICAgICAgICBuYW1lOiBcIkppbm5cIixcclxuICAgICAgICB0aXRsZTogXCJHZW5zaGluLUltcGFjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvMmFydnBvLTVrb18xNjQzMjI0NTAxLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxNzk5LFxyXG4gICAgICAgIG5hbWU6IFwiTGV2aVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkF0dGFjayBvbiBUaXRhblwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJib3lcIixcclxuICAgICAgICBjb2xvcnM6IFtcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcImxpbmVuXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIlllc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvMzBhZGVlYzhhNzljYjNhZTUzYTk0NWNkZGI1OGE0ZDIuanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDIxNTAsXHJcbiAgICAgICAgbmFtZTogXCJBeWFuYW1pIFJlaVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkV2YW5nZWxpb25cIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wid2hpdGVcIiwgXCJibHVlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcImNvdHRvblwiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzLzEzNV9kYWtpbWFrdXJhX2dlbnNoaW5faW1wYWN0X2thZWRlaGFyYV9rYWR6dWhhLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyMzUwLFxyXG4gICAgICAgIG5hbWU6IFwiS2FkenVoYXJhXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiR2Vuc2hpbiBJbXBhY3RcIixcclxuICAgICAgICBnZW5kZXI6IFwiYm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJyZWRcIiwgXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJwbHVzaFwiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL1RvaG8gUHJvamVjdCBJemF5b2kgU2FrdXlhLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxNTEwLFxyXG4gICAgICAgIG5hbWU6IFwiSXpheW9pIFNha3V5YVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlRvaG8gUHJvamVjdFwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiLCBcImJsdWVcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwibGluZW5cIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiTm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2Z1bGxfMjE1NDItR2Vuc2hpbi1JbXBhY3QtSHV0YW8uanBnXCIsXHJcbiAgICAgICAgcHJpY2U6IDIxOTksXHJcbiAgICAgICAgbmFtZTogXCJIdXRhb1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdlbnNoaW4gSW1wYWN0XCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcInJlZFwiLCBcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL0hvbm9rYSBLb3Nha2EtIExvdmUgTGl2ZS5wbmdcIixcclxuICAgICAgICBwcmljZTogMTM5OSxcclxuICAgICAgICBuYW1lOiBcIkhvbm9rYSBLb3Nha2FcIixcclxuICAgICAgICB0aXRsZTogXCJMb3ZlIExpdmVcIixcclxuICAgICAgICBnZW5kZXI6IFwiZ2lybFwiLFxyXG4gICAgICAgIGNvbG9yczogW1wicGlua1wiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiTm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2thenVoYS1nZW5zaGluLmpwZ1wiLFxyXG4gICAgICAgIHByaWNlOiAyNzk5LFxyXG4gICAgICAgIG5hbWU6IFwiS2FlZGVoYXJhIEthenVoYVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkdlbnNoaW4gSW1wYWN0XCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wicmVkXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2tpcml0by0gc3dvcmQgYXJ0IG9ubGluZS5wbmdcIixcclxuICAgICAgICBwcmljZTogMjA5OSxcclxuICAgICAgICBuYW1lOiBcIktpcml0b1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIlN3b3JkIEFydCBPbmxpbmVcIixcclxuICAgICAgICBnZW5kZXI6IFwiYm95XCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJibGFja1wiLCBcIndoaXRlXCJdLFxyXG4gICAgICAgIG1hdGVyaWFsOiBcInN5bnRoZXRpY1wiLFxyXG4gICAgICAgIGlzUG9wdWxhcjogXCJZZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL01pa2UgdG9reW8gcmV2ZW5nZS5wbmdcIixcclxuICAgICAgICBwcmljZTogMTI0OSxcclxuICAgICAgICBuYW1lOiBcIk1pa2VcIixcclxuICAgICAgICB0aXRsZTogXCJUb2t5byBSZXZlbmdlXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiZ3JlZW5cIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9SaW11cnUtIHRoYXQgdGltZSBpIGdvdCByZWluY2FybmF0ZWQgYXMgYSBzbGltZS5wbmdcIixcclxuICAgICAgICBwcmljZTogMTc4OSxcclxuICAgICAgICBuYW1lOiBcIlJpbXVydVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlJlaW5jYXJuYXRlZCBhcyBhIFNsaW1lXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiYmx1ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiTm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3NhdG9ydSBnb2pvLSBKdWp1dHN1IGthaXNlbi5wbmdcIixcclxuICAgICAgICBwcmljZTogMTAwMDEsXHJcbiAgICAgICAgbmFtZTogXCJTYXRvcnUgR29qb1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkp1anV0c3UgS2Fpc2VuXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImJveVwiLFxyXG4gICAgICAgIGNvbG9yczogW1wiYmxhY2tcIiwgXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy92aW9sZXQtIGV2ZXJnYXJkZW4ucG5nXCIsXHJcbiAgICAgICAgcHJpY2U6IDIwMDIsXHJcbiAgICAgICAgbmFtZTogXCJWaW9sZXRcIixcclxuICAgICAgICB0aXRsZTogXCJWaW9sZXQgRXZlcmdhcmRlblwiLFxyXG4gICAgICAgIGdlbmRlcjogXCJnaXJsXCIsXHJcbiAgICAgICAgY29sb3JzOiBbXCJ3aGl0ZVwiXSxcclxuICAgICAgICBtYXRlcmlhbDogXCJzeW50aGV0aWNcIixcclxuICAgICAgICBpc1BvcHVsYXI6IFwiWWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy95dXJpICAtIGRva2lfZG9raV9saXRlcmF0dXJlX2NsdWJfLnBuZ1wiLFxyXG4gICAgICAgIHByaWNlOiAxMzQ5LFxyXG4gICAgICAgIG5hbWU6IFwiWXVyaVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkRva2kgRG9raSBDbHViXCIsXHJcbiAgICAgICAgZ2VuZGVyOiBcImdpcmxcIixcclxuICAgICAgICBjb2xvcnM6IFtcInBpbmtcIl0sXHJcbiAgICAgICAgbWF0ZXJpYWw6IFwic3ludGhldGljXCIsXHJcbiAgICAgICAgaXNQb3B1bGFyOiBcIk5vXCIsXHJcbiAgICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBkYWtpbWFrdXJhcztcclxuIiwiaW1wb3J0IERha2ltYWt1cmEgZnJvbSBcIi4uL2Rha2ltYWt1cmEvZGFraW1ha3VyYVwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY2FydC9jYXJ0XCI7XHJcbmltcG9ydCBTb3J0IGZyb20gXCIuLi9zb3J0L3NvcnRcIjtcclxuaW1wb3J0IGRha2ltYWt1cmFzIGZyb20gXCIuL2l0ZW1zREJcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vZmlsdGVycy9maWx0ZXJzXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL3NlYXJjaC9zZWFyY2hcIjtcclxuZXhwb3J0IGNsYXNzIEl0ZW1zTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXR0ZXJucykge1xyXG4gICAgICAgIHRoaXMucGF0dGVybnMgPSBwYXR0ZXJucztcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWxsUGFnZShwYXR0ZXJucykge1xyXG4gICAgICAgIHBhdHRlcm5zLmZvckVhY2goKHBhdHRlcm4pID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICBjb25zdCBkYWtpbWFrdXJhID0gRGFraW1ha3VyYS5jcmVhdGVEYWtpbWFrdXJhKHBhdHRlcm4pO1xyXG4gICAgICAgICAgICAoX2EgPSBJdGVtc0xpc3QuaXRlbXNDb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQoZGFraW1ha3VyYSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ2FydC5zZXRTZWxlY3RlZChwYXR0ZXJucyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlTm90aGluZ0ZvdW5kTWVzc2FnZSgpIHtcclxuICAgICAgICBjb25zdCBub3RoaW5nRm91bmRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgbm90aGluZ0ZvdW5kTWVzc2FnZS5jbGFzc05hbWUgPSBcIm5vdGhpbmctZm91bmRcIjtcclxuICAgICAgICBub3RoaW5nRm91bmRNZXNzYWdlLmlubmVySFRNTCA9IFwiU29ycnksIG5vdGhpbmcgZm91bmRcIjtcclxuICAgICAgICByZXR1cm4gbm90aGluZ0ZvdW5kTWVzc2FnZTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhcHBlbmROb3RoaW5Gb3VuZE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGNvbnN0IG5vdGhpbmdGb3VuZE1lc3NhZ2UgPSB0aGlzLmNyZWF0ZU5vdGhpbmdGb3VuZE1lc3NhZ2UoKTtcclxuICAgICAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1zXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKG5vdGhpbmdGb3VuZE1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldEhpZGRlbigpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGRha2ltYWt1cmFzO1xyXG4gICAgICAgIC8vZmlsdGVyIGJ5IGdlbmRlclxyXG4gICAgICAgIC8vZmlsdGVyIGJ5IG1hdGVyaWFsXHJcbiAgICAgICAgLy9maWx0ZXIgYnkgY29sb3JcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEJ5Q29sb3IgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeUNvbG9yKGl0ZW1zKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRha2ltYWt1cmFcIikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmaWx0ZXJlZEJ5Q29sb3IuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5uYW1lKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xlYXJJdGVtc0NvbnRhaW5lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtc0NvbnRhaW5lciA9PT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaXRlbXMgY29udGFpbmVyIGRvZXNudCBleGlzdFwiKTtcclxuICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlzcGxheVNvcnRlZEl0ZW1zKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1zQ29udGFpbmVyKCk7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKGVsKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRIaWRkZW4oKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZWZyZXNoSXRlbXNMaXN0KGl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckl0ZW1zQ29udGFpbmVyKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXNUb0ZpbHRlciA9IGl0ZW1zID8gaXRlbXMgOiBkYWtpbWFrdXJhcztcclxuICAgICAgICBjb25zdCBzb3J0VHlwZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvcnRcIik7XHJcbiAgICAgICAgLy9zZWFyY2hcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEJ5U2VhcmNoVmFsdWUgPSBTZWFyY2guZmlsdGVyQnlTZWFyY2hWYWx1ZShpdGVtc1RvRmlsdGVyKTtcclxuICAgICAgICAvL2dlbmRlclxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlHZW5kZXIgPSBGaWx0ZXIuZmlsdGVySXRlbXNCeUdlbmRlcihmaWx0ZXJlZEJ5U2VhcmNoVmFsdWUpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZmlsdGVyZWRCeUdlbmRlcik7XHJcbiAgICAgICAgLy9tYXRlcmlhbFxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlNYXRlcmlhbCA9IEZpbHRlci5maWx0ZXJJdGVtc0J5TWF0ZXJpYWwoZmlsdGVyZWRCeUdlbmRlcik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZEJ5TWF0ZXJpYWwpO1xyXG4gICAgICAgIC8vcG9wdWxhclxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlQb3B1bGFyID0gRmlsdGVyLmZpbHRlckJ5UG9wdWxhcihmaWx0ZXJlZEJ5TWF0ZXJpYWwpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZmlsdGVyZWRCeVBvcHVsYXIpO1xyXG4gICAgICAgIC8vcHJpY2VSYW5nZVxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQnlQcmljZVJhbmdlID0gRmlsdGVyLmZpbHRlckJ5UHJpY2VSYW5nZShmaWx0ZXJlZEJ5UG9wdWxhcik7XHJcbiAgICAgICAgLy9jb2xvclxyXG4gICAgICAgIGNvbnN0IGZpbmFsbHlGaWx0ZXJlZCA9IEZpbHRlci5maWx0ZXJJdGVtc0J5Q29sb3IoZmlsdGVyZWRCeVByaWNlUmFuZ2UpO1xyXG4gICAgICAgIGlmIChmaW5hbGx5RmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kTm90aGluRm91bmRNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3J0VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBTb3J0LnNvcnRCeVR5cGUoZmluYWxseUZpbHRlcmVkLCBzb3J0VHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFBhZ2Uoc29ydGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZpbGxQYWdlKGZpbmFsbHlGaWx0ZXJlZCk7XHJcbiAgICB9XHJcbn1cclxuSXRlbXNMaXN0Lml0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtc1wiKTtcclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0O1xyXG4iLCJpbXBvcnQgSXRlbXNMaXN0IGZyb20gXCIuLi9pdGVtc0xpc3QvaXRlbXNMaXN0XCI7XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2gge1xyXG4gICAgc3RhdGljIGlucHV0Q2hhbmdlSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hCYXIudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyQ3VycmVudFZhbHVlID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmaWx0ZXJCeVNlYXJjaFZhbHVlKGl0ZW1zKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaW5wdXRcIik7XHJcbiAgICAgICAgaWYgKHNlYXJjaEJhciAmJiBzZWFyY2hCYXIudmFsdWUgIT09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoQmFyQ3VycmVudFZhbHVlKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xlYXJDcmVzc0NsaWNrSGFuZGxlcigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dFwiKTtcclxuICAgICAgICBpZiAoc2VhcmNoQmFyICE9PSBudWxsKVxyXG4gICAgICAgICAgICBzZWFyY2hCYXIudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5yZWZyZXNoSXRlbXNMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkU2VhcmNoTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgKF9hID0gdGhpcy5zZWFyY2hCYXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHRoaXMuaW5wdXRDaGFuZ2VIYW5kbGVyKGUpKTtcclxuICAgICAgICAoX2IgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5jbGVhci1jcmVzc1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsZWFyQ3Jlc3NDbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG59XHJcblNlYXJjaC5zZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dFwiKTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJpbXBvcnQgZGFraW1ha3VyYXMgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0RCXCI7XHJcbmltcG9ydCBJdGVtc0xpc3QgZnJvbSBcIi4uL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuaW1wb3J0IFwiLi9zb3J0LnNjc3NcIjtcclxuZXhwb3J0IGNsYXNzIFNvcnQge1xyXG4gICAgc3RhdGljIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHByaWNlSGlnaGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaGVzdFwiKTtcclxuICAgICAgICBjb25zdCBwcmljZUxvd2VzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93ZXN0XCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVBeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQS1aXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVaYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiWi1BXCIpO1xyXG4gICAgICAgIHByaWNlSGlnaGVzdCA9PT0gbnVsbCB8fCBwcmljZUhpZ2hlc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByaWNlSGlnaGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlQcmljZUhhbmRsZXIoXCJoaWdoZXN0XCIpKTtcclxuICAgICAgICBwcmljZUxvd2VzdCA9PT0gbnVsbCB8fCBwcmljZUxvd2VzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJpY2VMb3dlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydEJ5UHJpY2VIYW5kbGVyKFwibG93ZXN0XCIpKTtcclxuICAgICAgICBuYW1lQXogPT09IG51bGwgfHwgbmFtZUF6ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lQXouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydEJ5TmFtZUhhbmRsZXIoXCJBLVpcIikpO1xyXG4gICAgICAgIG5hbWVaYSA9PT0gbnVsbCB8fCBuYW1lWmEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVaYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0QnlOYW1lSGFuZGxlcihcIlotQVwiKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0Tm90SGlkZGVuSXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFraW1ha3VyYVwiKSk7XHJcbiAgICAgICAgY29uc3Qgbm90SGlkZGVuSXRlbXMgPSBhbGxJdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIi5oaWRkZW5cIikpO1xyXG4gICAgICAgIHJldHVybiBub3RIaWRkZW5JdGVtcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBzb3J0QnlQcmljZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImxvd2VzdFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5wcmljZSAtIGEucHJpY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc29ydEJ5TmFtZShpdGVtcywgdHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lcyA9IGl0ZW1zLm1hcCgoZWwpID0+IGVsLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZEl0ZW1OYW1lcyA9IHR5cGUgPT09IFwiQS1aXCIgPyBpdGVtTmFtZXMuc29ydCgpIDogaXRlbU5hbWVzLnNvcnQoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRlZEl0ZW1OYW1lcy5tYXAoKGl0ZW1OYW1lKSA9PiBkYWtpbWFrdXJhcy5maWx0ZXIoKGRha2ltYWt1cmEpID0+IGRha2ltYWt1cmEubmFtZSA9PT0gaXRlbU5hbWUpWzBdKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzb3J0QnlUeXBlKGl0ZW1zLCB0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaGlnaGVzdFwiIHx8IHR5cGUgPT09IFwibG93ZXN0XCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRCeVByaWNlKGl0ZW1zLCB0eXBlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRCeU5hbWUoaXRlbXMsIHR5cGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRCeVByaWNlSGFuZGxlcih0eXBlKSB7XHJcbiAgICAgICAgY29uc3Qgbm90SGlkZGVuSXRlbXMgPSB0aGlzLmdldE5vdEhpZGRlbkl0ZW1zKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic29ydFwiLCB0eXBlKTtcclxuICAgICAgICBjb25zdCBzb3J0ZWRFbGVtZW50cyA9IG5vdEhpZGRlbkl0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgY29uc3QgYVByaWNlID0gZGFraW1ha3VyYXMuZmlsdGVyKChkYWtpbWFrdXJhKSA9PiBkYWtpbWFrdXJhLm5hbWUgPT09IGEuaWQpWzBdLnByaWNlO1xyXG4gICAgICAgICAgICBjb25zdCBiUHJpY2UgPSBkYWtpbWFrdXJhcy5maWx0ZXIoKGRha2ltYWt1cmEpID0+IGRha2ltYWt1cmEubmFtZSA9PT0gYi5pZClbMF0ucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImxvd2VzdFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFQcmljZSAtIGJQcmljZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJQcmljZSAtIGFQcmljZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBJdGVtc0xpc3QuZGlzcGxheVNvcnRlZEl0ZW1zKHNvcnRlZEVsZW1lbnRzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzb3J0QnlOYW1lSGFuZGxlcih0eXBlKSB7XHJcbiAgICAgICAgY29uc3Qgbm90SGlkZGVuSXRlbXMgPSB0aGlzLmdldE5vdEhpZGRlbkl0ZW1zKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic29ydFwiLCB0eXBlKTtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtc05hbWVzID0gW107XHJcbiAgICAgICAgbm90SGlkZGVuSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gbm90SGlkZGVuSXRlbXNOYW1lcy5wdXNoKGl0ZW0uaWQpKTtcclxuICAgICAgICBjb25zdCBub3RIaWRkZW5JdGVtc05hbWVzU29ydGVkID0gdHlwZSA9PT0gXCJBLVpcIlxyXG4gICAgICAgICAgICA/IG5vdEhpZGRlbkl0ZW1zTmFtZXMuc29ydCgpXHJcbiAgICAgICAgICAgIDogbm90SGlkZGVuSXRlbXNOYW1lcy5zb3J0KCkucmV2ZXJzZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cobm90SGlkZGVuSXRlbXNOYW1lc1NvcnRlZCk7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRWxlbWVudHMgPSBbXTtcclxuICAgICAgICBub3RIaWRkZW5JdGVtc05hbWVzU29ydGVkLmZvckVhY2goKGl0ZW1OYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHNvcnRlZEVsZW1lbnRzLnB1c2gobm90SGlkZGVuSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtTmFtZSlbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEl0ZW1zTGlzdC5kaXNwbGF5U29ydGVkSXRlbXMoc29ydGVkRWxlbWVudHMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XHJcbiIsImltcG9ydCAqIGFzIG5vVWlTbGlkZXIgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlclwiO1xyXG5pbXBvcnQgXCJub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zbGlkZXIuc2Nzc1wiO1xyXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2l0ZW1zTGlzdC9pdGVtc0xpc3RcIjtcclxuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XHJcbi8qIGZ1bmN0aW9uIHNsaWRlclVwZGF0ZUhhbmRsZXIoaW5wdXQwVmFsdWU6IHN0cmluZywgaW5wdXQxVmFsdWU6IHN0cmluZykge1xyXG5cclxufSAqL1xyXG5mdW5jdGlvbiBzbGlkZXJDaGFuZ2VIYW5kbGVyKGlucHV0MFZhbHVlLCBpbnB1dDFWYWx1ZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInNsaWRlci1jaGFuZ2UtZXZlbnRcIik7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbnB1dC0wXCIsIGlucHV0MFZhbHVlKTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlucHV0LTFcIiwgaW5wdXQxVmFsdWUpO1xyXG4gICAgSXRlbXNMaXN0LnJlZnJlc2hJdGVtc0xpc3QoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2xpZGVyVmFsdWVzKHZhbHVlMCwgdmFsdWUxKSB7XHJcbiAgICBpZiAoc2xpZGVyLm5vVWlTbGlkZXIpXHJcbiAgICAgICAgc2xpZGVyLm5vVWlTbGlkZXIuc2V0KFt2YWx1ZTAsIHZhbHVlMV0pO1xyXG59XHJcbmlmIChzbGlkZXIpIHtcclxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xyXG4gICAgICAgIHN0YXJ0OiBbMCwgMTAwMDFdLFxyXG4gICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICBtaW46IFswXSxcclxuICAgICAgICAgICAgbWF4OiBbMTAwMDFdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlucHV0MCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtMFwiKTtcclxuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtMVwiKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IFtpbnB1dDAsIGlucHV0MV07XHJcbiAgICBpZiAoc2xpZGVyLm5vVWlTbGlkZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgICAgICBpbnB1dHNbaGFuZGxlXS52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKE51bWJlcih2YWx1ZXNbaGFuZGxlXSkpKTtcclxuICAgICAgICAgICAgLy9zbGlkZXJVcGRhdGVIYW5kbGVyKFN0cmluZyh2YWx1ZXNbMF0pLCBTdHJpbmcodmFsdWVzWzFdKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2xpZGVyLm5vVWlTbGlkZXIub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKHZhbHVlcykge1xyXG4gICAgICAgICAgICBzbGlkZXJDaGFuZ2VIYW5kbGVyKFN0cmluZyh2YWx1ZXNbMF0pLCBTdHJpbmcodmFsdWVzWzFdKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9