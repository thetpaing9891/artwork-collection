import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { FormsModule } from '@angular/forms';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [NxFormfieldModule, NxDropdownModule, NxModalModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create filter component', () => {
    const fixture = TestBed.createComponent(FilterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('check dropdown label in filter comp', () => {
    const fixture = TestBed.createComponent(FilterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label.nx-formfield__label span').textContent).toContain('Style');
  });

  it('check dropdown sort values', () => {
    expect(component.sortData).toContain({ name: 'Date', value: 'date_start' });
  });
});
