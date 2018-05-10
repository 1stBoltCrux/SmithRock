import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterResultPipe } from './filterResult.pipe';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { RouteListComponent } from './route-list/route-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { MainPageComponent } from './main-page/main-page.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    RouteListComponent,
    FilterResultPipe,
    NewsItemComponent,
    NavBarComponent,
    RouteDetailComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
