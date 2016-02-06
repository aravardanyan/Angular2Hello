import {Injectable} from 'angular2/core';
import {User} from '../contracts/user';

@Injectable()
export class UserService {
    getCurrentUser() {
        return Promise.resolve({firstName: 'Ara', lastName: 'Vardanyan', userName: 'avardanyan', age: 34, email: 'aravardanyan@gmail.com'});
    }
}
