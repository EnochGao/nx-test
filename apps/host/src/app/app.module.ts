import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BaseService } from 'my-base';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NzButtonModule } from '@winkong/ng-zorro-antd/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), NzButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private valueService: BaseService,
  ) {
    this.valueService.changeAssetsSource('https://nx.dev');
  }
}
