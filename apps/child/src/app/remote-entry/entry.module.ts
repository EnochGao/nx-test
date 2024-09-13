import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

import { ShellComponent } from '@shell';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [ShellComponent, RouterModule.forChild(remoteRoutes)],
})
export class RemoteEntryModule {}
