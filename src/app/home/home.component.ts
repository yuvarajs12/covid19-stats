import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoronaService } from '../common/corona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  countrywisedata: any = {};
  countries: any = [];

  constructor(private cs: CoronaService) { }

  ngOnInit(): void {
    this.getCountryWise()
    //this.getCountries()
  }

  getCountryWise() {
    this.cs.getDataCountryWise().subscribe(data => {
      this.countrywisedata = data;
    },
      err => {
        console.log(err)
      })
  }

  chooseCountry(e: any) {
    let singleCountry = e.target.value;
    this.countrywisedata = this.countrywisedata.filter((a: { country: any; }) => a.country=="Albania")
    console.log(this.countrywisedata);
  }
}
