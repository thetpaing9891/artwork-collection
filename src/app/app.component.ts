import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('home', { read: ViewContainerRef }) homeViewRef!: ViewContainerRef;
  // @ViewChild('detail', { read: ViewContainerRef }) detailViewRef!: ViewContainerRef;

  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit(): void {}
}
