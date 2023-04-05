import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ArtWork } from 'src/app/models/artwork';

interface Props {
  name: string;
  value: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, DoCheck {
  @Output() filterDataEvent = new EventEmitter<string[]>();
  @Output() sortDataEvent = new EventEmitter<string>();

  @Input() style_titles: Props[] = [];

  sortData = [
    {
      name: 'Name',
      value: 'title',
    },
    {
      name: 'Artist',
      value: 'artist_title',
    },
    {
      name: 'Date',
      value: 'date_start',
    },
  ];

  modelStyleTitles: string[] = [];
  modelSort: string = '';

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.filterDataEvent.emit(this.modelStyleTitles);
    const value = this.sortData.find((v) => {
      if (v.name === this.modelSort) {
        return v;
      }
      return;
    }) as Props;
    console.log('Value', value && value.value);
    if (value) this.sortDataEvent.emit(value.value);
  }

  selectLabel(option: Props): string {
    return option.name;
  }

  selectValue(option: Props): string {
    return option.value;
  }
}
