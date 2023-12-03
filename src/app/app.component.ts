import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiServiceService } from './services/api-service.service';
import { People } from './interfaces/my-types';
import { FiltersComponent } from './components/filters/filters.component';
import { DetailsComponent } from './components/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, FiltersComponent, DetailsComponent],
})
export class AppComponent implements OnInit {
  title = 'starwars-app';
  filteredFilm: string = '';
  filteredSpecies: string = '';
  peopleData: Array<People> = [];
  characterDetail!: People;
  filteredData: People[] = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getAllPeople().subscribe({
      next: (res: any) => {
        this.peopleData = res;
        this.filteredData = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  selectedFilm(film: string) {
    this.filteredFilm = film;
    console.log(film);
    this.setFilteredValue();
  }
  selectedSpecies(species: string) {
    this.filteredSpecies = species;
    this.setFilteredValue();
  }

  setFilteredValue() {
    if (this.filteredFilm && this.filteredSpecies) {
      this.filteredData = this.peopleData.filter(
        (item) =>
          item.species?.includes(this.filteredSpecies) &&
          item.films?.includes(this.filteredFilm)
      );
    } else if (this.filteredFilm) {
      this.filteredData = this.peopleData.filter((item) =>
        item.films?.includes(this.filteredFilm)
      );
    } else if (this.filteredSpecies) {
      this.filteredData = this.peopleData.filter((item) =>
        item.species?.includes(this.filteredSpecies)
      );
    } else {
      this.filteredData = this.peopleData;
    }
  }

  getDetail(character: People) {
    this.characterDetail = character;
  }
}
// Name: Han Solo
// Spezies: Mensch
// Filme: Episode IV, Episode V, Episode VI, Episode VII
// Raumschiffe: Millennium, Falke, Imperiale Raumfähre.
