import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "./form.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedProtocol: FormGroup | null = null

  form = this.formService.form

  constructor(private fb: FormBuilder, private formService: FormService) {
  }

  ngOnInit(): void {
    this.disableProtocols();
    this.selectControl?.valueChanges.subscribe(() => {
      this.disableProtocols()
      this.selectedProtocol = this.protocolsControl?.controls.find(x => x.value.id === this.selectControl?.value) as FormGroup;
      if (this.selectedProtocol) {
        this.selectedProtocol.enable()
      }
    })
  }

  private disableProtocols(): void {
    this.protocolsControl?.controls.forEach(x => {
      x.disable()
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

  get protocolsControl(): FormArray | null {
    return this.form.get('protocols') as FormArray;
  }
}
