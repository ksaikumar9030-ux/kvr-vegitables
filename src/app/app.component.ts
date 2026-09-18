import {Component} from '@angular/core';
import {RouterLink,RouterOutlet} from '@angular/router';
import {StoreService} from './store.service';
@Component({selector:'app-root',standalone:true,imports:[RouterLink,RouterOutlet],templateUrl:'./app.component.html',styleUrl:'./app.component.css'})
export class AppComponent{constructor(public store:StoreService){}}