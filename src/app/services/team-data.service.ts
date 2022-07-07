import { Injectable } from '@angular/core';
import { nullTeam, TeamData, teams } from '../teamData';

export interface ShortTeamData {
    title: string;
    logo: string;
    summary: string;
    stadiumSrc: string;
}

export interface Marker {
    position: google.maps.LatLngLiteral;
    title: string;
    uid: string;
}

@Injectable({
    providedIn: 'root',
})
export class TeamDataService {
    getMarkers = () => {
        return teams.map((team) => {
            const marker = {
                position: team.position,
                title: team.title,
                uid: team.uid,
            };
            return marker;
        });
    };

    getShortTeamData = (uid: string): ShortTeamData => {
        let teamData = teams.find((team) => team.uid === uid);
        teamData = teamData ? teamData : nullTeam;
        return {
            title: teamData.title,
            logo: teamData.logo,
            summary: teamData.summary,
            stadiumSrc: teamData.stadiumData.src,
        };
    };

    getFullTeamData = (uid: string): TeamData => {
        let teamData = teams.find((team) => team.uid === uid);
        return teamData ? teamData : nullTeam;
    };
}
