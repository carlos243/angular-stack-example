import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SingupComponent} from './components/singup/singup.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material-module";
import { CreateComponent } from './components/create/create.component';
import {LoggerService} from "./service/utils/logger.service";


@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
