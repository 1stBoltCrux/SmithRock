import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Route } from '../models/route.model';
import { ClimbingRoutesService } from '../climbing-routes.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css'],
  providers: [ClimbingRoutesService]
})
export class RouteDetailComponent implements OnInit {
    routeId: string;
    routeToDisplay;


    constructor(
   // private router: Router,
   private route: ActivatedRoute,
   private location: Location,
   private routeService: ClimbingRoutesService
 ) {}

   ngOnInit() {
     this.route.params.forEach((urlParameters) => {
       this.routeId = urlParameters['id'];
     });
     this.routeService.getRouteById(this.routeId).subscribe(dataLastEmittedFromObserver => {
       this.routeToDisplay = new Route(dataLastEmittedFromObserver.name,
       dataLastEmittedFromObserver.grade,
       dataLastEmittedFromObserver.type,
       dataLastEmittedFromObserver.height,
       dataLastEmittedFromObserver.description,
       dataLastEmittedFromObserver.area,
       dataLastEmittedFromObserver.star,
       dataLastEmittedFromObserver.image)
     })
   }

   beginDeletingRoute(routeToDelete){
     console.log(routeToDelete);
  if(confirm("Are you sure you want to delete this item from the inventory?")){
    this.routeService.deleteRoute(routeToDelete);
  }
}

}
