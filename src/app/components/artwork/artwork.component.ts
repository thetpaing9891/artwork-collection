import { Component, Input, OnInit } from '@angular/core';
import { ArtWork } from 'src/app/models/artwork';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent implements OnInit {
  @Input() artworks: ArtWork[] = [];

  ngOnInit(): void {}

  checkDateMatches(start: number, end: number) {
    if (start === end) {
      return start;
    }
    return `${start} - ${end}`;
  }
}
