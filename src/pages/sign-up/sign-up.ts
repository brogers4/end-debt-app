import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase
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
            let uuid = userData.uid;
            this.db.object('users/'+uuid).set({
              displayName: this.displayName,
              email: this.email,
              created: Date.now()
            }).then(
              () => {
                console.log("Successfully set user object.")
                this.navCtrl.goToRoot(null);
              },
              error => {
                console.log("Error setting user object:",error);
              }
            )

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
