(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ot-header></ot-header>\n<ot-sidebar></ot-sidebar>\n<article>\n    <aside class=\"financial\">\n        <div>\n            <i class=\"fas fa-clipboard-list fa-3x\"></i>\n            <h2>Financial Details</h2>\n            <ul>\n                <li>Run daily deposit report</li>\n                <li>End the day for [TODAY]</li>\n                <li>Run Statements</li>\n                <li>Run Late Fees</li>\n                <li>End the month for [MONTH]</li>\n            </ul>\n        </div>\n    </aside>\n    <aside class=\"schedule\">\n        <div>\n            <i class=\"fas fa-clipboard-list fa-3x\"></i>\n            <h2>Schedule Details</h2>\n            <ul>\n                <li>[##] of patients scheduled today</li>\n                <li>[##] of Banding appointments</li>\n                <li>[##] of New Patient Exams</li>\n                <li>[##] of Debanding appointments</li>\n            </ul>\n        </div>\n    </aside>\n</article>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ot';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ot-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__["SidebarService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <ul>\n        <li class=\"menu\" (click)=\"mnuToggle()\"><i class=\"fas fa-bars fa-lg\"></i><span class=\"tooltip\">Menu</span>\n        </li>\n        <li class=\"logo\"></li>\n  \n        <li class=\"search\"><i class=\"fas fa-search fa-lg\"></i><input type=\"text\" placeholder=\"Search\"></li>\n  \n  \n  <!--                    float right-->\n        <li class=\"settings\"><i class=\"fas fa-cog fa-lg\"></i><span class=\"tooltip\">Settings</span>\n        </li>\n        <li class=\"user\">\n            <i class=\"far fa-user-circle fa-lg\"></i>\n            <span class=\"first\">Carmen</span>\n            <span class=\"last\">San Diego</span>\n        </li>\n        <li class=\"notifications\"><i class=\"far fa-bell fa-lg\"></i><span class=\"tooltip\">Notifications</span></li>\n        <li class=\"messages\"><i class=\"far fa-envelope fa-lg\"></i><span class=\"tooltip\">Messages</span></li>\n  \n    </ul>\n  </header>"

/***/ }),

/***/ "./src/app/components/header/header.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #3e454c;\n  z-index: 1; }\n  header ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    padding: 10px; }\n  header ul li {\n      display: block;\n      float: left;\n      height: 20px;\n      margin: 0 0 10px 0;\n      padding: 10px;\n      border-right: 1px solid #DDDDDD;\n      position: relative;\n      cursor: pointer; }\n  header ul li.settings {\n        float: right;\n        border-right: none; }\n  header ul li.user {\n        float: right; }\n  header ul li.search {\n        position: absolute;\n        left: 220px;\n        border-right: none;\n        cursor: pointer; }\n  header ul li.messages {\n        float: right;\n        border-left: 1px solid #DDDDDD; }\n  header ul li.notifications {\n        float: right; }\n  header ul li.notifications:hover {\n          color: yellow; }\n  header ul li.search {\n        position: relative;\n        left: 5px;\n        cursor: pointer; }\n  header ul li.menu {\n        cursor: pointer; }\n  header ul li.search input {\n        margin: 0;\n        height: 75%;\n        padding: 2px 5px 5px 35px;\n        position: absolute;\n        opacity: 0;\n        top: 0;\n        left: 0;\n        right: -50px;\n        border: none;\n        background-color: transparent;\n        font-size: 1.5em;\n        z-index: -1; }\n  header ul li.search input:focus {\n          opacity: 1; }\n  header ul li.logo {\n        background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22 standalone%3D%22no%22%3F%3E%3Csvg width%3D%22601px%22 height%3D%22598px%22 viewBox%3D%220 0 601 598%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%3E    %3C!-- Generator%3A Sketch 3.4.2 (15855) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3ERound Logo%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22 sketch%3Atype%3D%22MSPage%22%3E        %3Cg id%3D%22Round-Logo%22 sketch%3Atype%3D%22MSLayerGroup%22%3E            %3Cpath d%3D%22M300.69%2C597.646 C466.327%2C597.646 600.609%2C463.889 600.609%2C298.898 C600.609%2C133.905 466.327%2C0.149 300.69%2C0.149 C135.055%2C0.149 0.774%2C133.905 0.774%2C298.898 C0.774%2C463.889 135.055%2C597.646 300.69%2C597.646%22 id%3D%22Fill-1%22 fill%3D%22%231A1918%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M300.69%2C556.469 C443.501%2C556.469 559.273%2C441.15 559.273%2C298.896 C559.273%2C156.644 443.501%2C41.322 300.69%2C41.322 C157.884%2C41.322 42.11%2C156.644 42.11%2C298.896 C42.11%2C441.15 157.884%2C556.469 300.69%2C556.469%22 id%3D%22Fill-2%22 fill%3D%22%231A1918%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M300.69%2C556.469 C443.501%2C556.469 559.273%2C441.15 559.273%2C298.896 C559.273%2C156.644 443.501%2C41.322 300.69%2C41.322 C157.884%2C41.322 42.11%2C156.644 42.11%2C298.896 C42.11%2C441.15 157.884%2C556.469 300.69%2C556.469 L300.69%2C556.469 Z%22 id%3D%22Stroke-3%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%2219%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M266.781%2C429.241 L308.607%2C196.75 L190.358%2C196.75 L148.534%2C429.241%22 id%3D%22Fill-4%22 fill%3D%22%23FFFFFF%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M414.635%2C400.335 L454.268%2C167.668 L336.02%2C167.668 L296.385%2C400.335%22 id%3D%22Fill-5%22 fill%3D%22%23FFFFFF%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M129.587%2C400.335 L170.81%2C167.668 L52.561%2C167.668 L11.34%2C400.335%22 id%3D%22Fill-6%22 fill%3D%22%23FFFFFF%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M549.291%2C428.477 L590.408%2C196.75 L472.158%2C196.75 L431.046%2C428.477%22 id%3D%22Fill-7%22 fill%3D%22%23FFFFFF%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M91.136%2C266.847 L88.689%2C285.047 C89.76%2C285.361 94.093%2C285.047 95.069%2C284.89 C98.449%2C284.576 101.542%2C282.851 102.769%2C280.81 C104.802%2C277.516 105.593%2C270.455 104.139%2C268.26 C101.488%2C264.336 95.405%2C264.65 91.431%2C264.65 L91.136%2C266.847 Z M62.283%2C236.721 L112.192%2C236.721 C120.299%2C236.721 132.304%2C236.095 136.991%2C241.428 C142.23%2C247.39 140.34%2C255.55 138.631%2C268.26 L136.566%2C283.635 C135.236%2C293.519 133.844%2C303.874 127.427%2C309.052 C121.548%2C313.761 109.711%2C313.132 103.355%2C313.132 L84.915%2C313.132 L78.504%2C360.831 L45.602%2C360.831 L62.283%2C236.721 Z%22 id%3D%22Fill-18%22 fill%3D%22%231A1918%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M240.336%2C281.752 C241.684%2C271.711 242.082%2C266.375 239.463%2C263.395 C238.085%2C261.825 233.932%2C261.983 232.375%2C262.923 C227.565%2C265.591 227.378%2C271.711 225.903%2C282.693 L222.697%2C306.542 L237.004%2C306.542 L240.336%2C281.752 Z M262.607%2C360.831 L229.706%2C360.831 L233.249%2C334.47 L218.943%2C334.47 L215.4%2C360.831 L182.658%2C360.831 L195.563%2C264.807 C196.66%2C256.647 197.269%2C247.39 203.951%2C241.428 C210.093%2C235.937 219.207%2C236.721 226.837%2C236.721 L252.267%2C236.721 C262.917%2C236.721 269.87%2C237.035 274.959%2C241.742 C278.905%2C245.508 276.801%2C255.236 275.557%2C264.493 L262.607%2C360.831 Z%22 id%3D%22Fill-19%22 fill%3D%22%231A1918%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M341.068%2C236.721 L373.81%2C236.721 L363.143%2C316.113 C362.129%2C323.644 360.197%2C332.117 364.328%2C334.47 C365.519%2C335.097 369.493%2C335.097 371.185%2C334.313 C375.953%2C331.959 376.245%2C325.057 377.553%2C315.329 L388.116%2C236.721 L421.178%2C236.721 L408.422%2C331.646 C406.859%2C343.258 406.516%2C351.73 400.143%2C356.594 C394.305%2C360.986 383.517%2C360.831 375.412%2C360.831 L351.247%2C360.831 C343.302%2C360.831 333.522%2C361.457 329.228%2C356.75 C324.956%2C351.886 327.065%2C340.903 328.056%2C333.531%22 id%3D%22Fill-20%22 fill%3D%22%231A1918%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E            %3Cpath d%3D%22M483.365%2C236.721 L520.559%2C236.721 C519.154%2C241.272 517.736%2C244.723 516.554%2C253.51 L505.8%2C333.531 L541.125%2C331.646 L530.844%2C360.831 L468.593%2C360.831 L482.891%2C254.451 C483.881%2C247.076 483.58%2C239.859 483.365%2C236.721%22 id%3D%22Fill-21%22 fill%3D%22%231A1918%22 sketch%3Atype%3D%22MSShapeGroup%22%3E%3C%2Fpath%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center center;\n        background-size: contain;\n        width: 125px;\n        padding-right: 14px; }\n  header ul li span {\n        position: absolute;\n        top: 5%;\n        left: 30%;\n        padding: 0;\n        margin: 0; }\n  header ul li span.last {\n          top: 48%; }\n  .user {\n  width: 110px; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(side) {
        this.side = side;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.mnuToggle = function () {
        this.side.minimized = !this.side.minimized;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ot-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/components/header/header.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__["SidebarService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\" [ngClass]=\"{ 'minimized' : side.minimized }\">\n    <ul>\n        <li><i class=\"fas fa-id-card-alt fa-lg fa-fw\"></i><span>Patients</span></li>\n        <li><i class=\"fas fa-calendar-alt fa-lg fa-fw\"></i><span>Schedule</span></li>\n        <li><i class=\"fas fa-money-bill fa-lg fa-fw\"></i><span>Ledgers</span></li>\n        <li><i class=\"fas fa-feather fa-lg fa-fw\"></i><span>Contracts</span></li>\n        <li><i class=\"fas fa-heartbeat fa-lg fa-fw\"></i><span>Treatment Cards</span></li>\n    </ul>\n</aside>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: fixed;\n  height: 100%;\n  width: 200px;\n  top: 0;\n  left: 0;\n  background-color: #3e454c;\n  padding: 0;\n  margin: 0; }\n  .sidebar.minimized {\n    width: 50px; }\n  .sidebar.minimized i {\n      padding: 10px 10px; }\n  .sidebar.minimized span {\n      visibility: hidden; }\n  .sidebar > ul {\n    padding: 60px 0;\n    list-style: none; }\n  .sidebar li {\n    width: 200px;\n    height: 35px; }\n  .sidebar li:hover {\n      background: rgba(255, 255, 255, 0.3);\n      cursor: pointer;\n      border-radius: 25px; }\n  .sidebar li span {\n      padding-left: 5px; }\n  article {\n  position: fixed;\n  top: 80px;\n  left: 200px; }\n  article aside {\n    margin: 0;\n    padding-left: 20px;\n    width: 100%; }\n  article aside h2 {\n      display: inline-block;\n      padding-left: 20px; }\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(side) {
        this.side = side;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.menuToggle = function () {
        this.side.minimized = !this.side.minimized;
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ot-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.sass */ "./src/app/components/sidebar/sidebar.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/services/sidebar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarService = /** @class */ (function () {
    function SidebarService() {
        this.minimized = false;
    }
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulstory/dev/learn/ortho-titan/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map