import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  currentImage$!: Observable<string>;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    const interval = 2000;
    this.currentImage$ = this.imageService.getImageObservable(interval);
  }
}
