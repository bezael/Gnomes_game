import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardListingComponent } from './components/card-listing/card-listing.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        CardListingComponent,
        CardDetailsComponent,
        PageNotFoundComponent

      ],
    }).compileComponents();
  }));
});
