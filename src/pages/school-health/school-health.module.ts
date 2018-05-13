import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolHealthPage } from './school-health';

@NgModule({
  declarations: [
    SchoolHealthPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolHealthPage),
  ],
})
export class SchoolHealthPageModule {}
