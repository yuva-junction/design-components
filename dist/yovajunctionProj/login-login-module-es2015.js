(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <nav class=\"navbar sticky-top navbar-dark bd-navbar\">\r\n        <div>\r\n          <label class=\"rpay-lbl\">RpayR</label>\r\n        </div>\r\n      </nav>\r\n    <div align=\"center\" class=\"m-top-div\">\r\n        <div class=\"title-font-style font-w-400\">\r\n            Let's start with <span class=\"rpay-lbl rpay-lbl-font\">RpayR</span> account\r\n         </div>\r\n         <div class=\"title-font-style font-w-500\">\r\n            Enter Mobile Number\r\n        </div>\r\n        <div>\r\n            <div class=\"div-p-t2\">\r\n                <input class=\"input-style\" type=\"text\" placeholder=\"Mobile #\">\r\n            </div>\r\n            <div class=\"div-p-t2\">\r\n                <!-- <input class=\"input-style\" type=\"text\" placeholder=\"Tenant Aadhar*\"> -->\r\n                <label for=\"\" class=\"font-lg\">Send OTP</label>\r\n            </div>\r\n            <div class=\"div-p-t2\">\r\n                <input class=\"input-style\" type=\"text\" placeholder=\"Password/OTP\">\r\n            </div>\r\n            <div class=\"div-p-t2\">\r\n                <button pButton type=\"button\" label=\"Login\" class=\"ui-button-info btn-login\" (click)=\"login()\"></button>\r\n                <div class=\"m-top-1\">\r\n                    <a href=\"\" class=\"a-font\">Forgot Password/Login issue</a>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <hr>\r\n            </div>\r\n            <div>\r\n                <div class=\"help-style\">\r\n                    Need help?\r\n                </div>\r\n                <div class=\"helpline-style\">\r\n                    <i class=\"fa fa-phone f-style\" aria-hidden=\"true\"></i>  <u>1800 000 000</u>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div style=\"background-color: white !important;\">\r\n    <hr>\r\n</div>\r\n<div style=\"background-color: white !important;\">\r\n    <i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> yuvajunction Services PVT Ltd\r\n</div>\r\n<nav class=\"navbar sticky-bottom fixed-bottom navbar-dark bd-navbar\" style=\"background-color: white !important;\">\r\n    <div class=\"w20\"></div>\r\n    <div class=\"heder-font heder-broder\">\r\n        Login\r\n    </div>\r\n    <div class=\"heder-font heder-broder\">\r\n        Profile\r\n    </div>\r\n    <div class=\"heder-font heder-broder\">\r\n        Payment\r\n    </div>\r\n    <div class=\"heder-font heder-broder\">\r\n        Payment\r\n    </div>\r\n    <div class=\"heder-font heder-broder\">\r\n        About\r\n    </div>\r\n    <div class=\"heder-font\">\r\n        Contact\r\n    </div>\r\n    <div class=\"w20\"></div>\r\n    <!-- </div> -->\r\n</nav>\r\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bd-navbar {\r\n    min-height: 3rem;\r\n    background-color:#f7f7f7;\r\n    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);\r\n}\r\n.bd-navbar .navbar-nav .nav-link.active {\r\n    font-weight: 600;\r\n}\r\n.m-top-div{\r\nmargin-top: 6%;\r\n}\r\n.rpay-lbl{\r\n  color: #cd722d;\r\n  font-size: 1.7em;\r\n  font-weight: 700;\r\n}\r\n.rpay-lbl-font{\r\n    font-size: 1em;\r\n  }\r\n.title-font-style{\r\n    text-align: center;\r\n    font-size: 1.7em;\r\n    color: #636363;\r\n  }\r\n.font-w-400{\r\n    font-weight: 400;\r\n  }\r\n.font-w-500{\r\n    font-weight: 500;\r\n    color: #636363;\r\n  }\r\n.f-style{\r\n    color: black;\r\n    padding-right: 1%;\r\n  }\r\n.input-style{\r\n    width: 30%;\r\n    height: 5em;\r\n    border: 1px solid;\r\n  }\r\n.div-p-t2{\r\n    padding-top: 2.5%;\r\n   }\r\n.font-lg{\r\n    font-weight: 600;\r\n    color: #1464f6;\r\n    font-style: initial;\r\n    font-size: 1.2em;\r\n   }\r\n.btn-login{\r\n       font-size: 1.2em !important;\r\n       font-weight: 500 !important;\r\n       width: 12%;\r\n       padding: 0.2%\r\n   }\r\n::-webkit-input-placeholder { \r\n    /* WebKit browsers */\r\n    color: #c3c3c1;\r\n    font-weight: 500;\r\n    padding-left: 1.3%;\r\n    font-size: 1.1em;\r\n    opacity:  1;\r\n  }\r\n.m-top-1{\r\n      margin-top: 1%;\r\n  }\r\n.a-font{\r\n    font-size: large;\r\n    font-weight: 400;\r\n    color: #1464f6;\r\n  }\r\nhr {\r\n    /* margin: 20px 0; */\r\n    border:0.1px solid black;\r\n    width: 95%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 1.5rem;\r\n}\r\n.help-style{\r\n    color: coral;\r\n    font-size: 1.6em;\r\n}\r\n.helpline-style{\r\n    font-weight: 400;\r\n    color: #1464f6;\r\n    font-size: 1.7em;\r\n}\r\n.heder-font{\r\n    font-weight: 200;\r\n}\r\n.heder-broder{\r\n  border-right: 2.3px solid #c8c8c8;\r\n  padding-right: 2%;\r\n  line-height: 11px;\r\n}\r\n.w20{\r\n    width: 20%;\r\n  }\r\n@media screen and (max-width: 480px) {\r\n  .btn-m-l{\r\n    margin-left: 27%;\r\n  }\r\n  .input-style{\r\n    width: 90%;\r\n    height: 3em;\r\n  }\r\n  .div-p-t2{\r\n    padding-top: 7%;\r\n   }\r\n   .btn-login{\r\n    width: 32%;\r\n    padding: 0.5%;\r\n}\r\n.heder-font{\r\n    font-size: 14px;\r\n}\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsd0VBQXdFO0FBQzVFO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLGNBQWM7RUFDaEI7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGlCQUFpQjtHQUNsQjtBQUNBO0lBQ0MsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCO0FBQ0E7T0FDSSwyQkFBMkI7T0FDM0IsMkJBQTJCO09BQzNCLFVBQVU7T0FDVjtHQUNKO0FBQ0E7SUFDQyxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtBQUNBO01BQ0ksY0FBYztFQUNsQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0FBRUY7SUFDSSxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLFVBQVU7RUFDWjtBQUNGO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7R0FDaEI7R0FDQTtJQUNDLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZC1uYXZiYXIge1xyXG4gICAgbWluLWhlaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLDAsMCwuMDUpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4xKTtcclxufVxyXG4uYmQtbmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubS10b3AtZGl2e1xyXG5tYXJnaW4tdG9wOiA2JTtcclxufVxyXG4ucnBheS1sYmx7XHJcbiAgY29sb3I6ICNjZDcyMmQ7XHJcbiAgZm9udC1zaXplOiAxLjdlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5ycGF5LWxibC1mb250e1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuLnRpdGxlLWZvbnQtc3R5bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgY29sb3I6ICM2MzYzNjM7XHJcbiAgfVxyXG4gIC5mb250LXctNDAwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmZvbnQtdy01MDB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM2MzYzNjM7XHJcbiAgfVxyXG4gIC5mLXN0eWxle1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgfVxyXG4gIC5pbnB1dC1zdHlsZXtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIH1cclxuICAuZGl2LXAtdDJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMi41JTtcclxuICAgfVxyXG4gICAuZm9udC1sZ3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzE0NjRmNjtcclxuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICB9XHJcbiAgIC5idG4tbG9naW57XHJcbiAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICB3aWR0aDogMTIlO1xyXG4gICAgICAgcGFkZGluZzogMC4yJVxyXG4gICB9XHJcbiAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IFxyXG4gICAgLyogV2ViS2l0IGJyb3dzZXJzICovXHJcbiAgICBjb2xvcjogI2MzYzNjMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMyU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgb3BhY2l0eTogIDE7XHJcbiAgfVxyXG4gIC5tLXRvcC0xe1xyXG4gICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcbiAgLmEtZm9udHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxNDY0ZjY7XHJcbiAgfVxyXG4gIFxyXG5ociB7XHJcbiAgICAvKiBtYXJnaW46IDIwcHggMDsgKi9cclxuICAgIGJvcmRlcjowLjFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG4uaGVscC1zdHlsZXtcclxuICAgIGNvbG9yOiBjb3JhbDtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbn1cclxuLmhlbHBsaW5lLXN0eWxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMTQ2NGY2O1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG4uaGVkZXItZm9udHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuLmhlZGVyLWJyb2RlcntcclxuICBib3JkZXItcmlnaHQ6IDIuM3B4IHNvbGlkICNjOGM4Yzg7XHJcbiAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbn1cclxuLncyMHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5idG4tbS1se1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3JTtcclxuICB9XHJcbiAgLmlucHV0LXN0eWxle1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gIH1cclxuICAuZGl2LXAtdDJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgIH1cclxuICAgLmJ0bi1sb2dpbntcclxuICAgIHdpZHRoOiAzMiU7XHJcbiAgICBwYWRkaW5nOiAwLjUlO1xyXG59XHJcbi5oZWRlci1mb250e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    /**
     * Method will authticate and login application
     * */
    login() {
        this.router.navigate(['main']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map