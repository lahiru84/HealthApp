import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BussnessmesurePage} from '../Bussnessmesure/Bussnessmesure';
/**
 * Generated class for the UpdatebusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-updatebus',
  templateUrl: 'updatebus.html',
})
export class UpdatebusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatebusPage');
  }
  onButtonClicked3() {
    this.navCtrl.push( BussnessmesurePage);
  }

}
