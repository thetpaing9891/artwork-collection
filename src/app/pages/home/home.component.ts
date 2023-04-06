import { AfterContentChecked, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { ArtWork, Pagination } from 'src/app/models/artwork';
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
export class HomeComponent implements OnInit, AfterContentChecked, DoCheck {
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

  constructor(private artWorkService: ArtworkService, private changeDetector: ChangeDetectorRef) {}
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.getArtWorks();
  }

  ngDoCheck(): void {
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
