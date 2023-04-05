import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ArtWork } from 'src/app/models/artwork';
import { ArtworkService } from 'src/app/services/artwork.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  // artWorkService = new ArtworkService();

  artWorkList: ArtWork[] = [];

  constructor(private artWorkService: ArtworkService) {}

  ngOnInit(): void {
    this.artWorkList = this.artWorkService.getArtWorks();
  }

  ngDoCheck(): void {
    console.log('Do check');
  }

  ngAfterViewInit() {
    // this.headerComponent.title = 'Artwork Collection';
  }
}
