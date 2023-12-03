import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CharacterDetail, People } from '../../interfaces/my-types';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnChanges {
  @Input() person!: People;
  isShown = false;
  character: CharacterDetail = {
    name: '',
    films: [],
    species: [],
    vehicles: [],
  };

  constructor(private apiService: ApiServiceService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['person']) {
      if (changes['person'].currentValue !== undefined) {
        this.character.name = this.person.name;

        // this.character.species = [];
        // this.character.vehicles = [];
        // this.character.films = [];
        this.setCharacterFilmName();
        this.setCharacterSpeciesName();
        this.isShown = true;
      } else {
        this.isShown = false;
      }
    }
  }
  setCharacterFilmName() {
    this.character.films = [];
    if (this.person) {
      // console.log(this.person.films);
      this.person.films.forEach((filmUrl) => {
        const name = this.apiService.findFilmNamesByUrl(filmUrl);
        this.character.films.push(name);
      });
    }
  }

  setCharacterSpeciesName() {
    this.character.species = [];
    if (this.person.species && this.person.species.length > 0) {
      this.person.species?.forEach((speciesUrl) => {
        const name = this.apiService.findSpeciesNamesByUrl(speciesUrl);
        this.character.species.push(name);
        console.log(name);
      });
    }
  }
}
