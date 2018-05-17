import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { AddPage } from '../pages/add/add';
=======
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';
import { Config } from './config';
>>>>>>> 4de60cd17e521b2ff32c8e23c870d592d6843843

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
<<<<<<< HEAD
      { title: 'Ajouter', component: AddPage },
      { title: 'Liste', component: ListPage }
=======
      { title: 'Ajouter', component: HomePage },
      { title: 'Liste', component: ListPage },
      { title: 'Connexion', component: LoginPage }
>>>>>>> 4de60cd17e521b2ff32c8e23c870d592d6843843

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(Config.firebase);

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
