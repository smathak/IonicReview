import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilelistPage } from './profilelist';

@NgModule({
  declarations: [
    ProfilelistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilelistPage),
  ],
})
export class ProfilelistPageModule {}
