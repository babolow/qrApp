import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  HomePage: HomePage;

  constructor(public NavCtrl:NavController){}

  goHomePage(){
    this.NavCtrl.setRoot(HomePage);
  }

}

