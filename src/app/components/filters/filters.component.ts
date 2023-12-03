import { Component, EventEmitter, Output } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Film, Species } from '../../interfaces/my-types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Output() selectedFilmValue = new EventEmitter<string>();
  @Output() selectedSpeciesValue = new EventEmitter<string>();
  filmList: Film[] = [];
  speciesList: Species[] = [];
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.filmList = [];
    this.speciesList = [];
    this.apiService.getAllFilms().subscribe({
      next: (res) => {
        this.filmList = res.results;
        this.apiService.setFilmList(res.results);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.apiService.getAllSpecies().subscribe({
      next: (res) => {
        this.speciesList = res;
        this.apiService.setSpeciesList(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.apiService.getAllVehicles().subscribe({
      next: (res) => {
        this.apiService.setVehiclesList(res);
        console.log('vehicles', res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onFilmChange(event: any) {
    this.selectedFilmValue.emit((event.target as HTMLSelectElement).value);
    console.log((event.target as HTMLSelectElement).value);
  }
  onSpeciesChange(event: any) {
    this.selectedSpeciesValue.emit((event.target as HTMLSelectElement).value);
    console.log((event.target as HTMLSelectElement).value);
  }
}
