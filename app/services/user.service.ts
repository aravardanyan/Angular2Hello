import {Injectable} from 'angular2/core';
import {User} from '../contracts/user';

@Injectable()
export class UserService {
    getCurrentUser() {
        return Promise.resolve(new User('Ara', 'Vardanyan', 'avardanyan', 'aravardanyan@gmail.com', 34));
    }
}
