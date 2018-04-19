import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiasProvider } from '../../providers/noticias/noticias';

/**
 * Generated class for the NoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage{

  noticia: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public noticiaProv: NoticiasProvider) {
  }

  ionViewDidLoad() {
    const id = this.navParams.get("noticia");
    this.noticiaProv.getNoticia(id)
      .subscribe((res: any) => this.noticia = res);
  }

}
