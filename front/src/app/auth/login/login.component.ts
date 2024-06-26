import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../core/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: UntypedFormGroup;
  submitted: boolean = false;
  returnUrl!: string;
  showPassword: boolean = false;
  continueLogged: boolean = false;

  year: number = new Date().getFullYear();

  successmsg: string = '';
  errormsg: string = '';

  private authenticatedSub!: Subscription;
  private isAuthenticated: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _authService: AuthenticationService,
    private ngZone: NgZone
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.authenticatedSub = this._authService.getAuthentication().subscribe({
      next: (data) => {
        if (data) {
          this.isAuthenticated = data;

          console.log('rotei')
          this.ngZone.run(() => {
            this.router.navigate(['painel/dashboard']);
          });
        }
      },
      error: (err) => {},
    });
  }

  ngOnDestroy(): void {
    this.authenticatedSub.unsubscribe();
  }


  submitLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.errormsg = '';

      setTimeout(() => {
        this.submitted = false;
      }, 2000);
      return;
    }

    if (this.loginForm.valid) {
      this._authService
        .loginUser(
          this.f['userName'].value,
          this.f['password'].value,
          this.continueLogged
        )
        .then((data) => {
          //console.log(data);
          this.submitted = false;
        })
        .catch((err) => {
          //console.log(err);
          this.errormsg = err;
          this.submitted = false;

          setTimeout(() => {
            this.errormsg = '';
          }, 4000);
        });
    }
  }

  togglePass(): void {
    this.showPassword = !this.showPassword;
  }

  toggleLoged() {
    this.continueLogged = !this.continueLogged;
  }

  clearPassword() {
    this.loginForm.reset();
  }
}
