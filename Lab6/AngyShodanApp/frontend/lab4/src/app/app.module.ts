import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjaxComponent } from './ajax/ajax.component';
import { MyIPbuttonComponent } from './my-ipbutton/my-ipbutton.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { IpFormComponent } from './ip-form/ip-form.component';
import { LinkFormComponent } from './link-form/link-form.component';
import { SslButtonComponent } from './ssl-button/ssl-button.component';
import { RegDashboardComponent } from './reg-dashboard/reg-dashboard.component';
import { SslDashboardComponent } from './ssl-dashboard/ssl-dashboard.component';
import { DbFormComponent } from './db-form/db-form.component';
import { DbContentComponent } from './db-content/db-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AjaxComponent,
    MyIPbuttonComponent,
    TopmenuComponent,
    IpFormComponent,
    LinkFormComponent,
    SslButtonComponent,
    RegDashboardComponent,
    SslDashboardComponent,
    DbFormComponent,
    DbContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
