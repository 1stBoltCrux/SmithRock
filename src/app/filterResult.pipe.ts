import {Pipe, PipeTransform} from '@angular/core';
import { Route } from './models/route.model';

@Pipe({
  name: "filterGrade",
  pure: false
})

export class FilterResultPipe implements PipeTransform {

  transform(input: Route[], desiredGrade){
    let filterResult: Route[] = [];
    for (let i = 0; i < input.length; i++) {
      if(input[i].grade <= desiredGrade){
        filterResult.push(input[i]);
      }
    }
    return filterResult;
  }
}
