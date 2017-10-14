import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email = '';
  password = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  cancelLogin() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log('Cancel Login')
    this.navCtrl.goToRoot(null);
  }

  signIn() {
    console.log("Signing in as "+this.email);
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(
      authData => {
        console.log("Successfully logged in:",authData);
        this.navCtrl.goToRoot(null);
      }, error => {
        console.log("Error logging in:",error);
      }
    );
  }

  signUp() {
    console.log("Going to sign up...");
    this.navCtrl.push(SignUpPage);
  }

}
