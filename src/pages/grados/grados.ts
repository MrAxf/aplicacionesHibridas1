import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GradosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grados',
  templateUrl: 'grados.html',
})
export class GradosPage {

  estudios = [
    {"rama": "Artes y Humanidades", "estudios": [
      {"estudios": "Doble Grado en Estudios Ingleses y Filología Hispánica", "plan": "", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO3112"},
      {"estudios": "Grado en Estudios Ingleses", "plan": "Plan 2010", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO3110"},
      {"estudios": "Grado en Filología Hispánica", "plan": "Plan 2010", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO1210"},
      {"estudios": "Grado en Historia", "plan": "Plan 2010", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO1310"},
      {"estudios": "Grado en Humanidades", "plan": "Plan 2010", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO1010"}
    ]},
    {"rama": "Ciencias Sociales y Jurídicas", "estudios": [
      {"estudios": "Doble Grado en Derecho y en Administración y Dirección de Empresas", "plan": "", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO6207"},
      {"estudios": "Grado en Administración y Dirección de Empresas", "plan": "Plan 2010", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO6210"},
      {"estudios": "Grado en Ciencias de la Actividad Física y del Deporte", "plan": "Plan 2012", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO6912"},
      {"estudios": "", "url": ""},
    ]},
    {"rama": "Ciencias", "estudios": [
      {"estudios": "Grado en Biotecnología", "plan": "Plan 2015", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO4915"},
      {"estudios": "Grado en Ciencias Ambientales", "plan": "Plan 2009", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO4509"},
      {"estudios": "Grado en Matemáticas", "plan": "Plan 2010", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO0410"},
      {"estudios": "Grado en Química", "plan": "Plan 2009", "url": "http://cms.ual.es/UAL/estudios/grados/GRADO0509"},
    ]},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradosPage');
  }

  openURL(url: string) {
    window.open(url, '_self');
  }

}
