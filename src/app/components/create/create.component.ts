import {Component, OnInit, OnChanges, DoCheck} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {LoggerService} from "../../service/utils/logger.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, DoCheck{

  public form: FormGroup;

  ngDoCheck(): void {
    this.form.get('name').hasError('required');
  }


  constructor(_fb: FormBuilder, _log : LoggerService) {
    this.form = _fb.group({
      name : ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }


  public create(){
    _log.debug("asasasas");
  }

}
