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

module.exports = "<div class=\"mdl-demo mdl-base\">\r\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-tabs\">\r\n    <!-- <app-navbar></app-navbar> -->\r\n\r\n    <!-- header for large display -->\r\n    <header class=\"mdl-layout__header mdl-layout__header--scroll mdl-color--primary\">\r\n            \r\n      <!-- spacing -->\r\n      <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\r\n      \r\n      <!-- title -->\r\n      <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\">\r\n        <h3 [routerLink]=\"['/']\" style=\"cursor: pointer; font-family: 'Ubuntu', sans-serif;\">{{siteName}}</h3>\r\n        <div class=\"mdl-layout-spacer\"></div>\r\n        <nav class=\"mdl-navigation\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\r\n          <a class=\"mdl-navigation__link\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">LOGIN</a>\r\n          <a class=\"mdl-navigation__link\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/profile']\">PROFILE</a>\r\n          <a class=\"mdl-navigation__link\" *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" href=\"#\">LOGOUT</a>\r\n        </nav>\r\n      </div>\r\n      \r\n      <!-- spacing -->\r\n      <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\r\n\r\n      <!-- nav bar -->\r\n      <nav mat-tab-nav-bar mat-stretch-tabs\r\n        mat-align-tabs=\"center\"\r\n        [color]=\"'primary'\"\r\n        [backgroundColor]=\"'accent'\"\r\n        style=\"border-bottom-color: black;\">\r\n        <a mat-tab-link *ngFor=\"let link of navLinks\"\r\n          (click)=\"activeLink = link.path\"\r\n          [routerLink]=\"[link.path]\"\r\n          [active]=\"activeLink == link.path\">{{link.label}}</a>\r\n      </nav>\r\n\r\n    </header>\r\n\r\n    <!-- header for mobile -->\r\n    <header class=\"mdl-layout__header--scroll mdl-layout--small-screen-only mdl-color--primary\">\r\n      <div class=\"mdl-layout__header-row\">\r\n        <h3 class=\"mdl-navigation__link\" style=\"font-family: 'Ubuntu', sans-serif;\">{{siteName}}</h3>\r\n        <div class=\"mdl-layout-spacer\"></div>\r\n        <nav class=\"mdl-navigation\">\r\n          <a *ngIf=\"!authService.loggedIn()\" class=\"mdl-navigation__link\" [routerLink]=\"['/login']\">LOGIN</a>\r\n          <a *ngIf=\"authService.loggedIn()\" class=\"mdl-navigation__link\" [routerLink]=\"['/profile']\">PROFILE</a>\r\n          <a *ngIf=\"authService.loggedIn()\" class=\"mdl-navigation__link\" (click)=\"onLogoutClick()\" href=\"#\">LOGOUT</a>\r\n        </nav>\r\n      </div>\r\n    </header>\r\n    <div class=\"mdl-layout__drawer mdl-layout--small-screen-only\">\r\n      <span class=\"mdl-layout__title\" style=\"font-family: 'Ubuntu', sans-serif;\">{{siteName}}</span>\r\n      <nav class=\"mdl-navigation\">\r\n        <a class=\"mdl-navigation__link\" *ngFor=\"let link of navLinks\"\r\n          [routerLink]=\"[link.path]\">{{link.label}}</a>\r\n      </nav>\r\n    </div>\r\n\r\n    <ng-flash-message></ng-flash-message>\r\n    <main class=\"mdl-layout__content\">\r\n      <div class=\"mdl-layout__tab-panel is-active\" id=\"overview\">\r\n        <router-outlet></router-outlet>\r\n        <br/><br/>\r\n      </div>\r\n\r\n      <!-- footer -->\r\n      <footer class=\"mdl-mega-footer\">\r\n        <div class=\"mdl-mega-footer--bottom-section\">\r\n          <div class=\"mdl-logo\">\r\n            powered by Project RogueWrite\r\n          </div>\r\n          <ul class=\"mdl-mega-footer--link-list\">\r\n            <li><a target=\"_blank\" href=\"https://getmdl.io/index.html\">MDL</a></li>\r\n            <li><a target=\"_blank\" href=\"https://material.angular.io/\">Angular Material</a></li>\r\n            <li><a target=\"_blank\" href=\"https://github.com/p9595jh/RogueWrite\">Github</a></li>\r\n          </ul>\r\n        </div>\r\n      </footer>\r\n      <!-- footer -->\r\n\r\n    </main>\r\n  </div>\r\n</div>\r\n"

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
        this.siteName = 'ЯogueWrite';
        this.navLinks = [
            { label: 'HOME', path: '/' },
            { label: '자유게시판', path: '/board/free/list' },
            { label: '게임게시판', path: '/game/list' },
            { label: 'FORTH', path: '/register' },
            { label: 'FIFTH', path: '/write/free' }
        ];
        this.activeLink = this.navLinks[0];
    }
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.showFlashMessage({
            messages: ['로그아웃 되었습니다.'],
            type: 'success',
            timeout: 2000
        });
        // this.router.navigate([this.funcService.getPreviousUrl()]);
        this.router.navigate(['/login']);
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
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pipes_safeHtml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/safeHtml */ "./src/pipes/safeHtml.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modify/modify.component */ "./src/app/components/modify/modify.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_write_write_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/write/write.component */ "./src/app/components/write/write.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/no-page/no-page.component */ "./src/app/components/no-page/no-page.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_tool_tool_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/tool/tool.component */ "./src/app/components/tool/tool.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'modify', component: _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_21__["ModifyComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'board/:type/:num', component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_22__["BoardComponent"] },
    { path: 'write/:type', component: _components_write_write_component__WEBPACK_IMPORTED_MODULE_23__["WriteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'test', component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"] },
    { path: 'no-page', component: _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_25__["NoPageComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_26__["AdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'game/:num', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_28__["GameComponent"] },
    { path: 'tool', component: _components_tool_tool_component__WEBPACK_IMPORTED_MODULE_27__["ToolComponent"] /*, canActivate: [AuthGuard]*/ }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_safeHtml__WEBPACK_IMPORTED_MODULE_15__["SafeHtml"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileSelectDirective"],
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_21__["ModifyComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_22__["BoardComponent"],
                _components_write_write_component__WEBPACK_IMPORTED_MODULE_23__["WriteComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"],
                _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_25__["NoPageComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_26__["AdminComponent"],
                _components_tool_tool_component__WEBPACK_IMPORTED_MODULE_27__["ToolComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_28__["GameComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, {
                    useHash: true,
                    onSameUrlNavigation: 'reload'
                }),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__["NgFlashMessagesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaViewModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_9__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ShowOnDirtyErrorStateMatcher"] }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>어드민 게시판</h4>\r\n      <hr/>\r\n      \r\n      <!-- for large display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--large-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">아이디</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">닉네임</th>\r\n            <th>상태</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let val of users | slice:pagingFrom:pagingTo;\">\r\n          <tr *ngIf=\"val?.userid != 'admin'\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <span (click)=\"funcService.openInfoWindow(val?.userid)\" style=\"cursor: pointer;\">{{val.userid}}</span>\r\n            </td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{val.nickname}}</td>\r\n            <td *ngIf=\"val?.clean\">\r\n              <button mat-button color=\"primary\" (click)=\"administrate(val?._id, val?.clean)\">정상</button>\r\n            </td>\r\n            <td *ngIf=\"!val?.clean\">\r\n              <button mat-button color=\"warn\" (click)=\"administrate(val?._id, val?.clean)\">정지</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"users?.length\" [pageSize]=\"pagingSize\" (page)=\"paging($event)\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(funcService, authService, router, flashMessage) {
        var _this = this;
        this.funcService = funcService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.pagingSize = 25;
        this.pagingFrom = 0;
        this.pagingTo = this.pagingSize;
        this.funcService.setTitle('어드민');
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            if (profile.user.userid != 'admin') {
                _this.router.navigate(['/no-page']);
                return false;
            }
            else {
                _this.authService.getAllUsers().subscribe(function (data) {
                    _this.users = data.users;
                });
            }
        });
    };
    AdminComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    AdminComponent.prototype.paging = function (pageEvent) {
        this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
        this.router.navigate(['/admin']);
    };
    AdminComponent.prototype.administrate = function (_id, clean) {
        var _this = this;
        var work = clean ? '정지' : '해제';
        if (confirm(work + '하시겠습니까?')) {
            this.authService.administrateUser(_id, clean).subscribe(function (result) {
                if (result.success) {
                    _this.flashMessage.showFlashMessage({
                        messages: [work + '되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    _this.router.navigate(['/admin']);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: [result.msg],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"]])
    ], AdminComponent);
    return AdminComponent;
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

module.exports = "<!-- element for representing the location of the post to be scrolled -->\r\n<span style=\"display: hidden;\" #postLocation></span>\r\n\r\n<!-- section for a post -->\r\n<section *ngIf=\"num != 'list'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">{{content?.title}}</h4>\r\n\r\n      <span style=\"float: right; text-align: right; font-size: 80%;\">\r\n        <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(content?.userid)\">{{content?.nickname}}</span><br/>{{content?.writedate}}\r\n      </span>\r\n      <hr/>\r\n      <div class=\"posting content\" [innerHtml]=\"content?.content | safe\"></div>\r\n      <br/><br/>\r\n      <div style=\"text-align: center;\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onRecommend()\">\r\n          추천 {{content?.recommend?.length}}\r\n        </button>\r\n      </div>\r\n      <br/><hr/>\r\n\r\n      <!-- ############### table for comments ############### -->\r\n      <table style=\"width: 96%; margin: auto;\">\r\n        <tbody *ngFor=\"let comment of content?.comment\">\r\n          <tr>\r\n            <td style=\"width: 15%;\">\r\n              <img [attr.src]=\"'images/profile/' + comment.userid\" class=\"profileImage\" />\r\n            </td>\r\n            <td>\r\n              <span style=\"font-size: 80%;\">\r\n                <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(comment?.userid)\">{{comment?.nickname}}</span> &nbsp;|&nbsp; \r\n                {{comment?.writedate}}\r\n                <span *ngIf=\"comment?.userid == user?.userid || user?.userid == 'admin'\"> &nbsp;|&nbsp; \r\n                  <span style=\"cursor: pointer;\" (click)=\"onRemoveComment(comment.num)\">삭제</span>\r\n                </span>\r\n              </span>\r\n              <pre class=\"content\" [innerHTML]=\"comment?.comment\"></pre><br/>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n      <!-- ############### table for comments ############### -->\r\n\r\n      <!-- ############### writing area ############### -->\r\n      <form *ngIf=\"authService.loggedIn()\" (submit)=\"onWriteComment()\"><hr *ngIf=\"content?.comment?.length > 0\" />\r\n        <table style=\"width: 96%; margin: auto;\">\r\n          <tr style=\"text-align: center;\">\r\n\r\n            <td rowspan=\"2\" style=\"width: 85%;\">\r\n              <mat-form-field appearance=\"outline\" style=\"width: 100%; height: 100%;\">\r\n                <mat-label>댓글을 작성해주세요.</mat-label>\r\n                <textarea matInput placeholder=\"\" rows=\"3\" name=\"cmtWrite\"\r\n                [formControl]=\"cmtWrite\" [matAutocomplete]=\"auto\"></textarea>\r\n                <mat-autocomplete #auto>\r\n                  <!-- <mat-option *ngFor=\"let ct of filteredOptions | async\" [value]=\"'TO::' + ct?.nickname\" (onclick)=\"setCmtTo(ct)\">\r\n                    {{ct.nickname}} [{{ct.userid}}]\r\n                  </mat-option> -->\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </td>\r\n\r\n            <td style=\"text-align: center; padding-bottom: 3%;\">\r\n              <button mat-raised-button type=\"submit\" style=\"width: 60%;\">작성</button>\r\n            </td>\r\n\r\n          </tr>\r\n        </table>\r\n      </form>\r\n      <!-- ############### writing area ############### -->\r\n\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"aboutPost\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #aboutPost>\r\n    <button mat-menu-item *ngIf=\"content?.userid == user?.userid || user?.userid == 'admin'\" (click)=\"onRemovePost()\">\r\n      <span>삭제</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<!-- section for a board -->\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 *ngIf=\"type == 'free'\">자유게시판</h4>\r\n      <h4 *ngIf=\"type != 'free'\">{{type}} 게시판</h4>\r\n      <hr/>\r\n      \r\n      <!-- for large display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--large-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">날짜</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th>글쓴이</th>\r\n            <th>조회수</th>\r\n            <th>추천</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{extractDate(val.writedate)}}</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a [routerLink]=\"['/board/'+type+'/'+val?._id]\"\r\n                style=\"color: black; text-decoration: none; font-weight: 400;\"\r\n                (click)=\"scrollToPost(postLocation)\">{{val.title}}</a>&nbsp;\r\n              <span *ngIf=\"val.comment.length > 0\" style=\"font-size: 85%; color: grey;\">[{{val.comment.length}}]</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(val?.userid)\">{{val.nickname}}</span>\r\n            </td>\r\n            <td>{{val.hit}}</td>\r\n            <td>{{val.recommend.length}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- for small display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--small-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <tbody *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\"\r\n              [routerLink]=\"['/board/'+type+'/'+val?._id]\" (click)=\"scrollToPost(postLocation)\">\r\n              <div>\r\n                <!-- <a [routerLink]=\"['/board/'+type+'/'+val?._id]\"\r\n                style=\"color: black; text-decoration: none; font-weight: 400;\"\r\n                (click)=\"scrollToPost(postLocation)\">{{val.title}}</a>&nbsp; -->\r\n                {{val.title}}\r\n                <span *ngIf=\"val.comment.length > 0\" style=\"color: grey;\">[{{val.comment.length}}]</span>\r\n              </div>\r\n              <div style=\"font-size: 85%; margin-top: 1%;\">\r\n                <span>{{val.nickname}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>조회 {{val.hit}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>추천 {{val.recommend.length}}</span>\r\n              </div>\r\n            </td>\r\n            <td>{{extractDate(val.writedate)}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"contents?.length\" [pageSize]=\"pagingSize\" (page)=\"paging($event)\">\r\n      </mat-paginator>\r\n\r\n      <div *ngIf=\"authService.loggedIn()\" style=\"float: right;\">\r\n        <a mat-raised-button [routerLink]=\"['/write/'+type]\">글쓰기</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"board\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #board>\r\n    <button mat-menu-item *ngIf=\"authService.loggedIn()\">\r\n      <span>즐겨찾는 게시판 설정</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function BoardComponent(route, funcService, authService, boardService, router, flashMessage) {
        var _this = this;
        this.route = route;
        this.funcService = funcService;
        this.authService = authService;
        this.boardService = boardService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.cmtWrite = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.pagingSize = 25;
        this.pagingFrom = 0;
        this.pagingTo = this.pagingSize;
        this.ct = null;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    BoardComponent.prototype.extractDate = function (date) {
        var writeDate = new Date(date);
        var today = new Date();
        var writeDateDay = writeDate.getDate();
        var todayDate = today.getDate();
        if (writeDateDay != todayDate) {
            return (writeDate.getMonth() + 1) + '/' + writeDateDay;
        }
        else {
            if (writeDate.getFullYear() == today.getFullYear() && writeDate.getMonth() == today.getMonth()) {
                var hour = writeDate.getHours();
                var min = writeDate.getMinutes();
                return (hour >= 10 ? hour : '0' + hour) + ':' + (min >= 10 ? min : '0' + min);
            }
            else {
                return (writeDate.getMonth() + 1) + '/' + writeDateDay;
            }
        }
    };
    BoardComponent.prototype.scrollToPost = function (el) {
        el.scrollIntoView();
    };
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.route.snapshot.paramMap.get('type');
        this.num = this.route.snapshot.paramMap.get('num');
        this.setFilteredOptions();
        this.boardService.takeAllPosts(this.type).subscribe(function (data) {
            _this.contents = data.posts;
            if (_this.num != 'list') {
                _this.boardService.takeOnePost(_this.num).subscribe(function (result) {
                    if (result.fail) {
                        _this.router.navigate(['/no-page']);
                        return false;
                    }
                    _this.content = result.post;
                    _this.funcService.setTitle(_this.content.title + ' :: ' + (_this.type == 'free' ? '자유게시판' : _this.type + ' 게시판'));
                    if (_this.authService.loggedIn()) {
                        _this.authService.getProfile().subscribe(function (profile) {
                            _this.user = profile.user;
                        });
                    }
                });
            }
            else
                _this.funcService.setTitle(_this.type == 'free' ? '자유게시판' : _this.type + ' 게시판');
        });
    };
    BoardComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    BoardComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    BoardComponent.prototype.setFilteredOptions = function () {
        var _this = this;
        this.filteredOptions = this.cmtWrite.valueChanges.pipe(
        // startWith('TO::'),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filter(value); }));
    };
    BoardComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        // [https://material.angular.io/components/autocomplete/overview]
        // return this.options.filter(option => option.toLowerCase().includes(filterValue));
        // let f = [];
        // for (let i=0; i<this.foods.length; i++) {
        //   f[i] = 'TO::' + this.foods[i].viewValue + ' [' + this.foods[i].value + '] ';
        // }
        // return f.filter(option => option.toLowerCase().includes(filterValue));
        // return this.foods;
        return this.content.comment;
    };
    BoardComponent.prototype.setCmtTo = function (ct) {
        this.ct = ct;
    };
    BoardComponent.prototype.onWriteComment = function () {
        var _this = this;
        var formData = {
            comment: this.cmtWrite.value,
            _id: this.num
        };
        this.boardService.writeComment(formData).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/board/' + _this.type + '/' + _this.num]);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['댓글 작성 오류'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    BoardComponent.prototype.onRemovePost = function () {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.boardService.removePost(this.num).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/board/' + _this.type + '/list']);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['삭제 오류'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    BoardComponent.prototype.onRemoveComment = function (cmtNum) {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.boardService.removeComment(this.num, cmtNum).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/board/' + _this.type + '/' + _this.num]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['삭제 오류'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    BoardComponent.prototype.onRecommend = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.showFlashMessage({
                messages: ['로그인 후 이용하실 수 있습니다.'],
                type: 'danger',
                timeout: 3000
            });
        }
        else {
            this.boardService.recommend(this.num).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/board/' + _this.type + '/' + _this.num]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: [result.msg],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    BoardComponent.prototype.paging = function (pageEvent) {
        this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
        this.router.navigate(['/board/' + this.type + '/' + this.num]);
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/components/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_func_service__WEBPACK_IMPORTED_MODULE_3__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_board_service__WEBPACK_IMPORTED_MODULE_5__["BoardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessageService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recommends {\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- element for representing the location of the post to be scrolled -->\r\n<span style=\"display: hidden;\" #postLocation></span>\r\n\r\n<!-- section for a post -->\r\n<section *ngIf=\"num != 'list'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">{{content?.title}}</h4>\r\n\r\n      <span style=\"float: right; text-align: right; font-size: 80%;\">\r\n        <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(content?.userid)\">{{content?.nickname}}</span><br/>{{content?.writedate}}\r\n      </span>\r\n      <hr/>\r\n      <!-- ############### ENGINE WILL BE PLACED HERE ############### -->\r\n      <!-- <div class=\"posting content\" [innerHtml]=\"content?.content | safe\"></div> -->\r\n      <div class=\"posting\">\r\n        <div #stage_content>{{text.content}}</div>\r\n        <table>\r\n          <tbody *ngFor=\"let choice of text.choice\">\r\n            <tr>\r\n              <td>{{choice.choice_num}}</td>\r\n              <td (click)=\"select(choice?.set_param)\">{{choice.content}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div>{{content?.content}}</div>\r\n      <br/><br/>\r\n\r\n      <!-- not logging in -->\r\n      <!-- <div class=\"recommends\" *ngIf=\"!funcService.loggedIn()\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"unloggedIn()\">\r\n          추천 {{content?.recommend}}\r\n        </button>\r\n        <button mat-raised-button color=\"accent\" (click)=\"unloggedIn()\">\r\n          비추천 {{content?.unrecommend}}\r\n        </button>\r\n      </div> -->\r\n\r\n      <!-- normal user -->\r\n      <!-- <div class=\"recommends\" *ngIf=\"funcService.loggedIn() && user?.userid != content?.userid && user?.userid != 'admin'\"> -->\r\n      <div class=\"recommends\" *ngIf=\"user?.userid != content?.userid && user?.userid != 'admin'\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onRecommend(true)\">\r\n          추천 {{content?.recommend}}\r\n        </button>\r\n        <button mat-raised-button color=\"accent\" (click)=\"onRecommend(false)\">\r\n          비추천 {{content?.unrecommend}}\r\n        </button>\r\n      </div>\r\n\r\n      <!-- writer -->\r\n      <div class=\"recommends\" *ngIf=\"funcService.loggedIn() && user?.userid == content?.userid && user?.userid != 'admin'\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onRecommend(true)\">\r\n          추천 {{content?.recommend}}\r\n        </button>\r\n        <button mat-raised-button color=\"accent\" (click)=\"onRecommend(false)\">\r\n          비추천 {{content?.unrecommend}}\r\n        </button>\r\n        <button mat-raised-button\r\n          *ngIf=\"content?.boardRequest == 0 && (content?.recommend - content?.unrecommend) >= 3\"\r\n          (click)=\"requestBoard()\">\r\n          게시판 생성 요청\r\n        </button>\r\n      </div>\r\n\r\n      <!-- admin -->\r\n      <div class=\"recommends\" *ngIf=\"funcService.loggedIn() && user?.userid == 'admin'\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onRecommend(true)\">\r\n          추천 {{content?.recommend}}\r\n        </button>\r\n        <button mat-raised-button color=\"accent\" (click)=\"onRecommend(false)\">\r\n          비추천 {{content?.unrecommend}}\r\n        </button>\r\n        <button mat-raised-button\r\n          *ngIf=\"content?.boardRequest == 1\" (click)=\"acceptBoard()\">\r\n          게시판 생성 요청 수락\r\n        </button>\r\n      </div>\r\n\r\n      <br/><hr/>\r\n\r\n      <!-- ############### table for comments ############### -->\r\n      <table style=\"width: 96%; margin: auto;\">\r\n        <tbody *ngFor=\"let comment of content?.comment\">\r\n          <tr>\r\n            <td style=\"width: 15%;\">\r\n              <img [attr.src]=\"'images/profile/' + comment.userid\" class=\"profileImage\" />\r\n            </td>\r\n            <td>\r\n              <span style=\"font-size: 80%;\">\r\n                <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(comment?.userid)\">{{comment?.nickname}}</span> &nbsp;|&nbsp; \r\n                {{comment?.writedate}}\r\n                <span *ngIf=\"comment?.userid == user?.userid || user?.userid == 'admin'\"> &nbsp;|&nbsp; \r\n                  <span style=\"cursor: pointer;\" (click)=\"onRemoveComment(comment.num)\">삭제</span>\r\n                </span>\r\n              </span>\r\n              <pre class=\"content\" [innerHTML]=\"comment?.comment\"></pre><br/>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n      <!-- ############### table for comments ############### -->\r\n\r\n      <!-- ############### writing area ############### -->\r\n      <form *ngIf=\"authService.loggedIn()\" (submit)=\"onWriteComment()\"><hr *ngIf=\"content?.comment?.length > 0\" />\r\n        <table style=\"width: 96%; margin: auto;\">\r\n          <tr style=\"text-align: center;\">\r\n\r\n            <td rowspan=\"2\" style=\"width: 85%;\">\r\n              <mat-form-field appearance=\"outline\" style=\"width: 100%; height: 100%;\">\r\n                <mat-label>댓글을 작성해주세요.</mat-label>\r\n                <textarea matInput placeholder=\"\" rows=\"3\" name=\"cmtWrite\"\r\n                [formControl]=\"cmtWrite\" [matAutocomplete]=\"auto\"></textarea>\r\n                <mat-autocomplete #auto>\r\n                  <!-- <mat-option *ngFor=\"let ct of filteredOptions | async\" [value]=\"'TO::' + ct?.nickname\" (onclick)=\"setCmtTo(ct)\">\r\n                    {{ct.nickname}} [{{ct.userid}}]\r\n                  </mat-option> -->\r\n                </mat-autocomplete>\r\n              </mat-form-field>\r\n            </td>\r\n\r\n            <td style=\"text-align: center; padding-bottom: 3%;\">\r\n              <button mat-raised-button type=\"submit\" style=\"width: 60%;\">작성</button>\r\n            </td>\r\n\r\n          </tr>\r\n        </table>\r\n      </form>\r\n      <!-- ############### writing area ############### -->\r\n\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"aboutPost\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #aboutPost>\r\n    <button mat-menu-item *ngIf=\"content?.userid == user?.userid || user?.userid == 'admin'\" (click)=\"onRemovePost()\">\r\n      <span>삭제</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<!-- section for a board -->\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>게임게시판</h4>\r\n      <hr/>\r\n      \r\n      <!-- for large display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--large-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">날짜</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th>글쓴이</th>\r\n            <th>조회수</th>\r\n            <th>추천</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{extractDate(val.writedate)}}</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a [routerLink]=\"['/game/'+val?._id]\"\r\n                style=\"color: black; text-decoration: none; font-weight: 400;\"\r\n                (click)=\"scrollToPost(postLocation)\">{{val.title}}</a>&nbsp;\r\n              <span *ngIf=\"val.comment.length > 0\" style=\"font-size: 85%; color: grey;\">[{{val.comment.length}}]</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(val?.userid)\">{{val.nickname}}</span>\r\n            </td>\r\n            <td>{{val.hit}}</td>\r\n            <td>{{val.recommend}} {{val.unrecommend}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- for small display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--small-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <tbody *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\"\r\n              [routerLink]=\"['/board/'+val?._id]\" (click)=\"scrollToPost(postLocation)\">\r\n              <div>\r\n                {{val.title}}\r\n                <span *ngIf=\"val.comment.length > 0\" style=\"color: grey;\">[{{val.comment.length}}]</span>\r\n              </div>\r\n              <div style=\"font-size: 85%; margin-top: 1%;\">\r\n                <span>{{val.nickname}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>조회 {{val.hit}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>추천 {{val.recommend}} {{val.unrecommend}}</span>\r\n              </div>\r\n            </td>\r\n            <td>{{extractDate(val.writedate)}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"contents?.length\" [pageSize]=\"pagingSize\" (page)=\"paging($event)\">\r\n      </mat-paginator>\r\n\r\n      <div *ngIf=\"authService.loggedIn()\" style=\"float: right;\">\r\n        <a mat-raised-button [routerLink]=\"['/tool']\">작성</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"board\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #board>\r\n    <button mat-menu-item *ngIf=\"authService.loggedIn()\">\r\n      <span>즐겨찾는 게시판 설정</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GameComponent = /** @class */ (function () {
    function GameComponent(route, funcService, authService, gameService, router, flashMessage) {
        var _this = this;
        this.route = route;
        this.funcService = funcService;
        this.authService = authService;
        this.gameService = gameService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.cmtWrite = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.data = {
        // game data will be placed here
        };
        this.paramMap = new Map(); // <'parameter_name', {'value: number', 'visible: boolean'}>
        this.stageNum = 0;
        this.text = undefined;
        this.phaseNum = 0;
        this.pagingSize = 25;
        this.pagingFrom = 0;
        this.pagingTo = this.pagingSize;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    GameComponent.prototype.extractDate = function (date) {
        var writeDate = new Date(date);
        var today = new Date();
        var writeDateDay = writeDate.getDate();
        var todayDate = today.getDate();
        if (writeDateDay != todayDate) {
            return (writeDate.getMonth() + 1) + '/' + writeDateDay;
        }
        else {
            if (writeDate.getFullYear() == today.getFullYear() && writeDate.getMonth() == today.getMonth()) {
                var hour = writeDate.getHours();
                var min = writeDate.getMinutes();
                return (hour >= 10 ? hour : '0' + hour) + ':' + (min >= 10 ? min : '0' + min);
            }
            else {
                return (writeDate.getMonth() + 1) + '/' + writeDateDay;
            }
        }
    };
    GameComponent.prototype.scrollToPost = function (el) {
        el.scrollIntoView();
    };
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.num = this.route.snapshot.paramMap.get('num');
        this.gameService.takeAllPosts().subscribe(function (data) {
            _this.contents = data.posts;
            if (_this.num != 'list') {
                _this.gameService.takeOnePost(_this.num).subscribe(function (result) {
                    if (result.fail) {
                        _this.router.navigate(['/no-page']);
                        return false;
                    }
                    _this.content = result.post;
                    _this.funcService.setTitle(_this.content.title + ' :: 게임게시판');
                    if (_this.authService.loggedIn()) {
                        _this.authService.getProfile().subscribe(function (profile) {
                            _this.user = profile.user;
                        });
                    }
                });
            }
            else
                _this.funcService.setTitle('게임 게시판');
        });
    };
    GameComponent.prototype.initialiseInvites = function () {
        // this.ngOnInit();
    };
    GameComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    GameComponent.prototype.gameSet = function () {
        for (var _i = 0, _a = this.data.param; _i < _a.length; _i++) { // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
            var obj = _a[_i];
            this.paramMap.set(obj.param_name, { value: obj.default, visible: obj.visible });
        }
        for (var _b = 0, _c = this.data.stage; _b < _c.length; _b++) {
            var stage = _c[_b];
            if (stage.stage_num == 0) {
                this.text = stage.texts[0];
                break;
            }
        }
    };
    GameComponent.prototype.checkNextStageCondition = function (condition) {
        for (var _i = 0, condition_1 = condition; _i < condition_1.length; _i++) {
            var c = condition_1[_i];
            var value = this.paramMap.get(c.param).value;
            if (!(c.above <= value && value <= c.below))
                return false;
        }
        return true;
    };
    GameComponent.prototype.select = function (condition) {
        this.stageNum++;
        for (var _i = 0, condition_2 = condition; _i < condition_2.length; _i++) {
            var val = condition_2[_i];
            var pv = this.paramMap.get(val.param);
            this.paramMap.delete(val.param);
            pv.value += condition.add;
            this.paramMap.set(val.param, pv);
        }
        if (this.stageNum > this.data.stage.length) {
            // this is the end of the game
            return true;
        }
        for (var _a = 0, _b = this.data.stage; _a < _b.length; _a++) {
            var stage = _b[_a];
            if (stage.stage_num == this.stageNum) {
                for (var _c = 0, _d = stage.texts; _c < _d.length; _c++) {
                    var text = _d[_c];
                    var b = false;
                    for (var _e = 0, _f = text.condition; _e < _f.length; _e++) {
                        var c = _f[_e];
                        if ((b = this.checkNextStageCondition(c))) {
                            this.text = text;
                            // refresh page without using 'ngOnInit'
                            return true;
                        }
                    }
                    if (!b) {
                        // in this part, there is no condition to be fit to param
                        return false;
                    }
                }
            }
        }
    };
    GameComponent.prototype.onRemovePost = function () {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.gameService.removePost(this.num).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/game/list']);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['삭제 오류'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    GameComponent.prototype.onRecommend = function (isRecommend) {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.showFlashMessage({
                messages: ['로그인 후 이용하실 수 있습니다.'],
                type: 'danger',
                timeout: 3000
            });
        }
        else {
            this.gameService.recommend(this.num, isRecommend).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/game/' + _this.num]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: [result.msg],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    GameComponent.prototype.paging = function (pageEvent) {
        this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
        this.router.navigate(['/game/' + this.num]);
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .demo-card-wide .mdl-card {\r\n    width: 512px;\r\n} */\r\n.demo-card-wide > .mdl-card__title {\r\n    color: #fff;\r\n    height: 176px;\r\n    background: url('welcome_card.jpg') center / cover;\r\n}\r\n.demo-card-wide > .mdl-card__menu {\r\n    color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"user?.userid == 'admin'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"demo-card-wide mdl-card\" style=\"width: 100%;\">\r\n      <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">Welcome, Admin</h2>\r\n      </div>\r\n      <div class=\"mdl-card__supporting-text\">\r\n        반갑습니다, 어드민님\r\n      </div>\r\n      <div class=\"mdl-card__actions mdl-card--border\">\r\n        <!-- <a mat-button color=\"primary\" [routerLink]=\"['/admin']\"> -->\r\n        <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" [routerLink]=\"['/admin']\">\r\n          어드민 페이지\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>사이트 개요</h4><hr/>\r\n      간략한 설명 <br/>\r\n      이 사이트는 이러이러한 것을 하는 것이다 라던가 <br/>\r\n      아님 뭐 이미지를 넣던가 그런거 <br/>\r\n      <a [routerLink]=\"['/test']\">testing</a><br/>\r\n      <div>{{testSentence}}</div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>자유게시판</h4><hr/>\r\n      <ul>\r\n        <li>게시글1</li>\r\n        <li>게시글2</li>\r\n        <li>게시글3</li>\r\n        <li>게시글4</li>\r\n        <li>게시글5</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"freeBoard\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #freeBoard>\r\n    <button mat-menu-item>\r\n      <span>Redial</span>\r\n    </button>\r\n    <button mat-menu-item disabled>\r\n      <span>Check voicemail</span>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <span>Disable alerts</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>다른게시판</h4><hr/>\r\n      <ul>\r\n        <li>게시글1</li>\r\n        <li>게시글2</li>\r\n        <li>게시글3</li>\r\n        <li>게시글4</li>\r\n        <li>게시글5</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"btn2\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n  <ul class=\"mdl-menu mdl-js-menu mdl-menu--bottom-right\" for=\"btn2\">\r\n    <li class=\"mdl-menu__item\" disabled>자주 가는 게시판으로 설정</li>\r\n  </ul>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>글쓰기 폼 테스트</h4><hr/>\r\n      <div [froalaEditor]></div>\r\n    </div>\r\n  </div>\r\n  <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"btn2\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n  <ul class=\"mdl-menu mdl-js-menu mdl-menu--bottom-right\" for=\"btn2\">\r\n    <li class=\"mdl-menu__item\" disabled>자주 가는 게시판으로 설정</li>\r\n  </ul>\r\n</section>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function HomeComponent(funcService, authService) {
        this.funcService = funcService;
        this.authService = authService;
        this.user = undefined;
        this.testSentence = '<i>Hello</i>';
        this.funcService.setTitle('HOME');
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
            });
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_1__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>로그인</h4><hr/>\r\n      \r\n      <br/><br/>\r\n\r\n      <!-- login form for large display -->\r\n      <form class=\"mdl-layout--large-screen-only\" (submit)=\"onLoginSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/><br/><br/>\r\n          <button mat-raised-button type=\"submit\" class=\"largeInputEle\" color=\"primary\">로그인</button>\r\n          <br/><br/><br/><br/><br/><hr/>\r\n          <a [routerLink]=\"['../register']\" style=\"color: black; text-decoration: none;\">회원가입</a>\r\n          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\r\n          <a href=\"#\" style=\"color: black; text-decoration: none;\">아이디/비밀번호 찾기</a>\r\n        </div>\r\n      </form>\r\n\r\n      <!-- login form for small display -->\r\n      <form class=\"mdl-layout--small-screen-only\" (submit)=\"onLoginSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/><br/>\r\n          <button mat-raised-button type=\"submit\" class=\"smallInputEle\" color=\"primary\">로그인</button>\r\n          <br/><br/><br/><br/><br/><hr/>\r\n          <a [routerLink]=\"['../register']\" style=\"color: black; text-decoration: none;\">회원가입</a>\r\n          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\r\n          <a href=\"#\" style=\"color: black; text-decoration: none;\">아이디/비밀번호 찾기</a>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n<br/><br/>\r\n"

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
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
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
    function LoginComponent(authService, router, flashMessage, funcService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.funcService = funcService;
        this.funcService.setTitle('로그인');
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
        if (this.userid == '' || this.pw == '' || this.userid == undefined || this.pw == undefined) {
            this.flashMessage.showFlashMessage({
                messages: ['필드가 비어있습니다.'],
                type: 'danger',
                timeout: 3000
            });
            return false;
        }
        else {
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.router.navigate([_this.funcService.getPreviousUrl()]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: [data.msg],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"],
            _services_func_service__WEBPACK_IMPORTED_MODULE_4__["FuncService"]])
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

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>회원정보수정</h4><hr/><br/><br/>\r\n\r\n      <!-- registration form for large display -->\r\n      <form class=\"mdl-layout--large-screen-only\" (submit)=\"onModifyUser()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" [value]=\"user?.userid\" disabled>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"기존 비밀번호 (필수)\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"새 비밀번호\" type=\"password\" name=\"newpw\" [(ngModel)]=\"newpw\">\r\n            <mat-hint><strong>비밀번호 미변경 시 공백 유지</strong></mat-hint>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"닉네임\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"이메일\" type=\"text\" [value]=\"user?.email\" disabled>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"한 줄 소개\" type=\"text\" name=\"introduction\" [(ngModel)]=\"introduction\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" class=\"largeInputEle\" color=\"primary\">회원가입</button>\r\n          <br/><br/><br/><hr/>\r\n          회원코드 : [ {{user?._id}} ]\r\n        </div>\r\n      </form>\r\n\r\n      <!-- registration form for small display -->\r\n      <form class=\"mdl-layout--small-screen-only\" (submit)=\"onModifyUser()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" [value]=\"user?.userid\" disabled>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"기존 비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"새 비밀번호\" type=\"password\" name=\"newpw\" [(ngModel)]=\"newpw\">\r\n            <mat-hint><strong>비밀번호 미변경 시 공백 유지</strong></mat-hint>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"닉네임\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"이메일\" type=\"text\" name=\"email\" [value]=\"user?.email\" disabled>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"한 줄 소개\" type=\"text\" name=\"introduction\" [(ngModel)]=\"introduction\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" class=\"smallInputEle\" color=\"primary\">회원가입</button>\r\n          <br/><br/><br/><hr/>\r\n          회원코드 : [ {{user?._id}} ]\r\n        </div>\r\n      </form>\r\n      <button mat-raised-button (click)=\"addProfileImage(user?.userid)\" style=\"float: right;\">프로필 이미지 변경</button>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ModifyComponent(authService, funcService, validateService, flashMessage, router) {
        this.authService = authService;
        this.funcService = funcService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.funcService.setTitle('회원정보수정');
    }
    ModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.nickname = _this.user.nickname;
            _this.introduction = _this.user.introduction;
        });
    };
    ModifyComponent.prototype.onModifyUser = function () {
        var _this = this;
        if (!this.validateService.validateModify({ pw: this.pw, nickname: this.nickname, introduction: this.introduction })) {
            this.flashMessage.showFlashMessage({
                messages: ['필드가 비어있습니다.'],
                type: 'danger',
                timeout: 3000
            });
            return false;
        }
        var conditions = this.validateService
            .validateConditions({ userid: this.user.userid, pw: (this.newpw == undefined || this.newpw == '' ? this.pw : this.newpw), nickname: this.nickname });
        if (!conditions.valid) {
            this.flashMessage.showFlashMessage({ messages: [conditions.msg], type: 'danger', timeout: 3000 });
            return false;
        }
        this.authService.authenticateUser({ userid: this.user.userid, pw: this.pw }).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['비밀번호가 잘못되었습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                var formData = {
                    nickname: _this.nickname,
                    pw: (_this.newpw == undefined || _this.newpw == '' ? '' : _this.newpw),
                    introduction: _this.introduction
                };
                _this.authService.modifyUser(formData).subscribe(function (result) {
                    if (result.success) {
                        _this.flashMessage.showFlashMessage({
                            messages: ['회원정보가 변경되었습니다.'],
                            type: 'success',
                            timeout: 2000
                        });
                        _this.router.navigate(['/']);
                    }
                    else {
                        _this.flashMessage.showFlashMessage({
                            messages: [result.msg],
                            type: 'danger',
                            timeout: 3000
                        });
                    }
                });
            }
        });
    };
    ModifyComponent.prototype.addProfileImage = function (userid) {
        this.funcService.openWindowWithAuth(this.funcService.ServerAddress + '/modals/profileImage?userid=' + userid, userid);
    };
    ModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify',
            template: __webpack_require__(/*! ./modify.component.html */ "./src/app/components/modify/modify.component.html"),
            styles: [__webpack_require__(/*! ./modify.component.css */ "./src/app/components/modify/modify.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ModifyComponent);
    return ModifyComponent;
}());



/***/ }),

/***/ "./src/app/components/no-page/no-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/no-page/no-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/no-page/no-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/no-page/no-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"num != 'list'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\n    <div class=\"mdl-card__supporting-text\">\n      <h4 style=\"display: inline;\">404 ERROR</h4>\n\n      <hr/>\n      <div class=\"posting\">\n        <img src=\"images/404.jpg\" style=\"width: 100%;\"><br/><br/>\n        페이지가 존재하지 않습니다.<br/><br/>\n        <a mat-raised-button color=\"primary\" [routerLink]=\"[this.funcService.getPreviousUrl()]\">이전 페이지로 돌아가기</a><br/><br/>\n      </div>\n      <br/><br/>\n\n    </div>\n  </div>\n</section>\n\n<section></section>\n"

/***/ }),

/***/ "./src/app/components/no-page/no-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/no-page/no-page.component.ts ***!
  \*********************************************************/
/*! exports provided: NoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageComponent", function() { return NoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoPageComponent = /** @class */ (function () {
    function NoPageComponent(funcService) {
        this.funcService = funcService;
        this.funcService.setTitle('404');
    }
    NoPageComponent.prototype.ngOnInit = function () {
    };
    NoPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-page',
            template: __webpack_require__(/*! ./no-page.component.html */ "./src/app/components/no-page/no-page.component.html"),
            styles: [__webpack_require__(/*! ./no-page.component.css */ "./src/app/components/no-page/no-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_1__["FuncService"]])
    ], NoPageComponent);
    return NoPageComponent;
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

module.exports = "<section *ngIf=\"user\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">PROFILE &nbsp;-&nbsp; <span (click)=\"funcService.openInfoWindow(user.userid)\" style=\"cursor: pointer;\">{{user.userid}}</span></h4>\r\n      <span style=\"float: right\"><img [attr.src]=\"'images/profile/' + user.userid\" class=\"profileImage\"></span>\r\n      <hr/><br/><br/>\r\n      \r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 80%;\">\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">아이디</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.userid}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">닉네임</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.nickname}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">이메일</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.email}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">한 줄 소개</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.introduction}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">가입일</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.registerdate}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <br/><br/>\r\n\r\n      <a mat-raised-button [routerLink]=\"['/modify']\" style=\"float: right;\">회원정보수정</a>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var src_app_services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/func.service */ "./src/app/services/func.service.ts");
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
    function ProfileComponent(authService, funcService) {
        this.authService = authService;
        this.funcService = funcService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.funcService.setTitle(profile.user.nickname + ' :: PROFILE');
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
            src_app_services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"]])
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

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>회원가입</h4><hr/><br/><br/>\r\n\r\n      <!-- registration form for large display -->\r\n      <form class=\"mdl-layout--large-screen-only\" (submit)=\"onRegisterSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"비밀번호 확인\" type=\"password\" name=\"pwchk\" [(ngModel)]=\"pwchk\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"닉네임\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"이메일\" type=\"text\" name=\"email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('email')\">\r\n              이메일을 입력해주세요.\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"largeInputEle\">\r\n            <input matInput placeholder=\"한 줄 소개\" type=\"text\" name=\"introduction\" [(ngModel)]=\"introduction\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" class=\"largeInputEle\" color=\"primary\">회원가입</button>\r\n          <br/><br/><br/><hr/>\r\n          <!-- 여기에다가 뭔가 알려둘 사항 같은 걸 써두면 됨 -->\r\n        </div>\r\n      </form>\r\n\r\n      <!-- registration form for small display -->\r\n      <form class=\"mdl-layout--small-screen-only\" (submit)=\"onRegisterSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"비밀번호 확인\" type=\"password\" name=\"pwchk\" [(ngModel)]=\"pwchk\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"닉네임\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"이메일\" type=\"text\" name=\"email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('email')\">\r\n              이메일을 입력해주세요.\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"smallInputEle\">\r\n            <input matInput placeholder=\"한 줄 소개\" type=\"text\" name=\"introduction\" [(ngModel)]=\"introduction\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" class=\"smallInputEle\" color=\"primary\">회원가입</button>\r\n          <br/><br/><br/><hr/>\r\n          <!-- 여기에다가 뭔가 알려둘 사항 같은 걸 써두면 됨 -->\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var src_app_services_func_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/func.service */ "./src/app/services/func.service.ts");
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
    function RegisterComponent(validateService, flashMessage, authService, router, funcService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.funcService = funcService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email,
        ]);
        this.funcService.setTitle('회원가입');
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            userid: this.userid,
            pw: this.pw,
            pwchk: this.pwchk,
            nickname: this.nickname,
            email: this.emailFormControl.value,
            introduction: this.introduction
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.showFlashMessage({ messages: ['빈 항목이 있습니다'], type: 'danger', timeout: 3000 });
            return false;
        }
        // Password check
        if (this.pw != this.pwchk) {
            this.flashMessage.showFlashMessage({ messages: ['비밀번호가 일치하지 않습니다'], type: 'danger', timeout: 3000 });
            return false;
        }
        // Check with conditions
        var conditions = this.validateService.validateConditions(user);
        if (!conditions.valid) {
            this.flashMessage.showFlashMessage({ messages: [conditions.msg], type: 'danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.showFlashMessage({ messages: ['이메일 형식이 맞지 않습니다'], type: 'danger', timeout: 3000 });
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
                // this.router.navigate(['/register']);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_func_service__WEBPACK_IMPORTED_MODULE_6__["FuncService"]])
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

module.exports = "<!-- section for a post -->\r\n<section *ngIf=\"num != 'list'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">TITLE</h4><hr/><br/>\r\n\r\n      <!-- <iframe [src]=\"url\" style=\"width: 100%; height: 600px;\"></iframe> -->\r\n      <iframe src=\"{{url}}\" style=\"width: 100%; height: 600px;\"></iframe>\r\n      <!-- <div [innerHTML]=\"tag | youtube\"></div> -->\r\n\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"aboutPost\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #aboutPost>\r\n    <button mat-menu-item>\r\n      <span>안녕</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
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
    function TestComponent(funcService) {
        this.funcService = funcService;
        this.url = 'https://www.youtube.com/embed/9OTkhsJUK0U';
        this.tag = '<iframe src="' + this.url + '" style="width: 100%; height: 600px;"></iframe>';
        this.funcService.setTitle('TEST!!!!');
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.get = function () {
        return this.url;
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_1__["FuncService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/components/tool/tool.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/tool/tool.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tool/tool.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/tool/tool.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"iframe | safe\"></div>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      \r\n      <form (submit)=\"onWriteGame()\">\r\n        <table style=\"width: 96%; margin: auto;\">\r\n          <tr style=\"text-align: center;\">\r\n\r\n            <td rowspan=\"2\" style=\"width: 85%;\">\r\n              <mat-form-field appearance=\"outline\" style=\"width: 100%; height: 100%;\">\r\n                <mat-label>주석</mat-label>\r\n                <textarea matInput placeholder=\"\" rows=\"3\"\r\n                  name=\"content\" [(ngModel)]=\"content\"></textarea>\r\n              </mat-form-field>\r\n            </td>\r\n\r\n            <td style=\"text-align: center; padding-bottom: 3%;\">\r\n              <button mat-raised-button type=\"submit\" style=\"width: 60%;\">작성</button>\r\n            </td>\r\n\r\n          </tr>\r\n        </table>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/tool/tool.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tool/tool.component.ts ***!
  \***************************************************/
/*! exports provided: ToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolComponent", function() { return ToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolComponent = /** @class */ (function () {
    function ToolComponent(funcService, authService, gameService) {
        var _this = this;
        this.funcService = funcService;
        this.authService = authService;
        this.gameService = gameService;
        this.options = {
            placeholderText: '',
            height: 500,
            imageDefaultAlign: 'left',
            imageDefaultWidth: 0,
            charCounterCount: true,
            imageUploadParam: 'image',
            imageUploadURL: '/games/images',
            imageUploadMethod: 'POST',
            imageMaxSize: 5 * 1024 * 1024,
            imageAllowTypes: ['jpeg', 'jpg', 'png', 'gif', 'webp'],
        };
        this.url = this.funcService.ServerAddress + '/games/tool';
        this.iframe = '<iframe src="' + this.url + '" style="width: 100%; height: 700px;"></iframe>';
        this.funcService.setTitle('게임 만들기');
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
    }
    ToolComponent.prototype.ngOnInit = function () {
    };
    ToolComponent.prototype.onWriteGame = function () {
        this.gameService.writeGame(this.content).subscribe(function (data) {
            // handle
        });
    };
    ToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tool',
            template: __webpack_require__(/*! ./tool.component.html */ "./src/app/components/tool/tool.component.html"),
            styles: [__webpack_require__(/*! ./tool.component.css */ "./src/app/components/tool/tool.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_1__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], ToolComponent);
    return ToolComponent;
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

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>글쓰기</h4><hr/>\r\n      <div style=\"width: 98%; margin: auto;\">\r\n        <form (submit)=\"onWritePost()\">\r\n          <mat-form-field style=\"width: 100%;\">\r\n            <input matInput placeholder=\"제목\" type=\"text\" name=\"title\" [(ngModel)]=\"title\">\r\n          </mat-form-field>\r\n          <textarea [froalaEditor]=\"options\" [(ngModel)]=\"content\" name=\"content\"></textarea>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" style=\"float: right;\">작성</button>\r\n        </form><br/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
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
    function WriteComponent(funcService, route, flashMessage, router, boardService) {
        this.funcService = funcService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.router = router;
        this.boardService = boardService;
        this.options = {
            placeholderText: '',
            height: 500,
            imageDefaultAlign: 'left',
            imageDefaultWidth: 0,
            charCounterCount: true,
            imageUploadParam: 'image',
            imageUploadURL: '/boards/images',
            imageUploadMethod: 'POST',
            imageMaxSize: 5 * 1024 * 1024,
            imageAllowTypes: ['jpeg', 'jpg', 'png', 'gif', 'webp'],
            toolbarButtonsXS: [
                'insertImage', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'
            ]
        };
        this.type = this.route.snapshot.paramMap.get('type');
        this.funcService.setTitle('글 작성');
    }
    WriteComponent.prototype.ngOnInit = function () {
    };
    WriteComponent.prototype.onWritePost = function () {
        var _this = this;
        if (this.title == '' || this.title == undefined) {
            this.flashMessage.showFlashMessage({
                messages: ['제목이 비어있습니다.'],
                type: 'danger',
                timeout: 3000
            });
            return false;
        }
        else if (this.content == '' || this.content == undefined) {
            this.flashMessage.showFlashMessage({
                messages: ['내용이 비어있습니다.'],
                type: 'danger',
                timeout: 3000
            });
            return false;
        }
        else {
            var formData = {
                type: this.type,
                title: this.title,
                content: this.content
            };
            this.boardService.writePost(formData).subscribe(function (data) {
                if (data.success) {
                    _this.router.navigate(['/board/' + _this.type + '/' + data.num]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['글 작성 실패'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    WriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-write',
            template: __webpack_require__(/*! ./write.component.html */ "./src/app/components/write/write.component.html"),
            styles: [__webpack_require__(/*! ./write.component.css */ "./src/app/components/write/write.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"]])
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
    AuthService.prototype.modifyUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/users/modify', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.administrateUser = function (_id, clean) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/users/admin', { _id: _id, clean: clean }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAllUsers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/users/getAllUsers', {}, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
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

/***/ "./src/app/services/board.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/board.service.ts ***!
  \*******************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _func_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoardService = /** @class */ (function () {
    function BoardService(http, funcService, authService) {
        this.http = http;
        this.funcService = funcService;
        this.authService = authService;
    }
    BoardService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    BoardService.prototype.takeOnePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var loggedIn = this.authService.loggedIn() ? 'yes' : 'no';
        return this.http.get(this.funcService.ServerAddress + '/boards/takeOnePost?num=' + num + '&loggedIn=' + loggedIn, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.takeAllPosts = function (type) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/boards/takeAllPosts?type=' + type, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.writePost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/write', post, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.writeComment = function (cmt) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/writeComment', cmt, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.removePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/removePost', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.removeComment = function (postNum, cmtNum) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/removeComment', { postNum: postNum, cmtNum: cmtNum }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.recommend = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/recommend', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _func_service__WEBPACK_IMPORTED_MODULE_3__["FuncService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], BoardService);
    return BoardService;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function _window() {
    return window;
}
var FuncService = /** @class */ (function () {
    function FuncService(titleService, router, http) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        this.http = http;
        this.ServerAddress = "http://localhost:3000";
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.currentUrl = this.router.url;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
        });
    }
    FuncService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    FuncService.prototype.setTitle = function (title) {
        this.titleService.setTitle(title + ' :: RWrite');
    };
    FuncService.prototype.getPreviousUrl = function () {
        return this.previousUrl;
    };
    FuncService.prototype.openWindow = function (url) {
        var option = 'width=500, height=600, left=300, top=100, scrollbars=yes, toolbars=no, location=no';
        _window().open(url, '', option);
    };
    FuncService.prototype.openInfoWindow = function (userid) {
        this.openWindow(this.ServerAddress + '/modals/info?userid=' + userid);
    };
    FuncService.prototype.openWindowWithAuth = function (url, userid) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        this.http.post(this.ServerAddress + '/modals/getCode', { userid: userid }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            var code = data.code;
            _this.openWindow(url + '&c=' + code);
        });
    };
    FuncService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], FuncService);
    return FuncService;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _func_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameService = /** @class */ (function () {
    function GameService(http, funcService, authService) {
        this.http = http;
        this.funcService = funcService;
        this.authService = authService;
    }
    GameService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    GameService.prototype.writeGame = function (content) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/write', { content: content }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeOnePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var loggedIn = this.authService.loggedIn() ? 'yes' : 'no';
        return this.http.get(this.funcService.ServerAddress + '/games/takeOnePost?num=' + num + '&loggedIn=' + loggedIn, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeAllPosts = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/games/takeAllPosts', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.removePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/removePost', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.removeComment = function (postNum, cmtNum) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/removeComment', { postNum: postNum, cmtNum: cmtNum }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.recommend = function (num, isRecommend) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/recommend', { num: num, isRecommend: isRecommend }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _func_service__WEBPACK_IMPORTED_MODULE_3__["FuncService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], GameService);
    return GameService;
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
        //     msg: '아이디는 영어, 숫자로 이루어진 6~15 글자여야 합니다.'
        //   };
        // }
        // let pwvalid = /^{10,}/;
        // if ( !pwvalid.test(user.pw) ) {
        //   return {
        //     valid: false,
        //     msg: '비밀번호는 10글자 이상이어야 합니다.'
        //   }
        // }
        // let nickValid = /^[a-Zㄱ-힣0-9]{4,8}$/;
        // if ( !nickValid.test(user.nickname) ) {
        //   return {
        //     valid: false,
        //     msg: '닉네임은 한글, 알파벳, 숫자로 이루어진 4~8 글자여야 합니다.'
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
    ValidateService.prototype.validateModify = function (user) {
        return !(user.pw == undefined || user.pw == '' ||
            user.nickname == undefined || user.nickname == '' ||
            user.introduction == undefined || user.introduction == '');
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

/***/ "./src/pipes/safeHtml.ts":
/*!*******************************!*\
  !*** ./src/pipes/safeHtml.ts ***!
  \*******************************/
/*! exports provided: SafeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtml", function() { return SafeHtml; });
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


var SafeHtml = /** @class */ (function () {
    function SafeHtml(dom) {
        this.dom = dom;
    }
    SafeHtml.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustHtml(value);
    };
    SafeHtml = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtml);
    return SafeHtml;
}());



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