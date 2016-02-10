import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {UserService} from '../services/user.service';
import {User} from '../contracts/user';

@Component({
    selector: 'user-list',
    templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})
export class UserListComponent implements OnInit {

    private _userList: Array<User>;

    constructor (private _userService: UserService) {
        this._userList = [];
    }

    public get userList(): Array<User> {
        return this._userList;
    }

    public getCurrentTime(): void {
        this._userService.getCurrentTime().subscribe(
            data => console.log(JSON.stringify(data)),
            error => console.log(error),
            () => console.log('Finished.'));
    }

    public postJson(): void {
        this._userService.postJson().subscribe(
            data => console.log(JSON.stringify(data)),
            error => console.log(error),
            () => console.log('Finished.'));
    }

    public ngOnInit(): void {
        this.fetchUsers();
    }

    public itemClick(user: User, e: Event): void {
        alert(user.age + ' - ' + e.timeStamp);
    }

    private fetchUsers(): void {
        this._userService.getUsers().then((users: Array<User>) => this._userList = users);
    }
}