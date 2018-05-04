import { Component, Input } from '@angular/core';
import { Route } from '../models/route.model'

@Component({
  selector: 'route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent {
  @Input() childRouteList: Route[];



}
