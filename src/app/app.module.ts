import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterResultPipe } from './filterResult.pipe';


import { AppComponent } from './app.component';
import { RouteListComponent } from './route-list/route-list.component';
import { NewsItemComponent } from './news-item/news-item.component';


@NgModule({
  declarations: [
    AppComponent,
    RouteListComponent,
    FilterResultPipe,
    NewsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
