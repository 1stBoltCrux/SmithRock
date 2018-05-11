import { Component, OnInit } from '@angular/core';
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
  displayNewRouteForm = null;
  filterByGrade: number = 40;

routesArray: FirebaseListObservable<any[]>;

ngOnInit(){
  this.routesArray = this.routeService.getRoutes();
  console.log(this.routesArray)
}

goToDetailPage(clickedRoute) {
   this.router.navigate(['details', clickedRoute.$key]);
 };

 submitGrade(routeGrade){
   console.log(routeGrade)
   let grade = parseInt(routeGrade);
   this.filterByGrade = grade;

 }

 addRouteClick() {
   this.displayNewRouteForm = 0;
   console.log(this.displayNewRouteForm);
 }

 submitNewClimb(name: string, grade: number, type: string, height: number, description: string, area: string, star: string, image: string){
   let newRoute: Route = new Route(name, grade, type, height, description, area, star, image)
    this.routeService.addRoute(newRoute);
    this.displayNewRouteForm = null;
 }


constructor(private router: Router, private routeService: ClimbingRoutesService) {}


}
