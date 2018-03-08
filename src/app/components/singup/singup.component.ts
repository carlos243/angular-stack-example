import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormGroupDirective,
  FormBuilder
} from '@angular/forms';
import {ErrorStateMatcher} from "@angular/material";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public form: FormGroup;

  matcher = new MyErrorStateMatcher();



  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name : ['', [Validators.required, Validators.minLength(8)]],
      email : ['', [Validators.required, Validators.email]],
      pass : fb.group({
        password : [],
        rePassword : []
      })
    });
  }

  ngOnInit() {
  }

}
