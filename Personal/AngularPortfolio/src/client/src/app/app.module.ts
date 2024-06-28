import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

