import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../contracts/user';
import {HttpHelper} from "../utilities/httpHelper.service";

@Injectable()
export class UserService {

    constructor(private _httpHelper: HttpHelper) { }

    public getCurrentUser(): Promise<User> {
        return Promise.resolve(new User('Ara', 'Vardanyan', 'avardanyan', 'aravardanyan@gmail.com', 34));
    }

    public getUsers(): Promise<Array<User>> {
        return this._httpHelper.GET_JsonPromise('/users.json');
    }

    public addUser(user: User): void {

    }

    public getCurrentTime(): Observable<any> {
        return this._httpHelper.GET_JsonObservable('/users.json');
    }

    public postJson(): Observable<any> {
        return this._httpHelper.POST_JsonObservable('', { var1: 'test1', var2: 'test2' });
    }
}
