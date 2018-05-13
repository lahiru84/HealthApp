import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchoolPage } from '../school/school';
import { ImmunizePage } from '../immunize/immunize';
import { SchoolStdPage } from '../school-std/school-std';
import { SchoolRptPage } from '../school-rpt/school-rpt';


/**
 * Generated class for the SchoolHealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school-health',
  templateUrl: 'school-health.html',
})
export class SchoolHealthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onbschool(){
    this.navCtrl.push(SchoolPage);
  }
  onbstd(){
    this.navCtrl.push(SchoolStdPage);
  }
  onbimz(){
    this.navCtrl.push(ImmunizePage);
  }
  onbrpt(){
    this.navCtrl.push(SchoolRptPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolHealthPage');
  }

}
