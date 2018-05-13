import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchoolPage } from '../school/school';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
 
  constructor(public navCtrl: NavController) {

  }

  openItem(){
    this.navCtrl.push(SchoolPage);
  }

}
