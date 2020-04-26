function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-property-add-property-module"], {
  /***/
  "./node_modules/primeng/fesm2015/primeng-message.js":
  /*!**********************************************************!*\
    !*** ./node_modules/primeng/fesm2015/primeng-message.js ***!
    \**********************************************************/

  /*! exports provided: MessageModule, UIMessage */

  /***/
  function node_modulesPrimengFesm2015PrimengMessageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageModule", function () {
      return MessageModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIMessage", function () {
      return UIMessage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var UIMessage =
    /*#__PURE__*/
    function () {
      function UIMessage() {
        _classCallCheck(this, UIMessage);

        this.escape = true;
      }

      _createClass(UIMessage, [{
        key: "icon",
        get: function get() {
          var icon = null;

          if (this.severity) {
            switch (this.severity) {
              case 'success':
                icon = 'pi pi-check';
                break;

              case 'info':
                icon = 'pi pi-info-circle';
                break;

              case 'error':
                icon = 'pi pi-times';
                break;

              case 'warn':
                icon = 'pi pi-exclamation-triangle';
                break;

              default:
                icon = 'pi pi-info-circle';
                break;
            }
          }

          return icon;
        }
      }]);

      return UIMessage;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], UIMessage.prototype, "severity", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], UIMessage.prototype, "text", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], UIMessage.prototype, "escape", void 0);

    UIMessage = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-message',
      template: "\n        <div aria-live=\"polite\" class=\"ui-message ui-widget ui-corner-all\" *ngIf=\"severity\"\n        [ngClass]=\"{'ui-message-info': (severity === 'info'),\n                'ui-message-warn': (severity === 'warn'),\n                'ui-message-error': (severity === 'error'),\n                'ui-message-success': (severity === 'success')}\">\n            <span class=\"ui-message-icon\" [ngClass]=\"icon\"></span>\n            <div *ngIf=\"!escape; else escapeOut\">\n                <span *ngIf=\"!escape\" class=\"ui-message-text\" [innerHTML]=\"text\"></span>\n            </div>\n            <ng-template #escapeOut>\n                <span *ngIf=\"escape\" class=\"ui-message-text\">{{text}}</span>\n            </ng-template>\n        </div>\n    "
    })], UIMessage);

    var MessageModule = function MessageModule() {
      _classCallCheck(this, MessageModule);
    };

    MessageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      exports: [UIMessage],
      declarations: [UIMessage]
    })], MessageModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-message.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-property/add-property.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-property/add-property.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddPropertyAddPropertyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-light p-t-100 p-b-50\">\r\n    <div class=\"wrapper wrapper--w880 p-10\">\r\n        <div class=\"card card-6\">\r\n            <div class=\"row m-l-8\">\r\n                Property1\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-l-0-10 \">\r\n                        <input class=\"input--style-6\" type=\"text\" placeholder=\"Property Name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2 p-10\">\r\n                    <div class=\"value p-l-0-10\">\r\n                        <input class=\"input--style-6\" type=\"text\" placeholder=\"City\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2 p-10\">\r\n                    <div class=\"value p-l-0-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"zip code\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2 p-10\">\r\n                    <div class=\"value p-l-0-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Landmark\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-l-0-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Tenant Name\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Broker Name\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <p-calendar [showIcon]=\"true\" placeholder=\"Start Date\"></p-calendar>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <p-calendar [showIcon]=\"true\" placeholder=\"End Date\"></p-calendar>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Rent Per Month\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Disposit\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Brokerage\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <p-fileUpload #fubauto mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\"\r\n                            maxFileSize=\"1000000\" (onUpload)=\"onBasicUploadAuto($event)\" [auto]=\"true\"\r\n                            chooseLabel=\"upload Agreement copy\"></p-fileUpload>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Current Month\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10 p-l-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Receivied Amount\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <div class=\"value p-10\">\r\n                        <input class=\"input--style-6\" placeholder=\"Pending Amount\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <button pButton type=\"button\" label=\"Send Reminder\" class=\"ui-button-info btn-reminder\"\r\n                        icon=\"fa fa-bell\" iconPos=\"left\">\r\n                    </button>\r\n                </div>\r\n                <div class=\"col-md-3 p-10\">\r\n                    <button pButton type=\"button\" label=\"Save\" class=\"ui-button-info btn-save\" icon=\"fa fa-save\"\r\n                        iconPos=\"left\"></button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./src/app/add-property/add-property-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/add-property/add-property-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AddPropertyRoutingModule */

  /***/
  function srcAppAddPropertyAddPropertyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPropertyRoutingModule", function () {
      return AddPropertyRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-property.component */
    "./src/app/add-property/add-property.component.ts");

    var routes = [{
      path: '',
      component: _add_property_component__WEBPACK_IMPORTED_MODULE_3__["AddPropertyComponent"]
    }];

    var AddPropertyRoutingModule = function AddPropertyRoutingModule() {
      _classCallCheck(this, AddPropertyRoutingModule);
    };

    AddPropertyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddPropertyRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-property/add-property.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/add-property/add-property.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddPropertyAddPropertyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input--style-6,\r\n.textarea--style-6 {\r\n  background: transparent;\r\n  line-height: 43px;\r\n  border: 1px solid #cccccc;\r\n  border-radius: 3px;\r\n  color: #666;\r\n  font-size: 15px;\r\n  -webkit-transition: all 0.4s ease;\r\n  transition: all 0.4s ease;\r\n  padding: 0 15px;\r\n}\r\n.p-10{\r\n  padding: 10px;\r\n}\r\n.m-l-8{\r\n  margin-left: 8px;\r\n}\r\n.card-6 {\r\n  background: transparent;\r\n  padding: 10px;\r\n}\r\n.wrapper--w880{\r\n  max-width: 1425px !important;\r\n}\r\n.p-l-0-10{\r\n  padding: 10px 10px 10px 0px;\r\n}\r\ninput{\r\n  width: 100% !important;\r\n}\r\n.btn-save{\r\n  width: 34%;\r\n    margin-left: 30%;\r\n}\r\n.btn-reminder{\r\n  margin-left: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb3BlcnR5L2FkZC1wcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIseUJBQXlCO0VBR3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlDQUFpQztFQUdqQyx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7SUFDUixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9wZXJ0eS9hZGQtcHJvcGVydHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC0tc3R5bGUtNixcclxuLnRleHRhcmVhLS1zdHlsZS02IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBsaW5lLWhlaWdodDogNDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcbi5wLTEwe1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm0tbC04e1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLmNhcmQtNiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ud3JhcHBlci0tdzg4MHtcclxuICBtYXgtd2lkdGg6IDE0MjVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wLWwtMC0xMHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAwcHg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1zYXZle1xyXG4gIHdpZHRoOiAzNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcbi5idG4tcmVtaW5kZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-property/add-property.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/add-property/add-property.component.ts ***!
    \********************************************************/

  /*! exports provided: AddPropertyComponent */

  /***/
  function srcAppAddPropertyAddPropertyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPropertyComponent", function () {
      return AddPropertyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var AddPropertyComponent =
    /*#__PURE__*/
    function () {
      function AddPropertyComponent(messageService) {
        _classCallCheck(this, AddPropertyComponent);

        this.messageService = messageService;
        this.uploadedFiles = [];
      }

      _createClass(AddPropertyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBasicUploadAuto",
        value: function onBasicUploadAuto(event) {
          this.messageService.add({
            severity: 'info',
            summary: 'Success',
            detail: 'File Uploaded with Auto Mode'
          });
        }
      }]);

      return AddPropertyComponent;
    }();

    AddPropertyComponent.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    AddPropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-property',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-property.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-property/add-property.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-property.component.css */
      "./src/app/add-property/add-property.component.css")).default]
    })], AddPropertyComponent);
    /***/
  },

  /***/
  "./src/app/add-property/add-property.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/add-property/add-property.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddPropertyModule */

  /***/
  function srcAppAddPropertyAddPropertyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPropertyModule", function () {
      return AddPropertyModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _add_property_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-property-routing.module */
    "./src/app/add-property/add-property-routing.module.ts");
    /* harmony import */


    var _add_property_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-property.component */
    "./src/app/add-property/add-property.component.ts");
    /* harmony import */


    var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/fileupload */
    "./node_modules/primeng/fesm2015/primeng-fileupload.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/fesm2015/primeng-calendar.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/fesm2015/primeng-message.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var AddPropertyModule = function AddPropertyModule() {
      _classCallCheck(this, AddPropertyModule);
    };

    AddPropertyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_property_component__WEBPACK_IMPORTED_MODULE_4__["AddPropertyComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_8__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_9__["MessageModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_property_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddPropertyRoutingModule"]],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_10__["MessageService"]]
    })], AddPropertyModule);
    /***/
  }
}]);
//# sourceMappingURL=add-property-add-property-module-es5.js.map