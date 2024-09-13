import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

import { remoteRoutes } from './entry.routes';
import { ShellComponent } from '@shell';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, ShellComponent, RouterModule.forChild(remoteRoutes)],
})
export class RemoteEntryModule {}
