import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  title: string = 'Artwork Collection';
  constructor() {}

  ngDoCheck(): void {}

  ngOnInit(): void {}
}
