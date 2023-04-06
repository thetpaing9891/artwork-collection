import { TestBed } from '@angular/core/testing';

import { ArtworkService } from './artwork.service';
import { APP_CONFIG, APP_SERVICE_CONFIG } from '../config/appconfig.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ArtworkService', () => {
  let service: ArtworkService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        HttpClient,
        ArtworkService,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: APP_CONFIG,
        },
      ],
    });
    service = TestBed.inject(ArtworkService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should return data from HTTP request', () => {
    const testData = {
      id: 201968,
      title: '3 volumes: 1 foot x 1 foot x 1 foot; 1 foot x 1 foot x 2 foot; 1 foot x 1 foot x 3 foot',
      thumbnail: {},
      date_start: 1998,
      date_end: 1998,
      place_of_origin: null,
      artist_title: 'stanley brouwn',
      style_titles: [],
      material_titles: [],
      image_id: null,
    };
    const params = {
      page: 1,
      limit: 2,
    };
    service.getArtWorks(params).subscribe((data) => {
      expect(data).toContain(testData);
    });
    const fields: string =
      'artist_title,style_titles,material_titles,place_of_origin,date_start,date_end,material_titles,image_id,thumbnail,title,id,dimensions,credit_line,artist_display,date_display';
    const urlWithParams = `${APP_CONFIG.apiUrl}/artworks?page=1&limit=2&fields=${fields}`;
    const req = httpTestingController.expectOne(urlWithParams);
    expect(req.request.method).toEqual('GET');
    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
