import { Component } from '@angular/core';
import { BaseService } from 'my-base';

@Component({
  selector: 'nx-test-child-entry',
  template: `remote child value::{{ valueService.assetsUrlRoot }}`,
})
export class RemoteEntryComponent {
  constructor(public valueService: BaseService) {
    console.log('child valueService::', this.valueService);
  }
}
