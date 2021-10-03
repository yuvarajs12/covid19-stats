import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoronaService implements OnInit {

  url_countrywise = 'https://disease.sh/v3/covid-19/countries'
  url_us_statewise = 'https://disease.sh/v3/covid-19/states'
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getDataCountryWise()
  }

  getDataCountryWise(): Observable<any>{
    return this.http.get(this.url_countrywise)
  }
}