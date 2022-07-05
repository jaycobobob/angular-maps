import { Injectable } from '@angular/core';
import { markers, locations } from '../locationData';

@Injectable({
    providedIn: 'root',
})
export class MarkersService {
    getMarkers = () => {
        return markers;
    };
    getLocationData = (uid: string) => {
        return locations.find((location) => location.uid === uid);
    };
    constructor() {}
}
