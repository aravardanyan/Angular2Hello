import {Injectable} from 'angular2/core';
import {User} from '../contracts/user';
import {USERS} from '../mock_users';

@Injectable()
export class UserService {

    private _users: Array<User> = [];

    public getCurrentUser(): Promise<User> {
        return Promise.resolve(new User('Ara', 'Vardanyan', 'avardanyan', 'aravardanyan@gmail.com', 34));
    }

    public getUsers(): Promise<Array<User>> {
        return Promise.resolve(USERS);
    }

    public addUser(user: User): void {
        Promise.resolve(USERS).then(users => users.push(user));
    }
}
