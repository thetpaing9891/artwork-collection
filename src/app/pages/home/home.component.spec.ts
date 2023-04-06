import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/config/appconfig.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArtworkService } from 'src/app/services/artwork.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { OverlayComponent } from 'src/app/components/overlay/overlay.component';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, PaginationComponent, OverlayComponent],
      imports: [HttpClientTestingModule, HttpClientModule, BrowserModule, NxPaginationModule, NxSpinnerModule],
      providers: [
        ArtworkService,
        HttpClient,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: APP_CONFIG,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
