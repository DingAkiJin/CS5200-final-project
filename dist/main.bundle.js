webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_category_category_component__ = __webpack_require__("../../../../../src/app/components/page/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/components/page/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_comment_comment_list_comment_list_component__ = __webpack_require__("../../../../../src/app/components/comment/comment-list/comment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_comment_comment_new_comment_new_component__ = __webpack_require__("../../../../../src/app/components/comment/comment-new/comment-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_post_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/components/post/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_post_post_edit_post_edit_component__ = __webpack_require__("../../../../../src/app/components/post/post-edit/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_post_post_new_post_new_component__ = __webpack_require__("../../../../../src/app/components/post/post-new/post-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_post_article_article_display_article_display_component__ = __webpack_require__("../../../../../src/app/components/post/article/article-display/article-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_post_article_article_edit_article_edit_component__ = __webpack_require__("../../../../../src/app/components/post/article/article-edit/article-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_post_article_article_new_article_new_component__ = __webpack_require__("../../../../../src/app/components/post/article/article-new/article-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_post_article_article_list_article_list_component__ = __webpack_require__("../../../../../src/app/components/post/article/article-list/article-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_post_opinion_opinion_display_opinion_display_component__ = __webpack_require__("../../../../../src/app/components/post/opinion/opinion-display/opinion-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_post_opinion_opinion_edit_opinion_edit_component__ = __webpack_require__("../../../../../src/app/components/post/opinion/opinion-edit/opinion-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_post_opinion_opinion_new_opinion_new_component__ = __webpack_require__("../../../../../src/app/components/post/opinion/opinion-new/opinion-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_post_opinion_opinion_list_opinion_list_component__ = __webpack_require__("../../../../../src/app/components/post/opinion/opinion-list/opinion-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_authentication_service_client__ = __webpack_require__("../../../../../src/app/service/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_admin_service_client__ = __webpack_require__("../../../../../src/app/service/admin.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_news_news_component__ = __webpack_require__("../../../../../src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_post_post_display_post_display_component__ = __webpack_require__("../../../../../src/app/components/post/post-display/post-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__service_comment_service_client__ = __webpack_require__("../../../../../src/app/service/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_page_shared_post_shared_post_component__ = __webpack_require__("../../../../../src/app/components/page/shared-post/shared-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_page_post_category_post_category_component__ = __webpack_require__("../../../../../src/app/components/page/post-category/post-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_news_service_client__ = __webpack_require__("../../../../../src/app/service/news.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_user_admin_user_admin_user_component__ = __webpack_require__("../../../../../src/app/components/user/admin-user/admin-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_follows_follow_list_follow_list_component__ = __webpack_require__("../../../../../src/app/components/follows/follow-list/follow-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_page_main_page_loggedin_main_page_loggedin_component__ = __webpack_require__("../../../../../src/app/components/page/main-page-loggedin/main-page-loggedin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_user_admin_user_admin_post_admin_post_component__ = __webpack_require__("../../../../../src/app/components/user/admin-user/admin-post/admin-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_user_admin_user_admin_edit_user_admin_edit_user_component__ = __webpack_require__("../../../../../src/app/components/user/admin-user/admin-edit-user/admin-edit-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HomeComponent } from './components/home/home/home.component';






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            // HomeComponent,
            __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_page_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_page_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_comment_comment_list_comment_list_component__["a" /* CommentListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_comment_comment_new_comment_new_component__["a" /* CommentNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_post_post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_post_post_edit_post_edit_component__["a" /* PostEditComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_post_post_new_post_new_component__["a" /* PostNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_post_article_article_display_article_display_component__["a" /* ArticleDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_post_article_article_edit_article_edit_component__["a" /* ArticleEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_post_article_article_new_article_new_component__["a" /* ArticleNewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_post_article_article_list_article_list_component__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_post_opinion_opinion_display_opinion_display_component__["a" /* OpinionDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_post_opinion_opinion_edit_opinion_edit_component__["a" /* OpinionEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_post_opinion_opinion_new_opinion_new_component__["a" /* OpinionNewComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_post_opinion_opinion_list_opinion_list_component__["a" /* OpinionListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_post_post_display_post_display_component__["a" /* PostDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_page_shared_post_shared_post_component__["a" /* SharedPostComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_user_admin_user_admin_user_component__["a" /* AdminUserComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_follows_follow_list_follow_list_component__["a" /* FollowListComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_page_post_category_post_category_component__["a" /* PostCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_page_main_page_loggedin_main_page_loggedin_component__["a" /* MainPageLoggedinComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_user_admin_user_admin_post_admin_post_component__["a" /* AdminPostComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_user_admin_user_admin_edit_user_admin_edit_user_component__["a" /* AdminEditUserComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_30_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_24__service_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__service_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_26__service_authentication_service_client__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_28__service_post_service_client__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_35__service_news_service_client__["a" /* NewsServiceClient */], __WEBPACK_IMPORTED_MODULE_27__service_admin_service_client__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_32__service_comment_service_client__["a" /* CommentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_comment_comment_new_comment_new_component__ = __webpack_require__("../../../../../src/app/components/comment/comment-new/comment-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__ = __webpack_require__("../../../../../src/app/service/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_post_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/components/post/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_post_post_edit_post_edit_component__ = __webpack_require__("../../../../../src/app/components/post/post-edit/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_post_post_new_post_new_component__ = __webpack_require__("../../../../../src/app/components/post/post-new/post-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_post_post_display_post_display_component__ = __webpack_require__("../../../../../src/app/components/post/post-display/post-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_shared_post_shared_post_component__ = __webpack_require__("../../../../../src/app/components/page/shared-post/shared-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/components/page/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_category_category_component__ = __webpack_require__("../../../../../src/app/components/page/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_admin_user_admin_user_component__ = __webpack_require__("../../../../../src/app/components/user/admin-user/admin-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_admin_user_admin_post_admin_post_component__ = __webpack_require__("../../../../../src/app/components/user/admin-user/admin-post/admin-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_admin_service_client__ = __webpack_require__("../../../../../src/app/service/admin.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_comment_comment_list_comment_list_component__ = __webpack_require__("../../../../../src/app/components/comment/comment-list/comment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_follows_follow_list_follow_list_component__ = __webpack_require__("../../../../../src/app/components/follows/follow-list/follow-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_post_category_post_category_component__ = __webpack_require__("../../../../../src/app/components/page/post-category/post-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_page_main_page_loggedin_main_page_loggedin_component__ = __webpack_require__("../../../../../src/app/components/page/main-page-loggedin/main-page-loggedin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_admin_user_admin_edit_user_admin_edit_user_component__ = __webpack_require__("../../../../../src/app/components/user/admin-user/admin-edit-user/admin-edit-user.component.ts");





















var APP_ROUTES = [
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_11__components_page_main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'main/loggedin', component: __WEBPACK_IMPORTED_MODULE_19__components_page_main_page_loggedin_main_page_loggedin_component__["a" /* MainPageLoggedinComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'admin/user', component: __WEBPACK_IMPORTED_MODULE_13__components_user_admin_user_admin_user_component__["a" /* AdminUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_admin_service_client__["a" /* AdminService */]] },
    { path: 'admin/post', component: __WEBPACK_IMPORTED_MODULE_14__components_user_admin_user_admin_post_admin_post_component__["a" /* AdminPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_admin_service_client__["a" /* AdminService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/post', component: __WEBPACK_IMPORTED_MODULE_6__components_post_post_list_post_list_component__["a" /* PostListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/post/new', component: __WEBPACK_IMPORTED_MODULE_8__components_post_post_new_post_new_component__["a" /* PostNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/post/edit/:pid', component: __WEBPACK_IMPORTED_MODULE_7__components_post_post_edit_post_edit_component__["a" /* PostEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/post/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_post_post_display_post_display_component__["a" /* PostDisplayComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'category/:categoryName/post/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_shared_post_shared_post_component__["a" /* SharedPostComponent */] },
    { path: 'category/:categoryName/post/:pid/comment', component: __WEBPACK_IMPORTED_MODULE_16__components_comment_comment_list_comment_list_component__["a" /* CommentListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'category/:categoryName/post/:pid/comment/new', component: __WEBPACK_IMPORTED_MODULE_4__components_comment_comment_new_comment_new_component__["a" /* CommentNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_12__components_page_category_category_component__["a" /* CategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'post/category/:categoryName', component: __WEBPACK_IMPORTED_MODULE_18__components_page_post_category_post_category_component__["a" /* PostCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'category/:categoryName/post', component: __WEBPACK_IMPORTED_MODULE_12__components_page_category_category_component__["a" /* CategoryComponent */] },
    { path: 'share/post/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_shared_post_shared_post_component__["a" /* SharedPostComponent */] },
    { path: 'user/follows', component: __WEBPACK_IMPORTED_MODULE_17__components_follows_follow_list_follow_list_component__["a" /* FollowListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'share/post/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_shared_post_shared_post_component__["a" /* SharedPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'admin/:uid', component: __WEBPACK_IMPORTED_MODULE_20__components_user_admin_user_admin_edit_user_admin_edit_user_component__["a" /* AdminEditUserComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/comment/comment-list/comment-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comment/comment-list/comment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- List Items -->\n<div *ngFor=\"let comment of comments\">\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" style=\"border: solid; padding-top: 0%;\">\n\n      <div class=\"row container-fluid\">\n        <div class=\"col-sm-4 pull-left\">\n          <h5><b>By: {{comment.userName}}</b></h5>\n        </div>\n        <div class=\"col-sm-8\" style=\"text-align-last: right\">\n          <h5>{{comment.dateCreated}}</h5>\n        </div>\n      </div>\n\n      <div class=\"row container-fluid\">\n        <p style=\"text-indent: 8%\">{{comment.text}}</p>\n      </div>\n\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/comment/comment-list/comment-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_comment_service_client__ = __webpack_require__("../../../../../src/app/service/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentListComponent = (function () {
    function CommentListComponent(commentService, sharedService, router, activatedRoute, userService) {
        this.commentService = commentService;
        this.sharedService = sharedService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.comments = [];
    }
    CommentListComponent.prototype.ngOnInit = function () {
        // this.user = this.sharedService.user;
        // this.userId = this.user.userId;
        // this.userName = this.user.username;
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.postId = params['pid'];
            _this.commentService.findCommentsByPostId(_this.postId).subscribe(function (comments) {
                _this.comments = comments;
                _this.numComments = comments.length;
                console.log(comments);
            });
        });
    };
    return CommentListComponent;
}());
CommentListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comment-list',
        template: __webpack_require__("../../../../../src/app/components/comment/comment-list/comment-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comment/comment-list/comment-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_comment_service_client__["a" /* CommentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service_client__["a" /* UserService */]) === "function" && _e || Object])
], CommentListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=comment-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comment/comment-new/comment-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comment/comment-new/comment-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top Nav -->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-12\">\n\n      <div class=\"navbar-text pull-left\" style=\"margin-left: 0px;\">\n        <a [routerLink]=\"['/category' ]\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b style=\"text-transform: capitalize\">New Comment</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\" >\n        <a>\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<!-- List Items -->\n<div class=\"container-fluid\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"comment-text\">Type a Comment</label>\n      <textarea id=\"comment-text\"\n                class=\"form-control\"\n                rows=\"5\"\n                placeholder=\"Comment\"\n                name=\"commentText\"\n                [(ngModel)]=\"commentText\"></textarea>\n    </div>\n  </form>\n\n  <button class=\"btn btn-block btn-primary\"\n          type=\"submit\"\n          (click)=\"postComment($event)\">Post Comment</button>\n\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comment/comment-new/comment-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_comment_service_client__ = __webpack_require__("../../../../../src/app/service/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentNewComponent = (function () {
    function CommentNewComponent(commentService, sharedService, router, activatedRoute) {
        this.commentService = commentService;
        this.sharedService = sharedService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.comments = [];
    }
    CommentNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.userName = this.user.username;
        this.activatedRoute.params.subscribe(function (params) {
            _this.postId = params['pid'];
            _this.category = params['categoryName'];
            console.log(_this.category);
            _this.commentService.findCommentsByPostId(_this.postId).subscribe(function (comments) {
                _this.comments = comments;
                console.log(_this.postId);
            });
        });
    };
    CommentNewComponent.prototype.postComment = function () {
        var _this = this;
        var comment = { 'text': this.commentText, '_user': this.user, 'userName': this.userName };
        console.log(this.userName);
        console.log(this.postId);
        this.commentService.createComment(this.postId, comment).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['category', _this.category, 'post', _this.postId]);
        });
    };
    return CommentNewComponent;
}());
CommentNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comment-new',
        template: __webpack_require__("../../../../../src/app/components/comment/comment-new/comment-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comment/comment-new/comment-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_comment_service_client__["a" /* CommentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CommentNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=comment-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/follows/follow-list/follow-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/follows/follow-list/follow-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top \">\n  <div class=\"container-fluid\">\n    <!--left icon-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/profile' ]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Follow List</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid hf-body\">\n  <ul class=\"list-group\">\n    <li  *ngFor = \"let follow of user.follows\"\n         class=\"list-group-item\">\n      <a>{{follow.username}}</a>\n      <a>\n        <span (click)=\"unfollowUser(follow.username)\" class=\"pull-right glyphicon glyphicon-remove\"></span>\n      </a>\n    </li>\n  </ul>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/follows/follow-list/follow-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FollowListComponent = (function () {
    function FollowListComponent(sharedService, userService) {
        this.sharedService = sharedService;
        this.userService = userService;
    }
    FollowListComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    FollowListComponent.prototype.unfollowUser = function (username) {
        var _this = this;
        this.userService.unfollowUser(this.userId, username)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    FollowListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        console.log(this.user.follows);
        this.userService.findUserById(this.userId).subscribe(function (user) {
            _this.user = user;
            console.log(user.follows);
        });
    };
    return FollowListComponent;
}());
FollowListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-follow-list',
        template: __webpack_require__("../../../../../src/app/components/follows/follow-list/follow-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/follows/follow-list/follow-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], FollowListComponent);

var _a, _b;
//# sourceMappingURL=follow-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  news works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/components/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewsComponent);

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-12\">\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b style=\"text-transform: capitalize\">Welcome {{userName}}</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\" >\n        <a [routerLink]=\"['/profile']\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid col-sm-12\" style=\"background:url(http://legalprom.cl/wp-content/uploads/2014/05/main-bg.jpg) no-repeat center fixed;\">\n  <form>\n    <div class=\"form-group col-sm-8\">\n\n    </div>\n  <form>\n    <div class=\"form-group col-sm-4\">\n      <input [(ngModel)]=\"title\"\n             type=\"text\"\n             class=\"form-control\"\n             name=\"search\"\n             id=\"search\"\n             placeholder=\"Search for News, e.g. BBC\">\n      <button (click) = \"searchNewsByCategory(title)\" class = \"btn btn-primary btn-block\">Search</button>\n      <button [routerLink]=\"['/post/category/general']\" class = \"btn btn-info btn-block\">View Our Users Posts</button>\n    </div>\n  </form>\n  </form>\n\n\n  <br>\n  <br>\n  <br>\n  <br>\n\n  <div style=\"background-color: transparent\">\n    <h3\n      style=\"text-align: left; font-family: 'Times New Roman'\">Articles From Outside Sources:</h3>\n\n\n\n    <ul class = \"list-group\">\n      <li style=\"background-color: transparent\" class = \"list-group-item\" *ngFor = \"let news of result.articles\">\n        <a  href = {{news.url}}>\n          {{news.title}}\n        </a>\n        <p>{{news.author}}</p>\n      </li>\n    </ul>\n\n  </div>\n\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a [routerLink]=\"['/profile']\">-->\n        <!--<span class=\"glyphicon glyphicon-user\"></span>-->\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__ = __webpack_require__("../../../../../src/app/service/news.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(newsService, sharedService) {
        this.newsService = newsService;
        this.sharedService = sharedService;
        this.posts = [];
    }
    CategoryComponent.prototype.searchNewsByCategory = function (title) {
        var _this = this;
        this.newsService.searchNewsByCategory(title)
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    CategoryComponent.prototype.alltopnews = function () {
        var _this = this;
        this.newsService.alltopnews()
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        console.log(this.user);
        this.userName = this.user.username;
        this.newsService.alltopnews()
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/components/page/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/category/category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__["a" /* NewsServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__["a" /* NewsServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object])
], CategoryComponent);

var _a, _b;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/main-page-loggedin/main-page-loggedin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/main-page-loggedin/main-page-loggedin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <a [routerLink]=\"['/post/category/general']\">\n    More For You\n  </a>\n  <br>\n\n\n  <label>Top Headlines For You</label>\n  <br>\n\n\n\n  <ul class = \"list-group\">\n    <li class = \"list-group-item\" *ngFor = \"let news of result.articles\">\n      <a  href = {{news.url}}>\n        {{news.title}}\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/main-page-loggedin/main-page-loggedin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageLoggedinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__ = __webpack_require__("../../../../../src/app/service/news.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageLoggedinComponent = (function () {
    function MainPageLoggedinComponent(newsService) {
        this.newsService = newsService;
    }
    MainPageLoggedinComponent.prototype.searchNews = function (title) {
        var _this = this;
        this.newsService.searchNewsByTitle(title)
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    MainPageLoggedinComponent.prototype.alltopnews = function () {
        var _this = this;
        this.newsService.alltopnews()
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    MainPageLoggedinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.alltopnews()
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    return MainPageLoggedinComponent;
}());
MainPageLoggedinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-page-loggedin',
        template: __webpack_require__("../../../../../src/app/components/page/main-page-loggedin/main-page-loggedin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/main-page-loggedin/main-page-loggedin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__["a" /* NewsServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__["a" /* NewsServiceClient */]) === "function" && _a || Object])
], MainPageLoggedinComponent);

var _a;
//# sourceMappingURL=main-page-loggedin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-12\">\n\n\n      <div class=\"navbar-text pull-left\" style=\"margin-left: 0px;\">\n        <a [routerLink]=\"['']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b>Welcome</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/register']\">\n          <b>Register </b>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid col-sm-12\" style=\"background:url(http://legalprom.cl/wp-content/uploads/2014/05/main-bg.jpg) no-repeat center fixed;\">\n  <form>\n    <div class=\"form-group col-sm-8\">\n\n    </div>\n\n    <div class=\"form-group col-sm-4\">\n      <input [(ngModel)]=\"title\"\n             type=\"text\"\n             class=\"form-control\"\n             name=\"search\"\n             id=\"search\"\n             placeholder=\"Search for News, e.g. BBC\">\n      <button (click) = \"searchNewsByCategory(title)\" class = \"btn btn-primary btn-block\">Search</button>\n    </div>\n  </form>\n  <br>\n\n\n\n\n  <br>\n  <br>\n  <br>\n\n  <div style=\"background-color: transparent\">\n    <h3\n      style=\"text-align: left; font-family: 'Times New Roman'\">Articles From Outside Sources:</h3>\n\n\n\n    <ul class = \"list-group\">\n      <li style=\"background-color: transparent\" class = \"list-group-item\" *ngFor = \"let news of result.articles\">\n        <a  href = {{news.url}}>\n          {{news.title}}\n        </a>\n        <p>{{news.author}}</p>\n      </li>\n    </ul>\n\n  </div>\n\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <!--<a [routerLink]=\"['/profile']\">-->\n      <!--<span class=\"glyphicon glyphicon-user\"></span>-->\n      <!--</a>-->\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__ = __webpack_require__("../../../../../src/app/service/news.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageComponent = (function () {
    function MainPageComponent(newsService) {
        this.newsService = newsService;
    }
    MainPageComponent.prototype.searchNews = function (title) {
        var _this = this;
        this.newsService.searchNewsByTitle(title)
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    MainPageComponent.prototype.searchNewsByCategory = function (title) {
        var _this = this;
        this.newsService.searchNewsByCategory(title)
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    MainPageComponent.prototype.alltopnews = function () {
        var _this = this;
        this.newsService.alltopnews()
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.alltopnews()
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-page',
        template: __webpack_require__("../../../../../src/app/components/page/main-page/main-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/main-page/main-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__["a" /* NewsServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_news_service_client__["a" /* NewsServiceClient */]) === "function" && _a || Object])
], MainPageComponent);

var _a;
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/post-category/post-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/post-category/post-category.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-12\">\n\n\n      <div class=\"navbar-text pull-left\" style=\"margin-left: 0px;\">\n        <a [routerLink]=\"['/category']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b style=\"text-transform: capitalize\">Welcome</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\" >\n        <a [routerLink]=\"['/profile']\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid col-sm-12\" style=\"background:url(http://legalprom.cl/wp-content/uploads/2014/05/main-bg.jpg) no-repeat center fixed;\">\n  <div>\n\n    <br>\n    <div class=\"form-group col-sm-6\">\n      <h1 style=\"text-align: center; font-family: 'Times New Roman'\">Articles From IStory</h1>\n    <ul class = \"list-group\">\n      <li style=\"background-color: transparent\" class = \"list-group-item\" *ngFor=\"let post of posts\">\n        <ul class=\"list-inline\">\n          <li class=\"list-inline-item\">\n            <a  (click)=\"GoTo(post._id)\">{{post.title}}</a>\n            <p>By: {{post.author}}</p>\n          </li>\n          <li class=\"list-inline-item pull-right\">\n            <a (click)= followUser(post._user) class=\"btn btn-primary btn-sm\" type=\"submit\">\n              <span class=\"glyphicon glyphicon glyphicon-heart\"></span>\n              Follow Writer\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n    <div class=\"form-group col-sm-6\">\n    </div>\n\n\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/login']\">\n        <span class=\"glyphicon glyphicon-log-in\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/post-category/post-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostCategoryComponent = (function () {
    function PostCategoryComponent(sharedService, postService, activatedRoute, userService, router) {
        this.sharedService = sharedService;
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.posts = [];
    }
    PostCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedinuser = this.sharedService.user;
        console.log('find' + this.loggedinuser);
        this.activatedRoute.params.subscribe(function (params) {
            _this.categoryName = params['categoryName'];
            // console.log(this.categoryName);
            _this.postService.findArticlesByCategory(_this.categoryName)
                .subscribe(function (posts) {
                console.log(posts);
                _this.posts = posts;
            });
        });
    };
    PostCategoryComponent.prototype.followUser = function (userId) {
        var _this = this;
        console.log('logged in user' + this.sharedService.user);
        this.userService.findUserById(userId)
            .subscribe(function (data) {
            // this.username = user.username;
            var follows = {
                userId: userId,
                username: data.username
            };
            console.log(follows);
            // this.userService.findUserByUsername(this.loggedname)
            //   .subscribe((response) => {
            //     const userFollows = response.follows;
            //     for ( const i in userFollows) {
            //       if (userFollows[i].username = this.username) {
            //         alert('Yor are already following this user!');
            //         return;
            //       }
            //     }
            //   });
            _this.userService.followUser(_this.loggedinuser._id, follows)
                .subscribe(function (status) {
                _this.user = status;
                console.log(_this.user);
            });
        });
    };
    PostCategoryComponent.prototype.GoTo = function (pid) {
        console.log(pid);
        // category/:categoryName/post/:pid
        this.router.navigate(['/share', 'post', pid]);
    };
    return PostCategoryComponent;
}());
PostCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-category',
        template: __webpack_require__("../../../../../src/app/components/page/post-category/post-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/post-category/post-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_post_service_client__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PostCategoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=post-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/shared-post/shared-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/shared-post/shared-post.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-12\">\n\n\n      <div class=\"navbar-text pull-left\" style=\"margin-left: 0px;\">\n        <a [routerLink]=\"['/category' ]\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b style=\"text-transform: capitalize\">{{category}}</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\" >\n        <a [routerLink]=\"['/profile']\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid form-login\">\n  <div class=\"row container-fluid\">\n    <div class=\"title-hf\">\n      <h1>{{post.title}} </h1>\n      <h6><b>Written by: {{postAuthor}}</b></h6>\n    </div>\n    <p [innerHTML]=\"post.text\">\n    </p>\n  </div>\n\n  <br>\n  <br>\n\n  <div>\n    <h4 style=\"font-family: sans-serif\">Comments:</h4>\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item\">\n        <div class=\"row container-fluid\">\n          <app-comment-list></app-comment-list>\n        </div>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a class=\"btn btn-primary btn-block\" (click)=\"postComment()\">Add a Comment</a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/login']\">\n        <span class=\"glyphicon glyphicon-log-in\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/shared-post/shared-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedPostComponent = (function () {
    function SharedPostComponent(postService, activatedRoute, router) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    SharedPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            // js map fcn stored the corresponding uid under name 'uid'
            _this.pid = params['pid'];
            _this.postService.findPostById(_this.pid)
                .subscribe(function (post) {
                console.log(post);
                _this.post = post;
                _this.category = post.category;
                _this.postAuthor = post.author;
            }, function (error) {
                console.error(error);
            });
        });
    };
    SharedPostComponent.prototype.postComment = function () {
        this.router.navigate(['category', this.category, 'post', this.pid, 'comment', 'new']);
    };
    return SharedPostComponent;
}());
SharedPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shared-post',
        template: __webpack_require__("../../../../../src/app/components/page/shared-post/shared-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/shared-post/shared-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SharedPostComponent);

var _a, _b, _c;
//# sourceMappingURL=shared-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-display/article-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-display/article-display.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  article-display works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-display/article-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleDisplayComponent = (function () {
    function ArticleDisplayComponent() {
    }
    ArticleDisplayComponent.prototype.ngOnInit = function () {
    };
    return ArticleDisplayComponent;
}());
ArticleDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article-display',
        template: __webpack_require__("../../../../../src/app/components/post/article/article-display/article-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/article/article-display/article-display.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticleDisplayComponent);

//# sourceMappingURL=article-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-edit/article-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-edit/article-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  article-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-edit/article-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleEditComponent = (function () {
    function ArticleEditComponent() {
    }
    ArticleEditComponent.prototype.ngOnInit = function () {
    };
    return ArticleEditComponent;
}());
ArticleEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article-edit',
        template: __webpack_require__("../../../../../src/app/components/post/article/article-edit/article-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/article/article-edit/article-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticleEditComponent);

//# sourceMappingURL=article-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-list/article-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-list/article-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  article-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-list/article-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleListComponent = (function () {
    function ArticleListComponent() {
    }
    ArticleListComponent.prototype.ngOnInit = function () {
    };
    return ArticleListComponent;
}());
ArticleListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article-list',
        template: __webpack_require__("../../../../../src/app/components/post/article/article-list/article-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/article/article-list/article-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticleListComponent);

//# sourceMappingURL=article-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-new/article-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-new/article-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', 'website', webId, 'page', pageId, 'widget']\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Post Edit</b>\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"UpdatePost($event)\">\n        <span class=\"glyphicon glyphicon-ok hf-glyphicon\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid hf-body\">\n  <div *ngIf=flag\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <form novalidate name=\"model.myform\">\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"postName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"postname\"\n             placeholder=\"Name\"\n             required>\n      <!--<span class=\"alert-class\"-->\n      <!--*ngIf=\"flag\">{{alert}}</span>-->\n    </div>\n    <quill-editor [(ngModel)]=\"text\" name=\"text\"></quill-editor>\n  </form>\n\n  <div class=\"hf-btn\">\n    <a class = \"btn btn-danger btn-block\"\n       (click)=\"Delete()\">\n      Delete\n    </a>\n    <a class = \"btn btn-primary btn-block\"\n       (click)=\"Cancel()\">\n      Cancel\n    </a>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/post/article/article-new/article-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleNewComponent = (function () {
    function ArticleNewComponent(postService, activatedRoute, router, sharedService) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.posts = [];
        this.flag = false;
    }
    ArticleNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.baseUrl = environment.baseUrl;
        this.error = 'Enter the name of the Post';
        this.alert = '* Enter the name of the Post';
        this.userId = this.sharedService.user._id;
        this.activatedRoute.params.subscribe(function (params) {
            _this.postId = params['pid'];
            _this.postService.findPostById(_this.postId)
                .subscribe(function (posts) {
                _this.posts = posts;
            });
            _this.postService.findPostById(_this.postId)
                .subscribe(function (post) {
                // console.log('found post by id', post);
                _this.post = post;
                _this.postName = post.name;
            });
        });
    };
    ArticleNewComponent.prototype.UpdatePost = function () {
        var _this = this;
        if (!this.postName) {
            this.flag = true;
            return;
        }
        this.post.text = this.text;
        this.post.name = this.postName;
        this.postService.updatePost(this.postId, this.post)
            .subscribe(function (data) {
            // this.posts = posts;
            // console.log('update image', this.post);
            _this.router.navigate(['user', 'post']);
        });
    };
    ArticleNewComponent.prototype.Delete = function () {
        var _this = this;
        this.postService.deletePost(this.postId)
            .subscribe(function (data) {
            // this.posts = posts;
            _this.router.navigate(['user', 'post']);
        });
    };
    ArticleNewComponent.prototype.Cancel = function () {
        this.router.navigate(['user', 'post']);
    };
    return ArticleNewComponent;
}());
ArticleNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article-new',
        template: __webpack_require__("../../../../../src/app/components/post/article/article-new/article-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/article/article-new/article-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], ArticleNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=article-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-display/opinion-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-display/opinion-display.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  opinion-display works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-display/opinion-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpinionDisplayComponent = (function () {
    function OpinionDisplayComponent() {
    }
    OpinionDisplayComponent.prototype.ngOnInit = function () {
    };
    return OpinionDisplayComponent;
}());
OpinionDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-opinion-display',
        template: __webpack_require__("../../../../../src/app/components/post/opinion/opinion-display/opinion-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/opinion/opinion-display/opinion-display.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OpinionDisplayComponent);

//# sourceMappingURL=opinion-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-edit/opinion-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-edit/opinion-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  opinion-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-edit/opinion-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpinionEditComponent = (function () {
    function OpinionEditComponent() {
    }
    OpinionEditComponent.prototype.ngOnInit = function () {
    };
    return OpinionEditComponent;
}());
OpinionEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-opinion-edit',
        template: __webpack_require__("../../../../../src/app/components/post/opinion/opinion-edit/opinion-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/opinion/opinion-edit/opinion-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OpinionEditComponent);

//# sourceMappingURL=opinion-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-list/opinion-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-list/opinion-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  opinion-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-list/opinion-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpinionListComponent = (function () {
    function OpinionListComponent() {
    }
    OpinionListComponent.prototype.ngOnInit = function () {
    };
    return OpinionListComponent;
}());
OpinionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-opinion-list',
        template: __webpack_require__("../../../../../src/app/components/post/opinion/opinion-list/opinion-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/opinion/opinion-list/opinion-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OpinionListComponent);

//# sourceMappingURL=opinion-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-new/opinion-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-new/opinion-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  opinion-new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/opinion/opinion-new/opinion-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpinionNewComponent = (function () {
    function OpinionNewComponent() {
    }
    OpinionNewComponent.prototype.ngOnInit = function () {
    };
    return OpinionNewComponent;
}());
OpinionNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-opinion-new',
        template: __webpack_require__("../../../../../src/app/components/post/opinion/opinion-new/opinion-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/opinion/opinion-new/opinion-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OpinionNewComponent);

//# sourceMappingURL=opinion-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post-display/post-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\n  background-color: #D8B445;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post-display/post-display.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top \">\n  <div class=\"container-fluid\">\n    <!--left icon-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user/post' ]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Posts</b>\n      </a>\n    </p>\n\n    <!--plus icon to add a new website-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', 'post', 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row container-fluid\">\n    <div class=\"title-hf\">\n      <h1> {{post.title}} </h1>\n    </div>\n    <div [innerHTML]=\"post.text\">\n      [innerHTML]=\"post.text\"\n    </div>\n  </div>\n\n  <br>\n  <br>\n\n  <div>\n    <h4 style=\"font-family: sans-serif\">Comments:</h4>\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item\">\n        <div class=\"row container-fluid\">\n          <app-comment-list></app-comment-list>\n        </div>\n      </li>\n\n    </ul>\n  </div>\n\n\n</div>\n\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post-display/post-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostDisplayComponent = (function () {
    function PostDisplayComponent(postService, activatedRoute, router) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PostDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            // js map fcn stored the corresponding uid under name 'uid'
            _this.pid = params['pid'];
            _this.postService.findPostById(_this.pid)
                .subscribe(function (post) {
                console.log(post);
                _this.post = post;
            }, function (error) {
                console.error(error);
            });
        });
    };
    return PostDisplayComponent;
}());
PostDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-display',
        template: __webpack_require__("../../../../../src/app/components/post/post-display/post-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post-display/post-display.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PostDisplayComponent);

var _a, _b, _c;
//# sourceMappingURL=post-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post-edit/post-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post-edit/post-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', 'post']\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Post Edit</b>\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"UpdatePost()\">\n        <span class=\"glyphicon glyphicon-ok hf-glyphicon\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid hf-body\">\n  <div *ngIf=flag\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <form novalidate name=\"model.myform\">\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"postName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"postname\"\n             placeholder=\"Name\"\n             required>\n      <!--<span class=\"alert-class\"-->\n      <!--*ngIf=\"flag\">{{alert}}</span>-->\n    </div>\n    <quill-editor [(ngModel)]=\"text\" name=\"text\"></quill-editor>\n  </form>\n  <br>\n  <div class=\"hf-btn\">\n    <a class = \"btn btn-danger btn-block\"\n       (click)=\"Delete()\">\n      Delete\n    </a>\n    <a class = \"btn btn-primary btn-block\"\n       (click)=\"Cancel()\">\n      Cancel\n    </a>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post-edit/post-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostEditComponent = (function () {
    function PostEditComponent(postService, activatedRoute, router, sharedService) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.flag = false;
    }
    PostEditComponent.prototype.MyPost = function (pid) {
        this.router.navigate(['/user', 'post', pid]);
    };
    PostEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.error = 'Enter the name of your post';
        this.alert = '* Enter the post name';
        this.userId = this.sharedService.user._id;
        this.activatedRoute.params.subscribe(function (params) {
            _this.postId = params['pid'];
            _this.postService.findPostById(_this.postId)
                .subscribe(function (post) {
                _this.post = post;
                _this.postName = post.title;
                _this.text = post.text;
            });
        });
    };
    PostEditComponent.prototype.UpdatePost = function () {
        var _this = this;
        if (!this.postName) {
            this.flag = true;
            return;
        }
        this.post.text = this.text;
        this.post.title = this.postName;
        this.postService.updatePost(this.postId, this.post)
            .subscribe(function (data) {
            // this.posts = posts;
            // console.log('update image', this.post);
            _this.router.navigate(['user', 'post', _this.postId]);
        });
    };
    PostEditComponent.prototype.Delete = function () {
        var _this = this;
        this.postService.deletePost(this.postId)
            .subscribe(function (data) {
            // this.posts = posts;
            _this.router.navigate(['user', 'post']);
        });
    };
    PostEditComponent.prototype.Cancel = function () {
        this.router.navigate(['user', 'post', this.postId]);
    };
    return PostEditComponent;
}());
PostEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-edit',
        template: __webpack_require__("../../../../../src/app/components/post/post-edit/post-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post-edit/post-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], PostEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post-list/post-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-12\">\n\n      <div class=\"navbar-text pull-left\" style=\"margin-left: 0px;\">\n        <a [routerLink]=\"['/profile' ]\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b style=\"text-transform: capitalize\">My Posts</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\" >\n        <a [routerLink]=\"['/user', 'post', 'new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\" style=\"background-color:beige\">\n  <br>\n  <div class=\"container-fluid hf-body answer-hf\">\n    <p class=\"answer-title-hf\">My Answers</p>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n          *ngFor=\"let answer of answers\">\n        <a (click)=\"MyPosts(answer._id, answer.category)\">{{answer.title}}</a>\n        <a>\n        <span [routerLink]=\"['/user', 'post', 'edit', answer._id]\"\n              class=\"pull-right glyphicon glyphicon-cog\">\n        </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <br>\n\n  <div class=\"container-fluid hf-body question-hf\">\n    <p class=\"answer-title-hf\">My Questions</p>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n          *ngFor=\"let question of questions\">\n        <a (click)=\"MyPosts(question._id, question.category)\">{{question.title}}</a>\n        <a>\n        <span [routerLink]=\"['/user', 'post', 'edit', question._id]\"\n              class=\"pull-right glyphicon glyphicon-cog\">\n        </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <br>\n\n  <div class=\"container-fluid hf-body article-hf\">\n    <p class=\"answer-title-hf\">My Articles</p>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n          *ngFor=\"let article of articles\">\n        <a (click)=\"MyPosts(article._id, article.category)\">{{article.title}}</a>\n        <a>\n        <span [routerLink]=\"['/user', 'post', 'edit', article._id]\"\n              class=\"pull-right glyphicon glyphicon-cog\">\n        </span>\n        </a>\n\n      </li>\n    </ul>\n  </div>\n  <br>\n</div>\n\n<!-- Footer -->\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostListComponent = (function () {
    function PostListComponent(postService, activatedRoute, router, sharedService) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.posts = [];
        this.answers = [];
        this.questions = [];
        this.articles = [];
    }
    PostListComponent.prototype.NewPost = function () {
        this.router.navigate(['/user', 'post', 'new']);
    };
    // deletePost(wid: string) {
    //  this.postService.deletePost(wid);
    // }
    // selectPost(postId: string) {
    //   this.postService.findPostById(this.userId, postId)
    //     .subscribe()
    // }
    PostListComponent.prototype.MyPosts = function (pid, categoryName) {
        // this.router.navigate(['/user', 'post', pid]);
        // console.log(categoryName);
        console.log(categoryName);
        this.router.navigate(['/category', categoryName, 'post', pid]);
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.userId = this.user._id;
        // console.log(this.userId);
        // subscribe to any changes in the route(url); any changes would invoke this fcn
        this.activatedRoute.params.subscribe(function (params) {
            _this.postService.findPostsByUser(_this.userId)
                .subscribe(function (posts) {
                _this.posts = posts;
            }, function (error) {
                console.error(error);
            });
            _this.postService.findAnswersByUser(_this.userId)
                .subscribe(function (answers) {
                _this.answers = answers;
            }, function (error) {
                console.error(error);
            });
            _this.postService.findQuestionsByUser(_this.userId)
                .subscribe(function (questions) {
                _this.questions = questions;
            }, function (error) {
                console.error(error);
            });
            _this.postService.findArticlesByUser(_this.userId)
                .subscribe(function (articles) {
                console.log(articles);
                _this.articles = articles;
            }, function (error) {
                console.error(error);
            });
        });
    };
    return PostListComponent;
}());
PostListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-list',
        template: __webpack_require__("../../../../../src/app/components/post/post-list/post-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post-list/post-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], PostListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post-new/post-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post-new/post-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-sm-12\">\n\n      <div class=\"navbar-text pull-left\" style=\"margin-left: 0px;\">\n        <a [routerLink]=\"['/user', 'post']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b style=\"text-transform: capitalize\">New Post</b>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right\" >\n        <a (click)=\"CreatePost()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid hf-body\">\n  <div *ngIf=flag\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <form novalidate name=\"model.myform\">\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"postName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"postname\"\n             placeholder=\"Name\"\n             required>\n      <!--<span class=\"alert-class\"-->\n      <!--*ngIf=\"flag\">{{alert}}</span>-->\n    </div>\n    <div>\n    <select [(ngModel)]=\"choice\" name=\"choice\">\n      <option *ngFor=\"let choice of choices\" value={{choice}}>{{choice}}</option>\n    </select>\n    </div>\n    <quill-editor [(ngModel)]=\"text\" name=\"text\"></quill-editor>\n  </form>\n  <br>\n  <div class=\"hf-btn\">\n    <a class = \"btn btn-danger btn-block\"\n       (click)=\"Delete()\">\n      Delete\n    </a>\n    <a class = \"btn btn-primary btn-block\"\n       (click)=\"Cancel()\">\n      Cancel\n    </a>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post-new/post-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostNewComponent = (function () {
    function PostNewComponent(postService, activatedRoute, router, sharedService) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.posts = [];
        this.flag = false;
        this.choices = [];
        this.category = 'General';
    }
    PostNewComponent.prototype.ngOnInit = function () {
        // this.baseUrl = environment.baseUrl;
        this.error = 'Please fill in all required fields';
        this.alert = '* Please fill in all required fields';
        this.user = this.sharedService.user;
        this.userId = this.user._id;
        this.choices = this.user.choices;
        console.log(this.choices);
    };
    PostNewComponent.prototype.CreatePost = function () {
        var _this = this;
        if (!this.postName || !this.choice) {
            this.flag = true;
            return;
        }
        console.log(this.text);
        this.post = {
            author: this.user.username,
            text: this.text,
            title: this.postName,
            type: this.choice,
        };
        this.postService.createPost(this.userId, this.post)
            .subscribe(function (data) {
            // this.posts = posts;
            // console.log('update image', this.post);
            _this.router.navigate(['user', 'post']);
        });
    };
    PostNewComponent.prototype.Delete = function () {
        var _this = this;
        this.postService.deletePost(this.postId)
            .subscribe(function (data) {
            // this.posts = posts;
            _this.router.navigate(['user', 'post']);
        });
    };
    PostNewComponent.prototype.Cancel = function () {
        this.router.navigate(['user', 'post']);
    };
    return PostNewComponent;
}());
PostNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-new',
        template: __webpack_require__("../../../../../src/app/components/post/post-new/post-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post-new/post-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], PostNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-edit-user/admin-edit-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-edit-user/admin-edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top Nav -->\n<nav class=\"navbar navbar-default navbar-fixed-top \">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit User</b>\n      </a>\n    </div>\n\n    <!--tick mark-->\n    <div class=\"navbar-text pull-right\">\n      <a  (click)=\"updateUser()\"\n          class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngIf=messageFlag\n       class=\"alert alert-info\">\n    {{message}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"username\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"email\"\n             name=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstname\"\n             name=\"firstname\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastname\"\n             name=\"lastname\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input [(ngModel)]=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             id=\"password\"\n             placeholder=\"Password\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"verifyPassword\">Verify Password</label>\n      <input [(ngModel)]=\"verify\"\n             name=\"verify\"\n             type=\"password\"\n             class=\"form-control\"\n             id=\"verifyPassword\"\n             placeholder=\"Verify Password\">\n    </div>\n  </form>\n\n\n\n\n</div>\n\n<br>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom \">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\" style=\"text-decoration-color: white\">\n\n      <a [routerLink]=\"['/admin/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-edit-user/admin-edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminEditUserComponent = (function () {
    function AdminEditUserComponent(activatedRoute, router, userService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
    }
    AdminEditUserComponent.prototype.updateUser = function () {
        var _this = this;
        var updatedUser = {
            _id: this.userId,
            username: this.username,
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
        };
        this.userService.updateUser(updatedUser)
            .subscribe(function (data) {
            _this.router.navigate(['/admin/user']);
        });
    };
    AdminEditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.userId = params['uid'];
        });
    };
    return AdminEditUserComponent;
}());
AdminEditUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-edit-user',
        template: __webpack_require__("../../../../../src/app/components/user/admin-user/admin-edit-user/admin-edit-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin-user/admin-edit-user/admin-edit-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], AdminEditUserComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-edit-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-post/admin-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-post/admin-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <a (click)=\"goTo()\"><h2>User List</h2></a>\n  <h1 style=\"text-align: center\">Post List</h1>\n  <div>\n    <ul>\n      <li *ngFor=\"let post of posts\"\n          class=\"list-group-item\">\n        <a>{{post.title}}</a>\n        <a>\n          <span (click)=\"deletePost(post._id)\"\n                class=\"pull-right glyphicon glyphicon-remove\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-post/admin-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__ = __webpack_require__("../../../../../src/app/service/post.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPostComponent = (function () {
    function AdminPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
        this.posts = [];
    }
    AdminPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService
            .findAllPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        }, function (error) {
            console.log(error);
        });
    };
    AdminPostComponent.prototype.goTo = function () {
        this.router.navigate(['admin', 'user']);
    };
    AdminPostComponent.prototype.deletePost = function (pid) {
        var _this = this;
        this.postService.deletePost(pid)
            .subscribe(function (status) {
            _this.router.navigate(['admin', 'post']);
        }, function (error) { return console.log(error); });
    };
    return AdminPostComponent;
}());
AdminPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-post',
        template: __webpack_require__("../../../../../src/app/components/user/admin-user/admin-post/admin-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin-user/admin-post/admin-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_post_service_client__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminPostComponent);

var _a, _b;
//# sourceMappingURL=admin-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <a (click)=\"goTo()\"><h2>Post List</h2></a>\n\n  <h1 style=\"text-align: center\">User List</h1>\n  <div>\n    <ul>\n      <li *ngFor=\"let user of users\"\n          class=\"list-group-item\">\n        <a>{{user.username}}</a>\n        <a>\n          <span (click)=\"deleteUser(user._id)\"\n                class=\"pull-right glyphicon glyphicon-remove\"></span>\n        </a>\n        <a [routerLink]=\"['/admin', user._id]\">\n          <span class=\"pull-right glyphicon glyphicon-cog\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin-user/admin-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminUserComponent = (function () {
    function AdminUserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.users = [];
    }
    AdminUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .findAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            console.log(error);
        });
    };
    AdminUserComponent.prototype.goTo = function () {
        this.router.navigate(['admin', 'post']);
    };
    AdminUserComponent.prototype.deleteUser = function (uid) {
        var _this = this;
        this.userService.deleteUser(uid)
            .subscribe(function (status) {
            _this.router.navigate(['admin', 'user']);
        }, function (error) { return console.log(error); });
    };
    return AdminUserComponent;
}());
AdminUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user',
        template: __webpack_require__("../../../../../src/app/components/user/admin-user/admin-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin-user/admin-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminUserComponent);

var _a, _b;
//# sourceMappingURL=admin-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class = \"form-login\">\n  <span *ngIf=\"errorFlag\"\n        class=\"help-block\">\n    {{errorMsg}}\n  </span>\n  <h2>Welcome To IStory!</h2>\n\n  <form>\n    <div class=\"form-group\">\n\n      <input [(ngModel)]=\"username\"\n             class=\"form-control\"\n             type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             placeholder=\"username\"\n             #un=\"ngModel\"/>\n      <input [(ngModel)]=\"password\"\n             class=\"form-control\"\n             type=\"password\"\n             id=\"password\"\n             name=\"password\"\n             placeholder=\"password\"\n             #pw=\"ngModel\"/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-info btn-block\" (click)=\"login(username, password)\">Login</a>\n\n  <a class=\"btn btn-primary btn-block\" [routerLink]=\"['/main']\">As Guest</a>\n\n  <a class=\"btn btn-warning btn-block\" (click)=\"register()\">Register</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
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
    //binding 1. one way -> a. () = html to component b. [] => component to HTML 2. two way [()]
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService.login(username, password)
            .subscribe(function (user) {
            console.log('log in' + user);
            _this.errorFlag = false;
            _this.sharedService.user = user;
            console.log(user);
            _this.router.navigate(['category']);
        }, function (error) {
            console.log(_this.errorMsg);
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top Nav -->\r\n<nav class=\"navbar navbar-default navbar-fixed-top \">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Profile</b>\r\n      </a>\r\n    </div>\r\n\r\n    <!--tick mark-->\r\n    <div class=\"navbar-text pull-right\">\r\n      <a  (click)=\"updateUser()\"\r\n          class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container\">\r\n  <div *ngIf=messageFlag\r\n       class=\"alert alert-info\">\r\n    {{message}}\r\n  </div>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input [(ngModel)]=\"username\"\r\n             name=\"username\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"username\"/>\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email address</label>\r\n      <input [(ngModel)]=\"email\"\r\n             name=\"email\"\r\n             type=\"email\"\r\n             class=\"form-control\"\r\n             id=\"email\"/>\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"first-name\">First Name</label>\r\n      <input [(ngModel)]=\"firstname\"\r\n             name=\"firstname\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"first-name\"/>\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"last-name\">Last Name</label>\r\n      <input [(ngModel)]=\"lastname\"\r\n             name=\"lastname\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"last-name\"/>\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input [(ngModel)]=\"password\"\r\n             name=\"password\"\r\n             type=\"password\"\r\n             class=\"form-control\"\r\n             id=\"password\"\r\n             placeholder=\"Password\">\r\n    </div>\r\n  </form>\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"verifyPassword\">Verify Password</label>\r\n      <input [(ngModel)]=\"verify\"\r\n             name=\"verify\"\r\n             type=\"password\"\r\n             class=\"form-control\"\r\n             id=\"verifyPassword\"\r\n             placeholder=\"Verify Password\">\r\n    </div>\r\n  </form>\r\n\r\n\r\n\r\n  <div class=\" button-group\">\r\n    <ul class=\"list-inline\" style=\"text-align: center\">\r\n      <li *ngIf=postFlag class=\"list-inline-item\">\r\n          <button class=\"btn btn-info btn-block\" routerLink=\"/user/post\">My Posts</button>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <button class=\"btn btn-info btn-block\" routerLink=\"/user/follows\">My Follows</button>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <a class=\"btn btn-primary btn-block\" (click)=\"changeUserStatus()\">{{sub}}</a>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <button class=\"btn btn-warning btn-block \" (click)=\"professional()\">{{pro}}</button>\r\n      </li>\r\n      <li>\r\n        <button *ngIf=writerFlag class=\"btn btn-warning btn-block \" (click)=\"writer()\">{{wri\r\n          }}</button>\r\n      </li>\r\n\r\n    </ul>\r\n    <button class=\"btn btn-danger btn-block \" (click)=\"logOut()\">Logout</button>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-text pull-right\" style=\"text-decoration-color: white\">\r\n\r\n      <a [routerLink]=\"['/category']\">\r\n        <span class=\"glyphicon glyphicon-home\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        // if (this.user.roles.indexOf('Admin') > -1) {
        //   this.hidden = true;
        // }
        this.username = this.user['username'];
        this.message = "Successfully Subscribed";
        this.firstname = this.user['firstName'];
        this.lastname = this.user['lastName'];
        this.email = this.user['email'];
        this.userId = this.user['_id'];
        console.log(this.user);
        this.sub = this.subButton();
        this.pro = this.proButton();
        this.wri = this.writerButton();
        if (this.isPro || this.isSub || this.isWriter) {
            this.postFlag = true;
        }
        if (!(this.isWriter && this.isPro)) {
            this.writerFlag = true;
        }
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        var updatedUser = {
            _id: this.user['_id'],
            username: this.username,
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
        };
        this.userService.updateUser(updatedUser)
            .subscribe(function (data) {
            _this.router.navigate(['category']);
            // this.userService.findUserById(updatedUser._id)
            //   .subscribe(
            //     (data: any) => {
            //       localStorage.setItem('user', JSON.stringify(data));
            //       this.ngOnInit();
            //     }
            //   )
        }, function (error) { return _this.errorFlag = true; });
    };
    ProfileComponent.prototype.subButton = function () {
        var index = this.user.roles.indexOf('Subscriber');
        if (index > -1) {
            this.isSub = true;
            return 'Unsubscribe';
        }
        else {
            return 'Subscribe';
        }
    };
    ProfileComponent.prototype.proButton = function () {
        var index = this.user.roles.indexOf('Professional');
        if (index > -1) {
            this.isPro = true;
            return 'Post';
        }
        else {
            return 'Be Professional';
        }
    };
    ProfileComponent.prototype.writerButton = function () {
        var index = this.user.roles.indexOf('Writer');
        if (index > -1) {
            this.isWriter = true;
            return 'Post';
        }
        else {
            return 'Be Writer';
        }
    };
    ProfileComponent.prototype.changeUserStatus = function () {
        var _this = this;
        this.userService.subscribeUser(this.user)
            .subscribe(function (data) {
            _this.ngOnInit();
        }, function (error) { return _this.errorFlag = true; });
    };
    ProfileComponent.prototype.professional = function () {
        var _this = this;
        if (this.isPro) {
            this.router.navigate(['user', 'post', 'new']);
            return;
        }
        this.userService.professional(this.user)
            .subscribe(function (data) {
            _this.router.navigate(['profile']);
        }, function (error) { return _this.errorFlag = true; });
    };
    ProfileComponent.prototype.writer = function () {
        var _this = this;
        if (this.isWriter) {
            this.router.navigate(['user', 'post', 'new']);
            return;
        }
        this.userService.writer(this.user)
            .subscribe(function (data) {
            _this.router.navigate(['profile']);
            ;
        }, function (error) { return _this.errorFlag = true; });
    };
    // changeUserStatus() {
    //   if (this.user.roles.indexOf('Subscriber') > -1) {
    //     this.userService.unsubscribe(this.user)
    //       .subscribe((data: any) => {
    //         this.router.navigate(['/profile']);
    //       })
    //   } else {
    //     this.userService.subscribe(this.user)
    //       .subscribe((data: any) => {
    //           this.router.navigate(['/profile']);
    //         }, (error: any) => this.errorFlag = true
    //       );
    //   }
    // }
    ProfileComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class = \"form-login\">\n  <h1>Register</h1>\n  <span class=\"help-block\" *ngIf=\"disabledFlag\">\n      {{error}}\n  </span>\n  <form>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             name=\"username\"\n             id=\"username\"\n             placeholder=\"Username\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             name=\"password\"\n             id=\"password\"\n             placeholder=\"Password\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"verify\"\n             type=\"password\"\n             class=\"form-control\"\n             id=\"verify\"\n             name=\"verify\"\n             placeholder=\"Verify Password\">\n    </div>\n  </form>\n\n  <a class=\"btn btn-info btn-block\"\n     (click)=\"register(username, password, verify)\">\n    Register</a>\n  <a class=\"btn btn-danger btn-block\"\n     routerLink=\"/\" >Cancel</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password, verify) {
        var _this = this;
        //console.log(username, " ", password);
        if (!(password === verify)) {
            this.disabledFlag = true;
            this.nvPassword = true;
            this.error = 'Passwords do not match!';
        }
        else {
            this.userService.register(username, password)
                .subscribe(function (data) {
                _this.sharedService.user = data;
                _this.router.navigate(['/login']);
            }, function (error) {
                console.log(error);
                _this.disabledFlag = true;
                _this.error = error._body;
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/admin.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = (function () {
    function AdminService(userService, http) {
        this.userService = userService;
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    AdminService.prototype.canActivate = function () {
        return this.userService.isAdmin();
    };
    return AdminService;
}());
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _b || Object])
], AdminService);

var _a, _b;
//# sourceMappingURL=admin.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/service/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/service/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/service/comment.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createComment': this.createComment,
            'findCommentsByPostId': this.findCommentsByPostId
        };
    }
    CommentService.prototype.createComment = function (postId, comment) {
        var url = this.baseUrl + '/api/post/' + postId + '/comment';
        console.log(comment.userName);
        return this.http.post(url, comment)
            .map(function (response) {
            return response.json();
        });
    };
    CommentService.prototype.findCommentsByPostId = function (postId) {
        var url = this.baseUrl + '/api/post/' + postId + '/comment';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return CommentService;
}());
CommentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/service/news.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsServiceClient = (function () {
    function NewsServiceClient(http) {
        this.http = http;
    }
    NewsServiceClient.prototype.searchNewsByCategory = function (title) {
        var url = 'https://newsapi.org/v2/everything?q=' + title + '&apiKey=9a540554d49b44e3ad4458f8bae3e747';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    NewsServiceClient.prototype.searchNewsByTitle = function (title) {
        var url = 'https://newsapi.org/v2/top-headlines?sources=' + title + '&apiKey=9a540554d49b44e3ad4458f8bae3e747';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    NewsServiceClient.prototype.alltopnews = function () {
        var url = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=9a540554d49b44e3ad4458f8bae3e747';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return NewsServiceClient;
}());
NewsServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], NewsServiceClient);

var _a;
//# sourceMappingURL=news.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/service/post.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl;
    }
    PostService.prototype.createPost = function (userId, post) {
        var url = this.baseUrl + '/api/user/' + userId + '/post';
        // console.log('client side create post: ', url);
        return this.http.post(url, post)
            .map(function (response) {
            return response.json();
        });
        // post._id = String(Math.random() * 1000 + 1);
        // post.pageId = pageId;
        // console.log(post._id);
        // this.posts.push(post);
        // return post;post
    };
    PostService.prototype.findPostsByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/post';
        console.log("client");
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
        // const w = [];
        // for (let x = 0; x < this.posts.length; x++) {
        //   if (this.posts[x].pageId === pageId) {
        //     w.push(this.posts[x]);
        //   }
        // }
        // return w;
    };
    PostService.prototype.findAnswersByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/answer';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findArticlesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/article';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findQuestionsByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/question';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findPostById = function (postId) {
        var url = this.baseUrl + '/api/post/' + postId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
        // for (let x = 0; x < this.posts.length; x++) {
        //   if (this.posts[x]._id === postId) {
        //     return this.posts[x];
        //   }
        // }
    };
    PostService.prototype.updatePost = function (postId, post) {
        var url = this.baseUrl + '/api/post/' + postId;
        console.log('updatePost from client side', post);
        return this.http.put(url, post)
            .map(function (response) {
            console.log('updateWidget from client side');
            return response.json();
        });
        // for (let x = 0; x < this.posts.length; x++) {
        //   if (this.posts[x]._id === postId) {
        //     this.posts[x] = post;
        //     break;
        //   }
        // }
    };
    PostService.prototype.deletePost = function (postId) {
        var url = this.baseUrl + '/api/post/' + postId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
        // for (let x = 0; x < this.posts.length; x++) {
        //   if (this.posts[x]._id === postId) {
        //     this.posts.splice(x, 1);
        //     break;
        //   }
        // }
    };
    PostService.prototype.findArticlesByCategory = function (category) {
        var url = this.baseUrl + '/api/post/category/' + category;
        console.log(url);
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.findAllPosts = function () {
        var url = this.baseUrl + '/api/post';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/service/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedService = (function () {
    function SharedService(http) {
        this.http = http;
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SharedService);

var _a;
//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/service/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/service/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// server expects certain requests, client generates requests for it.






var UserService = (function () {
    function UserService(sharedService, http, router) {
        this.sharedService = sharedService;
        this.http = http;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' }
        ];
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.followUser = function (userId, follows) {
        var url = this.baseUrl + '/api/project/user/follows/' + userId;
        return this.http.put(url, follows)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.unfollowUser = function (userId, username) {
        var url = this.baseUrl + '/api/project/user/' + userId + '/unfollows/' + username;
        return this.http.put(url, {})
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn/';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (response) {
            var user = response.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.login = function (username, password) {
        //console.log(username, password);
        // const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        // return this.http.get(url)
        //   .map((response: Response) => {
        //     return response.json();
        //   })
        var url = this.baseUrl + '/api/login';
        console.log(url);
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        return this.http.post(url, credentials)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        // console.log(username);
        var url = this.baseUrl + '/api/user?username=' + username;
        console.log(url);
        return this.http.get(url)
            .map(function (response) {
            // console.log(response.json());
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        // console.log(url);
        return this.http.get(url)
            .map(function (response) {
            // console.log(response.json());
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.baseUrl + '/api/updateUser/' + user._id;
        this.options.withCredentials = true;
        return this.http.put(url, user, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.subscribeUser = function (user) {
        var url = this.baseUrl + '/api/updateUser/' + user._id;
        console.log(url);
        var index = user.roles.indexOf('Subscriber', 0);
        // if a subscriber, unsubscribe the user, otherwise subscribe the user
        if (index > -1) {
            var c_index = user.choices.indexOf('Question', 0);
            user.choices.splice(c_index, 1);
            user.roles.splice(index, 1);
        }
        else {
            user.choices.push("Question");
            user.roles.push('Subscriber');
        }
        // user.role = user.role == "Subscriber" ? "User" : "Subscriber";
        this.options.withCredentials = true;
        return this.http.put(url, user, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.subscribe = function (user) {
        //var userId = user._id;
        var url = this.baseUrl + '/api/subscribe';
        this.options.withCredentials = true;
        return this.http.put(url, user, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.unsubscribe = function (user) {
        //var userId = user._id;
        var url = this.baseUrl + '/api/unsubscribe';
        this.options.withCredentials = true;
        return this.http.put(url, user, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.professional = function (user) {
        var url = this.baseUrl + '/api/updateUser/' + user._id;
        var index = user.roles.indexOf('Professional', 0);
        // if a subscriber, unsubscribe the user, otherwise subscribe the user
        if (index > -1) {
            var c_index = user.choices.indexOf('Answer', 0);
            user.choices.splice(c_index, 1);
            user.roles.splice(index, 1);
        }
        else {
            user.choices.push("Answer");
            user.roles.push('Professional');
        }
        // user.role = user.role == "Subscriber" ? "User" : "Subscriber";
        this.options.withCredentials = true;
        return this.http.put(url, user, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.writer = function (user) {
        var url = this.baseUrl + '/api/updateUser/' + user._id;
        var index = user.roles.indexOf('Writer', 0);
        // if a subscriber, unsubscribe the user, otherwise subscribe the user
        if (index > -1) {
            var c_index = user.choices.indexOf('Article', 0);
            user.choices.splice(c_index, 1);
            user.roles.splice(index, 1);
        }
        else {
            user.choices.push("Article");
            user.roles.push('Writer');
        }
        // user.role = user.role == "Subscriber" ? "User" : "Subscriber";
        this.options.withCredentials = true;
        return this.http.put(url, user, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        var url = this.baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (response) {
            return response;
        });
    };
    UserService.prototype.findAllUsers = function () {
        var url = this.baseUrl + '/api/admin/user';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/admin/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.isAdmin = function () {
        var _this = this;
        var url = this.baseUrl + '/api/admin/isAdmin';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.deleteFollow = function (followId, userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/follow/' + followId;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map