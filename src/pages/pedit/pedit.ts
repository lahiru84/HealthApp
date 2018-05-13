import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
/**
 * Generated class for the PeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-pedit',
  templateUrl: 'pedit.html',
})
export class PeditPage {

  patients:FirebaseListObservable<any>
  list: any = [];

  P = {
    Patient  : '',
    Gender : '',
    Birthday : '',
    Address : '',
    Telephone : '',
    Disease : '',
    Level : '',
    Blood_Group : '',

  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
    this.patients= db.list(`/patient`);

    
    this.P.Patient = this.navParams.get('PName')
    this.P.Gender = this.navParams.get('sex')
    this.P.Birthday = this.navParams.get('myDate')
    this.P.Address = this.navParams.get('Add')
    this.P.Telephone = this.navParams.get('tp')
    this.P.Disease = this.navParams.get('sick')
    this.P.Level = this.navParams.get('ill')
    this.P.Blood_Group = this.navParams.get('blood')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeditPage');
  }

}
