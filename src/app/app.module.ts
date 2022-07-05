import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkersService } from './services/markers.service';
import { MapComponent } from './components/map/map.component';
import { InfoWindowComponent } from './components/info-window/info-window.component';
import { PreviewPipe } from './pipes/preview.pipe';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        InfoWindowComponent,
        PreviewPipe,
    ],
    imports: [BrowserModule],
    providers: [MarkersService],
    bootstrap: [AppComponent],
})
export class AppModule {}
