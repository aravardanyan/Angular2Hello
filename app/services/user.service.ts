import {Injectable} from 'angular2/core';
import {User} from '../contracts/user';
import {USERS} from '../mock_users';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

    constructor(private _http: Http) { }

    public getCurrentUser(): Promise<User> {
        return Promise.resolve(new User('Ara', 'Vardanyan', 'avardanyan', 'aravardanyan@gmail.com', 34));
    }

    public getUsers(): Promise<Array<User>> {
        return Promise.resolve(USERS);
    }

    public addUser(user: User): void {
        Promise.resolve(USERS).then(users => users.push(user));
    }

    public getCurrentTime(): Observable<any> {
        return this._http.get('http://jsonplaceholder.typicode.com/comments/1').map(response => response.json());
    }

    public postJson(): Observable<any> {
        let json = JSON.stringify({var1: 'test1', var2: 'test2'});
        let params = 'json=' + json;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoed');

        return this._http.post('http://jsonplaceholder.typicode.com/posts', params, {
            headers: headers
        }).map(response => response.json());
    }
}
