import { Component, inject } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-form',
  standalone: true,
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.less',
})
export class FormComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: [null, [Validators.required]],
  });
}
