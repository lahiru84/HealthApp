import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';

import { SchoolHealthPage } from '../pages/school-health/school-health';
import { AboutPage } from '../pages/about/about';
import { ContactPage} from '../pages/contact/contact';
import { FoodsaftyPage} from '../pages/Foodsafty/Foodsafty';
import {AngularFireAuth} from 'angularfire2/auth'
import { HomePage } from '../pages/home/home';
import { familyHome } from '../pages/familyHome/familyHome';
import { epidomologyPage } from '../pages/epidomology/epidomology';

@Component({
  templateUrl: 'app.html'     
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  username: string;
  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public afAuth:AngularFireAuth) {
    //this.initializeApp();

    this.afAuth.authState.subscribe(auth=>{
      if(!auth)
      this.rootPage=WelcomePage;
      else
      this.rootPage=HomePage;
    });

    // used for an example of ngFor and navigation
   
    this.pages = [
     
     // { title: 'List', component: ListPage }, 
                                                     
      {title: 'School Health',component:SchoolHealthPage},
     {title: 'Family Health',component:familyHome},
      {title: 'Epidemiology',component:epidomologyPage},
      {title: 'Environment Health',component:SchoolHealthPage},
      {title: 'Food & Safety Hygine',component:FoodsaftyPage},
      {title: 'About',component:AboutPage},
      {title: 'Contact Us',component:ContactPage},
      {title: 'Log Out',component:WelcomePage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
