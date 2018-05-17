import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  ListPage: ListPage;

  constructor(public NavCtrl:NavController){}

  goHomePage(){
    this.NavCtrl.setRoot(ListPage);
  }

}

