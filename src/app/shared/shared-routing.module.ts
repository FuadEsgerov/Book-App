import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path: '', component: SharedComponent,
    children: [
      { path: '', redirectTo: 'summarize' },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'summarize', loadChildren: () => import('./pages/summarize/summarize.module').then(m => m.SummarizeModule) },
      { path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
