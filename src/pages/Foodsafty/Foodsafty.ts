import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { UpdatebusPage } from '../updatebus/updatebus';
import {BusplacesPage} from '../busplaces/busplaces';


@Component({
  selector: 'page-Foodsafty',
  templateUrl: 'Foodsafty.html',
})
export class FoodsaftyPage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }
  onButtonClicked() {
    this.navCtrl.push( AddPage);
  }

  onButtonClicked1() {
    this.navCtrl.push( UpdatebusPage);
  }

  onButtonClicked3() {
    this.navCtrl.push( BusplacesPage);
  }
}




