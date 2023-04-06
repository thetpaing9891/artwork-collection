import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtworkService } from 'src/app/services/artwork.service';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/config/appconfig.service';
import { OverlayComponent } from 'src/app/components/overlay/overlay.component';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailComponent, HeaderComponent, OverlayComponent],
      imports: [RouterModule, BrowserModule, HttpClientModule, RouterTestingModule, NxSpinnerModule],
      providers: [
        ArtworkService,
        HttpClient,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: APP_CONFIG,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
