import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  email = '';
  password = '';
  displayName = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password).then(
      userData => {
        console.log("Successfully created user:",userData);
        userData.updateProfile({
          displayName: this.displayName
        }).then(
          () => {
            console.log("Successfully set user profile.");
            this.navCtrl.goToRoot(null);
          },
          error => {
            console.log("Error creating user profile:",error);
          }
        );
      },
      error => {
        console.log("Unable to create user:",error);
      }
    );
  }

}
