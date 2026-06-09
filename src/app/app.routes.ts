import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/auth/pages/landing-page/landing-page';
import { VerifyOtp } from './features/auth/pages/verify-otp/verify-otp';

export const routes: Routes = [
    {
        path : '',
        component : LandingPageComponent
    },
    {
        path : 'verify-otp',
        component : VerifyOtp
    }
];
