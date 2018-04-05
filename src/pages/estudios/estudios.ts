import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GradosPage } from '../grados/grados';
import { MastersPage } from '../masters/masters';
import { DoctoradoPage } from '../doctorado/doctorado';

/**
 * Generated class for the EstudiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estudios',
  templateUrl: 'estudios.html',
})
export class EstudiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstudiosPage');
  }

  openGrades() {
    this.navCtrl.push(GradosPage);
  }

  openMasters() {
    this.navCtrl.push(MastersPage);
  }

  openPhD() {
    this.navCtrl.push(DoctoradoPage);
  }

}
