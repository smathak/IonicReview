import { PROFILE_LIST } from './profiles';
import { Message } from './../model/message.interface';

const messageList: Message[] = [];

PROFILE_LIST.forEach((user) => {   
    // messageList.push( { 
    //     fromID: user.firstName,
    //     toID: "bogum",
    //     content: 'Hello',
    //     fromName: "jieun",
    //     toName: "bogum",
    //     when: "2017/11/26"
    // })
});
export const MESSAGE_LIST = messageList;