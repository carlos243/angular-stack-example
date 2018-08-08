import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoggerService } from '../../service/utils/logger.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form: FormGroup;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Nombre es requerido' },
      { type: 'minlength', message: 'nombre no puede tener menos de 8 caracteres' }
    ]
  };

  constructor(_fb: FormBuilder, _log: LoggerService) {
    this.form = _fb.group({
      name: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }


  public create() {
    this._log.debug('asasasas');
  }

}
