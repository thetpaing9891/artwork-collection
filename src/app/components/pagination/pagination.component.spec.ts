import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [NxPaginationModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create pagination comp', () => {
    const fixture = TestBed.createComponent(PaginationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should render', () => {
  //   const fixture = TestBed.createComponent(PaginationComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('nav.nx-pagination').textContent).toContain('1');
  // });
});
