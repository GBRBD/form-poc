import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy {

  @Input() formGroupName!: string;

  form!: FormGroup

  constructor(private fb: FormBuilder, private rootFormGroup: FormGroupDirective, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const group = this.fb.group({
      city: [null, [Validators.required]]
    })
    this.rootFormGroup.form.addControl("address", group)
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  ngOnDestroy(): void {
    this.rootFormGroup.form.removeControl(this.formGroupName)
  }

}
