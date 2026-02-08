import type { User } from '../entitys/User';

export class Users {
    static defaultUser: User = {
        userName: process.env.WIKI_USERNAME ?? '',
        password: process.env.WIKI_PASSWORD ?? ''
    };
}
