import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  displayFirstName:any;
  displayLastName:any;
  dispNIC:any;
  dispPHIID:any;
  userProfile:any;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public user:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    this.user.getUserProfile().on('value',userProfielSnapshot=>{

      this.userProfile=userProfielSnapshot.val();

      this.displayFirstName=this.userProfile.fname;
      this.displayLastName=this.userProfile.lname;
      this.dispNIC=this.userProfile.nic;
      this.dispPHIID=this.userProfile.phiID;
    })
  }

}
