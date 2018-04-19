import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EstudiosPage } from '../pages/estudios/estudios';
import { GradosPage } from '../pages/grados/grados';
import { MastersPage } from '../pages/masters/masters';
import { DoctoradoPage } from '../pages/doctorado/doctorado';
import { NoticiasPage } from '../pages/noticias/noticias';
import { NoticiaPage } from '../pages/noticia/noticia';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { NoticiasProvider } from '../providers/noticias/noticias';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    EstudiosPage,
    GradosPage,
    MastersPage,
    DoctoradoPage,
    NoticiasPage,
    NoticiaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    EstudiosPage,
    GradosPage,
    MastersPage,
    DoctoradoPage,
    NoticiasPage,
    NoticiaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasProvider
  ]
})
export class AppModule {}
