import { Component } from '@angular/core';
import { Route } from './models/route.model'
import { News } from './models/news.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

masterRouteList: Route[] = [
  new Route('Snuffy Smith', 15, 'Sport', 80, 'A knob and edge climb on a small pinnacle with a contrived start and enjoyable face climb finish', 'The Fourth Horseman', "../assets/3star.png"),
  new Route('Taiwan On', 20, 'Sport', 60, 'An enjoyable arete climb with tricky moves and a crux near the fourth bolt', 'The Fourth Horseman', "../assets/4star.png"),
  new Route('No Golf Shoes', 20, 'Sport', 60, "This route gets most of it's rating from it's difficult bouldery start.", 'The Fourth Horseman', "../assets/3star.png"),
  new Route('Tuff It Out', 19, 'Sport', 70, 'A bouldery start on a honeycomb overhang then on to easy moves on low quality rock', 'The Fourth Horseman', "../assets/2star.png"),
  new Route('Pack Animal Direct', 19, 'Trad', 40, 'A 30 ft right facing dihedral capped by a small roof, a thought provoking stem climb that feels hard for the grade.', 'The Fourth Horseman', "../assets/5star.png")
];

masterNewsList: News[] = [
  new News('Over 250 lend their muscles to the 26th Smith Rock Spring Thing', 'Marie Smith', 'Starting at 7:30, they lined up at the registration tables to get on work teams to help restore trails, build retaining walls, weed and plant, pick up trash, and more. Over 250 volunteers of all ages, mostly from the rock climbing community came from local areas, but also from over the mountain passes and even other states. Their single focus? To give back to a park they love. Through early morning freezing temperatures, to baking in the sun restoring trails, hauling materials up and down steep trails, and then getting poured on from rain, they smiled and worked tirelessly in teams for hours.', 'Following a series of announcements from the park and local volunteer organizations, the volunteers cheered as a slide show capturing the work of the day detailed their effort', 'Upon hearing this news the first time meeting Alex, I immediately started hassling him about his risky-bold effort.', '../assets/smithclimber1.jpg' )
];

}
