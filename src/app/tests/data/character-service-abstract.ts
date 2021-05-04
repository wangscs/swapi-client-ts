import { Observable, of } from "rxjs";
import Character from "src/app/models/Character";
import ApiResponse from "src/app/shared/ApiResponse";

import characters from "./Character.json";

import {convertCharacter} from "../../shared/utilities";

export abstract class CharacterServiceAbstract {
    public abstract getCharacters() : Observable<ApiResponse>;
    public abstract getCharacter() : Observable<Character>;
}

export class MockCharacterService implements CharacterServiceAbstract {
    public getCharacters() : Observable<ApiResponse> {
        return of({count: 82, next: "", previous: "", results: [...characters]})
    }

    public getCharacter() : Observable<Character> {
        return of(convertCharacter(characters[0]));
    }
}