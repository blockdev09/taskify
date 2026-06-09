import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [ReactiveFormsModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  emailForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  getOtp() {

    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }

    const email = this.emailForm.value.email;

    console.log('OTP Sent To:', email);

    this.router.navigate(
      ['/verify-otp'],
      {
        state: {
          email
        }
      }
    );
  }
}