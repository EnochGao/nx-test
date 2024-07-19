import { Component } from '@angular/core';
import { BaseService } from 'my-base';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nx-test-child-entry',
  template: `
    remote child value::{{ valueService.assetsUrlRoot }}
    <br />
    remote child value icon(ng-zorro)::
    {{ $any(iconService)._assetsUrlRoot }}
  `,
})
export class RemoteEntryComponent {
  constructor(
    public valueService: BaseService,
    public iconService: NzIconService
  ) {
    console.log('child valueService::', this.valueService);
    console.log('child iconService::', this.iconService);
  }
}
