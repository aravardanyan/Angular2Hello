import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {UserService} from '../services/user.service';
import {User} from '../contracts/user';
import {UserListComponent} from './user-list.component';
import {NewUserComponent} from "./new-user.component";

@Component({
    selector: 'app',
    templateUrl: 'app/templates/layout.html',
    providers: [UserService],
    directives: [UserListComponent, NewUserComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/users', name: 'Users', component: UserListComponent, useAsDefault: true},
    {path: '/newuser', name: 'NewUser', component: NewUserComponent}
])
export class AppComponent implements OnInit {

    private _currentUser: User;

    constructor (private _userService: UserService) {
        this._currentUser = new User();
    }

    public get currentUser(): User {
        return this._currentUser;
    }

    public ngOnInit(): void {
        this.fetchCurrentUser();
    }

    private fetchCurrentUser(): void {
        this._userService.getCurrentUser().then((user: User) => this._currentUser = user);
    }
}
