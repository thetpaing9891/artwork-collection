import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkResponse, DetailResponse, ReqParams } from '../models/artwork';
import { APP_SERVICE_CONFIG } from '../config/appconfig.service';
import { AppConfig } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {}
  fields: string =
    'artist_title,style_titles,material_titles,place_of_origin,date_start,date_end,material_titles,image_id,thumbnail,title,id,dimensions,credit_line,artist_display,date_display';
  getArtWorks(req: ReqParams): Observable<ArtworkResponse> {
    const params = {
      page: req.page,
      limit: req.limit,
      fields: this.fields,
    };

    return this.http.get<ArtworkResponse>(`${this.config.apiUrl}/artworks`, { params });
  }

  getArtWorkById(id: number): Observable<DetailResponse> {
    const params = {
      fields: this.fields,
    };
    return this.http.get<DetailResponse>(`${this.config.apiUrl}/artworks/${id}`, { params });
  }
}
