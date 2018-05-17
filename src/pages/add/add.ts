import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {


  tag = {
      Name : '' ,
      Comment: [],
      Owner: ''
    };

  constructor(public navCtrl: NavController) {
    
  }

  addTag(){
    var db = firebase.firestore();
    db.collection("tag").doc().set({Name: this.tag.Name}).then( (collection)=> {
        
      });
  }
}
