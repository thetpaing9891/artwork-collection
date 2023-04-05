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
  @Output() styleTitlesEvent = new EventEmitter<string[]>();
  @Output() sortedEvent = new EventEmitter<string>();

  @Input() styleTitlesList: Props[] = [];
  @Input() styleTitles: string[] = [];

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

  modelSort: string = '';

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.styleTitlesEvent.emit(this.styleTitles);
    const value = this.sortData.find((v) => {
      if (v.name === this.modelSort) {
        return v;
      }
      return;
    }) as Props;
    if (value) this.sortedEvent.emit(value.value);
  }

  selectLabel(option: Props): string {
    return option.name;
  }

  selectValue(option: Props): string {
    return option.value;
  }
}
