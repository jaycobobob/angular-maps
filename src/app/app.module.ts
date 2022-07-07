import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { InfoWindowComponent } from './components/info-window/info-window.component';
import { PreviewPipe } from './pipes/preview.pipe';
import { MarkerMapComponent } from './components/marker-map/marker-map.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pageComponents/home-page/home-page.component';
import { NotFoundPageComponent } from './components/pageComponents/not-found-page/not-found-page.component';
import { TeamPageComponent } from './components/pageComponents/team-page/team-page.component';
import { TeamDataService } from './services/team-data.service';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        InfoWindowComponent,
        PreviewPipe,
        MarkerMapComponent,
        HomePageComponent,
        TeamPageComponent,
        NotFoundPageComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomePageComponent },
            { path: 'teams/:uid', component: TeamPageComponent },
            { path: '**', component: NotFoundPageComponent },
        ]),
    ],
    providers: [TeamDataService],
    bootstrap: [AppComponent],
})
export class AppModule {}
