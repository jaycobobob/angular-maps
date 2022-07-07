import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'championship-display',
    templateUrl: './championship-display.component.html',
    styleUrls: ['./championship-display.component.css'],
})
export class ChampionshipDisplayComponent implements OnInit {
    @Input('count') count: number = 0;
    arr: number[] = [];

    constructor() {}

    ngOnInit(): void {
        this.arr = Array(this.count);
        console.log(this.count);
    }
}
