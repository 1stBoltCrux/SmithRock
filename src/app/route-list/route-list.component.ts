import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../models/route.model'
import { ClimbingRoutesService } from '../climbing-routes.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css'],
  providers: [ClimbingRoutesService]
})
export class RouteListComponent implements OnInit {
  @Input() childRouteList: Route[];

filterByGrade: number = 40;

routesArray: FirebaseListObservable<any[]>;

ngOnInit(){
  this.routesArray = this.routeService.getRoutes();
}



constructor(private router: Router, private routeService: ClimbingRoutesService) {}

submitGrade(routeGrade){
  console.log(routeGrade)
  let grade = parseInt(routeGrade);
  this.filterByGrade = grade;

}
}
