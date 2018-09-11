import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { CharacterInterface } from '../interfaces/character';
@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  get_data_from_api() {
    const URL_API = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
    return this._http.get<CharacterInterface>(URL_API);
  }


}
