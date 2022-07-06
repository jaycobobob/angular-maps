import { Injectable } from '@angular/core';
import { markers, locations, nullLocation } from '../locationData';

@Injectable({
    providedIn: 'root',
})
export class MarkersService {
    getMarkers = () => {
        return markers;
    };
    getLocationData = (uid: string) => {
        let locationData = locations.find((location) => location.uid === uid);
        if (locationData) {
            return locationData;
        }
        return nullLocation;
    };
    constructor() {}
}
