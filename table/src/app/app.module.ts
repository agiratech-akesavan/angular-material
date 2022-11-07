import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalTableComponent } from './normal-table/normal-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { InterInterceptor } from './inter.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NormalTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:InterInterceptor,multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
