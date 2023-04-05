import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ArtWork, ArtworkResponse, Pagination } from 'src/app/models/artwork';
import { ArtworkService } from 'src/app/services/artwork.service';
import { sortBy } from 'lodash';
import { catchError, throwError } from 'rxjs';
import { getFilterData, getStyleTitles, stopLoading } from 'src/app/utils';

interface Props {
  name: string;
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ArtworkService],
})
export class HomeComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  artWorkList: ArtWork[] = [];
  filterArtWorkList: ArtWork[] = [];

  paginationObj = Object() as Pagination;
  styleTitlesList: Props[] = [];

  // API error
  errorMessage: string | undefined;

  // Pagination params
  page: number = 1;
  limit: number = 8;

  // Loading state
  isLoading: boolean = false;

  // This is style titles dropdown name
  styleTitles: string[] = [];
  sorted: string = '';

  constructor(private artWorkService: ArtworkService) {}

  $artWork = this.artWorkService.getArtWorks({ page: this.page, limit: this.limit }).pipe();

  ngOnInit(): void {
    this.getArtWorks();
  }

  ngDoCheck(): void {
    // check form changes
    if (this.styleTitles.length > 0) {
      const filterData = getFilterData(this.artWorkList, this.styleTitles);
      this.filterArtWorkList =
        this.sorted.length > 0 ? (sortBy(Object.values(filterData), [this.sorted]) as ArtWork[]) : filterData;
    } else {
      this.filterArtWorkList = this.artWorkList;
    }

    // check sorting
    if (this.sorted.length > 0) {
      const currentData = this.styleTitles.length > 0 ? this.filterArtWorkList : this.artWorkList;
      const filterData = sortBy(Object.values(currentData), [this.sorted]) as ArtWork[];
      this.filterArtWorkList = filterData;
    }
  }

  getArtWorks(): void {
    this.isLoading = true;
    this.artWorkService
      .getArtWorks({ page: this.page, limit: this.limit })
      .pipe(
        catchError((error) => {
          console.error(error);
          this.errorMessage = 'An error occurred. Please try again later.';
          this.isLoading = stopLoading() as unknown as boolean;
          return throwError(error);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.artWorkList = res.data;
          this.filterArtWorkList = res.data;
          this.paginationObj = res.pagination;
          this.styleTitlesList = getStyleTitles(res.data);
        }
        this.isLoading = stopLoading() as unknown as boolean;
      });
  }

  ngAfterViewInit() {
    // this.headerComponent.title = 'Artwork Collection';
  }

  filterByStyle(names: string[]) {
    this.styleTitles = names;
  }

  filterBySort(v: string) {
    this.sorted = v;
  }

  onChangePager(page: number) {
    this.page = page;
    this.styleTitles = [];
    this.getArtWorks();
  }
}
