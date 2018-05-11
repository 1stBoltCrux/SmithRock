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

   // getRouteById(routeId: string){
   //   return this.database.list('details/' + routeId);
   // }
}
