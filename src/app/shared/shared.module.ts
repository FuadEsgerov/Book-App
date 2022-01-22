import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import {MatListModule } from "@angular/material/list";
import {MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule } from "@angular/material/icon";
import {MatButtonModule } from "@angular/material/button";
import {MatSidenavModule } from "@angular/material/sidenav";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedRoutingModule

  ]
})
export class SharedModule { }
