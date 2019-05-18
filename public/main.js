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

module.exports = ".nav-link {\r\n    color: black;\r\n    display: block;\r\n    width: 100%;\r\n    padding: 20px;\r\n    padding-left: 12%;\r\n}\r\n\r\n.nav-link:hover {\r\n    background-color: rgb(202, 202, 202);\r\n}\r\n\r\n.header-sm-icon {\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMik7XHJcbn1cclxuXHJcbi5oZWFkZXItc20taWNvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-flash-message class=\"mdl-layout--large-screen-only\"></ng-flash-message>\r\n\r\n<div class=\"mdl-demo mdl-base\">\r\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-tabs\">\r\n\r\n    <!-- header for large display -->\r\n    <mat-toolbar class=\"mdl-layout--large-screen-only mdl-shadow--2dp mdl-layout__header\" style=\"background-color: white;\">\r\n      <mat-toolbar-row>\r\n        <img src=\"/images/title.png\" [routerLink]=\"['/']\" style=\"cursor: pointer; width: 210px; height: auto; padding-left: 10px;\" />\r\n        <span style=\"flex: 1 1 auto;\"></span>\r\n        <a mat-button *ngFor=\"let link of navLinks\" color=\"primary\"\r\n          [routerLink]=\"[link.path]\">{{link.label}}</a>\r\n        <a mat-button *ngFor=\"let link of moreLinks\"\r\n          [routerLink]=\"[link.path]\">{{link.label}}</a>\r\n        <a mat-icon-button *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">\r\n          <mat-icon>lock</mat-icon>\r\n        </a>\r\n        <a mat-icon-button *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/profile']\">\r\n          <mat-icon>account_circle</mat-icon>\r\n        </a>\r\n        <a mat-icon-button *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" href=\"#\">\r\n          <mat-icon>lock_open</mat-icon>\r\n        </a>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <!-- header for mobile -->\r\n    <header class=\"mdl-layout__header--scroll mdl-layout--small-screen-only\">\r\n      <nav class=\"navbar navbar-white fixed-top bg-white mdl-shadow--2dp\">\r\n        <div>\r\n          <button mat-icon-button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <mat-icon class=\"header-sm-icon\">reorder</mat-icon>\r\n          </button>\r\n          <img src=\"/images/title.png\" style=\"height: 20px; width: auto;\" [routerLink]=\"['/']\" />\r\n        </div>\r\n        <table id=\"header-sm-table\">\r\n          <tr>\r\n            <td *ngIf=\"!authService.loggedIn()\">\r\n              <a mat-icon-button [routerLink]=\"['/login']\">\r\n                <mat-icon class=\"header-sm-icon\">lock</mat-icon>\r\n              </a>\r\n            </td>\r\n            <td *ngIf=\"authService.loggedIn()\">\r\n              <a mat-icon-button [routerLink]=\"['/profile']\">\r\n                <mat-icon class=\"header-sm-icon\">account_circle</mat-icon>\r\n              </a>\r\n            </td>\r\n            <td *ngIf=\"authService.loggedIn()\">\r\n              <a mat-icon-button (click)=\"onLogoutClick()\" href=\"#\">\r\n                <mat-icon class=\"header-sm-icon\">lock_open</mat-icon>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\" *ngFor=\"let link of navLinks\"\r\n              data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\r\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <a class=\"nav-link header-sm-link\" [routerLink]=\"[link.path]\">{{link.label}}</a>\r\n            </li>\r\n            <li class=\"nav-item active\" *ngFor=\"let link of moreLinks\"\r\n              data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\r\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <a class=\"nav-link header-sm-link\" [routerLink]=\"[link.path]\">{{link.label}}</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n      <ng-flash-message class=\"mdl-layout--small-screen-only\"></ng-flash-message>\r\n      <br/><br/>\r\n    </header>\r\n\r\n    <main class=\"mdl-layout__content\">\r\n      <!-- <div class=\"mdl-layout__tab-panel is-active\" id=\"overview\"> -->\r\n      <div class=\"is-active\" id=\"overview\">\r\n        <div *ngIf=\"router.url != '/'\"><br/><br/></div>\r\n        <router-outlet></router-outlet>\r\n        <br/><br/>\r\n      </div>\r\n\r\n      <!-- footer -->\r\n      <footer class=\"mdl-mega-footer\">\r\n        <div class=\"mdl-mega-footer--bottom-section\">\r\n          <div class=\"mdl-logo\">\r\n            powered by Project RogueWrite\r\n          </div>\r\n          <ul class=\"mdl-mega-footer--link-list\">\r\n            <li><a target=\"_blank\" href=\"https://getmdl.io/index.html\">MDL</a></li>\r\n            <li><a target=\"_blank\" href=\"https://material.angular.io/\">Angular Material</a></li>\r\n            <li><a target=\"_blank\" href=\"https://github.com/p9595jh/RogueWrite\">Github</a></li>\r\n          </ul>\r\n        </div>\r\n      </footer>\r\n      <!-- footer -->\r\n\r\n    </main>\r\n    <div *ngIf=\"router.url.startsWith('/play')\" style=\"background-color: white;\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(authService, funcService, router, flashMessage) {
        this.authService = authService;
        this.funcService = funcService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.siteName = 'ЯogueWrite';
        this.navLinks = [
            { label: '게임게시판', path: '/game/list' },
            { label: '블록게시판', path: '/corvee/list' }
        ];
        this.moreLinks = [
            { label: '자유게시판', path: '/board/free/list' },
            { label: '서브게시판', path: '/sub' },
            { label: '공지사항', path: '/board/notice/list' }
        ];
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
            _services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
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
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_deactivate_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/deactivate.guard */ "./src/app/guards/deactivate.guard.ts");
/* harmony import */ var _pipes_safeHtml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/safeHtml */ "./src/pipes/safeHtml.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modify/modify.component */ "./src/app/components/modify/modify.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_write_write_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/write/write.component */ "./src/app/components/write/write.component.ts");
/* harmony import */ var _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/no-page/no-page.component */ "./src/app/components/no-page/no-page.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_tool_tool_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/tool/tool.component */ "./src/app/components/tool/tool.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_sub_sub_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/sub/sub.component */ "./src/app/components/sub/sub.component.ts");
/* harmony import */ var _components_temp_temp_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/temp/temp.component */ "./src/app/components/temp/temp.component.ts");
/* harmony import */ var _components_corvee_corvee_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/corvee/corvee.component */ "./src/app/components/corvee/corvee.component.ts");
/* harmony import */ var _components_cwrite_cwrite_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/cwrite/cwrite.component */ "./src/app/components/cwrite/cwrite.component.ts");
/* harmony import */ var _components_play_play_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/play/play.component */ "./src/app/components/play/play.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'modify', component: _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_23__["ModifyComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'board/:type/:num', component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["BoardComponent"] },
    { path: 'write/:type', component: _components_write_write_component__WEBPACK_IMPORTED_MODULE_25__["WriteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'test', component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_35__["TestComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'game/:num', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_29__["GameComponent"] },
    { path: 'tool', component: _components_tool_tool_component__WEBPACK_IMPORTED_MODULE_28__["ToolComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'sub', component: _components_sub_sub_component__WEBPACK_IMPORTED_MODULE_30__["SubComponent"] },
    { path: 'temp/:num', component: _components_temp_temp_component__WEBPACK_IMPORTED_MODULE_31__["TempComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'corvee/:num', component: _components_corvee_corvee_component__WEBPACK_IMPORTED_MODULE_32__["CorveeComponent"] },
    { path: 'cwrite', component: _components_cwrite_cwrite_component__WEBPACK_IMPORTED_MODULE_33__["CwriteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'play/:num', component: _components_play_play_component__WEBPACK_IMPORTED_MODULE_34__["PlayComponent"] },
    { path: 'no-page', component: _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_26__["NoPageComponent"] },
    { path: '**', component: _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_26__["NoPageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_safeHtml__WEBPACK_IMPORTED_MODULE_15__["SafeHtml"],
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_23__["ModifyComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["BoardComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["CommentDialog"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["ReplyDialog"],
                _components_write_write_component__WEBPACK_IMPORTED_MODULE_25__["WriteComponent"],
                _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_26__["NoPageComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"],
                _components_tool_tool_component__WEBPACK_IMPORTED_MODULE_28__["ToolComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_29__["GameComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_29__["ScrapDialog"],
                _components_sub_sub_component__WEBPACK_IMPORTED_MODULE_30__["SubComponent"],
                _components_temp_temp_component__WEBPACK_IMPORTED_MODULE_31__["TempComponent"],
                _components_temp_temp_component__WEBPACK_IMPORTED_MODULE_31__["TempDialog"],
                _components_corvee_corvee_component__WEBPACK_IMPORTED_MODULE_32__["CorveeComponent"],
                _components_cwrite_cwrite_component__WEBPACK_IMPORTED_MODULE_33__["CwriteComponent"],
                _components_play_play_component__WEBPACK_IMPORTED_MODULE_34__["PlayComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_35__["TestComponent"]
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
                ngx_editor__WEBPACK_IMPORTED_MODULE_16__["NgxEditorModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(),
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
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_29__["ScrapDialog"],
                _components_temp_temp_component__WEBPACK_IMPORTED_MODULE_31__["TempDialog"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["CommentDialog"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["ReplyDialog"]
            ],
            entryComponents: [
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_29__["ScrapDialog"],
                _components_temp_temp_component__WEBPACK_IMPORTED_MODULE_31__["TempDialog"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["CommentDialog"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_24__["ReplyDialog"]
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_9__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                _guards_deactivate_guard__WEBPACK_IMPORTED_MODULE_14__["DeactivateGuard"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ShowOnDirtyErrorStateMatcher"] }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>회원 관리</h4>\r\n      <hr/>\r\n      \r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">아이디</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">닉네임</th>\r\n            <th>상태</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let val of users | slice:memberPagingFrom:memberPagingTo;\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <span (click)=\"funcService.openInfoWindow(val?.userid)\" class=\"toProfile\">{{val.userid}}</span>\r\n            </td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{val.nickname}}</td>\r\n            <td *ngIf=\"val?.clean\">\r\n              <button mat-button color=\"primary\" (click)=\"administrate(val?._id, val?.clean)\">정상</button>\r\n            </td>\r\n            <td *ngIf=\"!val?.clean\">\r\n              <button mat-button color=\"warn\" (click)=\"administrate(val?._id, val?.clean)\">정지</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"users?.length\" [pageSize]=\"pagingSize\" (page)=\"memberPaging($event)\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>게시판 생성 요청 관리</h4>\r\n      <hr/>\r\n      \r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">요청자</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">요청 게임</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">추천 비율</th>\r\n            <th>처리</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <!-- <tr *ngIf=\"val?.userid != 'admin'\"> -->\r\n          <tr *ngFor=\"let val of games | slice:reqPagingFrom:reqPagingTo;\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <span (click)=\"funcService.openInfoWindow(val?.userid)\" class=\"toProfile\">{{val.nickname}} ({{val.userid}})</span>\r\n            </td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a [routerLink]=\"['/game/' + val?._id]\" target=\"_blank\" style=\"color: black;\">{{val.title}}</a>\r\n            </td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{val.recommend}}/{{val.unrecommend}}</td>\r\n            <td>\r\n              <button mat-button color=\"primary\" [attr.id]=\"'accept-'+val?._id\"\r\n                (click)=\"acceptRequest(val?._id, val?.title, val?.userid, true)\">수락</button>\r\n              <button mat-button color=\"warn\" [attr.id]=\"'reject-'+val?._id\"\r\n                (click)=\"acceptRequest(val?._id, null, null, false)\">거절</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"users?.length\" [pageSize]=\"pagingSize\" (page)=\"reqPaging($event)\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
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
    function AdminComponent(funcService, authService, gameService, router, flashMessage) {
        var _this = this;
        this.funcService = funcService;
        this.authService = authService;
        this.gameService = gameService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.pagingSize = 25;
        this.memberPagingFrom = 0;
        this.memberPagingTo = this.pagingSize;
        this.reqPagingFrom = 0;
        this.reqPagingTo = this.pagingSize;
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
                    _this.gameService.takeRequestedPosts().subscribe(function (result) {
                        _this.games = result.posts;
                    });
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
    AdminComponent.prototype.memberPaging = function (pageEvent) {
        this.memberPagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.memberPagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
        this.router.navigate(['/admin']);
    };
    AdminComponent.prototype.reqPaging = function (pageEvent) {
        this.reqPagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.reqPagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
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
    AdminComponent.prototype.acceptRequest = function (_id, title, userid, accept) {
        var _this = this;
        var work = accept ? '수락' : '거절';
        if (confirm(work + '하시겠습니까?')) {
            if (accept) {
                this.gameService.acceptBoard(_id, title, userid).subscribe(function (result) {
                    if (result.success) {
                        document.getElementById('accept-' + _id).disabled = true;
                        document.getElementById('reject-' + _id).disabled = true;
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
            else {
                this.gameService.rejectBoard(_id).subscribe(function (result) {
                    if (result.success) {
                        document.getElementById('accept-' + _id).disabled = true;
                        document.getElementById('reject-' + _id).disabled = true;
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
            _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"]])
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

module.exports = ".boardTitle {\r\n    color: white;\r\n    display: inline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmRUaXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/board/board.component.dialog.html":
/*!**************************************************************!*\
  !*** ./src/app/components/board/board.component.dialog.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\r\n<div mat-dialog-content>\r\n  <p>댓글을 쓸 상대를 골라주세요.</p>\r\n  <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\r\n    <mat-label>선택</mat-label>\r\n    <mat-select [(ngModel)]=\"data.user\">\r\n      <mat-option *ngFor=\"let comment of data.comment\" [value]=\"comment\">\r\n        {{comment.nickname}} ({{comment.userid}})\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onClose()\">닫기</button>\r\n  <button mat-button [mat-dialog-close]=\"data.user\" cdkFocusInitial>확인</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- element for representing the location of the post to be scrolled -->\r\n<span style=\"display: hidden;\" #postLocation></span>\r\n\r\n<!-- section for a post -->\r\n<section *ngIf=\"num != 'list'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">{{content?.title}}</h4>\r\n\r\n      <span style=\"float: right; text-align: right; font-size: 80%;\">\r\n        <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(content?.userid)\">{{content?.nickname}}</span><br/>{{content?.writedate}}\r\n      </span>\r\n      <hr/>\r\n      <div class=\"posting content\" [innerHtml]=\"content?.content | safe\"></div>\r\n      <br/><br/>\r\n      <div style=\"text-align: center;\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onRecommend()\">\r\n          추천 {{content?.recommend?.length}}\r\n        </button>\r\n      </div>\r\n      <br/><hr/>\r\n\r\n      <!-- ############### table for comments ############### -->\r\n      <table class=\"cmtTable\">\r\n        <tbody *ngFor=\"let comment of content?.comment\">\r\n          <tr>\r\n            <td style=\"width: 90px;\">\r\n              <img [attr.src]=\"'images/profile/' + comment.userid\" class=\"profileImage\" (click)=\"onReplyComment(comment)\" />\r\n            </td>\r\n            <td>\r\n              <span style=\"font-size: 80%;\">\r\n                <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(comment?.userid)\">\r\n                  {{comment?.nickname}}</span> &nbsp;|&nbsp; {{comment?.writedate}}\r\n                <span *ngIf=\"comment?.userid == user?.userid || user?.userid == 'admin'\"> &nbsp;|&nbsp; \r\n                  <span style=\"cursor: pointer;\" (click)=\"onRemoveComment(comment.num)\">삭제</span>\r\n                </span>\r\n              </span>\r\n              <pre class=\"content writerText\" *ngIf=\"comment?.userid == content?.userid\" [innerHTML]=\"comment?.comment | safe\"></pre>\r\n              <pre class=\"content\" *ngIf=\"comment?.userid != content?.userid\" [innerHTML]=\"comment?.comment | safe\"></pre>\r\n              <br/>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"comment?.reply?.length > 0\">\r\n            <td colspan=\"2\">\r\n              <table class=\"rplyTable\">\r\n                <tr *ngFor=\"let reply of comment?.reply\">\r\n                  <td class=\"rply-blank\"></td>\r\n                  <td style=\"width: 90px;\">\r\n                    <img [attr.src]=\"'images/profile/' + reply.userid\" class=\"profileImage\" />\r\n                  </td>\r\n                  <td>\r\n                    <span style=\"font-size: 80%;\">\r\n                      <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(reply?.userid)\">\r\n                        {{reply?.nickname}}</span> &nbsp;|&nbsp; {{reply?.writedate}}\r\n                      <span *ngIf=\"reply?.userid == user?.userid || user?.userid == 'admin'\"> &nbsp;|&nbsp; \r\n                        <span style=\"cursor: pointer;\" (click)=\"onRemoveReply(comment?.num, reply)\">삭제</span>\r\n                      </span>\r\n                    </span>\r\n                    <pre class=\"content writerText\" *ngIf=\"reply?.userid == content?.userid\" [innerHTML]=\"reply?.comment | safe\"></pre>\r\n                    <pre class=\"content\" *ngIf=\"reply?.userid != content?.userid\" [innerHTML]=\"reply?.comment | safe\"></pre>\r\n                    <br/>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n      <!-- ############### table for comments ############### -->\r\n\r\n      <!-- ############### writing area ############### -->\r\n      <form *ngIf=\"authService.loggedIn() && user?.clean\" (submit)=\"onWriteComment(field)\"><hr *ngIf=\"content?.comment?.length > 0\" />\r\n        <table style=\"width: 96%; margin: auto;\">\r\n          <tr style=\"text-align: center;\">\r\n\r\n            <td rowspan=\"2\" style=\"width: 85%;\">\r\n              <mat-form-field appearance=\"outline\" style=\"width: 100%; height: 100%;\">\r\n                <mat-label>댓글을 작성해주세요.</mat-label>\r\n                <textarea matInput rows=\"3\" name=\"cmtWrite\"\r\n                  [formControl]=\"cmtWrite\" #field\r\n                  (input)=\"onTypingComment(field, $event.target.value)\"></textarea>\r\n              </mat-form-field>\r\n            </td>\r\n\r\n            <td style=\"text-align: center; padding-bottom: 3%;\">\r\n              <button mat-raised-button type=\"submit\" style=\"width: 60%;\">작성</button>\r\n            </td>\r\n\r\n          </tr>\r\n        </table>\r\n      </form>\r\n      <!-- ############### writing area ############### -->\r\n\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"aboutPost\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #aboutPost>\r\n    <button mat-menu-item *ngIf=\"content?.userid == user?.userid || user?.userid == 'admin'\" (click)=\"onRemovePost()\">\r\n      <span>삭제</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<!-- section for a board -->\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n\r\n    <div [class]=\"'mdl-card__title bg-svg-' + svg\" style=\"width: 100%; height: 10rem;\">\r\n      <h2 class=\"mdl-card__title-text boardTitle\" *ngIf=\"type == 'free'\">자유게시판&nbsp;</h2>\r\n      <h2 class=\"mdl-card__title-text boardTitle\" *ngIf=\"type == 'notice'\">공지게시판&nbsp;</h2>\r\n      <h2 class=\"mdl-card__title-text boardTitle\" *ngIf=\"type != 'free' && type != 'notice'\">{{sub?.title}} 게시판&nbsp;</h2>\r\n      <h5 class=\"mdl-card__title-text boardTitle\" *ngIf=\"authService.loggedIn() && !isMyBookmark\" style=\"cursor: pointer;\" (click)=\"bookmark()\">☆</h5>\r\n      <h5 class=\"mdl-card__title-text boardTitle\" *ngIf=\"authService.loggedIn() && isMyBookmark\" style=\"cursor: pointer;\" (click)=\"unbookmark()\">★</h5>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n      \r\n      <!-- for large display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--large-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">날짜</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th>글쓴이</th>\r\n            <th>조회수</th>\r\n            <th>추천</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{extractDate(val.writedate)}}</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a [routerLink]=\"['/board/'+type+'/'+val?._id]\"\r\n                style=\"color: black; text-decoration: none; font-weight: 400;\"\r\n                (click)=\"scrollToPost(postLocation)\">{{val.title}}</a>&nbsp;\r\n              <span *ngIf=\"val.comment.length > 0\" style=\"font-size: 85%; color: grey;\">[{{countComments(val.comment)}}]</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(val?.userid)\">{{val.nickname}}</span>\r\n            </td>\r\n            <td>{{val.hit}}</td>\r\n            <td>{{val.recommend.length}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- for small display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--small-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <tbody>\r\n          <tr *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\"\r\n              [routerLink]=\"['/board/'+type+'/'+val?._id]\" (click)=\"scrollToPost(postLocation)\">\r\n              <div>\r\n                {{val.title}}\r\n                <span *ngIf=\"val.comment.length > 0\" style=\"color: grey;\">[{{countComments(val.comment)}}]</span>\r\n              </div>\r\n              <div style=\"font-size: 85%; margin-top: 1%;\">\r\n                <span>{{val.nickname}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>조회 {{val.hit}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>추천 {{val.recommend.length}}</span>\r\n              </div>\r\n            </td>\r\n            <td>{{extractDate(val.writedate)}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"contents?.length\" [pageSize]=\"pagingSize\" (page)=\"paging($event)\"></mat-paginator>\r\n\r\n      <div *ngIf=\"(type != 'notice' && authService.loggedIn() && user?.clean) || (type == 'notice' && user?.userid == 'admin')\" style=\"float: right;\">\r\n        <a mat-raised-button [routerLink]=\"['/write/' + type]\">글쓰기</a>\r\n      </div><br/>\r\n      <div style=\"text-align: center;\">\r\n        <mat-form-field style=\"width: 100px;\">\r\n          <mat-select value=\"title\" (selectionChange)=\"onSearch(searchSelect.value, searchInput.value)\" #searchSelect>\r\n            <mat-option value=\"title\">제목</mat-option>\r\n            <mat-option value=\"nickname\">닉네임</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>&nbsp;&nbsp;\r\n        <mat-form-field appearance=\"outline\" style=\"width: 200px;\">\r\n          <mat-label>검색</mat-label>\r\n          <input matInput (input)=\"onSearch(searchSelect.value, $event.target.value)\" #searchInput>\r\n          <mat-icon matSuffix>search</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"board\" *ngIf=\"type != 'free' && type != 'notice'\">\r\n    <mat-icon class=\"more-icon\">more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #board>\r\n    <button mat-menu-item *ngIf=\"type != 'free' && type != 'notice'\" [routerLink]=\"['/game/' + sub?.gameid]\">\r\n      <span>게임으로 이동</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/board/board.component.reply.html":
/*!*************************************************************!*\
  !*** ./src/app/components/board/board.component.reply.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>답글 입력</h1>\r\n<div mat-dialog-content>\r\n  <pre class=\"content\" [innerHTML]=\"data.comment | safe\"></pre><br/>\r\n  <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\r\n    <mat-label>댓글을 작성해주세요.</mat-label>\r\n    <textarea matInput rows=\"3\" [(ngModel)]=\"data.reply\" #field\r\n      (input)=\"onTypingComment(field, $event.target.value)\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onClose()\">닫기</button>\r\n  <button mat-button [mat-dialog-close]=\"data.reply\" cdkFocusInitial>확인</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent, CommentDialog, ReplyDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDialog", function() { return CommentDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyDialog", function() { return ReplyDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var BoardComponent = /** @class */ (function () {
    function BoardComponent(route, funcService, authService, boardService, router, flashMessage, dialog) {
        var _this = this;
        this.route = route;
        this.funcService = funcService;
        this.authService = authService;
        this.boardService = boardService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
        this.svg = 0;
        this.cmtWrite = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.bk = undefined;
        this.pagingSize = 25;
        this.pagingFrom = 0;
        this.pagingTo = this.pagingSize;
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
        this.svg = this.funcService.getRandomSVGBackground();
        this.type = this.route.snapshot.paramMap.get('type');
        this.num = this.route.snapshot.paramMap.get('num');
        this.boardService.checkBoardExists(this.type).subscribe(function (result) {
            if (result.exist) {
                _this.boardService.getSub(_this.type).subscribe(function (data) {
                    _this.sub = data.sub;
                    _this.boardService.takeAllPosts(_this.type).subscribe(function (data) {
                        _this.contents = data.posts;
                        if (_this.num != 'list') {
                            _this.boardService.takeOnePost(_this.num).subscribe(function (result) {
                                if (result.fail) {
                                    _this.router.navigate(['/no-page']);
                                    return false;
                                }
                                _this.content = result.post;
                                _this.setCommentsArray(_this.content.comment);
                                if (_this.type == 'free') {
                                    _this.funcService.setTitle(_this.content.title + ' :: 자유게시판');
                                }
                                else if (_this.type == 'notice') {
                                    _this.funcService.setTitle(_this.content.title + ' :: 공지게시판');
                                }
                                else {
                                    _this.funcService.setTitle(_this.content.title + ' :: ' + _this.sub.title + ' 게시판');
                                }
                                if (_this.authService.loggedIn()) {
                                    _this.authService.getProfile().subscribe(function (profile) {
                                        _this.user = profile.user;
                                    });
                                }
                            });
                        }
                        else {
                            if (_this.type == 'free') {
                                _this.funcService.setTitle('자유게시판');
                            }
                            else if (_this.type == 'notice') {
                                _this.funcService.setTitle('공지게시판');
                            }
                            else {
                                _this.funcService.setTitle(_this.sub.title + ' 게시판');
                            }
                            if (_this.authService.loggedIn()) {
                                _this.authService.getProfile().subscribe(function (profile) {
                                    _this.user = profile.user;
                                    _this.isMyBookmark = false;
                                    for (var _i = 0, _a = _this.user.bookmark; _i < _a.length; _i++) {
                                        var bookmark = _a[_i];
                                        if (bookmark.url == _this.type) {
                                            _this.isMyBookmark = true;
                                            _this.bk = bookmark;
                                            break;
                                        }
                                    }
                                });
                            }
                        }
                    });
                });
            }
            else {
                _this.router.navigate(['/no-page']);
            }
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
    BoardComponent.prototype.countComments = function (comments) {
        var count = 0;
        for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
            var comment = comments_1[_i];
            if (comment.reply)
                count += comment.reply.length;
            count++;
        }
        return count;
    };
    BoardComponent.prototype.setCommentsArray = function (comments) {
        this.comments = [];
        for (var _i = 0, comments_2 = comments; _i < comments_2.length; _i++) {
            var comment = comments_2[_i];
            if (comment.reply) {
                for (var _a = 0, _b = comment.reply; _a < _b.length; _a++) {
                    var reply = _b[_a];
                    this.pushToCommentsArray(reply);
                }
            }
            this.pushToCommentsArray(comment);
        }
    };
    BoardComponent.prototype.pushToCommentsArray = function (item) {
        for (var _i = 0, _a = this.comments; _i < _a.length; _i++) {
            var exist = _a[_i];
            if (exist.userid == item.userid) {
                return;
            }
        }
        this.comments.push({
            userid: item.userid,
            nickname: item.nickname
        });
    };
    BoardComponent.prototype.onTypingComment = function (field, text) {
        if (this.comments.length == 0)
            return;
        var len = text.length;
        if (len < 2)
            return;
        if (text.substring(len - 2) == '[[') {
            var dialogRef = this.dialog.open(CommentDialog, {
                width: '300px',
                data: {
                    title: this.content.title,
                    comment: this.comments,
                    user: undefined
                }
            });
            dialogRef.afterClosed().subscribe(function (data) {
                if (!data)
                    return;
                field.value += data.userid + ']]';
            });
        }
    };
    BoardComponent.prototype.onWriteComment = function (field) {
        var _this = this;
        var formData = {
            comment: this.cmtWrite.value,
            _id: this.num,
            comments: this.comments
        };
        this.boardService.writeComment(formData).subscribe(function (data) {
            if (data.success) {
                field.value = '';
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
    BoardComponent.prototype.onReplyComment = function (comment) {
        var _this = this;
        if (!this.authService.loggedIn())
            return;
        var dialogRef = this.dialog.open(ReplyDialog, {
            width: '300px',
            data: {
                title: this.content.title,
                comments: this.comments,
                comment: comment.comment,
                reply: undefined
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (!data)
                return;
            var formData = {
                postNum: _this.num,
                cmtNum: comment.num,
                comments: _this.comments,
                comment: data
            };
            _this.boardService.replyComment(formData).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/board/' + _this.type + '/' + _this.num]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['답글 작성 오류'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
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
    BoardComponent.prototype.onRemoveReply = function (cmtNum, reply) {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.boardService.removeReply(this.num, cmtNum, reply).subscribe(function (result) {
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
    BoardComponent.prototype.bookmark = function () {
        var _this = this;
        this.boardService.bookmark(this.type).subscribe(function (result) {
            if (result.success) {
                _this.isMyBookmark = true;
                _this.bk = result.bookmark;
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [result.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    BoardComponent.prototype.unbookmark = function () {
        var _this = this;
        this.boardService.removeBookmark(this.bk).subscribe(function (result) {
            if (result.success) {
                _this.isMyBookmark = false;
                _this.bk = undefined;
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [result.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    BoardComponent.prototype.onSearch = function (category, text) {
        var _this = this;
        if (text == '') {
            this.boardService.takeAllPosts(this.type).subscribe(function (data) {
                _this.contents = data.posts;
            });
        }
        else {
            this.boardService.takeSearchedPosts(category, this.type, text).subscribe(function (data) {
                _this.contents = data.posts;
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
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], BoardComponent);
    return BoardComponent;
}());

var CommentDialog = /** @class */ (function () {
    function CommentDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CommentDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    CommentDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board-dialog',
            template: __webpack_require__(/*! ./board.component.dialog.html */ "./src/app/components/board/board.component.dialog.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CommentDialog);
    return CommentDialog;
}());

var ReplyDialog = /** @class */ (function () {
    function ReplyDialog(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
    }
    ReplyDialog.prototype.onTypingComment = function (field, text) {
        if (this.data.comments.length == 0)
            return;
        var len = text.length;
        if (len < 2)
            return;
        if (text.substring(len - 2) == '[[') {
            var dialogRef = this.dialog.open(CommentDialog, {
                width: '300px',
                data: {
                    title: this.data.title,
                    comment: this.data.comments,
                    user: undefined
                }
            });
            dialogRef.afterClosed().subscribe(function (data) {
                if (!data)
                    return;
                field.value += data.userid + ']]';
            });
        }
    };
    ReplyDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ReplyDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board-reply',
            template: __webpack_require__(/*! ./board.component.reply.html */ "./src/app/components/board/board.component.reply.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ReplyDialog);
    return ReplyDialog;
}());



/***/ }),

/***/ "./src/app/components/corvee/corvee.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/corvee/corvee.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29ydmVlL2NvcnZlZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/corvee/corvee.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/corvee/corvee.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- element for representing the location of the post to be scrolled -->\r\n<span style=\"display: hidden;\" #postLocation></span>\r\n\r\n<!-- section for a post -->\r\n<section *ngIf=\"num != 'list'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">{{content?.title}}</h4>\r\n\r\n      <span style=\"float: right; text-align: right; font-size: 80%;\">\r\n        <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(content?.userid)\">{{content?.nickname}}</span><br/>{{content?.writedate}}\r\n      </span>\r\n      <hr/>\r\n\r\n      <div style=\"width: 100%;\" [innerHTML]=\"iframe | safe\"></div>\r\n\r\n      <br/><br/><br/><br/>\r\n      <div class=\"posting content\" [innerHtml]=\"content?.content | safe\"></div>\r\n      <br/><br/><br/><br/>\r\n\r\n      <div class=\"original-section\">\r\n        <p>{{writerIntro}}</p>\r\n        <p *ngIf=\"content?.block?.from\">\r\n          이 게임은 <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(content?.block?.from?.userid)\">{{content?.block?.from?.nickname}}</span> 님의 <a class=\"original-from-title\" [routerLink]=\"['/game/' + content?.block?.from?.game]\">{{content?.block?.from?.title}}</a> 으로부터 참조되었습니다.\r\n        </p>\r\n        <p *ngIf=\"content?.block?.added?.length > 0\">\r\n          덧붙여진 게임 :<span *ngFor=\"let added of content?.block?.added\"><a class=\"original-added-title\" [routerLink]=\"['/game/' + added?.game]\"> {{added?.title}}</a> (<span class=\"toProfile\" (click)=\"funcService.openInfoWindow(added?.userid)\">{{added?.nickname}}</span>)</span>\r\n        </p>\r\n        <p *ngIf=\"content?.block?.coworker?.length > 0\">\r\n          공동제작자 :<span *ngFor=\"let coworker of content?.block?.coworker\" class=\"toProfile\" (click)=\"funcService.openInfoWindow(coworker?.userid)\"> {{coworker?.nickname}}</span>\r\n        </p>\r\n      </div>\r\n      <br/><br/>\r\n\r\n      <div style=\"text-align: center;\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onRecommend()\">\r\n          추천 {{content?.recommend?.length}}\r\n        </button>\r\n      </div>\r\n      <br/><hr/>\r\n\r\n      <!-- ############### table for comments ############### -->\r\n      <table class=\"cmtTable\">\r\n        <tbody *ngFor=\"let comment of content?.comment\">\r\n          <tr>\r\n            <td style=\"width: 90px;\">\r\n              <img [attr.src]=\"'images/profile/' + comment.userid\" class=\"profileImage\" (click)=\"onReplyComment(comment)\" />\r\n            </td>\r\n            <td>\r\n              <span style=\"font-size: 80%;\">\r\n                <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(comment?.userid)\">\r\n                  {{comment?.nickname}}</span> &nbsp;|&nbsp; {{comment?.writedate}}\r\n                <span *ngIf=\"comment?.userid == user?.userid || user?.userid == 'admin'\"> &nbsp;|&nbsp; \r\n                  <span style=\"cursor: pointer;\" (click)=\"onRemoveComment(comment.num)\">삭제</span>\r\n                </span>\r\n              </span>\r\n              <pre class=\"content writerText\" *ngIf=\"comment?.userid == content?.userid\" [innerHTML]=\"comment?.comment | safe\"></pre>\r\n              <pre class=\"content\" *ngIf=\"comment?.userid != content?.userid\" [innerHTML]=\"comment?.comment | safe\"></pre>\r\n              <br/>\r\n            </td>\r\n            <td *ngIf=\"authService.loggedIn() && content?.userid == user?.userid && content?.userid != comment?.userid && sendable(comment?.userid)\" style=\"width: 20%;\">\r\n              <button mat-button color=\"primary\" (click)=\"sendRequest(comment?.userid)\" style=\"float: right;\">작업요청 보내기</button>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"comment?.reply?.length > 0\">\r\n            <td colspan=\"2\">\r\n              <table class=\"rplyTable\">\r\n                <tr *ngFor=\"let reply of comment?.reply\">\r\n                  <td class=\"rply-blank\"></td>\r\n                  <td style=\"width: 90px;\">\r\n                    <img [attr.src]=\"'images/profile/' + comment.userid\" class=\"profileImage\" />\r\n                  </td>\r\n                  <td>\r\n                    <span style=\"font-size: 80%;\">\r\n                      <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(reply?.userid)\">\r\n                        {{reply?.nickname}}</span> &nbsp;|&nbsp; {{reply?.writedate}}\r\n                      <span *ngIf=\"reply?.userid == user?.userid || user?.userid == 'admin'\"> &nbsp;|&nbsp; \r\n                        <span style=\"cursor: pointer;\" (click)=\"onRemoveReply(comment?.num, reply)\">삭제</span>\r\n                      </span>\r\n                    </span>\r\n                    <pre class=\"content writerText\" *ngIf=\"reply?.userid == content?.userid\" [innerHTML]=\"reply?.comment | safe\"></pre>\r\n                    <pre class=\"content\" *ngIf=\"reply?.userid != content?.userid\" [innerHTML]=\"reply?.comment | safe\"></pre>\r\n                    <br/>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n      <!-- ############### table for comments ############### -->\r\n\r\n      <!-- ############### writing area ############### -->\r\n      <form *ngIf=\"authService.loggedIn() && user?.clean\" (submit)=\"onWriteComment(field)\"><hr *ngIf=\"content?.comment?.length > 0\" />\r\n        <table style=\"width: 96%; margin: auto;\">\r\n          <tr style=\"text-align: center;\">\r\n\r\n            <td rowspan=\"2\" style=\"width: 85%;\">\r\n              <mat-form-field appearance=\"outline\" style=\"width: 100%; height: 100%;\">\r\n                <mat-label>댓글을 작성해주세요.</mat-label>\r\n                <textarea matInput rows=\"3\" name=\"cmtWrite\"\r\n                  [formControl]=\"cmtWrite\" #field\r\n                  (input)=\"onTypingComment(field, $event.target.value)\"></textarea>\r\n              </mat-form-field>\r\n            </td>\r\n\r\n            <td style=\"text-align: center; padding-bottom: 3%;\">\r\n              <button mat-raised-button type=\"submit\" style=\"width: 60%;\">작성</button>\r\n            </td>\r\n\r\n          </tr>\r\n        </table>\r\n      </form>\r\n      <!-- ############### writing area ############### -->\r\n\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"aboutPost\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #aboutPost>\r\n    <button mat-menu-item *ngIf=\"content?.userid == user?.userid || user?.userid == 'admin'\" (click)=\"onRemovePost()\">\r\n      <span>삭제</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<!-- section for a board -->\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n\r\n    <div [class]=\"'mdl-card__title bg-svg-' + svg\" style=\"width: 100%; height: 10rem;\">\r\n      <h2 class=\"mdl-card__title-text\" style=\"color: white;\">블록게시판</h2>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n      \r\n      <!-- for large display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--large-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">날짜</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th>글쓴이</th>\r\n            <th>조회수</th>\r\n            <th>추천</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{extractDate(val.writedate)}}</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a [routerLink]=\"['/corvee/' + val?._id]\"\r\n                style=\"color: black; text-decoration: none; font-weight: 400;\"\r\n                (click)=\"scrollToPost(postLocation)\">{{val.title}}</a>&nbsp;\r\n              <span *ngIf=\"val.comment.length > 0\" style=\"font-size: 85%; color: grey;\">[{{countComments(val.comment)}}]</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(val?.userid)\">{{val.nickname}}</span>\r\n            </td>\r\n            <td>{{val.hit}}</td>\r\n            <td>{{val.recommend.length}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- for small display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--small-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <tbody>\r\n          <tr *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\"\r\n              [routerLink]=\"['/corvee/' + val?._id]\" (click)=\"scrollToPost(postLocation)\">\r\n              <div>\r\n                {{val.title}}\r\n                <span *ngIf=\"val.comment.length > 0\" style=\"color: grey;\">[{{countComments(val.comment)}}]</span>\r\n              </div>\r\n              <div style=\"font-size: 85%; margin-top: 1%;\">\r\n                <span>{{val.nickname}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>조회 {{val.hit}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>추천 {{val.recommend.length}}</span>\r\n              </div>\r\n            </td>\r\n            <td>{{extractDate(val.writedate)}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"contents?.length\" [pageSize]=\"pagingSize\" (page)=\"paging($event)\"></mat-paginator>\r\n\r\n      <div *ngIf=\"authService.loggedIn() && user?.clean\" style=\"float: right;\">\r\n        <a mat-raised-button [routerLink]=\"['/cwrite']\">작성</a>\r\n      </div><br/>\r\n      <div style=\"text-align: center;\">\r\n        <mat-form-field style=\"width: 100px;\">\r\n          <mat-select value=\"title\" (selectionChange)=\"onSearch(searchSelect.value, searchInput.value)\" #searchSelect>\r\n            <mat-option value=\"title\">제목</mat-option>\r\n            <mat-option value=\"nickname\">닉네임</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>&nbsp;&nbsp;\r\n        <mat-form-field appearance=\"outline\" style=\"width: 200px;\">\r\n          <mat-label>검색</mat-label>\r\n          <input matInput (input)=\"onSearch(searchSelect.value, $event.target.value)\" #searchInput>\r\n          <mat-icon matSuffix>search</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/corvee/corvee.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/corvee/corvee.component.ts ***!
  \*******************************************************/
/*! exports provided: CorveeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorveeComponent", function() { return CorveeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_corvee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/corvee.service */ "./src/app/services/corvee.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CorveeComponent = /** @class */ (function () {
    function CorveeComponent(route, funcService, authService, corveeService, router, flashMessage, dialog) {
        var _this = this;
        this.route = route;
        this.funcService = funcService;
        this.authService = authService;
        this.corveeService = corveeService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
        this.svg = 0;
        this.cmtWrite = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.coworkers = undefined;
        this.requesteds = undefined;
        this.pagingSize = 25;
        this.pagingFrom = 0;
        this.pagingTo = this.pagingSize;
        this.ct = null;
        this.svg = this.funcService.getRandomSVGBackground();
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    CorveeComponent.prototype.extractDate = function (date) {
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
    CorveeComponent.prototype.scrollToPost = function (el) {
        el.scrollIntoView();
    };
    CorveeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.num = this.route.snapshot.paramMap.get('num');
        this.corveeService.takeAllPosts().subscribe(function (data) {
            _this.contents = data.posts;
            if (_this.num != 'list') {
                _this.corveeService.takeOnePost(_this.num).subscribe(function (result) {
                    if (result.fail) {
                        _this.router.navigate(['/no-page']);
                        return false;
                    }
                    _this.content = result.post;
                    _this.setCommentsArray(_this.content.comment);
                    _this.coworkers = result.coworkers;
                    _this.requesteds = result.requesteds;
                    _this.writerIntro = result.introduction;
                    _this.iframe = '<iframe src="'
                        + _this.funcService.ServerAddress
                        + '/corvees/frame?_id='
                        + _this.content._id
                        + '" style="width: 100%; height: 500px;">loading...</iframe>';
                    _this.funcService.setTitle(_this.content.title + ' :: 블록게시판');
                    if (_this.authService.loggedIn()) {
                        _this.authService.getProfile().subscribe(function (profile) {
                            _this.user = profile.user;
                        });
                    }
                });
            }
            else {
                _this.funcService.setTitle('블록게시판');
                if (_this.authService.loggedIn()) {
                    _this.authService.getProfile().subscribe(function (profile) {
                        _this.user = profile.user;
                    });
                }
            }
        });
    };
    CorveeComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    CorveeComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    CorveeComponent.prototype.countComments = function (comments) {
        var count = 0;
        for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
            var comment = comments_1[_i];
            if (comment.reply)
                count += comment.reply.length;
            count++;
        }
        return count;
    };
    CorveeComponent.prototype.setCommentsArray = function (comments) {
        this.comments = [];
        for (var _i = 0, comments_2 = comments; _i < comments_2.length; _i++) {
            var comment = comments_2[_i];
            if (comment.reply) {
                for (var _a = 0, _b = comment.reply; _a < _b.length; _a++) {
                    var reply = _b[_a];
                    this.pushToCommentsArray(reply);
                }
            }
            this.pushToCommentsArray(comment);
        }
    };
    CorveeComponent.prototype.pushToCommentsArray = function (item) {
        for (var _i = 0, _a = this.comments; _i < _a.length; _i++) {
            var exist = _a[_i];
            if (exist.userid == item.userid) {
                return;
            }
        }
        this.comments.push({
            userid: item.userid,
            nickname: item.nickname
        });
    };
    CorveeComponent.prototype.onTypingComment = function (field, text) {
        if (this.comments.length == 0)
            return;
        var len = text.length;
        if (len < 2)
            return;
        if (text.substring(len - 2) == '[[') {
            var dialogRef = this.dialog.open(_board_board_component__WEBPACK_IMPORTED_MODULE_3__["CommentDialog"], {
                width: '300px',
                data: {
                    title: this.content.title,
                    comment: this.comments,
                    user: undefined
                }
            });
            dialogRef.afterClosed().subscribe(function (data) {
                if (!data)
                    return;
                field.value += data.userid + ']]';
            });
        }
    };
    CorveeComponent.prototype.onWriteComment = function (field) {
        var _this = this;
        var formData = {
            comment: this.cmtWrite.value,
            _id: this.num,
            comments: this.comments
        };
        this.corveeService.writeComment(formData).subscribe(function (data) {
            if (data.success) {
                field.value = '';
                _this.router.navigate(['/corvee/' + _this.num]);
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
    CorveeComponent.prototype.onReplyComment = function (comment) {
        var _this = this;
        if (!this.authService.loggedIn())
            return;
        var dialogRef = this.dialog.open(_board_board_component__WEBPACK_IMPORTED_MODULE_3__["ReplyDialog"], {
            width: '300px',
            data: {
                title: this.content.title,
                comments: this.comments,
                comment: comment.comment,
                reply: undefined
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (!data)
                return;
            var formData = {
                postNum: _this.num,
                cmtNum: comment.num,
                comments: _this.comments,
                comment: data
            };
            _this.corveeService.replyComment(formData).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/corvee/' + _this.num]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['답글 작성 오류'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        });
    };
    CorveeComponent.prototype.onRemovePost = function () {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.corveeService.removePost(this.num).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/corvee/list']);
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
    CorveeComponent.prototype.onRemoveComment = function (cmtNum) {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.corveeService.removeComment(this.num, cmtNum).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/corvee/' + _this.num]);
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
    CorveeComponent.prototype.onRemoveReply = function (cmtNum, reply) {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.corveeService.removeReply(this.num, cmtNum, reply).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/corvee/' + _this.num]);
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
    CorveeComponent.prototype.onRecommend = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.showFlashMessage({
                messages: ['로그인 후 이용하실 수 있습니다.'],
                type: 'danger',
                timeout: 3000
            });
        }
        else {
            this.corveeService.recommend(this.num).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/corvee/' + _this.num]);
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
    CorveeComponent.prototype.sendable = function (userid) {
        if (this.coworkers) {
            for (var _i = 0, _a = this.coworkers; _i < _a.length; _i++) {
                var coworker = _a[_i];
                if (coworker.userid == userid) {
                    return false;
                }
            }
        }
        if (this.requesteds) {
            for (var _b = 0, _c = this.requesteds; _b < _c.length; _b++) {
                var requested = _c[_b];
                if (requested.userid == userid) {
                    return false;
                }
            }
        }
        return true;
    };
    CorveeComponent.prototype.sendRequest = function (userid) {
        var _this = this;
        if (!confirm('요청을 보내시겠습니까?'))
            return;
        this.authService.getIdFromUserid(userid).subscribe(function (data) {
            _this.authService.sendRequest(data._id, _this.content.title, _this.content.temp).subscribe(function (result) {
                if (result.success) {
                    _this.flashMessage.showFlashMessage({
                        messages: ['요청되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    _this.router.navigate(['/corvee/' + _this.num]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: [result.msg],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        });
    };
    CorveeComponent.prototype.onSearch = function (category, text) {
        var _this = this;
        if (text == '') {
            this.corveeService.takeAllPosts().subscribe(function (data) {
                _this.contents = data.posts;
            });
        }
        else {
            this.corveeService.takeSearchedPosts(category, text).subscribe(function (data) {
                _this.contents = data.posts;
            });
        }
    };
    CorveeComponent.prototype.paging = function (pageEvent) {
        this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
        this.router.navigate(['/corvee/' + this.num]);
    };
    CorveeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-corvee',
            template: __webpack_require__(/*! ./corvee.component.html */ "./src/app/components/corvee/corvee.component.html"),
            styles: [__webpack_require__(/*! ./corvee.component.css */ "./src/app/components/corvee/corvee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_func_service__WEBPACK_IMPORTED_MODULE_4__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_corvee_service__WEBPACK_IMPORTED_MODULE_6__["CorveeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__["NgFlashMessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CorveeComponent);
    return CorveeComponent;
}());



/***/ }),

/***/ "./src/app/components/cwrite/cwrite.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/cwrite/cwrite.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".temp-tree {\r\n    width: 100%;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jd3JpdGUvY3dyaXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3dyaXRlL2N3cml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbXAtdHJlZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/cwrite/cwrite.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/cwrite/cwrite.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      \r\n      <div class=\"temp-tree\" *ngFor=\"let temp of temps\">\r\n        <button mat-icon-button (click)=\"open(temp)\">\r\n          <mat-icon *ngIf=\"!temp?.opened\">keyboard_arrow_right</mat-icon>\r\n          <mat-icon *ngIf=\"temp?.opened\">keyboard_arrow_down</mat-icon>\r\n        </button>\r\n        {{temp?.title}} ({{temp?.savedate}})\r\n        <div *ngIf=\"temp?.opened\" style=\"padding: 20px;\">\r\n          <mat-accordion>\r\n            <mat-expansion-panel style=\"width: 95%; margin: auto;\" *ngFor=\"let block of temp?.history\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  {{block?.savedate}}\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  {{block?.moves}}개의 행동 추가됨\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n    \r\n              <p>\r\n                <b class=\"toProfile\" (click)=\"funcService.openInfoWindow(coworkerMap?.get(block?.saveby)?.userid)\">{{coworkerMap?.get(block?.saveby)?.nickname}}</b> 님에 의해 수정됨.\r\n              </p>\r\n              <button mat-button (click)=\"viewBlock(temp?._id, block?.num)\">블록 보기</button>\r\n              <button mat-button color=\"primary\" (click)=\"selectBlock(temp?._id, block?.num)\">선택</button>\r\n            </mat-expansion-panel>\r\n            \r\n          </mat-accordion>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>글쓰기</h4><hr/>\r\n      <div style=\"width: 98%; margin: auto;\">\r\n        <form (submit)=\"onWritePost()\">\r\n          <mat-form-field style=\"width: 100%;\">\r\n            <input matInput placeholder=\"제목\" type=\"text\" name=\"title\" [(ngModel)]=\"title\">\r\n          </mat-form-field>\r\n          <textarea [froalaEditor]=\"options\" [(ngModel)]=\"content\" name=\"content\"></textarea>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" style=\"float: right;\">작성</button>\r\n        </form><br/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/cwrite/cwrite.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/cwrite/cwrite.component.ts ***!
  \*******************************************************/
/*! exports provided: CwriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CwriteComponent", function() { return CwriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_corvee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/corvee.service */ "./src/app/services/corvee.service.ts");
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





var CwriteComponent = /** @class */ (function () {
    function CwriteComponent(funcService, flashMessage, router, corveeService) {
        this.funcService = funcService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.corveeService = corveeService;
        this.options = {
            placeholderText: '',
            height: 500,
            imageDefaultAlign: 'left',
            imageDefaultWidth: 0,
            charCounterCount: true,
            imageUploadParam: 'image',
            imageUploadURL: '/corvees/images',
            imageUploadMethod: 'POST',
            imageMaxSize: 5 * 1024 * 1024,
            imageAllowTypes: ['jpeg', 'jpg', 'png', 'gif', 'webp'],
            toolbarButtonsXS: [
                'insertImage', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'
            ]
        };
        this.selectedItem = undefined;
        this.funcService.setTitle('블록게시판 작성');
    }
    CwriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.corveeService.takeMyTemps().subscribe(function (data) {
            if (!data.temps || data.temps.length == 0) {
                _this.flashMessage.showFlashMessage({
                    messages: ['작업목록이 없습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate([_this.funcService.getPreviousUrl()]);
            }
            else {
                _this.temps = data.temps;
                _this.user = data.user;
                if (!_this.user.clean) {
                    _this.router.navigate(['/no-page']);
                    return false;
                }
                _this.coworkerMap = new Map();
                _this.coworkerMap.set(_this.user._id, { _id: _this.user._id, userid: _this.user.userid, nickname: _this.user.nickname });
                for (var _i = 0, _a = _this.temps; _i < _a.length; _i++) {
                    var temp = _a[_i];
                    temp.opened = false;
                    temp.history = [];
                    for (var i = 0; i < temp.block.length; i++) {
                        var block = temp.block[i];
                        if (block.saveby) {
                            block.num = i + 1;
                            temp.history.push(block);
                        }
                    }
                    temp.history.reverse();
                }
            }
        });
    };
    CwriteComponent.prototype.open = function (temp) {
        var _this = this;
        this.corveeService.takeTempUsers(temp.coworker).subscribe(function (data) {
            for (var _i = 0, _a = data.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (!_this.coworkerMap.get(user._id)) {
                    _this.coworkerMap.set(user._id, user);
                }
            }
            temp.opened = !temp.opened;
        });
    };
    CwriteComponent.prototype.viewBlock = function (num, i) {
        this.funcService.popUp(this.funcService.ServerAddress + '/modals/view-temp-block?game=' + num + '&recent=' + i, 1000, 600);
    };
    CwriteComponent.prototype.selectBlock = function (num, i) {
        this.selectedItem = {
            _id: num,
            idx: i
        };
        this.flashMessage.showFlashMessage({
            messages: ['선택되었습니다.'],
            type: 'success',
            timeout: 2000
        });
    };
    CwriteComponent.prototype.onWritePost = function () {
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
        else if (!this.selectedItem) {
            this.flashMessage.showFlashMessage({
                messages: ['블록이 선택되지 않았습니다.'],
                type: 'danger',
                timeout: 3000
            });
            return false;
        }
        else {
            var formData = {
                title: this.title,
                content: this.content,
                item: this.selectedItem
            };
            this.corveeService.writePost(formData).subscribe(function (data) {
                if (data.success) {
                    _this.router.navigate(['/corvee/' + data.num]);
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
    CwriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cwrite',
            template: __webpack_require__(/*! ./cwrite.component.html */ "./src/app/components/cwrite/cwrite.component.html"),
            styles: [__webpack_require__(/*! ./cwrite.component.css */ "./src/app/components/cwrite/cwrite.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_corvee_service__WEBPACK_IMPORTED_MODULE_3__["CorveeService"]])
    ], CwriteComponent);
    return CwriteComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recommends {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.recommends td {\r\n    padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNvbW1lbmRzIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY29tbWVuZHMgdGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/game/game.component.dialog.html":
/*!************************************************************!*\
  !*** ./src/app/components/game/game.component.dialog.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\r\n<div mat-dialog-content>\r\n  아래 내용을 복사해주세요.<br/>\r\n  <mat-form-field style=\"width: 100%;\">\r\n    <textarea matInput [(ngModel)]=\"data.text\" rows=\"5\" readonly #copy (click)=\"copyText(copy)\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onClose()\">닫기</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- element for representing the location of the post to be scrolled -->\r\n<span style=\"display: hidden;\" #postLocation></span>\r\n\r\n<!-- section for a post -->\r\n<section *ngIf=\"num != 'list'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">{{content?.title}}</h4>\r\n      <span style=\"float: right; text-align: right; font-size: 80%;\">\r\n        <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(content?.userid)\">{{content?.nickname}}</span><br/>{{content?.writedate}}\r\n      </span>\r\n      <hr/>\r\n\r\n      <!-- ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ENGINE (GAME) ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ -->\r\n      <div class=\"engine-layout\">\r\n\r\n        <!-- PHASE-CONTENT -->\r\n        <div class=\"stage-content\" [innerHTML]=\"playService?.phase?.content | safe\"></div>\r\n\r\n        <!-- CHOICES -->\r\n        <table style=\"width: 100%;\" *ngIf=\"!playService.end\">\r\n          <tbody>\r\n            <tr *ngFor=\"let choice of playService?.phase?.choice\" (click)=\"playService.select(choice?.change_set, choice?.stage_to)\" style=\"height: 50px;\">\r\n              <td class=\"stage-choice btn--stripe\">{{choice?.content}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <!-- END -->\r\n        <table *ngIf=\"playService.end\" class=\"mdl-data-table mdl-js-data-table\" style=\"width: 100%;\">\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">THE END.</td>\r\n            <td>최종점수 : {{playService?.score}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\"><button mat-button (click)=\"playService.replay()\" style=\"float: right;\">다시하기</button></td>\r\n          </tr>\r\n        </table>\r\n\r\n        <!-- SHOW PARAMETERS -->\r\n        <hr/>\r\n        <div class=\"row align-items-center\" *ngFor=\"let arr of playService?.paramArr\">\r\n          <div class=\"col-sm grid-cell\" *ngFor=\"let val of arr\">\r\n            <span *ngIf=\"playService.visible(val?.value?.visible)\">\r\n              {{val?.key}}<span>: </span>{{val?.value?.value}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ ENGINE (GAME) ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ -->\r\n\r\n      <br/><br/><br/><br/>\r\n      <div>{{content?.content}}</div>\r\n      <br/><br/><br/><br/>\r\n\r\n      <div class=\"original-section\">\r\n        <p>\r\n          version. {{content?.version}}\r\n        </p>\r\n        <p *ngIf=\"content?.highest\">\r\n          최고 득점자 : <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(content?.highest?.userid)\">{{content?.highest?.nickname}}</span> ({{content?.highest?.score}}점)\r\n        </p>\r\n        <p *ngIf=\"content?.from\">\r\n          이 게임은 <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(content?.from?.userid)\">{{content.from.nickname}}</span> 님의 <a class=\"original-from-title\" [routerLink]=\"['/game/' + content?.from?.game]\">{{content.from.title}}</a> 으로부터 참조되었습니다.\r\n        </p>\r\n        <p *ngIf=\"content?.added?.length > 0\">\r\n          덧붙여진 게임 :<span *ngFor=\"let added of content?.added\"><a class=\"original-added-title\" [routerLink]=\"['/game/' + added?.game]\"> {{added?.title}}</a> (<span class=\"toProfile\" (click)=\"funcService.openInfoWindow(added?.userid)\">{{added?.nickname}}</span>)</span>\r\n        </p>\r\n        <p *ngIf=\"content?.coworker?.length > 0\">\r\n          공동제작자 :<span *ngFor=\"let coworker of content?.coworker\" class=\"toProfile\" (click)=\"funcService.openInfoWindow(coworker?.userid)\"> {{coworker?.nickname}}</span>\r\n        </p>\r\n      </div>\r\n      <br/><br/>\r\n\r\n      <!-- normal user -->\r\n      <table class=\"recommends\" *ngIf=\"user?.userid != content?.userid && user?.userid != 'admin'\">\r\n        <tr>\r\n          <td>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onRecommend(true)\">\r\n              추천 {{content?.recommend}}\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button mat-raised-button color=\"accent\" (click)=\"onRecommend(false)\">\r\n              비추천 {{content?.unrecommend}}\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <!-- writer -->\r\n      <table class=\"recommends\" *ngIf=\"authService.loggedIn() && user?.userid == content?.userid && user?.userid != 'admin'\">\r\n        <tr>\r\n          <td>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onRecommend(true)\">\r\n              추천 {{content?.recommend}}\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button mat-raised-button color=\"accent\" (click)=\"onRecommend(false)\">\r\n              비추천 {{content?.unrecommend}}\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button mat-raised-button\r\n              *ngIf=\"content?.boardRequest == 0 && (content?.recommend - content?.unrecommend) >= 1\"\r\n              (click)=\"requestBoard()\">\r\n              게시판 생성 요청\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <!-- admin -->\r\n      <table class=\"recommends\" *ngIf=\"authService.loggedIn() && user?.userid == 'admin'\">\r\n        <tr>\r\n          <td>\r\n            <button mat-raised-button color=\"primary\" (click)=\"onRecommend(true)\">\r\n              추천 {{content?.recommend}}\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button mat-raised-button color=\"accent\" (click)=\"onRecommend(false)\">\r\n              비추천 {{content?.unrecommend}}\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button mat-raised-button\r\n              *ngIf=\"content?.boardRequest == 1\" (click)=\"acceptBoard()\">\r\n              게시판 생성 요청 수락\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <br/><hr/>\r\n\r\n      <!-- ############### table for comments ############### -->\r\n      <table class=\"cmtTable\">\r\n        <tbody *ngFor=\"let comment of content?.comment\">\r\n          <tr>\r\n            <td style=\"width: 90px;\">\r\n              <img [attr.src]=\"'images/profile/' + comment.userid\" class=\"profileImage\" (click)=\"onReplyComment(comment)\" />\r\n            </td>\r\n            <td>\r\n              <span style=\"font-size: 80%;\">\r\n                <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(comment?.userid)\">\r\n                  {{comment?.nickname}}</span> &nbsp;|&nbsp; {{comment?.writedate}}\r\n                <span *ngIf=\"comment?.userid == user?.userid || user?.userid == 'admin'\"> &nbsp;|&nbsp; \r\n                  <span style=\"cursor: pointer;\" (click)=\"onRemoveComment(comment.num)\">삭제</span>\r\n                </span>\r\n              </span>\r\n              <pre class=\"content writerText\" *ngIf=\"comment?.userid == content?.userid\" [innerHTML]=\"comment?.comment | safe\"></pre>\r\n              <pre class=\"content\" *ngIf=\"comment?.userid != content?.userid\" [innerHTML]=\"comment?.comment | safe\"></pre>\r\n              <br/>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"comment?.reply?.length > 0\">\r\n            <td colspan=\"2\">\r\n              <table class=\"rplyTable\">\r\n                <tr *ngFor=\"let reply of comment?.reply\">\r\n                  <td class=\"rply-blank\"></td>\r\n                  <td style=\"width: 90px;\">\r\n                    <img [attr.src]=\"'images/profile/' + comment.userid\" class=\"profileImage\" />\r\n                  </td>\r\n                  <td>\r\n                    <span style=\"font-size: 80%;\">\r\n                      <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(reply?.userid)\">\r\n                        {{reply?.nickname}}</span> &nbsp;|&nbsp; {{reply?.writedate}}\r\n                      <span *ngIf=\"reply?.userid == user?.userid || user?.userid == 'admin'\"> &nbsp;|&nbsp; \r\n                        <span style=\"cursor: pointer;\" (click)=\"onRemoveReply(comment?.num, reply)\">삭제</span>\r\n                      </span>\r\n                    </span>\r\n                    <pre class=\"content writerText\" *ngIf=\"reply?.userid == content?.userid\" [innerHTML]=\"reply?.comment | safe\"></pre>\r\n                    <pre class=\"content\" *ngIf=\"reply?.userid != content?.userid\" [innerHTML]=\"reply?.comment | safe\"></pre>\r\n                    <br/>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n      <!-- ############### table for comments ############### -->\r\n\r\n      <!-- ############### writing area ############### -->\r\n      <form *ngIf=\"authService.loggedIn() && user?.clean\" (submit)=\"onWriteComment(field)\"><hr *ngIf=\"content?.comment?.length > 0\" />\r\n        <table style=\"width: 96%; margin: auto;\">\r\n          <tr style=\"text-align: center;\">\r\n\r\n            <td rowspan=\"2\" style=\"width: 85%;\">\r\n              <mat-form-field appearance=\"outline\" style=\"width: 100%; height: 100%;\">\r\n                <mat-label>댓글을 작성해주세요.</mat-label>\r\n                <textarea matInput rows=\"3\" name=\"cmtWrite\"\r\n                  [formControl]=\"cmtWrite\" #field\r\n                  (input)=\"onTypingComment(field, $event.target.value)\"></textarea>\r\n              </mat-form-field>\r\n            </td>\r\n\r\n            <td style=\"text-align: center; padding-bottom: 3%;\">\r\n              <button mat-raised-button type=\"submit\" style=\"width: 60%;\">작성</button>\r\n            </td>\r\n\r\n          </tr>\r\n        </table>\r\n      </form>\r\n      <!-- ############### writing area ############### -->\r\n\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"aboutPost\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #aboutPost>\r\n    <button mat-menu-item (click)=\"scrapDialog()\">\r\n      <span>퍼가기</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"content?.board && content?.board != ''\" [routerLink]=\"['/board/' + content?.board + '/list']\">\r\n      <span>게시판으로 이동</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"viewBlock()\">\r\n      <span>블록 보기</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"authService.loggedIn()\" (click)=\"toMyTempList()\">\r\n      <span>내 임시저장으로 복사</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"content?.userid == user?.userid || user?.userid == 'admin'\" (click)=\"onRemovePost()\">\r\n      <span>삭제</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<!-- section for a board -->\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n\r\n    <div [class]=\"'mdl-card__title bg-svg-' + svg\" style=\"width: 100%; height: 10rem;\">\r\n      <h2 class=\"mdl-card__title-text\" style=\"color: white;\">게임게시판</h2>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n      \r\n      <!-- for large display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--large-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">날짜</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th>글쓴이</th>\r\n            <th>조회수</th>\r\n            <th>추천</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{extractDate(val.writedate)}}</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a [routerLink]=\"['/game/' + val?._id]\"\r\n                style=\"color: black; text-decoration: none; font-weight: 400;\"\r\n                (click)=\"scrollToPost(postLocation)\">{{val.title}}</a>&nbsp;\r\n              <span *ngIf=\"val.comment.length > 0\" style=\"font-size: 85%; color: grey;\">[{{countComments(val.comment)}}]</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(val?.userid)\">{{val.nickname}}</span>\r\n            </td>\r\n            <td>{{val.hit}}</td>\r\n            <td>{{val.recommend}}<span>/</span>{{val.unrecommend}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- for small display -->\r\n      <table class=\"mdl-data-table mdl-js-data-table mdl-layout--small-screen-only\" style=\"margin: auto; width: 98%;\">\r\n        <tbody>\r\n          <tr *ngFor=\"let val of contents | slice:pagingFrom:pagingTo; let i=index\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\"\r\n              [routerLink]=\"['/game/' + val?._id]\" (click)=\"scrollToPost(postLocation)\">\r\n              <div>\r\n                {{val.title}}\r\n                <span *ngIf=\"val.comment.length > 0\" style=\"color: grey;\">[{{countComments(val.comment)}}]</span>\r\n              </div>\r\n              <div style=\"font-size: 85%; margin-top: 1%;\">\r\n                <span>{{val.nickname}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>조회 {{val.hit}}</span>&nbsp;&nbsp;&nbsp;\r\n                <span>추천 {{val.recommend}}<span>/</span>{{val.unrecommend}}</span>\r\n              </div>\r\n            </td>\r\n            <td>{{extractDate(val.writedate)}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"contents?.length\" [pageSize]=\"pagingSize\" (page)=\"paging($event)\"></mat-paginator>\r\n\r\n      <div *ngIf=\"authService.loggedIn() && user?.clean\" style=\"float: right;\">\r\n        <a mat-raised-button [routerLink]=\"['/tool']\">작성</a>\r\n      </div><br/>\r\n      <div style=\"text-align: center;\">\r\n        <mat-form-field style=\"width: 100px;\">\r\n          <mat-select value=\"title\" (selectionChange)=\"onSearch(searchSelect.value, searchInput.value)\" #searchSelect>\r\n            <mat-option value=\"title\">제목</mat-option>\r\n            <mat-option value=\"nickname\">닉네임</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>&nbsp;&nbsp;\r\n        <mat-form-field appearance=\"outline\" style=\"width: 200px;\">\r\n          <mat-label>검색</mat-label>\r\n          <input matInput (input)=\"onSearch(searchSelect.value, $event.target.value)\" #searchInput>\r\n          <mat-icon matSuffix>search</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent, ScrapDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapDialog", function() { return ScrapDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_play_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/play.service */ "./src/app/services/play.service.ts");
/* harmony import */ var _temp_temp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/temp.component */ "./src/app/components/temp/temp.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var GameComponent = /** @class */ (function () {
    function GameComponent(route, funcService, authService, gameService, playService, router, flashMessage, dialog) {
        var _this = this;
        this.route = route;
        this.funcService = funcService;
        this.authService = authService;
        this.gameService = gameService;
        this.playService = playService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
        this.svg = 0;
        this.num = '';
        this.cmtWrite = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.pagingSize = 25;
        this.pagingFrom = 0;
        this.pagingTo = this.pagingSize;
        this.svg = this.funcService.getRandomSVGBackground();
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        var b = this.num != this.route.snapshot.paramMap.get('num'); // first or another post
        if (b)
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
                    _this.setCommentsArray(_this.content.comment);
                    if (b) {
                        _this.funcService.setTitle(_this.content.title + ' :: 게임게시판');
                        _this.playService.gameSet(_this.content.game);
                        _this.playService.numSet(_this.num);
                    }
                    if (_this.authService.loggedIn()) {
                        _this.authService.getProfile().subscribe(function (profile) {
                            _this.user = profile.user;
                        });
                    }
                });
            }
            else {
                _this.funcService.setTitle('게임 게시판');
                if (_this.authService.loggedIn()) {
                    _this.authService.getProfile().subscribe(function (profile) {
                        _this.user = profile.user;
                    });
                }
            }
        });
    };
    GameComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    GameComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    GameComponent.prototype.countComments = function (comments) {
        var count = 0;
        for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
            var comment = comments_1[_i];
            if (comment.reply)
                count += comment.reply.length;
            count++;
        }
        return count;
    };
    GameComponent.prototype.setCommentsArray = function (comments) {
        this.comments = [];
        for (var _i = 0, comments_2 = comments; _i < comments_2.length; _i++) {
            var comment = comments_2[_i];
            if (comment.reply) {
                for (var _a = 0, _b = comment.reply; _a < _b.length; _a++) {
                    var reply = _b[_a];
                    this.pushToCommentsArray(reply);
                }
            }
            this.pushToCommentsArray(comment);
        }
    };
    GameComponent.prototype.pushToCommentsArray = function (item) {
        for (var _i = 0, _a = this.comments; _i < _a.length; _i++) {
            var exist = _a[_i];
            if (exist.userid == item.userid) {
                return;
            }
        }
        this.comments.push({
            userid: item.userid,
            nickname: item.nickname
        });
    };
    GameComponent.prototype.onTypingComment = function (field, text) {
        if (this.comments.length == 0)
            return;
        var len = text.length;
        if (len < 2)
            return;
        if (text.substring(len - 2) == '[[') {
            var dialogRef = this.dialog.open(_board_board_component__WEBPACK_IMPORTED_MODULE_8__["CommentDialog"], {
                width: '300px',
                data: {
                    title: this.content.title,
                    comment: this.comments,
                    user: undefined
                }
            });
            dialogRef.afterClosed().subscribe(function (data) {
                if (!data)
                    return;
                field.value += data.userid + ']]';
            });
        }
    };
    GameComponent.prototype.onWriteComment = function (field) {
        var _this = this;
        var formData = {
            comment: this.cmtWrite.value,
            _id: this.num,
            comments: this.comments
        };
        this.gameService.writeComment(formData).subscribe(function (data) {
            if (data.success) {
                field.value = '';
                _this.router.navigate(['/game/' + _this.num]);
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
    GameComponent.prototype.onReplyComment = function (comment) {
        var _this = this;
        if (!this.authService.loggedIn())
            return;
        var dialogRef = this.dialog.open(_board_board_component__WEBPACK_IMPORTED_MODULE_8__["ReplyDialog"], {
            width: '300px',
            data: {
                title: this.content.title,
                comments: this.comments,
                comment: comment.comment,
                reply: undefined
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (!data)
                return;
            var formData = {
                postNum: _this.num,
                cmtNum: comment.num,
                comments: _this.comments,
                comment: data
            };
            _this.gameService.replyComment(formData).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/game/' + _this.num]);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['답글 작성 오류'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        });
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
    GameComponent.prototype.onRemoveComment = function (cmtNum) {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.gameService.removeComment(this.num, cmtNum).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/game/' + _this.num]);
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
    GameComponent.prototype.onRemoveReply = function (cmtNum, reply) {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.gameService.removeReply(this.num, cmtNum, reply).subscribe(function (result) {
                if (result.success) {
                    _this.router.navigate(['/game/' + _this.num]);
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
    GameComponent.prototype.requestBoard = function () {
        var _this = this;
        this.gameService.requestBoard(this.num).subscribe(function (data) {
            if (data.success) {
                _this.content.boardRequest = 1;
                _this.flashMessage.showFlashMessage({
                    messages: ['요청되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    GameComponent.prototype.acceptBoard = function () {
        var _this = this;
        this.gameService.acceptBoard(this.num, this.content.game.title, this.content.userid).subscribe(function (data) {
            if (data.success) {
                _this.content.boardRequest = 2;
                _this.content.board = data.link;
                _this.flashMessage.showFlashMessage({
                    messages: ['수락되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    GameComponent.prototype.viewBlock = function () {
        this.funcService.popUp(this.funcService.ServerAddress + '/modals/view-block?game=' + this.num, 1000, 600);
    };
    GameComponent.prototype.toMyTempList = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_temp_temp_component__WEBPACK_IMPORTED_MODULE_7__["TempDialog"], {
            width: '300px',
            data: {
                title: this.content.title,
                text: this.content.title
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.gameService.toMyTempList(_this.num, data).subscribe(function (result) {
                    if (result.success) {
                        _this.flashMessage.showFlashMessage({
                            messages: ['저장되었습니다.'],
                            type: 'success',
                            timeout: 2000
                        });
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
    GameComponent.prototype.scrapDialog = function () {
        this.dialog.open(ScrapDialog, {
            width: '300px',
            data: {
                title: this.content.title,
                text: '<iframe src="' + this.funcService.ServerAddress + '/#/play/' + this.num + '" style="width: 560px; height: 480px;"></iframe>'
            }
        });
    };
    GameComponent.prototype.onSearch = function (category, text) {
        var _this = this;
        if (text == '') {
            this.gameService.takeAllPosts().subscribe(function (data) {
                _this.contents = data.posts;
            });
        }
        else {
            this.gameService.takeSearchedPosts(category, text).subscribe(function (data) {
                _this.contents = data.posts;
            });
        }
    };
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
            _services_func_service__WEBPACK_IMPORTED_MODULE_3__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"],
            _services_play_service__WEBPACK_IMPORTED_MODULE_6__["PlayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__["NgFlashMessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], GameComponent);
    return GameComponent;
}());

var ScrapDialog = /** @class */ (function () {
    function ScrapDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ScrapDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ScrapDialog.prototype.copyText = function (copy) {
        copy.select();
        document.execCommand('copy');
    };
    ScrapDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-dialog',
            template: __webpack_require__(/*! ./game.component.dialog.html */ "./src/app/components/game/game.component.dialog.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ScrapDialog);
    return ScrapDialog;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".undercity .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.undercity h3 {\r\n    font-weight: 400;\r\n}\r\n\r\n.undercity .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n}\r\n\r\n.undercity-img {\r\n    width: 350px;\r\n    height: 350px;\r\n}\r\n\r\n.undercity-including-img {\r\n    text-align: center;\r\n}\r\n\r\n.text-right {\r\n    text-align: right;\r\n}\r\n\r\n.posts {\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.posts-small {\r\n    text-align: left;\r\n    padding-left: 15%;\r\n    padding-right: 15%;\r\n}\r\n\r\n.carousel-item {\r\n    height: 42rem;\r\n}\r\n\r\nli {\r\n    margin: .75rem;\r\n}\r\n\r\n.featurette-divider {\r\n    margin: 5rem 0;\r\n}\r\n\r\n.featurette-heading {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n}\r\n\r\n@media (min-width: 40em) {\r\n    .carousel-caption p {\r\n        margin-bottom: 1.25rem;\r\n        font-size: 1.25rem;\r\n        line-height: 1.4;\r\n    }\r\n}\r\n\r\n@media (min-width: 62em) {\r\n    .featurette-heading {\r\n        margin-top: 7rem;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuZGVyY2l0eSAuY29sLWxnLTQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udW5kZXJjaXR5IGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi51bmRlcmNpdHkgLmNvbC1sZy00IHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLjc1cmVtO1xyXG59XHJcblxyXG4udW5kZXJjaXR5LWltZyB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4udW5kZXJjaXR5LWluY2x1ZGluZy1pbWcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnBvc3RzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wb3N0cy1zbWFsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogNDJyZW07XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbjogLjc1cmVtO1xyXG59XHJcbiAgXHJcbi5mZWF0dXJldHRlLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luOiA1cmVtIDA7XHJcbn1cclxuXHJcbi5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xyXG4gICAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3JlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"rwCarousel\" class=\"carousel slide mdl-shadow--2dp\" data-ride=\"carousel\">\r\n\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#rwCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#rwCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#rwCarousel\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n\r\n  <div class=\"carousel-inner\">\r\n    <div [class]=\"'carousel-item active bg-svg-' + backgrounds[0]\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption text-left\">\r\n          <h3>{{carousel[0]?.title}}</h3>\r\n          <h4>최근 추가된 게임</h4>\r\n          <p>{{carousel[0]?.content}}</p>\r\n          <p><a mat-flat-button [routerLink]=\"['/game/' + carousel[0]?._id]\" role=\"button\">게임으로</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div [class]=\"'carousel-item bg-svg-' + backgrounds[1]\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>{{carousel[1]?.title}}</h3>\r\n          <h4>최고 인기 게임</h4>\r\n          <p>{{carousel[1]?.content}}</p>\r\n          <p><a mat-flat-button [routerLink]=\"['/game/' + carousel[1]?._id]\" role=\"button\">게임으로</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div [class]=\"'carousel-item bg-svg-' + backgrounds[2]\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption text-right\">\r\n          <h3>{{carousel[2]?.title}}</h3>\r\n          <h4>최근 추가된 게시판</h4>\r\n          <p>생성된 날짜 : {{carousel[2]?.createdate}}</p>\r\n          <p><a mat-flat-button [routerLink]=\"['/board/' + carousel[2]?.url + '/list']\" role=\"button\">게시판으로</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <a class=\"carousel-control-prev\" href=\"#rwCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#rwCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n<section></section>\r\n<br/><br/>\r\n\r\n<div class=\"container undercity\">\r\n\r\n  <!-- ADMIN SECTION -->\r\n  <div class=\"row featurette\" *ngIf=\"user?.userid == 'admin'\">\r\n    <div class=\"col-md-5 order-md-1 undercity-including-img\">\r\n      <img src=\"images/home/admin.jpg\" class=\"img-fluid undercity-img\">\r\n    </div>\r\n    <div class=\"col-md-7 order-md-2 mdl-layout--large-screen-only\">\r\n      <h3 class=\"featurette-heading\">반갑습니다, 어드민님</h3>\r\n      <a mat-button [routerLink]=\"['/admin']\">어드민 페이지</a>\r\n    </div>\r\n    <div class=\"col-md-7 order-md-2 mdl-layout--small-screen-only\" style=\"text-align: center;\">\r\n      <br/><h3 class=\"featurette-heading\">반갑습니다, 어드민님</h3>\r\n      <a mat-button [routerLink]=\"['/admin']\">어드민 페이지</a>\r\n    </div>\r\n  </div>\r\n\r\n  <hr class=\"featurette-divider\" *ngIf=\"user?.userid == 'admin'\">\r\n\r\n  <ng-container *ngFor=\"let val of homeService.rows; index as i\">\r\n    <div class=\"row featurette\">\r\n      <div [class]=\"'col-md-5 undercity-including-img order-md-' + ((i + 1) % 2 + 1)\">\r\n        <img [src]=\"'images/home/home' + (i+1) + '.jpg'\" class=\"img-fluid undercity-img\">\r\n      </div>\r\n      <div [class]=\"'col-md-7 mdl-layout--large-screen-only ' + homeService.lrControl(i)\">\r\n        <h3 class=\"featurette-heading\">{{val.title}}</h3>\r\n        <p *ngFor=\"let content of val.contents\" class=\"posts\">{{content}}</p>\r\n      </div>\r\n      <div [class]=\"'col-md-7 mdl-layout--small-screen-only ' + homeService.lrControlSmall(i)\" style=\"text-align: center;\">\r\n        <br/><h3 class=\"featurette-heading\">{{val.title}}</h3>\r\n        <p *ngFor=\"let content of val.contents\" class=\"posts-small\">{{content}}</p>\r\n      </div>\r\n    </div>\r\n    <hr class=\"featurette-divider\">\r\n  </ng-container>\r\n\r\n</div>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/services/home.service.ts");
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
    function HomeComponent(router, funcService, authService, homeService) {
        var _this = this;
        this.router = router;
        this.funcService = funcService;
        this.authService = authService;
        this.homeService = homeService;
        this.user = undefined;
        this.carousel = [];
        this.funcService.setTitle('HOME');
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backgrounds = [];
        for (var i = 0; i < 3; i++) {
            var idx = Math.floor(Math.random() * this.funcService.bgCounts);
            var flag = i != 0;
            while (flag) {
                for (var j = 0; j < this.backgrounds.length; j++) {
                    if (idx == this.backgrounds[j]) {
                        flag = true;
                        idx = Math.floor(Math.random() * this.funcService.bgCounts);
                        break;
                    }
                    else {
                        flag = false;
                    }
                }
            }
            this.backgrounds[i] = idx;
        }
        // this.user = {userid: 'admin'}; const s = ['what the hack', 'i don\'t know', 'jesus', 'asdf', '?', 'hell yeah']; this.carousel = [];
        // for(let i=0; i<3; i++) {this.carousel.push({_id: 123, title: s[Math.floor(Math.random() * s.length)], content: 'what', url: 'hello', createdate: 'yeah'});}
        this.homeService.takeBests().subscribe(function (bests) {
            _this.carousel[0] = bests.recent;
            _this.carousel[1] = bests.recommend;
            _this.homeService.takeAddedSub().subscribe(function (data) {
                _this.carousel[2] = data.added;
                if (_this.authService.loggedIn()) {
                    _this.authService.getProfile().subscribe(function (profile) {
                        _this.user = profile.user;
                    });
                }
            });
        });
    };
    HomeComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>로그인</h4><hr/>      \r\n      <br/><br/>\r\n\r\n      <form (submit)=\"onLoginSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/><br/><br/>\r\n          <button mat-raised-button type=\"submit\" class=\"input-element\" color=\"primary\">로그인</button>\r\n          <br/><br/><br/><br/><br/><hr/>\r\n          <a [routerLink]=\"['/register']\" style=\"color: black; text-decoration: none;\">회원가입</a>\r\n          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\r\n          <a [routerLink]=\"['/']\" style=\"color: black; text-decoration: none;\">아이디 찾기</a>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n<br/><br/>\r\n"

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
                    if (_this.funcService.getPreviousUrl().toLowerCase().includes('login'))
                        _this.router.navigate(['/']);
                    else
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kaWZ5L21vZGlmeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/modify/modify.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/modify/modify.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>회원정보수정</h4><hr/><br/><br/>\r\n\r\n      <form (submit)=\"onModifyUser()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" [value]=\"user?.userid\" disabled>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"기존 비밀번호 (필수)\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"새 비밀번호\" type=\"password\" name=\"newpw\" [(ngModel)]=\"newpw\">\r\n            <mat-hint><strong>비밀번호 미변경 시 공백 유지</strong></mat-hint>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"닉네임\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"이메일\" type=\"text\" [value]=\"user?.email\" disabled>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"한 줄 소개\" type=\"text\" name=\"introduction\" [(ngModel)]=\"introduction\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" class=\"input-element\" color=\"primary\">회원가입</button>\r\n          <br/><br/><br/><hr/>\r\n          회원코드 : [ {{user?._id}} ]\r\n        </div>\r\n      </form>\r\n      <button mat-raised-button (click)=\"addProfileImage(user?.userid)\" class=\"toProfile\" style=\"float: right;\">프로필 이미지 변경</button>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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
        this.funcService.openWindowWithAuth(this.funcService.ServerAddress + '/modals/profile-image?userid=' + userid, userid);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm8tcGFnZS9uby1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/no-page/no-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/no-page/no-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"num != 'list'\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">PAGE NOT FOUND</h4>\r\n\r\n      <hr/>\r\n      <div class=\"posting\">\r\n        <img src=\"images/404.jpg\" style=\"width: 100%;\"><br/><br/>\r\n        페이지가 존재하지 않거나 접근이 거부되었습니다.<br/><br/>\r\n        <a mat-raised-button color=\"primary\" [routerLink]=\"[this.funcService.getPreviousUrl()]\">이전 페이지로 돌아가기</a><br/><br/>\r\n      </div>\r\n      <br/><br/>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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
        this.funcService.setTitle('ERROR');
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

/***/ "./src/app/components/play/play.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/play/play.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheS9wbGF5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/play/play.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/play/play.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"engine-layout\">\r\n\r\n  <a mat-button [href]=\"funcService.ServerAddress + '/#/game/' + num\" target=\"_blank\"\r\n    style=\"width: 100%; text-align: left; font-weight: normal; border: 1px solid grey;\">\r\n    {{playService?.data?.title}}\r\n  </a>\r\n\r\n  <!-- PHASE-CONTENT -->\r\n  <div class=\"stage-content\" [innerHTML]=\"playService?.phase?.content | safe\"></div>\r\n\r\n  <!-- CHOICES -->\r\n  <table style=\"width: 100%;\" *ngIf=\"!playService.end\">\r\n    <tbody>\r\n      <tr *ngFor=\"let choice of playService?.phase?.choice\" (click)=\"playService.select(choice?.change_set, choice?.stage_to)\" style=\"height: 50px;\">\r\n        <td class=\"stage-choice btn--stripe\">{{choice?.content}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <!-- END -->\r\n  <table *ngIf=\"playService.end\" class=\"mdl-data-table mdl-js-data-table\" style=\"width: 100%;\">\r\n    <tr>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">THE END.</td>\r\n      <td>최종점수 : {{playService?.score}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"2\"><button mat-button (click)=\"playService.replay()\" style=\"float: right;\">다시하기</button></td>\r\n    </tr>\r\n  </table>\r\n\r\n  <!-- SHOW PARAMETERS -->\r\n  <hr/>\r\n  <div class=\"row align-items-center\" *ngFor=\"let arr of playService?.paramArr\">\r\n    <div class=\"col-sm grid-cell\" *ngFor=\"let val of arr\">\r\n      <span *ngIf=\"playService.visible(val?.value?.visible)\">\r\n        {{val?.key}}<span>: </span>{{val?.value?.value}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/play/play.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/play/play.component.ts ***!
  \***************************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_play_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/play.service */ "./src/app/services/play.service.ts");
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




var PlayComponent = /** @class */ (function () {
    function PlayComponent(funcService, playService, route, router) {
        this.funcService = funcService;
        this.playService = playService;
        this.route = route;
        this.router = router;
        this.funcService.setTitle('PLAY');
        this.num = this.route.snapshot.paramMap.get('num');
    }
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playService.takeOneGame(this.num).subscribe(function (data) {
            if (!data.game)
                _this.router.navigate(['/no-page']);
            else
                _this.playService.gameSet(data.game);
        });
    };
    PlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-play',
            template: __webpack_require__(/*! ./play.component.html */ "./src/app/components/play/play.component.html"),
            styles: [__webpack_require__(/*! ./play.component.css */ "./src/app/components/play/play.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_1__["FuncService"],
            _services_play_service__WEBPACK_IMPORTED_MODULE_2__["PlayService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PlayComponent);
    return PlayComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"user\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">PROFILE &nbsp;-&nbsp; <span (click)=\"funcService.openInfoWindow(user.userid)\" class=\"toProfile\">{{user.userid}}</span></h4>\r\n      <span style=\"float: right\"><img [attr.src]=\"'images/profile/' + user.userid\" class=\"profileImage\"></span>\r\n      <hr/><br/><br/>\r\n      \r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 80%;\">\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">아이디</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.userid}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">닉네임</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.nickname}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">이메일</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.email}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">한 줄 소개</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.introduction}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">가입일</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{user.registerdate}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <br/><br/>\r\n\r\n      <a mat-raised-button [routerLink]=\"['/modify']\" style=\"float: right;\">회원정보수정</a>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section *ngIf=\"user?.coworkRequest?.length > 0\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>공동작업 요청</h4>\r\n      <hr/>\r\n      \r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">요청자</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">요청일시</th>\r\n            <th>처리</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let val of user?.coworkRequest | slice:reqPagingFrom:reqPagingTo;\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{val?.title}}</td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(val?.from?.userid)\">{{val?.from?.nickname}}</span>\r\n            </td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{val?.requestdate}}</td>\r\n            <td>\r\n              <button mat-button color=\"primary\" (click)=\"acceptReq(val)\">수락</button>\r\n              <button mat-button color=\"warn\" (click)=\"rejectReq(val)\">거절</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"user?.coworkRequest?.length\" [pageSize]=\"pagingSize\" (page)=\"reqPaging($event)\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>내 작업 목록</h4>\r\n      <hr/>\r\n      \r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">저장날짜</th>\r\n            <th>관리</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let val of temps | slice:tempPagingFrom:tempPagingTo;\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a [routerLink]=\"['/temp/' + val?._id]\"\r\n                style=\"color: black; text-decoration: none; font-weight: 400;\">{{val.title}}</a>\r\n            </td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{val.savedate}}</td>\r\n            <td>\r\n              <button mat-button color=\"warn\" (click)=\"removeTemp(val?._id)\">삭제</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"temps?.length\" [pageSize]=\"pagingSize\" (page)=\"tempPaging($event)\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>공동작업 목록</h4>\r\n      <hr/>\r\n      \r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">제목</th>\r\n            <th>저장날짜</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let val of coworks | slice:coworkPagingFrom:coworkPagingTo;\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <a [routerLink]=\"['/temp/' + val?._id]\"\r\n                style=\"color: black; text-decoration: none; font-weight: 400;\">{{val.title}}</a>\r\n            </td>\r\n            <td>{{val.savedate}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"coworks?.length\" [pageSize]=\"pagingSize\" (page)=\"coworkPaging($event)\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
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
    function ProfileComponent(authService, funcService, gameService, router, flashMessage) {
        var _this = this;
        this.authService = authService;
        this.funcService = funcService;
        this.gameService = gameService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.pagingSize = 25;
        this.reqPagingFrom = 0;
        this.reqPagingTo = this.pagingSize;
        this.tempPagingFrom = 0;
        this.tempPagingTo = this.pagingSize;
        this.coworkPagingFrom = 0;
        this.coworkPagingTo = this.pagingSize;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.funcService.setTitle(profile.user.nickname + ' :: PROFILE');
            _this.gameService.takeMyTemps().subscribe(function (result) {
                _this.temps = result.temps;
                _this.coworks = result.coworking;
            });
        });
    };
    ProfileComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    ProfileComponent.prototype.reqPaging = function (pageEvent) {
        this.reqPagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.reqPagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
        this.router.navigate(['/profile']);
    };
    ProfileComponent.prototype.tempPaging = function (pageEvent) {
        this.tempPagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.tempPagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
        this.router.navigate(['/profile']);
    };
    ProfileComponent.prototype.coworkPaging = function (pageEvent) {
        this.coworkPagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.coworkPagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
        this.router.navigate(['/profile']);
    };
    ProfileComponent.prototype.acceptReq = function (cr) {
        var _this = this;
        if (!confirm('수락하시겠습니까?'))
            return;
        this.gameService.acceptCoWorkReq(cr, true).subscribe(function (result) {
            if (result.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['수락되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [result.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    ProfileComponent.prototype.rejectReq = function (cr) {
        var _this = this;
        if (!confirm('거절하시겠습니까?'))
            return;
        this.gameService.acceptCoWorkReq(cr, false).subscribe(function (result) {
            if (result.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['거절되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [result.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    ProfileComponent.prototype.removeTemp = function (_id) {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.gameService.removeTemp(_id).subscribe(function (result) {
                if (result.success) {
                    _this.flashMessage.showFlashMessage({
                        messages: ['삭제되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    _this.router.navigate(['/profile']);
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
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_func_service__WEBPACK_IMPORTED_MODULE_3__["FuncService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>회원가입</h4><hr/><br/><br/>\r\n\r\n      <form (submit)=\"onRegisterSubmit()\">\r\n        <div style=\"width: 100%; text-align: center;\">\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"아이디\" type=\"text\" name=\"userid\" [(ngModel)]=\"userid\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"비밀번호\" type=\"password\" name=\"pw\" [(ngModel)]=\"pw\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"비밀번호 확인\" type=\"password\" name=\"pwchk\" [(ngModel)]=\"pwchk\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"닉네임\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"이메일\" type=\"text\" name=\"email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('email')\">\r\n              이메일을 입력해주세요.\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <mat-form-field class=\"input-element\">\r\n            <input matInput placeholder=\"한 줄 소개\" type=\"text\" name=\"introduction\" [(ngModel)]=\"introduction\">\r\n          </mat-form-field>\r\n          <br/><br/>\r\n          <br/>\r\n          <button mat-raised-button type=\"submit\" class=\"input-element\" color=\"primary\">회원가입</button>\r\n          <br/><br/><br/><hr/>\r\n          <!-- 여기에다가 뭔가 알려둘 사항 같은 걸 써두면 됨 -->\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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

/***/ "./src/app/components/sub/sub.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/sub/sub.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViL3N1Yi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sub/sub.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/sub/sub.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"authService.loggedIn()\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n\r\n      <h4>즐겨찾는 게시판</h4><hr/><br/>\r\n\r\n      <div *ngFor=\"let bookmark of bkMap | keyvalue\">\r\n        <h5 style=\"display: inline;\">{{bookmark?.key}}</h5><hr/>\r\n\r\n        <div style=\"padding-left: 3%; padding-right: 3%;\">\r\n          <div class=\"row\" *ngFor=\"let arr of bookmark?.value\">\r\n            <div class=\"col-sm md-auto grid-cell\" *ngFor=\"let val of arr\">\r\n              <a [routerLink]=\"['/board/' + val?.url + '/list']\">{{val.title}}</a>\r\n              <span style=\"float: right; cursor: pointer;\" (click)=\"remove(val)\">X</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <br/><br/><br/>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n\r\n      <div *ngIf=\"user\">\r\n        <div *ngFor=\"let sub of subs | keyvalue\">\r\n          <h5 style=\"display: inline;\">{{sub?.key}}</h5><hr/>\r\n\r\n          <div style=\"padding-left: 3%; padding-right: 3%;\">\r\n            <div class=\"row\" *ngFor=\"let arr of sub?.value\">\r\n              <div class=\"col-sm md-auto grid-cell\" *ngFor=\"let val of arr\">\r\n                <a [routerLink]=\"['/board/' + val?.url + '/list']\">{{val.title}}</a>\r\n                <span *ngIf=\"isInMyBookmark(val?.url)\" style=\"float: right; cursor: pointer;\" (click)=\"remove(val)\">X</span>\r\n                <span *ngIf=\"!isInMyBookmark(val?.url)\" style=\"float: right; cursor: pointer;\" (click)=\"add(val?.url)\">+</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <br/><br/><br/>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!authService.loggedIn()\">\r\n        <div *ngFor=\"let sub of subs | keyvalue\">\r\n          <h5 style=\"display: inline;\">{{sub?.key}}</h5><hr/>\r\n\r\n          <div style=\"padding-left: 3%; padding-right: 3%;\">\r\n            <div class=\"row\" *ngFor=\"let arr of sub?.value\">\r\n              <div class=\"col-sm md-auto grid-cell\" *ngFor=\"let val of arr\">\r\n                <a [routerLink]=\"['/board/' + val?.url + '/list']\">{{val.title}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <br/><br/><br/>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/sub/sub.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/sub/sub.component.ts ***!
  \*************************************************/
/*! exports provided: SubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubComponent", function() { return SubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubComponent = /** @class */ (function () {
    function SubComponent(funcService, boardService, authService, router, flashMessage) {
        var _this = this;
        this.funcService = funcService;
        this.boardService = boardService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.user = undefined;
        this.bkMap = undefined;
        this.funcService.setTitle('서브게시판 목록');
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    SubComponent.prototype.mapInput = function (data, map) {
        var first = data.title.substring(0, 1).toUpperCase();
        // alphabet (A~Z)
        for (var i = 65; i <= 90; i++) {
            var capital = String.fromCharCode(i);
            if (first == capital) {
                this.arrInput(map, capital, data);
                return;
            }
        }
        // 한글 (가~하)
        for (var i = 0; i < 19; i++) {
            var fcc = i * 588 + 44032;
            var start = String.fromCharCode(fcc);
            var end = String.fromCharCode(fcc + 587);
            var regex = new RegExp('^[' + start + '-' + end + ']');
            if (regex.test(first)) {
                this.arrInput(map, start, data);
                return;
            }
        }
        // number (0~9)
        for (var i = 0; i <= 9; i++) {
            var num = String(i);
            if (first == num) {
                this.arrInput(map, num, data);
                return;
            }
        }
        // etc.
        this.arrInput(map, 'etc', data);
    };
    SubComponent.prototype.arrInput = function (map, key, data) {
        if (map.get(key)) {
            if (map.get(key)[map.get(key).length - 1].length < 3) {
                map.get(key)[map.get(key).length - 1].push(data);
            }
            else {
                map.get(key).push([data]);
            }
        }
        else {
            map.set(key, [[data]]);
        }
    };
    SubComponent.prototype.isInMyBookmark = function (url) {
        for (var _i = 0, _a = this.user.bookmark; _i < _a.length; _i++) {
            var bookmark = _a[_i];
            if (url == bookmark.url) {
                return true;
            }
        }
        return false;
    };
    SubComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    SubComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    SubComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
                _this.bkMap = new Map();
                for (var _i = 0, _a = _this.user.bookmark; _i < _a.length; _i++) {
                    var bk = _a[_i];
                    _this.mapInput(bk, _this.bkMap);
                }
            });
        }
        this.boardService.takeAllBoards().subscribe(function (data) {
            _this.subs = new Map();
            for (var _i = 0, _a = data.subs; _i < _a.length; _i++) {
                var s = _a[_i];
                _this.mapInput(s, _this.subs);
            }
        });
    };
    SubComponent.prototype.remove = function (bk) {
        var _this = this;
        if (!confirm('즐겨찾는 게시판에서 지우시겠습니까?'))
            return;
        this.boardService.removeBookmark(bk).subscribe(function (result) {
            if (result.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['삭제되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                _this.router.navigate(['/sub']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [result.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    SubComponent.prototype.add = function (type) {
        var _this = this;
        this.boardService.bookmark(type).subscribe(function (result) {
            if (result.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['등록되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                _this.router.navigate(['/sub']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [result.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    SubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub',
            template: __webpack_require__(/*! ./sub.component.html */ "./src/app/components/sub/sub.component.html"),
            styles: [__webpack_require__(/*! ./sub.component.css */ "./src/app/components/sub/sub.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_2__["FuncService"],
            _services_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"]])
    ], SubComponent);
    return SubComponent;
}());



/***/ }),

/***/ "./src/app/components/temp/temp.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/temp/temp.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcC90ZW1wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/temp/temp.component.dialog.html":
/*!************************************************************!*\
  !*** ./src/app/components/temp/temp.component.dialog.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\r\n<div mat-dialog-content>\r\n  <p>제목을 입력해주세요.</p>\r\n  <mat-form-field style=\"width: 100%;\">\r\n    <input matInput [(ngModel)]=\"data.text\" #it placeholder=\"제목\" (click)=\"it.select()\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onClose()\">닫기</button>\r\n  <button mat-button [mat-dialog-close]=\"data.text\" cdkFocusInitial>확인</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/temp/temp.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/temp/temp.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\" #title>{{temp?.title}}</h4>\r\n      <span style=\"float: right; text-align: right; font-size: 80%;\">\r\n        제작자 : <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(creator?.userid)\">{{creator?.nickname}}</span><br/>\r\n        <span *ngIf=\"coworkers?.length > 0\">\r\n          공동제작자 :\r\n          <span *ngFor=\"let coworker of coworkers\" class=\"toProfile\" (click)=\"funcService.openInfoWindow(coworker?.userid)\"> {{coworker?.nickname}}</span>\r\n        </span>\r\n        <span *ngIf=\"coworkers?.length == 0\">{{temp?.savedate}}</span>\r\n      </span>\r\n      <hr/><br/><br/>\r\n      \r\n      <mat-accordion>\r\n        <mat-expansion-panel style=\"width: 95%; margin: auto;\" *ngFor=\"let block of history\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              {{block?.savedate}}\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              {{block?.moves}}개의 행동 추가됨\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n\r\n          <p>\r\n            <b class=\"toProfile\" (click)=\"funcService.openInfoWindow(coworkerMap?.get(block?.saveby)?.userid)\">{{coworkerMap?.get(block?.saveby)?.nickname}}</b> 님에 의해 수정됨.\r\n          </p>\r\n          <button mat-button (click)=\"viewBlock(block?.num)\">블록 보기</button>\r\n          <button mat-button color=\"primary\" (click)=\"versionRollBack(block?.num)\">되돌리기</button>\r\n        </mat-expansion-panel>\r\n        \r\n      </mat-accordion>\r\n      <br/><br/>\r\n      <div *ngIf=\"temp?.from || temp?.added?.length > 0\" class=\"original-section\">\r\n        <p *ngIf=\"temp?.from\">\r\n          이 게임은 <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(temp?.from?.userid)\">{{temp?.from?.nickname}}</span> 님의 <a class=\"original-added-title\" [routerLink]=\"['/game/' + temp?.from?.game]\">{{temp?.from?.title}}</a> 으로부터 참조되었습니다.\r\n        </p>\r\n        <p *ngIf=\"temp?.added?.length > 0\">\r\n          덧붙여진 게임 :<span *ngFor=\"let added of temp?.added\"><a class=\"original-added-title\" [routerLink]=\"['/game/' + added?.game]\"> {{added?.title}}</a> (<span class=\"toProfile\" (click)=\"funcService.openInfoWindow(added?.userid)\">{{added?.nickname}}</span>)</span>\r\n        </p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"about\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #about>\r\n    <button mat-menu-item *ngIf=\"user?._id == creator?._id\" (click)=\"modifyTitle(title)\">\r\n      <span>제목 수정</span>\r\n    </button>\r\n    <button mat-menu-item *ngIf=\"user?._id == creator?._id\" (click)=\"remove()\">\r\n      <span>삭제</span>\r\n    </button>\r\n  </mat-menu>\r\n</section>\r\n\r\n<section *ngIf=\"user?._id == creator?._id\" class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4 style=\"display: inline;\">공동제작자 추가</h4>\r\n      <hr/><br/><br/>\r\n      \r\n      <mat-form-field appearance=\"outline\" style=\"margin: auto; width: 98%;\">\r\n        <mat-label>검색</mat-label>\r\n        <input matInput placeholder=\"아이디 혹은 닉네임을 입력해주세요.\" (input)=\"onSearchChange($event.target.value)\">\r\n        <mat-icon matSuffix>search</mat-icon>\r\n      </mat-form-field>\r\n\r\n      <br/><br/>\r\n\r\n      <table class=\"mdl-data-table mdl-js-data-table\" style=\"margin: auto; width: 98%;\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">아이디</th>\r\n            <th class=\"mdl-data-table__cell--non-numeric\">닉네임</th>\r\n            <th>요청</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let val of users | slice:pagingFrom:pagingTo; index as i\">\r\n            <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <span class=\"toProfile\" (click)=\"funcService.openInfoWindow(val?.userid)\">{{val?.userid}}</span>\r\n            </td>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">{{val?.nickname}}</td>\r\n            <td>\r\n              <button mat-button color=\"primary\" (click)=\"sendRequest(val?._id, i)\">요청 보내기</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table><br/>\r\n\r\n      <mat-paginator [length]=\"temps?.length\" [pageSize]=\"pagingSize\" (page)=\"paging($event)\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

/***/ }),

/***/ "./src/app/components/temp/temp.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/temp/temp.component.ts ***!
  \***************************************************/
/*! exports provided: TempComponent, TempDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempComponent", function() { return TempComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempDialog", function() { return TempDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_func_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TempComponent = /** @class */ (function () {
    function TempComponent(funcService, gameService, authService, route, router, flashMessage, dialog) {
        this.funcService = funcService;
        this.gameService = gameService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
        this.count = 0;
        this.users = [];
        this.pagingSize = 25;
        this.pagingFrom = 0;
        this.pagingTo = this.pagingSize;
    }
    TempComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.num = this.route.snapshot.paramMap.get('num');
        this.gameService.takeMyOneTemp(this.num).subscribe(function (result) {
            if (result.deny) {
                _this.router.navigate(['/no-page']);
            }
            else {
                _this.temp = result.temp;
                _this.creator = result.creator;
                _this.coworkers = result.coworkers;
                _this.coworkerMap = new Map();
                _this.history = [];
                _this.coworkerMap.set(_this.creator._id, _this.creator);
                for (var _i = 0, _a = _this.coworkers; _i < _a.length; _i++) {
                    var coworker = _a[_i];
                    _this.coworkerMap.set(coworker._id, coworker);
                }
                for (var i = 0; i < _this.temp.block.length; i++) {
                    var block = _this.temp.block[i];
                    if (block.saveby) {
                        block.num = i + 1;
                        _this.history.push(block);
                    }
                }
                _this.history.reverse();
                _this.funcService.setTitle(_this.temp.title + ' :: 작업중');
                _this.authService.getProfile().subscribe(function (profile) {
                    _this.user = profile.user;
                });
            }
        });
    };
    TempComponent.prototype.viewBlock = function (i) {
        this.funcService.popUp(this.funcService.ServerAddress + '/modals/view-temp-block?game=' + this.num + '&recent=' + i, 1000, 600);
    };
    TempComponent.prototype.versionRollBack = function (i) {
        var _this = this;
        if (!confirm('이 버전으로 되돌리시겠습니까?'))
            return;
        this.gameService.versionRollBack(this.num, i).subscribe(function (result) {
            if (result.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['롤백되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [result.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    TempComponent.prototype.modifyTitle = function (title) {
        var _this = this;
        var dialogRef = this.dialog.open(TempDialog, {
            width: '300px',
            data: {
                title: this.temp.title,
                text: ''
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.gameService.modifyTitle(_this.temp._id, data).subscribe(function (result) {
                    if (result.success) {
                        title.innerHTML = data;
                        _this.flashMessage.showFlashMessage({
                            messages: ['수정되었습니다.'],
                            type: 'success',
                            timeout: 2000
                        });
                    }
                    else {
                        _this.flashMessage.showFlashMessage({
                            messages: ['수정 오류'],
                            type: 'danger',
                            timeout: 3000
                        });
                    }
                });
            }
        });
    };
    TempComponent.prototype.remove = function () {
        var _this = this;
        if (confirm('삭제하시겠습니까?')) {
            this.gameService.removeTemp(this.temp._id).subscribe(function (result) {
                if (result.success) {
                    _this.flashMessage.showFlashMessage({
                        messages: ['삭제되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    _this.router.navigate(['/profile']);
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
    TempComponent.prototype.onSearchChange = function (text) {
        var _this = this;
        if (text == '') {
            this.users = [];
            return;
        }
        else if (text.indexOf(' ') != -1) {
            this.users = [];
            return;
        }
        this.authService.findUserByIdOrNickname(text, this.temp._id).subscribe(function (data) {
            _this.users = data.users;
        });
    };
    TempComponent.prototype.sendRequest = function (_id, idx) {
        var _this = this;
        this.authService.sendRequest(_id, this.temp.title, this.temp._id).subscribe(function (result) {
            if (result.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['요청되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                _this.users.splice(idx, 1);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [result.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    TempComponent.prototype.paging = function (pageEvent) {
        this.pagingFrom = pageEvent.pageIndex * this.pagingSize;
        this.pagingTo = (pageEvent.pageIndex + 1) * this.pagingSize;
    };
    TempComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temp',
            template: __webpack_require__(/*! ./temp.component.html */ "./src/app/components/temp/temp.component.html"),
            styles: [__webpack_require__(/*! ./temp.component.css */ "./src/app/components/temp/temp.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_1__["FuncService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], TempComponent);
    return TempComponent;
}());

var TempDialog = /** @class */ (function () {
    function TempDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TempDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    TempDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temp-dialog',
            template: __webpack_require__(/*! ./temp.component.dialog.html */ "./src/app/components/temp/temp.component.dialog.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
    ], TempDialog);
    return TempDialog;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/test/test.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <h4>HELLO</h4>\r\n      <hr/>\r\n      \r\n      <app-ngx-editor [config]=\"editorConfig\" [(ngModel)]=\"content\"></app-ngx-editor>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      \r\n      <button mat-button (click)=\"what()\">click</button>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section></section>\r\n"

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
        this.funcService.setTitle('TEST!!!!');
    }
    TestComponent.prototype.ngOnInit = function () {
        this.editorConfig = {
            placeholder: '',
            spellcheck: false,
            height: '500',
            minHeight: '500',
            imageEndPoint: this.funcService.ServerAddress + '/tests/image'
        };
    };
    TestComponent.prototype.what = function () {
        alert(this.content);
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

module.exports = ".previewButton {\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sL3Rvb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2wvdG9vbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXdCdXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/tool/tool.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/tool/tool.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"iframe | safe\"></div>\r\n\r\n<!-- game preview section -->\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n\r\n      <h4 style=\"display: inline;\">미리보기</h4>\r\n      <button mat-button class=\"previewButton\"\r\n        (click)=\"gameOn()\"\r\n        matTooltip=\"게임 적용\"\r\n        [matTooltipPosition]=\"tooltipPosition\"\r\n        [matTooltipShowDelay]=\"showDelay\">\r\n        <mat-icon>play_circle_outline</mat-icon>\r\n      </button>\r\n      <button mat-button class=\"previewButton\"\r\n        (click)=\"playService.replay()\"\r\n        matTooltip=\"리플레이\"\r\n        [matTooltipPosition]=\"tooltipPosition\"\r\n        [matTooltipShowDelay]=\"showDelay\">\r\n        <mat-icon>autorenew</mat-icon>\r\n      </button>\r\n      <hr/>\r\n\r\n      <!-- ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ENGINE (GAME) ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ -->\r\n      <div class=\"engine-layout\" *ngIf=\"set\">\r\n\r\n        <!-- PHASE-CONTENT -->\r\n        <div class=\"stage-content\" [innerHTML]=\"playService?.phase?.content | safe\"></div>\r\n\r\n        <!-- CHOICES -->\r\n        <table style=\"width: 100%;\" *ngIf=\"!playService.end\">\r\n          <tbody>\r\n            <tr *ngFor=\"let choice of playService?.phase?.choice\" (click)=\"playService.select(choice?.change_set, choice?.stage_to)\" style=\"height: 50px;\">\r\n              <td class=\"stage-choice btn--stripe\">{{choice?.content}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <!-- END -->\r\n        <table *ngIf=\"playService.end\" class=\"mdl-data-table mdl-js-data-table\" style=\"width: 100%;\">\r\n          <tr>\r\n            <td class=\"mdl-data-table__cell--non-numeric\">THE END.</td>\r\n            <td>최종점수 : {{playService?.score}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\"><button mat-button (click)=\"playService.replay()\" style=\"float: right;\">다시하기</button></td>\r\n          </tr>\r\n        </table>\r\n\r\n        <!-- SHOW PARAMETERS -->\r\n        <hr/>\r\n        <div class=\"row align-items-center\" *ngFor=\"let arr of playService?.paramArr\">\r\n          <div class=\"col-sm grid-cell\" *ngFor=\"let val of arr\">\r\n            <span *ngIf=\"playService.visible(val?.value?.visible)\">\r\n              {{val?.key}}<span>: </span>{{val?.value?.value}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ ENGINE (GAME) ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ -->\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n  <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n    <div class=\"mdl-card__supporting-text\">\r\n      \r\n      <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\r\n        <mat-label>주석</mat-label>\r\n        <textarea matInput placeholder=\"\" rows=\"3\" #content></textarea>\r\n      </mat-form-field>\r\n      <table style=\"width: 100%;\">\r\n        <tr>\r\n          <td style=\"width: 30%;\">\r\n            <mat-form-field style=\"width: 80%;\" appearance=\"legacy\">\r\n              <mat-label>버전</mat-label>\r\n              <input matInput #version>\r\n              <mat-hint>형식: 1.0, 2.3, 0.1-beta 등</mat-hint>\r\n            </mat-form-field>\r\n          </td>\r\n          <td style=\"width: 70%;\">\r\n            <button mat-raised-button color=\"primary\" style=\"width: 100%;\" (click)=\"onWriteGame(content, version)\">작성</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_play_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/play.service */ "./src/app/services/play.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_component_can_deactivate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../guards/component-can-deactivate */ "./src/app/guards/component-can-deactivate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ToolComponent = /** @class */ (function (_super) {
    __extends(ToolComponent, _super);
    function ToolComponent(funcService, gameService, playService, authService, router) {
        var _this = _super.call(this) || this;
        _this.funcService = funcService;
        _this.gameService = gameService;
        _this.playService = playService;
        _this.authService = authService;
        _this.router = router;
        _this.tooltipPosition = 'above';
        _this.showDelay = 500;
        _this.set = false;
        _this.funcService.setTitle('게임 만들기');
        return _this;
    }
    ToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            if (!profile.user.clean) {
                _this.router.navigate(['/no-page']);
                return false;
            }
            _this.authService.getCode(profile.user.userid).subscribe(function (data) {
                _this.iframe = '<iframe src="'
                    + _this.funcService.ServerAddress
                    + '/games/tool?uid='
                    + profile.user._id
                    + '&c='
                    + data.code
                    + '" style="width: 100%; height: 1000px;">loading...</iframe>';
            });
        });
    };
    ToolComponent.prototype.gameOn = function () {
        var _this = this;
        this.gameService.getSessionGame().subscribe(function (data) {
            if (data.success) {
                _this.set = true;
                _this.playService.gameSet(data.data);
            }
            else {
                alert(data.msg);
            }
        });
    };
    ToolComponent.prototype.onWriteGame = function (content, version) {
        var _this = this;
        if (version.value == undefined || version.value == '') {
            alert('버전을 입력해주세요.');
            version.focus();
            return;
        }
        if (!confirm('저장하시겠습니까?'))
            return;
        this.gameService.writeGame(content.value, version.value).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/game/' + data.num]);
            }
            else {
                alert('게임 생성 오류\n' + data.msg);
            }
        });
    };
    ToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tool',
            template: __webpack_require__(/*! ./tool.component.html */ "./src/app/components/tool/tool.component.html"),
            styles: [__webpack_require__(/*! ./tool.component.css */ "./src/app/components/tool/tool.component.css")]
        }),
        __metadata("design:paramtypes", [_services_func_service__WEBPACK_IMPORTED_MODULE_1__["FuncService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _services_play_service__WEBPACK_IMPORTED_MODULE_3__["PlayService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ToolComponent);
    return ToolComponent;
}(_guards_component_can_deactivate__WEBPACK_IMPORTED_MODULE_6__["ComponentCanDeactivate"]));



/***/ }),

/***/ "./src/app/components/write/write.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/write/write.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd3JpdGUvd3JpdGUuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
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
    function WriteComponent(funcService, route, flashMessage, router, boardService, authService) {
        var _this = this;
        this.funcService = funcService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.router = router;
        this.boardService = boardService;
        this.authService = authService;
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
        this.boardService.checkBoardExists(this.type).subscribe(function (result) {
            if (!result.exist) {
                _this.router.navigate(['/no-page']);
            }
        });
    }
    WriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            if (!profile.user.clean) {
                _this.router.navigate(['/no-page']);
                return false;
            }
            if (_this.type == 'notice' && profile.user.userid != 'admin') {
                _this.router.navigate(['/no-page']);
                return false;
            }
        });
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
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
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

/***/ "./src/app/guards/component-can-deactivate.ts":
/*!****************************************************!*\
  !*** ./src/app/guards/component-can-deactivate.ts ***!
  \****************************************************/
/*! exports provided: ComponentCanDeactivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCanDeactivate", function() { return ComponentCanDeactivate; });
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

var ComponentCanDeactivate = /** @class */ (function () {
    function ComponentCanDeactivate() {
    }
    ComponentCanDeactivate.prototype.canDeactivate = function () {
        return false;
    };
    ComponentCanDeactivate.prototype.unloadNotification = function ($event) {
        if (!this.canDeactivate()) {
            $event.returnValue = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window: beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ComponentCanDeactivate.prototype, "unloadNotification", null);
    return ComponentCanDeactivate;
}());



/***/ }),

/***/ "./src/app/guards/deactivate.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/deactivate.guard.ts ***!
  \********************************************/
/*! exports provided: DeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateGuard", function() { return DeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeactivateGuard = /** @class */ (function () {
    function DeactivateGuard() {
    }
    DeactivateGuard.prototype.canDeactivate = function (component) {
        if (!component.canDeactivate())
            return confirm('나가시겠습니까?');
        return true;
    };
    DeactivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DeactivateGuard);
    return DeactivateGuard;
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
        return this.http.post(this.funcService.ServerAddress + '/users/get-all-users', {}, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.sendRequest = function (_id, title, tempId) {
        var formData = {
            _id: _id,
            title: title,
            tempId: tempId
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/users/send-request', formData, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.findUserByIdOrNickname = function (text, tempId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/users/find-user-by-id-or-nickname', { text: text, tempId: tempId }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getIdFromUserid = function (userid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/users/get-id-from-userid', { userid: userid }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getCode = function (userid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/modals/get-code', { userid: userid }, { headers: headers })
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
        return this.http.get(this.funcService.ServerAddress + '/boards/take-one-post?num=' + num + '&loggedIn=' + loggedIn, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.takeAllPosts = function (type) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/boards/take-all-posts?type=' + type, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.takeAllBoards = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/boards/take-all-boards', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.takeSearchedPosts = function (category, type, text) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/boards/take-searched-posts?category=' + category + '&type=' + type + '&text=' + text, { headers: headers })
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
        return this.http.post(this.funcService.ServerAddress + '/boards/write-comment', cmt, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.replyComment = function (cmt) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/reply-comment', cmt, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.removePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/remove-post', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.removeComment = function (postNum, cmtNum) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/remove-comment', { postNum: postNum, cmtNum: cmtNum }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.removeReply = function (postNum, cmtNum, reply) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/remove-reply', { postNum: postNum, cmtNum: cmtNum, reply: reply }, { headers: headers })
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
    BoardService.prototype.checkBoardExists = function (type) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/boards/check-board-exists?type=' + type, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.getSub = function (type) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/boards/sub?url=' + type, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.bookmark = function (type) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/bookmark', { type: type }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BoardService.prototype.removeBookmark = function (bookmark) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/boards/remove-bookmark', { url: bookmark.url, title: bookmark.title }, { headers: headers })
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

/***/ "./src/app/services/corvee.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/corvee.service.ts ***!
  \********************************************/
/*! exports provided: CorveeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorveeService", function() { return CorveeService; });
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





var CorveeService = /** @class */ (function () {
    function CorveeService(http, funcService, authService) {
        this.http = http;
        this.funcService = funcService;
        this.authService = authService;
    }
    CorveeService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    CorveeService.prototype.takeOnePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var loggedIn = this.authService.loggedIn() ? 'yes' : 'no';
        return this.http.get(this.funcService.ServerAddress + '/corvees/take-one-post?num=' + num + '&loggedIn=' + loggedIn, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.takeAllPosts = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/corvees/take-all-posts', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.takeSearchedPosts = function (category, text) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/corvees/take-searched-posts?category=' + category + '&text=' + text, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.takeMyTemps = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/take-my-temps', {}, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.takeTempUsers = function (coworkers) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/take-temp-users', { coworkers: coworkers }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.writePost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/write', post, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.writeComment = function (cmt) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/write-comment', cmt, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.replyComment = function (cmt) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/reply-comment', cmt, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.removePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/remove-post', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.removeComment = function (postNum, cmtNum) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/remove-comment', { postNum: postNum, cmtNum: cmtNum }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.removeReply = function (postNum, cmtNum, reply) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/remove-reply', { postNum: postNum, cmtNum: cmtNum, reply: reply }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService.prototype.recommend = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/corvees/recommend', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CorveeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _func_service__WEBPACK_IMPORTED_MODULE_3__["FuncService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CorveeService);
    return CorveeService;
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
        // public ServerAddress: String = "http://13.125.172.123:3000";
        this.ServerAddress = "http://localhost:3000";
        this.bgCounts = 10;
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
    FuncService.prototype.popUp = function (url, width, height) {
        var option = 'width=' + width + ', height=' + height + ', left=300, top=100, scrollbars=yes, toolbars=no, location=no';
        _window().open(url, '', option);
    };
    FuncService.prototype.openWindow = function (url) {
        this.popUp(url, 500, 600);
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
        this.http.post(this.ServerAddress + '/modals/get-code', { userid: userid }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            var code = data.code;
            _this.openWindow(url + '&c=' + code);
        });
    };
    FuncService.prototype.getRandomSVGBackground = function () {
        return Math.floor(Math.random() * this.bgCounts);
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
    GameService.prototype.writeGame = function (content, version) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/write', { content: content, version: version }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.getSessionGame = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/games/session-game', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeOnePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var loggedIn = this.authService.loggedIn() ? 'yes' : 'no';
        return this.http.get(this.funcService.ServerAddress + '/games/take-one-post?num=' + num + '&loggedIn=' + loggedIn, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeAllPosts = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/games/take-all-posts', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeRequestedPosts = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/games/take-requested-posts', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeOneTemp = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/take-one-temp', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeMyOneTemp = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/take-my-one-temp', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeSearchedPosts = function (category, text) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/games/take-searched-posts?category=' + category + '&text=' + text, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.writeComment = function (cmt) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/write-comment', cmt, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.replyComment = function (cmt) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/reply-comment', cmt, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.removePost = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/remove-post', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.removeComment = function (postNum, cmtNum) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/remove-comment', { postNum: postNum, cmtNum: cmtNum }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.removeReply = function (postNum, cmtNum, reply) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/remove-reply', { postNum: postNum, cmtNum: cmtNum, reply: reply }, { headers: headers })
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
    GameService.prototype.requestBoard = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/request-board', { num: num }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.acceptBoard = function (num, title, userid) {
        var formData = {
            num: num,
            accept: true,
            title: title,
            userid: userid
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/accept-board', formData, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.rejectBoard = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/accept-board', { num: num, accept: false }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.toMyTempList = function (num, title) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/to-my-temp-list', { num: num, title: title }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.takeMyTemps = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/take-my-temps', {}, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.removeTemp = function (_id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/remove-temp', { _id: _id }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.versionRollBack = function (num, length) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/version-rollback', { num: num, length: length }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.acceptCoWorkReq = function (coworkRequest, accept) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/accept-co-work-req', { accept: accept, coworkRequest: coworkRequest }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.modifyTitle = function (num, title) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/modify-title', { num: num, title: title }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GameService.prototype.setTopPlayer = function (num, score) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.funcService.ServerAddress + '/games/done', { score: score, num: num }, { headers: headers })
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

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _func_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./func.service */ "./src/app/services/func.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = /** @class */ (function () {
    function HomeService(http, funcService) {
        this.http = http;
        this.funcService = funcService;
        this.rows = [
            {
                title: 'THE FIRST TITLE',
                contents: [
                    '이렇게 내용을',
                    '써내려가면 되는 형식'
                ]
            }, {
                title: 'THE SECOND TITLE',
                contents: [
                    '이렇게 내용을',
                    '써내려가면 되는 형식'
                ]
            }, {
                title: 'THE THIRD TITLE',
                contents: [
                    '이렇게 내용을',
                    '써내려가면 되는 형식 ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ'
                ]
            }
        ];
    }
    HomeService.prototype.takeBests = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/games/best', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HomeService.prototype.takeAddedSub = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/boards/home', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HomeService.prototype.lrControl = function (i) {
        return i % 2 == 0 ? 'text-right' : 'order-md-2';
    };
    HomeService.prototype.lrControlSmall = function (i) {
        return i % 2 == 0 ? '' : 'order-md-2';
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _func_service__WEBPACK_IMPORTED_MODULE_3__["FuncService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/play.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/play.service.ts ***!
  \******************************************/
/*! exports provided: PlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayService", function() { return PlayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _func_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./func.service */ "./src/app/services/func.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.service */ "./src/app/services/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlayService = /** @class */ (function () {
    function PlayService(http, funcService, authService, gameService) {
        this.http = http;
        this.funcService = funcService;
        this.authService = authService;
        this.gameService = gameService;
    }
    PlayService.prototype.gameSet = function (gameData) {
        this.num = undefined;
        this.count = 0;
        this.stageNum = 1;
        this.previousStageNum = this.stageNum;
        this.phaseNum = 1;
        this.end = false;
        this.paramMap = new Map();
        this.data = gameData;
        for (var _i = 0, _a = this.data.param; _i < _a.length; _i++) {
            var obj = _a[_i];
            // [{param1: {value: 0, visible: true}}, {param2: {value: 100, visible: false}}, ...]
            this.paramMap.set(obj.param_name, { value: obj.default, visible: obj.visible, type: obj.type });
        }
        this.paramArr = this.formatAsDoubleDimension();
        for (var _b = 0, _c = this.data.stage; _b < _c.length; _b++) {
            var stage = _c[_b];
            if (stage.stage_num > 0) {
                this.count++;
                if (stage.stage_num == 1)
                    this.phase = this.encodePhase(stage.phase[0]);
            }
        }
    };
    PlayService.prototype.numSet = function (num) {
        this.num = num;
    };
    PlayService.prototype.replay = function () {
        var temp = undefined;
        if (this.num)
            temp = this.num;
        this.gameSet(this.data);
        if (temp)
            this.num = temp;
    };
    PlayService.prototype.substituteParams = function (text) {
        if (typeof text == 'number')
            return text;
        this.paramMap.forEach(function (value, key) {
            text = text.split(key).join('this.paramMap.get("' + key + '").value');
        });
        return eval(text);
    };
    PlayService.prototype.checkNextStageCondition = function (condition) {
        this.paramMap.forEach(function (value, key) {
            condition = condition.split(key).join('this.paramMap.get("' + key + '").value');
        });
        var b = eval(condition);
        return b;
    };
    PlayService.prototype.changeParmaValueWithPrompt = function (key) {
        var changeValue = undefined;
        var type = this.paramMap.get(key).type == 'number' ? ' (숫자)' : '';
        do {
            changeValue = prompt("'" + key + "'의 값을 입력해주세요." + type, this.paramMap.get(key).value);
            if (this.paramMap.get(key).type == 'number') {
                if (!isNaN(parseInt(changeValue)))
                    changeValue = parseInt(changeValue);
            }
            else {
                if (changeValue == '')
                    changeValue = undefined;
            }
        } while (typeof changeValue != this.paramMap.get(key).type);
        var pv = this.paramMap.get(key);
        pv.value = changeValue;
        this.paramMap.delete(key);
        this.paramMap.set(key, pv);
    };
    PlayService.prototype.choiceIfState = function (state) {
        var change = false;
        this.paramMap.forEach(function (value, key) {
            state.if_slot = state.if_slot.split(key).join('this.paramMap.get("' + key + '").value');
            if (key == state.do_slot)
                change = true;
            else
                state.do_slot = state.do_slot.split(key).join('this.paramMap.get("' + key + '").value');
        });
        var b = eval(state.if_slot);
        if (b) {
            console.log(state.do_slot);
            if (change)
                this.changeParmaValueWithPrompt(state.do_slot);
            else
                eval(state.do_slot);
        }
        return b;
    };
    PlayService.prototype.getDone = function () {
        this.end = true;
        this.score = this.substituteParams(this.data.score);
        if (this.score == Infinity || this.score == -Infinity) {
            console.log('infinity');
        }
        if (this.authService.loggedIn() && this.num) {
            this.gameService.setTopPlayer(this.num, this.score).subscribe(function (result) { console.log(result); });
        }
    };
    PlayService.prototype.ending = function () {
        this.getDone();
        console.log('[[END]]');
        if (this.previousStageNum < 0)
            console.log('[[SELECTED ENDING: ' + this.previousStageNum + '-' + this.phaseNum + ']]');
        else
            console.log('[[SELECTED ENDING: ' + (this.stageNum - 1) + '-' + this.phaseNum + ']]');
    };
    PlayService.prototype.noCondition = function () {
        this.getDone();
        console.log('[[NO MATCHED CONDITION]]');
    };
    PlayService.prototype.getRandomNumber = function (n1, n2) {
        if (n1 < n2) {
            return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
        }
        else {
            return Math.floor(Math.random() * (n1 - n2 + 1)) + n2;
        }
    };
    PlayService.prototype.select = function (changeSet, stage_to) {
        // stage_num에 맞춰서 다음 스테이지 지정
        if (stage_to == 0)
            this.stageNum++;
        else
            this.stageNum = stage_to;
        // 선택지에 맞춰서 변수들 값 변화
        var flag = false;
        var elseState = undefined;
        for (var _i = 0, changeSet_1 = changeSet; _i < changeSet_1.length; _i++) {
            var val = changeSet_1[_i];
            var b = false;
            if (val.if_slot == '')
                elseState = val.do_slot;
            else
                b = this.choiceIfState(val);
            if (!flag)
                flag = b;
        }
        if (!flag && elseState) {
            this.choiceIfState({ if_slot: '1', do_slot: elseState });
        }
        // this is the end of the game
        if (this.stageNum > this.count) {
            this.ending();
            return true;
        }
        for (var _a = 0, _b = this.data.stage; _a < _b.length; _a++) {
            var stage = _b[_a];
            if (stage.stage_num == this.stageNum) {
                for (var _c = 0, _d = stage.phase; _c < _d.length; _c++) {
                    var phase = _d[_c];
                    if (this.checkNextStageCondition(phase.condition)) {
                        this.phase = this.encodePhase(phase);
                        this.phaseNum = phase.phase_num;
                        if (this.stageNum < 0) {
                            this.previousStageNum = this.stageNum;
                            this.stageNum = this.count;
                        }
                        return true;
                    }
                }
                // in this part, there is no condition to be fit to an any param
                this.noCondition();
                return false;
            }
        }
        // ends with no matched stage number
        this.noCondition();
    };
    PlayService.prototype.visible = function (text) {
        this.paramMap.forEach(function (value, key) {
            text = text.split(key).join('this.paramMap.get("' + key + '").value');
        });
        return eval(text);
    };
    PlayService.prototype.formatAsDoubleDimension = function () {
        var arr = new Array();
        arr.push([]);
        this.paramMap.forEach(function (value, key) {
            if (value.visible) {
                if (arr[arr.length - 1].length < 3) {
                    arr[arr.length - 1].push({ key: key, value: value });
                }
                else {
                    arr.push([{ key: key, value: value }]);
                }
            }
        });
        return arr;
    };
    PlayService.prototype.encodePhase = function (phase) {
        var text = phase.content;
        this.paramMap.forEach(function (value, key) {
            var regex = new RegExp('\\{\\{' + key + '\\}\\}', 'g');
            text = text.replace(regex, value);
        });
        phase.content = text;
        return phase;
    };
    PlayService.prototype.takeOneGame = function (num) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.funcService.ServerAddress + '/games/take-one-game?num=' + num, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PlayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _func_service__WEBPACK_IMPORTED_MODULE_3__["FuncService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]])
    ], PlayService);
    return PlayService;
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

module.exports = __webpack_require__(/*! C:\Users\Hoon\PJH\others\web\rwrite\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map