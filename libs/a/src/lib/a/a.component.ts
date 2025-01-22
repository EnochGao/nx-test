import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
})
export class AComponent {}
