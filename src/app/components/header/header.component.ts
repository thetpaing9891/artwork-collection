import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  title: string = '';
  constructor() {}

  ngDoCheck(): void {
    console.log('ng Do check');
  }

  ngOnInit(): void {
    console.log('ng Do check');
  }
}
