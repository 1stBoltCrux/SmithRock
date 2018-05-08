
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Route } from './models/route.model';
// import { ALBUMS } from './mock-albums';




@Injectable()
export class ClimbingRoutesService {

  getRoutes(){
    console.log(this.routesArray);
     return this.routesArray;

   }

  routesArray: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.routesArray = database.list('routes');
  }

}
