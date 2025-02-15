import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsserice: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsserice.gifList;
  }
}
