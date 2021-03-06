import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { CardListingComponent } from './components/card-listing/card-listing.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'character/:id', component: CardDetailsComponent },
  { path: 'characters', component: CardListingComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
