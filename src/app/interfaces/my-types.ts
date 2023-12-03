export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species?: string[] | null;
  vehicles?: string[] | null;
  starships?: string[] | null;
  created: string;
  edited: string;
  url: string;
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters?: string[] | null;
  planets?: string[] | null;
  starships?: string[] | null;
  vehicles?: string[] | null;
  species?: string[] | null;
  created: string;
  edited: string;
  url: string;
}

export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld?: string | null;
  language: string;
  people?: string[] | null;
  films?: string[] | null;
  created: string;
  edited: string;
  url: string;
}
export interface CharacterDetail {
  name: string;
  films: string[];
  vehicles: string[];
  species: string[];
}
