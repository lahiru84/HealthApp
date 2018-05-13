import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the EditbusmeasurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-editbusmeasure',
  templateUrl: 'editbusmeasure.html',
})
export class EditbusmeasurePage {
  personsRef : FirebaseListObservable <any>;
  persons: any = [];
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,public alert:AlertController) {
    this.personsRef= db.list('/BusnessMeasure');
    this.personsRef.subscribe(resp => {
     this.persons = resp;
     // console.log("resp", JSON.stringify(resp))
     // this.asd = _.filter(resp, { 'business_category': "SuperMarket"});
     // //console.log("new", JSON.stringify(asd));
  
 
    });
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









  ionViewDidLoad() {
    console.log('ionViewDidLoad EditbusmeasurePage');
  }
  

}

