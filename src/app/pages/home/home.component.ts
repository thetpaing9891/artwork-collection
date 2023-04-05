import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ArtWork, ArtworkResponse, Pagination } from 'src/app/models/artwork';
import { ArtworkService } from 'src/app/services/artwork.service';
import { sortBy } from 'lodash';

interface Props {
  name: string;
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  // artWorkService = new ArtworkService();

  artWorkList: ArtWork[] = [];
  filteredData: ArtWork[] = [];
  paginationObjs = Object() as Pagination;
  style_titles: Props[] = [];

  selectedStyleTitles: string[] = [];
  selectedSorted: string = '';

  constructor(private artWorkService: ArtworkService) {}

  ngOnInit(): void {
    const artWorks = this.artWorkService.getArtWorks();
    this.artWorkList = artWorks.data;
    this.filteredData = artWorks.data;
    this.paginationObjs = artWorks.pagination;
    this.style_titles = this.getStyletitles(artWorks.data);
  }

  ngDoCheck(): void {
    if (this.selectedStyleTitles.length > 0) {
      const filterData = this.artWorkList.filter((v: ArtWork) => {
        const data = v.style_titles.filter((a) => this.selectedStyleTitles.includes(a));
        if (data.length > 0) return data;
        return;
      });
      this.filteredData =
        this.selectedSorted.length > 0
          ? (sortBy(Object.values(filterData), [this.selectedSorted]) as ArtWork[])
          : filterData;
    } else {
      this.filteredData = this.artWorkList;
    }

    if (this.selectedSorted.length > 0) {
      const currentData = this.selectedStyleTitles.length > 0 ? this.filteredData : this.artWorkList;
      const filterData = sortBy(Object.values(currentData), [this.selectedSorted]) as ArtWork[];
      this.filteredData = filterData;
    }
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'Artwork Collection';
  }

  filterByStyle(names: string[]) {
    this.selectedStyleTitles = names;
  }

  filterBySort(v: string) {
    this.selectedSorted = v;
  }

  getStyletitles(data: ArtWork[]) {
    const arrObj: string[] = [];
    data.map((v: ArtWork) => {
      if (v.style_titles.length > 0) {
        const str = v.style_titles.toString();
        const arr = str.split(',');
        if (arr.length > 1) {
          arr.map((d: string) => arrObj.push(d));
        } else {
          arrObj.push(str);
        }
      }
    });
    const uniqueElements = [...new Set(arrObj)];
    return uniqueElements.map((element) => {
      const c = arrObj.filter((el) => el === element).length;
      const obj = {
        value: element,
        name: `${element} (${c})`,
      };
      return obj;
    });
  }
}
