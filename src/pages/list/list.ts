import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TagDetail } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  Comments : string[];
  TheUser : string;
  TheTitle : string;
  items: Array<{title: string, Comment: string[], User: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies

    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.Comments = ['Premier commentaire', 'Deuxième commentaire', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.TheUser = "BenJ";

    this.TheTitle = "Tag1";

    this.items = [];
    // for (let i = 0; i < this.icons.length; i++) {
      this.items.push({
        title: this.TheTitle,
        Comment: this.Comments,
        User: 'Utilisateur:' + this.TheUser,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    // }
  }

  // goToDetail(tag) {
  //   this.navCtrl.push(TagDetail, {tag: tag});
  // }
  itemTapped(event, item) {
    this.navCtrl.push(TagDetail, {tag: item});
  }
}
