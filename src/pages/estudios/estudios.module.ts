import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudiosPage } from './estudios';

@NgModule({
  declarations: [
    EstudiosPage,
  ],
  imports: [
    IonicPageModule.forChild(EstudiosPage),
  ],
})
export class EstudiosPageModule {}
