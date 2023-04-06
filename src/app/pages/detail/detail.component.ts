import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ArtWork } from 'src/app/models/artwork';
import { ArtworkService } from 'src/app/services/artwork.service';
import { stopLoading } from 'src/app/utils';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  itemId: number | undefined;
  isLoading: boolean = false;

  artWorkDetail: ArtWork | undefined;
  constructor(private route: ActivatedRoute, private artWorkService: ArtworkService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.itemId = +params['id']; // convert string to number
      this.getArtWork(this.itemId);
    });
  }

  getArtWork(id: number): void {
    this.isLoading = true;
    this.artWorkService
      .getArtWorkById(id)
      .pipe(
        catchError((error) => {
          console.error(error);
          //this.errorMessage = 'An error occurred. Please try again later.';
          this.isLoading = stopLoading() as unknown as boolean;
          return throwError(error);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.artWorkDetail = res.data;
        }
        this.isLoading = stopLoading() as unknown as boolean;
      });
  }
}
