import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradosPage } from './grados';

@NgModule({
  declarations: [
    GradosPage,
  ],
  imports: [
    IonicPageModule.forChild(GradosPage),
  ],
})
export class GradosPageModule {}
