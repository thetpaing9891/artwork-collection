import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverlayComponent],
      imports: [NxSpinnerModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create overlay comp', () => {
    const fixture = TestBed.createComponent(OverlayComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
