import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TagDetail } from '../detail/detail';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  constructor(public navCtrl: NavController,
    public qrScanner: BarcodeScanner) {
      this.qrscanner();
  }

  qrscanner() {
    this.qrScanner.scan().then((data) => {
      console.log('Scanned something', data);

      this.navCtrl.push(TagDetail, {tagId: data.text});
    }).catch( (error) => {
      console.error(error);
    } );

  }
}
