import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    SslDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
