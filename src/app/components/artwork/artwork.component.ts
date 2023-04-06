import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ArtWork } from 'src/app/models/artwork';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent implements OnInit {
  @Input() artworks: ArtWork[] = [];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  checkDateMatches(start: number, end: number) {
    if (start === end) {
      return start;
    }
    return `${start} - ${end}`;
  }

  goDetail(id: number) {
    this.route.navigateByUrl(`/detail/${id}`);
  }
}
