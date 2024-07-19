import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BaseService } from 'my-base';
import { NzIconService } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {
  constructor(
    private valueService: BaseService,
    private iconService: NzIconService
  ) {
    this.valueService.changeAssetsSource('https://nx.dev');
    this.iconService.changeAssetsSource('https://nx.dev');
  }
}
