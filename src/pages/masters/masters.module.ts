import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MastersPage } from './masters';

@NgModule({
  declarations: [
    MastersPage,
  ],
  imports: [
    IonicPageModule.forChild(MastersPage),
  ],
})
export class MastersPageModule {}
