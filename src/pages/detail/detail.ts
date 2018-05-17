import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class TagDetail {
  tag;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
 
  ionViewDidLoad() {
    this.tag = this.navParams.get('tag');
  }
}