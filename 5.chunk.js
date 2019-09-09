webpackJsonp([5],{

/***/ "../../../../../src/app/layout/about/about-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/layout/about/about.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */] }
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    return AboutRoutingModule;
}());
AboutRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AboutRoutingModule);

//# sourceMappingURL=about-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-sm-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-block\" align=\"center\">\r\n                <ngb-carousel>\r\n                    <ng-template ngbSlide *ngFor=\"let slider of sliders\">\r\n                        <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\"\r\n                            width=\"100%\">\r\n                        <div class=\"carousel-caption\">\r\n                            <h3>{{slider.label}}</h3>\r\n                            <p>{{slider.text}}</p>\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <p>\r\n                    The <code>GHMC Flood Early Warning System</code> measures and monitors water levels along the\r\n                    Khairatabad\r\n                    zone\r\n                    within hyderabad on a real-time basis in order to help in for area residents of potentially\r\n                    dangerous\r\n                    weather\r\n                    conditions.\r\n                </p>\r\n                <p>\r\n                    The GHMCFEWS also provides historical rainfall data and information about past flooding events. The\r\n                    System\r\n                    relies on\r\n                    the different stations strategically placed throughout the zone.\r\n                </p>\r\n                <p>\r\n                    The individual station contain sensors that transmit valuable data during rain events. Reliable\r\n                    rainfall\r\n                    amounts and\r\n                    water level data can help emergency management officials make critical decisions that ultimately aid\r\n                    in\r\n                    reducing the\r\n                    risk of property damage, injuries and loss of life.</p>\r\n                <p>\r\n                    The topographic elevation data, also known as Digital Eleation Model (DEM) is the most important\r\n                    input data\r\n                    to any\r\n                    urban flood modal and the quality of th DEM directly influence the result of the model. As a\r\n                    prerequisite\r\n                    for the\r\n                    construction of the flood model, a high-resolution digital elevation model (DEM) is mandatory. This\r\n                    DEM\r\n                    would be\r\n                    generated from high-resolution multispectral stereo satellite data (Worldview - 03).</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider_1.png'
        }, {
            imagePath: 'assets/images/slider_2.jpg'
        });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/layout/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_routing_module__ = __webpack_require__("../../../../../src/app/layout/about/about-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__("../../../../../src/app/layout/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__about_routing_module__["a" /* AboutRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBMXAFKBBhOWyDdZW0LxBCw0pIXMc-wDuQ'
            }),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */]]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map