import { Component, Input } from '@angular/core';
import { News } from '../models/news.model'

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
    @Input() childNewsList: News[];


}
