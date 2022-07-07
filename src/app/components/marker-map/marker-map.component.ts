import { Component, OnInit } from '@angular/core';
import { usCenter } from 'src/app/locationData';
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
    center = usCenter;
    hasWindowDisplayed = false;
    getTeamData: Function;
    teamData!: ShortTeamData;

    constructor(service: TeamDataService) {
        this.getTeamData = service.getShortTeamData;
    }

    hideInfoWindow = () => {
        return !this.hasWindowDisplayed;
    };

    infoWindowDisplayed = (uid: string) => {
        this.hasWindowDisplayed = true;
        this.teamData = this.getTeamData(uid);
    };
}
