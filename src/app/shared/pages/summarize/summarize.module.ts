import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummarizeRoutingModule } from './summarize-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SummarizeRoutingModule,
    ReactiveFormsModule,
    FormsModule,


  ]
})
export class SummarizeModule { }
