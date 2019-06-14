import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SupportMainComponent } from './support-main/support-main.component';
import { AlertModule } from 'ngx-bootstrap';
import { Tech1Component } from './tech1/tech1.component';
import { Tech2Component } from './tech2/tech2.component';
import { Tech3Component } from './tech3/tech3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SupportMainComponent,
    Tech1Component,
    Tech2Component,
    Tech3Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
