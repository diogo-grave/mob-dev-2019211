(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Characters</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-searchbar [(ngModel)]=\"terms\"></ion-searchbar>\n<!-- Code based upon: https://youtu.be/NBeExE9dvR0-->\n\t<ion-list>\n\t\t<!-- I removed async because it is an Observable function and it doesn't work without -->\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let character of characters\" (click)=\"openDetails(character)\">\n\t\t\t{{ character.name }}\n\t\t</ion-item>\n\t</ion-list>\n\t<!-- the infinte scroll occurs when the sidebar is 20% to be completed -->\n\t<!-- as soon as it reaches the remaining 20%, the method is called to load more -->\n\t<ion-infinite-scroll threshold=\"20%\" (ionInfinite)=\"loadMore($event)\">\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data\">\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/characters/characters-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/characters/characters-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CharactersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageRoutingModule", function() { return CharactersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters.page */ "./src/app/pages/characters/characters.page.ts");




const routes = [
    {
        path: '',
        component: _characters_page__WEBPACK_IMPORTED_MODULE_3__["CharactersPage"]
    }
];
let CharactersPageRoutingModule = class CharactersPageRoutingModule {
};
CharactersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharactersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/characters/characters.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.module.ts ***!
  \*******************************************************/
/*! exports provided: CharactersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function() { return CharactersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters-routing.module */ "./src/app/pages/characters/characters-routing.module.ts");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters.page */ "./src/app/pages/characters/characters.page.ts");







let CharactersPageModule = class CharactersPageModule {
};
CharactersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersPageRoutingModule"]
        ],
        declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
    })
], CharactersPageModule);



/***/ }),

/***/ "./src/app/pages/characters/characters.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/characters/characters.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/characters/characters.page.ts ***!
  \*****************************************************/
/*! exports provided: CharactersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPage", function() { return CharactersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let CharactersPage = class CharactersPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        //We need an array of characters, so we create an array
        //Code from: https://youtu.be/NBeExE9dvR0
        this.characters = [];
        this.offset = 0;
        this.numberCharacters = 63;
    }
    ngOnInit() {
        //Since this is the main function, we call ourselves the methods we want.
        this.openCharacters();
    }
    openCharacters(event) {
        //This method calls the api and assumes that the offset parameter is passed to the API
        this.api.getCharacters(this.offset).subscribe(data => {
            //It shows on the console all the data of this method, in the form of an array of characters
            console.log(data);
            this.characters = this.characters.concat(data);
            //Once the array is populated, the event is completed
            if (event) {
                event.target.complete();
            }
        });
    }
    loadMore(event) {
        //This calculation will increase the offset number by 20 every time the event happens 
        this.offset = this.offset + 20;
        //as soon as the offset has been updated, run the method again
        this.openCharacters(event);
        //Method for when the number of characters is the limit
        if (this.offset > this.numberCharacters) {
            event.target.disabled = true;
        }
    }
    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
};
CharactersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CharactersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-characters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./characters.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./characters.page.scss */ "./src/app/pages/characters/characters.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], CharactersPage);



/***/ })

}]);
//# sourceMappingURL=characters-characters-module-es2015.js.map