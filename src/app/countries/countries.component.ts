import { Component, OnInit } from '@angular/core';
import { CountriesServices } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any;
  countryName: string = "";

  constructor(public country:CountriesServices) { }

  ngOnInit(): void {
    this.country.getCountries().subscribe((data) => { this.countries = data; });
  }

}
