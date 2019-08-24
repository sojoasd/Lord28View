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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _concept_concept_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concept/concept.component */ "./src/app/concept/concept.component.ts");
/* harmony import */ var _shared_fallback_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/fallback-route */ "./src/app/shared/fallback-route.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vision_vision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vision/vision.component */ "./src/app/vision/vision.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _cobrand_cobrand_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cobrand/cobrand.component */ "./src/app/cobrand/cobrand.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'Index', pathMatch: 'full' },
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"],
        children: [
            { path: 'Index', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
            { path: 'ConceptPurpose', component: _concept_concept_component__WEBPACK_IMPORTED_MODULE_2__["ConceptComponent"] },
            { path: 'CompanyVision', component: _vision_vision_component__WEBPACK_IMPORTED_MODULE_6__["VisionComponent"] },
            { path: 'Services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
            { path: 'TeamMembers', component: _team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"] },
            { path: 'Experiences', component: _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_9__["ExperiencesComponent"] },
            { path: 'Cobrand', component: _cobrand_cobrand_component__WEBPACK_IMPORTED_MODULE_10__["CobrandComponent"] },
            { path: 'Contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] }
        ]
    },
    _shared_fallback_route__WEBPACK_IMPORTED_MODULE_3__["fallbackRoute"]
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'OfficeWebsite';
    }
    // data = [1,2,3];
    AppComponent.prototype.ngOnDestroy = function () {
        console.log(456);
    };
    AppComponent.prototype.RemoveItem = function (index) {
        // this.data.splice(index,1);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _concept_concept_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./concept/concept.component */ "./src/app/concept/concept.component.ts");
/* harmony import */ var _vision_vision_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vision/vision.component */ "./src/app/vision/vision.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _cobrand_cobrand_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cobrand/cobrand.component */ "./src/app/cobrand/cobrand.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _concept_concept_component__WEBPACK_IMPORTED_MODULE_6__["ConceptComponent"],
                _vision_vision_component__WEBPACK_IMPORTED_MODULE_7__["VisionComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_10__["ExperiencesComponent"],
                _cobrand_cobrand_component__WEBPACK_IMPORTED_MODULE_11__["CobrandComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cobrand/cobrand.component.css":
/*!***********************************************!*\
  !*** ./src/app/cobrand/cobrand.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n    z-index: -99;\n}\n.bg img {\n    min-height: 100%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29icmFuZC9jb2JyYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29icmFuZC9jb2JyYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xuICAgIHotaW5kZXg6IC05OTtcbn1cbi5iZyBpbWcge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/cobrand/cobrand.component.html":
/*!************************************************!*\
  !*** ./src/app/cobrand/cobrand.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\n    <!-- <div id=\"banner2\"></div> -->\n    <div class=\"bg\">\n      <img src=\"../../assets/images/Cobrand1.png\">\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/cobrand/cobrand.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cobrand/cobrand.component.ts ***!
  \**********************************************/
/*! exports provided: CobrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobrandComponent", function() { return CobrandComponent; });
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

var CobrandComponent = /** @class */ (function () {
    function CobrandComponent() {
    }
    CobrandComponent.prototype.ngOnInit = function () {
    };
    CobrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cobrand',
            template: __webpack_require__(/*! ./cobrand.component.html */ "./src/app/cobrand/cobrand.component.html"),
            styles: [__webpack_require__(/*! ./cobrand.component.css */ "./src/app/cobrand/cobrand.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CobrandComponent);
    return CobrandComponent;
}());



/***/ }),

/***/ "./src/app/concept/concept.component.css":
/*!***********************************************!*\
  !*** ./src/app/concept/concept.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sec-concept{\n    position: relative;\n}\n\n#sec-concept-inner{\n    position: absolute;\n    top:50px;\n    padding-left: 10%;\n}\n\n.bg {\n    z-index: -99;\n}\n\n.bg img {\n    min-height: 100%;\n    width: 100%;\n}\n\n.content{\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VwdC9jb25jZXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbmNlcHQvY29uY2VwdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYy1jb25jZXB0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3NlYy1jb25jZXB0LWlubmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbn1cblxuLmJnIHtcbiAgICB6LWluZGV4OiAtOTk7XG59XG4uYmcgaW1nIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudHtcbiAgICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/concept/concept.component.html":
/*!************************************************!*\
  !*** ./src/app/concept/concept.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner -->\n<!-- Note: The \"styleN\" class below should match that of the header element. -->\n<section class=\"sec-concept\">\n  <div class=\"bg\">\n    <img src=\"../../assets/images/home2.png\">\n  </div>\n  <div class=\"inner\" id=\"sec-concept-inner\">\n    <span class=\"image\">\n      <!-- <img src=\"images/pic07.jpg\" alt=\"\" /> -->\n    </span>\n    <header class=\"major\">\n      <h1>理念宗旨</h1>\n    </header>\n    <div class=\"content\">\n      <span>智慧：有效率又聰慧</span>\n      <br>\n      <span>包容：提供最佳的客戶服務</span>\n      <br>\n      <span>堅持：態度堅毅又正面</span>\n      <br>\n      <span>創新：不斷提升自我能力</span>\n      <br>\n      <span>專業：專案經驗如海洋般廣闊</span>\n    </div>\n  </div>\n</section>\n\n<!-- Main -->\n<div id=\"main\">\n\n  <!-- Two -->\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n\n      <div class=\"content\">\n        <div class=\"inner\">\n          <header class=\"major\">\n            <h3>鯨頭腦科技</h3>\n          </header>\n          <p style=\"color:white\">以智慧的鯨魚為代表～團隊成員 擁有鯨魚高智慧的頭腦\n              而以鯨魚在海洋中悠游地徜徉，象徵無邊無際的自由創新</p>\n          <!-- <ul class=\"actions\">\n            <li><a href=\"generic.html\" class=\"button\">Learn more</a></li>\n          </ul> -->\n        </div>\n      </div>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n    </section>\n  </section>\n\n</div>"

/***/ }),

/***/ "./src/app/concept/concept.component.ts":
/*!**********************************************!*\
  !*** ./src/app/concept/concept.component.ts ***!
  \**********************************************/
/*! exports provided: ConceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptComponent", function() { return ConceptComponent; });
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

var ConceptComponent = /** @class */ (function () {
    function ConceptComponent() {
    }
    ConceptComponent.prototype.ngOnInit = function () {
    };
    ConceptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-concept',
            template: __webpack_require__(/*! ./concept.component.html */ "./src/app/concept/concept.component.html"),
            styles: [__webpack_require__(/*! ./concept.component.css */ "./src/app/concept/concept.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConceptComponent);
    return ConceptComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Contact -->\n<section id=\"contact\">\n  <div class=\"inner\">\n    <section>\n      <form method=\"post\" action=\"#\">\n        <div class=\"fields\">\n          <div class=\"field half\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" name=\"name\" id=\"name\" />\n          </div>\n          <div class=\"field half\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" name=\"email\" id=\"email\" />\n          </div>\n          <div class=\"field\">\n            <label for=\"message\">Message</label>\n            <textarea name=\"message\" id=\"message\" rows=\"6\"></textarea>\n          </div>\n        </div>\n        <ul class=\"actions\">\n          <li><input type=\"submit\" value=\"Send Message\" class=\"primary\" /></li>\n          <li><input type=\"reset\" value=\"Clear\" /></li>\n        </ul>\n      </form>\n    </section>\n    <section class=\"split\">\n      <section>\n        <div class=\"contact-method\">\n          <span class=\"icon alt fa-envelope\"></span>\n          <h3>Email</h3>\n          <a href=\"#\">Peter.yu@wise-whale.com.tw</a>\n        </div>\n      </section>\n      <section>\n        <div class=\"contact-method\">\n          <span class=\"icon alt fa-phone\"></span>\n          <h3>Phone</h3>\n          <span>0958-618-289</span>\n        </div>\n      </section>\n      <section>\n        <div class=\"contact-method\">\n          <span class=\"icon alt fa-home\"></span>\n          <h3>Address</h3>\n          <span>新北市新店區安興路125-5號2樓</span>\n        </div>\n      </section>\n    </section>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/experiences/experiences.component.css":
/*!*******************************************************!*\
  !*** ./src/app/experiences/experiences.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2VzL2V4cGVyaWVuY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/experiences/experiences.component.html":
/*!********************************************************!*\
  !*** ./src/app/experiences/experiences.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main -->\n<div id=\"main\">\n\n  <!-- Two -->\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <h3>食～</h3>\n          <p style=\"color:white\">\n            <span>• Smart Eats 外帶送餐 </span>\n            <br />\n            <span>• Coffee Tone </span>\n            <br />\n            <span>• 點餐結帳系統 </span>\n            <br />\n            <span>• 餐廳訂位服務 </span>\n            <br />\n            <span>• 餐廳候位服務 </span>\n            <br />\n            <span>• 街口外送服務 </span>\n            <br />\n            <span>• 餐卷系統 </span>\n          </p>\n          <!-- <ul class=\"actions\">\n                <li><a href=\"generic.html\" class=\"button\">Learn more</a></li>\n              </ul> -->\n        </div>\n      </div>\n    </section>\n  </section>\n\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <div class=\"content\">\n        <h3>住～</h3>\n        <p style=\"color:white\">\n          • Smart智慧家庭\n          <br>\n          • 中華電信光世代智慧住宅\n          <br>\n\n          • 中華電信eHome智慧家庭\n          <br>\n\n          • 門口對講機VBell\n          <br>\n\n          • 智慧家庭系統FAVISA\n          <br>\n\n          • 華岡保全整合智慧系統\n          <br>\n\n          • MiLocks整合智慧家庭系統\n          <br>\n\n          • 智慧社區\n          <br>\n\n          • 警報系統Fronti FS330\n          <br>\n\n          • 幸福空間屋主用APP\n          <br>\n\n          • 21世紀買房網\n      </div>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n    </section>\n  </section>\n\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <h3>行～</h3>\n          <p style=\"color:white\">\n            • BikeOO共享單車服務Volvo Service+車主APP\n            <br>\n            • 台灣大車隊企業簽單\n            <br>\n\n            • 台灣大車隊車機簽單\n            <br>\n\n            • 台灣大車隊Ｘ街口支付\n            <br>\n\n            • 台灣大車隊Ｘ街口叫車\n            <br>\n\n            • 彰化縣警局『彰警Online』APP\n          </p>\n        </div>\n      </div>\n    </section>\n  </section>\n\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <h3>育～</h3>\n          <p style=\"color:white\">\n            • HTC企業內部APP\n            <br>\n            • 中國科技大學APP\n            <br>\n\n            • 吳鳳大學APP\n            <br>\n\n            • 文藻外語大學APP\n            <br>\n\n            • 致理科技大學APP\n            <br>\n\n            • 台灣藝術大學APP\n            <br>\n\n            • 醒吾科技大學『i醒吾』\n            <br>\n\n            • 龍華科技大學APP\n            <br>\n\n            • 技嘉客服系統&官網\n            <br>\n\n            • 睿能創意營銷\n            <br>\n\n            • 麗臺科技KIOSK醫療照護\n          </p>\n        </div>\n      </div>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n    </section>\n  </section>\n\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <h3>樂～</h3>\n          <p style=\"color:white\">\n            • Money Coin電子支付\n            <br>\n            • 台北101會員APP\n            <br>\n\n            • 台北101Ｘ街口支付\n            <br>\n\n            • 台灣大哥大Wali錢包\n            <br>\n\n            • 亞太電子發票轉檔\n            <br>\n\n            • 衛生疾管局\n            <br>\n\n            • 溫泉指南APP\n            <br>\n\n            • 鹿鳴溫泉酒店APP\n            <br>\n\n            • 悠遊卡內部團購系統\n            <br>\n\n            • 神腦線上APP\n            <br>\n\n            • 高毅影像『印簿玩』\n          </p>\n\n        </div>\n      </div>\n    </section>\n  </section>\n\n</div>"

/***/ }),

/***/ "./src/app/experiences/experiences.component.ts":
/*!******************************************************!*\
  !*** ./src/app/experiences/experiences.component.ts ***!
  \******************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
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

var ExperiencesComponent = /** @class */ (function () {
    function ExperiencesComponent() {
    }
    ExperiencesComponent.prototype.ngOnInit = function () {
    };
    ExperiencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experiences',
            template: __webpack_require__(/*! ./experiences.component.html */ "./src/app/experiences/experiences.component.html"),
            styles: [__webpack_require__(/*! ./experiences.component.css */ "./src/app/experiences/experiences.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperiencesComponent);
    return ExperiencesComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header id=\"header\" class=\"alt\">\n  <!-- <a href=\"index.html\" class=\"logo\"><strong>Forty</strong> <span>by HTML5 UP</span></a> -->\n  <nav>\n    <a href=\"#menu\">Menu</a>\n  </nav>\n</header>\n\n<!-- Menu -->\n<nav id=\"menu\">\n  <ul class=\"links\">\n    <li><a [routerLink]=\"['/Index']\">Home</a></li>\n    <li><a [routerLink]=\"['/ConceptPurpose']\" class=\"link\">理念宗旨</a></li>\n    <li><a [routerLink]=\"['/CompanyVision']\" class=\"link\">公司願景</a></li>\n    <li><a [routerLink]=\"['/Services']\" class=\"link\">服務項目</a></li>\n    <li><a [routerLink]=\"['/TeamMembers']\" class=\"link\">頭腦團隊成員</a></li>\n    <li><a [routerLink]=\"['/Experiences']\" class=\"link\">專案豐富經驗</a></li>\n    <li><a [routerLink]=\"['/Cobrand']\" class=\"link\">知名合作品牌</a></li>\n    <li><a [routerLink]=\"['/Contact']\" class=\"link\">聯絡我們</a></li>\n    \n  </ul>\n  <!-- <ul class=\"actions stacked\">\n    <li><a href=\"#\" class=\"button primary fit\">Get Started</a></li>\n  </ul> -->\n</nav>\n\n\n<router-outlet></router-outlet>\n\n\n<!-- Footer -->\n<footer id=\"footer\">\n  <div class=\"inner\">\n    <ul class=\"icons\">\n      <li><a href=\"#\" class=\"icon alt fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n      <li><a href=\"https://www.facebook.com/%E9%AF%A8%E9%A0%AD%E8%85%A6%E7%A7%91%E6%8A%80-751653328567359/?modal=admin_todo_tour\" class=\"icon alt fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n      <li><a href=\"#\" class=\"icon alt fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n      <li><a href=\"#\" class=\"icon alt fa-github\"><span class=\"label\">GitHub</span></a></li>\n      <li><a href=\"#\" class=\"icon alt fa-linkedin\"><span class=\"label\">LinkedIn</span></a></li>\n    </ul>\n    <ul class=\"copyright\">\n      <li>&copy; Untitled</li>\n      <li>Design: <a href=\"https://html5up.net\">HTML5 UP</a></li>\n    </ul>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#art-contact {\n  width: 100%;\n}\n\n#banner2 {\n  background-image: url('home2.png');\n  padding: 6em 0 2em 0;\n  /* background-attachment: fixed; */\n  background-position: center;\n  background-repeat: no-repeat;\n  /* background-size: cover; */\n  border-bottom: 0 !important;\n  cursor: default;\n  height: 60vh;\n  /* margin-bottom: -3.25em; */\n  max-height: 32em;\n  min-height: 22em;\n  /* position: relative; */\n  top: -3.25em;\n}\n\n.bg {\n  z-index: -99;\n}\n\n.bg img {\n  min-height: 100%;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxtQ0FBcUQ7RUFDckQscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FydC1jb250YWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNiYW5uZXIyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZTIucG5nKTtcbiAgcGFkZGluZzogNmVtIDAgMmVtIDA7XG4gIC8qIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGhlaWdodDogNjB2aDtcbiAgLyogbWFyZ2luLWJvdHRvbTogLTMuMjVlbTsgKi9cbiAgbWF4LWhlaWdodDogMzJlbTtcbiAgbWluLWhlaWdodDogMjJlbTtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICB0b3A6IC0zLjI1ZW07XG59XG5cbi5iZyB7XG4gIHotaW5kZXg6IC05OTtcbn1cbi5iZyBpbWcge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Banner -->\n<section class=\"\">\n  <!-- <div id=\"banner2\"></div> -->\n  <div class=\"bg\">\n    <img src=\"../../assets/images/home2.png\">\n  </div>\n</section>\n\n\n<!-- Main -->\n<div id=\"main\">\n\n  <!-- One -->\n  <section id=\"one\" class=\"tiles\">\n    <article>\n      <span class=\"image\">\n        <img src=\"../../assets/images/ConceptPurpose.png\" alt=\"\" />\n      </span>\n      <header class=\"major\">\n        <h3><a [routerLink]=\"['/ConceptPurpose']\" class=\"link\">理念宗旨</a></h3>\n      </header>\n    </article>\n    <article>\n      <span class=\"image\">\n        <img src=\"../../assets/images/CompanyVision.jpg\" alt=\"\" />\n      </span>\n      <header class=\"major\">\n        <h3><a [routerLink]=\"['/CompanyVision']\" class=\"link\">公司願景</a></h3>\n      </header>\n    </article>\n    <article>\n      <span class=\"image\">\n        <img src=\"../../assets/images/Services.jpg\" alt=\"\" />\n      </span>\n      <header class=\"major\">\n        <h3><a [routerLink]=\"['/Services']\" class=\"link\">服務項目</a></h3>\n      </header>\n    </article>\n    <article>\n      <span class=\"image\">\n        <img src=\"../../assets/images/TeamMembers.jpg\" alt=\"\" />\n      </span>\n      <header class=\"major\">\n        <h3><a [routerLink]=\"['/TeamMembers']\" class=\"link\">頭腦團隊成員</a></h3>\n      </header>\n    </article>\n    <article>\n      <span class=\"image\">\n        <img src=\"images/pic05.jpg\" alt=\"\" />\n      </span>\n      <header class=\"major\">\n        <h3><a [routerLink]=\"['/Experiences']\" class=\"link\">專案豐富經驗</a></h3>\n      </header>\n    </article>\n    <article>\n      <span class=\"image\">\n        <img src=\"../../assets/images/Cobrand.jpg\" alt=\"\" />\n      </span>\n      <header class=\"major\">\n        <h3><a [routerLink]=\"['/Cobrand']\" class=\"link\">知名合作品牌</a></h3>\n      </header>\n    </article>\n    <article id=\"art-contact\">\n      <span class=\"image\">\n        <img src=\"images/pic06.jpg\" alt=\"\" />\n      </span>\n      <header class=\"major\">\n        <h3><a [routerLink]=\"['/Contact']\" class=\"link\">聯絡我們</a></h3>\n      </header>\n    </article>\n  </section>\n\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n    z-index: -99;\n}\n.bg img {\n    min-height: 100%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgICB6LWluZGV4OiAtOTk7XG59XG4uYmcgaW1nIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\n    <!-- <div id=\"banner2\"></div> -->\n    <div class=\"bg\">\n      <img src=\"../../assets/images/Services1.png\">\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
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

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/fallback-route.ts":
/*!******************************************!*\
  !*** ./src/app/shared/fallback-route.ts ***!
  \******************************************/
/*! exports provided: fallbackRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackRoute", function() { return fallbackRoute; });
var fallbackRoute = {
    path: '**',
    redirectTo: '/Index',
    pathMatch: 'full'
};



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main -->\n<div id=\"main\">\n\n  <!-- Two -->\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <header class=\"major\">\n            <h3>成員</h3>\n          </header>\n          <p style=\"color:white\">成員來自台大、政大</p>\n          <!-- <ul class=\"actions\">\n              <li><a href=\"generic.html\" class=\"button\">Learn more</a></li>\n            </ul> -->\n        </div>\n      </div>\n    </section>\n  </section>\n\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <header class=\"major\">\n            <h3>專業認證</h3>\n          </header>\n          <p style=\"color:white\">ＰＭ：皆擁有國際專案管理師證照(PMP)\n            工程師：擁有SCJP認證「 Java程式設計師」</p>\n          <!-- <ul class=\"actions\">\n                  <li><a href=\"generic.html\" class=\"button\">Learn more</a></li>\n                </ul> -->\n        </div>\n      </div>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n    </section>\n  </section>\n\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <header class=\"major\">\n            <h3>過去的工作經驗兼容</h3>\n          </header>\n          <p style=\"color:white\">大公司的洗禮\n              新創公司的磨練</p>\n        </div>\n      </div>\n    </section>\n  </section>\n\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <header class=\"major\">\n            <h3>專案經驗</h3>\n          </header>\n          <p style=\"color:white\">在業界擁有5~10年專案開發與執行經驗</p>\n          <!-- <ul class=\"actions\">\n                  <li><a href=\"generic.html\" class=\"button\">Learn more</a></li>\n                </ul> -->\n        </div>\n      </div>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"assets/images/pic08.jpg\" alt=\"\" data-position=\"top center\" />\n      </a>\n    </section>\n  </section>\n\n\n</div>"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
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

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/vision/vision.component.css":
/*!*********************************************!*\
  !*** ./src/app/vision/vision.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2lvbi92aXNpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/vision/vision.component.html":
/*!**********************************************!*\
  !*** ./src/app/vision/vision.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main -->\n<div id=\"main\">\n\n  <!-- Two -->\n  <section id=\"two\" class=\"spotlights\">\n    <section>\n      <a href=\"generic.html\" class=\"image\">\n        <img src=\"../../assets/images/vision1.png\" alt=\"\" data-position=\"top center\" />\n      </a>\n      <div class=\"content\">\n        <div class=\"inner\">\n          <header class=\"major\">\n            <!-- <h3>Rhoncus magna</h3> -->\n          </header>\n          <span>客戶信任所託</span>\n          <br>\n          <span> 溝通暢通</span>\n          <br>\n          <span> 預期進度</span>\n          <br>\n          <span> 滿意所交付</span>\n          <br>\n          <span> 迅速處理問題</span>\n          <!-- <ul class=\"actions\">\n            <li><a href=\"generic.html\" class=\"button\">Learn more</a></li>\n          </ul> -->\n        </div>\n      </div>\n    </section>\n  </section>\n\n</div>"

/***/ }),

/***/ "./src/app/vision/vision.component.ts":
/*!********************************************!*\
  !*** ./src/app/vision/vision.component.ts ***!
  \********************************************/
/*! exports provided: VisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionComponent", function() { return VisionComponent; });
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

var VisionComponent = /** @class */ (function () {
    function VisionComponent() {
    }
    VisionComponent.prototype.ngOnInit = function () {
    };
    VisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vision',
            template: __webpack_require__(/*! ./vision.component.html */ "./src/app/vision/vision.component.html"),
            styles: [__webpack_require__(/*! ./vision.component.css */ "./src/app/vision/vision.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VisionComponent);
    return VisionComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zealyen/WorkSpace/Lord28/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map