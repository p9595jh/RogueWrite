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

module.exports = "<div class=\"mdl-demo mdl-base\">\r\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-tabs\">\r\n    <!-- <app-navbar></app-navbar> -->\r\n\r\n    <!-- header for large display -->\r\n    <header class=\"mdl-layout__header mdl-layout__header--scroll mdl-color--primary\">\r\n            \r\n      <!-- spacing -->\r\n      <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\r\n      \r\n      <!-- title -->\r\n      <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\">\r\n        <h3 [routerLink]=\"['/']\" style=\"cursor: pointer; font-family: 'Ubuntu', sans-serif;\">RogueWrite</h3>\r\n        <div class=\"mdl-layout-spacer\"></div>\r\n        <nav class=\"mdl-navigation\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\r\n          <a *ngIf=\"!authService.loggedIn()\" class=\"mdl-navigation__link\" [routerLink]=\"['/login']\">LOGIN</a>\r\n          <a *ngIf=\"authService.loggedIn()\" class=\"mdl-navigation__link\" [routerLink]=\"['/profile']\">PROFILE</a>\r\n          <a *ngIf=\"authService.loggedIn()\" class=\"mdl-navigation__link\" (click)=\"onLogoutClick()\" href=\"#\">LOGOUT</a>\r\n        </nav>\r\n      </div>\r\n      \r\n      <!-- spacing -->\r\n      <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\r\n\r\n      <!-- nav bar -->\r\n      <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark\">\r\n        <a [routerLink]=\"['/']\" class=\"mdl-layout__tab is-active\">HOME</a>\r\n        <a [routerLink]=\"['/board/free']\" class=\"mdl-layout__tab\">자유게시판</a>\r\n        <a href=\"#features\" class=\"mdl-layout__tab\">Details</a>\r\n        <a href=\"#features\" class=\"mdl-layout__tab\">Technology</a>\r\n        <a href=\"#features\" class=\"mdl-layout__tab\">FAQ</a>\r\n      </div>\r\n    </header>\r\n\r\n    <!-- header for mobile -->\r\n    <header class=\"mdl-layout__header--scroll mdl-layout--small-screen-only mdl-color--primary\">\r\n      <div class=\"mdl-layout__header-row\">\r\n        <h3 class=\"mdl-navigation__link\" style=\"font-family: 'Ubuntu', sans-serif;\">RogueWrite</h3>\r\n        <div class=\"mdl-layout-spacer\"></div>\r\n        <nav class=\"mdl-navigation\">\r\n          <a *ngIf=\"!authService.loggedIn()\" class=\"mdl-navigation__link\" [routerLink]=\"['/login']\">LOGIN</a>\r\n          <a *ngIf=\"authService.loggedIn()\" class=\"mdl-navigation__link\" [routerLink]=\"['/profile']\">PROFILE</a>\r\n          <a *ngIf=\"authService.loggedIn()\" class=\"mdl-navigation__link\" (click)=\"onLogoutClick()\" href=\"#\">LOGOUT</a>\r\n        </nav>\r\n      </div>\r\n    </header>\r\n    <div class=\"mdl-layout__drawer mdl-layout--small-screen-only\">\r\n      <span class=\"mdl-layout__title\" style=\"font-family: 'Ubuntu', sans-serif;\">RogueWrite</span>\r\n      <nav class=\"mdl-navigation\">\r\n        <a class=\"mdl-navigation__link\" href=\"#\">menu1</a>\r\n        <a class=\"mdl-navigation__link\" href=\"#\">menu2</a>\r\n        <a class=\"mdl-navigation__link\" href=\"#\">menu3</a>\r\n        <a class=\"mdl-navigation__link\" href=\"#\">menu4</a>\r\n        <a class=\"mdl-navigation__link\" href=\"#\">menu5</a>\r\n      </nav>\r\n    </div>\r\n\r\n    <ng-flash-message></ng-flash-message>\r\n    <main class=\"mdl-layout__content\">\r\n      <div class=\"mdl-layout__tab-panel is-active\" id=\"overview\">\r\n        <router-outlet></router-outlet>\r\n        <!-- <section></section> -->\r\n      </div>\r\n\r\n      <!-- footer -->\r\n      <footer class=\"mdl-mega-footer\">\r\n        <div class=\"mdl-mega-footer--bottom-section\">\r\n          <div class=\"mdl-logo\">\r\n            powered by Project RogueWrite\r\n          </div>\r\n          <ul class=\"mdl-mega-footer--link-list\">\r\n            <li><a target=\"_blank\" href=\"https://getmdl.io/index.html\">MDL</a></li>\r\n            <li><a target=\"_blank\" href=\"https://material.angular.io/\">Angular Material</a></li>\r\n            <li><a target=\"_blank\" href=\"https://github.com/p9595jh/RogueWrite\">Github</a></li>\r\n          </ul>\r\n        </div>\r\n      </footer>\r\n      <!-- footer -->\r\n\r\n    </main>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.title = 'angular-src in MEANAuthApp';
    }
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.showFlashMessage({
            messages: ['You are logged out'],
            type: 'success',
            timeout: 3000
        });
        this.router.navigate(['login']);
        return false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modify/modify.component */ "./src/app/components/modify/modify.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_write_write_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/write/write.component */ "./src/app/components/write/write.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'modify', component: _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_24__["ModifyComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'board/:type', component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_25__["BoardComponent"] },
    { path: 'write', component: _components_write_write_component__WEBPACK_IMPORTED_MODULE_26__["WriteComponent"] /*, canActivate: [AuthGuard]*/ },
    { path: 'test', component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_27__["TestComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"],
                _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_24__["ModifyComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_25__["BoardComponent"],
                _components_write_write_component__WEBPACK_IMPORTED_MODULE_26__["WriteComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_27__["TestComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__["NgFlashMessagesModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__["FroalaViewModule"].forRoot()
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["ShowOnDirtyErrorStateMatcher"] }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/board/board.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/board/board.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"num\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">{{content?.title}}</h4>\r\n\r\n      <span style=\"float: right; text-align: right; font-size: 80%;\">\r\n        {{content?.nickname}}<br/>{{content?.writedate}}\r\n      </span>\r\n      <hr/>\r\n      <pre style=\"padding: 1%; padding-top: 5%;\">{{content?.content}}</pre>\r\n      <br/><br/>\r\n      <div style=\"text-align: center;\">\r\n        <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored\">\r\n          추천 {{content?.recommend}}\r\n        </button>\r\n      </div>\r\n      <br/><hr/>\r\n\r\n      <!-- ############### table for comments ############### -->\r\n      <table style=\"width: 96%; margin: auto;\">\r\n        <tbody *ngFor=\"let comment of content?.comment\">\r\n          <tr>\r\n            <td>\r\n              <span style=\"font-size: 80%;\">{{comment?.writer}} &nbsp;|&nbsp; {{comment?.writedate}}</span>\r\n              <pre>{{comment?.comment}}</pre>\r\n            </td>\r\n            <!-- <td style=\"text-align: right; vertical-align: middle;\">\r\n              <button class=\"mdl-button mdl-js-button mdl-button--icon\" style=\"font-size: 90%;\">\r\n                ♡ 0\r\n              </button>\r\n            </td> -->\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n      <!-- ############### table for comments ############### -->\r\n\r\n      <!-- ############### writing area ############### -->\r\n      <form *ngIf=\"authService.loggedIn()\" (click)=\"onWriteComment()\">\r\n        <table style=\"width: 96%; margin: auto;\">\r\n          <tr style=\"text-align: center;\">\r\n            <td>\r\n              <mat-form-field style=\"width: 98%;\">\r\n                <textarea matInput placeholder=\"댓글을 작성해주세요.\" rows=\"3\" cols=\"80\" name=\"cmtWrite\" [(ngModel)]=\"cmtWrite\"></textarea>\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n              <button mat-raised-button type=\"submit\">작성</button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </form>\r\n      <!-- ############### writing area ############### -->\r\n\r\n    </div>\r\n  </div>\r\n  <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"postbtn\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n  <ul class=\"mdl-menu mdl-js-menu mdl-menu--bottom-right\" for=\"postbtn\">\r\n    <li class=\"mdl-menu__item\">삭제</li>\r\n    <li class=\"mdl-menu__item\">편집</li>\r\n  </ul>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>자유게시판</h4><hr/>\r\n      \r\n      <!-- for large display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--large-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">번호</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th>글쓴이</th>\r\n            <th>조회수</th>\r\n            <th>추천</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let val of contents\">\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{val.num}}</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a href=\"#\" style=\"color: black; text-decoration: none; font-weight: 400;\">{{val.title}}</a> \r\n              <span style=\"font-size: 85%; color: grey;\">[{{val.comment.length}}]</span>\r\n            </td>\r\n            <td>{{val.nickname}}</td>\r\n            <td>{{val.hit}}</td>\r\n            <td>{{val.recommend}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- for small display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--small-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <tbody *ngFor=\"let val of contents\">\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <div>\r\n                <a href=\"#\" style=\"color: black; text-decoration: none; font-weight: 400;\">{{val.title}}</a> \r\n              </div><div style=\"font-size: 85%; margin-top: 1%;\">\r\n                <span>{{val.nickname}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>조회 {{val.hit}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>추천 {{val.recommend}}</span>\r\n              </div>\r\n            </td>\r\n            <td style=\"color: grey;\">[{{val.comment.length}}]</td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n      <div *ngIf=\"authService.loggedIn()\" style=\"float: right;\">\r\n        <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\r\n          글쓰기\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"btn1\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n  <ul class=\"mdl-menu mdl-js-menu mdl-menu--bottom-right\" for=\"btn1\">\r\n    <li class=\"mdl-menu__item\" disabled>자주 가는 게시판으로 설정</li>\r\n  </ul>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BoardComponent = /** @class */ (function () {
    function BoardComponent(route, funcService, authService, http) {
        this.route = route;
        this.funcService = funcService;
        this.authService = authService;
        this.http = http;
        this.type = this.route.snapshot.paramMap.get('type');
        this.num = this.route.snapshot.paramMap.get('num');
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.get(this.funcService.ServerAddress + '/boards/takeAllPosts?type=' + this.type, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            _this.content = data.posts;
            if (_this.num) {
                _this.http.get(_this.funcService.ServerAddress + '/boards/takeOnePost?type=' + _this.type + '&num=' + _this.num, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); })).subscribe(function (result) {
                    _this.contents = result.post;
                });
            }
        });
    };
    BoardComponent.prototype.onWriteComment = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var formData = {
            comment: this.cmtWrite
        };
        this.http.post(this.funcService.ServerAddress + '/boards/write', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            if (data.success) {
                // code to get back to the board list page, and it has to have 'num' variable to show content itself
                // this.router.navigate['./board', needed parameters];
            }
        });
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/components/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_func_service__WEBPACK_IMPORTED_MODULE_4__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>사이트 개요</h4><hr/>\r\n      간략한 설명 <br/>\r\n      이 사이트는 이러이러한 것을 하는 것이다 라던가 <br/>\r\n      아님 뭐 이미지를 넣던가 그런거 <br/>\r\n      <a [routerLink]=\"['./test']\">testing</a>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>자유게시판</h4><hr/>\r\n      <ul>\r\n        <li>게시글1</li>\r\n        <li>게시글2</li>\r\n        <li>게시글3</li>\r\n        <li>게시글4</li>\r\n        <li>게시글5</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"btn1\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n  <ul class=\"mdl-menu mdl-js-menu mdl-menu--bottom-right\" for=\"btn1\">\r\n    <li class=\"mdl-menu__item\" disabled>자주 가는 게시판으로 설정</li>\r\n  </ul>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>다른게시판</h4><hr/>\r\n      <ul>\r\n        <li>게시글1</li>\r\n        <li>게시글2</li>\r\n        <li>게시글3</li>\r\n        <li>게시글4</li>\r\n        <li>게시글5</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"btn2\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n  <ul class=\"mdl-menu mdl-js-menu mdl-menu--bottom-right\" for=\"btn2\">\r\n    <li class=\"mdl-menu__item\" disabled>자주 가는 게시판으로 설정</li>\r\n  </ul>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>글쓰기 폼 테스트</h4><hr/>\r\n      <div [froalaEditor]></div>\r\n    </div>\r\n  </div>\r\n  <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"btn2\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n  <ul class=\"mdl-menu mdl-js-menu mdl-menu--bottom-right\" for=\"btn2\">\r\n    <li class=\"mdl-menu__item\" disabled>자주 가는 게시판으로 설정</li>\r\n  </ul>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>로그인</h4><hr/>\r\n      \r\n      <br/><br/>\r\n\r\n      <!-- login form for large display -->\r\n      <form class=\"mdl-layout--large-screen-only\" (submit)=\"onLoginSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/><br/><br/>\r\n          <button mat-raised-button type=\"submit\" class=\"largeInputEle\">로그인</button>\r\n          <br/><br/><br/><br/><br/><hr/>\r\n          <a [routerLink]=\"['../register']\" style=\"color: black; text-decoration: none;\">회원가입</a>\r\n          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\r\n          <a href=\"#\" style=\"color: black; text-decoration: none;\">아이디/비밀번호 찾기</a>\r\n        </div>\r\n      </form>\r\n\r\n      <!-- login form for small display -->\r\n      <form class=\"mdl-layout--small-screen-only\" (submit)=\"onLoginSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/><br/>\r\n          <button mat-raised-button type=\"submit\" class=\"smallInputEle\">로그인</button>\r\n          <br/><br/><br/><br/><br/><hr/>\r\n          <a [routerLink]=\"['../register']\" style=\"color: black; text-decoration: none;\">회원가입</a>\r\n          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\r\n          <a href=\"#\" style=\"color: black; text-decoration: none;\">아이디/비밀번호 찾기</a>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n<br/><br/>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // console.log(this.username);
        var user = {
            userid: this.userid,
            pw: this.pw
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                // this.flashMessage.showFlashMessage({
                //   messages: [data.msg], 
                //   type: 'success', 
                //   timeout:3000
                // });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/modify/modify.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/modify/modify.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modify/modify.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/modify/modify.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  modify works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/modify/modify.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/modify/modify.component.ts ***!
  \*******************************************************/
/*! exports provided: ModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyComponent", function() { return ModifyComponent; });
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

var ModifyComponent = /** @class */ (function () {
    function ModifyComponent() {
    }
    ModifyComponent.prototype.ngOnInit = function () {
    };
    ModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify',
            template: __webpack_require__(/*! ./modify.component.html */ "./src/app/components/modify/modify.component.html"),
            styles: [__webpack_require__(/*! ./modify.component.css */ "./src/app/components/modify/modify.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModifyComponent);
    return ModifyComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"user\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>PROFILE &nbsp;-&nbsp; {{user.userid}}</h4>\r\n      <hr/><br/>\r\n      \r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 80%;\">\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">아이디</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.userid}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">닉네임</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.nickname}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">이메일</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.email}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">한 줄 소개</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.introduction}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <br/><br/>\r\n\r\n      <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\" style=\"float: right;\" [routerLink]=\"['./modify']\">\r\n        회원정보 수정\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>회원가입</h4><hr/><br/><br/>\r\n\r\n      <!-- registration form for large display -->\r\n      <form class=\"mdl-layout--large-screen-only\" (submit)=\"onRegisterSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"비밀번호 확인\" type=\"password\" name=\"pwchk\" [(ngModel)]=\"pwchk\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"닉네임\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"이메일\" type=\"text\" name=\"email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('email')\">\r\n              이메일을 입력해주세요.\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"한 줄 소개\" type=\"text\" name=\"introduction\" [(ngModel)]=\"introduction\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" class=\"largeInputEle\">회원가입</button>\r\n          <br/><br/><br/><hr/>\r\n          여기에다가 뭔가 알려둘 사항 같은 걸 써두면 됨\r\n        </div>\r\n      </form>\r\n\r\n      <!-- registration form for small display -->\r\n      <form class=\"mdl-layout--small-screen-only\" (submit)=\"onRegisterSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"비밀번호 확인\" type=\"password\" name=\"pwchk\" [(ngModel)]=\"pwchk\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"닉네임\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"이메일\" type=\"text\" name=\"email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('email')\">\r\n              이메일을 입력해주세요.\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"한 줄 소개\" type=\"text\" name=\"introduction\" [(ngModel)]=\"introduction\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" class=\"smallInputEle\">회원가입</button>\r\n          <br/><br/><br/><hr/>\r\n          여기에다가 뭔가 알려둘 사항 같은 걸 써두면 됨\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email,
        ]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.emailFormControl.setValue('email');
        var user = {
            userid: this.userid,
            pw: this.pw,
            pwchk: this.pwchk,
            nickname: this.nickname,
            email: this.email,
            introduction: this.introduction
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.showFlashMessage({ messages: ['빈 항목이 있습니다'], type: 'danger', timeout: 2000 });
            return false;
        }
        // Password check
        if (this.pw != this.pwchk) {
            this.flashMessage.showFlashMessage({ messages: ['비밀번호가 일치하지 않습니다'], type: 'danger', timeout: 2000 });
            return false;
        }
        // Check with conditions
        var conditions = this.validateService.validateConditions(user);
        if (!conditions.valid) {
            this.flashMessage.showFlashMessage({ messages: [conditions.msg], type: 'danger', timeout: 2000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.showFlashMessage({ messages: ['이메일 형식이 맞지 않습니다'], type: 'danger', timeout: 2000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['회원가입 완료 - 로그인 해주십시오'],
                    type: 'success',
                    timeout: 2000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/test.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\n    <div class=\"mdl-card__supporting-text\">\n      <h4>Test</h4><hr/>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(fileInput.files)\">\n        <img *ngIf=\"imageSrc\" [src]=\"imageSrc\" class=\"avatar\">\n        <br/>\n        <input type=\"file\" accept=\"image/*\" (change)=\"onFileChange(fileInput.files)\" #fileInput>\n        <br/>\n        <button mat-raised-button type=\"submit\" [disabled]=\"form.invalid || loading\">Save</button>\n        <br/>\n        <i *ngIf=\"loading\"></i>\n      </form>\n      <pre>{{form.value | json}}</pre>\n      <pre>{{result | json}}</pre>\n\n    </div>\n  </div>\n</section>\n\n<section></section>\n"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestComponent = /** @class */ (function () {
    function TestComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.apiUrl = 'http://localhost:3000'; // funcService.ServerAddress
        this.loading = false;
        this.imageSrc = '/assets/images/john-resig.jpeg';
        this.form = this.fb.group({
            avatar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.onFileChange = function (files) {
        var _this = this;
        if (files && files.length > 0) {
            var file = files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onload = function () {
                _this.imageSrc = reader_1.result;
            };
            this.avatar.setValue(file.name);
        }
    };
    TestComponent.prototype.onSubmit = function (files) {
        var _this = this;
        var formData = new FormData();
        formData.append('avatar', files[0]);
        this.loading = true;
        console.log(formData.get('avatar'));
        this.http.post(this.apiUrl + "/upload", formData).subscribe(function (res) {
            _this.result = res;
            _this.loading = false;
            _this.avatar.setValue(null);
        });
    };
    Object.defineProperty(TestComponent.prototype, "avatar", {
        get: function () {
            return this.form.get('avatar');
        },
        enumerable: true,
        configurable: true
    });
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/components/write/write.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/write/write.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/write/write.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/write/write.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>글쓰기</h4><hr/>\r\n      <mat-form-field style=\"width: 98%;\">\r\n        <input matInput placeholder=\"제목\" type=\"text\" name=\"title\" [(ngModel)]=\"title\">\r\n      </mat-form-field>\r\n      <form (click)=\"onWritePost()\">\r\n        <div [froalaEditor] [(ngModel)]=\"content\"></div><br/>\r\n        <button mat-raised-button type=\"submit\" style=\"float: right;\">작성</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/write/write.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/write/write.component.ts ***!
  \*****************************************************/
/*! exports provided: WriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteComponent", function() { return WriteComponent; });
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

var WriteComponent = /** @class */ (function () {
    function WriteComponent() {
    }
    WriteComponent.prototype.ngOnInit = function () {
    };
    WriteComponent.prototype.onWritePost = function () {
        // writing a post
    };
    WriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-write',
            template: __webpack_require__(/*! ./write.component.html */ "./src/app/components/write/write.component.html"),
            styles: [__webpack_require__(/*! ./write.component.css */ "./src/app/components/write/write.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WriteComponent);
    return WriteComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _func_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./func.service */ "./src/app/services/func.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, funcService) {
        this.http = http;
        this.funcService = funcService;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _func_service__WEBPACK_IMPORTED_MODULE_4__["FuncService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/func.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/func.service.ts ***!
  \******************************************/
/*! exports provided: FuncService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncService", function() { return FuncService; });
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

var FuncService = /** @class */ (function () {
    function FuncService() {
        this.ServerAddress = "http://localhost:3000";
    }
    FuncService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FuncService);
    return FuncService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.userid == undefined || user.email == undefined || user.pw == undefined || user.pwchk == undefined || user.introduction == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateConditions = function (user) {
        // let idvalid = /^[a-z]+[a-z0-9]{6,15}$/g;
        // if ( !idvalid.test(user.userid) ) {
        //   return {
        //     valid: false,
        //     msg: '아이디는 영어, 숫자로 이루어진 6~15 글자여야 합니다'
        //   };
        // }
        // let pwvalid = /^{10,}/;
        // if ( !pwvalid.test(user.pw) ) {
        //   return {
        //     valid: false,
        //     msg: '비밀번호는 10글자 이상이어야 합니다'
        //   }
        // }
        return {
            valid: true
        };
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PJH\1494054\RogueWrite\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map