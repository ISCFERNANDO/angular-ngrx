import { EmployeeEffects } from './redux/effects/employee.effect';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './redux/state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([EmployeeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
