import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.data?.['preload']){
      console.log('preloading', route.path);
      return fn();
    }else{
      console.log('no preloading');
      return EMPTY;
    }
  }
}
