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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
/* harmony import */ var _methods_methods_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/methods.component */ "./src/app/methods/methods.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _triggers_triggers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./triggers/triggers.component */ "./src/app/triggers/triggers.component.ts");
/* harmony import */ var _dynamic_prefills_dynamic_prefills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-prefills/dynamic-prefills.component */ "./src/app/dynamic-prefills/dynamic-prefills.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    },
    {
        path: 'intro',
        component: _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"]
    },
    {
        path: 'position',
        component: _position_position_component__WEBPACK_IMPORTED_MODULE_4__["PositionComponent"]
    },
    {
        path: 'methods',
        component: _methods_methods_component__WEBPACK_IMPORTED_MODULE_5__["MethodsComponent"]
    },
    {
        path: 'events',
        component: _events_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"]
    },
    {
        path: 'triggers',
        component: _triggers_triggers_component__WEBPACK_IMPORTED_MODULE_7__["TriggersComponent"]
    },
    {
        path: 'dynamicprefills',
        component: _dynamic_prefills_dynamic_prefills_component__WEBPACK_IMPORTED_MODULE_8__["DynamicPrefillsComponent"]
    },
    {
        path: 'faq',
        component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__["FAQComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;\">\n  <router-outlet></router-outlet>\n</div>\n"

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
        this.title = 'app';
    }
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dynamic_prefills_dynamic_prefills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-prefills/dynamic-prefills.component */ "./src/app/dynamic-prefills/dynamic-prefills.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _methods_methods_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./methods/methods.component */ "./src/app/methods/methods.component.ts");
/* harmony import */ var _triggers_triggers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./triggers/triggers.component */ "./src/app/triggers/triggers.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _live_demo_live_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./live-demo/live-demo.component */ "./src/app/live-demo/live-demo.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
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
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _dynamic_prefills_dynamic_prefills_component__WEBPACK_IMPORTED_MODULE_6__["DynamicPrefillsComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"],
                _methods_methods_component__WEBPACK_IMPORTED_MODULE_8__["MethodsComponent"],
                _triggers_triggers_component__WEBPACK_IMPORTED_MODULE_9__["TriggersComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_10__["IntroductionComponent"],
                _live_demo_live_demo_component__WEBPACK_IMPORTED_MODULE_12__["LiveDemoComponent"],
                _position_position_component__WEBPACK_IMPORTED_MODULE_13__["PositionComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FAQComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dynamic-prefills/dynamic-prefills.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dynamic-prefills/dynamic-prefills.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-prefills/dynamic-prefills.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dynamic-prefills/dynamic-prefills.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar-elevation\">\n  <mat-toolbar-row>\n    <span>{{title}}</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"document-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <app-menu [title]=\"title\"></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"overview-container\">\n    <mat-card>\n      <mat-tab-group dynamicHeight=\"true\">\n        <mat-tab label=\"Overview\">\n          <ng-template matTabContent>\n            <div>\n              <h3>Prefill By Question Tag</h3>\n              <p> Dynamincally prefill the answers by Question tag </p>\n              <code>window.CCSDK(\"fillPrefill\", token, questionTag, value);  </code>\n            </div>\n            <div>\n              <h3>Prefill By Question ID</h3>\n              <p> Dynamincally prefill the answers by Question ID </p>\n              <code>window.CCSDK(\"prefill\", token, questionId, value);</code>\n            </div>\n          </ng-template>\n        </mat-tab>\n        <mat-tab label=\"Live Demo\">\n          <ng-template matTabContent>\n            <app-live-demo [title]=\"title\" [url]=\"url\">\n            </app-live-demo>\n          </ng-template>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/dynamic-prefills/dynamic-prefills.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dynamic-prefills/dynamic-prefills.component.ts ***!
  \****************************************************************/
/*! exports provided: DynamicPrefillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPrefillsComponent", function() { return DynamicPrefillsComponent; });
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

var DynamicPrefillsComponent = /** @class */ (function () {
    function DynamicPrefillsComponent() {
        this.title = "Dynamic Prefills";
        this.url = "//jsfiddle.net/femilshajin/6hLmeqov/embedded/result/";
    }
    DynamicPrefillsComponent.prototype.ngOnInit = function () {
    };
    DynamicPrefillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-prefills',
            template: __webpack_require__(/*! ./dynamic-prefills.component.html */ "./src/app/dynamic-prefills/dynamic-prefills.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-prefills.component.css */ "./src/app/dynamic-prefills/dynamic-prefills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicPrefillsComponent);
    return DynamicPrefillsComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar-elevation\">\n  <mat-toolbar-row>\n    <span>{{title}}</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"document-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <app-menu [title]=\"title\"></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"overview-container\">\n    <mat-card>\n      <mat-tab-group>\n        <mat-tab label=\"Overview\">\n          <div>\n            <p>SDK has 6 events that can be listened on for capturing analytics data Replace\n              <code>token</code> with the actual token number.</p>\n          </div>\n          <div>\n            <h3>onImpression </h3>\n            <p>Fired as soon as the survey is triggered </p>\n            <code>document.addEventListener(‘XX-XXX-ready', function(e)&#123;<br>\n            &nbsp;&nbsp;e.detail.survey.on('onImpression', function(e) &#123;<br>\n            &nbsp;&nbsp;&nbsp;console.log('Impression');<br>\n            &nbsp;&nbsp;&#125;);<br>\n            &#125;); </code>\n          </div>\n          <div>\n            <h3>onQuestion </h3>\n            <p>Fired when a question is visible on screen </p>\n            <code>document.addEventListener(‘XX-XXX-ready', function(e)&#123;<br>\n              &nbsp;&nbsp;e.detail.survey.on('onQuestion', function(e) &#123;<br>\n              &nbsp;&nbsp;&nbsp;console.log('Question Displayed');<br>\n              &nbsp;&nbsp;&#125;);<br>\n              &#125;); </code>\n          </div>\n          <div>\n            <h3>onAnswer </h3>\n            <p> Fired when a question is answered </p>\n            <code>document.addEventListener(‘XX-XXX-ready', function(e)&#123;<br>\n                &nbsp;&nbsp;e.detail.survey.on('onAnswer', function(e) &#123;<br>\n                &nbsp;&nbsp;&nbsp;console.log('Question Answered');<br>\n                &nbsp;&nbsp;&#125;);<br>\n                &#125;); </code>\n          </div>\n          <div>\n            <h3>onClick </h3>\n            <p> Fired every time a click event happen on survey </p>\n            <code>document.addEventListener(‘XX-XXX-ready', function(e)&#123;<br>\n                  &nbsp;&nbsp;e.detail.survey.on('onClick', function(e) &#123;<br>\n                  &nbsp;&nbsp;&nbsp;console.log('Clicked');<br>\n                  &nbsp;&nbsp;&#125;);<br>\n                  &#125;); </code>\n          </div>\n          <div>\n            <h3>onClose </h3>\n            <p> Fired when user closes the survey </p>\n            <code>document.addEventListener(‘XX-XXX-ready', function(e)&#123;<br>\n                    &nbsp;&nbsp;e.detail.survey.on('onClose', function(e) &#123;<br>\n                    &nbsp;&nbsp;&nbsp;console.log('Closed');<br>\n                    &nbsp;&nbsp;&#125;);<br>\n                    &#125;); </code>\n          </div>\n          <div>\n            <h3>onEnd </h3>\n            <p>Fired when the survey ends </p>\n            <code>document.addEventListener(‘XX-XXX-ready', function(e)&#123;<br>\n                      &nbsp;&nbsp;e.detail.survey.on('onEnd', function(e) &#123;<br>\n                      &nbsp;&nbsp;&nbsp;console.log('Survey Ended');<br>\n                      &nbsp;&nbsp;&#125;);<br>\n                      &#125;); </code>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Live Demo\">\n          <app-live-demo [title]=\"title\" [url]=\"url\">\n          </app-live-demo>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
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

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
        this.title = "Events";
        this.url = "//jsfiddle.net/femilshajin/tyd9ronp/embedded/result/";
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"title\"></app-header>\n<mat-sidenav-container class=\"document-container\">\n  <mat-sidenav mode=\"side\" style=\"height:100%;\" opened>\n    <app-menu [title]=\"title\"></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"overview-container\">\n    <mat-card>\n      <h4>1. How do I change the welcome text?</h4>\n      <p> Under each MicroSurvey configuration, you can change it yur desired Welcome Text</p>\n      <h4>2. How do I personalize the start button colors, background, etc?</h4>\n      <p> Coming Soon... </p>\n      <h4>3. How do I skip the welcome and display the first question?</h4>\n      <p> Coming Soon... </p>\n      <h4>4. How do I track analytics?</h4>\n      <p> Coming Soon... </p>\n      <h4>5. What happens if a user visits my website on a mobile device?</h4>\n      <p> You will see the MicroSurvey PopUp in Full Screen and UI elements are intelligently adjusted to fit best on the mobile\n        screen.\n      </p>\n      <h4>6. Can I integrate this into my mobile app?</h4>\n      <p> Coming Soon... </p>\n      <h4>7. What other data can I pass in?</h4>\n      <p> Coming Soon...</p>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
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

var FAQComponent = /** @class */ (function () {
    function FAQComponent() {
        this.title = "FAQs";
    }
    FAQComponent.prototype.ngOnInit = function () {
    };
    FAQComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FAQComponent);
    return FAQComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar-elevation\">\n  <mat-toolbar-row>\n    <span>{{title}}</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/introduction/introduction.component.css":
/*!*********************************************************!*\
  !*** ./src/app/introduction/introduction.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/introduction/introduction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"title\"></app-header>\n<mat-sidenav-container class=\"document-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <app-menu [title]=\"title\"></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"overview-container\">\n    <mat-card>\n      <div>\n        <h3>About</h3>\n        <p>Cloudcherry provides its clients the opportunity to reach out to its customers over 17 different channels. Microsurvey\n          is a channel used to reach out to customers to get feedback on the website when they are browsing through a section\n          on the site. Javascript is generated at CloudCherry which can be embedded on website to make the Microsurvey to\n          appear on the website at the right time to the customers. The Microsurvey pop out can be controlled by the client.\n          This document is intended to explain how to deploy Microsurvey and collect feedbacks from customers through website.\n        </p>\n      </div>\n      <div>\n        <h3>Microsurvey </h3>\n        <p>Microsurveys are context specific surveys that are asked at very specific instances of an experience on the website.\n          These are generally very short (2 to 3 questions) and uber context specific in nature.\n        </p>\n        <p>When a customer is browsing a web page, we can configure Microsurvey to appear on the page based on specific scenarios.\n        </p>\n        <p>The scenarios could be as simple as a customer browsing the product page for more than 120 seconds and browsed scroll\n          page is more than 70%. Then as a brand, its ideal to engage the customer and ask what he/she is looking for or\n          if there are any concerns causing a delay in taking an action. Another example could be a customer on a newly launched\n          product page and exploring the product by clicking on 2 or 3 images. Here it’s ideal for the brand to engage with\n          the customer and understand what the customer feels about the website itself and if there are any specific product\n          requirements delaying a decision. </p>\n      </div>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
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

var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
        this.title = "Introduction";
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/introduction/introduction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/live-demo/live-demo.component.css":
/*!***************************************************!*\
  !*** ./src/app/live-demo/live-demo.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/live-demo/live-demo.component.html":
/*!****************************************************!*\
  !*** ./src/app/live-demo/live-demo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 5px\">\n  <mat-toolbar>\n    <mat-toolbar-row>\n      <span>{{title}} Demo</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <iframe *ngIf=\"url != null\" style=\"height:500px; width: 100%\" [src]=\"getIframeURL()\"></iframe>\n  <span *ngIf=\"url == null\">No demo available</span>\n</div>\n"

/***/ }),

/***/ "./src/app/live-demo/live-demo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/live-demo/live-demo.component.ts ***!
  \**************************************************/
/*! exports provided: LiveDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveDemoComponent", function() { return LiveDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveDemoComponent = /** @class */ (function () {
    function LiveDemoComponent(_domSanitizer) {
        this._domSanitizer = _domSanitizer;
    }
    LiveDemoComponent.prototype.ngOnInit = function () {
    };
    LiveDemoComponent.prototype.getIframeURL = function () {
        if (this.url !== undefined) {
            var securityURL = this._domSanitizer.bypassSecurityTrustResourceUrl(this.url);
            return securityURL;
        }
        return null;
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LiveDemoComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LiveDemoComponent.prototype, "url", void 0);
    LiveDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-demo',
            template: __webpack_require__(/*! ./live-demo.component.html */ "./src/app/live-demo/live-demo.component.html"),
            styles: [__webpack_require__(/*! ./live-demo.component.css */ "./src/app/live-demo/live-demo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], LiveDemoComponent);
    return LiveDemoComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <mat-list-item *ngFor=\"let menu of menuOptions\">\n    <a [routerLink]=\"menu.path\" [class]=\"title === menu.name ? 'active' : null\" class=\"full-width\">\n      <mat-icon matListIcon>{{menu.icon}} </mat-icon>\n      <span>\n        {{menu.name}}\n      </span>\n    </a>\n    <mat-divider></mat-divider>\n  </mat-list-item>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.full-width {\n  width: 100%; }\n.active {\n  color: #673ab7; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuOptions = [
            {
                name: 'Introduction',
                path: '/intro',
                icon: 'home'
            },
            {
                name: 'Position',
                path: '/position',
                icon: 'location_searching'
            },
            {
                name: 'Methods',
                path: '/methods',
                icon: 'build'
            },
            {
                name: 'Events',
                path: '/events',
                icon: 'settings_input_component'
            },
            {
                name: 'Triggers',
                path: '/triggers',
                icon: 'touch_app'
            },
            {
                name: 'Dynamic Prefills',
                path: '/dynamicprefills',
                icon: 'bookmark'
            },
            {
                name: 'FAQs',
                path: '/faq',
                icon: 'contact_support'
            }
        ];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuComponent.prototype, "title", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/methods/methods.component.css":
/*!***********************************************!*\
  !*** ./src/app/methods/methods.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/methods/methods.component.html":
/*!************************************************!*\
  !*** ./src/app/methods/methods.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"title\"></app-header>\n<mat-sidenav-container class=\"document-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <app-menu [title]=\"title\"></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"overview-container\">\n    <mat-card>\n      <mat-tab-group dynamicHeight=\"true\">\n        <mat-tab label=\"Overview\">\n          <ng-template matTabContent>\n            <div>\n              <p>\n                SDK has 3 methods that can be used to trigger the survey, Replace\n                <code>token</code> with the actual token number.\n              </p>\n            </div>\n            <div>\n              <h3>Show</h3>\n              <p> To show the survey programatically use the show method as shown below </p>\n              <code>window.CCSDK(“show”, token); </code>\n            </div>\n            <div>\n              <h3>Hide</h3>\n              <p> To hide the survey programmatically use the hide method as shown below </p>\n              <code>window.CCSDK(“hide”, token);  </code>\n            </div>\n            <div>\n              <h3>Destroy</h3>\n              <p> To destroy the survey programmatically use the destroy method as shown Below </p>\n              <code>window.CCSDK(“destroy”, token);  </code>\n            </div>\n          </ng-template>\n        </mat-tab>\n        <mat-tab label=\"Live Demo\">\n          <ng-template matTabContent>\n            <app-live-demo [title]=\"title\" [url]=\"url\">\n            </app-live-demo>\n          </ng-template>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/methods/methods.component.ts":
/*!**********************************************!*\
  !*** ./src/app/methods/methods.component.ts ***!
  \**********************************************/
/*! exports provided: MethodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodsComponent", function() { return MethodsComponent; });
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

var MethodsComponent = /** @class */ (function () {
    function MethodsComponent() {
        this.title = "Methods";
        this.url = "//jsfiddle.net/femilshajin/6y4jqspf/embedded/result/";
    }
    MethodsComponent.prototype.ngOnInit = function () {
    };
    MethodsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-methods',
            template: __webpack_require__(/*! ./methods.component.html */ "./src/app/methods/methods.component.html"),
            styles: [__webpack_require__(/*! ./methods.component.css */ "./src/app/methods/methods.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodsComponent);
    return MethodsComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position/position.component.css":
/*!*************************************************!*\
  !*** ./src/app/position/position.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/position/position.component.html":
/*!**************************************************!*\
  !*** ./src/app/position/position.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"title\"></app-header>\n<mat-sidenav-container class=\"document-container\">\n  <mat-sidenav mode=\"side\" style=\"height:100%;\" opened>\n    <app-menu [title]=\"title\"></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"overview-container\">\n    <mat-card>\n      <mat-tab-group dynamicHeight=\"true\">\n        <mat-tab label=\"Overview\">\n          <ng-template matTabContent>\n            <div>\n              <p> You can choose to show MicroSurvey on your desired position based on configuration. Available positions are\n                <code>Bottom Right</code>,\n                <code>Bottom Left</code>,\n                <code>Top Right</code> and\n                <code>Top Left</code>\n              </p>\n            </div>\n          </ng-template>\n        </mat-tab>\n        <mat-tab label=\"Live Demo\">\n          <ng-template matTabContent>\n            <app-live-demo [title]=\"title\" [url]=\"url\">\n            </app-live-demo>\n          </ng-template>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/position/position.component.ts":
/*!************************************************!*\
  !*** ./src/app/position/position.component.ts ***!
  \************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
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

var PositionComponent = /** @class */ (function () {
    function PositionComponent() {
        this.title = "Position";
        this.url = "//jsfiddle.net/femilshajin/thdayju7/embedded/result/";
    }
    PositionComponent.prototype.ngOnInit = function () {
    };
    PositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position/position.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/triggers/triggers.component.css":
/*!*************************************************!*\
  !*** ./src/app/triggers/triggers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/triggers/triggers.component.html":
/*!**************************************************!*\
  !*** ./src/app/triggers/triggers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"title\"></app-header>\n<mat-sidenav-container class=\"document-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <app-menu [title]=\"title\"></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"overview-container\">\n    <ng-template ngFor let-trigger [ngForOf]=\"triggers\">\n      <mat-card>\n        <h3>{{trigger.title}}</h3>\n        <div *ngIf=\"trigger.url != undefined\">\n          <mat-tab-group>\n            <mat-tab label=\"Overview\">\n              <div>\n                <p>{{trigger.description}}</p>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Live Demo\">\n              <app-live-demo [title]=\"trigger.title\" [url]=\"trigger.url\">\n              </app-live-demo>\n            </mat-tab>\n          </mat-tab-group>\n        </div>\n        <div *ngIf=\"trigger.url == undefined\">\n          <p>{{trigger.description}}</p>\n        </div>\n      </mat-card>\n    </ng-template>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/triggers/triggers.component.ts":
/*!************************************************!*\
  !*** ./src/app/triggers/triggers.component.ts ***!
  \************************************************/
/*! exports provided: TriggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggersComponent", function() { return TriggersComponent; });
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

var TriggersComponent = /** @class */ (function () {
    function TriggersComponent() {
        this.title = "Triggers";
        this.triggers = [
            {
                title: "Time Spent",
                description: "The number of seconds Micro Survey should wait before it gets triggered to collect feedback from customers.",
                url: "//jsfiddle.net/femilshajin/h3apyL89/embedded/result/"
            },
            {
                title: "Keep Questions In View",
                description: "Make the Micro Survey to appear in the view for a limited time period (Let’s say 30 seconds). This will ensure that the customer’s browsing experience doesn’t get affected as the Micro Survey will disappear once the customer doesn’t attempt to answer the questions after set number of seconds.",
                url: "//jsfiddle.net/femilshajin/pqbh6guf/embedded/result/"
            },
            {
                title: "Present Again/After",
                description: "We’ll be configuring more than 1 Micro Survey in a website. In case if a Micro Survey has loaded on a certain condition and the customer has submitted a feedback, then the next Micro Survey will start only after the set number of seconds.",
                url: "//jsfiddle.net/femilshajin/68rgqcfk/embedded/result/"
            },
            {
                title: "URL Contains",
                description: " The Micro Survey session will get triggered on a URL (web page where the customer is browsing) where the key word is present. (For Ex: The key words could be ‘Mobile’, ‘Flights’, ‘International’, ‘Products’ etc).",
                url: null
            },
            {
                title: "URL Doesn't Contains",
                description: "The Micro Survey session will get triggered on all URLs (Web page where the customer is browsing) except the page that contains a key word. (For Ex: The key words could be ‘Discounts’, ‘Promotion’, ‘Special offers’ etc)",
                url: null
            },
            {
                title: "Number Of Clicks",
                description: "The Number of clicks on the web page after which the Micro Survey session should get enabled.",
                url: "//jsfiddle.net/femilshajin/p3nmrcav/embedded/result/"
            },
            {
                title: "Scroll",
                description: "The Micro Survey session gets triggered once the customer scrolls beyond a certain percentage of the entire webpage (Let’s say 70%).",
                url: "//jsfiddle.net/femilshajin/be8my0az/embedded/result/"
            },
        ];
    }
    TriggersComponent.prototype.ngOnInit = function () {
    };
    TriggersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-triggers',
            template: __webpack_require__(/*! ./triggers.component.html */ "./src/app/triggers/triggers.component.html"),
            styles: [__webpack_require__(/*! ./triggers.component.css */ "./src/app/triggers/triggers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TriggersComponent);
    return TriggersComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /Users/user/Documents/kitchen-sink-micro-survey/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map