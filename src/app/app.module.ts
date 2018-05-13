import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SchoolHealthPage } from '../pages/school-health/school-health';
import { SchoolPage } from '../pages/school/school';
import { ImmunizePage } from '../pages/immunize/immunize';
import { SchoolStdPage} from '../pages/school-std/school-std';
import { SchoolRptPage} from '../pages/school-rpt/school-rpt';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import {BornNewPage} from '../pages/born-new/born-new';
import {FamilyPage} from '../pages/family/family';
import {PregnantPage} from '../pages/pregnant/pregnant';
import {familyHome} from '../pages/familyHome/familyHome';
import { FoodsaftyPage} from '../pages/Foodsafty/Foodsafty';
import { AddPage} from '../pages/add/add';
import { UpdatebusPage } from '../pages/updatebus/updatebus';
import {BusplacesPage} from '../pages/busplaces/busplaces';
import {GroceriesPage} from '../pages/groceries/groceries';
import {BakeriesPage} from '../pages/bakeries/bakeries';
import {FoodPage} from '../pages/food/food';
import {HotelPage} from '../pages/hotel/hotel';
import {OtherPage} from '../pages/other/other';
import {SnackPage} from '../pages/snack/snack';
import {SupermarPage} from '../pages/supermar/supermar';
import {EditbusPage} from '../pages/editbus/editbus';





import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { epidomologyPage } from '../pages/epidomology/epidomology';
import {PaddPage} from '../pages/Padd/Padd';
import {UpdatePage} from '../pages/update/update';
import {MapPage} from '../pages/map/map';
import {ChartPage} from '../pages/chart/chart';
import {GoogleMapComponent} from '../components/google-map/google-map';
import {PeditPage} from '../pages/pedit/pedit';
import {EditbusmeasurePage} from '../pages/Editbusmeasure/Editbusmeasure';
import {BussnessmesurePage} from '../pages/Bussnessmesure/Bussnessmesure';


const firebasePHG = {
  apiKey: "AIzaSyBUgzNJQCVKZ7UjeIiKDUz5Fw63QXvdwtM",
  authDomain: "health-ccc69.firebaseapp.com",
  databaseURL: "https://health-ccc69.firebaseio.com",
  projectId: "health-ccc69",
  storageBucket: "health-ccc69.appspot.com",
  messagingSenderId: "183521690836"

};






@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    WelcomePage,
    HomePage,
    AboutPage,
    ContactPage,
    SchoolHealthPage,
    SchoolPage,
    ImmunizePage,
    SchoolStdPage,
    SchoolRptPage,
    ForgotPasswordPage,
    BornNewPage,
    FamilyPage,
    PregnantPage,
    familyHome,
    FoodsaftyPage,
    epidomologyPage,
    AddPage,
    UpdatebusPage,
    BusplacesPage,
    GroceriesPage,
    BakeriesPage,
    FoodPage,
    HotelPage,
    OtherPage,
    SnackPage,
    SupermarPage,
    EditbusPage,
    PaddPage,
    UpdatePage,
    MapPage,
    ChartPage,
    GoogleMapComponent,
    PeditPage,
    EditbusmeasurePage,
BussnessmesurePage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebasePHG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    WelcomePage,
    HomePage,
    AboutPage,
    ContactPage,
    SchoolHealthPage,
    SchoolPage,
    ImmunizePage,
    SchoolStdPage,
    SchoolRptPage,
    ForgotPasswordPage,
    BornNewPage,
    FamilyPage,
    PregnantPage,
    familyHome,
    FoodsaftyPage,
    epidomologyPage,
    AddPage,
    UpdatebusPage,
    BusplacesPage,
    GroceriesPage,
    BakeriesPage,
    FoodPage,
    HotelPage,
    OtherPage,
    SnackPage,
    SupermarPage,
    EditbusPage,
    PaddPage,
    UpdatePage,
    MapPage,
    ChartPage,
    GoogleMapComponent,
    PeditPage,
    EditbusmeasurePage,
BussnessmesurePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
