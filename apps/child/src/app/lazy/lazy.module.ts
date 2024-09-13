import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { FormComponent } from '@form';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule, FormComponent],
})
export class LazyModule {}
