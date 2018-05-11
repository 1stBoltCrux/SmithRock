import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Route } from './models/route.model';
import { News } from './models/news.model'
import { RouteDetailComponent } from './route-detail/route-detail.component';

// import { ALBUMS } from './mock-albums';

@Injectable()
export class ClimbingRoutesService {
    routesArray: FirebaseListObservable<any[]>;


    constructor(private database: AngularFireDatabase) {
      this.routesArray = database.list('routes');

    }

  getRoutes(){
     return this.routesArray;
   }


   getRouteById(routeId: string){
     return this.database.object('routes/' + routeId);
   }

   addRoute(newRoute: Route) {
     this.routesArray.push(newRoute);
    }

    deleteRoute(localRouteToDelete){
      console.log(localRouteToDelete.name);
      let routeEntryInFirebase = this.getRouteById(localRouteToDelete.$key);
      routeEntryInFirebase.remove();
    }
}
