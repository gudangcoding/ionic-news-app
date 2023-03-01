import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsPageModule)
  },
  {
    path: 'post-single/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/post-single/post-single.module').then(m => m.PostSinglePageModule)
  },
  {
    path: 'new-post',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/new-post/new-post.module').then(m => m.NewPostPageModule)
  },
  {
    path: 'edit-post',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/edit-post/edit-post.module').then(m => m.EditPostPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
