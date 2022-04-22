import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  form = this.fb.group({
    select: [null, [Validators.required]],
    protocols: this.fb.array([
      this.fb.group({
        id: 'basic',
        name: [null, [Validators.required]]
      }),
      this.fb.group({
        id: 'address',
        city: [null, [Validators.required]]
      })
    ]),
  });

  constructor(private fb: FormBuilder) {
  }
}
