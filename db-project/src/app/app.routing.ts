import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {CommentNewComponent} from './components/comment/comment-new/comment-new.component';
import {AuthenticationService} from './service/authentication.service.client';
import {PostListComponent} from './components/post/post-list/post-list.component';
import {PostEditComponent} from './components/post/post-edit/post-edit.component';
import {PostNewComponent} from './components/post/post-new/post-new.component';
import {PostDisplayComponent} from './components/post/post-display/post-display.component';
import {SharedPostComponent} from './components/page/shared-post/shared-post.component';
import {MainPageComponent} from './components/page/main-page/main-page.component';
import {CategoryComponent} from './components/page/category/category.component';
import {AdminUserComponent} from './components/user/admin-user/admin-user.component';
import {AdminPostComponent} from "./components/user/admin-user/admin-post/admin-post.component";
import {AdminService} from './service/admin.service.client';
import {CommentListComponent} from './components/comment/comment-list/comment-list.component';

import {FollowListComponent} from "./components/follows/follow-list/follow-list.component";
import {PostCategoryComponent} from "./components/page/post-category/post-category.component";
import {MainPageLoggedinComponent} from "./components/page/main-page-loggedin/main-page-loggedin.component";


const APP_ROUTES: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'main/loggedin', component: MainPageLoggedinComponent, canActivate: [AuthenticationService]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin/user', component: AdminUserComponent, canActivate: [AdminService]},
  {path: 'admin/post', component: AdminPostComponent, canActivate: [AdminService]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'user/post', component: PostListComponent, canActivate: [AuthenticationService]},
  {path: 'user/post/new', component: PostNewComponent, canActivate: [AuthenticationService]},
  {path: 'user/post/edit/:pid', component: PostEditComponent, canActivate: [AuthenticationService]},
  {path: 'user/post/:pid', component: PostDisplayComponent, canActivate: [AuthenticationService]},
  {path: 'category/:categoryName/post/:pid', component: SharedPostComponent},
  {path: 'category/:categoryName/post/:pid/comment', component: CommentListComponent, canActivate: [AuthenticationService]},
  {path: 'category/:categoryName/post/:pid/comment/new', component: CommentNewComponent, canActivate: [AuthenticationService]},
  {path: 'category', component: CategoryComponent, canActivate: [AuthenticationService]},
  {path: 'post/category/:categoryName', component: PostCategoryComponent},
  {path: 'category/:categoryName/post', component: CategoryComponent},
  {path: 'share/post/:pid', component: SharedPostComponent},
  {path: 'user/follows', component: FollowListComponent , canActivate: [AuthenticationService]},
  {path: 'share/post/:pid', component: SharedPostComponent, canActivate: [AuthenticationService]},

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
