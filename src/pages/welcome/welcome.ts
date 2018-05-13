import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import {RegisterPage} from '../register/register';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  loginData={
    phiID:'',
    password:''
  }
   

  constructor(public fire:AngularFireAuth,
    public navCtrl: NavController,
     public navParams: NavParams,
     public toastCtrl:ToastController) {
  }

  

  signupPage(){
    this.navCtrl.push(RegisterPage);
  }

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }

  login(){
    if(/^[A-Z][A-Z][A-Z][0-9]{5}$/.test(this.loginData.phiID)){
      this.fire.auth.signInWithEmailAndPassword(this.loginData.phiID+'@domain.xta',this.loginData.password)
      .then(auth =>{
        this.navCtrl.setRoot(HomePage);

      })
      .catch(err=>{
        let toast=this.toastCtrl.create({
          message:err.message,
          duration:1000
        });
        toast.present()
      });
    }
    else{
      console.log('format of the phiID is wrong');
      let toast = this.toastCtrl.create({
        message:'plase insert the correct ID number and password',
        duration:5000
      });
      toast.present();
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
