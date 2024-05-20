export interface Movie {
    name: string;
    onAirFrom: Date;
    onAirTo: Date;
    actorNames: string[];
    allGenres: string[];
    hasExpired: boolean;
  }