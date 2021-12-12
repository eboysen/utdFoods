(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eric\Desktop\utdFoods\utdFoods\utdFoods\src\main.ts */"zUnb");


/***/ }),

/***/ "0KrY":
/*!**********************************!*\
  !*** ./src/app/tasks.service.ts ***!
  \**********************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database.service */ "c92J");



class TasksService {
    constructor(db) {
        this.db = db;
        this.line = "";
        this.inst = "";
        this.isAuthed = { "authorized": false };
    }
    getRecipe(id) {
        return this.db.get('recipe/' + id);
    }
    createRecipe(title, author, ingredients, measurements, description, tags, dir) {
        return this.db.post('post-recipe', {
            "title": title,
            "author": author,
            "ingredients": ingredients,
            "measurements": measurements,
            "description": description,
            "tags": tags,
            "steps": dir
        });
    }
    uploadImage(id, img) {
        console.log("upload");
        console.log(img);
        return this.db.post('image/' + id, img);
    }
    getMaxRecipeId() {
        return this.db.get('maxID');
    }
    getRandomRecipe(num) {
        return this.db.get('random/' + num);
    }
    getInstructions(id) {
        return this.db.get('instructions/' + id);
    }
    getSearch(keyword) {
        return this.db.get('getRecipes/' + keyword);
    }
    getContents() {
        return this.db.get('getRecipes');
    }
    getFiveNew() {
        return this.db.get('fiveNew');
    }
    getFavorites() {
        return this.db.get('favorites');
    }
    setFavorite(id) {
        return this.db.get('setFavorite/' + id);
    }
    removeFavorite(id) {
        return this.db.delete('removeFavorite/' + id);
    }
    loginReq(username, password) {
        let thing = this.db.post('login', {
            "username": username,
            "password": password,
        });
        return thing;
    }
    logOutReq() {
        this.isAuthed.authorized = false;
        return this.db.get('logout');
    }
    isLoggedIn() {
        try {
            let thing = this.db.get('isLoggedIn').toPromise().then(result => {
                this.isAuthed.authorized = true;
                return result;
            });
            return thing.then(token => {
                return token;
            });
        }
        catch (e) {
            console.log(e);
            this.isAuthed.authorized = false;
            return;
        }
    }
    addGroceryList(id) {
        return this.db.get('addGroceryItem/' + id);
    }
}
TasksService.ɵfac = function TasksService_Factory(t) { return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"])); };
TasksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TasksService, factory: TasksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }]; }, null); })();


/***/ }),

/***/ "1HgR":
/*!**************************************************!*\
  !*** ./src/app/user-page/user-page.component.ts ***!
  \**************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../favorites/favorites.component */ "3s+D");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");









function UserPageComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserPageComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserPageComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.newRecipeLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "note_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserPageComponent {
    constructor(router, task) {
        this.router = router;
        this.task = task;
        this.link = "";
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = yield ((_a = this.task.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.then(token => token));
                this.link = "http://localhost:3000/images/" + this.user.username;
            }
            catch (e) {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(["/login"]);
                });
            }
        });
    }
    newRecipeLink() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/new-recipe"]);
        });
    }
}
UserPageComponent.ɵfac = function UserPageComponent_Factory(t) { return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"])); };
UserPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserPageComponent, selectors: [["app-user-page"]], decls: 12, vars: 5, consts: [[1, "userProfile"], ["class", "profileImg", "onerror", "this.onerror=null; this.src='http://localhost:3000/images/default'", 3, "src", 4, "ngIf"], ["mat-fab", "", 3, "click", 4, "ngIf"], [1, "body"], ["onerror", "this.onerror=null; this.src='http://localhost:3000/images/default'", 1, "profileImg", 3, "src"], ["mat-fab", "", 3, "click"]], template: function UserPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserPageComponent_img_2_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserPageComponent_button_9_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.link != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Username: ", ctx.user.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Authorization: ", ctx.user.authorized, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.authorized === "admin");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_5__["FavoritesComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".body[_ngcontent-%COMP%]{\r\n    width:70%;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    height: 100%;\r\n    float:right;\r\n}\r\n.userProfile[_ngcontent-%COMP%]{\r\n    width:18%;\r\n    height:100%;\r\n    float:left;\r\n    margin-right:5%;\r\n    padding-left:5%;\r\n    border-color:darkslategrey;\r\n   \r\n    box-shadow: 5px 5px 5px gray;\r\n}\r\n.profileImg[_ngcontent-%COMP%]{\r\n    width:80%;\r\n    height:14vw;\r\n    object-fit: cover;\r\n    border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7SUFDZiwwQkFBMEI7O0lBRTFCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InVzZXItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG4udXNlclByb2ZpbGV7XHJcbiAgICB3aWR0aDoxOCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NSU7XHJcbiAgICBib3JkZXItY29sb3I6ZGFya3NsYXRlZ3JleTtcclxuICAgXHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBncmF5O1xyXG59XHJcbi5wcm9maWxlSW1ne1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgaGVpZ2h0OjE0dnc7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-page',
                templateUrl: './user-page.component.html',
                styleUrls: ['./user-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"] }]; }, null); })();


/***/ }),

/***/ "3s+D":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









function FavoritesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Looks like you don't have any favorite recipes!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Browse our wide selection of recipes to find one that you like, then click the heart to save it here!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FavoritesComponent_mat_card_6_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const fav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", fav_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function FavoritesComponent_mat_card_6_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoritesComponent_mat_card_6_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const fav_r2 = ctx_r9.$implicit; const i_r3 = ctx_r9.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.changeFav(fav_r2.favorite, fav_r2.id, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx_r5.color);
} }
function FavoritesComponent_mat_card_6_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoritesComponent_mat_card_6_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const fav_r2 = ctx_r12.$implicit; const i_r3 = ctx_r12.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.changeFav(fav_r2.favorite, fav_r2.id, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FavoritesComponent_mat_card_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function FavoritesComponent_mat_card_6_Template_mat_card_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.invisible(i_r3); })("mouseleave", function FavoritesComponent_mat_card_6_Template_mat_card_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r3 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.visible(i_r3); })("click", function FavoritesComponent_mat_card_6_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const fav_r2 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.RecipeNav(fav_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FavoritesComponent_mat_card_6_img_1_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FavoritesComponent_mat_card_6_mat_icon_8_Template, 2, 1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FavoritesComponent_mat_card_6_mat_icon_9_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fav_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fav_r2.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", fav_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !fav_r2.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fav_r2.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fav_r2.description);
} }
class FavoritesComponent {
    constructor(task, router) {
        this.task = task;
        this.router = router;
        this.favorites = [];
        this.color = "Red";
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //checks to make sure suer is logged in
            try {
                yield this.task.isLoggedIn();
            }
            catch (e) {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(["/login"]);
                });
            }
            this.getFavorites();
        });
    }
    getFavorites() {
        this.task.getFavorites().subscribe((results) => {
            for (let x = 0; x < results.length; x++) {
                let current = { title: results[x].title,
                    id: results[x].id,
                    username: results[x].username,
                    description: results[x].description,
                    link: "http://localhost:3000/images/" + results[x].id,
                    visible: true,
                    favorite: true,
                };
                this.favorites.push(current);
            }
        });
    }
    invisible(num) {
        this.favorites[num].visible = false;
    }
    visible(num) {
        this.favorites[num].visible = true;
    }
    changeFav(status, id, index) {
        let idString = "" + id;
        if (status) {
            this.task.removeFavorite(idString).subscribe((res) => {
                console.log(res);
            });
            this.favorites[index].favorite = !status;
        }
        else {
            this.task.setFavorite(idString).subscribe((res) => {
                console.log(res);
            });
            this.favorites[index].favorite = !status;
        }
    }
    RecipeNav(id) {
        console.log(id);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/recipe/" + id]);
        });
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 7, vars: 2, consts: [[1, "move"], ["class", "move", 4, "ngIf"], [1, "grid"], ["class", "card", 3, "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "mouseenter", "mouseleave", "click"], ["class", "cardImage", "onerror", "this.src='http://localhost:3000/images/default'", 3, "src", 4, "ngIf"], [1, "cardText"], [1, "cardGrid"], ["matRipple", "", "class", "heart", 3, "matRippleColor", "click", 4, "ngIf"], ["color", "primary", "class", "heart", 3, "click", 4, "ngIf"], ["onerror", "this.src='http://localhost:3000/images/default'", 1, "cardImage", 3, "src"], ["matRipple", "", 1, "heart", 3, "matRippleColor", "click"], ["color", "primary", 1, "heart", 3, "click"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FavoritesComponent_div_4_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FavoritesComponent_mat_card_6_Template, 12, 5, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.favorites.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.favorites);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"]], styles: [".grid[_ngcontent-%COMP%]{\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    display:grid;\r\n    width:80%;\r\n    gap:1rem;\r\n    grid-template-columns: repeat(auto-fit,minmax(200px,300px));\r\n    grid-auto-rows:240px;\r\n    margin-top:3%;\r\n}\r\n.cardGrid[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    width:100%;\r\n    grid-template-rows:1fr 4fr;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    overflow:hidden;\r\n    padding:0px;\r\n    color:white;\r\n    background-color:var(--color-accentDark);\r\n    box-shadow: 5px 5px 5px darkslategrey;\r\n}\r\n.cardText[_ngcontent-%COMP%]{\r\n    padding:30px;\r\n}\r\n.cardImage[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n.heart[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.move[_ngcontent-%COMP%]{\r\n    margin-left:10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUiwyREFBMkQ7SUFDM0Qsb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImZhdm9yaXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWR7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBnYXA6MXJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgyMDBweCwzMDBweCkpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6MjQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjMlO1xyXG59XHJcbi5jYXJkR3JpZHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciA0ZnI7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1hY2NlbnREYXJrKTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGRhcmtzbGF0ZWdyZXk7XHJcbn1cclxuLmNhcmRUZXh0e1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG59XHJcbi5jYXJkSW1hZ2V7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLmhlYXJ0e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tb3Zle1xyXG4gICAgbWFyZ2luLWxlZnQ6MTAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.css']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "PDjf");










function HomeComponent_div_7_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_7_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.nav(ctx_r6.highlights[ctx_r6.current].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const image_r3 = ctx_r8.$implicit;
    const i_r4 = ctx_r8.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slide", ctx_r5.current === i_r4 ? "active" : "inactive");
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_7_img_1_Template, 1, 2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.highlights[ctx_r0.current].link != ctx_r0.empty);
} }
function HomeComponent_div_11_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome Back ", ctx_r9.user.name, "!");
} }
function HomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_11_h1_2_Template, 2, 1, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function HomeComponent_div_11_Template_input_keyup_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.Search(_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loggedIn.authorized);
} }
function HomeComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_48_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const recipe_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.nav(recipe_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", recipe_r13.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r13.description);
} }
class HomeComponent {
    constructor(task, router) {
        this.task = task;
        this.router = router;
        this.title = "";
        this.link = "";
        this.empty = "";
        this.current = 2;
        this.left = 1;
        this.left2 = 0;
        this.right = 3;
        this.right2 = 4;
        this.highlights = [];
        this.new = [];
        this.timeLeft = 10;
        this.loggedIn = task.isAuthed;
        this.mobile = true;
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = yield ((_a = this.task.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.then(token => token));
            }
            catch (e) {
                this.user = { name: "" };
            }
            if (window.screen.width < 800) {
                this.mobile = false;
            }
            this.getRandom();
            this.getNew();
            this.startTimer();
            console.log(this.user);
        });
    }
    forward() {
        this.current++;
        this.right++;
        this.left++;
        this.left2++;
        this.right2++;
        if (this.current == 5)
            this.current = 0;
        if (this.right === 5)
            this.right = 0;
        if (this.left === 5)
            this.left = 0;
        if (this.left2 === 5)
            this.left2 = 0;
        if (this.right2 === 5)
            this.right2 = 0;
    }
    backwards() {
        this.current--;
        this.left--;
        this.right--;
        this.right2--;
        this.left2--;
        if (this.current == -1)
            this.current = 4;
        if (this.left === -1)
            this.left = 4;
        if (this.right == -1)
            this.right = 4;
        if (this.right2 == -1)
            this.right2 = 4;
        if (this.left2 === -1)
            this.left2 = 4;
    }
    getNew() {
        this.task.getFiveNew().subscribe((results) => {
            for (let x = 0; x < results.length; x++) {
                const cur = { title: results[x].title, id: results[x].id, description: results[x].description, link: "http://localhost:3000/images/" + results[x].id };
                this.new.push(cur);
            }
        });
    }
    getRandom() {
        this.task.getRandomRecipe(5).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let x = 0; x < 5; x++) {
                console.log(res[x].id);
                this.highlights.push({ title: res[x].title, id: res[x].id, description: "", link: "http://localhost:3000/images/" + res[x].id });
            }
        }));
    }
    getFavorites() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.task.getFavorites().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(res);
            }));
        });
    }
    nav(id) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/recipe/" + id]);
        });
    }
    Search(value) {
        console.log(value);
        if (value != undefined) {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(["/recipe-list"], { queryParams: { keyword: value } });
            });
        }
        else {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(["/recipe-list"]);
            });
        }
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0)
                this.timeLeft--;
            else {
                this.timeLeft = 10;
                this.forward();
            }
        }, 1000);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 49, vars: 3, consts: [[1, "contain"], [1, "gallary"], [1, "flex"], ["mat-stroked-button", "", 1, "but", 3, "click"], [1, "photos"], ["class", "pht", 4, "ngFor", "ngForOf"], ["class", "search", 4, "ngIf"], [1, "catagories"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/breakfast')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "label"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/lunch')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/dinner')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/dessert')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/snack')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/chicken')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/beef')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/pork')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "card", 2, "background-image", "url('https://utd-foods.herokuapp.com/images/vegetarian')", "background-repeat", "no-repeat", "background-size", "cover", 3, "click"], [1, "body"], [1, "new"], [4, "ngFor", "ngForOf"], [1, "pht"], ["class", "img", "onerror", "this.src='http://localhost:3000/images/default'", 3, "src", "click", 4, "ngIf"], ["onerror", "this.src='http://localhost:3000/images/default'", 1, "img", 3, "src", "click"], [1, "search"], [1, "center"], [4, "ngIf"], ["type", "search", "placeholder", "Find Your Recipes...", 1, "bar", 3, "keyup.enter"], ["bigSearch", ""], [3, "click"], ["rowspan", "2"], ["onerror", "this.onerror=null; this.src='http://localhost:3000/images/default'", 1, "thumb", 3, "src"], [1, "desc"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() { return ctx.backwards(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() { return ctx.forward(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "arrow_forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_13_listener() { return ctx.Search("breakfast"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_16_listener() { return ctx.Search("lunch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_19_listener() { return ctx.Search("dinner"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_22_listener() { return ctx.Search("dessert"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Dessert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_25_listener() { return ctx.Search("snack"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Snack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_28_listener() { return ctx.Search("chicken"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Chicken");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_31_listener() { return ctx.Search("beef"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Beef");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_34_listener() { return ctx.Search("pork"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Pork");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_card_click_37_listener() { return ctx.Search("vegetarian"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Vegetarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "New Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, HomeComponent_div_48_Template, 13, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.highlights);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.new);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"]], styles: [".photos[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    height: 80%;\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n    display:flex;\r\n}\r\n.gallary[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:100%;\r\n    background-color: rgb(39, 39, 39);\r\n    color:white;\r\n    position:relative;\r\n    display:block;\r\n    float:left;\r\n}\r\n.flex[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    padding:20px;\r\n    height:90%;\r\n}\r\n.img[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    height:80%;\r\n    position:absolute;\r\n    object-fit: cover;\r\n    display:block;\r\n    margin-top:10px;\r\n    margin-bottom:20px;\r\n    background-image:\"http://localhost:3000/images/default\";\r\n    cursor:pointer;\r\n}\r\n.but[_ngcontent-%COMP%]{\r\n    display:block;\r\n    position:relative;\r\n    height:90%;\r\n    width:10%;\r\n}\r\n.thumb[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:100%;\r\n    object-fit: cover;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n    padding:30px;\r\n    margin-left:20%;\r\n    margin-right:20%;\r\n    display: block;\r\n}\r\n.left[_ngcontent-%COMP%]{\r\n    float:left;\r\n    padding-left:30px;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n    background-color: rgb(39, 39, 39);\r\n    height:100%;\r\n    width:40%;\r\n    position:relative;\r\n    display:block;\r\n    float:right;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    top:50%;\r\n    width:100%;\r\n    height:100%;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    display: relative;\r\n    color:white;\r\n\r\n}\r\n.bar[_ngcontent-%COMP%]{\r\n    margin-left:1%;\r\n    width:90%;\r\n    height:10%;\r\n    font-style:italic;\r\n    font-size:200%;\r\n}\r\n.label[_ngcontent-%COMP%]{\r\n    background-color:var(--color-primary);\r\n    padding:2%;\r\n    color:white;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n    align-items: center;\r\n    align-content: center;\r\n    overflow: hidden; \r\n    box-shadow: gray 5px 5px 5px;\r\n    \r\n}\r\nmat-card[_ngcontent-%COMP%]{\r\n    padding:0px;\r\n}\r\n@media(max-width:800px){\r\n    .catagories[_ngcontent-%COMP%]{\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n        display:grid;\r\n        width:90%;\r\n        gap:1%;\r\n        grid-template-rows: repeat(9,150px);\r\n        margin-top:3%;\r\n        margin-bottom:10px;\r\n    }\r\n    .search[_ngcontent-%COMP%]{\r\n        display:none;\r\n        width:100%;\r\n        height:100%;\r\n    }\r\n    .contain[_ngcontent-%COMP%]{\r\n        width:100%;\r\n        display:grid;\r\n        height:50%;\r\n        position:relative;\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n@media (min-width: 800px){\r\n    .catagories[_ngcontent-%COMP%]{\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n        display:grid;\r\n        width:90%;\r\n        gap:1%;\r\n        grid-template-columns: repeat(9,10%);\r\n        height:9vw;\r\n        margin-top:3%;\r\n    }\r\n    .search[_ngcontent-%COMP%]{\r\n        background-color: rgb(39, 39, 39);\r\n        height:100%;\r\n        width:100%;\r\n        position:relative;\r\n        display:block;\r\n        float:right;\r\n    }\r\n    .contain[_ngcontent-%COMP%]{\r\n        width:100%;\r\n        display:grid;\r\n        height:50%;\r\n        position:relative;\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdURBQXVEO0lBQ3ZELGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNEJBQTRCOztBQUVoQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFNBQVM7UUFDVCxNQUFNO1FBQ04sbUNBQW1DO1FBQ25DLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsMEJBQTBCO0lBQzlCO0FBQ0o7QUFHQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osU0FBUztRQUNULE1BQU07UUFDTixvQ0FBb0M7UUFDcEMsVUFBVTtRQUNWLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlDQUFpQztRQUNqQyxXQUFXO1FBQ1gsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsOEJBQThCO0lBQ2xDO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3Rvc3tcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG59XHJcbi5nYWxsYXJ5e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgaGVpZ2h0OjkwJTtcclxufVxyXG4uaW1ne1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgaGVpZ2h0OjgwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbWFnZXMvZGVmYXVsdFwiO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmJ1dHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICB3aWR0aDoxMCU7XHJcbn1cclxuLnRodW1ie1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDozMHB4O1xyXG59XHJcbi5zZWFyY2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgZGlzcGxheTogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbn1cclxuLmJhcntcclxuICAgIG1hcmdpbi1sZWZ0OjElO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgaGVpZ2h0OjEwJTtcclxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xyXG4gICAgZm9udC1zaXplOjIwMCU7XHJcbn1cclxuLmxhYmVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6MiU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgYm94LXNoYWRvdzogZ3JheSA1cHggNXB4IDVweDtcclxuICAgIFxyXG59XHJcbm1hdC1jYXJke1xyXG4gICAgcGFkZGluZzowcHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo4MDBweCl7XHJcbiAgICAuY2F0YWdvcmllc3tcclxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgZ2FwOjElO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksMTUwcHgpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWlue1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGhlaWdodDo1MCU7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpe1xyXG4gICAgLmNhdGFnb3JpZXN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgIGdhcDoxJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LDEwJSk7XHJcbiAgICAgICAgaGVpZ2h0Ojl2dztcclxuICAgICAgICBtYXJnaW4tdG9wOjMlO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW57XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OjUwJTtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB9XHJcbn0iXX0= */"], data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("1000ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => inactive', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))])
            ])] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("1000ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => inactive', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))])
                    ])]
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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

/***/ "BpP0":
/*!****************************************************!*\
  !*** ./src/app/new-recipe/new-recipe.component.ts ***!
  \****************************************************/
/*! exports provided: NewRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRecipeComponent", function() { return NewRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");












const _c0 = ["myFile"];
function NewRecipeComponent_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ingredient ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 2, i_r6 / 2 + 1, "1.0-0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r7.controls[i_r6]);
} }
function NewRecipeComponent_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Quantity ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 2, i_r6 / 2, "1.0-0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r8.controls[i_r6]);
} }
function NewRecipeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NewRecipeComponent_div_34_div_2_Template, 6, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NewRecipeComponent_div_34_div_3_Template, 6, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r4 = ctx.even;
    const o_r5 = ctx.odd;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", e_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", o_r5);
} }
function NewRecipeComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Step ", i_r12 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.control2[i_r12]);
} }
class NewRecipeComponent {
    //ingredients = new FormArray([])
    constructor(task, router, formBuilder) {
        this.task = task;
        this.router = router;
        this.formBuilder = formBuilder;
        this.fileName = "";
        this.recipe = this.formBuilder.group({
            title: '',
            author: '',
            tags: '',
            description: '',
            ingredients: this.formBuilder.array([]),
            step: this.formBuilder.array([])
        });
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(this.ingredients);
            try {
                this.user = yield ((_a = this.task.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.then(token => token));
                if (this.user.authorized != 'admin') {
                    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                        this.router.navigate(["/login"]);
                    });
                }
            }
            catch (e) {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(["/login"]);
                });
            }
            this.arrayItems = this.recipe.get('ingredients');
            this.controls = this.arrayItems.controls;
            this.steps = this.recipe.get('step');
            this.control2 = this.steps.controls;
            this.title = this.recipe.get('title');
            this.author = this.recipe.get('author');
            this.tags = this.recipe.get('tags');
            this.description = this.recipe.get('description');
        });
    }
    createIngredient() {
        this.arrayItems.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
        this.arrayItems.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
        console.log(this.arrayItems);
    }
    addStep() {
        this.steps.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    }
    //Function to get the file that was chosen and upload it to the backend
    onFileSelected(event, id) {
        const file = event.target.files[0]; //grabs file
        if (file) {
            this.fileName = file.name;
            this.formData = new FormData(); //create payload obj
            this.formData.append("exampleImg", file);
            //const upload$=this.task.uploadImage(id,this.formData);//upload using the id number and the form data
            //upload$.subscribe();
        }
    }
    submit() {
        console.log(this.recipe.value);
        let ing = this.recipe.value.ingredients[0];
        let mes = this.recipe.value.ingredients[1];
        for (let i = 2; i < this.recipe.value.ingredients.length; i += 2) {
            ing += ', ' + this.recipe.value.ingredients[i];
            mes += ', ' + this.recipe.value.ingredients[i + 1];
        }
        let dir = this.recipe.value.step[0];
        for (let i = 1; i < this.recipe.value.step.length; i++) {
            dir += ', ' + this.recipe.value.step[i];
        }
        console.log(ing);
        console.log(mes);
        this.task.createRecipe(this.recipe.value.title, this.recipe.value.author, ing, mes, this.recipe.value.description, this.recipe.value.tags, dir).subscribe((res) => {
            console.log(res);
            console.log(res[0].id);
            try {
                if (this.fileName != null) {
                    const upload$ = this.task.uploadImage(res[0].id, this.formData); //upload using the id number and the form data
                    upload$.subscribe();
                }
            }
            catch (_a) {
                console.log('not working');
            }
        });
    }
}
NewRecipeComponent.ɵfac = function NewRecipeComponent_Factory(t) { return new (t || NewRecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
NewRecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewRecipeComponent, selectors: [["app-new-recipe"]], viewQuery: function NewRecipeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 47, vars: 7, consts: [[1, "body"], ["mat-fab", ""], ["for", "myFile"], [3, "formGroup"], ["matInput", "", "type", "text", "name", "textid"], ["textid", ""], ["matInput", "", "type", "text", 3, "formControl"], [1, "area"], ["matInput", "", 3, "formControl"], ["formArrayName", "ingredients", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 3, "click"], ["formArrayName", "step", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "accent", "type", "submit", 3, "click"], ["type", "file", "id", "myFile", "name", "exampleImg", 1, "hide", 3, "change"], ["formArrayName", "ingredients"], [3, "formGroupName"], [4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "ingredient", 3, "formControl"], ["formArrayName", "step"]], template: function NewRecipeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create a new recipe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "add_photo_alternate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Image id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Tags (comma seperated)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, NewRecipeComponent_div_34_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewRecipeComponent_Template_button_click_35_listener() { return ctx.createIngredient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Add Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, NewRecipeComponent_div_38_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewRecipeComponent_Template_button_click_40_listener() { return ctx.addStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Add Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewRecipeComponent_Template_button_click_44_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewRecipeComponent_Template_input_change_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return ctx.onFileSelected($event, _r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.recipe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.control2);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: [".body[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n    padding:30px;\r\n    margin-left:20%;\r\n    margin-right:20%;\r\n    width:100%;\r\n}\r\n.hide[_ngcontent-%COMP%]{\r\n    display:none;\r\n}\r\n.form[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n}\r\n.area[_ngcontent-%COMP%]{\r\n    width:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1yZWNpcGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6Im5ldy1yZWNpcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6MzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjIwJTtcclxuICAgIG1hcmdpbi1yaWdodDoyMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbi5mb3Jte1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4uYXJlYXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewRecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-new-recipe',
                templateUrl: './new-recipe.component.html',
                styleUrls: ['./new-recipe.component.css']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['myFile']
        }] }); })();


/***/ }),

/***/ "IZJF":
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








function RecipeComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeComponent_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.changeFav(ctx_r5.favorite, ctx_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx_r0.color);
} }
function RecipeComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.changeFav(ctx_r7.favorite, ctx_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecipeComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function RecipeComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ing_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ing_r9.measurement, " ", ing_r9.ingredient, "");
} }
function RecipeComponent_ol_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ins_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r11 + 1, ". ", ins_r10, "");
} }
class RecipeComponent {
    constructor(task, route) {
        this.task = task;
        this.route = route;
        this.id = "";
        this.title = "";
        this.description = "";
        this.author = "";
        this.ingredients = "";
        this.measurements = "";
        this.ingArr = [];
        this.instr = [];
        this.inst = "";
        this.link = "";
        this.empty = "";
        this.favorite = false;
        this.color = "White";
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = yield ((_a = this.task.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.then(token => token));
            }
            catch (e) {
                this.user = { name: "" };
            }
            this.route.params.subscribe(params => {
                console.log(params);
                this.id = params['id'];
            });
            console.log(this.id);
            this.getTheOne(this.id);
            this.getFavorites();
            this.task.getInstructions(this.id).subscribe((response) => {
                this.inst = response;
                console.log(this.inst);
                const instructions = [];
                while (this.inst.indexOf(",") > -1) {
                    instructions.push(this.inst.substring(0, this.inst.indexOf(",")));
                    this.inst = this.inst.substring(this.inst.indexOf(",") + 1, this.inst.length);
                }
                instructions.push(this.inst);
                this.inst = "";
                console.log(instructions);
                this.instr = instructions;
                console.log(this.instr);
            });
        });
    }
    getTheOne(value) {
        this.task.getRecipe(value).subscribe((response) => {
            console.log(response);
            this.id = response[0].id;
            this.title = response[0].title;
            this.description = response[0].description;
            this.author = response[0].author;
            this.ingredients = response[0].ingredients;
            this.measurements = response[0].measurements;
            this.link = "http://localhost:3000/images/" + this.id;
            console.log(this.ingredients);
            console.log(this.measurements);
            this.parseIngredients();
        });
    }
    getFavorites() {
        this.task.getFavorites().subscribe((results) => {
            for (let x = 0; x < results.length; x++) {
                if (this.id === results[x].id) {
                    this.favorite = true;
                    return;
                }
                else
                    this.favorite = false;
            }
        });
    }
    parseIngredients() {
        this.ingArr = [];
        while (this.ingredients.search(',') > 0) {
            const currentIng = this.ingredients.substring(0, this.ingredients.search(',')); //find commas
            const currentMes = this.measurements.substring(0, this.measurements.search(','));
            const ing = { ingredient: currentIng, measurement: currentMes }; //create obj
            this.ingArr.push(ing);
            this.ingredients = this.ingredients.substring(this.ingredients.search(',') + 1, this.ingredients.length); //shorten strings
            this.measurements = this.measurements.substring(this.measurements.search(',') + 1, this.measurements.length);
        }
        const currentIng = this.ingredients.substring(0, this.ingredients.length); //grab last items w/o commas
        const currentMes = this.measurements.substring(0, this.measurements.length);
        const ing = { ingredient: currentIng, measurement: currentMes };
        this.ingArr.push(ing);
    }
    changeFav(status, id) {
        if (status) {
            this.task.removeFavorite(id).subscribe((res) => {
                console.log(res);
            });
            this.favorite = !status;
        }
        else {
            this.task.setFavorite(id).subscribe((res) => {
                console.log(res);
            });
            this.favorite = !status;
        }
    }
    addToList(id) {
        this.task.addGroceryList(id).subscribe((results) => {
            window.alert("Item added to grocery list");
        }, (error) => {
            window.alert("Please log in to access the grocery list");
        });
    }
}
RecipeComponent.ɵfac = function RecipeComponent_Factory(t) { return new (t || RecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
RecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeComponent, selectors: [["app-recipe"]], decls: 28, vars: 9, consts: [[1, "body"], [1, "recipeTitle"], [1, "right"], ["matRipple", "", "class", "heart", 3, "matRippleColor", "click", 4, "ngIf"], ["color", "primary", "class", "heart", 3, "click", 4, "ngIf"], ["matRipple", "", 1, "heart", 3, "matRippleColor", "click"], ["color", "primary"], ["class", "img", "onerror", "this.onerror=null; this.src='http://localhost:3000/images/default'", 3, "src", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["color", "primary", 1, "heart", 3, "click"], ["onerror", "this.onerror=null; this.src='http://localhost:3000/images/default'", 1, "img", 3, "src"]], template: function RecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RecipeComponent_mat_icon_8_Template, 2, 1, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RecipeComponent_mat_icon_9_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeComponent_Template_mat_icon_click_10_listener() { return ctx.addToList(ctx.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "add_shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RecipeComponent_img_19_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RecipeComponent_p_24_Template, 2, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RecipeComponent_ol_27_Template, 3, 2, "ol", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.favorite);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Author: ", ctx.author, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.link != ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ingArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.instr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".img[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width:20vw;\r\n    height:20vw;\r\n    background-image: \"C:/Users/Eric/Desktop/utdFoods/utdFoods/utdFoods/assets/default.jpg\";\r\n    position:relative;\r\n    display:block;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    border-radius: 2%;\r\n    box-shadow: 5px 5px 5px darkslategrey;\r\n    \r\n}\r\nol[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n}\r\n.recipeTitle[_ngcontent-%COMP%]{\r\n    font-size: 45pt;\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n    padding:30px;\r\n    margin-left:20%;\r\n    margin-right:20%;\r\n}\r\n.heart[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUZBQXVGO0lBQ3ZGLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUNBQXFDOztBQUV6QztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoicmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDoyMHZ3O1xyXG4gICAgaGVpZ2h0OjIwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBcIkM6L1VzZXJzL0VyaWMvRGVza3RvcC91dGRGb29kcy91dGRGb29kcy91dGRGb29kcy9hc3NldHMvZGVmYXVsdC5qcGdcIjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZGFya3NsYXRlZ3JleTtcclxuICAgIFxyXG59XHJcbm9se1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5yZWNpcGVUaXRsZXtcclxuICAgIGZvbnQtc2l6ZTogNDVwdDtcclxufVxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjAlO1xyXG59XHJcbi5oZWFydHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-recipe',
                templateUrl: './recipe.component.html',
                styleUrls: ['./recipe.component.css']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "N3TD":
/*!************************************************!*\
  !*** ./src/app/contents/contents.component.ts ***!
  \************************************************/
/*! exports provided: ContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsComponent", function() { return ContentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");







function ContentsComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Results Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContentsComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.recipes.length, " Recipes Found");
} }
function ContentsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentsComponent_div_3_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const recipe_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.links(recipe_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", recipe_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r3.description);
} }
class ContentsComponent {
    constructor(task, route, router) {
        this.task = task;
        this.route = route;
        this.router = router;
        this.recipes = [];
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = yield ((_a = this.task.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.then(token => token));
            }
            catch (e) {
                this.user = { name: "" };
            }
            if (this.route.queryParams != undefined) {
                this.route.queryParams.subscribe(params => {
                    this.task.getSearch(params.keyword).subscribe((response) => {
                        for (let x = 0; x < response.length; x++) {
                            const current = { title: response[x].title, id: response[x].id, description: response[x].description, link: "http://localhost:3000/images/" + response[x].id };
                            this.recipes.push(current);
                        }
                        console.log(this.recipes);
                    });
                });
            }
            else {
                this.task.getContents().subscribe((response) => {
                    for (let x = 0; x < response.length; x++) {
                        const current = { title: response[x].title, id: response[x].id, description: response[x].description, link: "http://localhost:3000/images/" + response[x].id };
                        this.recipes.push(current);
                    }
                });
            }
        });
    }
    links(id) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/recipe/" + id]);
        });
    }
}
ContentsComponent.ɵfac = function ContentsComponent_Factory(t) { return new (t || ContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentsComponent, selectors: [["app-contents"]], decls: 4, vars: 3, consts: [[1, "body"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "clickable", 3, "click"], ["rowspan", "2"], ["onerror", "this.onerror=null; this.src='http://localhost:3000/images/default'", 1, "img", 3, "src"], [1, "desc"]], template: function ContentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentsComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContentsComponent_h1_2_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContentsComponent_div_3_Template, 15, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recipes.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recipes.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"]], styles: [".filters[_ngcontent-%COMP%]{\r\n    display:block;\r\n    background-color:var(--color-accentDark);\r\n    width:100%;\r\n    height:70px;\r\n}\r\n.img[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    height: 80px;\r\n    width:80px;\r\n}\r\n.clickable[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    margin-bottom:0px;\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n    padding:30px;\r\n    margin-left:20%;\r\n    margin-right:20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNvbnRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyc3tcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWFjY2VudERhcmspO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo3MHB4O1xyXG59XHJcbi5pbWd7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOjgwcHg7XHJcbn1cclxuLmNsaWNrYWJsZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVzY3tcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5oMntcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG59XHJcbi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6MzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjIwJTtcclxuICAgIG1hcmdpbi1yaWdodDoyMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contents',
                templateUrl: './contents.component.html',
                styleUrls: ['./contents.component.css']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");



class AppComponent {
    constructor() {
        this.title = 'utdFoods';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-file-uploader */ "77rt");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _contents_contents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contents/contents.component */ "N3TD");
/* harmony import */ var _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-recipe/new-recipe.component */ "BpP0");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipe/recipe.component */ "IZJF");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var flash_messages_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flash-messages-angular */ "ajg5");
/* harmony import */ var flash_messages_angular__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./favorites/favorites.component */ "3s+D");
/* harmony import */ var _grocery_grocery_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./grocery/grocery.component */ "mNzm");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-page/user-page.component */ "1HgR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "s7LF");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__["AngularFileUploaderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            flash_messages_angular__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"].forRoot(),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _contents_contents_component__WEBPACK_IMPORTED_MODULE_9__["ContentsComponent"],
        _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_10__["NewRecipeComponent"],
        _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_11__["RecipeComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_20__["FavoritesComponent"],
        _grocery_grocery_component__WEBPACK_IMPORTED_MODULE_21__["GroceryComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"],
        _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_25__["UserPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__["AngularFileUploaderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], flash_messages_angular__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _contents_contents_component__WEBPACK_IMPORTED_MODULE_9__["ContentsComponent"],
                    _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_10__["NewRecipeComponent"],
                    _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_11__["RecipeComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_20__["FavoritesComponent"],
                    _grocery_grocery_component__WEBPACK_IMPORTED_MODULE_21__["GroceryComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"],
                    _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_25__["UserPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__["AngularFileUploaderModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    flash_messages_angular__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"].forRoot(),
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c92J":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



const requestOptions = {
    withCredentials: true
};
class DatabaseService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'https://utd-foods.herokuapp.com';
    }
    get(uri) {
        return this.http.get(`${this.ROOT_URL}/${uri}`, { withCredentials: true });
    }
    delete(uri) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`, requestOptions);
    }
    post(uri, payload) {
        console.log(uri);
        console.log(payload);
        return this.http.post(`${this.ROOT_URL}/${uri}`, payload, requestOptions);
    }
    patch(uri, payload) {
        return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
    }
}
DatabaseService.ɵfac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatabaseService, factory: DatabaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");








function NavComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_td_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.loginLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
} }
class NavComponent {
    constructor(task, router) {
        this.task = task;
        this.router = router;
        this.surprise = 0;
        this.loggedIn = task.isAuthed;
    }
    ngOnInit() {
    }
    sup() {
        this.task.getRandomRecipe(1).subscribe((response) => {
            console.log(response);
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(["recipe/" + response[0].id]);
            });
        });
    }
    returnHome() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/"]);
        });
    }
    recipeListLink() {
        this.Search("");
    }
    aboutLink() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/about"]);
        });
    }
    loginLink() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/login"]);
        });
    }
    groceryLink() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/grocery-list"]);
        });
    }
    favoritesLink() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/favorites"]);
        });
    }
    userLink() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/user-page"]);
        });
    }
    logout() {
        this.task.logOutReq().subscribe((res) => {
            console.log(res);
        });
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(["/login"]);
        });
    }
    Search(value) {
        console.log(value);
        if (value != undefined) {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(["/recipe-list"], { queryParams: { keyword: value } });
            });
        }
        else {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(["/recipe-list"]);
            });
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 28, vars: 2, consts: [[1, "bar"], [1, "title", 3, "click"], [1, "right"], [1, "search"], ["type", "search", "placeholder", "Search", 3, "keyup.enter"], ["searchBox", ""], [1, "contents"], ["mat-button", "", 3, "click"], ["class", "contents", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "matMenuTriggerFor"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_h1_click_1_listener() { return ctx.returnHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "UTD Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NavComponent_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.Search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_9_listener() { return ctx.recipeListLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_12_listener() { return ctx.sup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Surprise me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_15_listener() { return ctx.aboutLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavComponent_td_17_Template, 3, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavComponent_td_18_Template, 4, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_21_listener() { return ctx.userLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "User Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_23_listener() { return ctx.groceryLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Grocery Builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_25_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn.authorized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn.authorized);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".right[_ngcontent-%COMP%]{\r\n    float:right;\r\n    display: block;\r\n    margin:10px;\r\n}\r\n.contents[_ngcontent-%COMP%]{\r\n    padding-top:5px;\r\n    padding-bottom:5px;\r\n    padding-right: 30px;\r\n    color:white;\r\n    cursor:pointer;\r\n}\r\n.search[_ngcontent-%COMP%]{\r\n    padding-top:5px;\r\n    padding-bottom:5px;\r\n    padding-right: 30px;\r\n    color:white;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    float:left;\r\n    margin:10px;\r\n    color:white;\r\n    cursor:pointer;\r\n    font-size:250%;\r\n}\r\n.bar[_ngcontent-%COMP%]{\r\n    background-color: var(--color-primary);\r\n    position:relative;\r\n    width:100%;\r\n    height:7%;\r\n    display:table;\r\n\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n    padding:30px;\r\n    margin-left:20%;\r\n    margin-right:20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTs7QUFFakI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46MTBweDtcclxufVxyXG4uY29udGVudHN7XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6MjUwJTtcclxufVxyXG4uYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NyU7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG5cclxufVxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "mNzm":
/*!**********************************************!*\
  !*** ./src/app/grocery/grocery.component.ts ***!
  \**********************************************/
/*! exports provided: GroceryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryComponent", function() { return GroceryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class GroceryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GroceryComponent.ɵfac = function GroceryComponent_Factory(t) { return new (t || GroceryComponent)(); };
GroceryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroceryComponent, selectors: [["app-grocery"]], decls: 2, vars: 0, template: function GroceryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grocery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm9jZXJ5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroceryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grocery',
                templateUrl: './grocery.component.html',
                styleUrls: ['./grocery.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe/recipe.component */ "IZJF");
/* harmony import */ var _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-recipe/new-recipe.component */ "BpP0");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _contents_contents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contents/contents.component */ "N3TD");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorites/favorites.component */ "3s+D");
/* harmony import */ var _grocery_grocery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grocery/grocery.component */ "mNzm");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-page/user-page.component */ "1HgR");













const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'recipe/:id', component: _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_2__["RecipeComponent"] },
    { path: 'new-recipe', component: _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_3__["NewRecipeComponent"] },
    { path: 'recipe-list', component: _contents_contents_component__WEBPACK_IMPORTED_MODULE_5__["ContentsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"] },
    { path: 'grocery-list', component: _grocery_grocery_component__WEBPACK_IMPORTED_MODULE_8__["GroceryComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
    { path: 'user-page', component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_10__["UserPageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
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

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.service */ "c92J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var flash_messages_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flash-messages-angular */ "ajg5");
/* harmony import */ var flash_messages_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













class LoginComponent {
    constructor(tasks, db, http, flash, router) {
        this.tasks = tasks;
        this.db = db;
        this.http = http;
        this.flash = flash;
        this.router = router;
    }
    ngOnInit() {
    }
    login(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.tasks.loginReq(username, password).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.flash.show(res);
                console.log(res);
                yield this.tasks.isLoggedIn();
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(["/user-page"]);
                });
            }));
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](flash_messages_angular__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 0, consts: [[1, "grid"], ["src", "http://localhost:3000/images/default", 1, "circle"], [1, "username"], [1, "flash"], ["matInput", "", "type", "text", "name", "username", "placeholder", "Username"], ["username", ""], ["matInput", "", "type", "password", "name", "password", "placeholder", "Password"], ["password", ""], ["mat-flat-button", "", "color", "primary", 1, "submit", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "flash-messages", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); return ctx.login(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], flash_messages_angular__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: [".circle[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    width:80%;\r\n    height:80%;\r\n    object-fit: cover;\r\n    grid-area:pic;\r\n    grid-column-start:3;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n.dark[_ngcontent-%COMP%]{\r\n    background-color: darkslategrey;\r\n    width:50%;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    margin-top:5%;\r\n    border-radius: 2%;\r\n    height:50%;\r\n    position:relative;\r\n    padding-top:5%;\r\n    padding-bottom: 5%;\r\n}\r\n.flash[_ngcontent-%COMP%]{\r\n    grid-area:flash;\r\n    width:100%;\r\n    text-align: center;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    color:red;\r\n}\r\n.username[_ngcontent-%COMP%]{\r\n    grid-area:username;\r\n    position:relative;\r\n    height:100%;\r\n    width:70%;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n.password[_ngcontent-%COMP%]{\r\n    grid-area:password;\r\n    width:70%;    \r\n    height:100%;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n.submit[_ngcontent-%COMP%]{\r\n    grid-area:submit;\r\n    width:20%;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    margin-top:-3%;\r\n}\r\n.grid[_ngcontent-%COMP%]{\r\n    background-color:var(--color-primaryLight);\r\n    border-radius: 1%;\r\n    width:50%;\r\n    height:40%;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    display:grid;\r\n    grid-template-columns:auto;\r\n    align-items: center;\r\n    grid-template-rows:auto;\r\n    position:relative;\r\n    row-gap: -5px;\r\n    grid-template-areas: \r\n    \". . pic . .\"\r\n    \". . flash . .\"\r\n    \". . username . .\"\r\n    \". . password . .\"\r\n    \". . submit . .\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiOzs7OztvQkFLZ0I7QUFDcEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6ODAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBncmlkLWFyZWE6cGljO1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6MztcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG4uZGFya3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDo1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG4uZmxhc2h7XHJcbiAgICBncmlkLWFyZWE6Zmxhc2g7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi51c2VybmFtZXtcclxuICAgIGdyaWQtYXJlYTp1c2VybmFtZTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuLnBhc3N3b3Jke1xyXG4gICAgZ3JpZC1hcmVhOnBhc3N3b3JkO1xyXG4gICAgd2lkdGg6NzAlOyAgICBcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBncmlkLWFyZWE6c3VibWl0O1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDotMyU7XHJcbn1cclxuLmdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLXByaW1hcnlMaWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGhlaWdodDo0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6YXV0bztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgcm93LWdhcDogLTVweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgXCIuIC4gcGljIC4gLlwiXHJcbiAgICBcIi4gLiBmbGFzaCAuIC5cIlxyXG4gICAgXCIuIC4gdXNlcm5hbWUgLiAuXCJcclxuICAgIFwiLiAuIHBhc3N3b3JkIC4gLlwiXHJcbiAgICBcIi4gLiBzdWJtaXQgLiAuXCI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"] }, { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: flash_messages_angular__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




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