import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    var db = firebase.firestore();

    //db.collection("tag").add({name: "Mon tag", owner: "iddevice"});

    db.collection("tag").where("champs", "==", "valeur").get().then( (collection)=> {
      //var docs = collection.docs;

      for(var doc of collection.docs) {
        console.log(doc.id, doc.data());
      }
      
    } );


    db.collection("tag").doc("6cbgPbvOVX7jyLI5wiXO").get().then( (doc)=> {
      console.log(doc.id, doc.data());
    } );

    db.collection("tag").doc("6cbgPbvOVX7jyLI5wiXO").collection("comment").get().then( (collection)=> {
      //var docs = collection.docs;

      for(var doc of collection.docs) {
        console.log(doc.id, doc.data());
      }
      
    } );

    
  }

}
