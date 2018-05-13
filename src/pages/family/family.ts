import { Component } from '@angular/core';
import {  NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import firebase from 'firebase';
import{AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database-deprecated';
/**
 * Generated class for the FamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {

  FamilyID:any;
  Hname:any;
  DOB:any;
  hoccup:any;
  wname:any;
  woccup:any;
  WDOB:any;
  chno:any;
  rem:any;
  userid:any;
  familyref:any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public toast:ToastController, public alert:AlertController, public db:AngularFireDatabase) {
 
    this.familyref=db.list('/family_details')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
  }
  addfamily(){
  
     /* try{
        this.userid = firebase.auth().currentUser.uid;
        console.log("user id :"+this.userid);
        this.familyref = firebase.database().ref('/family_details');
        var key = this.familyref.push({
          FamilyID:this.FamilyID,
          Hname:this.Hname,
         
        }).key;
         console.log("key is:"+key);
         this.Alertsuccessfull();
      }
      catch{
          console.log("error in try");
          this.AlertNotSuccessfull();

      }*/
      try{
        this.familyref.push({
          FamilyID:this.FamilyID,
          Hname:this.Hname,
          DOB:this.DOB,
          hoccup:this.hoccup,
          wname:this.wname,
          woccup:this.woccup,
          WDOB:this.WDOB,
          chno:this.chno,
          rem:this.rem
          
        })
        this.Alertsuccessfull();
      }
      catch{
        this.AlertNotSuccessfull();
      }
     
      
    

  }

  Alertsuccessfull() {
    let alertmsg = this.alert.create({
      title: 'Successful',
      message: 'You post the question successfully',
      buttons: ['Ok']
    });
    alertmsg.present(alertmsg);
  }

  AlertNotSuccessfull() {
    let alertmsg = this.alert.create({
      title: 'Error',
      message: 'Something wrong happen',
      buttons: ['Ok']
    });
    alertmsg.present(alertmsg);
  }
  presentTost(){
    let toast = this.toast.create({
      message: 'please fill all fields',
      duration: 5000
    });
    toast.present();


  }

}
