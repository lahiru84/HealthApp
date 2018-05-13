import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImmunizePage } from './immunize';

@NgModule({
  declarations: [
    ImmunizePage,
  ],
  imports: [
    IonicPageModule.forChild(ImmunizePage),
  ],
})
export class ImmunizePageModule {}
