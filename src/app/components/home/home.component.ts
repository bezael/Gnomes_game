import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loader: NgxSpinnerService) { }

  ngOnInit() {
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
    }, 2500);
  }

}
