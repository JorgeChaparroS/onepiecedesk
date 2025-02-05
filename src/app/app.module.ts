import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { CrowsNestComponent } from './crows-nest/crows-nest.component';
import { KeelComponent } from './keel/keel.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, routingComponents, CrowsNestComponent, KeelComponent, PaginatorComponent],
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
