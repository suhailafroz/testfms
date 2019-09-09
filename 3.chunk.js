webpackJsonp([3],{

/***/ "../../../../../src/app/layout/map/map-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_component__ = __webpack_require__("../../../../../src/app/layout/map/map.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* BlankPageComponent */] }
];
var BlankPageRoutingModule = (function () {
    function BlankPageRoutingModule() {
    }
    return BlankPageRoutingModule;
}());
BlankPageRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], BlankPageRoutingModule);

//# sourceMappingURL=map-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-sm-12\">\r\n        <div class=\"card mb-6\">\r\n            <div class=\"card-block\">\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n                    <agm-marker *ngFor=\"let post of positions\" [latitude]=\"post.post_latitude\"\r\n                        [longitude]=\"post.post_longitude\">\r\n                    </agm-marker>\r\n                </agm-map>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankPageComponent = (function () {
    function BlankPageComponent() {
        this.lat = 6.05246325;
        this.lng = 9.01555559;
        this.positions = [{
                "post_country": "Vietnam",
                "post_latitude": 10.4452129,
                "post_longitude": 106.4729811
            }, {
                "post_country": "Kyrgyzstan",
                "post_latitude": 41.1694718,
                "post_longitude": 75.8098141
            }, {
                "post_country": "China",
                "post_latitude": 34.2456501,
                "post_longitude": 108.9877602
            }];
    }
    BlankPageComponent.prototype.ngOnInit = function () {
    };
    return BlankPageComponent;
}());
BlankPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/layout/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/map/map.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BlankPageComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/map/map.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_routing_module__ = __webpack_require__("../../../../../src/app/layout/map/map-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_component__ = __webpack_require__("../../../../../src/app/layout/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BlankPageModule = (function () {
    function BlankPageModule() {
    }
    return BlankPageModule;
}());
BlankPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__map_routing_module__["a" /* BlankPageRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBMXAFKBBhOWyDdZW0LxBCw0pIXMc-wDuQ'
            })
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__map_component__["a" /* BlankPageComponent */]]
    })
], BlankPageModule);

//# sourceMappingURL=map.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map