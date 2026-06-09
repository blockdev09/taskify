import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  imports: [],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOtp {

  email = '';

  constructor(private router: Router) {
    this.email = history.state.email;
  }

  login() {

    console.log('Verify OTP');

    // Later:
    // call backend verify api

    this.router.navigate(['/dashboard']);
  }
}
