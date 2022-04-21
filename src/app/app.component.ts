import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  form = this.fb.group({
    select:[null,  [Validators.required]],
  });

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.form.valueChanges.subscribe(res => {
      this.cdr.detectChanges()
    })
  }

  onSubmit() {
    console.log(this.form.value)
  }
  getForm() {
    console.log(this.form)
    console.log(this.form.valid)
  }

  get selectControl() {
   return this.form.get('select')
  }

}
