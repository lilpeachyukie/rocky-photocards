(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ROCKY\rocky-photocards\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
// data.service.ts


class AppService {
    constructor() {
        this._data = [];
    }
    setData(data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "G8t3":
/*!**************************************************!*\
  !*** ./src/assets/records/astro-non-album-pc.ts ***!
  \**************************************************/
/*! exports provided: arohaPC, sgPC, astroadPC, aafPC, rorohaPC, magzPC, othersPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arohaPC", function() { return arohaPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sgPC", function() { return sgPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "astroadPC", function() { return astroadPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aafPC", function() { return aafPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rorohaPC", function() { return rorohaPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magzPC", function() { return magzPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "othersPC", function() { return othersPC; });
var arohaPC = [
    { caption: '1st Gen', total: 5 },
    { caption: '2nd Gen', total: 1 },
    { caption: '3rd Gen', total: 3 },
    { caption: '4th Gen', total: 3 },
    { caption: '5th Gen', total: 1 }
];
var sgPC = [
    { caption: 'SG 2018', total: 2 },
    { caption: 'SG 2019', total: 5 },
    { caption: 'SG 2020 Relaxing', total: 1 },
    { caption: 'SG 2020 Refreshing', total: 1 },
    { caption: 'SG 2021 Start', total: 2 },
    { caption: 'SG 2021 Ready', total: 1 },
    { caption: 'SG 2021 POB', total: 1 },
    { caption: 'SG 2022 Tea', total: 1 },
    { caption: 'SG 2022 Coffee', total: 1 },
    { caption: 'SG 2023 Popular', total: 1 },
    { caption: 'SG 2023 Popular - Apple Music POB', total: 1 },
    { caption: 'SG 2023 Popular - Busandepart POB', total: 1 },
    { caption: 'SG 2023 Popular - Tower Records POB', total: 1 },
    { caption: 'SG 2023 Favourite', total: 2 },
    { caption: 'SG 2023 Favourite - Apple Music POB', total: 2 },
    { caption: 'SG 2023 MD: Mini Calendar', total: 12 },
    { caption: 'SG 2023 MD: Trading Card', total: 20 }
];
var astroadPC = [
    { caption: '1st Road to Seoul', total: 4 },
    { caption: 'Starlight', total: 5 },
    { caption: 'Starlight DVD', total: 1 },
    { caption: 'Starlight DVD - Japan ver bonus', total: 1 },
    { caption: '1st Road to Japan', total: 5 },
    { caption: 'Stargazer: Trading card', total: 7 },
    { caption: 'Stargazer: Multi Case', total: 1 },
    { caption: 'Stargazer: Collect Book', total: 1 },
    { caption: 'Stargazer: MD purchased >30k won', total: 1 },
    { caption: 'Stargazer: Necklace', total: 1 },
    { caption: 'Stargazer: Photocard set', total: 1 },
    { caption: 'Stargazer - Japan: Photocard set', total: 1 },
    { caption: 'Stargazer Exit Concert 220528', total: 1 },
    { caption: 'Stargazer Exit Concert 220529', total: 1 },
    { caption: 'Stargazer Fanclub 220528', total: 1 },
    { caption: 'Stargazer Fanclub 220529', total: 1 },
    { caption: 'Stargazer Astroscope DVD', total: 2 },
    { caption: 'Stargazer Astroscope DVD Bluray', total: 1 },
    { caption: 'Stargazer DVD Japan Fanclub', total: 2 },
    { caption: 'Stargazer DVD Japan HMV', total: 2 },
    { caption: 'Stargazer DVD Japan HMV Musuem', total: 1 },
];
var aafPC = [
    { caption: '1st AAF', total: 7 },
    { caption: '1st AAF: Jinjak', total: 2 },
    { caption: '2nd AAF', total: 4 },
    { caption: '3rd AAF', total: 2 },
    { caption: 'Japan Fanparty', total: 3 },
    { caption: 'Japan All Yours 2021 Trading Card', total: 12 },
    { caption: '6th AAF', total: 1 },
    { caption: '6th AAF: Guide Book', total: 1 },
    { caption: '6th AAF: Keyring', total: 1 },
    { caption: '6th AAF: Binder', total: 1 },
    { caption: '6th AAF: Welcome Pack', total: 1 },
    { caption: '6th AAF: Trading Card', total: 8 },
    { caption: '6th AAF Fancafe event', total: 2 }
];
var rorohaPC = [
    { caption: 'Case (Binder)', total: 1 },
    { caption: 'Trading Card', total: 14 },
    { caption: 'Xmas - Case (Binder)', total: 1 },
    { caption: 'Xmas - Trading Card', total: 18 }
];
var magzPC = [
    { caption: 'Photobook', total: 4 },
    { caption: 'Apple Music - Purchased >40k won', total: 4 },
    { caption: 'MD: Only Kit', total: 8 },
    { caption: 'MD: Keyring', total: 1 },
    { caption: 'MD: Phone tab', total: 1 },
    { caption: 'MD: Trading Cards', total: 27 },
];
var othersPC = [
    { caption: 'Cash Bee', total: 1 },
    { caption: 'Secret Day', total: 1 },
    { caption: 'Makestar PB', total: 2 },
    { caption: 'Sulbing', total: 1 },
    { caption: 'Shiole', total: 3 },
    { caption: 'Ordinary Holiday PB', total: 3 },
    { caption: 'Smart', total: 1 },
    { caption: 'Mobile Japan', total: 1 },
    { caption: 'Junon', total: 2 },
    { caption: 'Time Capsule PB', total: 1 },
    { caption: 'Time Capsule PB - Japan', total: 1 },
    { caption: 'Daejeon 2021 Gayo', total: 1 },
    { caption: 'Atome', total: 1 },
    { caption: 'Atome Valentine', total: 1 },
    { caption: 'Wonderwall', total: 4 },
    { caption: 'Unikon 2022', total: 1 },
];


/***/ }),

/***/ "J3w+":
/*!**********************************************!*\
  !*** ./src/assets/records/astro-album-pc.ts ***!
  \**********************************************/
/*! exports provided: astroAlbumPC, astroNonAlbumPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "astroAlbumPC", function() { return astroAlbumPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "astroNonAlbumPC", function() { return astroNonAlbumPC; });
var astroAlbumPC = [
    { caption: 'Spring up', total: 2 },
    { caption: 'Summer Vibes', total: 3 },
    { caption: 'Autumn Story - Red', total: 2 },
    { caption: 'Autumn Story - Orange', total: 2 },
    { caption: 'Winter Dream', total: 2 },
    { caption: 'Dream Pt1 - Day', total: 3 },
    { caption: 'Dream Pt1 - Night', total: 3 },
    { caption: 'Dream Pt2 - Wind', total: 3 },
    { caption: 'Dream Pt2 - Wish', total: 3 },
    { caption: 'Dream Sp. Edition', total: 2 },
    { caption: 'Rise up', total: 4 },
    { caption: 'All Light - White', total: 4 },
    { caption: 'All Light - Green', total: 4 },
    { caption: 'Blue Flame - Book', total: 2 },
    { caption: 'Blue Flame - Story', total: 2 },
    { caption: 'One & Only', total: 2 },
    { caption: 'Gateway - Another World', total: 2 },
    { caption: 'Gateway - Time Traveler', total: 2 },
    { caption: 'All Yours - You', total: 2 },
    { caption: 'All Yours - Me', total: 2 },
    { caption: 'All Yours - Us', total: 2 },
    { caption: 'Switch On', total: 8 },
    { caption: 'Restore - Staycation', total: 4 },
    { caption: 'Restore - Vacation', total: 4 },
    { caption: 'Drive to the Starry Road - Drive', total: 4 },
    { caption: 'Drive to the Starry Road - Starry', total: 4 },
    { caption: 'Drive to the Starry Road - Road', total: 4 },
];
var astroNonAlbumPC = [
    { caption: 'CSC Broadcast', total: 1 },
    { caption: 'Kihno Special', total: 2 },
    { caption: 'Rise Up - Pop up Store', total: 2 },
    { caption: 'FM201.8', total: 1 },
    { caption: 'All Light - Broadcast/FS', total: 4 },
    { caption: 'All Light - JP Handshake Event', total: 4 },
    { caption: 'Venus - Tower Records', total: 2 },
    { caption: 'Venus - HMV', total: 1 },
    { caption: 'Blue Flame - Concept Zone', total: 2 },
    { caption: 'Blue Flame - Broadcast', total: 2 },
    { caption: 'Blue Flame - FS', total: 2 },
    { caption: 'Gateway - Japan', total: 1 },
    { caption: 'Gateway - China', total: 1 },
    { caption: 'Gateway - Taiwan', total: 1 },
    { caption: 'Gateway - VC', total: 1 },
    { caption: 'Gateway - Fancafe event', total: 1 },
    { caption: 'All Yours - Cafe', total: 2 },
    { caption: 'All Yours - Tower Records POB', total: 2 },
    { caption: 'All Yours - DMM POB', total: 1 },
    { caption: 'All Yours - DMM VC', total: 1 },
    { caption: 'All Yours - Withdrama POB', total: 1 },
    { caption: 'All Yours - Withdrama VC', total: 1 },
    { caption: 'All Yours - Broadcast (Self Printed)', total: 3 },
    { caption: 'All Yours - LuckyGO VC 1', total: 1 },
    { caption: 'All Yours - LuckyGO VC 2', total: 1 },
    { caption: 'All Yours - Makestar VC 1', total: 1 },
    { caption: 'All Yours - Makestar VC 2', total: 1 },
    { caption: 'All Yours - DMC VC', total: 1 },
    { caption: 'All Yours - DMC Winner VC', total: 1 },
    { caption: 'All Yours - Mihwadang VC', total: 1 },
    { caption: 'All Yours - Mihwadang Winner VC ', total: 1 },
    { caption: 'All Yours - Joeun VC', total: 1 },
    { caption: 'All Yours - Joeun Winner VC', total: 1 },
    { caption: 'All Yours - Music Korea VC', total: 1 },
    { caption: 'All Yours - Music Korea Winner VC', total: 1 },
    { caption: 'All Yours - Beatroad VC', total: 1 },
    { caption: 'All Yours - Beatroad Winner VC', total: 1 },
    { caption: 'All Yours - OTK POB', total: 1 },
    { caption: 'All Yours - Apple Music POB', total: 1 },
    { caption: 'All Yours - Apple Music VC 1', total: 1 },
    { caption: 'All Yours - Apple Music VC 2', total: 1 },
    { caption: 'All Yours - Everline POB', total: 1 },
    { caption: 'All Yours - Everline VC 1', total: 1 },
    { caption: 'All Yours - Everline Winner VC 1', total: 1 },
    { caption: 'All Yours - Everline VC 2', total: 1 },
    { caption: 'All Yours - Everline Winner VC 2', total: 1 },
    { caption: 'All Yours - POB Set', total: 1 },
    { caption: 'Switch On - Tokopedia POB', total: 1 },
    { caption: 'Switch On - Shopee VC', total: 1 },
    { caption: 'Switch On - Beatroad VC', total: 1 },
    { caption: 'Switch On - Mihwadang VC', total: 1 },
    { caption: 'Switch On - Music Korea VC', total: 1 },
    { caption: 'Switch On - DMC VC', total: 1 },
    { caption: 'Switch On - Joeun VC', total: 1 },
    { caption: 'Switch On - Mocket Shop POB', total: 1 },
    { caption: 'Switch On - Withdrama POB+VC', total: 1 },
    { caption: 'Switch On - Withdrama VC 2', total: 1 },
    { caption: 'Switch On - Applewood POB', total: 2 },
    { caption: 'Switch On - CLCNE POB', total: 2 },
    { caption: 'Switch On - Broadcast (Self Printed)', total: 2 },
    { caption: 'Switch On - DMM POB', total: 1 },
    { caption: 'Switch On - DMM VC', total: 1 },
    { caption: 'Switch On - Everline POB', total: 1 },
    { caption: 'Switch On - Everline VC 1', total: 1 },
    { caption: 'Switch On - Everline VC 2', total: 1 },
    { caption: 'Switch On - Pop-up Store: MD', total: 1 },
    { caption: 'Switch On - Pop-up Store: MD Purchased >5k won', total: 1 },
    { caption: 'Switch On - Pop-up Store: Lucky Draw', total: 1 },
    { caption: 'Switch On - Tower Records POB', total: 4 },
    { caption: 'Switch On - Wonderwall VC 1', total: 1 },
    { caption: 'Switch On - Wonderwall Winner VC 1', total: 1 },
    { caption: 'Switch On - Wonderwall VC 2', total: 1 },
    { caption: 'Switch On - Wonderwall MD', total: 1 },
    { caption: 'Switch On - Apple Music POB', total: 1 },
    { caption: 'Switch On - Apple Music Lucky Draw', total: 3 },
    { caption: 'Switch On - Apple Music VC 1', total: 1 },
    { caption: 'Switch On - Apple Music VC 1 Winner', total: 1 },
    { caption: 'Switch On - Apple Music VC 2', total: 1 },
    { caption: 'Switch On - Apple Music VC 2 Winner', total: 1 },
    { caption: 'Switch On - Apple Music VC 3', total: 1 },
    { caption: 'Switch On - Apple Music VC 4', total: 2 },
    { caption: 'RESTORE - CLCNE POB', total: 1 },
    { caption: 'RESTORE - Apple Music Lucky Draw', total: 5 },
    { caption: 'RESTORE - Apple Music FS/VC 1', total: 2 },
    { caption: 'RESTORE - Apple Music FS/VC 2', total: 2 },
    { caption: 'RESTORE - Apple Music FS/VC 3', total: 2 },
    { caption: 'RESTORE - Apple Music FS/VC 4', total: 2 },
    { caption: 'RESTORE - Apple Music VC 5', total: 2 },
    { caption: 'RESTORE - Apple Music FS/VC 6', total: 2 },
    { caption: 'RESTORE - Apple Music FS/VC 7', total: 2 },
    { caption: 'RESTORE - Apple Music VC 8', total: 2 },
    { caption: 'RESTORE - Everline FS 1', total: 1 },
    { caption: 'RESTORE - Everline Winner FS 1', total: 1 },
    { caption: 'RESTORE - Everline FS 2', total: 1 },
    { caption: 'RESTORE - Everline Winner FS 2', total: 1 },
    { caption: 'RESTORE - Everline VC 1', total: 1 },
    { caption: 'RESTORE - Everline VC 2', total: 1 },
    { caption: 'RESTORE - Everline Winner VC 2', total: 1 },
    { caption: 'RESTORE - Yihziyu VC', total: 1 },
    { caption: 'RESTORE - Makestar VC 1', total: 2 },
    { caption: 'RESTORE - Makestar VC 2', total: 2 },
    { caption: 'RESTORE - Withdrama FS/VC 1', total: 2 },
    { caption: 'RESTORE - Withdrama FS/VC 2', total: 2 },
    { caption: 'RESTORE - JJMuze VC', total: 1 },
    { caption: 'RESTORE - JJMuze Sp. Gift', total: 1 },
    { caption: 'RESTORE - Music Korea VC', total: 1 },
    { caption: 'RESTORE - DMC VC', total: 1 },
    { caption: 'RESTORE - Joeun FS', total: 1 },
    { caption: 'RESTORE - Mihwadang FS', total: 1 },
    { caption: 'RESTORE - MD Staycation', total: 2 },
    { caption: 'RESTORE - MD Vacation', total: 2 },
    { caption: 'RESTORE - Winners Fancafe Event', total: 4 },
    { caption: 'DTTSR - Apple Music Lucky Draw', total: 3 },
    { caption: 'DTTSR - Apple Music VC 1', total: 1 },
    { caption: 'DTTSR - Apple Music VC 2', total: 1 },
    { caption: 'DTTSR - Apple Music VC 3', total: 1 },
    { caption: 'DTTSR - Apple Music FS/VC 4', total: 1 },
    { caption: 'DTTSR - Apple Music VC 5', total: 1 },
    { caption: 'DTTSR - Apple Music VC 6', total: 1 },
    { caption: 'DTTSR - Apple Music Lucky Draw Cafe ', total: 3 },
    { caption: 'DTTSR - Apple Music Cafe', total: 1 },
    { caption: 'DTTSR - Ktown4u VC 1', total: 1 },
    { caption: 'DTTSR - Ktown4u FS/VC 2', total: 1 },
    { caption: 'DTTSR - Ktown4u Pop-up Lucky Draw', total: 2 },
    { caption: 'DTTSR - DMM VC 1', total: 1 },
    { caption: 'DTTSR - DMM VC 2', total: 1 },
    { caption: 'DTTSR - Withdrama / Withmuu - POB', total: 1 },
    { caption: 'DTTSR - Withdrama / Withmuu VC 1', total: 1 },
    { caption: 'DTTSR - Withdrama / Withmuu VC 2', total: 1 },
    { caption: 'DTTSR - Withdrama / Withmuu FS/VC 3', total: 1 },
    { caption: 'DTTSR - Withdrama / Withmuu VC 4', total: 1 },
    { caption: 'DTTSR - Withdrama / Withmuu VC 5', total: 1 },
    { caption: 'DTTSR - Withdrama / Withmuu Lucky Draw Cafe', total: 2 },
    { caption: 'DTTSR - Synnara POB', total: 1 },
    { caption: 'DTTSR - Tokopedia POB', total: 1 },
    { caption: 'DTTSR - Tower Records POB', total: 2 },
    { caption: 'DTTSR - Mu-mo Shop VC', total: 1 },
    { caption: 'DTTSR - CB Cafe x DMM: Cookies Gift', total: 2 },
    { caption: 'DTTSR - Broadcast Music Bank', total: 1 },
    { caption: 'DTTSR - Broadcast Music Core', total: 1 },
    { caption: 'DTTSR - Broadcast Inkigayo', total: 1 },
    { caption: 'DTTSR - Twitter event', total: 1 },
    { caption: 'DTTSR - Showcase', total: 1 },
    { caption: '1番好きな人にサヨナラを言おう - Loppi・HMV', total: 1 },
    { caption: '1番好きな人にサヨナラを言おう - FC', total: 1 }
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, CustomizeTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeTemplate", function() { return CustomizeTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_records_astro_album_pc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/records/astro-album-pc */ "J3w+");
/* harmony import */ var _assets_records_astro_non_album_pc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/records/astro-non-album-pc */ "G8t3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















const _c0 = ["stickyDiv"];
const _c1 = function (a0) { return { "selected": a0 }; };
function AppComponent_div_0_mat_tab_11_ng_container_2_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_mat_tab_11_ng_container_2_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const photo_r10 = ctx.$implicit; const sec_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.addWant(photo_r10.caption, photo_r10.filename, sec_r6.folder, sec_r6.album); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r10 = ctx.$implicit;
    const sec_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r9.getSelected(sec_r6.folder, photo_r10.filename)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", photo_r10.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.hasNoPhotoMap[sec_r6.dataProp] && !photo_r10.filename ? "assets/images/nophoto.png" : "assets/images/" + sec_r6.folder + "/" + photo_r10.filename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", photo_r10.album, "", photo_r10.caption, "");
} }
function AppComponent_div_0_mat_tab_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_mat_tab_11_ng_container_2_mat_card_1_Template, 5, 7, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sec_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.getPhotoArray(sec_r6.dataProp));
} }
function AppComponent_div_0_mat_tab_11_ng_container_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r18.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_r18.label, " ");
} }
function AppComponent_div_0_mat_tab_11_ng_container_3_ng_container_7_div_1_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_mat_tab_11_ng_container_3_ng_container_7_div_1_mat_card_4_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const photo_r22 = ctx.$implicit; const sub_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r23.addWant(photo_r22.caption, photo_r22.filename, sub_r19.folderImage, ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r22 = ctx.$implicit;
    const sub_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r21.getSelected(sub_r19.folderImage, photo_r22.filename)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", photo_r22.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/" + sub_r19.folderImage + "/" + photo_r22.filename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photo_r22.caption);
} }
function AppComponent_div_0_mat_tab_11_ng_container_3_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_0_mat_tab_11_ng_container_3_ng_container_7_div_1_mat_card_4_Template, 5, 6, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r19.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.getPhotoArray(sub_r19.dataProp));
} }
function AppComponent_div_0_mat_tab_11_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_mat_tab_11_ng_container_3_ng_container_7_div_1_Template, 5, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sub_r19 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.selectedAstroPC.includes(sub_r19.key));
} }
function AppComponent_div_0_mat_tab_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Photocards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AppComponent_div_0_mat_tab_11_ng_container_3_Template_mat_select_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.selectedAstroPC = $event; })("selectionChange", function AppComponent_div_0_mat_tab_11_ng_container_3_Template_mat_select_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.onChangeDislay($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_0_mat_tab_11_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_0_mat_tab_11_ng_container_3_ng_container_7_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sec_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.selectedAstroPC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sec_r6.subSections);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sec_r6.subSections);
} }
function AppComponent_div_0_mat_tab_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_0_mat_tab_11_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_0_mat_tab_11_ng_container_3_Template, 8, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sec_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", sec_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sec_r6.type === "rocky");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sec_r6.type === "astro");
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lilpeachyukie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function AppComponent_div_0_Template_mat_tab_group_selectedIndexChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onTabChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_0_mat_tab_11_Template, 4, 3, "mat-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/_logo_.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Update ", ctx_r0.update, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.photoSections);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-customize-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 34);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.intro, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AppComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 34);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.note, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CustomizeTemplate_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeTemplate_div_1_mat_card_1_Template_mat_card_content_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.remove(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", photo_r4.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r4.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", photo_r4.album ? photo_r4.album + ": " : "", " ", photo_r4.caption, "");
} }
function CustomizeTemplate_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " https://lilpeachyukie.github.io/rocky-photocards/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizeTemplate_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizeTemplate_div_1_mat_card_1_Template, 5, 4, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomizeTemplate_div_1_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.photos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.photos.length > 0);
} }
function CustomizeTemplate_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/_customize-notice_.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c2 = ".header[_ngcontent-%COMP%]{\r\n  color: white;\r\n  height: 100px;\r\n  display: block;\r\n  padding: 15px 20px;\r\n  font-size: 25px;\r\n  text-align: center;\r\n  background:black;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n  width: 195px;\r\n}\r\n\r\n.refresh-btn[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  color: white;\r\n  z-index: 1000000;\r\n  right: 1em;\r\n  top: 1em;\r\n}\r\n\r\n.gallery[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n  padding: 20px 5px 50px;\r\n  justify-content: center;\r\n\r\n  img {\r\n    width: 100%;\r\n    border-radius: 9px;\r\n  }\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  padding: 5px;\r\n  box-shadow: 0px 0px 0px 0px;\r\n  border: solid 1px #80808040;\r\n}\r\n\r\n.title-photo[_ngcontent-%COMP%]{\r\n  font-size:5px;\r\n  font-weight:500;\r\n  line-height: normal;\r\n  text-align: center;\r\n  margin-top: 3px;\r\n}\r\n\r\n.font-12[_ngcontent-%COMP%]{\r\n  font-size:12px;\r\n}\r\n\r\n.m-t-10[_ngcontent-%COMP%]{\r\n  margin-top:10px;\r\n}\r\n\r\n.d-grid[_ngcontent-%COMP%]{\r\n  display:grid;\r\n}\r\n\r\n.a-link[_ngcontent-%COMP%]{\r\n  color:#ffd0a6;\r\n  text-decoration:none\r\n}\r\n\r\n.in-progress[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 10em;\r\n  margin: 100px 0px;\r\n}\r\n\r\n.download-btn[_ngcontent-%COMP%] {\r\n  background: black;\r\n  width: 95%;\r\n  color: white;\r\n  margin: 20px auto;\r\n  display: block;\r\n  bottom: 1em;\r\n}\r\n\r\n.spacing-2[_ngcontent-%COMP%]{\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.sub-header[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  background: rgb(126 33 42);\r\n  color: white;\r\n  padding: 10px;\r\n  \r\n}\r\n\r\n.select-photocard-astro[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-bottom: -30px;\r\n  padding:10px 10px 0px\r\n}\r\n\r\n.w-100[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: fixed;\r\n  top: 0; left: 0;\r\n  width: 100%; height: 100%;\r\n  background-color: rgba(255,255,255,0.8);\r\n  z-index: 9999;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  border: 8px solid #f3f3f3;\r\n  border-top: 8px solid #555;\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n.sticky[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  z-index: 10000;\r\n  background-color: black;\r\n  display: flex;\r\n  color: white;\r\n  width: 100%;\r\n  right: 0em;\r\n  bottom: 0em;\r\n  height: 3em;\r\n  justify-content: center;\r\n}\r\n\r\n.note[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  position: fixed;\r\n  background: rgba(0, 0, 0, 0.87);\r\n  z-index: 10000;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  bottom: 4em;\r\n  right: 0em;\r\n  padding: 10px;\r\n  border-radius: 1em;\r\n  font-size: 12px;\r\n  color: white;\r\n}\r\n\r\n.template-link[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  opacity: 30%;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.template-notice[_ngcontent-%COMP%]{\r\n  border: solid 1px #e07418;\r\n  background: #f49a3654;\r\n  margin: 0px 30px;\r\n  padding: 25px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  opacity: 0.1;\r\n  cursor: pointer;\r\n}\r\n\r\n.customize-notice[_ngcontent-%COMP%]{ \r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  mat-card[_ngcontent-%COMP%] {\r\n    max-width: 70px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 1024px) {\r\n\r\n  .header[_ngcontent-%COMP%]{\r\n    color: white;\r\n    height: 115px;\r\n    display: block;\r\n    padding: 15px 20px;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    background:black;\r\n  }\r\n\r\n  mat-card[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n  }\r\n\r\n  .title-photo[_ngcontent-%COMP%]{\r\n    font-size:12px;\r\n    font-weight:500;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .gallery[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 16px;\r\n    padding: 20px 5px 80px;\r\n    justify-content: center;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{\r\n    width:245px;\r\n  }\r\n\r\n  .download-btn[_ngcontent-%COMP%] {\r\n    background: black;\r\n    width: 99%;\r\n    color: white;\r\n    margin: 20px auto;\r\n    display: block;\r\n    bottom: 1em;\r\n  }\r\n\r\n  .note[_ngcontent-%COMP%]{\r\n    width: 30em\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsUUFBUTtFQUNSLHNCQUFzQjtFQUN0Qix1QkFBdUI7O0VBRXZCO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhOztBQUVmOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNLEVBQUUsT0FBTztFQUNmLFdBQVcsRUFBRSxZQUFZO0VBQ3pCLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBLDJCQUEyQjs7QUFDM0I7O0VBRUU7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRTtFQUNGOztBQUVGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICB3aWR0aDogMTk1cHg7XHJcbn1cclxuXHJcbi5yZWZyZXNoLWJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDEwMDAwMDA7XHJcbiAgcmlnaHQ6IDFlbTtcclxuICB0b3A6IDFlbTtcclxufVxyXG5cclxuLmdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogOHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggNXB4IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICM4MDgwODA0MDtcclxufVxyXG5cclxuLnRpdGxlLXBob3Rve1xyXG4gIGZvbnQtc2l6ZTo1cHg7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLmZvbnQtMTJ7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbn1cclxuXHJcbi5tLXQtMTB7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4uZC1ncmlke1xyXG4gIGRpc3BsYXk6Z3JpZDtcclxufVxyXG5cclxuLmEtbGlua3tcclxuICBjb2xvcjojZmZkMGE2O1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lXHJcbn1cclxuXHJcbi5pbi1wcm9ncmVzc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTBlbTtcclxuICBtYXJnaW46IDEwMHB4IDBweDtcclxufVxyXG5cclxuLmRvd25sb2FkLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5zcGFjaW5nLTJ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTI2IDMzIDQyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBcclxufVxyXG5cclxuLnNlbGVjdC1waG90b2NhcmQtYXN0cm97XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XHJcbiAgcGFkZGluZzoxMHB4IDEwcHggMHB4XHJcbn1cclxuXHJcbi53LTEwMHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvYWRlcntcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7IGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItdG9wOiA4cHggc29saWQgIzU1NTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5zdGlja3l7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHJpZ2h0OiAwZW07XHJcbiAgYm90dG9tOiAwZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ub3Rle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJvdHRvbTogNGVtO1xyXG4gIHJpZ2h0OiAwZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRlbXBsYXRlLWxpbmt7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG9wYWNpdHk6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRlbXBsYXRlLW5vdGljZXtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZTA3NDE4O1xyXG4gIGJhY2tncm91bmQ6ICNmNDlhMzY1NDtcclxuICBtYXJnaW46IDBweCAzMHB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIG9wYWNpdHk6IDAuMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b21pemUtbm90aWNleyBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogRm9yIGRlc2t0b3BzIGFuZCBhYm92ZSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gIC5oZWFkZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1waG90b3tcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDVweCA4MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9nb3tcclxuICAgIHdpZHRoOjI0NXB4O1xyXG4gIH1cclxuXHJcbiAgLmRvd25sb2FkLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm90dG9tOiAxZW07XHJcbiAgfVxyXG5cclxuICAubm90ZXtcclxuICAgIHdpZHRoOiAzMGVtXHJcbiAgfVxyXG5cclxufSJdfQ== */";
class AppComponent {
    constructor(http, router, appService) {
        this.http = http;
        this.router = router;
        this.appService = appService;
        this.template = 'Rocky album photocards';
        this.tabSelected = 0;
        this.showToDo = false;
        this.showNote = false;
        this.update = '';
        this.note = '';
        this.intro = '';
        this.photoSections = [];
        this.hasNoPhotoMap = {};
        this.tabLoadCount = {};
        this.astroAlbumPC = _assets_records_astro_album_pc__WEBPACK_IMPORTED_MODULE_2__["astroAlbumPC"];
        this.astroNonAlbumPC = _assets_records_astro_album_pc__WEBPACK_IMPORTED_MODULE_2__["astroNonAlbumPC"];
        this.arohaPC = _assets_records_astro_non_album_pc__WEBPACK_IMPORTED_MODULE_3__["arohaPC"];
        this.sgPC = _assets_records_astro_non_album_pc__WEBPACK_IMPORTED_MODULE_3__["sgPC"];
        this.astroadPC = _assets_records_astro_non_album_pc__WEBPACK_IMPORTED_MODULE_3__["astroadPC"];
        this.aafPC = _assets_records_astro_non_album_pc__WEBPACK_IMPORTED_MODULE_3__["aafPC"];
        this.rorohaPC = _assets_records_astro_non_album_pc__WEBPACK_IMPORTED_MODULE_3__["rorohaPC"];
        this.magzPC = _assets_records_astro_non_album_pc__WEBPACK_IMPORTED_MODULE_3__["magzPC"];
        this.othersPC = _assets_records_astro_non_album_pc__WEBPACK_IMPORTED_MODULE_3__["othersPC"];
        this.albumPC_ = [];
        this.nonAlbumPC_ = [];
        this.rockystPC_ = [];
        this.blankPC_ = [];
        this.astroAlbumPC_ = [];
        this.astroNonAlbumPC_ = [];
        this.arohaPC_ = [];
        this.sgPC_ = [];
        this.astroadPC_ = [];
        this.aafPC_ = [];
        this.rorohaPC_ = [];
        this.magzPC_ = [];
        this.othersPC_ = [];
        this.astroPC = [
            { name: 'Album', val: 'showAstroAlbumPC' },
            { name: 'Non-Album', val: 'showNonAstroAlbumPC' },
            { name: 'AROHA Gen Kit', val: 'showArohaPC' },
            { name: 'Seasong Greetings', val: 'showSGPC' },
            { name: 'ASTROAD', val: 'showAstroadPC' },
            { name: 'Astro Aroha Festival', val: 'showAAFPC' },
            { name: 'Roroha', val: 'showRorohaPC' },
            { name: 'Magazine PB', val: 'showMagPC' },
            { name: 'Others', val: 'showOthersPC' }
        ];
        this.selectedAstroPC = [
            'showAstroAlbumPC', 'showNonAstroAlbumPC', 'showArohaPC', 'showSGPC', 'showAstroadPC', 'showAAFPC', 'showRorohaPC', 'showMagPC', 'showOthersPC'
        ];
        this.want = [];
        this.customizeTemplate = false;
    }
    handleClickOutside(event) {
        if (!this.stickyDiv.nativeElement.contains(event.target)) {
            this.showNote = false;
            this.showToDo = false;
        }
    }
    ngOnInit() {
        this.loadNotice();
        this.loadPhotoSections();
    }
    loadNotice() {
        this.http.get('assets/records/notice.json').subscribe(data => {
            this.update = data.update;
            this.note = data.note;
            this.intro = data.intro;
        });
    }
    loadPhotoSections() {
        this.http.get('assets/records/master.json').subscribe(config => {
            this.photoSections = config;
            this.photoSections.forEach(section => {
                if (section.type === 'rocky') {
                    this.hasNoPhotoMap[section.dataProp] = !!section.hasNoPhoto;
                }
                else if (section.type === 'astro') {
                    section.subSections.forEach((sub) => {
                        this.hasNoPhotoMap[sub.dataProp] = false;
                    });
                }
            });
        });
    }
    loadPhotoGroup(data_, dataProp) {
        data_.forEach((group, gi) => {
            for (let i = 0; i < group.total; i++) {
                const photo = {
                    caption: group.caption,
                    filename: group.nophoto ? undefined : `${gi}-${i}.jpg`,
                    album: group.album
                };
                this[dataProp].push(photo);
            }
        });
    }
    loadCaption(section) {
        this.http.get(`assets/records/${section.folder}.json`).subscribe((data) => {
            this.loadPhotoGroup(data, section.dataProp);
        });
    }
    onTabChange(index) {
        this.tabSelected = index;
        const section = this.photoSections.find(s => s.tabIndex === index);
        if (!section)
            return;
        this.template = section.name;
        this.tabLoadCount[index] = (this.tabLoadCount[index] || 0) + 1;
        if (this.tabLoadCount[index] > 1)
            return;
        if (section.type === 'rocky') {
            this.loadCaption(section);
        }
        else if (section.type === 'astro') {
            section.subSections.forEach((sub) => this.loadPhotoGroup(this[sub.folderRecords], sub.dataProp));
        }
    }
    captureAndDownload() {
        const element = document.getElementById("rocky-photocards");
        const select = element === null || element === void 0 ? void 0 : element.querySelector('mat-form-field');
        const loader = document.getElementById("loader");
        if (!element) {
            alert('Capture area not found!');
            return;
        }
        if (loader)
            loader.style.display = 'flex';
        if (select)
            select.style.display = 'none';
        html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(element).then((canvas) => {
            if (select)
                select.style.display = '';
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = this.template;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            if (loader)
                loader.style.display = 'none';
        }).catch((err) => {
            console.error('Error capturing:', err);
            if (loader)
                loader.style.display = 'none';
        });
    }
    onChangeDislay(selected) {
        this.selectedAstroPC = selected;
    }
    refresh() {
        setTimeout(() => this.forceReloadImages(), 100);
    }
    forceReloadImages() {
        const tabContent = document.querySelectorAll('.mat-tab-body-active img');
        tabContent.forEach((el) => {
            const img = el; // Cast to HTMLImageElement
            const src = img.getAttribute('src');
            if (src) {
                const baseSrc = src.split('?')[0]; // Remove any existing query string
                img.src = `${baseSrc}?t=${new Date().getTime()}`;
            }
        });
    }
    getPhotoArray(prop) {
        return this[prop] || [];
    }
    addWant(caption, photo, folder, album) {
        const path = `assets/images/${folder}/${photo}`;
        const index = this.want.findIndex(p => p.path === path);
        if (index > -1) {
            this.want.splice(index, 1);
        }
        else {
            this.want.push({ caption, path, album });
        }
    }
    getSelected(folder, filename) {
        return this.want.some(p => p.path === 'assets/images/' + folder + '/' + filename);
    }
    viewWant() {
        this.appService.setData(this.want);
        this.customizeTemplate = true;
        this.template = 'Rocky-photocards';
    }
    home() {
        this.customizeTemplate = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stickyDiv = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_click_HostBindingHandler($event) { return ctx.handleClickOutside($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 26, vars: 4, consts: [["id", "rocky-photocards", 4, "ngIf"], [4, "ngIf"], [1, "sticky"], ["stickyDiv", ""], ["mat-icon-button", "", "matTooltip", "Template", 3, "click"], ["mat-icon-button", "", "matTooltip", "Selected photocard", 3, "click"], ["mat-icon-button", "", "matTooltip", "Download", 3, "click"], ["mat-icon-button", "", "matTooltip", "Notice", 3, "click"], ["mat-icon-button", "", "matTooltip", "What To Do", 3, "click"], ["mat-icon-button", "", "matTooltip", "Refresh", 3, "click"], ["class", "note", 3, "innerHTML", 4, "ngIf"], ["id", "loader", 1, "loader"], [1, "spinner"], ["id", "rocky-photocards"], ["color", "primary", 1, "header", "m-b-10"], [1, "logo", 3, "src"], [1, "font-12", "spacing-2"], ["href", "https://x.com/lilpeachyukie", "target", "_blank", 1, "a-link"], [3, "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [1, "gallery"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "d-grid"], [3, "src", "alt"], [1, "title-photo"], [1, "w-100", "select-photocard-astro"], ["appearance", "outline", 1, "w-100"], ["multiple", "", 3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "value"], ["align", "center", 1, "sub-header"], [1, "note", 3, "innerHTML"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 12, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "photo_library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.viewWant(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "playlist_add_check\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.captureAndDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { ctx.showNote = !ctx.showNote; return ctx.showToDo = ctx.showNote && ctx.showToDo ? !ctx.showToDo : ctx.showToDo; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { ctx.showToDo = !ctx.showToDo; return ctx.showNote = ctx.showNote && ctx.showToDo ? !ctx.showNote : ctx.showNote; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_div_22_Template, 1, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_23_Template, 1, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customizeTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customizeTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToDo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNote);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], CustomizeTemplate]; }, styles: [_c2] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] }]; }, { stickyDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stickyDiv', { static: true }]
        }], handleClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();
class CustomizeTemplate {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.photos = this.appService.getData();
    }
    remove(i) {
        this.photos.splice(i, 1);
    }
}
CustomizeTemplate.ɵfac = function CustomizeTemplate_Factory(t) { return new (t || CustomizeTemplate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"])); };
CustomizeTemplate.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizeTemplate, selectors: [["app-customize-template"]], decls: 3, vars: 2, consts: [["id", "rocky-photocards", 1, "m-t-10"], ["class", "gallery m-t-10", 4, "ngIf"], ["class", "customize-notice", 4, "ngIf"], [1, "gallery", "m-t-10"], [4, "ngFor", "ngForOf"], ["class", "template-link w-100", 4, "ngIf"], ["matTooltip", "Remove", 1, "d-grid", 3, "click"], [3, "src", "alt"], [1, "title-photo"], [1, "template-link", "w-100"], [1, "customize-notice"], [2, "width", "80%", 3, "src"]], template: function CustomizeTemplate_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizeTemplate_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomizeTemplate_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photos.length < 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"]], styles: [_c2] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizeTemplate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customize-template',
                templateUrl: './customize-template.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");














 // ✅ import this

class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_12__["CustomizeTemplate"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_12__["CustomizeTemplate"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]
                ],
                providers: [_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");





const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: 'customize', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeTemplate"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map