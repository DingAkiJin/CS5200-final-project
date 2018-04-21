import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home/home.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { CategoryComponent } from './components/page/category/category.component';
import { MainPageComponent } from './components/page/main-page/main-page.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';
import { CommentNewComponent } from './components/comment/comment-new/comment-new.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';
import { PostNewComponent } from './components/post/post-new/post-new.component';
import { ArticleDisplayComponent } from './components/post/article/article-display/article-display.component';
import { ArticleEditComponent } from './components/post/article/article-edit/article-edit.component';
import { ArticleNewComponent } from './components/post/article/article-new/article-new.component';
import { ArticleListComponent } from './components/post/article/article-list/article-list.component';
import { OpinionDisplayComponent } from './components/post/opinion/opinion-display/opinion-display.component';
import { OpinionEditComponent } from './components/post/opinion/opinion-edit/opinion-edit.component';
import { OpinionNewComponent } from './components/post/opinion/opinion-new/opinion-new.component';
import { OpinionListComponent } from './components/post/opinion/opinion-list/opinion-list.component';
import {UserService} from './service/user.service.client';




import {SharedService} from './service/shared.service.client';
import {AuthenticationService} from './service/authentication.service.client';
import {AdminService} from './service/admin.service.client';
import {PostService} from './service/post.service.client';

import { NewsComponent } from './components/news/news.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import { PostDisplayComponent } from './components/post/post-display/post-display.component';
import {CommentService} from './service/comment.service.client';

import {SharedPostComponent} from './components/page/shared-post/shared-post.component';

import { PostCategoryComponent } from './components/page/post-category/post-category.component';


import {NewsServiceClient} from './service/news.service.client';

import { AdminUserComponent } from './components/user/admin-user/admin-user.component';

import { FollowListComponent } from './components/follows/follow-list/follow-list.component';
import { MainPageLoggedinComponent } from './components/page/main-page-loggedin/main-page-loggedin.component';
import { AdminPostComponent } from './components/user/admin-user/admin-post/admin-post.component';





@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    CategoryComponent,
    MainPageComponent,
    CommentListComponent,
    CommentNewComponent,
    PostListComponent,
    PostEditComponent,
    PostNewComponent,
    ArticleDisplayComponent,
    ArticleEditComponent,
    ArticleNewComponent,
    ArticleListComponent,
    OpinionDisplayComponent,
    OpinionEditComponent,
    OpinionNewComponent,
    OpinionListComponent,
    NewsComponent,
    PostDisplayComponent,
    SharedPostComponent,
    AdminUserComponent,

    FollowListComponent,

    PostCategoryComponent,

    MainPageLoggedinComponent,

    AdminPostComponent

  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],


  providers: [UserService, SharedService, AuthenticationService, PostService, NewsServiceClient, AdminService, CommentService],

  bootstrap: [AppComponent]
})
export class AppModule { }
