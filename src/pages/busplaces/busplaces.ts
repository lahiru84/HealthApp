import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GroceriesPage} from '../groceries/groceries';
import {BakeriesPage} from '../bakeries/bakeries';
import {FoodPage} from '../food/food';
import {HotelPage} from '../hotel/hotel';
import {OtherPage} from '../other/other';
import {SnackPage} from '../snack/snack';
import {SupermarPage} from '../supermar/supermar';

/**
 * Generated class for the BusplacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-busplaces',
  templateUrl: 'busplaces.html',
})
export class BusplacesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusplacesPage');
  }
  onButtonClicked1() {

  //  const myValue = "klajdsflkaj dskfahdskjfha ksdjfhaksjdfhlajdg";
    this.navCtrl.push( GroceriesPage);
  }

  onButtonClicked2() {
    this.navCtrl.push( FoodPage);
  }
  onButtonClicked3() {
    this.navCtrl.push( SnackPage);
  }
  onButtonClicked4() {
    this.navCtrl.push( BakeriesPage);
  }
  onButtonClicked5() {
    this.navCtrl.push( HotelPage);
  }
  onButtonClicked6() {
    this.navCtrl.push( SupermarPage);
  }
  onButtonClicked7() {
    this.navCtrl.push( OtherPage);
  }






}
