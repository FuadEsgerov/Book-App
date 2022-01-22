import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummarizeComponent } from './summarize.component';

const routes: Routes = [
  {
    path: '',
    component: SummarizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummarizeRoutingModule { }
