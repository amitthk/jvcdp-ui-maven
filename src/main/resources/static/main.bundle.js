webpackJsonp([1,4],{

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(539);


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_settings__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(258);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JvcdpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JvcdpService = (function () {
    function JvcdpService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].envEndpoints.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].env);
    }
    JvcdpService.prototype.ngOnInit = function () {
    };
    JvcdpService.prototype.get = function (url) {
        return this.http.get(url).map(function (response) { return response.text(); });
    };
    JvcdpService.prototype.postS3bucketRequest = function (loginInfo) {
        return this.http.post(this.apiUrl + 'buckets', loginInfo, this.getOptions()).map(function (response) { return response.json(); });
    };
    JvcdpService.prototype.postS3bucketObjectRequest = function (loginInfo) {
        return this.http.post(this.apiUrl + 'bucketobjects', loginInfo, this.getOptions()).map(function (response) { return response.json(); });
    };
    JvcdpService.prototype.getOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.headers = headers;
        return options;
    };
    JvcdpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], JvcdpService);
    return JvcdpService;
    var _a;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/jvcdp.service.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__S3LoginModel__ = __webpack_require__(662);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__S3LoginModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__S3BucketModels__ = __webpack_require__(661);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(663);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });



//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/index.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_settings__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_5__app_app_settings__["a" /* AppSettings */].API_ENDPOINT + '/auth';
    }
    AuthService.prototype.login = function (loginInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = { 'headers': headers, 'observe': 'response' };
        return this.http.post(this.apiUrl + '/login', loginInfo, options);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('authToken');
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/auth.service.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    env: 'dev'
};
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/environment.dev.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(258);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });

var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.envEndpoints = new Map([['local', 'http://localhost:8097'],
        ['dev', 'http://localhost:8097'],
        ['sit', '/jvcdpapi'],
        ['uat', '/jvcdpapi'],
        ['prod', '/jvcdpapi']]);
    AppSettings.API_ENDPOINT = AppSettings.envEndpoints.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].env);
    return AppSettings;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/app.settings.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_jvcdp_service__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.timerSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(5000).subscribe(function () { return _this.refreshData(); });
        this.timestamp = 'random';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    DashboardComponent.prototype.refreshData = function () {
        var _this = this;
        this.homeMessageSubscription = this.httpService.get('/home').subscribe(function (data) {
            _this.timestamp = data;
            _this.subscribeToData();
        });
    };
    DashboardComponent.prototype.subscribeToData = function () {
        var _this = this;
        this.timerSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(5000).first().subscribe(function () { return _this.refreshData(); });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.homeMessageSubscription) {
            this.homeMessageSubscription.unsubscribe();
        }
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(837),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_jvcdp_service__["a" /* JvcdpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_jvcdp_service__["a" /* JvcdpService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/dashboard.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.login = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* UserLogin */]();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.doLogin = function (login) {
        var _this = this;
        this.loading = true;
        this.error = null;
        this.authService.login(this.login)
            .subscribe(function (response) {
            try {
                if ((response && response != null) && (response.status !== 200)) {
                    var _resp = response.json || JSON.stringify(response);
                    _this.loading = false;
                    _this.error = response.statusText;
                }
                var token = _this.extractAuthHeader(_this.login.userName, response);
                if (token) {
                    localStorage.setItem('authToken', JSON.stringify({ userName: _this.login.userName, 'token': token }));
                    _this.router.navigate([_this.returnUrl]);
                }
                else {
                    _this.loading = false;
                    localStorage.removeItem('authToken');
                    _this.error = 'Unknown error occured';
                }
            }
            catch (err) {
                _this.loading = false;
                _this.error = err.toString();
            }
        }, function (error) {
            _this.loading = false;
            _this.error = error.toString();
        });
    };
    LoginComponent.prototype.extractAuthHeader = function (userName, response) {
        if (response.headers.has('authorization')) {
            var token = response.headers.get('authorization');
            return token;
        }
        else {
            return null;
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(838),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/login.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jvcdp_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models___ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketObjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BucketObjectsComponent = (function () {
    function BucketObjectsComponent(jvcdpService) {
        this.jvcdpService = jvcdpService;
    }
    BucketObjectsComponent.prototype.ngOnInit = function () {
        this.result = [];
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_2__models___["a" /* S3LoginModel */]();
    };
    BucketObjectsComponent.prototype.submitRequest = function () {
        var _this = this;
        if (this.loginModel.access_key_id === '' || this.loginModel.secret_access_key === '') {
            alert('Access_key_id and secret_access_key cannot be null!');
            return;
        }
        this.inProgress = true;
        this.percentComplete = 25;
        this.jvcdpService.postS3bucketObjectRequest(this.loginModel).subscribe(function (response) {
            _this.result = response;
            _this.inProgress = false;
            _this.percentComplete = 100;
            _this.isSuccess = true;
        }, this.handleError, this.handleCompleted);
    };
    BucketObjectsComponent.prototype.handleError = function (error) {
        console.error('An Error has occured: ', error);
        this.inProgress = false;
        this.isFailed = true;
        this.percentComplete = 100;
        return Promise.reject(error.message || error);
    };
    BucketObjectsComponent.prototype.handleCompleted = function () {
        console.log('Response Received!');
        this.inProgress = false;
        this.isSuccess = true;
        this.percentComplete = 100;
    };
    BucketObjectsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-bucket-objects',
            template: __webpack_require__(842),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jvcdp_service__["a" /* JvcdpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jvcdp_service__["a" /* JvcdpService */]) === 'function' && _a) || Object])
    ], BucketObjectsComponent);
    return BucketObjectsComponent;
    var _a;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/bucket-objects.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jvcdp_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models___ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BucketSummaryComponent = (function () {
    function BucketSummaryComponent(jvcdpService) {
        this.jvcdpService = jvcdpService;
    }
    BucketSummaryComponent.prototype.ngOnInit = function () {
        this.result = [];
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_2__models___["a" /* S3LoginModel */]();
    };
    BucketSummaryComponent.prototype.submitRequest = function () {
        var _this = this;
        if (this.loginModel.access_key_id === '' || this.loginModel.secret_access_key === '') {
            alert('Access_key_id and secret_access_key cannot be null!');
            return;
        }
        this.inProgress = true;
        this.percentComplete = 25;
        this.jvcdpService.postS3bucketRequest(this.loginModel).subscribe(function (response) {
            _this.result = response;
            _this.inProgress = false;
            _this.percentComplete = 100;
            _this.isSuccess = true;
        }, this.handleError, this.handleCompleted);
    };
    BucketSummaryComponent.prototype.handleError = function (error) {
        console.error('An Error has occured: ', error);
        this.inProgress = false;
        this.isFailed = true;
        this.percentComplete = 100;
        return Promise.reject(error.message || error);
    };
    BucketSummaryComponent.prototype.handleCompleted = function () {
        console.log('Response Received!');
        this.inProgress = false;
        this.isSuccess = true;
        this.percentComplete = 100;
    };
    BucketSummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-bucket-summary',
            template: __webpack_require__(843),
            styles: [__webpack_require__(831)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jvcdp_service__["a" /* JvcdpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jvcdp_service__["a" /* JvcdpService */]) === 'function' && _a) || Object])
    ], BucketSummaryComponent);
    return BucketSummaryComponent;
    var _a;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/bucket-summary.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddComponent = (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-add',
            template: __webpack_require__(844),
            styles: [__webpack_require__(832)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddComponent);
    return AddComponent;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/add.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__(845),
            styles: [__webpack_require__(833)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditComponent);
    return EditComponent;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/edit.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__(846),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/list.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewComponent = (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-view',
            template: __webpack_require__(847),
            styles: [__webpack_require__(835)]
        }), 
        __metadata('design:paramtypes', [])
    ], ViewComponent);
    return ViewComponent;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/view.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('authToken')) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/auth.guard.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 538;


/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(657);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/main.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] }];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/app-routing.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'jvcdp';
        this.showsidebar = false;
    }
    AppComponent.prototype.onSidebarToggle = function (showsidebar) {
        this.showsidebar = showsidebar;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(836),
            styles: [__webpack_require__(824)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/app.component.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_header_page_header_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_footer_page_footer_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_sidebar_page_sidebar_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utility_map_iterator_pipe__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_jvcdp_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_usermanager_usermanager_module__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_bucketmanager_bucketmanager_module__ = __webpack_require__(665);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_page_header_page_header_component__["a" /* PageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_page_footer_page_footer_component__["a" /* PageFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_page_sidebar_page_sidebar_component__["a" /* PageSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__utility_map_iterator_pipe__["a" /* MapIteratorPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__modules_bucketmanager_bucketmanager_module__["a" /* BucketManagerModule */],
                __WEBPACK_IMPORTED_MODULE_15__modules_usermanager_usermanager_module__["a" /* UserManagerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_jvcdp_service__["a" /* JvcdpService */],
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/app.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageFooterComponent = (function () {
    function PageFooterComponent() {
    }
    PageFooterComponent.prototype.ngOnInit = function () {
    };
    PageFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'page-footer',
            template: __webpack_require__(839),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageFooterComponent);
    return PageFooterComponent;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/page-footer.component.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageHeaderComponent = (function () {
    function PageHeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    PageHeaderComponent.prototype.doLogout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    PageHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'page-header',
            template: __webpack_require__(840),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PageHeaderComponent);
    return PageHeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/page-header.component.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageSidebarComponent = (function () {
    function PageSidebarComponent() {
    }
    PageSidebarComponent.prototype.ngOnInit = function () {
    };
    PageSidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'page-sidebar',
            template: __webpack_require__(841),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageSidebarComponent);
    return PageSidebarComponent;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/page-sidebar.component.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BucketInfoModel */
/* unused harmony export BucketDetailsModel */
var BucketInfoModel = (function () {
    function BucketInfoModel() {
    }
    return BucketInfoModel;
}());
var BucketDetailsModel = (function () {
    function BucketDetailsModel() {
    }
    return BucketDetailsModel;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/S3BucketModels.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3LoginModel; });
var S3LoginModel = (function () {
    function S3LoginModel() {
    }
    return S3LoginModel;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/S3LoginModel.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogin; });
var UserLogin = (function () {
    function UserLogin() {
    }
    return UserLogin;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/UserLogin.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bucket_summary_bucket_summary_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bucket_objects_bucket_objects_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_auth_guard__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketManagerRoutes; });



var BucketManagerRoutes = [
    { path: 'buckets', redirectTo: 'bucketsummary', pathMatch: 'full' },
    { path: 'bucketsummary', component: __WEBPACK_IMPORTED_MODULE_0__bucket_summary_bucket_summary_component__["a" /* BucketSummaryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__utility_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bucketobjects', component: __WEBPACK_IMPORTED_MODULE_1__bucket_objects_bucket_objects_component__["a" /* BucketObjectsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__utility_auth_guard__["a" /* AuthGuard */]] }];
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/bucketmanager-routes.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bucket_summary_bucket_summary_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bucket_objects_bucket_objects_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bucketmanager_routes__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utility_auth_guard__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketManagerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BucketManagerModule = (function () {
    function BucketManagerModule() {
    }
    BucketManagerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__bucketmanager_routes__["a" /* BucketManagerRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__bucket_summary_bucket_summary_component__["a" /* BucketSummaryComponent */], __WEBPACK_IMPORTED_MODULE_6__bucket_objects_bucket_objects_component__["a" /* BucketObjectsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__utility_auth_guard__["a" /* AuthGuard */]]
        }), 
        __metadata('design:paramtypes', [])
    ], BucketManagerModule);
    return BucketManagerModule;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/bucketmanager.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_add_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_view_component__ = __webpack_require__(397);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagerRoutes; });




var UserManagerRoutes = [
    { path: 'users', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_0__list_list_component__["a" /* ListComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_1__add_add_component__["a" /* AddComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */] },
    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_3__view_view_component__["a" /* ViewComponent */] }];
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/usermanager-routes.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_view_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__usermanager_routes__ = __webpack_require__(666);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserManagerModule = (function () {
    function UserManagerModule() {
    }
    UserManagerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__usermanager_routes__["a" /* UserManagerRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_4__add_add_component__["a" /* AddComponent */], __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_6__view_view_component__["a" /* ViewComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UserManagerModule);
    return UserManagerModule;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/usermanager.module.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapIteratorPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapIteratorPipe = (function () {
    function MapIteratorPipe() {
    }
    MapIteratorPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    MapIteratorPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({ name: 'mapIterator' }), 
        __metadata('design:paramtypes', [])
    ], MapIteratorPipe);
    return MapIteratorPipe;
}());
//# sourceMappingURL=D:/Amit/projects/amitthk/github/jvcdp/jvcdp-ui/src/main/webapp/src/map-iterator.pipe.js.map

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<header>\n    <page-header (onSidebarToggle)=\"onSidebarToggle($event)\"></page-header>\n</header>\n<div id=\"wrapper\" class=\"container-fluid body-content\" [ngClass]=\"showsidebar ? '' : 'toggled'\">\n\n  <!-- Sidebar -->\n  <page-sidebar></page-sidebar>\n  <!-- /#sidebar-wrapper -->\n                \n  <!-- Page Content -->\n    <div id=\"page-content-wrapper\">\n      <div class=\"container-fluid\">\n          <router-outlet></router-outlet>\n      </div>\n    </div>\n  <!-- /#page-content-wrapper -->\n</div>\n<footer>\n  <page-footer></page-footer>\n</footer>"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Hi Welcome to Jvcdp Home Page! Please login to view options!</h1>\n</div>\n\n<div class=\"container-fluid row\">\n  <div class=\"col-sm-12\">\n    <h3>Timestamp : {{ timestamp}}</h3>\n  </div>\n</div>"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "<section>\n<div class=\"container-fluid main-content-wrapper\">\n\n    <form class=\"form-horizontal cform-1\" #loginForm=\"ngForm\">\n        <div class=\"get-started-form-wrapper\">\n    \n          <div class=\"group inner-addon left-addon\">\n            <label class=\"label-material\">UserName</label>            \n            <input name=\"userName\" type=\"text\" id=\"userName\" class=\"form-control input-material\" [(ngModel)]=\"login.userName\" #userName=\"ngModel\"\n              required/>\n            <span class=\"bar\"></span>\n          </div>\n    \n          <div *ngIf=\"userName.errors && (userName.dirty || userName.touched)\">\n            <span *ngIf=\"userName.errors.required\" class=\"danger\">Please enter UserName.</span>\n            <span *ngIf=\"userName.errors.pattern\" class=\"danger\">Please enter valid UserName.</span>\n          </div>\n\n          <div class=\"group inner-addon left-addon\">\n            <label class=\"label-material\">emailAddress</label>            \n            <input name=\"emailAddress\" type=\"text\" id=\"emailAddress\" class=\"form-control input-material\" [(ngModel)]=\"login.emailAddress\" #emailAddress=\"ngModel\"\n              required/>\n            <span class=\"bar\"></span>\n          </div>\n    \n          <div *ngIf=\"emailAddress.errors && (emailAddress.dirty || emailAddress.touched)\">\n            <span *ngIf=\"emailAddress.errors.required\" class=\"danger\">Please enter emailAddress.</span>\n            <span *ngIf=\"emailAddress.errors.pattern\" class=\"danger\">Please enter valid emailAddress.</span>\n          </div>\n    \n          <div class=\"group inner-addon left-addon\">\n            <label class=\"label-material\">Password</label>            \n            <input name=\"password\" type=\"password\" id=\"password\" class=\"form-control input-material\" [(ngModel)]=\"login.password\" #password=\"ngModel\"\n              required/>\n            <span class=\"bar\"></span>\n          </div>\n    \n          <div *ngIf=\"password.errors && (password.dirty || password.touched)\">\n            <span *ngIf=\"password.errors.required\" class=\"danger\">Please enter password.</span>\n            <span *ngIf=\"password.errors.pattern\" class=\"danger\">Please enter valid password.</span>\n          </div>\n\n          <div class=\"group inner-addon left-addon\">\n            <label class=\"label-material\">Api ID</label>            \n            <input name=\"apiId\" type=\"text\" id=\"apiId\" class=\"form-control input-material\" [(ngModel)]=\"login.apiId\" #apiId=\"ngModel\"\n              required/>\n            <span class=\"bar\"></span>\n          </div>\n    \n          <div *ngIf=\"apiId.errors && (apiId.dirty || apiId.touched)\">\n            <span *ngIf=\"apiId.errors.required\" class=\"danger\">Please enter Api ID.</span>\n            <span *ngIf=\"apiId.errors.pattern\" class=\"danger\">Please enter valid Api ID.</span>\n          </div>\n        \n          <div>\n            <button type=\"submit\" class=\"btn block button-get-started\" (click)=\"doLogin(login)\"> LOGIN </button>\n            <div class=\"privacy-policy\">By signing up you agree to our T & C and privacy policy</div>\n          </div>\n        </div>\n      </form>\n</div>\n</section>"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-3 text-left footer-padding term-con\"><a>&copy; Amitthk</a></div>\n        <div class=\"col-md-9 col-sm-9 text-right term-con footer-padding\">\n            <a>Terms of Service</a>\n            <a>Privacy Policy</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"no-padding\" [routerLink]=\"['/index']\">\n        <div class=\"row container-fluid site-title\">\n          <!--<div class=\"col-md-2\">\n            <img class=\"logo_img\" src=\"assets/img/site-logo.png\" alt=\"laptop\">\n          </div>-->\n          <div class=\"col-md-8\">\n            <span>jvcdp</span>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n           <div class=\"dropdown\">\n              <a class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"pageHeaderDropMenu\" data-toggle=\"dropdown\">\n                <span class=\"icon-bars-button\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </span>\n            </a>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"pageHeaderDropMenu\">\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" [routerLink]=\"['/bucketsummary']\">Bucket Summary</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" [routerLink]=\"['/bucketobjects']\">Bucket Object Details</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"doLogout()\">Logout!</a></li>\n            </ul>\n             </div>   \n        </li>\n\n        <li>\n          <!--<a class=\"no-padding\" [routerLink]=\"['/login']\">\n            <img alt=\"image\" class=\"img-circle message-avatar profile\" src=\"assets/img/profile_blank.png\">\n          </a>-->\n        </li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-wrapper\">\n    <ul class=\"sidebar-nav\">\n        <li><a [routerLink]=\"['/index']\">Dashboard</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n\n      <h1>Bucket Object Details</h1>\n      <form class=\"form-horizontal\">\n        <div class=\"form-group\"><label for=\"inputContents\" class=\"col-sm-3 control-label\">access_key_id</label>\n          <div class=\"col-sm-7\"><input type=\"text\" class=\"form-control\" name=\"access_key_id\" [(ngModel)]=\"loginModel.access_key_id\" id=\"loginModel.access_key_id\"\n              placeholder=\"access_key_id\"></div>\n        </div>\n        <div class=\"form-group\"><label for=\"inputContents\" class=\"col-sm-3 control-label\">secret_access_key</label>\n          <div class=\"col-sm-7\"><input type=\"text\" class=\"form-control\" name=\"secret_access_key\" [(ngModel)]=\"loginModel.secret_access_key\" id=\"loginModel.secret_access_key\"\n              placeholder=\"secret_access_key\"></div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-3\" for=\"submit\"></label>\n          <div class=\"col-sm-offset-3 col-sm-5\">\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"submitRequest()\">Submit</button>\n            <a [routerLink]=\"['/index']\" class=\"btn btn-primary col-sm-offset-1\">Back</a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"progress\" *ngIf=\"inProgress\">\n        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"percentComplete\" aria-valuemin=\"0\"\n          aria-valuemax=\"100\" [style.width]=\"percentComplete+'%'\"> Requesting Information... </div>\n      </div>\n      <div class=\"progress\" *ngIf=\"isSuccess\">\n        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"percentComplete\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n          [style.width]=\"percentComplete+'%'\"> Done! </div>\n      </div>\n      <div class=\"progress\" *ngIf=\"isFailed\">\n        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"percentComplete\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n          [style.width]=\"percentComplete+'%'\"> Error! </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"isSuccess\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\">\n          <tbody>\n            <tr *ngFor=\"let resp of result\">\n              <td>\n                {{resp.bucket_name}}\n              </td>\n              <td>\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\" *ngFor=\"let file_path of resp.file_paths\">{{file_path}}</li>\n                </ul>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"col-sm-12 text-danger\" *ngIf=\"isError\">{{ result | json }}</div>\n  </div>"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n\n      <h1>Bucket Summary Listing </h1>\n      <form class=\"form-horizontal\">\n        <div class=\"form-group\"><label for=\"inputContents\" class=\"col-sm-3 control-label\">access_key_id</label>\n          <div class=\"col-sm-7\"><input type=\"text\" class=\"form-control\" name=\"access_key_id\" [(ngModel)]=\"loginModel.access_key_id\" id=\"loginModel.access_key_id\"\n              placeholder=\"access_key_id\"></div>\n        </div>\n        <div class=\"form-group\"><label for=\"inputContents\" class=\"col-sm-3 control-label\">secret_access_key</label>\n          <div class=\"col-sm-7\"><input type=\"text\" class=\"form-control\" name=\"secret_access_key\" [(ngModel)]=\"loginModel.secret_access_key\" id=\"loginModel.secret_access_key\"\n              placeholder=\"secret_access_key\"></div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-3\" for=\"submit\"></label>\n          <div class=\"col-sm-offset-3 col-sm-5\">\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"submitRequest()\">Submit</button>\n            <a [routerLink]=\"['/index']\" class=\"btn btn-primary col-sm-offset-1\">Back</a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"progress\" *ngIf=\"inProgress\">\n        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"percentComplete\" aria-valuemin=\"0\"\n          aria-valuemax=\"100\" [style.width]=\"percentComplete+'%'\"> Requesting Information... </div>\n      </div>\n      <div class=\"progress\" *ngIf=\"isSuccess\">\n        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"percentComplete\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n          [style.width]=\"percentComplete+'%'\"> Done! </div>\n      </div>\n      <div class=\"progress\" *ngIf=\"isFailed\">\n        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"percentComplete\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n          [style.width]=\"percentComplete+'%'\"> Error! </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"isSuccess\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <td>\n                Bucket Name\n              </td>\n              <td>\n                Creation Date\n              </td>\n              <td>\n                Last Modified\n              </td>\n              <td>\n                Number of Files\n              </td>\n              <td>\n                Total Size of Files\n              </td>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let resp of result\">\n              <td>\n                {{resp.bucket_name}}\n              </td>\n              <td>\n                {{resp.creation_date}}\n              </td>\n              <td>\n                {{resp.last_modified}}\n              </td>\n              <td>\n                {{resp.number_of_files}}\n              </td>\n              <td>\n                {{resp.total_size_of_files}}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = "<p>\n  add works!\n</p>\n"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = "<p>\n  list works!\n</p>\n"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "<p>\n  view works!\n</p>\n"

/***/ })

},[1134]);
//# sourceMappingURL=main.bundle.map