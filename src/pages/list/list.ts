import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TagDetail } from '../detail/detail';

import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string;
  Comments : any[];
  TheUser : any;
  TheTitle : any;
  items: Array<{Name: string, Comment: string[], Owner: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    var db = firebase.firestore();

    // db.collection("tag").doc("6cbgPbvOVX7jyLI5wiXO").collection("comment").add({content: "Mon titre"}); Pour l'ajout
    
    //         db.collection("tag").where("champs", "==", "valeur").get().then( (collection)=> {
    //   //var docs = collection.docs;

    //   for(var doc of collection.docs) {
    //     this.Comments = databa
    //   }
      
    // } );
    
    // Let's populate this page with some filler content for funzies

    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    this.icons = 'beer';

        db.collection("tag").doc("6cbgPbvOVX7jyLI5wiXO").collection("title").get().then( (collection)=> {
      //var docs = collection.docs;

      for(var doc of collection.docs) {
        this.TheTitle.push(doc.data());
      }
      
    } );

    /*this.Comments = ['Premier commentaire', 'Deuxième commentaire', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];*/

    // this.TheUser = "BenJ";


        db.collection("tag").doc("6cbgPbvOVX7jyLI5wiXO").collection("owner").get().then( (collection)=> {
      //var docs = collection.docs;

      for(var doc of collection.docs) {
        this.TheUser.push(doc.data());
      }
      
    } );

    // this.TheTitle = "Tag1";

//Ici on récupère la collection de[] tag
    this.Comments = [];
    db.collection("tag").doc("6cbgPbvOVX7jyLI5wiXO").collection("comment").get().then( (collection)=> {
      //var docs = collection.docs;

      for(var doc of collection.docs) {
        this.Comments.push(doc.data());
      }
      
    } );

    this.items = [];
    // for (let i = 0; i < this.icons.length; i++) {
      this.items.push({
        Name: this.TheTitle,
        Comment: this.Comments,
        Owner: 'Utilisateur:' + this.TheUser,
        icon: this.icons

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
