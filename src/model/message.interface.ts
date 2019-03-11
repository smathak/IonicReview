import { Profile } from './profile.interface';

export interface Message {
    fromID: string;
    toID: string;
    fromName: string;
    toName: string;
    content: string;
    when: string;
}

