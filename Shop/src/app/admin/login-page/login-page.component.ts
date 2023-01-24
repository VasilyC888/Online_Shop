import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;

  constructor(
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return
    }

    this.submitted = true;
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
    }

    this.auth.login(user).subscribe( res => {
      console.log(res);
    })
  }
}
