import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-Padd',
  templateUrl: 'Padd.html',
})
export class PaddPage {
patientref :FirebaseListObservable <any>;
patient : any = []; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public alert:AlertController,public db:AngularFireDatabase) {
 this.patientref= db.list('/patient');
  }
  AddDB(PName,sex,myDate,Add,tp,sick,ill,blood){
    try{
    this.patientref.push({
      Patient  : PName,
      Gender : sex,
      Birthday : myDate,
      Address : Add,
      Telephone : tp,
      Disease : sick,
      Level : ill,
      Blood_Group : blood,

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
    message: 'Data save to the database',
    buttons: ['Ok']
  });
  alertmsg.present(alertmsg);
}

AlertNotSuccessfull() {
  let alertmsg = this.alert.create({
    title: 'Error',
    message: 'You must fill in all the fields!',
    buttons: ['Ok']
  });
  alertmsg.present(alertmsg);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}

