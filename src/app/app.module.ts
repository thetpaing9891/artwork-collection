import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NxAccordionModule } from '@aposin/ng-aquila/accordion';
import { HeaderComponent } from './components/header/header.component';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { PaginationComponent } from './components/pagination/pagination.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { FilterComponent } from './components/filter/filter.component';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './config/appconfig.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PaginationComponent,
    OverlayComponent,
    FilterComponent,
    ArtworkComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    NxAccordionModule,
    NxGridModule,
    NxHeadlineModule,
    NxPaginationModule,
    NxCardModule,
    NxSpinnerModule,
    NxDropdownModule,
    NxFormfieldModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
