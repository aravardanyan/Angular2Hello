import {Component} from 'angular2/core';
import {View} from 'angular2/core';
import {UserService} from '../services/user.service';
import {User} from '../contracts/user';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'app',
    providers: [UserService]
})
@View({
    templateUrl: '../../app/templates/layout.html'
})
export class AppComponent implements OnInit {

    private _currentUser: User;

    get currentUser(): User {
        return this._currentUser;
    }

    constructor (private _userService: UserService) {
        this._currentUser = {firstName: '', lastName: '', userName: '', email: '', age: 0};
    }

    fetchCurrentUser() {
        this._userService.getCurrentUser().then((user: User) => this._currentUser = user);
    }

    ngOnInit() {
        this.fetchCurrentUser();
    }
}
