import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(public navCtrl: NavController,
    public qrScanner: BarcodeScanner) {
      this.qrscanner();
  }

  ionViewDidLeave() {
    
  }

  qrscanner() {
    this.qrScanner.scan().then((data) => {
      console.log('Scanned something', data);

      //this.navCtrl.push(DetailPage, {tagId: data.text});
      //this.navCtrl.pop();
    }).catch( (error) => {
      console.error(error);
    } );

  }
}
