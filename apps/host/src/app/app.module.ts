import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NzConfigService } from 'ng-zorro-antd/core/config';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ZorroConfig } from 'config';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    NzConfigService,
    ZorroConfig,
  ],
})
export class AppModule {}
