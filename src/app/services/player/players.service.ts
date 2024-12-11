import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

// We will be using this one for the moment
  private PLAYER_SERVICE_URL = 'http://localhost:8080/player' 
  private GET_ALL_PATH = '/all' 

  constructor(private http: HttpClient) { }

  // TODO: Update this to load some players while writing the name (when we have hundreds or thousands of player)
  // we won't want to load all the players
  getAllNames(): Observable<string[]>{
    return this.http.get<Player[]>(this.PLAYER_SERVICE_URL + this.GET_ALL_PATH).pipe(
      map((players) => players.map((player) => player.firstName))
    );
  }

}
