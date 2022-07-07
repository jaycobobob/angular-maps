import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Marker, TeamDataService } from 'src/app/services/team-data.service';

@Component({
    selector: 'google-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
    map!: google.maps.Map;
    infoWindow!: google.maps.InfoWindow;
    markers: Marker[] = [];

    @Input('center') mapCenter: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
    @Output('display') display = new EventEmitter();

    constructor(service: TeamDataService) {
        this.markers = service.getMarkers();
    }

    // creates a new marker and adds it to the existing map
    private injectMarker(props: Marker) {
        const imgSize = 60;
        const markerIcon = {
            url: props.logo,
            scaledSize: new google.maps.Size(imgSize, imgSize),
            anchor: new google.maps.Point(imgSize / 2, imgSize / 2),
            origin: new google.maps.Point(0, 0),
        };
        const marker = new google.maps.Marker({
            ...props,
            map: this.map,
            icon: markerIcon,
        });
        google.maps.event.addListener(marker, 'click', () => {
            console.log(`clicked on ${props.title}`);
            this.infoWindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: false,
            });
            this.display.emit(props.uid);
        });
    }

    // initializes the google maps api and accessories upon component loading
    ngOnInit(): void {
        const loader = new Loader({
            apiKey: 'AIzaSyCuihNoypgUmMPnA6nQA8qf1Il40FT9WYs',
            version: 'weekly',
        });

        loader.load().then(() => {
            this.map = new google.maps.Map(
                document.getElementById('map') as HTMLElement,
                {
                    center: this.mapCenter,
                    zoom: window.innerWidth > 600 ? 4.4 : 3.3,
                }
            );

            this.infoWindow = new google.maps.InfoWindow();
            this.infoWindow.setContent(document.getElementById('info-window'));
            this.markers.forEach((marker) => this.injectMarker(marker));
        });
    }
}
