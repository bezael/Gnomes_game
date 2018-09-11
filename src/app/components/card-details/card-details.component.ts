import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CharacterInterface } from '../../interfaces/character';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  id_character: number;
  character: any = {
    id: '',
    name: '',
    thumbnail: '',
    age: '',
    weight: '',
    height: '',
    hair_color: '',
    professions: '',
    friends: ''
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.get_characters();
  }

  get_param() {
    this.route.params
      .subscribe((params: Params) => {
        this.id_character = + params['id'];
        this.character = this.get_character(this.id_character);
      });
  }
  get_characters() {
    this.dataService.get_data_from_api().subscribe((data: any) => {
      this.character = data.Brastlewark;
      this.get_param();
    }, (error) => console.log('Error ${error}'));
  }
  get_character(index: number) {
    return this.character[index];
  }

}
