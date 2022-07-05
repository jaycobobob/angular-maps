import { Component } from '@angular/core';
import { locations } from './locationData';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'angular-maps';
    center = { lat: 30.26759, lng: -97.74299 };
}
