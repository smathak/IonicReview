import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelChatPage } from './channel-chat';
import { AngularFireAuthModule } from 'angularfire2/auth'

@NgModule({
  declarations: [
    ChannelChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelChatPage),
    AngularFireAuthModule
  ],
})
export class ChannelChatPageModule {}
