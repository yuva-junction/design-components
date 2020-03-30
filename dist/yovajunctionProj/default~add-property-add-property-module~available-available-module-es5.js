function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-property-add-property-module~available-available-module"], {
  /***/
  "./node_modules/@angular/common/fesm2015/http.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/common/fesm2015/http.js ***!
    \*******************************************************/

  /*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */

  /***/
  function node_modulesAngularCommonFesm2015HttpJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function () {
      return NoopInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function () {
      return JsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function () {
      return jsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function () {
      return BrowserXhr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function () {
      return HttpXsrfCookieExtractor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function () {
      return HttpXsrfInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function () {
      return XSRF_COOKIE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function () {
      return XSRF_HEADER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpBackend", function () {
      return HttpBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHandler", function () {
      return HttpHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClient", function () {
      return HttpClient;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () {
      return HttpHeaders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () {
      return HTTP_INTERCEPTORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () {
      return JsonpClientBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () {
      return JsonpInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () {
      return HttpClientJsonpModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () {
      return HttpClientModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () {
      return HttpClientXsrfModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function () {
      return HttpInterceptingHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpParams", function () {
      return HttpParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () {
      return HttpUrlEncodingCodec;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
      return HttpRequest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () {
      return HttpErrorResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpEventType", function () {
      return HttpEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () {
      return HttpHeaderResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponse", function () {
      return HttpResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () {
      return HttpResponseBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () {
      return HttpXhrBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrFactory", function () {
      return XhrFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () {
      return HttpXsrfTokenExtractor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license Angular v8.2.14
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
     * `HttpResponse`.
     *
     * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
     * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
     * `HttpBackend`.
     *
     * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpHandler = function HttpHandler() {
      _classCallCheck(this, HttpHandler);
    };

    if (false) {}
    /**
     * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
     *
     * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
     *
     * When injected, `HttpBackend` dispatches requests directly to the backend, without going
     * through the interceptor chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpBackend = function HttpBackend() {
      _classCallCheck(this, HttpBackend);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @record
     */


    function Update() {}

    if (false) {}
    /**
     * Represents the header configuration options for an HTTP request.
     * Instances are immutable. Modifying methods return a cloned
     * instance with the change. The original object is never changed.
     *
     * \@publicApi
     */


    var HttpHeaders =
    /*#__PURE__*/
    function () {
      /**
       * Constructs a new HTTP header object with the given values.
       * @param {?=} headers
       */
      function HttpHeaders(headers) {
        var _this = this;

        _classCallCheck(this, HttpHeaders);

        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */

        this.lazyUpdate = null;

        if (!headers) {
          this.headers = new Map();
        } else if (typeof headers === 'string') {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this.headers = new Map();
            headers.split('\n').forEach(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              /** @type {?} */
              var index = line.indexOf(':');

              if (index > 0) {
                /** @type {?} */
                var name = line.slice(0, index);
                /** @type {?} */

                var key = name.toLowerCase();
                /** @type {?} */

                var value = line.slice(index + 1).trim();

                _this.maybeSetNormalizedName(name, key);

                if (_this.headers.has(key)) {
                  /** @type {?} */
                  _this.headers.get(key).push(value);
                } else {
                  _this.headers.set(key, [value]);
                }
              }
            });
          };
        } else {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this.headers = new Map();
            Object.keys(headers).forEach(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              /** @type {?} */
              var values = headers[name];
              /** @type {?} */

              var key = name.toLowerCase();

              if (typeof values === 'string') {
                values = [values];
              }

              if (values.length > 0) {
                _this.headers.set(key, values);

                _this.maybeSetNormalizedName(name, key);
              }
            });
          };
        }
      }
      /**
       * Checks for existence of a given header.
       *
       * @param {?} name The header name to check for existence.
       *
       * @return {?} True if the header exists, false otherwise.
       */


      _createClass(HttpHeaders, [{
        key: "has",
        value: function has(name) {
          this.init();
          return this.headers.has(name.toLowerCase());
        }
        /**
         * Retrieves the first value of a given header.
         *
         * @param {?} name The header name.
         *
         * @return {?} The value string if the header exists, null otherwise
         */

      }, {
        key: "get",
        value: function get(name) {
          this.init();
          /** @type {?} */

          var values = this.headers.get(name.toLowerCase());
          return values && values.length > 0 ? values[0] : null;
        }
        /**
         * Retrieves the names of the headers.
         *
         * @return {?} A list of header names.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(this.normalizedNames.values());
        }
        /**
         * Retrieves a list of values for a given header.
         *
         * @param {?} name The header name from which to retrieve values.
         *
         * @return {?} A string of values if the header exists, null otherwise.
         */

      }, {
        key: "getAll",
        value: function getAll(name) {
          this.init();
          return this.headers.get(name.toLowerCase()) || null;
        }
        /**
         * Appends a new value to the existing set of values for a header
         * and returns them in a clone of the original instance.
         *
         * @param {?} name The header name for which to append the value or values.
         * @param {?} value The new value or array of values.
         *
         * @return {?} A clone of the HTTP headers object with the value appended to the given header.
         */

      }, {
        key: "append",
        value: function append(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'a'
          });
        }
        /**
         * Sets or modifies a value for a given header in a clone of the original instance.
         * If the header already exists, its value is replaced with the given value
         * in the returned object.
         *
         * @param {?} name The header name.
         * @param {?} value The value or values to set or overide for the given header.
         *
         * @return {?} A clone of the HTTP headers object with the newly set header value.
         */

      }, {
        key: "set",
        value: function set(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 's'
          });
        }
        /**
         * Deletes values for a given header in a clone of the original instance.
         *
         * @param {?} name The header name.
         * @param {?=} value The value or values to delete for the given header.
         *
         * @return {?} A clone of the HTTP headers object with the given value deleted.
         */

      }, {
        key: "delete",
        value: function _delete(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'd'
          });
        }
        /**
         * @private
         * @param {?} name
         * @param {?} lcName
         * @return {?}
         */

      }, {
        key: "maybeSetNormalizedName",
        value: function maybeSetNormalizedName(name, lcName) {
          if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this2 = this;

          if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
              this.copyFrom(this.lazyInit);
            } else {
              this.lazyInit();
            }

            this.lazyInit = null;

            if (!!this.lazyUpdate) {
              this.lazyUpdate.forEach(
              /**
              * @param {?} update
              * @return {?}
              */
              function (update) {
                return _this2.applyUpdate(update);
              });
              this.lazyUpdate = null;
            }
          }
        }
        /**
         * @private
         * @param {?} other
         * @return {?}
         */

      }, {
        key: "copyFrom",
        value: function copyFrom(other) {
          var _this3 = this;

          other.init();
          Array.from(other.headers.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this3.headers.set(key,
            /** @type {?} */
            other.headers.get(key));

            _this3.normalizedNames.set(key,
            /** @type {?} */
            other.normalizedNames.get(key));
          });
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpHeaders();
          clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
          clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "applyUpdate",
        value: function applyUpdate(update) {
          /** @type {?} */
          var key = update.name.toLowerCase();

          switch (update.op) {
            case 'a':
            case 's':
              /** @type {?} */
              var value =
              /** @type {?} */
              update.value;

              if (typeof value === 'string') {
                value = [value];
              }

              if (value.length === 0) {
                return;
              }

              this.maybeSetNormalizedName(update.name, key);
              /** @type {?} */

              var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
              base.push.apply(base, _toConsumableArray(value));
              this.headers.set(key, base);
              break;

            case 'd':
              /** @type {?} */
              var toDelete =
              /** @type {?} */
              update.value;

              if (!toDelete) {
                this.headers.delete(key);
                this.normalizedNames.delete(key);
              } else {
                /** @type {?} */
                var existing = this.headers.get(key);

                if (!existing) {
                  return;
                }

                existing = existing.filter(
                /**
                * @param {?} value
                * @return {?}
                */
                function (value) {
                  return toDelete.indexOf(value) === -1;
                });

                if (existing.length === 0) {
                  this.headers.delete(key);
                  this.normalizedNames.delete(key);
                } else {
                  this.headers.set(key, existing);
                }
              }

              break;
          }
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          var _this4 = this;

          this.init();
          Array.from(this.normalizedNames.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return fn(
            /** @type {?} */
            _this4.normalizedNames.get(key),
            /** @type {?} */
            _this4.headers.get(key));
          });
        }
      }]);

      return HttpHeaders;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A codec for encoding and decoding parameters in URLs.
     *
     * Used by `HttpParams`.
     *
     * \@publicApi
     *
     * @record
     */


    function HttpParameterCodec() {}

    if (false) {}
    /**
     * Provides encoding and decoding of URL parameter and query-string values.
     *
     * Serializes and parses URL parameter keys and values to encode and decode them.
     * If you pass URL query parameters without encoding,
     * the query parameters can be misinterpreted at the receiving end.
     *
     *
     * \@publicApi
     */


    var HttpUrlEncodingCodec =
    /*#__PURE__*/
    function () {
      function HttpUrlEncodingCodec() {
        _classCallCheck(this, HttpUrlEncodingCodec);
      }

      _createClass(HttpUrlEncodingCodec, [{
        key: "encodeKey",

        /**
         * Encodes a key name for a URL parameter or query-string.
         * @param {?} key The key name.
         * @return {?} The encoded key name.
         */
        value: function encodeKey(key) {
          return standardEncoding(key);
        }
        /**
         * Encodes the value of a URL parameter or query-string.
         * @param {?} value The value.
         * @return {?} The encoded value.
         */

      }, {
        key: "encodeValue",
        value: function encodeValue(value) {
          return standardEncoding(value);
        }
        /**
         * Decodes an encoded URL parameter or query-string key.
         * @param {?} key The encoded key name.
         * @return {?} The decoded key name.
         */

      }, {
        key: "decodeKey",
        value: function decodeKey(key) {
          return decodeURIComponent(key);
        }
        /**
         * Decodes an encoded URL parameter or query-string value.
         * @param {?} value The encoded value.
         * @return {?} The decoded value.
         */

      }, {
        key: "decodeValue",
        value: function decodeValue(value) {
          return decodeURIComponent(value);
        }
      }]);

      return HttpUrlEncodingCodec;
    }();
    /**
     * @param {?} rawParams
     * @param {?} codec
     * @return {?}
     */


    function paramParser(rawParams, codec) {
      /** @type {?} */
      var map = new Map();

      if (rawParams.length > 0) {
        /** @type {?} */
        var params = rawParams.split('&');
        params.forEach(
        /**
        * @param {?} param
        * @return {?}
        */
        function (param) {
          /** @type {?} */
          var eqIdx = param.indexOf('=');

          var _ref = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
              _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val = _ref2[1];
          /** @type {?} */


          var list = map.get(key) || [];
          list.push(val);
          map.set(key, list);
        });
      }

      return map;
    }
    /**
     * @param {?} v
     * @return {?}
     */


    function standardEncoding(v) {
      return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
    }
    /**
     * @record
     */


    function Update$1() {}

    if (false) {}
    /**
     * Options used to construct an `HttpParams` instance.
     *
     * \@publicApi
     * @record
     */


    function HttpParamsOptions() {}

    if (false) {}
    /**
     * An HTTP request/response body that represents serialized parameters,
     * per the MIME type `application/x-www-form-urlencoded`.
     *
     * This class is immutable; all mutation operations return a new instance.
     *
     * \@publicApi
     */


    var HttpParams =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} options
       */
      function HttpParams() {
        var _this5 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
        /** @type {?} */
        {};

        _classCallCheck(this, HttpParams);

        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();

        if (!!options.fromString) {
          if (!!options.fromObject) {
            throw new Error("Cannot specify both fromString and fromObject.");
          }

          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = new Map();
          Object.keys(options.fromObject).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var value =
            /** @type {?} */
            options.fromObject[key];

            /** @type {?} */
            _this5.map.set(key, Array.isArray(value) ? value : [value]);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param {?} param The parameter name.
       * @return {?} True if the parameter has one or more values,
       * false if it has no value or is not present.
       */


      _createClass(HttpParams, [{
        key: "has",
        value: function has(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.has(param)
          );
        }
        /**
         * Retrieves the first value for a parameter.
         * @param {?} param The parameter name.
         * @return {?} The first value of the given parameter,
         * or `null` if the parameter is not present.
         */

      }, {
        key: "get",
        value: function get(param) {
          this.init();
          /** @type {?} */

          var res =
          /** @type {?} */
          this.map.get(param);
          return !!res ? res[0] : null;
        }
        /**
         * Retrieves all values for a  parameter.
         * @param {?} param The parameter name.
         * @return {?} All values in a string array,
         * or `null` if the parameter not present.
         */

      }, {
        key: "getAll",
        value: function getAll(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.get(param) || null
          );
        }
        /**
         * Retrieves all the parameters for this body.
         * @return {?} The parameter names in a string array.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(
          /** @type {?} */
          this.map.keys());
        }
        /**
         * Appends a new value to existing values for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value to add.
         * @return {?} A new body with the appended value.
         */

      }, {
        key: "append",
        value: function append(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'a'
          });
        }
        /**
         * Replaces the value for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value.
         * @return {?} A new body with the new value.
         */

      }, {
        key: "set",
        value: function set(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 's'
          });
        }
        /**
         * Removes a given value or all values from a parameter.
         * @param {?} param The parameter name.
         * @param {?=} value The value to remove, if provided.
         * @return {?} A new body with the given value removed, or with all values
         * removed if no value is specified.
         */

      }, {
        key: "delete",
        value: function _delete(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'd'
          });
        }
        /**
         * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
         * separated by `&`s.
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          var _this6 = this;

          this.init();
          return this.keys().map(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var eKey = _this6.encoder.encodeKey(key);

            return (
              /** @type {?} */

              /** @type {?} */
              _this6.map.get(key).map(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return eKey + '=' + _this6.encoder.encodeValue(value);
              }).join('&')
            );
          }).join('&');
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpParams(
          /** @type {?} */
          {
            encoder: this.encoder
          });
          clone.cloneFrom = this.cloneFrom || this;
          clone.updates = (this.updates || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this7 = this;

          if (this.map === null) {
            this.map = new Map();
          }

          if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              return (
                /** @type {?} */
                _this7.map.set(key,
                /** @type {?} */

                /** @type {?} */

                /** @type {?} */
                _this7.cloneFrom.map.get(key))
              );
            });

            /** @type {?} */
            this.updates.forEach(
            /**
            * @param {?} update
            * @return {?}
            */
            function (update) {
              switch (update.op) {
                case 'a':
                case 's':
                  /** @type {?} */
                  var base = (update.op === 'a' ?
                  /** @type {?} */
                  _this7.map.get(update.param) : undefined) || [];
                  base.push(
                  /** @type {?} */
                  update.value);

                  /** @type {?} */
                  _this7.map.set(update.param, base);

                  break;

                case 'd':
                  if (update.value !== undefined) {
                    /** @type {?} */
                    var _base =
                    /** @type {?} */
                    _this7.map.get(update.param) || [];
                    /** @type {?} */


                    var idx = _base.indexOf(update.value);

                    if (idx !== -1) {
                      _base.splice(idx, 1);
                    }

                    if (_base.length > 0) {
                      /** @type {?} */
                      _this7.map.set(update.param, _base);
                    } else {
                      /** @type {?} */
                      _this7.map.delete(update.param);
                    }
                  } else {
                    /** @type {?} */
                    _this7.map.delete(update.param);

                    break;
                  }

              }
            });
            this.cloneFrom = this.updates = null;
          }
        }
      }]);

      return HttpParams;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Construction interface for `HttpRequest`s.
     *
     * All values are optional and will override default values if provided.
     * @record
     */


    function HttpRequestInit() {}

    if (false) {}
    /**
     * Determine whether the given HTTP method may include a body.
     * @param {?} method
     * @return {?}
     */


    function mightHaveBody(method) {
      switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
          return false;

        default:
          return true;
      }
    }
    /**
     * Safely assert whether the given value is an ArrayBuffer.
     *
     * In some execution environments ArrayBuffer is not defined.
     * @param {?} value
     * @return {?}
     */


    function isArrayBuffer(value) {
      return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
    }
    /**
     * Safely assert whether the given value is a Blob.
     *
     * In some execution environments Blob is not defined.
     * @param {?} value
     * @return {?}
     */


    function isBlob(value) {
      return typeof Blob !== 'undefined' && value instanceof Blob;
    }
    /**
     * Safely assert whether the given value is a FormData instance.
     *
     * In some execution environments FormData is not defined.
     * @param {?} value
     * @return {?}
     */


    function isFormData(value) {
      return typeof FormData !== 'undefined' && value instanceof FormData;
    }
    /**
     * An outgoing HTTP request with an optional typed body.
     *
     * `HttpRequest` represents an outgoing request, including URL, method,
     * headers, body, and other request configuration options. Instances should be
     * assumed to be immutable. To modify a `HttpRequest`, the `clone`
     * method should be used.
     *
     * \@publicApi
     * @template T
     */


    var HttpRequest =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} method
       * @param {?} url
       * @param {?=} third
       * @param {?=} fourth
       */
      function HttpRequest(method, url, third, fourth) {
        _classCallCheck(this, HttpRequest);

        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */

        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */

        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */

        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */

        this.responseType = 'json';
        this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.

        /** @type {?} */

        var options; // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.

        if (mightHaveBody(this.method) || !!fourth) {
          // Body is the third argument, options are the fourth.
          this.body = third !== undefined ?
          /** @type {?} */
          third : null;
          options = fourth;
        } else {
          // No body required, options are the third argument. The body stays null.
          options =
          /** @type {?} */
          third;
        } // If options have been passed, interpret them.


        if (options) {
          // Normalize reportProgress and withCredentials.
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

          if (!!options.responseType) {
            this.responseType = options.responseType;
          } // Override headers if they're provided.


          if (!!options.headers) {
            this.headers = options.headers;
          }

          if (!!options.params) {
            this.params = options.params;
          }
        } // If no headers have been passed in, construct a new HttpHeaders instance.


        if (!this.headers) {
          this.headers = new HttpHeaders();
        } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          // Encode the parameters to a string in preparation for inclusion in the URL.

          /** @type {?} */
          var params = this.params.toString();

          if (params.length === 0) {
            // No parameters, the visible URL is just the URL given at creation time.
            this.urlWithParams = url;
          } else {
            // Does the URL already have query parameters? Look for '?'.

            /** @type {?} */
            var qIdx = url.indexOf('?'); // There are 3 cases to handle:
            // 1) No existing parameters -> append '?' followed by params.
            // 2) '?' exists and is followed by existing query string ->
            //    append '&' followed by params.
            // 3) '?' exists at the end of the url -> append params directly.
            // This basically amounts to determining the character, if any, with
            // which to join the URL and parameters.

            /** @type {?} */

            var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       * @return {?}
       */


      _createClass(HttpRequest, [{
        key: "serializeBody",
        value: function serializeBody() {
          // If no body is present, no need to serialize it.
          if (this.body === null) {
            return null;
          } // Check whether the body is already in a serialized form. If so,
          // it can just be returned directly.


          if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
            return this.body;
          } // Check whether the body is an instance of HttpUrlEncodedParams.


          if (this.body instanceof HttpParams) {
            return this.body.toString();
          } // Check whether the body is an object or array, and serialize with JSON if so.


          if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
            return JSON.stringify(this.body);
          } // Fall back on toString() for everything else.


          return (
            /** @type {?} */
            this.body.toString()
          );
        }
        /**
         * Examine the body and attempt to infer an appropriate MIME type
         * for it.
         *
         * If no such type can be inferred, this method will return `null`.
         * @return {?}
         */

      }, {
        key: "detectContentTypeHeader",
        value: function detectContentTypeHeader() {
          // An empty body has no content type.
          if (this.body === null) {
            return null;
          } // FormData bodies rely on the browser's content type assignment.


          if (isFormData(this.body)) {
            return null;
          } // Blobs usually have their own content type. If it doesn't, then
          // no type can be inferred.


          if (isBlob(this.body)) {
            return this.body.type || null;
          } // Array buffers have unknown contents and thus no type can be inferred.


          if (isArrayBuffer(this.body)) {
            return null;
          } // Technically, strings could be a form of JSON data, but it's safe enough
          // to assume they're plain strings.


          if (typeof this.body === 'string') {
            return 'text/plain';
          } // `HttpUrlEncodedParams` has its own content-type.


          if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
          } // Arrays, objects, and numbers will be encoded as JSON.


          if (typeof this.body === 'object' || typeof this.body === 'number' || Array.isArray(this.body)) {
            return 'application/json';
          } // No type could be inferred.


          return null;
        }
        /**
         * @param {?=} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // For method, url, and responseType, take the current value unless
          // it is overridden in the update hash.

          /** @type {?} */
          var method = update.method || this.method;
          /** @type {?} */

          var url = update.url || this.url;
          /** @type {?} */

          var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
          // whatever current body is present is being overridden with an empty
          // body, whereas an `undefined` value in update.body implies no
          // override.

          /** @type {?} */

          var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
          // `false` and `undefined` in the update args.

          /** @type {?} */

          var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
          /** @type {?} */

          var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
          // `setParams` are used.

          /** @type {?} */

          var headers = update.headers || this.headers;
          /** @type {?} */

          var params = update.params || this.params; // Check whether the caller has asked to add headers.

          if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers = Object.keys(update.setHeaders).reduce(
            /**
            * @param {?} headers
            * @param {?} name
            * @return {?}
            */
            function (headers, name) {
              return headers.set(name,
              /** @type {?} */
              update.setHeaders[name]);
            }, headers);
          } // Check whether the caller has asked to set params.


          if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams).reduce(
            /**
            * @param {?} params
            * @param {?} param
            * @return {?}
            */
            function (params, param) {
              return params.set(param,
              /** @type {?} */
              update.setParams[param]);
            }, params);
          } // Finally, construct the new HttpRequest using the pieces from above.


          return new HttpRequest(method, url, body, {
            params: params,
            headers: headers,
            reportProgress: reportProgress,
            responseType: responseType,
            withCredentials: withCredentials
          });
        }
      }]);

      return HttpRequest;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HttpEventType = {
      /**
       * The request was sent out over the wire.
       */
      Sent: 0,

      /**
       * An upload progress event was received.
       */
      UploadProgress: 1,

      /**
       * The response status code and headers were received.
       */
      ResponseHeader: 2,

      /**
       * A download progress event was received.
       */
      DownloadProgress: 3,

      /**
       * The full response including the body was received.
       */
      Response: 4,

      /**
       * A custom event from an interceptor or a backend.
       */
      User: 5
    };
    HttpEventType[HttpEventType.Sent] = 'Sent';
    HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
    HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
    HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
    HttpEventType[HttpEventType.Response] = 'Response';
    HttpEventType[HttpEventType.User] = 'User';
    /**
     * Base interface for progress events.
     *
     * \@publicApi
     * @record
     */

    function HttpProgressEvent() {}

    if (false) {}
    /**
     * A download progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpDownloadProgressEvent() {}

    if (false) {}
    /**
     * An upload progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpUploadProgressEvent() {}

    if (false) {}
    /**
     * An event indicating that the request was sent to the server. Useful
     * when a request may be retried multiple times, to distinguish between
     * retries on the final event stream.
     *
     * \@publicApi
     * @record
     */


    function HttpSentEvent() {}

    if (false) {}
    /**
     * A user-defined event.
     *
     * Grouping all custom events under this type ensures they will be handled
     * and forwarded by all implementations of interceptors.
     *
     * \@publicApi
     * @record
     * @template T
     */


    function HttpUserEvent() {}

    if (false) {}
    /**
     * An error that represents a failed attempt to JSON.parse text coming back
     * from the server.
     *
     * It bundles the Error object with the actual response body that failed to parse.
     *
     *
     * @record
     */


    function HttpJsonParseError() {}

    if (false) {}
    /**
     * Base class for both `HttpResponse` and `HttpHeaderResponse`.
     *
     * \@publicApi
     * @abstract
     */


    var HttpResponseBase =
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init) {
      var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var defaultStatusText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

      _classCallCheck(this, HttpResponseBase);

      // If the hash has values passed, use them to initialize the response.
      // Otherwise use the default values.
      this.headers = init.headers || new HttpHeaders();
      this.status = init.status !== undefined ? init.status : defaultStatus;
      this.statusText = init.statusText || defaultStatusText;
      this.url = init.url || null; // Cache the ok value to avoid defining a getter.

      this.ok = this.status >= 200 && this.status < 300;
    };

    if (false) {}
    /**
     * A partial HTTP response which only includes the status and header data,
     * but no response body.
     *
     * `HttpHeaderResponse` is a `HttpEvent` available on the response
     * event stream, only when progress events are requested.
     *
     * \@publicApi
     */


    var HttpHeaderResponse =
    /*#__PURE__*/
    function (_HttpResponseBase) {
      _inherits(HttpHeaderResponse, _HttpResponseBase);

      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       * @param {?=} init
       */
      function HttpHeaderResponse() {
        var _this8;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpHeaderResponse);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(HttpHeaderResponse).call(this, init));
        _this8.type = HttpEventType.ResponseHeader;
        return _this8;
      }
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpHeaderResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // Perform a straightforward initialization of the new HttpHeaderResponse,
          // overriding the current parameters with new ones if given.
          return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpHeaderResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A full HTTP response, including a typed response body (which may be `null`
     * if one was not returned).
     *
     * `HttpResponse` is a `HttpEvent` available on the response event
     * stream.
     *
     * \@publicApi
     * @template T
     */


    var HttpResponse =
    /*#__PURE__*/
    function (_HttpResponseBase2) {
      _inherits(HttpResponse, _HttpResponseBase2);

      /**
       * Construct a new `HttpResponse`.
       * @param {?=} init
       */
      function HttpResponse() {
        var _this9;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpResponse);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(HttpResponse).call(this, init));
        _this9.type = HttpEventType.Response;
        _this9.body = init.body !== undefined ? init.body : null;
        return _this9;
      }
      /**
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new HttpResponse({
            body: update.body !== undefined ? update.body : this.body,
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A response that represents an error or failure, either from a
     * non-successful HTTP status, an error while executing the request,
     * or some other failure which occurred during the parsing of the response.
     *
     * Any error returned on the `Observable` response stream will be
     * wrapped in an `HttpErrorResponse` to provide additional context about
     * the state of the HTTP layer when the error occurred. The error property
     * will contain either a wrapped Error object or the error response returned
     * from the server.
     *
     * \@publicApi
     */


    var HttpErrorResponse =
    /*#__PURE__*/
    function (_HttpResponseBase3) {
      _inherits(HttpErrorResponse, _HttpResponseBase3);

      /**
       * @param {?} init
       */
      function HttpErrorResponse(init) {
        var _this10;

        _classCallCheck(this, HttpErrorResponse);

        // Initialize with a default status of 0 / Unknown Error.
        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(HttpErrorResponse).call(this, init, 0, 'Unknown Error'));
        _this10.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */

        _this10.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.

        if (_this10.status >= 200 && _this10.status < 300) {
          _this10.message = "Http failure during parsing for ".concat(init.url || '(unknown url)');
        } else {
          _this10.message = "Http failure response for ".concat(init.url || '(unknown url)', ": ").concat(init.status, " ").concat(init.statusText);
        }

        _this10.error = init.error || null;
        return _this10;
      }

      return HttpErrorResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
     * the given `body`. This function clones the object and adds the body.
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * @template T
     * @param {?} options
     * @param {?} body
     * @return {?}
     */


    function addBody(options, body) {
      return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials
      };
    }
    /**
     * Performs HTTP requests.
     * This service is available as an injectable class, with methods to perform HTTP requests.
     * Each request method has multiple signatures, and the return type varies based on
     * the signature that is called (mainly the values of `observe` and `responseType`).
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * \@usageNotes
     * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
     *
     * ### HTTP Request Example
     *
     * ```
     *  // GET heroes whose name contains search term
     * searchHeroes(term: string): observable<Hero[]>{
     *
     *  const params = new HttpParams({fromString: 'name=term'});
     *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
     * }
     * ```
     * ### JSONP Example
     * ```
     * requestJsonp(url, callback = 'callback') {
     *  return this.httpClient.jsonp(this.heroesURL, callback);
     * }
     * ```
     *
     * ### PATCH Example
     * ```
     * // PATCH one of the heroes' name
     * patchHero (id: number, heroName: string): Observable<{}> {
     * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
     *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
     *    .pipe(catchError(this.handleError('patchHero')));
     * }
     * ```
     *
     * @see [HTTP Guide](guide/http)
     *
     * \@publicApi
     */


    var HttpClient =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} handler
       */
      function HttpClient(handler) {
        _classCallCheck(this, HttpClient);

        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       * @param {?} first
       * @param {?=} url
       * @param {?=} options
       * @return {?}
       */


      _createClass(HttpClient, [{
        key: "request",
        value: function request(first, url) {
          var _this11 = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var req; // First, check whether the primary argument is an instance of `HttpRequest`.

          if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req =
            /** @type {?} */
            first;
          } else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.

            /** @type {?} */
            var headers = undefined;

            if (options.headers instanceof HttpHeaders) {
              headers = options.headers;
            } else {
              headers = new HttpHeaders(options.headers);
            } // Sort out parameters.

            /** @type {?} */


            var params = undefined;

            if (!!options.params) {
              if (options.params instanceof HttpParams) {
                params = options.params;
              } else {
                params = new HttpParams(
                /** @type {?} */
                {
                  fromObject: options.params
                });
              }
            } // Construct the request.


            req = new HttpRequest(first,
            /** @type {?} */
            url, options.body !== undefined ? options.body : null, {
              headers: headers,
              params: params,
              reportProgress: options.reportProgress,
              // By default, JSON is assumed to be returned for all calls.
              responseType: options.responseType || 'json',
              withCredentials: options.withCredentials
            });
          } // Start with an Observable.of() the initial request, and run the handler (which
          // includes all interceptors) inside a concatMap(). This way, the handler runs
          // inside an Observable chain, which causes interceptors to be re-run on every
          // subscription (this also makes retries re-run the handler, including interceptors).

          /** @type {?} */


          var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(
          /**
          * @param {?} req
          * @return {?}
          */
          function (req) {
            return _this11.handler.handle(req);
          })); // If coming via the API signature which accepts a previously constructed HttpRequest,
          // the only option is to get the event stream. Otherwise, return the event stream if
          // that is what was requested.

          if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
          } // The requested stream contains either the full response or the body. In either
          // case, the first step is to filter the event stream to extract a stream of
          // responses(s).

          /** @type {?} */


          var res$ =
          /** @type {?} */
          events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof HttpResponse;
          })); // Decide which stream to return.

          switch (options.observe || 'body') {
            case 'body':
              // The requested stream is the body. Map the response stream to the response
              // body. This could be done more simply, but a misbehaving interceptor might
              // transform the response body into a different format and ignore the requested
              // responseType. Guard against this by validating that the response is of the
              // requested type.
              switch (req.responseType) {
                case 'arraybuffer':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is an ArrayBuffer.
                    if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                      throw new Error('Response is not an ArrayBuffer.');
                    }

                    return res.body;
                  }));

                case 'blob':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a Blob.
                    if (res.body !== null && !(res.body instanceof Blob)) {
                      throw new Error('Response is not a Blob.');
                    }

                    return res.body;
                  }));

                case 'text':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a string.
                    if (res.body !== null && typeof res.body !== 'string') {
                      throw new Error('Response is not a string.');
                    }

                    return res.body;
                  }));

                case 'json':
                default:
                  // No validation needed for JSON responses, as they can be of any type.
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    return res.body;
                  }));
              }

            case 'response':
              // The response stream was requested directly, so return it.
              return res$;

            default:
              // Guard against new future observe types being added.
              throw new Error("Unreachable: unhandled observe type ".concat(options.observe, "}"));
          }
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `DELETE` request to execute on the server. See the individual overloads for
         * details on the return type.
         *
         * @param {?} url     The endpoint URL.
         * @param {?=} options The HTTP options to send with the request.
         *
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('DELETE', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `GET` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('GET', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `HEAD` request to execute on the server. The `HEAD` method returns
         * meta information about the resource without transferring the
         * resource itself. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "head",
        value: function head(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('HEAD', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes a request with the special method
         * `JSONP` to be dispatched via the interceptor pipeline.
         * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
         * API endpoints that don't support newer,
         * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
         * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
         * requests even if the API endpoint is not located on the same domain (origin) as the client-side
         * application making the request.
         * The endpoint API must support JSONP callback for JSONP requests to work.
         * The resource API returns the JSON response wrapped in a callback function.
         * You can pass the callback function name as one of the query parameters.
         * Note that JSONP requests can only be used with `GET` requests.
         *
         * @template T
         * @param {?} url The resource URL.
         * @param {?} callbackParam The callback function name.
         *
         * @return {?}
         */

      }, {
        key: "jsonp",
        value: function jsonp(url, callbackParam) {
          return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json'
          });
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes the configured
         * `OPTIONS` request to execute on the server. This method allows the client
         * to determine the supported HTTP methods and other capabilites of an endpoint,
         * without implying a resource action. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "options",
        value: function options(url) {
          var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          return this.request('OPTIONS', url,
          /** @type {?} */
          _options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PATCH` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "patch",
        value: function patch(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PATCH', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `POST` request to execute on the server. The server responds with the location of
         * the replaced resource. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "post",
        value: function post(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('POST', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
         * with a new set of values.
         * See the individual overloads for details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "put",
        value: function put(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PUT', url, addBody(options, body));
        }
      }]);

      return HttpClient;
    }();

    HttpClient.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpClient.ctorParameters = function () {
      return [{
        type: HttpHandler
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Intercepts and handles an `HttpRequest` or `HttpResponse`.
     *
     * Most interceptors transform the outgoing request before passing it to the
     * next interceptor in the chain, by calling `next.handle(transformedReq)`.
     * An interceptor may transform the
     * response event stream as well, by applying additional RxJS operators on the stream
     * returned by `next.handle()`.
     *
     * More rarely, an interceptor may handle the request entirely,
     * and compose a new event stream instead of invoking `next.handle()`. This is an
     * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
     *
     * It is also rare but valid for an interceptor to return multiple responses on the
     * event stream for a single request.
     *
     * \@publicApi
     *
     * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
     *
     * \@usageNotes
     *
     * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
     * only in your `AppModule`, and add the interceptors to the root application injector .
     * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
     * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the interceptors
     * provided in the root module.
     *
     * @record
     */


    function HttpInterceptor() {}

    if (false) {}
    /**
     * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
     *
     *
     */


    var HttpInterceptorHandler =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} next
       * @param {?} interceptor
       */
      function HttpInterceptorHandler(next, interceptor) {
        _classCallCheck(this, HttpInterceptorHandler);

        this.next = next;
        this.interceptor = interceptor;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptorHandler, [{
        key: "handle",
        value: function handle(req) {
          return this.interceptor.intercept(req, this.next);
        }
      }]);

      return HttpInterceptorHandler;
    }();

    if (false) {}
    /**
     * A multi-provider token that represents the array of registered
     * `HttpInterceptor` objects.
     *
     * \@publicApi
     * @type {?}
     */


    var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');

    var NoopInterceptor =
    /*#__PURE__*/
    function () {
      function NoopInterceptor() {
        _classCallCheck(this, NoopInterceptor);
      }

      _createClass(NoopInterceptor, [{
        key: "intercept",

        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        value: function intercept(req, next) {
          return next.handle(req);
        }
      }]);

      return NoopInterceptor;
    }();

    NoopInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Every request made through JSONP needs a callback name that's unique across the
    // whole page. Each request is assigned an id and the callback name is constructed
    // from that. The next id to be assigned is tracked in a global variable here that
    // is shared among all applications on the page.

    /** @type {?} */

    var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
    // passed in its URL.

    /** @type {?} */

    var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
    // have a request method JSONP.

    /** @type {?} */

    var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
    /** @type {?} */

    var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
    /**
     * DI token/abstract type representing a map of JSONP callbacks.
     *
     * In the browser, this should always be the `window` object.
     *
     *
     * @abstract
     */

    var JsonpCallbackContext = function JsonpCallbackContext() {
      _classCallCheck(this, JsonpCallbackContext);
    };
    /**
     * Processes an `HttpRequest` with the JSONP method,
     * by performing JSONP style requests.
     * @see `HttpHandler`
     * @see `HttpXhrBackend`
     *
     * \@publicApi
     */


    var JsonpClientBackend =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} callbackMap
       * @param {?} document
       */
      function JsonpClientBackend(callbackMap, document) {
        _classCallCheck(this, JsonpClientBackend);

        this.callbackMap = callbackMap;
        this.document = document;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       * @private
       * @return {?}
       */


      _createClass(JsonpClientBackend, [{
        key: "nextCallback",
        value: function nextCallback() {
          return "ng_jsonp_callback_".concat(nextRequestId++);
        }
        /**
         * Processes a JSONP request and returns an event stream of the results.
         * @param {?} req The request object.
         * @return {?} An observable of the response events.
         *
         */

      }, {
        key: "handle",
        value: function handle(req) {
          var _this12 = this;

          // Firstly, check both the method and response type. If either doesn't match
          // then the request was improperly routed here and cannot be handled.
          if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
          } else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
          } // Everything else happens inside the Observable boundary.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.

            /** @type {?} */
            var callback = _this12.nextCallback();
            /** @type {?} */


            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=".concat(callback, "$1")); // Construct the <script> tag and point it at the URL.

            /** @type {?} */

            var node = _this12.document.createElement('script');

            node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.

            /** @type {?} */

            var body = null; // Whether the response callback has been called.

            /** @type {?} */

            var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.

            /** @type {?} */

            var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.

            _this12.callbackMap[callback] =
            /**
            * @param {?=} data
            * @return {?}
            */
            function (data) {
              // Data has been received from the JSONP script. Firstly, delete this callback.
              delete _this12.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

              if (cancelled) {
                return;
              } // Set state to indicate data was received.


              body = data;
              finished = true;
            }; // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.

            /** @type {?} */


            var cleanup =
            /**
            * @return {?}
            */
            function cleanup() {
              // Remove the <script> tag if it's still on the page.
              if (node.parentNode) {
                node.parentNode.removeChild(node);
              } // Remove the response callback from the callbackMap (window object in the
              // browser).


              delete _this12.callbackMap[callback];
            }; // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.

            /** @type {?} */


            var onLoad =
            /**
            * @param {?} event
            * @return {?}
            */
            function onLoad(event) {
              // Do nothing if the request has been cancelled.
              if (cancelled) {
                return;
              } // Cleanup the page.


              cleanup(); // Check whether the response callback has run.

              if (!finished) {
                // It hasn't, something went wrong with the request. Return an error via
                // the Observable error path. All JSONP errors have status 0.
                observer.error(new HttpErrorResponse({
                  url: url,
                  status: 0,
                  statusText: 'JSONP Error',
                  error: new Error(JSONP_ERR_NO_CALLBACK)
                }));
                return;
              } // Success. body either contains the response body or null if none was
              // returned.


              observer.next(new HttpResponse({
                body: body,
                status: 200,
                statusText: 'OK',
                url: url
              })); // Complete the stream, the response is over.

              observer.complete();
            }; // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              // If the request was already cancelled, no need to emit anything.
              if (cancelled) {
                return;
              }

              cleanup(); // Wrap the error in a HttpErrorResponse.

              observer.error(new HttpErrorResponse({
                error: error,
                status: 0,
                statusText: 'JSONP Error',
                url: url
              }));
            }; // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.


            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);

            _this12.document.body.appendChild(node); // The request has now been successfully sent.


            observer.next({
              type: HttpEventType.Sent
            }); // Cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true; // Remove the event listeners so they won't run if the events later fire.

                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError); // And finally, clean up the page.

                cleanup();
              }
            );
          });
        }
      }]);

      return JsonpClientBackend;
    }();

    JsonpClientBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpClientBackend.ctorParameters = function () {
      return [{
        type: JsonpCallbackContext
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    if (false) {}
    /**
     * Identifies requests with the method JSONP and
     * shifts them to the `JsonpClientBackend`.
     *
     * @see `HttpInterceptor`
     *
     * \@publicApi
     */


    var JsonpInterceptor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} jsonp
       */
      function JsonpInterceptor(jsonp) {
        _classCallCheck(this, JsonpInterceptor);

        this.jsonp = jsonp;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param {?} req The outgoing request object to handle.
       * @param {?} next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @return {?} An observable of the event stream.
       */


      _createClass(JsonpInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (req.method === 'JSONP') {
            return this.jsonp.handle(
            /** @type {?} */
            req);
          } // Fall through for normal HTTP requests.


          return next.handle(req);
        }
      }]);

      return JsonpInterceptor;
    }();

    JsonpInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpInterceptor.ctorParameters = function () {
      return [{
        type: JsonpClientBackend
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSSI_PREFIX = /^\)\]\}',?\n/;
    /**
     * Determine an appropriate URL for the response, by checking either
     * XMLHttpRequest.responseURL or the X-Request-URL header.
     * @param {?} xhr
     * @return {?}
     */

    function getResponseUrl(xhr) {
      if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
      }

      if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
      }

      return null;
    }
    /**
     * A wrapper around the `XMLHttpRequest` constructor.
     *
     * \@publicApi
     * @abstract
     */


    var XhrFactory = function XhrFactory() {
      _classCallCheck(this, XhrFactory);
    };

    if (false) {}
    /**
     * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
     *
     */


    var BrowserXhr =
    /*#__PURE__*/
    function () {
      function BrowserXhr() {
        _classCallCheck(this, BrowserXhr);
      }
      /**
       * @return {?}
       */


      _createClass(BrowserXhr, [{
        key: "build",
        value: function build() {
          return (
            /** @type {?} */
            new XMLHttpRequest()
          );
        }
      }]);

      return BrowserXhr;
    }();

    BrowserXhr.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    BrowserXhr.ctorParameters = function () {
      return [];
    };
    /**
     * Tracks a response from the server that does not yet have a body.
     * @record
     */


    function PartialResponse() {}

    if (false) {}
    /**
     * Uses `XMLHttpRequest` to send requests to a backend server.
     * @see `HttpHandler`
     * @see `JsonpClientBackend`
     *
     * \@publicApi
     */


    var HttpXhrBackend =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} xhrFactory
       */
      function HttpXhrBackend(xhrFactory) {
        _classCallCheck(this, HttpXhrBackend);

        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param {?} req The request object.
       * @return {?} An observable of the response events.
       */


      _createClass(HttpXhrBackend, [{
        key: "handle",
        value: function handle(req) {
          var _this13 = this;

          // Quick check to give a better error message when a user attempts to use
          // HttpClient.jsonp() without installing the JsonpClientModule
          if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
          } // Everything happens on Observable subscription.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.

            /** @type {?} */
            var xhr = _this13.xhrFactory.build();

            xhr.open(req.method, req.urlWithParams);

            if (!!req.withCredentials) {
              xhr.withCredentials = true;
            } // Add all the requested headers.


            req.headers.forEach(
            /**
            * @param {?} name
            * @param {?} values
            * @return {?}
            */
            function (name, values) {
              return xhr.setRequestHeader(name, values.join(','));
            }); // Add an Accept header if one isn't present already.

            if (!req.headers.has('Accept')) {
              xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            } // Auto-detect the Content-Type header if one isn't present already.


            if (!req.headers.has('Content-Type')) {
              /** @type {?} */
              var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

              if (detectedType !== null) {
                xhr.setRequestHeader('Content-Type', detectedType);
              }
            } // Set the responseType if one was requested.


            if (req.responseType) {
              /** @type {?} */
              var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
              // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
              // xhr.response will be null, and xhr.responseText cannot be accessed to
              // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
              // is parsed by first requesting text and then applying JSON.parse.

              xhr.responseType =
              /** @type {?} */
              responseType !== 'json' ? responseType : 'text';
            } // Serialize the request body if one is present. If not, this will be set to null.

            /** @type {?} */


            var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.

            /** @type {?} */

            var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.

            /** @type {?} */

            var partialFromXhr =
            /**
            * @return {?}
            */
            function partialFromXhr() {
              if (headerResponse !== null) {
                return headerResponse;
              } // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).

              /** @type {?} */


              var status = xhr.status === 1223 ? 204 : xhr.status;
              /** @type {?} */

              var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

              /** @type {?} */

              var headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
              // request URL.

              /** @type {?} */

              var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

              headerResponse = new HttpHeaderResponse({
                headers: headers,
                status: status,
                statusText: statusText,
                url: url
              });
              return headerResponse;
            }; // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.

            /** @type {?} */


            var onLoad =
            /**
            * @return {?}
            */
            function onLoad() {
              // Read response state from the memoized partial data.
              var _partialFromXhr = partialFromXhr(),
                  headers = _partialFromXhr.headers,
                  status = _partialFromXhr.status,
                  statusText = _partialFromXhr.statusText,
                  url = _partialFromXhr.url; // The body will be read out if present.

              /** @type {?} */


              var body = null;

              if (status !== 204) {
                // Use XMLHttpRequest.response if set, responseText otherwise.
                body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
              } // Normalize another potential bug (this one comes from CORS).


              if (status === 0) {
                status = !!body ? 200 : 0;
              } // ok determines whether the response will be transmitted on the event or
              // error channel. Unsuccessful status codes (not 2xx) will always be errors,
              // but a successful status code can still result in an error if the user
              // asked for JSON data and the body cannot be parsed as such.

              /** @type {?} */


              var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
              // will have done that already).

              if (req.responseType === 'json' && typeof body === 'string') {
                // Save the original body, before attempting XSSI prefix stripping.

                /** @type {?} */
                var originalBody = body;
                body = body.replace(XSSI_PREFIX, '');

                try {
                  // Attempt the parse. If it fails, a parse error should be delivered to the user.
                  body = body !== '' ? JSON.parse(body) : null;
                } catch (error) {
                  // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                  // JSON response. Restore the original body (including any XSSI prefix) to deliver
                  // a better error response.
                  body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
                  // just isn't JSON. Otherwise, deliver the parsing error to the user.

                  if (ok) {
                    // Even though the response status was 2xx, this is still an error.
                    ok = false; // The parse error contains the text of the body that failed to parse.

                    body =
                    /** @type {?} */
                    {
                      error: error,
                      text: body
                    };
                  }
                }
              }

              if (ok) {
                // A successful response is delivered on the event stream.
                observer.next(new HttpResponse({
                  body: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                })); // The full body has been received and delivered, no further events
                // are possible. This request is complete.

                observer.complete();
              } else {
                // An unsuccessful request is delivered on the error channel.
                observer.error(new HttpErrorResponse({
                  // The error in this case is the response body (error from the server).
                  error: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                }));
              }
            }; // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              var _partialFromXhr2 = partialFromXhr(),
                  url = _partialFromXhr2.url;
              /** @type {?} */


              var res = new HttpErrorResponse({
                error: error,
                status: xhr.status || 0,
                statusText: xhr.statusText || 'Unknown Error',
                url: url || undefined
              });
              observer.error(res);
            }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.

            /** @type {?} */


            var sentHeaders = false; // The download progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */

            var onDownProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onDownProgress(event) {
              // Send the HttpResponseHeaders event if it hasn't been sent already.
              if (!sentHeaders) {
                observer.next(partialFromXhr());
                sentHeaders = true;
              } // Start building the download progress event to deliver on the response
              // event stream.

              /** @type {?} */


              var progressEvent = {
                type: HttpEventType.DownloadProgress,
                loaded: event.loaded
              }; // Set the total number of bytes in the event if it's available.

              if (event.lengthComputable) {
                progressEvent.total = event.total;
              } // If the request was for text content and a partial response is
              // available on XMLHttpRequest, include it in the progress event
              // to allow for streaming reads.


              if (req.responseType === 'text' && !!xhr.responseText) {
                progressEvent.partialText = xhr.responseText;
              } // Finally, fire the event.


              observer.next(progressEvent);
            }; // The upload progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */


            var onUpProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onUpProgress(event) {
              // Upload progress events are simpler. Begin building the progress
              // event.

              /** @type {?} */
              var progress = {
                type: HttpEventType.UploadProgress,
                loaded: event.loaded
              }; // If the total number of bytes being uploaded is available, include
              // it.

              if (event.lengthComputable) {
                progress.total = event.total;
              } // Send the event.


              observer.next(progress);
            }; // By default, register for load and error events.


            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError); // Progress events are only enabled if requested.

            if (req.reportProgress) {
              // Download progress is always enabled if requested.
              xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

              if (reqBody !== null && xhr.upload) {
                xhr.upload.addEventListener('progress', onUpProgress);
              }
            } // Fire the request, and notify the event stream that it was fired.


            xhr.send(
            /** @type {?} */
            reqBody);
            observer.next({
              type: HttpEventType.Sent
            }); // This is the return from the Observable function, which is the
            // request cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);

                if (req.reportProgress) {
                  xhr.removeEventListener('progress', onDownProgress);

                  if (reqBody !== null && xhr.upload) {
                    xhr.upload.removeEventListener('progress', onUpProgress);
                  }
                } // Finally, abort the in-flight request.


                xhr.abort();
              }
            );
          });
        }
      }]);

      return HttpXhrBackend;
    }();

    HttpXhrBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXhrBackend.ctorParameters = function () {
      return [{
        type: XhrFactory
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
    /** @type {?} */

    var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
    /**
     * Retrieves the current XSRF token to use with the next outgoing request.
     *
     * \@publicApi
     * @abstract
     */

    var HttpXsrfTokenExtractor = function HttpXsrfTokenExtractor() {
      _classCallCheck(this, HttpXsrfTokenExtractor);
    };

    if (false) {}
    /**
     * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
     */


    var HttpXsrfCookieExtractor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} doc
       * @param {?} platform
       * @param {?} cookieName
       */
      function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        _classCallCheck(this, HttpXsrfCookieExtractor);

        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */

        this.parseCount = 0;
      }
      /**
       * @return {?}
       */


      _createClass(HttpXsrfCookieExtractor, [{
        key: "getToken",
        value: function getToken() {
          if (this.platform === 'server') {
            return null;
          }
          /** @type {?} */


          var cookieString = this.doc.cookie || '';

          if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
          }

          return this.lastToken;
        }
      }]);

      return HttpXsrfCookieExtractor;
    }();

    HttpXsrfCookieExtractor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfCookieExtractor.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_COOKIE_NAME]
        }]
      }];
    };

    if (false) {}
    /**
     * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
     */


    var HttpXsrfInterceptor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} tokenService
       * @param {?} headerName
       */
      function HttpXsrfInterceptor(tokenService, headerName) {
        _classCallCheck(this, HttpXsrfInterceptor);

        this.tokenService = tokenService;
        this.headerName = headerName;
      }
      /**
       * @param {?} req
       * @param {?} next
       * @return {?}
       */


      _createClass(HttpXsrfInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          /** @type {?} */
          var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
          // Non-mutating requests don't require a token, and absolute URLs require special handling
          // anyway as the cookie set
          // on our origin is not the same as the token expected by another origin.

          if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
            return next.handle(req);
          }
          /** @type {?} */


          var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

          if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({
              headers: req.headers.set(this.headerName, token)
            });
          }

          return next.handle(req);
        }
      }]);

      return HttpXsrfInterceptor;
    }();

    HttpXsrfInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfInterceptor.ctorParameters = function () {
      return [{
        type: HttpXsrfTokenExtractor
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_HEADER_NAME]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An injectable `HttpHandler` that applies multiple interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * The interceptors are loaded lazily from the injector, to allow
     * interceptors to themselves inject classes depending indirectly
     * on `HttpInterceptingHandler` itself.
     * @see `HttpInterceptor`
     */


    var HttpInterceptingHandler =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} backend
       * @param {?} injector
       */
      function HttpInterceptingHandler(backend, injector) {
        _classCallCheck(this, HttpInterceptingHandler);

        this.backend = backend;
        this.injector = injector;
        this.chain = null;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptingHandler, [{
        key: "handle",
        value: function handle(req) {
          if (this.chain === null) {
            /** @type {?} */
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(
            /**
            * @param {?} next
            * @param {?} interceptor
            * @return {?}
            */
            function (next, interceptor) {
              return new HttpInterceptorHandler(next, interceptor);
            }, this.backend);
          }

          return this.chain.handle(req);
        }
      }]);

      return HttpInterceptingHandler;
    }();

    HttpInterceptingHandler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpInterceptingHandler.ctorParameters = function () {
      return [{
        type: HttpBackend
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    if (false) {}
    /**
     * Constructs an `HttpHandler` that applies interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * Use as a factory function within `HttpClientModule`.
     *
     *
     * @param {?} backend
     * @param {?=} interceptors
     * @return {?}
     */


    function interceptingHandler(backend) {
      var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!interceptors) {
        return backend;
      }

      return interceptors.reduceRight(
      /**
      * @param {?} next
      * @param {?} interceptor
      * @return {?}
      */
      function (next, interceptor) {
        return new HttpInterceptorHandler(next, interceptor);
      }, backend);
    }
    /**
     * Factory function that determines where to store JSONP callbacks.
     *
     * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
     * in test environments. In that case, callbacks are stored on an anonymous object instead.
     *
     *
     * @return {?}
     */


    function jsonpCallbackContext() {
      if (typeof window === 'object') {
        return window;
      }

      return {};
    }
    /**
     * Configures XSRF protection support for outgoing requests.
     *
     * For a server that supports a cookie-based XSRF protection system,
     * use directly to configure XSRF protection with the correct
     * cookie and header names.
     *
     * If no names are supplied, the default cookie name is `XSRF-TOKEN`
     * and the default header name is `X-XSRF-TOKEN`.
     *
     * \@publicApi
     */


    var HttpClientXsrfModule =
    /*#__PURE__*/
    function () {
      function HttpClientXsrfModule() {
        _classCallCheck(this, HttpClientXsrfModule);
      }

      _createClass(HttpClientXsrfModule, null, [{
        key: "disable",

        /**
         * Disable the default XSRF protection.
         * @return {?}
         */
        value: function disable() {
          return {
            ngModule: HttpClientXsrfModule,
            providers: [{
              provide: HttpXsrfInterceptor,
              useClass: NoopInterceptor
            }]
          };
        }
        /**
         * Configure XSRF protection.
         * @param {?=} options An object that can specify either or both
         * cookie name or header name.
         * - Cookie name default is `XSRF-TOKEN`.
         * - Header name default is `X-XSRF-TOKEN`.
         *
         * @return {?}
         */

      }, {
        key: "withOptions",
        value: function withOptions() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: HttpClientXsrfModule,
            providers: [options.cookieName ? {
              provide: XSRF_COOKIE_NAME,
              useValue: options.cookieName
            } : [], options.headerName ? {
              provide: XSRF_HEADER_NAME,
              useValue: options.headerName
            } : []]
          };
        }
      }]);

      return HttpClientXsrfModule;
    }();

    HttpClientXsrfModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [HttpXsrfInterceptor, {
          provide: HTTP_INTERCEPTORS,
          useExisting: HttpXsrfInterceptor,
          multi: true
        }, {
          provide: HttpXsrfTokenExtractor,
          useClass: HttpXsrfCookieExtractor
        }, {
          provide: XSRF_COOKIE_NAME,
          useValue: 'XSRF-TOKEN'
        }, {
          provide: XSRF_HEADER_NAME,
          useValue: 'X-XSRF-TOKEN'
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientModule = function HttpClientModule() {
      _classCallCheck(this, HttpClientModule);
    };

    HttpClientModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        /**
         * Optional configuration for XSRF protection.
         */
        imports: [HttpClientXsrfModule.withOptions({
          cookieName: 'XSRF-TOKEN',
          headerName: 'X-XSRF-TOKEN'
        })],

        /**
         * Configures the [dependency injector](guide/glossary#injector) where it is imported
         * with supporting services for HTTP communications.
         */
        providers: [HttpClient, {
          provide: HttpHandler,
          useClass: HttpInterceptingHandler
        }, HttpXhrBackend, {
          provide: HttpBackend,
          useExisting: HttpXhrBackend
        }, BrowserXhr, {
          provide: XhrFactory,
          useExisting: BrowserXhr
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for JSONP.
     * Without this module, Jsonp requests reach the backend
     * with method JSONP, where they are rejected.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientJsonpModule = function HttpClientJsonpModule() {
      _classCallCheck(this, HttpClientJsonpModule);
    };

    HttpClientJsonpModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [JsonpClientBackend, {
          provide: JsonpCallbackContext,
          useFactory: jsonpCallbackContext
        }, {
          provide: HTTP_INTERCEPTORS,
          useClass: JsonpInterceptor,
          multi: true
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=http.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/fesm2015/primeng-calendar.js":
  /*!***********************************************************!*\
    !*** ./node_modules/primeng/fesm2015/primeng-calendar.js ***!
    \***********************************************************/

  /*! exports provided: CALENDAR_VALUE_ACCESSOR, Calendar, CalendarModule */

  /***/
  function node_modulesPrimengFesm2015PrimengCalendarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CALENDAR_VALUE_ACCESSOR", function () {
      return CALENDAR_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Calendar", function () {
      return Calendar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/fesm2015/primeng-dom.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var CALENDAR_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return Calendar;
      }),
      multi: true
    };

    var Calendar =
    /*#__PURE__*/
    function () {
      function Calendar(el, renderer, cd, zone) {
        _classCallCheck(this, Calendar);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.dateFormat = 'mm/dd/yy';
        this.multipleSeparator = ',';
        this.rangeSeparator = '-';
        this.inline = false;
        this.showOtherMonths = true;
        this.icon = 'pi pi-calendar';
        this.shortYearCutoff = '+10';
        this.hourFormat = '24';
        this.stepHour = 1;
        this.stepMinute = 1;
        this.stepSecond = 1;
        this.showSeconds = false;
        this.showOnFocus = true;
        this.showWeek = false;
        this.dataType = 'date';
        this.selectionMode = 'single';
        this.todayButtonStyleClass = 'ui-button-secondary';
        this.clearButtonStyleClass = 'ui-button-secondary';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.keepInvalid = false;
        this.hideOnDateTimeSelect = false;
        this.numberOfMonths = 1;
        this.view = 'date';
        this.timeSeparator = ":";
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTodayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClearClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._locale = {
          firstDayOfWeek: 0,
          dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'mm/dd/yy',
          weekHeader: 'Wk'
        };

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.inputFieldValue = null;
        this.navigationState = null;
      }

      _createClass(Calendar, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var date = this.defaultDate || new Date();
          this.currentMonth = date.getMonth();
          this.currentYear = date.getFullYear();

          if (this.view === 'date') {
            this.createWeekDays();
            this.initTime(date);
            this.createMonths(this.currentMonth, this.currentYear);
            this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;
          } else if (this.view === 'month') {
            this.createMonthPickerValues();
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this14 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'date':
                _this14.dateTemplate = item.template;
                break;

              default:
                _this14.dateTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "populateYearOptions",
        value: function populateYearOptions(start, end) {
          this.yearOptions = [];

          for (var i = start; i <= end; i++) {
            this.yearOptions.push(i);
          }
        }
      }, {
        key: "createWeekDays",
        value: function createWeekDays() {
          this.weekDays = [];
          var dayIndex = this.locale.firstDayOfWeek;

          for (var i = 0; i < 7; i++) {
            this.weekDays.push(this.locale.dayNamesMin[dayIndex]);
            dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
          }
        }
      }, {
        key: "createMonthPickerValues",
        value: function createMonthPickerValues() {
          this.monthPickerValues = [];

          for (var i = 0; i <= 11; i++) {
            this.monthPickerValues.push(this.locale.monthNamesShort[i]);
          }
        }
      }, {
        key: "createMonths",
        value: function createMonths(month, year) {
          this.months = this.months = [];

          for (var i = 0; i < this.numberOfMonths; i++) {
            var m = month + i;
            var y = year;

            if (m > 11) {
              m = m % 11 - 1;
              y = year + 1;
            }

            this.months.push(this.createMonth(m, y));
          }
        }
      }, {
        key: "getWeekNumber",
        value: function getWeekNumber(date) {
          var checkDate = new Date(date.getTime());
          checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
          var time = checkDate.getTime();
          checkDate.setMonth(0);
          checkDate.setDate(1);
          return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
        }
      }, {
        key: "createMonth",
        value: function createMonth(month, year) {
          var dates = [];
          var firstDay = this.getFirstDayOfMonthIndex(month, year);
          var daysLength = this.getDaysCountInMonth(month, year);
          var prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
          var dayNo = 1;
          var today = new Date();
          var weekNumbers = [];
          var monthRows = Math.ceil((daysLength + firstDay) / 7);

          for (var i = 0; i < monthRows; i++) {
            var week = [];

            if (i == 0) {
              for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
                var prev = this.getPreviousMonthAndYear(month, year);
                week.push({
                  day: j,
                  month: prev.month,
                  year: prev.year,
                  otherMonth: true,
                  today: this.isToday(today, j, prev.month, prev.year),
                  selectable: this.isSelectable(j, prev.month, prev.year, true)
                });
              }

              var remainingDaysLength = 7 - week.length;

              for (var _j = 0; _j < remainingDaysLength; _j++) {
                week.push({
                  day: dayNo,
                  month: month,
                  year: year,
                  today: this.isToday(today, dayNo, month, year),
                  selectable: this.isSelectable(dayNo, month, year, false)
                });
                dayNo++;
              }
            } else {
              for (var _j2 = 0; _j2 < 7; _j2++) {
                if (dayNo > daysLength) {
                  var next = this.getNextMonthAndYear(month, year);
                  week.push({
                    day: dayNo - daysLength,
                    month: next.month,
                    year: next.year,
                    otherMonth: true,
                    today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                    selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
                  });
                } else {
                  week.push({
                    day: dayNo,
                    month: month,
                    year: year,
                    today: this.isToday(today, dayNo, month, year),
                    selectable: this.isSelectable(dayNo, month, year, false)
                  });
                }

                dayNo++;
              }
            }

            if (this.showWeek) {
              weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
            }

            dates.push(week);
          }

          return {
            month: month,
            year: year,
            dates: dates,
            weekNumbers: weekNumbers
          };
        }
      }, {
        key: "initTime",
        value: function initTime(date) {
          this.pm = date.getHours() > 11;

          if (this.showTime) {
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
            if (this.hourFormat == '12') this.currentHour = date.getHours() == 0 ? 12 : date.getHours() % 12;else this.currentHour = date.getHours();
          } else if (this.timeOnly) {
            this.currentMinute = 0;
            this.currentHour = 0;
            this.currentSecond = 0;
          }
        }
      }, {
        key: "navBackward",
        value: function navBackward(event) {
          event.stopPropagation();

          if (this.disabled) {
            event.preventDefault();
            return;
          }

          this.isMonthNavigate = true;

          if (this.view === 'month') {
            this.decrementYear();
          } else {
            if (this.currentMonth === 0) {
              this.currentMonth = 11;
              this.decrementYear();
            } else {
              this.currentMonth--;
            }

            this.onMonthChange.emit({
              month: this.currentMonth + 1,
              year: this.currentYear
            });
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "navForward",
        value: function navForward(event) {
          event.stopPropagation();

          if (this.disabled) {
            event.preventDefault();
            return;
          }

          this.isMonthNavigate = true;

          if (this.view === 'month') {
            this.incrementYear();
          } else {
            if (this.currentMonth === 11) {
              this.currentMonth = 0;
              this.incrementYear();
            } else {
              this.currentMonth++;
            }

            this.onMonthChange.emit({
              month: this.currentMonth + 1,
              year: this.currentYear
            });
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "decrementYear",
        value: function decrementYear() {
          this.currentYear--;

          if (this.yearNavigator && this.currentYear < this.yearOptions[0]) {
            var difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
            this.populateYearOptions(this.yearOptions[0] - difference, this.yearOptions[this.yearOptions.length - 1] - difference);
          }
        }
      }, {
        key: "incrementYear",
        value: function incrementYear() {
          this.currentYear++;

          if (this.yearNavigator && this.currentYear > this.yearOptions[this.yearOptions.length - 1]) {
            var difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
            this.populateYearOptions(this.yearOptions[0] + difference, this.yearOptions[this.yearOptions.length - 1] + difference);
          }
        }
      }, {
        key: "onDateSelect",
        value: function onDateSelect(event, dateMeta) {
          var _this15 = this;

          if (this.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
          }

          if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
            this.value = this.value.filter(function (date, i) {
              return !_this15.isDateEquals(date, dateMeta);
            });
            this.updateModel(this.value);
          } else {
            if (this.shouldSelectDate(dateMeta)) {
              if (dateMeta.otherMonth) {
                this.currentMonth = dateMeta.month;
                this.currentYear = dateMeta.year;
                this.createMonths(this.currentMonth, this.currentYear);
                this.selectDate(dateMeta);
              } else {
                this.selectDate(dateMeta);
              }
            }
          }

          if (this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect)) {
            setTimeout(function () {
              event.preventDefault();

              _this15.hideOverlay();

              if (_this15.mask) {
                _this15.disableModality();
              }

              _this15.cd.markForCheck();
            }, 150);
          }

          this.updateInputfield();
          event.preventDefault();
        }
      }, {
        key: "shouldSelectDate",
        value: function shouldSelectDate(dateMeta) {
          if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;else return true;
        }
      }, {
        key: "onMonthSelect",
        value: function onMonthSelect(event, index) {
          this.onDateSelect(event, {
            year: this.currentYear,
            month: index,
            day: 1,
            selectable: true
          });
        }
      }, {
        key: "updateInputfield",
        value: function updateInputfield() {
          var formattedValue = '';

          if (this.value) {
            if (this.isSingleSelection()) {
              formattedValue = this.formatDateTime(this.value);
            } else if (this.isMultipleSelection()) {
              for (var i = 0; i < this.value.length; i++) {
                var dateAsString = this.formatDateTime(this.value[i]);
                formattedValue += dateAsString;

                if (i !== this.value.length - 1) {
                  formattedValue += this.multipleSeparator + ' ';
                }
              }
            } else if (this.isRangeSelection()) {
              if (this.value && this.value.length) {
                var startDate = this.value[0];
                var endDate = this.value[1];
                formattedValue = this.formatDateTime(startDate);

                if (endDate) {
                  formattedValue += ' ' + this.rangeSeparator + ' ' + this.formatDateTime(endDate);
                }
              }
            }
          }

          this.inputFieldValue = formattedValue;
          this.updateFilledState();

          if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
            this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
          }
        }
      }, {
        key: "formatDateTime",
        value: function formatDateTime(date) {
          var formattedValue = null;

          if (date) {
            if (this.timeOnly) {
              formattedValue = this.formatTime(date);
            } else {
              formattedValue = this.formatDate(date, this.getDateFormat());

              if (this.showTime) {
                formattedValue += ' ' + this.formatTime(date);
              }
            }
          }

          return formattedValue;
        }
      }, {
        key: "selectDate",
        value: function selectDate(dateMeta) {
          var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

          if (this.showTime) {
            if (this.hourFormat == '12') {
              if (this.currentHour === 12) date.setHours(this.pm ? 12 : 0);else date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
            } else {
              date.setHours(this.currentHour);
            }

            date.setMinutes(this.currentMinute);
            date.setSeconds(this.currentSecond);
          }

          if (this.minDate && this.minDate > date) {
            date = this.minDate;
            this.currentHour = date.getHours();
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
          }

          if (this.maxDate && this.maxDate < date) {
            date = this.maxDate;
            this.currentHour = date.getHours();
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
          }

          if (this.isSingleSelection()) {
            this.updateModel(date);
          } else if (this.isMultipleSelection()) {
            this.updateModel(this.value ? [].concat(_toConsumableArray(this.value), [date]) : [date]);
          } else if (this.isRangeSelection()) {
            if (this.value && this.value.length) {
              var startDate = this.value[0];
              var endDate = this.value[1];

              if (!endDate && date.getTime() >= startDate.getTime()) {
                endDate = date;
              } else {
                startDate = date;
                endDate = null;
              }

              this.updateModel([startDate, endDate]);
            } else {
              this.updateModel([date, null]);
            }
          }

          this.onSelect.emit(date);
        }
      }, {
        key: "updateModel",
        value: function updateModel(value) {
          var _this16 = this;

          this.value = value;

          if (this.dataType == 'date') {
            this.onModelChange(this.value);
          } else if (this.dataType == 'string') {
            if (this.isSingleSelection()) {
              this.onModelChange(this.formatDateTime(this.value));
            } else {
              var stringArrValue = null;

              if (this.value) {
                stringArrValue = this.value.map(function (date) {
                  return _this16.formatDateTime(date);
                });
              }

              this.onModelChange(stringArrValue);
            }
          }
        }
      }, {
        key: "getFirstDayOfMonthIndex",
        value: function getFirstDayOfMonthIndex(month, year) {
          var day = new Date();
          day.setDate(1);
          day.setMonth(month);
          day.setFullYear(year);
          var dayIndex = day.getDay() + this.getSundayIndex();
          return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
        }
      }, {
        key: "getDaysCountInMonth",
        value: function getDaysCountInMonth(month, year) {
          return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
        }
      }, {
        key: "getDaysCountInPrevMonth",
        value: function getDaysCountInPrevMonth(month, year) {
          var prev = this.getPreviousMonthAndYear(month, year);
          return this.getDaysCountInMonth(prev.month, prev.year);
        }
      }, {
        key: "getPreviousMonthAndYear",
        value: function getPreviousMonthAndYear(month, year) {
          var m, y;

          if (month === 0) {
            m = 11;
            y = year - 1;
          } else {
            m = month - 1;
            y = year;
          }

          return {
            'month': m,
            'year': y
          };
        }
      }, {
        key: "getNextMonthAndYear",
        value: function getNextMonthAndYear(month, year) {
          var m, y;

          if (month === 11) {
            m = 0;
            y = year + 1;
          } else {
            m = month + 1;
            y = year;
          }

          return {
            'month': m,
            'year': y
          };
        }
      }, {
        key: "getSundayIndex",
        value: function getSundayIndex() {
          return this.locale.firstDayOfWeek > 0 ? 7 - this.locale.firstDayOfWeek : 0;
        }
      }, {
        key: "isSelected",
        value: function isSelected(dateMeta) {
          if (this.value) {
            if (this.isSingleSelection()) {
              return this.isDateEquals(this.value, dateMeta);
            } else if (this.isMultipleSelection()) {
              var selected = false;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = this.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var date = _step.value;
                  selected = this.isDateEquals(date, dateMeta);

                  if (selected) {
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              return selected;
            } else if (this.isRangeSelection()) {
              if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);else return this.isDateEquals(this.value[0], dateMeta);
            }
          } else {
            return false;
          }
        }
      }, {
        key: "isMonthSelected",
        value: function isMonthSelected(month) {
          var day = this.value ? Array.isArray(this.value) ? this.value[0].getDate() : this.value.getDate() : 1;
          return this.isSelected({
            year: this.currentYear,
            month: month,
            day: day,
            selectable: true
          });
        }
      }, {
        key: "isDateEquals",
        value: function isDateEquals(value, dateMeta) {
          if (value) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;else return false;
        }
      }, {
        key: "isDateBetween",
        value: function isDateBetween(start, end, dateMeta) {
          var between = false;

          if (start && end) {
            var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
          }

          return between;
        }
      }, {
        key: "isSingleSelection",
        value: function isSingleSelection() {
          return this.selectionMode === 'single';
        }
      }, {
        key: "isRangeSelection",
        value: function isRangeSelection() {
          return this.selectionMode === 'range';
        }
      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this.selectionMode === 'multiple';
        }
      }, {
        key: "isToday",
        value: function isToday(today, day, month, year) {
          return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
        }
      }, {
        key: "isSelectable",
        value: function isSelectable(day, month, year, otherMonth) {
          var validMin = true;
          var validMax = true;
          var validDate = true;
          var validDay = true;

          if (otherMonth && !this.selectOtherMonths) {
            return false;
          }

          if (this.minDate) {
            if (this.minDate.getFullYear() > year) {
              validMin = false;
            } else if (this.minDate.getFullYear() === year) {
              if (this.minDate.getMonth() > month) {
                validMin = false;
              } else if (this.minDate.getMonth() === month) {
                if (this.minDate.getDate() > day) {
                  validMin = false;
                }
              }
            }
          }

          if (this.maxDate) {
            if (this.maxDate.getFullYear() < year) {
              validMax = false;
            } else if (this.maxDate.getFullYear() === year) {
              if (this.maxDate.getMonth() < month) {
                validMax = false;
              } else if (this.maxDate.getMonth() === month) {
                if (this.maxDate.getDate() < day) {
                  validMax = false;
                }
              }
            }
          }

          if (this.disabledDates) {
            validDate = !this.isDateDisabled(day, month, year);
          }

          if (this.disabledDays) {
            validDay = !this.isDayDisabled(day, month, year);
          }

          return validMin && validMax && validDate && validDay;
        }
      }, {
        key: "isDateDisabled",
        value: function isDateDisabled(day, month, year) {
          if (this.disabledDates) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.disabledDates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var disabledDate = _step2.value;

                if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
                  return true;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          return false;
        }
      }, {
        key: "isDayDisabled",
        value: function isDayDisabled(day, month, year) {
          if (this.disabledDays) {
            var weekday = new Date(year, month, day);
            var weekdayNumber = weekday.getDay();
            return this.disabledDays.indexOf(weekdayNumber) !== -1;
          }

          return false;
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          this.focus = true;

          if (this.showOnFocus) {
            this.showOverlay();
          }

          this.onFocus.emit(event);
        }
      }, {
        key: "onInputClick",
        value: function onInputClick(event) {
          if (this.overlay && this.autoZIndex) {
            this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
          }

          if (this.showOnFocus && !this.overlayVisible) {
            this.showOverlay();
          }
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focus = false;
          this.onBlur.emit(event);

          if (!this.keepInvalid) {
            this.updateInputfield();
          }

          this.onModelTouched();
        }
      }, {
        key: "onButtonClick",
        value: function onButtonClick(event, inputfield) {
          if (!this.overlayVisible) {
            inputfield.focus();
            this.showOverlay();
          } else {
            this.hideOverlay();
          }
        }
      }, {
        key: "onPrevButtonClick",
        value: function onPrevButtonClick(event) {
          this.navigationState = {
            backward: true,
            button: true
          };
          this.navBackward(event);
        }
      }, {
        key: "onNextButtonClick",
        value: function onNextButtonClick(event) {
          this.navigationState = {
            backward: false,
            button: true
          };
          this.navForward(event);
        }
      }, {
        key: "onContainerButtonKeydown",
        value: function onContainerButtonKeydown(event) {
          switch (event.which) {
            //tab
            case 9:
              if (!this.inline) {
                this.trapFocus(event);
              }

              break;
            //escape

            case 27:
              this.overlayVisible = false;
              event.preventDefault();
              break;

            default:
              //Noop
              break;
          }
        }
      }, {
        key: "onInputKeydown",
        value: function onInputKeydown(event) {
          this.isKeydown = true;

          if (event.keyCode === 9 && this.contentViewChild) {
            this.trapFocus(event);
          } else if (event.keyCode === 27) {
            if (this.overlayVisible) {
              this.overlayVisible = false;
              event.preventDefault();
            }
          }
        }
      }, {
        key: "onDateCellKeydown",
        value: function onDateCellKeydown(event, date, groupIndex) {
          var cellContent = event.currentTarget;
          var cell = cellContent.parentElement;

          switch (event.which) {
            //down arrow
            case 40:
              {
                cellContent.tabIndex = '-1';
                var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(cell);
                var nextRow = cell.parentElement.nextElementSibling;

                if (nextRow) {
                  var focusCell = nextRow.children[cellIndex].children[0];

                  if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(focusCell, 'ui-state-disabled')) {
                    this.navigationState = {
                      backward: false
                    };
                    this.navForward(event);
                  } else {
                    nextRow.children[cellIndex].children[0].tabIndex = '0';
                    nextRow.children[cellIndex].children[0].focus();
                  }
                } else {
                  this.navigationState = {
                    backward: false
                  };
                  this.navForward(event);
                }

                event.preventDefault();
                break;
              }
            //up arrow

            case 38:
              {
                cellContent.tabIndex = '-1';

                var _cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(cell);

                var prevRow = cell.parentElement.previousElementSibling;

                if (prevRow) {
                  var _focusCell = prevRow.children[_cellIndex].children[0];

                  if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(_focusCell, 'ui-state-disabled')) {
                    this.navigationState = {
                      backward: true
                    };
                    this.navBackward(event);
                  } else {
                    _focusCell.tabIndex = '0';

                    _focusCell.focus();
                  }
                } else {
                  this.navigationState = {
                    backward: true
                  };
                  this.navBackward(event);
                }

                event.preventDefault();
                break;
              }
            //left arrow

            case 37:
              {
                cellContent.tabIndex = '-1';
                var prevCell = cell.previousElementSibling;

                if (prevCell) {
                  var _focusCell2 = prevCell.children[0];

                  if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(_focusCell2, 'ui-state-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(_focusCell2.parentElement, 'ui-datepicker-weeknumber')) {
                    this.navigateToMonth(true, groupIndex);
                  } else {
                    _focusCell2.tabIndex = '0';

                    _focusCell2.focus();
                  }
                } else {
                  this.navigateToMonth(true, groupIndex);
                }

                event.preventDefault();
                break;
              }
            //right arrow

            case 39:
              {
                cellContent.tabIndex = '-1';
                var nextCell = cell.nextElementSibling;

                if (nextCell) {
                  var _focusCell3 = nextCell.children[0];

                  if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(_focusCell3, 'ui-state-disabled')) {
                    this.navigateToMonth(false, groupIndex);
                  } else {
                    _focusCell3.tabIndex = '0';

                    _focusCell3.focus();
                  }
                } else {
                  this.navigateToMonth(false, groupIndex);
                }

                event.preventDefault();
                break;
              }
            //enter

            case 13:
              {
                this.onDateSelect(event, date);
                event.preventDefault();
                break;
              }
            //escape

            case 27:
              {
                this.overlayVisible = false;
                event.preventDefault();
                break;
              }
            //tab

            case 9:
              {
                if (!this.inline) {
                  this.trapFocus(event);
                }

                break;
              }

            default:
              //no op
              break;
          }
        }
      }, {
        key: "onMonthCellKeydown",
        value: function onMonthCellKeydown(event, index) {
          var cell = event.currentTarget;

          switch (event.which) {
            //arrows
            case 38:
            case 40:
              {
                cell.tabIndex = '-1';
                var cells = cell.parentElement.children;
                var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(cell);
                var nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];

                if (nextCell) {
                  nextCell.tabIndex = '0';
                  nextCell.focus();
                }

                event.preventDefault();
                break;
              }
            //left arrow

            case 37:
              {
                cell.tabIndex = '-1';
                var prevCell = cell.previousElementSibling;

                if (prevCell) {
                  prevCell.tabIndex = '0';
                  prevCell.focus();
                }

                event.preventDefault();
                break;
              }
            //right arrow

            case 39:
              {
                cell.tabIndex = '-1';
                var _nextCell = cell.nextElementSibling;

                if (_nextCell) {
                  _nextCell.tabIndex = '0';

                  _nextCell.focus();
                }

                event.preventDefault();
                break;
              }
            //enter

            case 13:
              {
                this.onMonthSelect(event, index);
                event.preventDefault();
                break;
              }
            //escape

            case 27:
              {
                this.overlayVisible = false;
                event.preventDefault();
                break;
              }
            //tab

            case 9:
              {
                if (!this.inline) {
                  this.trapFocus(event);
                }

                break;
              }

            default:
              //no op
              break;
          }
        }
      }, {
        key: "navigateToMonth",
        value: function navigateToMonth(prev, groupIndex) {
          if (prev) {
            if (this.numberOfMonths === 1 || groupIndex === 0) {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            } else {
              var prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
              var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(prevMonthContainer, '.ui-datepicker-calendar td a');
              var focusCell = cells[cells.length - 1];
              focusCell.tabIndex = '0';
              focusCell.focus();
            }
          } else {
            if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            } else {
              var nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];

              var _focusCell4 = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(nextMonthContainer, '.ui-datepicker-calendar td a');

              _focusCell4.tabIndex = '0';

              _focusCell4.focus();
            }
          }
        }
      }, {
        key: "updateFocus",
        value: function updateFocus() {
          var cell;

          if (this.navigationState) {
            if (this.navigationState.button) {
              this.initFocusableCell();
              if (this.navigationState.backward) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-datepicker-prev').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-datepicker-next').focus();
            } else {
              if (this.navigationState.backward) {
                var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.contentViewChild.nativeElement, '.ui-datepicker-calendar td a');
                cell = cells[cells.length - 1];
              } else {
                cell = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-datepicker-calendar td a');
              }

              if (cell) {
                cell.tabIndex = '0';
                cell.focus();
              }
            }

            this.navigationState = null;
          } else {
            this.initFocusableCell();
          }
        }
      }, {
        key: "initFocusableCell",
        value: function initFocusableCell() {
          var cell;

          if (this.view === 'month') {
            var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.contentViewChild.nativeElement, '.ui-monthpicker .ui-monthpicker-month');
            var selectedCell = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-monthpicker .ui-monthpicker-month.ui-state-highlight');
            cells.forEach(function (cell) {
              return cell.tabIndex = -1;
            });
            cell = selectedCell || cells[0];
          } else {
            cell = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.contentViewChild.nativeElement, 'a.ui-state-active');

            if (!cell) {
              var todayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.contentViewChild.nativeElement, 'td.ui-datepicker-today a:not(.ui-state-disabled)');
              if (todayCell) cell = todayCell;else cell = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-datepicker-calendar td a');
            }
          }

          if (cell) {
            cell.tabIndex = '0';
          }
        }
      }, {
        key: "trapFocus",
        value: function trapFocus(event) {
          event.preventDefault();
          var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getFocusableElements(this.contentViewChild.nativeElement);

          if (focusableElements && focusableElements.length > 0) {
            if (!document.activeElement) {
              focusableElements[0].focus();
            } else {
              var focusedIndex = focusableElements.indexOf(document.activeElement);

              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        }
      }, {
        key: "onMonthDropdownChange",
        value: function onMonthDropdownChange(m) {
          this.currentMonth = parseInt(m);
          this.onMonthChange.emit({
            month: this.currentMonth + 1,
            year: this.currentYear
          });
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }, {
        key: "onYearDropdownChange",
        value: function onYearDropdownChange(y) {
          this.currentYear = parseInt(y);
          this.onYearChange.emit({
            month: this.currentMonth + 1,
            year: this.currentYear
          });
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }, {
        key: "incrementHour",
        value: function incrementHour(event) {
          var prevHour = this.currentHour;
          var newHour = this.currentHour + this.stepHour;

          if (this.validateHour(newHour)) {
            if (this.hourFormat == '24') this.currentHour = newHour >= 24 ? newHour - 24 : newHour;else if (this.hourFormat == '12') {
              // Before the AM/PM break, now after
              if (prevHour < 12 && newHour > 11) {
                this.pm = !this.pm;
              }

              this.currentHour = newHour >= 13 ? newHour - 12 : newHour;
            }
          }

          event.preventDefault();
        }
      }, {
        key: "onTimePickerElementMouseDown",
        value: function onTimePickerElementMouseDown(event, type, direction) {
          if (!this.disabled) {
            this.repeat(event, null, type, direction);
            event.preventDefault();
          }
        }
      }, {
        key: "onTimePickerElementMouseUp",
        value: function onTimePickerElementMouseUp(event) {
          if (!this.disabled) {
            this.clearTimePickerTimer();
            this.updateTime();
          }
        }
      }, {
        key: "onTimePickerElementMouseOut",
        value: function onTimePickerElementMouseOut(event) {
          if (!this.disabled) {
            this.clearTimePickerTimer();
            this.updateTime();
          }
        }
      }, {
        key: "repeat",
        value: function repeat(event, interval, type, direction) {
          var _this17 = this;

          var i = interval || 500;
          this.clearTimePickerTimer();
          this.timePickerTimer = setTimeout(function () {
            _this17.repeat(event, 100, type, direction);
          }, i);

          switch (type) {
            case 0:
              if (direction === 1) this.incrementHour(event);else this.decrementHour(event);
              break;

            case 1:
              if (direction === 1) this.incrementMinute(event);else this.decrementMinute(event);
              break;

            case 2:
              if (direction === 1) this.incrementSecond(event);else this.decrementSecond(event);
              break;
          }

          this.updateInputfield();
        }
      }, {
        key: "clearTimePickerTimer",
        value: function clearTimePickerTimer() {
          if (this.timePickerTimer) {
            clearInterval(this.timePickerTimer);
          }
        }
      }, {
        key: "decrementHour",
        value: function decrementHour(event) {
          var newHour = this.currentHour - this.stepHour;

          if (this.validateHour(newHour)) {
            if (this.hourFormat == '24') this.currentHour = newHour < 0 ? 24 + newHour : newHour;else if (this.hourFormat == '12') {
              // If we were at noon/midnight, then switch
              if (this.currentHour === 12) {
                this.pm = !this.pm;
              }

              this.currentHour = newHour <= 0 ? 12 + newHour : newHour;
            }
          }

          event.preventDefault();
        }
      }, {
        key: "validateHour",
        value: function validateHour(hour) {
          var valid = true;
          var value = this.value;

          if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
          }

          if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
          }

          var valueDateString = value ? value.toDateString() : null;

          if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
            if (this.minDate.getHours() > hour) {
              valid = false;
            }
          }

          if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
            if (this.maxDate.getHours() < hour) {
              valid = false;
            }
          }

          return valid;
        }
      }, {
        key: "incrementMinute",
        value: function incrementMinute(event) {
          var newMinute = this.currentMinute + this.stepMinute;

          if (this.validateMinute(newMinute)) {
            this.currentMinute = newMinute > 59 ? newMinute - 60 : newMinute;
          }

          event.preventDefault();
        }
      }, {
        key: "decrementMinute",
        value: function decrementMinute(event) {
          var newMinute = this.currentMinute - this.stepMinute;
          newMinute = newMinute < 0 ? 60 + newMinute : newMinute;

          if (this.validateMinute(newMinute)) {
            this.currentMinute = newMinute;
          }

          event.preventDefault();
        }
      }, {
        key: "validateMinute",
        value: function validateMinute(minute) {
          var valid = true;
          var value = this.value;

          if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
          }

          if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
          }

          var valueDateString = value ? value.toDateString() : null;

          if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
            if (value.getHours() == this.minDate.getHours()) {
              if (this.minDate.getMinutes() > minute) {
                valid = false;
              }
            }
          }

          if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
            if (value.getHours() == this.maxDate.getHours()) {
              if (this.maxDate.getMinutes() < minute) {
                valid = false;
              }
            }
          }

          return valid;
        }
      }, {
        key: "incrementSecond",
        value: function incrementSecond(event) {
          var newSecond = this.currentSecond + this.stepSecond;

          if (this.validateSecond(newSecond)) {
            this.currentSecond = newSecond > 59 ? newSecond - 60 : newSecond;
          }

          event.preventDefault();
        }
      }, {
        key: "decrementSecond",
        value: function decrementSecond(event) {
          var newSecond = this.currentSecond - this.stepSecond;
          newSecond = newSecond < 0 ? 60 + newSecond : newSecond;

          if (this.validateSecond(newSecond)) {
            this.currentSecond = newSecond;
          }

          event.preventDefault();
        }
      }, {
        key: "validateSecond",
        value: function validateSecond(second) {
          var valid = true;
          var value = this.value;

          if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
          }

          if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
          }

          var valueDateString = value ? value.toDateString() : null;

          if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
            if (this.minDate.getSeconds() > second) {
              valid = false;
            }
          }

          if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
            if (this.maxDate.getSeconds() < second) {
              valid = false;
            }
          }

          return valid;
        }
      }, {
        key: "updateTime",
        value: function updateTime() {
          var value = this.value;

          if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
          }

          if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
          }

          value = value ? new Date(value.getTime()) : new Date();

          if (this.hourFormat == '12') {
            if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
          } else {
            value.setHours(this.currentHour);
          }

          value.setMinutes(this.currentMinute);
          value.setSeconds(this.currentSecond);

          if (this.isRangeSelection()) {
            if (this.value[1]) value = [this.value[0], value];else value = [value, null];
          }

          if (this.isMultipleSelection()) {
            value = [].concat(_toConsumableArray(this.value.slice(0, -1)), [value]);
          }

          this.updateModel(value);
          this.onSelect.emit(value);
          this.updateInputfield();
        }
      }, {
        key: "toggleAMPM",
        value: function toggleAMPM(event) {
          this.pm = !this.pm;
          this.updateTime();
          event.preventDefault();
        }
      }, {
        key: "onUserInput",
        value: function onUserInput(event) {
          // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026
          if (!this.isKeydown) {
            return;
          }

          this.isKeydown = false;
          var val = event.target.value;

          try {
            var value = this.parseValueFromString(val);

            if (this.isValidSelection(value)) {
              this.updateModel(value);
              this.updateUI();
            }
          } catch (err) {
            //invalid date
            this.updateModel(null);
          }

          this.filled = val != null && val.length;
          this.onInput.emit(event);
        }
      }, {
        key: "isValidSelection",
        value: function isValidSelection(value) {
          var _this18 = this;

          var isValid = true;

          if (this.isSingleSelection()) {
            if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
              isValid = false;
            }
          } else if (value.every(function (v) {
            return _this18.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false);
          })) {
            if (this.isRangeSelection()) {
              isValid = value.length > 1 && value[1] > value[0] ? true : false;
            }
          }

          return isValid;
        }
      }, {
        key: "parseValueFromString",
        value: function parseValueFromString(text) {
          if (!text || text.trim().length === 0) {
            return null;
          }

          var value;

          if (this.isSingleSelection()) {
            value = this.parseDateTime(text);
          } else if (this.isMultipleSelection()) {
            var tokens = text.split(this.multipleSeparator);
            value = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = tokens[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var token = _step3.value;
                value.push(this.parseDateTime(token.trim()));
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          } else if (this.isRangeSelection()) {
            var _tokens = text.split(' ' + this.rangeSeparator + ' ');

            value = [];

            for (var i = 0; i < _tokens.length; i++) {
              value[i] = this.parseDateTime(_tokens[i].trim());
            }
          }

          return value;
        }
      }, {
        key: "parseDateTime",
        value: function parseDateTime(text) {
          var date;
          var parts = text.split(' ');

          if (this.timeOnly) {
            date = new Date();
            this.populateTime(date, parts[0], parts[1]);
          } else {
            var dateFormat = this.getDateFormat();

            if (this.showTime) {
              var ampm = this.hourFormat == '12' ? parts.pop() : null;
              var timeString = parts.pop();
              date = this.parseDate(parts.join(' '), dateFormat);
              this.populateTime(date, timeString, ampm);
            } else {
              date = this.parseDate(text, dateFormat);
            }
          }

          return date;
        }
      }, {
        key: "populateTime",
        value: function populateTime(value, timeString, ampm) {
          if (this.hourFormat == '12' && !ampm) {
            throw 'Invalid Time';
          }

          this.pm = ampm === 'PM' || ampm === 'pm';
          var time = this.parseTime(timeString);
          value.setHours(time.hour);
          value.setMinutes(time.minute);
          value.setSeconds(time.second);
        }
      }, {
        key: "updateUI",
        value: function updateUI() {
          var val = this.value || this.defaultDate || new Date();

          if (Array.isArray(val)) {
            val = val[0];
          }

          this.currentMonth = val.getMonth();
          this.currentYear = val.getFullYear();
          this.createMonths(this.currentMonth, this.currentYear);

          if (this.showTime || this.timeOnly) {
            var hours = val.getHours();

            if (this.hourFormat == '12') {
              this.pm = hours > 11;

              if (hours >= 12) {
                this.currentHour = hours == 12 ? 12 : hours - 12;
              } else {
                this.currentHour = hours == 0 ? 12 : hours;
              }
            } else {
              this.currentHour = val.getHours();
            }

            this.currentMinute = val.getMinutes();
            this.currentSecond = val.getSeconds();
          }
        }
      }, {
        key: "showOverlay",
        value: function showOverlay() {
          if (!this.overlayVisible) {
            this.updateUI();
            this.overlayVisible = true;
          }
        }
      }, {
        key: "hideOverlay",
        value: function hideOverlay() {
          this.overlayVisible = false;
          this.clearTimePickerTimer();

          if (this.touchUI) {
            this.disableModality();
          }
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.inline) {
            if (!this.overlayVisible) {
              this.showOverlay();
              this.inputfieldViewChild.nativeElement.focus();
            } else {
              this.hideOverlay();
            }
          }
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
            case 'visibleTouchUI':
              if (!this.inline) {
                this.overlay = event.element;
                this.appendOverlay();

                if (this.autoZIndex) {
                  this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
                }

                this.alignOverlay();
                this.onShow.emit(event);
              }

              break;

            case 'void':
              this.onOverlayHide();
              this.onClose.emit(event);
              break;
          }
        }
      }, {
        key: "onOverlayAnimationDone",
        value: function onOverlayAnimationDone(event) {
          switch (event.toState) {
            case 'visible':
            case 'visibleTouchUI':
              if (!this.inline) {
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
              }

              break;
          }
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.overlay, this.appendTo);
          }
        }
      }, {
        key: "restoreOverlayAppend",
        value: function restoreOverlayAppend() {
          if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
          }
        }
      }, {
        key: "alignOverlay",
        value: function alignOverlay() {
          if (this.touchUI) {
            this.enableModality(this.overlay);
          } else {
            if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].absolutePosition(this.overlay, this.inputfieldViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].relativePosition(this.overlay, this.inputfieldViewChild.nativeElement);
          }
        }
      }, {
        key: "enableModality",
        value: function enableModality(element) {
          var _this19 = this;

          if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(element.style.zIndex) - 1);
            var maskStyleClass = 'ui-widget-overlay ui-datepicker-mask ui-datepicker-mask-scrollblocker';
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addMultipleClasses(this.mask, maskStyleClass);
            this.maskClickListener = this.renderer.listen(this.mask, 'click', function (event) {
              _this19.disableModality();
            });
            document.body.appendChild(this.mask);
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
          }
        }
      }, {
        key: "disableModality",
        value: function disableModality() {
          if (this.mask) {
            document.body.removeChild(this.mask);
            var bodyChildren = document.body.children;
            var hasBlockerMasks;

            for (var i = 0; i < bodyChildren.length; i++) {
              var bodyChild = bodyChildren[i];

              if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(bodyChild, 'ui-datepicker-mask-scrollblocker')) {
                hasBlockerMasks = true;
                break;
              }
            }

            if (!hasBlockerMasks) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }

            this.unbindMaskClickListener();
            this.mask = null;
          }
        }
      }, {
        key: "unbindMaskClickListener",
        value: function unbindMaskClickListener() {
          if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;

          if (this.value && typeof this.value === 'string') {
            this.value = this.parseValueFromString(this.value);
          }

          this.updateInputfield();
          this.updateUI();
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onModelChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onModelTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(val) {
          this.disabled = val;
        }
      }, {
        key: "getDateFormat",
        value: function getDateFormat() {
          return this.dateFormat || this.locale.dateFormat;
        } // Ported from jquery-ui datepicker formatDate

      }, {
        key: "formatDate",
        value: function formatDate(date, format) {
          if (!date) {
            return '';
          }

          var iFormat;

          var lookAhead = function lookAhead(match) {
            var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

            if (matches) {
              iFormat++;
            }

            return matches;
          },
              formatNumber = function formatNumber(match, value, len) {
            var num = '' + value;

            if (lookAhead(match)) {
              while (num.length < len) {
                num = '0' + num;
              }
            }

            return num;
          },
              formatName = function formatName(match, value, shortNames, longNames) {
            return lookAhead(match) ? longNames[value] : shortNames[value];
          };

          var output = '';
          var literal = false;

          if (date) {
            for (iFormat = 0; iFormat < format.length; iFormat++) {
              if (literal) {
                if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
                  literal = false;
                } else {
                  output += format.charAt(iFormat);
                }
              } else {
                switch (format.charAt(iFormat)) {
                  case 'd':
                    output += formatNumber('d', date.getDate(), 2);
                    break;

                  case 'D':
                    output += formatName('D', date.getDay(), this.locale.dayNamesShort, this.locale.dayNames);
                    break;

                  case 'o':
                    output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                    break;

                  case 'm':
                    output += formatNumber('m', date.getMonth() + 1, 2);
                    break;

                  case 'M':
                    output += formatName('M', date.getMonth(), this.locale.monthNamesShort, this.locale.monthNames);
                    break;

                  case 'y':
                    output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
                    break;

                  case '@':
                    output += date.getTime();
                    break;

                  case '!':
                    output += date.getTime() * 10000 + this.ticksTo1970;
                    break;

                  case '\'':
                    if (lookAhead('\'')) {
                      output += '\'';
                    } else {
                      literal = true;
                    }

                    break;

                  default:
                    output += format.charAt(iFormat);
                }
              }
            }
          }

          return output;
        }
      }, {
        key: "formatTime",
        value: function formatTime(date) {
          if (!date) {
            return '';
          }

          var output = '';
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var seconds = date.getSeconds();

          if (this.hourFormat == '12' && hours > 11 && hours != 12) {
            hours -= 12;
          }

          if (this.hourFormat == '12') {
            output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
          } else {
            output += hours < 10 ? '0' + hours : hours;
          }

          output += ':';
          output += minutes < 10 ? '0' + minutes : minutes;

          if (this.showSeconds) {
            output += ':';
            output += seconds < 10 ? '0' + seconds : seconds;
          }

          if (this.hourFormat == '12') {
            output += date.getHours() > 11 ? ' PM' : ' AM';
          }

          return output;
        }
      }, {
        key: "parseTime",
        value: function parseTime(value) {
          var tokens = value.split(':');
          var validTokenLength = this.showSeconds ? 3 : 2;

          if (tokens.length !== validTokenLength) {
            throw "Invalid time";
          }

          var h = parseInt(tokens[0]);
          var m = parseInt(tokens[1]);
          var s = this.showSeconds ? parseInt(tokens[2]) : null;

          if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == '12' && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
            throw "Invalid time";
          } else {
            if (this.hourFormat == '12') {
              if (h !== 12 && this.pm) {
                h += 12;
              } else if (!this.pm && h === 12) {
                h -= 12;
              }
            }

            return {
              hour: h,
              minute: m,
              second: s
            };
          }
        } // Ported from jquery-ui datepicker parseDate

      }, {
        key: "parseDate",
        value: function parseDate(value, format) {
          if (format == null || value == null) {
            throw "Invalid arguments";
          }

          value = typeof value === "object" ? value.toString() : value + "";

          if (value === "") {
            return null;
          }

          var iFormat,
              dim,
              extra,
              iValue = 0,
              shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10),
              year = -1,
              month = -1,
              day = -1,
              doy = -1,
              literal = false,
              date,
              lookAhead = function lookAhead(match) {
            var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

            if (matches) {
              iFormat++;
            }

            return matches;
          },
              getNumber = function getNumber(match) {
            var isDoubled = lookAhead(match),
                size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2,
                minSize = match === "y" ? size : 1,
                digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                num = value.substring(iValue).match(digits);

            if (!num) {
              throw "Missing number at position " + iValue;
            }

            iValue += num[0].length;
            return parseInt(num[0], 10);
          },
              getName = function getName(match, shortNames, longNames) {
            var index = -1;
            var arr = lookAhead(match) ? longNames : shortNames;
            var names = [];

            for (var i = 0; i < arr.length; i++) {
              names.push([i, arr[i]]);
            }

            names.sort(function (a, b) {
              return -(a[1].length - b[1].length);
            });

            for (var _i2 = 0; _i2 < names.length; _i2++) {
              var name = names[_i2][1];

              if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                index = names[_i2][0];
                iValue += name.length;
                break;
              }
            }

            if (index !== -1) {
              return index + 1;
            } else {
              throw "Unknown name at position " + iValue;
            }
          },
              checkLiteral = function checkLiteral() {
            if (value.charAt(iValue) !== format.charAt(iFormat)) {
              throw "Unexpected literal at position " + iValue;
            }

            iValue++;
          };

          if (this.view === 'month') {
            day = 1;
          }

          for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
              if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                literal = false;
              } else {
                checkLiteral();
              }
            } else {
              switch (format.charAt(iFormat)) {
                case "d":
                  day = getNumber("d");
                  break;

                case "D":
                  getName("D", this.locale.dayNamesShort, this.locale.dayNames);
                  break;

                case "o":
                  doy = getNumber("o");
                  break;

                case "m":
                  month = getNumber("m");
                  break;

                case "M":
                  month = getName("M", this.locale.monthNamesShort, this.locale.monthNames);
                  break;

                case "y":
                  year = getNumber("y");
                  break;

                case "@":
                  date = new Date(getNumber("@"));
                  year = date.getFullYear();
                  month = date.getMonth() + 1;
                  day = date.getDate();
                  break;

                case "!":
                  date = new Date((getNumber("!") - this.ticksTo1970) / 10000);
                  year = date.getFullYear();
                  month = date.getMonth() + 1;
                  day = date.getDate();
                  break;

                case "'":
                  if (lookAhead("'")) {
                    checkLiteral();
                  } else {
                    literal = true;
                  }

                  break;

                default:
                  checkLiteral();
              }
            }
          }

          if (iValue < value.length) {
            extra = value.substr(iValue);

            if (!/^\s+/.test(extra)) {
              throw "Extra/unparsed characters found in date: " + extra;
            }
          }

          if (year === -1) {
            year = new Date().getFullYear();
          } else if (year < 100) {
            year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
          }

          if (doy > -1) {
            month = 1;
            day = doy;

            do {
              dim = this.getDaysCountInMonth(year, month - 1);

              if (day <= dim) {
                break;
              }

              month++;
              day -= dim;
            } while (true);
          }

          date = this.daylightSavingAdjust(new Date(year, month - 1, day));

          if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            throw "Invalid date"; // E.g. 31/02/00
          }

          return date;
        }
      }, {
        key: "daylightSavingAdjust",
        value: function daylightSavingAdjust(date) {
          if (!date) {
            return null;
          }

          date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
          return date;
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.inputFieldValue && this.inputFieldValue != '';
        }
      }, {
        key: "onTodayButtonClick",
        value: function onTodayButtonClick(event) {
          var date = new Date();
          var dateMeta = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
            today: true,
            selectable: true
          };
          this.onDateSelect(event, dateMeta);
          this.onTodayClick.emit(event);
        }
      }, {
        key: "onClearButtonClick",
        value: function onClearButtonClick(event) {
          this.updateModel(null);
          this.updateInputfield();
          this.hideOverlay();
          this.onClearClick.emit(event);
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this20 = this;

          if (!this.documentClickListener) {
            this.zone.runOutsideAngular(function () {
              _this20.documentClickListener = _this20.renderer.listen('document', 'click', function (event) {
                if (_this20.isOutsideClicked(event) && _this20.overlayVisible) {
                  _this20.zone.run(function () {
                    _this20.hideOverlay();

                    _this20.onClickOutside.emit(event);

                    _this20.cd.markForCheck();
                  });
                }
              });
            });
          }
        }
      }, {
        key: "unbindDocumentClickListener",
        value: function unbindDocumentClickListener() {
          if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
          }
        }
      }, {
        key: "bindDocumentResizeListener",
        value: function bindDocumentResizeListener() {
          if (!this.documentResizeListener && !this.touchUI) {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
          }
        }
      }, {
        key: "unbindDocumentResizeListener",
        value: function unbindDocumentResizeListener() {
          if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
          }
        }
      }, {
        key: "isOutsideClicked",
        value: function isOutsideClicked(event) {
          return !(this.el.nativeElement.isSameNode(event.target) || this.isNavIconClicked(event) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
        }
      }, {
        key: "isNavIconClicked",
        value: function isNavIconClicked(event) {
          return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-datepicker-prev') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-datepicker-prev-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-datepicker-next') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-datepicker-next-icon');
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].isAndroid()) {
            this.hideOverlay();
          }
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindMaskClickListener();
          this.unbindDocumentResizeListener();
          this.overlay = null;
          this.disableModality();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clearTimePickerTimer();
          this.restoreOverlayAppend();
          this.onOverlayHide();
        }
      }, {
        key: "content",
        set: function set(content) {
          var _this21 = this;

          this.contentViewChild = content;

          if (this.contentViewChild) {
            if (this.isMonthNavigate) {
              Promise.resolve(null).then(function () {
                return _this21.updateFocus();
              });
              this.isMonthNavigate = false;
            } else {
              this.initFocusableCell();
            }
          }
        }
      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        },
        set: function set(date) {
          this._minDate = date;

          if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        },
        set: function set(date) {
          this._maxDate = date;

          if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "disabledDates",
        get: function get() {
          return this._disabledDates;
        },
        set: function set(disabledDates) {
          this._disabledDates = disabledDates;

          if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "disabledDays",
        get: function get() {
          return this._disabledDays;
        },
        set: function set(disabledDays) {
          this._disabledDays = disabledDays;

          if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "yearRange",
        get: function get() {
          return this._yearRange;
        },
        set: function set(yearRange) {
          this._yearRange = yearRange;

          if (yearRange) {
            var years = yearRange.split(':');
            var yearStart = parseInt(years[0]);
            var yearEnd = parseInt(years[1]);
            this.populateYearOptions(yearStart, yearEnd);
          }
        }
      }, {
        key: "showTime",
        get: function get() {
          return this._showTime;
        },
        set: function set(showTime) {
          this._showTime = showTime;

          if (this.currentHour === undefined) {
            this.initTime(this.value || new Date());
          }

          this.updateInputfield();
        }
      }, {
        key: "locale",
        get: function get() {
          return this._locale;
        },
        set: function set(newLocale) {
          this._locale = newLocale;

          if (this.view === 'date') {
            this.createWeekDays();
            this.createMonths(this.currentMonth, this.currentYear);
          } else if (this.view === 'month') {
            this.createMonthPickerValues();
          }
        }
      }]);

      return Calendar;
    }();

    Calendar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "defaultDate", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "inputStyle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "inputId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "name", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "inputStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "placeholder", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "ariaLabelledBy", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "disabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "dateFormat", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "multipleSeparator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "rangeSeparator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "inline", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "showOtherMonths", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "selectOtherMonths", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "showIcon", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "icon", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "appendTo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "readonlyInput", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "shortYearCutoff", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "monthNavigator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "yearNavigator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "hourFormat", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "timeOnly", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "stepHour", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "stepMinute", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "stepSecond", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "showSeconds", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "required", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "showOnFocus", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "showWeek", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "dataType", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "selectionMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "maxDateCount", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "showButtonBar", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "todayButtonStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "clearButtonStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "autoZIndex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "baseZIndex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "panelStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "panelStyle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "keepInvalid", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "hideOnDateTimeSelect", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "numberOfMonths", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "view", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "touchUI", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "timeSeparator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "showTransitionOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "hideTransitionOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onFocus", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onBlur", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onClose", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onSelect", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onInput", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onTodayClick", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onClearClick", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onMonthChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onYearChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onClickOutside", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Calendar.prototype, "onShow", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"])], Calendar.prototype, "templates", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "tabindex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputfield', {
      static: false
    })], Calendar.prototype, "inputfieldViewChild", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentWrapper', {
      static: false
    })], Calendar.prototype, "content", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "minDate", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "maxDate", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "disabledDates", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "disabledDays", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "yearRange", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "showTime", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Calendar.prototype, "locale", null);

    Calendar = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-calendar',
      template: "\n        <span [ngClass]=\"{'ui-calendar':true, 'ui-calendar-w-btn': showIcon, 'ui-calendar-timeonly': timeOnly}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ng-template [ngIf]=\"!inline\">\n                <input #inputfield type=\"text\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.required]=\"required\" [attr.aria-required]=\"required\" [value]=\"inputFieldValue\" (focus)=\"onInputFocus($event)\" (keydown)=\"onInputKeydown($event)\" (click)=\"onInputClick($event)\" (blur)=\"onInputBlur($event)\"\n                    [readonly]=\"readonlyInput\" (input)=\"onUserInput($event)\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [placeholder]=\"placeholder||''\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\"\n                    [ngClass]=\"'ui-inputtext ui-widget ui-state-default ui-corner-all'\" autocomplete=\"off\" [attr.aria-labelledby]=\"ariaLabelledBy\"\n                    ><button type=\"button\" [icon]=\"icon\" pButton *ngIf=\"showIcon\" (click)=\"onButtonClick($event,inputfield)\" class=\"ui-datepicker-trigger ui-calendar-button\"\n                    [ngClass]=\"{'ui-state-disabled':disabled}\" [disabled]=\"disabled\" tabindex=\"0\"></button>\n            </ng-template>\n            <div #contentWrapper [class]=\"panelStyleClass\" [ngStyle]=\"panelStyle\" [ngClass]=\"{'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all': true, 'ui-datepicker-inline':inline,'ui-shadow':!inline,\n                'ui-state-disabled':disabled,'ui-datepicker-timeonly':timeOnly,'ui-datepicker-multiple-month': this.numberOfMonths > 1, 'ui-datepicker-monthpicker': (view === 'month'), 'ui-datepicker-touch-ui': touchUI}\"\n                [@overlayAnimation]=\"touchUI ? {value: 'visibleTouchUI', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}: \n                                            {value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" \n                                            [@.disabled]=\"inline === true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (@overlayAnimation.done)=\"onOverlayAnimationDone($event)\" *ngIf=\"inline || overlayVisible\">\n                <ng-content select=\"p-header\"></ng-content>\n                <ng-container *ngIf=\"!timeOnly\">\n                    <div class=\"ui-datepicker-group ui-widget-content\" *ngFor=\"let month of months; let i = index;\">\n                        <div class=\"ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all\">\n                            <a class=\"ui-datepicker-prev ui-corner-all\" (click)=\"onPrevButtonClick($event)\" (keydown.enter)=\"onPrevButtonClick($event)\" *ngIf=\"i === 0\" tabindex=\"0\" (keydown)=\"onInputKeydown($event)\">\n                                <span class=\"ui-datepicker-prev-icon pi pi-chevron-left\"></span>\n                            </a>\n                            <div class=\"ui-datepicker-title\">\n                                <span class=\"ui-datepicker-month\" *ngIf=\"!monthNavigator && (view !== 'month')\">{{locale.monthNames[month.month]}}</span>\n                                <select tabindex=\"0\" class=\"ui-datepicker-month\" *ngIf=\"monthNavigator && (view !== 'month') && numberOfMonths === 1\" (change)=\"onMonthDropdownChange($event.target.value)\">\n                                    <option [value]=\"i\" *ngFor=\"let monthName of locale.monthNames;let i = index\" [selected]=\"i === month.month\">{{monthName}}</option>\n                                </select>\n                                <select tabindex=\"0\" class=\"ui-datepicker-year\" *ngIf=\"yearNavigator && numberOfMonths === 1\" (change)=\"onYearDropdownChange($event.target.value)\">\n                                    <option [value]=\"year\" *ngFor=\"let year of yearOptions\" [selected]=\"year === currentYear\">{{year}}</option>\n                                </select>\n                                <span class=\"ui-datepicker-year\" *ngIf=\"!yearNavigator\">{{view === 'month' ? currentYear : month.year}}</span>\n                            </div>\n                            <a class=\"ui-datepicker-next ui-corner-all\" (click)=\"onNextButtonClick($event)\" (keydown.enter)=\"onNextButtonClick($event)\" *ngIf=\"numberOfMonths === 1 ? true : (i === numberOfMonths -1)\" tabindex=\"0\" (keydown)=\"onInputKeydown($event)\">\n                                <span class=\"ui-datepicker-next-icon pi pi-chevron-right\"></span>\n                            </a>\n                        </div>\n                        <div class=\"ui-datepicker-calendar-container\" *ngIf=\"view ==='date'\">\n                            <table class=\"ui-datepicker-calendar\">\n                                <thead>\n                                    <tr>\n                                        <th *ngIf=\"showWeek\" class=\"ui-datepicker-weekheader\">\n                                            <span>{{locale['weekHeader']}}</span>\n                                        </th>\n                                        <th scope=\"col\" *ngFor=\"let weekDay of weekDays;let begin = first; let end = last\">\n                                            <span>{{weekDay}}</span>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let week of month.dates; let j = index;\">\n                                        <td *ngIf=\"showWeek\" class=\"ui-datepicker-weeknumber ui-state-disabled\">\n                                            <span>\n                                                {{month.weekNumbers[j]}}\n                                            </span>\n                                        </td>\n                                        <td *ngFor=\"let date of week\" [ngClass]=\"{'ui-datepicker-other-month': date.otherMonth,\n                                            'ui-datepicker-current-day':isSelected(date),'ui-datepicker-today':date.today}\">\n                                            <ng-container *ngIf=\"date.otherMonth ? showOtherMonths : true\">\n                                                <a class=\"ui-state-default\" *ngIf=\"date.selectable\" [ngClass]=\"{'ui-state-active':isSelected(date), 'ui-state-highlight':date.today}\"\n                                                    (click)=\"onDateSelect($event,date)\" draggable=\"false\" (keydown)=\"onDateCellKeydown($event,date,i)\">\n                                                    <ng-container *ngIf=\"!dateTemplate\">{{date.day}}</ng-container>\n                                                    <ng-container *ngTemplateOutlet=\"dateTemplate; context: {$implicit: date}\"></ng-container>\n                                                </a>\n                                                <span class=\"ui-state-default ui-state-disabled\" [ngClass]=\"{'ui-state-active':isSelected(date), 'ui-state-highlight':date.today}\" *ngIf=\"!date.selectable\">\n                                                    {{date.day}}\n                                                </span>\n                                            </ng-container>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"ui-monthpicker\" *ngIf=\"view === 'month'\">\n                        <a  *ngFor=\"let m of monthPickerValues; let i = index\" (click)=\"onMonthSelect($event, i)\" (keydown)=\"onMonthCellKeydown($event,i)\" class=\"ui-monthpicker-month\" [ngClass]=\"{'ui-state-active': isMonthSelected(i)}\">\n                            {{m}}\n                        </a>\n                    </div>\n                </ng-container>\n                <div class=\"ui-timepicker ui-widget-header ui-corner-all\" *ngIf=\"showTime||timeOnly\">\n                    <div class=\"ui-hour-picker\">\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementHour($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 0, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentHour < 10 ? 'inline': 'none'}\">0</span><span>{{currentHour}}</span>\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementHour($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 0, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-separator\">\n                        <a>\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{timeSeparator}}</span>\n                        <a>\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-minute-picker\">\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementMinute($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 1, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentMinute < 10 ? 'inline': 'none'}\">0</span><span>{{currentMinute}}</span>\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementMinute($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 1, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-separator\" *ngIf=\"showSeconds\">\n                        <a>\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{timeSeparator}}</span>\n                        <a>\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-second-picker\" *ngIf=\"showSeconds\">\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementSecond($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 2, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentSecond < 10 ? 'inline': 'none'}\">0</span><span>{{currentSecond}}</span>\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementSecond($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 2, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-ampm-picker\" *ngIf=\"hourFormat=='12'\">\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"toggleAMPM($event)\" (keydown.enter)=\"toggleAMPM($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{pm ? 'PM' : 'AM'}}</span>\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"toggleAMPM($event)\" (keydown.enter)=\"toggleAMPM($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"ui-datepicker-buttonbar ui-widget-header\" *ngIf=\"showButtonBar\">\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-6\">\n                            <button type=\"button\" tabindex=\"0\" [label]=\"_locale.today\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"onTodayButtonClick($event)\" pButton [ngClass]=\"[todayButtonStyleClass]\"></button>\n                        </div>\n                        <div class=\"ui-g-6\">\n                            <button type=\"button\" tabindex=\"0\" [label]=\"_locale.clear\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"onClearButtonClick($event)\" pButton [ngClass]=\"[clearButtonStyleClass]\"></button>\n                        </div>\n                    </div>\n                </div>\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </span>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visibleTouchUI', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translate(-50%,-50%)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        transform: 'translateY(5%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visibleTouchUI', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visibleTouchUI => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
      }))])])],
      host: {
        '[class.ui-inputwrapper-filled]': 'filled',
        '[class.ui-inputwrapper-focus]': 'focus'
      },
      providers: [CALENDAR_VALUE_ACCESSOR]
    })], Calendar);

    var CalendarModule = function CalendarModule() {
      _classCallCheck(this, CalendarModule);
    };

    CalendarModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      exports: [Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      declarations: [Calendar]
    })], CalendarModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-calendar.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/fesm2015/primeng-fileupload.js":
  /*!*************************************************************!*\
    !*** ./node_modules/primeng/fesm2015/primeng-fileupload.js ***!
    \*************************************************************/

  /*! exports provided: FileUpload, FileUploadModule */

  /***/
  function node_modulesPrimengFesm2015PrimengFileuploadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUpload", function () {
      return FileUpload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/progressbar */
    "./node_modules/primeng/fesm2015/primeng-progressbar.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/fesm2015/primeng-dom.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var FileUpload =
    /*#__PURE__*/
    function () {
      function FileUpload(el, sanitizer, zone, http) {
        _classCallCheck(this, FileUpload);

        this.el = el;
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.http = http;
        this.method = 'POST';
        this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
        this.invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
        this.invalidFileTypeMessageDetail = 'allowed file types: {0}.';
        this.invalidFileLimitMessageDetail = 'limit is {0} at most.';
        this.invalidFileLimitMessageSummary = 'Maximum number of files exceeded, ';
        this.previewWidth = 50;
        this.chooseLabel = 'Choose';
        this.uploadLabel = 'Upload';
        this.cancelLabel = 'Cancel';
        this.showUploadButton = true;
        this.showCancelButton = true;
        this.mode = 'advanced';
        this.onBeforeUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._files = [];
        this.progress = 0;
        this.uploadedFileCount = 0;
      }

      _createClass(FileUpload, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this22 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'file':
                _this22.fileTemplate = item.template;
                break;

              case 'content':
                _this22.contentTemplate = item.template;
                break;

              case 'toolbar':
                _this22.toolbarTemplate = item.template;
                break;

              default:
                _this22.fileTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this23 = this;

          if (this.mode === 'advanced') {
            this.zone.runOutsideAngular(function () {
              if (_this23.content) _this23.content.nativeElement.addEventListener('dragover', _this23.onDragOver.bind(_this23));
            });
          }
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
            this.duplicateIEEvent = false;
            return;
          }

          this.msgs = [];

          if (!this.multiple) {
            this.files = [];
          }

          var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;

          for (var i = 0; i < files.length; i++) {
            var file = files[i];

            if (!this.isFileSelected(file)) {
              if (this.validate(file)) {
                if (this.isImage(file)) {
                  file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
                }

                this.files.push(files[i]);
              }
            }
          }

          this.onSelect.emit({
            originalEvent: event,
            files: files
          });

          if (this.fileLimit && this.mode == "advanced") {
            this.checkFileLimit();
          }

          if (this.hasFiles() && this.auto && (!(this.mode === "advanced") || !this.isFileLimitExceeded())) {
            this.upload();
          }

          if (event.type !== 'drop' && this.isIE11()) {
            this.clearIEInput();
          } else {
            this.clearInputElement();
          }
        }
      }, {
        key: "isFileSelected",
        value: function isFileSelected(file) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.files[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var sFile = _step4.value;

              if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          return false;
        }
      }, {
        key: "isIE11",
        value: function isIE11() {
          return !!window['MSInputMethodContext'] && !!document['documentMode'];
        }
      }, {
        key: "validate",
        value: function validate(file) {
          if (this.accept && !this.isFileTypeValid(file)) {
            this.msgs.push({
              severity: 'error',
              summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
              detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
            });
            return false;
          }

          if (this.maxFileSize && file.size > this.maxFileSize) {
            this.msgs.push({
              severity: 'error',
              summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
              detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
            });
            return false;
          }

          return true;
        }
      }, {
        key: "isFileTypeValid",
        value: function isFileTypeValid(file) {
          var acceptableTypes = this.accept.split(',').map(function (type) {
            return type.trim();
          });
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = acceptableTypes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var type = _step5.value;
              var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();

              if (acceptable) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return false;
        }
      }, {
        key: "getTypeClass",
        value: function getTypeClass(fileType) {
          return fileType.substring(0, fileType.indexOf('/'));
        }
      }, {
        key: "isWildcard",
        value: function isWildcard(fileType) {
          return fileType.indexOf('*') !== -1;
        }
      }, {
        key: "getFileExtension",
        value: function getFileExtension(file) {
          return '.' + file.name.split('.').pop();
        }
      }, {
        key: "isImage",
        value: function isImage(file) {
          return /^image\//.test(file.type);
        }
      }, {
        key: "onImageLoad",
        value: function onImageLoad(img) {
          window.URL.revokeObjectURL(img.src);
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this24 = this;

          if (this.customUpload) {
            if (this.fileLimit) {
              this.uploadedFileCount += this.files.length;
            }

            this.uploadHandler.emit({
              files: this.files
            });
          } else {
            this.uploading = true;
            this.msgs = [];
            var formData = new FormData();
            this.onBeforeUpload.emit({
              'formData': formData
            });

            for (var i = 0; i < this.files.length; i++) {
              formData.append(this.name, this.files[i], this.files[i].name);
            }

            this.http.post(this.url, formData, {
              headers: this.headers,
              reportProgress: true,
              observe: 'events',
              withCredentials: this.withCredentials
            }).subscribe(function (event) {
              switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Sent:
                  _this24.onSend.emit({
                    originalEvent: event,
                    'formData': formData
                  });

                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Response:
                  _this24.uploading = false;
                  _this24.progress = 0;

                  if (event['status'] >= 200 && event['status'] < 300) {
                    if (_this24.fileLimit) {
                      _this24.uploadedFileCount += _this24.files.length;
                    }

                    _this24.onUpload.emit({
                      originalEvent: event,
                      files: _this24.files
                    });
                  } else {
                    _this24.onError.emit({
                      files: _this24.files
                    });
                  }

                  _this24.clear();

                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].UploadProgress:
                  {
                    if (event['loaded']) {
                      _this24.progress = Math.round(event['loaded'] * 100 / event['total']);
                    }

                    _this24.onProgress.emit({
                      originalEvent: event,
                      progress: _this24.progress
                    });

                    break;
                  }
              }
            }, function (error) {
              _this24.uploading = false;

              _this24.onError.emit({
                files: _this24.files,
                error: error
              });
            });
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.files = [];
          this.onClear.emit();
          this.clearInputElement();
        }
      }, {
        key: "remove",
        value: function remove(event, index) {
          this.clearInputElement();
          this.onRemove.emit({
            originalEvent: event,
            file: this.files[index]
          });
          this.files.splice(index, 1);
        }
      }, {
        key: "isFileLimitExceeded",
        value: function isFileLimitExceeded() {
          if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focus) {
            this.focus = false;
          }

          return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
        }
      }, {
        key: "isChooseDisabled",
        value: function isChooseDisabled() {
          return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
        }
      }, {
        key: "checkFileLimit",
        value: function checkFileLimit() {
          if (this.isFileLimitExceeded()) {
            this.msgs.push({
              severity: 'error',
              summary: this.invalidFileLimitMessageSummary.replace('{0}', this.fileLimit.toString()),
              detail: this.invalidFileLimitMessageDetail.replace('{0}', this.fileLimit.toString())
            });
          }
        }
      }, {
        key: "clearInputElement",
        value: function clearInputElement() {
          if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.advancedFileInput.nativeElement.value = '';
          }

          if (this.basicFileInput && this.basicFileInput.nativeElement) {
            this.basicFileInput.nativeElement.value = '';
          }
        }
      }, {
        key: "clearIEInput",
        value: function clearIEInput() {
          if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again

            this.advancedFileInput.nativeElement.value = '';
          }
        }
      }, {
        key: "hasFiles",
        value: function hasFiles() {
          return this.files && this.files.length > 0;
        }
      }, {
        key: "onDragEnter",
        value: function onDragEnter(e) {
          if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(e) {
          if (!this.disabled) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].addClass(this.content.nativeElement, 'ui-fileupload-highlight');
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
          }
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (!this.disabled) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
          }
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (!this.disabled) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            var allowDrop = this.multiple || files && files.length === 1;

            if (allowDrop) {
              this.onFileSelect(event);
            }
          }
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.focus = true;
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.focus = false;
        }
      }, {
        key: "formatSize",
        value: function formatSize(bytes) {
          if (bytes == 0) {
            return '0 B';
          }

          var k = 1000,
              dm = 3,
              sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
              i = Math.floor(Math.log(bytes) / Math.log(k));
          return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
      }, {
        key: "onSimpleUploaderClick",
        value: function onSimpleUploaderClick(event) {
          if (this.hasFiles()) {
            this.upload();
          }
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.content && this.content.nativeElement) {
            this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
          }
        }
      }, {
        key: "files",
        set: function set(files) {
          this._files = [];

          for (var i = 0; i < files.length; i++) {
            var file = files[i];

            if (this.validate(file)) {
              if (this.isImage(file)) {
                file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
              }

              this._files.push(files[i]);
            }
          }
        },
        get: function get() {
          return this._files;
        }
      }]);

      return FileUpload;
    }();

    FileUpload.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "name", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "url", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "method", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "multiple", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "accept", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "disabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "auto", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "withCredentials", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "maxFileSize", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "invalidFileSizeMessageSummary", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "invalidFileSizeMessageDetail", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "invalidFileTypeMessageSummary", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "invalidFileTypeMessageDetail", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "invalidFileLimitMessageDetail", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "invalidFileLimitMessageSummary", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "previewWidth", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "chooseLabel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "uploadLabel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "cancelLabel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "showUploadButton", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "showCancelButton", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "mode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "headers", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "customUpload", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "fileLimit", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "onBeforeUpload", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "onSend", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "onUpload", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "onError", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "onClear", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "onRemove", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "onSelect", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "onProgress", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], FileUpload.prototype, "uploadHandler", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"])], FileUpload.prototype, "templates", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('advancedfileinput', {
      static: false
    })], FileUpload.prototype, "advancedFileInput", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('basicfileinput', {
      static: false
    })], FileUpload.prototype, "basicFileInput", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content', {
      static: false
    })], FileUpload.prototype, "content", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileUpload.prototype, "files", null);

    FileUpload = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-fileUpload',
      template: "\n        <div [ngClass]=\"'ui-fileupload ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"mode === 'advanced'\">\n            <div class=\"ui-fileupload-buttonbar ui-widget-header ui-corner-top\">\n                <span class=\"ui-fileupload-choose\" [label]=\"chooseLabel\" icon=\"pi pi-plus\" pButton [ngClass]=\"{'ui-state-focus': focus, 'ui-state-disabled':disabled || isChooseDisabled()}\"> \n                    <input #advancedfileinput type=\"file\" (change)=\"onFileSelect($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled || isChooseDisabled()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n                </span>\n\n                <p-button *ngIf=\"!auto&&showUploadButton\" type=\"button\" [label]=\"uploadLabel\" icon=\"pi pi-upload\" (onClick)=\"upload()\" [disabled]=\"!hasFiles() || isFileLimitExceeded()\"></p-button>\n                <p-button *ngIf=\"!auto&&showCancelButton\" type=\"button\" [label]=\"cancelLabel\" icon=\"pi pi-times\" (onClick)=\"clear()\" [disabled]=\"!hasFiles() ||\xA0uploading\"></p-button>\n\n                <ng-container *ngTemplateOutlet=\"toolbarTemplate\"></ng-container>\n            </div>\n            <div #content [ngClass]=\"{'ui-fileupload-content ui-widget-content ui-corner-bottom':true}\"\n                 (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event)\">\n                <p-progressBar [value]=\"progress\" [showValue]=\"false\" *ngIf=\"hasFiles()\"></p-progressBar>\n\n                <p-messages [value]=\"msgs\" [enableService]=\"false\"></p-messages>\n\n                <div class=\"ui-fileupload-files\" *ngIf=\"hasFiles()\">\n                    <div *ngIf=\"!fileTemplate\">\n                        <div class=\"ui-fileupload-row\" *ngFor=\"let file of files; let i = index;\">\n                            <div><img [src]=\"file.objectURL\" *ngIf=\"isImage(file)\" [width]=\"previewWidth\" /></div>\n                            <div>{{file.name}}</div>\n                            <div>{{formatSize(file.size)}}</div>\n                            <div>\n                                <button type=\"button\" icon=\"pi pi-times\" pButton (click)=\"remove($event,i)\" [disabled]=\"uploading\"></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"fileTemplate\">\n                        <ng-template ngFor [ngForOf]=\"files\" [ngForTemplate]=\"fileTemplate\"></ng-template>\n                    </div>\n                </div>\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </div>\n        </div>\n        <span *ngIf=\"mode === 'basic'\" [ngClass]=\"{'ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left': true, \n                'ui-fileupload-choose-selected': hasFiles(),'ui-state-focus': focus, 'ui-state-disabled':disabled}\"\n              [ngStyle]=\"style\" [class]=\"styleClass\" (mouseup)=\"onSimpleUploaderClick($event)\">\n            <span class=\"ui-button-icon-left pi\" [ngClass]=\"{'pi-plus': !hasFiles()||auto, 'pi-upload': hasFiles()&&!auto}\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>\n            <input #basicfileinput type=\"file\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\"\n                   (change)=\"onFileSelect($event)\" *ngIf=\"!hasFiles()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n        </span>\n    "
    })], FileUpload);

    var FileUploadModule = function FileUploadModule() {
      _classCallCheck(this, FileUploadModule);
    };

    FileUploadModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_4__["MessagesModule"]],
      exports: [FileUpload, primeng_api__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_4__["MessagesModule"]],
      declarations: [FileUpload]
    })], FileUploadModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-fileupload.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/fesm2015/primeng-messages.js":
  /*!***********************************************************!*\
    !*** ./node_modules/primeng/fesm2015/primeng-messages.js ***!
    \***********************************************************/

  /*! exports provided: Messages, MessagesModule */

  /***/
  function node_modulesPrimengFesm2015PrimengMessagesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Messages", function () {
      return Messages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesModule", function () {
      return MessagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var Messages =
    /*#__PURE__*/
    function () {
      function Messages(messageService) {
        _classCallCheck(this, Messages);

        this.messageService = messageService;
        this.closable = true;
        this.enableService = true;
        this.escape = true;
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(Messages, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          if (this.messageService && this.enableService) {
            this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
              if (messages) {
                if (messages instanceof Array) {
                  var filteredMessages = messages.filter(function (m) {
                    return _this25.key === m.key;
                  });
                  _this25.value = _this25.value ? [].concat(_toConsumableArray(_this25.value), _toConsumableArray(filteredMessages)) : _toConsumableArray(filteredMessages);
                } else if (_this25.key === messages.key) {
                  _this25.value = _this25.value ? [].concat(_toConsumableArray(_this25.value), [messages]) : [messages];
                }
              }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
              if (key) {
                if (_this25.key === key) {
                  _this25.value = null;
                }
              } else {
                _this25.value = null;
              }
            });
          }
        }
      }, {
        key: "hasMessages",
        value: function hasMessages() {
          return this.value && this.value.length > 0;
        }
      }, {
        key: "getSeverityClass",
        value: function getSeverityClass() {
          return this.value[0].severity;
        }
      }, {
        key: "clear",
        value: function clear(event) {
          this.value = [];
          this.valueChange.emit(this.value);
          event.preventDefault();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
          }

          if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
          }
        }
      }, {
        key: "icon",
        get: function get() {
          var icon = null;

          if (this.hasMessages()) {
            var msg = this.value[0];

            switch (msg.severity) {
              case 'success':
                icon = 'pi-check';
                break;

              case 'info':
                icon = 'pi-info-circle';
                break;

              case 'error':
                icon = 'pi-times';
                break;

              case 'warn':
                icon = 'pi-exclamation-triangle';
                break;

              default:
                icon = 'pi-info-circle';
                break;
            }
          }

          return icon;
        }
      }]);

      return Messages;
    }();

    Messages.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "value", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "closable", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "enableService", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "key", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "escape", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "showTransitionOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Messages.prototype, "hideTransitionOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Messages.prototype, "valueChange", void 0);

    Messages = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-messages',
      template: "\n        <div *ngIf=\"hasMessages()\" class=\"ui-messages ui-widget ui-corner-all\"\n                    [ngClass]=\"{'ui-messages-info':(value[0].severity === 'info'),\n                    'ui-messages-warn':(value[0].severity === 'warn'),\n                    'ui-messages-error':(value[0].severity === 'error'),\n                    'ui-messages-success':(value[0].severity === 'success')}\" role=\"alert\"\n                    [ngStyle]=\"style\" [class]=\"styleClass\" [@messageAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\">\n            <a tabindex=\"0\" class=\"ui-messages-close\" (click)=\"clear($event)\" (keydown.enter)=\"clear($event)\" *ngIf=\"closable\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n            <span class=\"ui-messages-icon pi\" [ngClass]=\"icon\"></span>\n            <ul>\n                <li *ngFor=\"let msg of value\">\n                    <div *ngIf=\"!escape; else escapeOut\">\n                        <span *ngIf=\"msg.summary\" class=\"ui-messages-summary\" [innerHTML]=\"msg.summary\"></span>\n                        <span *ngIf=\"msg.detail\" class=\"ui-messages-detail\" [innerHTML]=\"msg.detail\"></span>\n                    </div>\n                    <ng-template #escapeOut> \n                        <span *ngIf=\"msg.summary\" class=\"ui-messages-summary\">{{msg.summary}}</span>\n                        <span *ngIf=\"msg.detail\" class=\"ui-messages-detail\">{{msg.detail}}</span>\n                    </ng-template>\n                </li>\n            </ul>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('messageAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-25%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        transform: 'translateY(-25%)'
      }))])])]
    }), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())], Messages);

    var MessagesModule = function MessagesModule() {
      _classCallCheck(this, MessagesModule);
    };

    MessagesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      exports: [Messages],
      declarations: [Messages]
    })], MessagesModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-messages.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/fesm2015/primeng-progressbar.js":
  /*!**************************************************************!*\
    !*** ./node_modules/primeng/fesm2015/primeng-progressbar.js ***!
    \**************************************************************/

  /*! exports provided: ProgressBar, ProgressBarModule */

  /***/
  function node_modulesPrimengFesm2015PrimengProgressbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBar", function () {
      return ProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return ProgressBarModule;
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

    var ProgressBar = function ProgressBar() {
      _classCallCheck(this, ProgressBar);

      this.showValue = true;
      this.unit = '%';
      this.mode = 'determinate';
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ProgressBar.prototype, "value", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ProgressBar.prototype, "showValue", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ProgressBar.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ProgressBar.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ProgressBar.prototype, "unit", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ProgressBar.prototype, "mode", void 0);

    ProgressBar = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'p-progressBar',
      template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div class=\"ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div class=\"ui-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\" *ngIf=\"showValue\">{{value}}{{unit}}</div>\n        </div>\n    "
    })], ProgressBar);

    var ProgressBarModule = function ProgressBarModule() {
      _classCallCheck(this, ProgressBarModule);
    };

    ProgressBarModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      exports: [ProgressBar],
      declarations: [ProgressBar]
    })], ProgressBarModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-progressbar.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~add-property-add-property-module~available-available-module-es5.js.map