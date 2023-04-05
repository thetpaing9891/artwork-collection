import { Component } from '@angular/core';

interface MyOption {
  name: string;
  id: number;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  options: string[] = ['Apple', 'Orange', 'Plum', 'Cherry'];

  complexOptions: MyOption[] = [
    {
      name: 'Apple',
      id: 1,
    },
    {
      name: 'Orange',
      id: 2,
    },
    {
      name: 'Plum',
      id: 3,
    },
    {
      name: 'Cherry',
      id: 4,
    },
  ];

  selectLabel(option: MyOption): string {
    return option.name;
  }

  selectValue(option: MyOption): number {
    return option.id;
  }
}
