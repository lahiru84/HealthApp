import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import _ from 'lodash';
import {EditbusPage} from '../editbus/editbus';
/**
 * Generated class for the SnackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-snack',
  templateUrl: 'snack.html',
})
export class SnackPage {

  personsRef: FirebaseListObservable<any>;
  persons: any = [];
  filterBussines: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
  
    
    this.personsRef = db.list('/people');
    this.personsRef.subscribe(resp => {
      this.persons = resp;
     // console.log("resp", JSON.stringify(resp))
     // console.log('resp length', resp.length)
      this.filterBussines = _.filter(resp, { 'business_category': "SnackBars" });
      // this.filterBussines = _.filter(resp);
      //console.log("new", JSON.stringify(filterBussines));
    });


  }

  editbus(Business_ID,Business_Name,OwnerName,Email,Address,date,business_category,TelephoneNumeber1,TelephoneNumeber2){
   // console.log(Business_ID,Business_Name,OwnerName,Email,Address,date,business_category,TelephoneNumeber1,TelephoneNumeber2);

   this.navCtrl.push(EditbusPage,{
    Business_ID : Business_ID,
    Business_Name : Business_Name,
    OwnerName : OwnerName,
    Email : Email,
    Address : Address,
    date : date,
    business_category : business_category,
    TelephoneNumeber1 : TelephoneNumeber1,
    TelephoneNumeber2 : TelephoneNumeber2,


   });
  }
  deletebus(filterBussine){
    this.personsRef.remove(filterBussine) 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

}
