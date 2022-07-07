import { Component, OnInit } from '@angular/core';
import {
    ShortTeamData,
    TeamDataService,
} from 'src/app/services/team-data.service';

@Component({
    selector: 'marker-map',
    templateUrl: './marker-map.component.html',
    styleUrls: ['./marker-map.component.css'],
})
export class MarkerMapComponent {
    center = { lat: 39.5, lng: -98.35 };
    hasWindowDisplayed = false;
    getTeamData: { (uid: string): ShortTeamData };
    teamData!: ShortTeamData;

    constructor(service: TeamDataService) {
        this.getTeamData = service.getShortTeamData;
        this.teamData = this.getTeamData('');
    }

    hideInfoWindow = () => {
        return !this.hasWindowDisplayed;
    };

    infoWindowDisplayed = (uid: string) => {
        this.hasWindowDisplayed = true;
        this.teamData = this.getTeamData(uid);
    };
}
