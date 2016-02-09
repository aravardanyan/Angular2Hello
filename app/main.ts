import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './components/app.component'
import {UserService} from "./services/user.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS]);