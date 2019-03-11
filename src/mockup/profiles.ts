import { Profile } from './../model/profile.interface';

const profileList: Profile[] = [ 		
    { firstName: 'Minho', lastName: 'Shin', email: 'shinminho@gmail.com',		
        avatar: 'assets/imgs/avatar.jpg', key: 'Minhokey' },
    { firstName: 'Bob', lastName: '', email: 'bob@minions.com',		
        avatar: 'assets/imgs/avatar.jpg', key: 'Bobkey' },
    { firstName: 'Dory', lastName: '', email: 'dory@unforgettable.com',		
        avatar: 'assets/imgs/avatar.jpg', key: 'Dorykey' }
];
export const PROFILE_LIST = profileList;
