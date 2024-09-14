import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ZorroConfig } from '@config';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Component({
  selector: 'lib-shell',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css',
  providers:[
    NzConfigService,
    ZorroConfig,
  ]
})
export class ShellComponent {}
