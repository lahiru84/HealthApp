import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {PeditPage} from '../pedit/pedit';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  patients:FirebaseListObservable<any>
  list: any = [];

 
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFireDatabase) {
    
    this.patients= db.list(`/patient`);
    this.patients.subscribe(resp => {
      this.list = resp;
    });

  }

  editp(PName,sex,myDate,Add,tp,sick,ill,blood){
    // console.log(Business_ID,Business_Name,OwnerName,Email,Address,date,business_category,TelephoneNumeber1,TelephoneNumeber2);
 
    this.navCtrl.push(PeditPage,{
      Patient  : PName,
      Gender : sex,
      Birthday : myDate,
      Address : Add,
      Telephone : tp,
      Disease : sick,
      Level : ill,
      Blood_Group : blood,
 
 
    });
  }

  deletep(pts){
    this.patients.remove(pts) 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

}
