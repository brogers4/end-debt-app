import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SignUpPage } from '../sign-up/sign-up';

@NgModule({
  declarations: [
    LoginPage,
    SignUpPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
