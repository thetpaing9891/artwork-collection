import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('home', { read: ViewContainerRef }) homeViewRef!: ViewContainerRef;
  constructor() {}
  ngAfterViewInit(): void {
    const homeContainerRef = this.homeViewRef.createComponent(HomeComponent);
  }
}
