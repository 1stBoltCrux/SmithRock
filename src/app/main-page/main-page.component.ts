import { Component, OnInit } from '@angular/core';
import { Route } from '../models/route.model'
import { News } from '../models/news.model'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  masterNewsList: News[] = [
    new News('Over 250 lend their muscles to the 26th Smith Rock Spring Thing', 'Marie Smith', 'Starting at 7:30, they lined up at the registration tables to get on work teams to help restore trails, build retaining walls, weed and plant, pick up trash, and more. Over 250 volunteers of all ages, mostly from the rock climbing community came from local areas, but also from over the mountain passes and even other states. Their single focus? To give back to a park they love. Through early morning freezing temperatures, to baking in the sun restoring trails, hauling materials up and down steep trails, and then getting poured on from rain, they smiled and worked tirelessly in teams for hours.', 'Following a series of announcements from the park and local volunteer organizations, the volunteers cheered as a slide show capturing the work of the day detailed their effort', 'Upon hearing this news the first time meeting Alex, I immediately started hassling him about his risky-bold effort.', '../assets/smithclimber1.jpg' )
  ];

  }

}
