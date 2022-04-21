import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  @Input() formGroupName!: string;

  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const group = this.fb.group({
      name: [null, [Validators.required]]
    })
    this.rootFormGroup.form.addControl("basic", group)
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  ngOnDestroy(): void {
    this.rootFormGroup.form.removeControl(this.formGroupName)
  }

}
