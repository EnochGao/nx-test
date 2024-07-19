import { Component } from '@angular/core';
import { BaseService } from 'my-base';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nx-test-lazy',
  template: `
    host value:: {{ valueService.assetsUrlRoot }}
    <br />
    host value icon(ng-zorro)::
    {{ $any(iconService)._assetsUrlRoot }}
  `,
})
export class LazyComponent {
  constructor(
    public valueService: BaseService,
    public iconService: NzIconService
  ) {
    console.log('lazy:', valueService);
    console.log('icon service:', iconService);
  }
}
