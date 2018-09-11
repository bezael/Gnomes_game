import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
  });
  service = TestBed.get(DataService);
  it('should retrieve posts from the API via GET', () => {
    const gnomes = [
      {
        "id": 0,
        "name": "Tobus Quickwhistle",
        "thumbnail": "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        "age": 306,
        "weight": 39.065952,
        "height": 107.75835,
        "hair_color": "Pink",
        "professions": [
          "Metalworker",
          "Woodcarver",
          "Stonecarver",
          " Tinker",
          "Tailor",
          "Potter"
        ],
        "friends": [
          "Cogwitz Chillwidget",
          "Tinadette Chillbuster"
        ]
      }
    ];
  });
});