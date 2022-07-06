import { Component, OnInit } from '@angular/core';
import {
    LocationProperties,
    nullLocation,
    usCenter,
} from 'src/app/locationData';
import { MarkersService } from 'src/app/services/markers.service';

@Component({
    selector: 'marker-map',
    templateUrl: './marker-map.component.html',
    styleUrls: ['./marker-map.component.css'],
})
export class MarkerMapComponent {
    center = usCenter;
    hasWindowDisplayed = false;
    getLocationData: { (uid: string): LocationProperties };
    locationData: LocationProperties = nullLocation;

    constructor(locationService: MarkersService) {
        this.getLocationData = locationService.getLocationData;
    }

    hideInfoWindow = () => {
        return !this.hasWindowDisplayed;
    };

    infoWindowDisplayed = (uid: string) => {
        this.hasWindowDisplayed = true;
        this.locationData = this.getLocationData(uid);
    };
}
