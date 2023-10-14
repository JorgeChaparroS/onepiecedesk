import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { PiratesComponent } from './pirates/pirates.component';
import { ShipsComponent } from './ships/ships.component';

@NgModule({
  declarations: [AppComponent, PiratesComponent, ShipsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
