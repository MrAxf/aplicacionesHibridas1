import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { EstudiosPage } from '../estudios/estudios';
import { NoticiasPage } from '../noticias/noticias';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NoticiasPage;
  tab2Root = ContactPage;
  tab3Root = EstudiosPage;

  constructor() {

  }
}
