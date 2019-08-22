import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute  } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  public _httpClient: HttpClient;
  public countryCode: string;
  public baseUrl: string;
  public locationPos: Location;
  public SearchNotClicked: Boolean;
  public _route:ActivatedRoute;

  constructor(http: HttpClient, private route: ActivatedRoute ) {
    this._httpClient = http;
    this._route = route;
    this.SearchNotClicked = true;
  }

  // ngOnInit() {
  //   this.countryCode = this._route.snapshot.queryParamMap.get('countryCode');
  // }
  SearchByPostCode(postCode: string) {
    this.SearchNotClicked = false;
    var apiUrl = 'https://www.pringleapi.com/api/location?postalCode=' + postCode + '&countryCode=' + this.countryCode;
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': '3359d596-be19-4ee9-9451-e55e1140bd9f'
    });

    this._httpClient.get<Location>(this.baseUrl + apiUrl, { headers: httpOptions }).subscribe(result => {
      this.locationPos = result;
    }, error => console.error(error));

  }
}

interface Location {
  IPAddress: string;
  CountryCode: string;
  CountryName: string;
  PostalCode: string;
  City: string;
  StateAbbr: string;
  StateName: string;
  CountyProvinceAbbr: string;
  CountyProvinceName: string;
  Community: string;
  CommunityAbbr: string;
  Latitude: number;
  Longitude: number;
  TimeZone: string;
  MetroCode: number;
}

