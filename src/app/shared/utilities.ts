import Character from "../models/Character";

export interface jsonCharacter {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string,
}

export function convertCharacter (character: jsonCharacter): Character {
    return {
      name: character.name,
      height: character.height,
      mass: character.mass,
      hairColor: character.hair_color,
      skinColor: character.skin_color,
      eyeColor: character.eye_color,
      birthYear: character.birth_year,
      gender: character.gender,
      homeworld: character.homeworld,
      films: character.films,
      species: character.species,
      vehicles: character.vehicles,
      starships: character.starships,
      created: character.created,
      edited: character.edited,
      url: character.url,
    }
}