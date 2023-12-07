import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images: string[] = [
    'as.jpg',
    'cv.jpg',
    'ho.png',
    'cv_profile_1.png',
    'cv_profile_2.png',
  ];

  getImageObservable(interval: number): Observable<string> {
    return timer(0, interval).pipe(
      map((index) => `assets/images/${this.images[index % this.images.length]}`)
    );
  }
}
