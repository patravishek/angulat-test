import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public countryList: CountryList[];
  public router: Router;

  constructor(http: HttpClient) {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': '3359d596-be19-4ee9-9451-e55e1140bd9f'
    });
    
    http.get<CountryList[]>('https://www.pringleapi.com/api/Country', { headers: httpOptions }).subscribe(result => {
      this.countryList = result;
    }, error => console.error(error));

  }

}

interface CountryList {
  ID: number;
  CountryCode: string;
  Name: string;
  NiceName: string;
  ISO3: string;
  NumCode: number;
  PhoneCode: number;
  CultureInfo: string;
}
