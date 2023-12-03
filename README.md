# StarwarsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

# StarwarsApp

This project was created to use some endpoints of [swapi](https://swapi.dev/documentation).

## Endpoints and api requests used in this project

### 1. All Characters

```
getAllPeople(): Observable<any[]> {
    return this.http.get<any>('https://swapi.dev/api/people').pipe(
      expand((apiResponse) =>
        apiResponse.next ? this.http.get<any>(apiResponse.next) : EMPTY
      ),
      map((apiResponse: any) => apiResponse.results),
      reduce((accData, data) => accData.concat(data), [])
    );
  }

```

### 2. All Species

```
getAllSpecies(): Observable<any[]> {
    return this.http.get<any>('https://swapi.dev/api/species/').pipe(
      expand((apiResponse) =>
        apiResponse.next ? this.http.get<any>(apiResponse.next) : EMPTY
      ),
      map((apiResponse: any) => apiResponse.results),
      reduce((accData, data) => accData.concat(data), [])
    );
  }

```

### 3. All Vehicles

```
getAllVehicles(): Observable<any[]> {
    return this.http.get<any>('https://swapi.dev/api/vehicles/').pipe(
      expand((apiResponse) =>
        apiResponse.next ? this.http.get<any>(apiResponse.next) : EMPTY
      ),
      map((apiResponse: any) => apiResponse.results),
      reduce((accData, data) => accData.concat(data), [])
    );
}

```

### 4. All Films

```
getAllFilms() {
    return this.http.get<any>('https://swapi.dev/api/films/');
  }

```
