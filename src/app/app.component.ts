import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';
  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    });
  }

  onSubmit(){
    console.log(this.reactiveForm)
  }

  get fullname() {
    return this.reactiveForm.get('fullname');
  }
  
  get number() {
    return this.reactiveForm.get('number')
  }
  
  get email() {
    return this.reactiveForm.get('email')
  }
  
  get password() {
    return this.reactiveForm.get('password')
  }
}
