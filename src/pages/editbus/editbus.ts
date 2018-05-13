import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the EditbusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-editbus',
  templateUrl: 'editbus.html',
})
export class EditbusPage {
  BusPlaceBD: FirebaseListObservable<any>
  listBisns: any = [];
  dbObject: any;

  BusPlace = {
    Business_ID: '',
    Business_Name: '',
    OwnerName: '',
    Email: '',
    Address: '',
    date: '',
    business_category: '',
    TelephoneNumeber1: '',
    TelephoneNumeber2: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    console.log('this.navParams', this.navParams)
    this.BusPlace.Business_ID = this.navParams.get('Business_ID')
    this.BusPlace.Business_Name = this.navParams.get('Business_Name')
    this.BusPlace.OwnerName = this.navParams.get('OwnerName')
    this.BusPlace.Email = this.navParams.get('Email')
    this.BusPlace.Address = this.navParams.get('Address')
    this.BusPlace.date = this.navParams.get('date')
    this.BusPlace.business_category = this.navParams.get('business_category')
    this.BusPlace.TelephoneNumeber1 = this.navParams.get('TelephoneNumeber1')
    this.BusPlace.TelephoneNumeber2 = this.navParams.get('TelephoneNumeber2')
    this.dbObject = db;
  }

  updatePerson(Business_ID, Business_Name, OwnerName, Email, Address, date, business_category, TelephoneNumeber1, TelephoneNumeber2) {
    this.dbObject.object(`/people/${this.navParams.get('Key')}`).update({

      Business_Name:this.BusPlace.Business_Name,
      OwnerName:this.BusPlace.OwnerName,
      Email:this.BusPlace.Email,
      Address:this.BusPlace.Address,
      date:this.BusPlace.date,
      business_category:this.BusPlace.business_category,
      TelephoneNumeber1:this.BusPlace.TelephoneNumeber1,
      TelephoneNumeber2:this.BusPlace.TelephoneNumeber2


    }).then(uBusPlace => { 
      this.navCtrl.pop(); 
    }, error => { 
      console.log(error); 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditbusPage');
  }

}
