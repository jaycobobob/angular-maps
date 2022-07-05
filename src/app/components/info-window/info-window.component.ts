import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'info-window',
    templateUrl: './info-window.component.html',
    styleUrls: ['./info-window.component.css'],
})
export class InfoWindowComponent {
    @Input('heading') heading: string = 'Default Heading';
    @Input('contents') contents: string = 'Default Contents';
    @Input('src') src: string = '...';
}
