import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CharacterInterface } from '../../interfaces/character';
@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.scss']
})
export class CardListingComponent implements OnInit {

  public cardsListing: Array<CharacterInterface>;
  public filter_age: string = '';
  public p: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.get_characters();
  }

  get_characters() {
    this.dataService.get_data_from_api().subscribe((data: any) => this.cardsListing = data.Brastlewark,
      error => console.log(error));
  }

}
