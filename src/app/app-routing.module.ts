import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)},
  // { path: 'error-page', loadChildren: () => import('./shared/pages/error-page/error-page.module').then(m => m.ErrorPageModule), canActivate: [UserHasNotSessionGuard] },
  // { path: '**', loadChildren: () => import('./shared/pages/path-not-found/path-not-found.module').then(m => m.PathNotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
