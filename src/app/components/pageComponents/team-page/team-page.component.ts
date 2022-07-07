import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamDataService } from 'src/app/services/team-data.service';
import { TeamData } from 'src/app/teamData';

@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.css'],
})
export class TeamPageComponent implements OnInit {
    teamData!: TeamData;

    constructor(
        private route: ActivatedRoute,
        private service: TeamDataService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            let uid = params.get('uid');
            if (uid) {
                this.teamData = this.service.getFullTeamData(uid);
            }
        });
    }
}
