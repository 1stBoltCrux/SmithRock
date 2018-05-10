import { Component, OnInit, Input } from '@angular/core';
import { News } from '../models/news.model'
import { ClimbingRoutesService } from '../climbing-routes.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
  providers: [ClimbingRoutesService]
})
export class NewsItemComponent {
    @Input() childNewsList: News[];

    routesArray: FirebaseListObservable<any[]>;

    ngOnInit(){
      this.routesArray = this.routeService.getRoutes();
    }
    constructor(private router: Router, private routeService: ClimbingRoutesService) {}


}
