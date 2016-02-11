import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import {Headers} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpHelper {

    public static get url(): string {
        return window.location.origin;
    }

    public get headers(): Headers {
        let headers = new Headers();

        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return headers;
    }

    constructor(private _http: Http) {}

    public GET_JsonObservable(url): Observable<any> {
        return this._http.get(HttpHelper.url + url).map(response => response.json());
    }

    public GET_ResponseObservable(url): Observable<any> {
        return this._http.get(HttpHelper.url + url).map(response => response);
    }

    public GET_JsonPromise(url): Promise<any> {
        return this._http.get(HttpHelper.url + url).toPromise().then(response => response.json());
    }

    public GET_ResponsePromise(url): Promise<any> {
        return this._http.get(HttpHelper.url + url).toPromise().then(response => response);
    }

    public POST_JsonObservable(url, body): Observable<any> {
        return this._http.post('http://jsonplaceholder.typicode.com/posts' + url, JSON.stringify(body), {
            headers: this.headers
        }).map(response => response.json());
    }

    public POST_ResponseObservable(url, body): Observable<any> {
        return this._http.post('http://jsonplaceholder.typicode.com/posts' + url, JSON.stringify(body), {
            headers: this.headers
        }).map(response => response);
    }

    public POST_JsonPromise(url, body: JSON): Promise<any> {
        return this._http.post('http://jsonplaceholder.typicode.com/posts' + url, JSON.stringify(body), {
            headers: this.headers
        }).toPromise().then(response => response.json());
    }

    public POST_ResponsePromise(url, body: JSON): Promise<any> {
        return this._http.post('http://jsonplaceholder.typicode.com/posts' + url, JSON.stringify(body), {
            headers: this.headers
        }).toPromise().then(response => response);
    }
}