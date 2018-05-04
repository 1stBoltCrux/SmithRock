import { Component } from '@angular/core';
import { Route } from './models/route.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

masterRouteList: Route[] = [
  new Route('Snuffy Smith', 15, 'Sport', 80, 'A knob and edge climb on a small pinnacle with a contrived start and enjoyable face climb finish', 'The Fourth Horseman'),
  new Route('Taiwan On', 20, 'Sport', 60, 'An enjoyable arete climb with tricky moves and a crux near the fourth bolt', 'The Fourth Horseman'),
  new Route('No Golf Shoes', 20, 'Sport', 60, "This route gets most of it's rating from it's difficult bouldery start.", 'The Fourth Horseman'),
  new Route('Tuff It Out', 19, 'Sport', 70, 'A bouldery start on a honeycomb overhang then on to easy moves on low quality rock', 'The Fourth Horseman'),
  new Route('Pack Animal Direct', 19, 'Trad', 40, 'A 30 ft right facing dihedral capped by a small roof, a thought provoking stem climb that feels hard for the grade.', 'The Fourth Horseman')
];

}
