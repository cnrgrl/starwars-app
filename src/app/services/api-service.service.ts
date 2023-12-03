import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, expand, reduce, map, EMPTY } from 'rxjs';
import { Film, Species, Vehicles } from '../interfaces/my-types';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  filmList: Film[] = [];
  speciesList: Species[] = [];
  vehiclesList: Vehicles[] = [];

  constructor(public http: HttpClient) {}

  getAllPeople(): Observable<any[]> {
    return this.http.get<any>('https://swapi.dev/api/people').pipe(
      expand((apiResponse) =>
        apiResponse.next ? this.http.get<any>(apiResponse.next) : EMPTY
      ),
      map((apiResponse: any) => apiResponse.results),
      reduce((accData, data) => accData.concat(data), [])
    );
  }

  getAllSpecies(): Observable<any[]> {
    return this.http.get<any>('https://swapi.dev/api/species/').pipe(
      expand((apiResponse) =>
        apiResponse.next ? this.http.get<any>(apiResponse.next) : EMPTY
      ),
      map((apiResponse: any) => apiResponse.results),
      reduce((accData, data) => accData.concat(data), [])
    );
  }

  getAllVehicles(): Observable<any[]> {
    return this.http.get<any>('https://swapi.dev/api/vehicles/').pipe(
      expand((apiResponse) =>
        apiResponse.next ? this.http.get<any>(apiResponse.next) : EMPTY
      ),
      map((apiResponse: any) => apiResponse.results),
      reduce((accData, data) => accData.concat(data), [])
    );
  }

  getAllFilms() {
    return this.http.get<any>('https://swapi.dev/api/films/');
  }

  setFilmList(filmList: Film[]) {
    this.filmList = filmList;
  }
  setSpeciesList(speciesList: Species[]) {
    this.speciesList = speciesList;
  }
  setVehiclesList(vehiclesList: Vehicles[]) {
    this.vehiclesList = vehiclesList;
  }

  findFilmNamesByUrl(url: string): string {
    const film: Film | undefined = this.filmList.find(
      (film) => film.url === url
    );
    if (film !== undefined) {
      return film?.title;
    }
    return '';
  }
  findSpeciesNamesByUrl(url: string): string {
    const species: Species | undefined = this.speciesList.find(
      (species) => species.url === url
    );
    if (species !== undefined) {
      return species?.name;
    }
    return '';
  }

  findVehicleNamesByUrl(url: string): string {
    const vehicle: Vehicles | undefined = this.vehiclesList.find(
      (vehicle) => vehicle.url === url
    );
    if (vehicle !== undefined) {
      return vehicle?.name;
    }
    return '';
  }
}
