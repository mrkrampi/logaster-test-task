import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LogoCardComponent} from './logo-card/logo-card.component';
import {LogosListComponent} from './logos-list/logos-list.component';
import {EditLogoComponent} from './edit-logo/edit-logo.component';
import {MaterialModule} from './core/modules/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {MatInputModule} from '@angular/material';
import {ColorpickerModule} from '@promact/ngx-material-colorpicker';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './core/services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoCardComponent,
    LogosListComponent,
    EditLogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    MatInputModule,
    ColorpickerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
