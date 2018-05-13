import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {EditbusPage} from '../editbus/editbus';
import _ from 'lodash';

/**
 * Generated class for the BakeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-bakeries',
  templateUrl: 'bakeries.html',
})
export class BakeriesPage {

  personsRef: FirebaseListObservable<any>;
  persons: any = [];
  filterBussines: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
  
    
    this.personsRef = db.list('/people');
    this.personsRef.subscribe(resp => {
      this.persons = resp;
     // console.log("resp", JSON.stringify(resp))
     // console.log('resp length', resp.length)
      this.filterBussines = _.filter(resp, { 'business_category': "Bakeries" });
      //console.log("new", JSON.stringify(filterBussines));
    });


  }

  editbus(filterBussine){
   // console.log(Business_ID,Business_Name,OwnerName,Email,Address,date,business_category,TelephoneNumeber1,TelephoneNumeber2);
    console.log('filterBussine', filterBussine)
   this.navCtrl.push(EditbusPage,{
    Business_ID : filterBussine.Business_ID,
    Business_Name : filterBussine.Business_Name,
    OwnerName : filterBussine.OwnerName,
    Email : filterBussine.Email,
    Address : filterBussine.Address,
    date : filterBussine.date,
    business_category : filterBussine.business_category,
    TelephoneNumeber1 : filterBussine.TelephoneNumeber1,
    TelephoneNumeber2 : filterBussine.TelephoneNumeber2,
    Key: filterBussine.$key,


   });
  }
  deletebus(filterBussine){
    this.personsRef.remove(filterBussine) 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BakeriesPage');
  }

}
