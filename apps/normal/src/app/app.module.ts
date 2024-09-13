import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { ZorroConfig } from 'config';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [NzConfigService, ZorroConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
