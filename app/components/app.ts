import {Component} from 'angular2/core';
import {View} from "angular2/core";

@Component({
    selector: 'app'
})
@View({
    templateUrl: '../../app/templates/layout.html'
})
export class AppComponent {

    constructor () {
        this._firstName = 'Ara';
        this._lastName = 'Vardanyan';
        this._age = 34;
        this._email = 'aravardanyan@gmail.com';
    }

    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _email: string;

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get age(): number {
        return this._age;
    }

    get email(): string {
        return this._email;
    }
}
