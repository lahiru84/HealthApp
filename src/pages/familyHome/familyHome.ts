import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {FamilyPage} from '../family/family';
import { PregnantPage } from '../pregnant/pregnant';
import { BornNewPage } from '../born-new/born-new';



@Component({
  selector: 'page-home',
  templateUrl: 'familyHome.html'
})
export class familyHome {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController ) {

  }

onButtonclicked(){
 this.navCtrl.push(FamilyPage);
}

onButtonclicked1(){
  this.navCtrl.push(PregnantPage);
 }

 onButton(){
  this.navCtrl.push(BornNewPage);
 }

}
