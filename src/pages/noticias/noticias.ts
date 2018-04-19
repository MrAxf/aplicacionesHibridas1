import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiasProvider } from '../../providers/noticias/noticias';
import { NoticiaPage } from '../noticia/noticia';


/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public noticiasProv: NoticiasProvider) {
  }

  ionViewDidLoad() {
    this.noticiasProv.getNoticias()
      .subscribe((res: Array<any>) => this.noticias = res);
  }

  openNoticia(noticia){
    this.navCtrl.push(NoticiaPage, {noticia});
  }

}
