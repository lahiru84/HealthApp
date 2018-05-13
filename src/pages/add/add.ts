import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AlertController } from 'ionic-angular';
import _ from 'lodash';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

 personsRef : FirebaseListObservable <any>;
 persons: any = [];
//asd:any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase,private ActionSheetCtrl:ActionSheetController,public alert:AlertController) {
   this.personsRef= db.list('/people');
   this.personsRef.subscribe(resp => {
    this.persons = resp;
    // console.log("resp", JSON.stringify(resp))
    // this.asd = _.filter(resp, { 'business_category': "SuperMarket"});
    // //console.log("new", JSON.stringify(asd));
 

   });
   
  }

  AddBs(Business_ID,Business_Name,OwnerName,Email,Address,date,business_category,TelephoneNumeber1,TelephoneNumeber2){
   try{
    this.personsRef.push({
      Business_ID : Business_ID,
      Business_Name : Business_Name,
      OwnerName : OwnerName,
      Email : Email,
      Address : Address,
      date : date,
      business_category : business_category,
      TelephoneNumeber1 : TelephoneNumeber1,
      TelephoneNumeber2 : TelephoneNumeber2,
    })
    this.AlterSuccessful();
  }
  catch{
    this.AlternotSuccessful();
  }
}
   AlterSuccessful(){ 
     let altermsg = this.alert.create({
       title:"Successful",
       message:"Data Save Successful",
       buttons:['ok']
     });
     altermsg.present(altermsg);
   }


   AlternotSuccessful(){ 
    let altermsg = this.alert.create({
      title:"Error",
      message:"Data Save Not Successful",
      buttons:['ok']
    });
    altermsg.present(altermsg);
  }

   
  selectpersonsRef(){
  this.ActionSheetCtrl.create
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
}

