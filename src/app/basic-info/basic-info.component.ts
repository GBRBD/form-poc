import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
  @Input() form!: FormGroup;
}
