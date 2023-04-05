import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pagination } from 'src/app/models/artwork';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() pagination = Object() as Pagination;
  @Output() currentPage = new EventEmitter<number>();

  ngOnInit(): void {}

  count = this.pagination.total_pages;
  page = this.pagination.current_page;
  perPage = this.pagination.limit;

  ngOnChanges(changes: SimpleChanges): void {
    this.count = changes?.['pagination'].currentValue.total_pages;
    this.page = changes?.['pagination'].currentValue.current_page;
    this.perPage = changes?.['pagination'].currentValue.limit;
  }

  prevPage() {
    this.page--;
    this.currentPage.emit(this.page);
  }

  nextPage() {
    this.page++;
    this.currentPage.emit(this.page);
  }

  goToPage(n: number) {
    this.page = n;
    this.currentPage.emit(this.page);
  }
}
