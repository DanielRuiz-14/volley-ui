import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../models/player.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  // We will be using this one for the moment
  private playersUrl = environment.backends.players
  private PLAYER_PATH = '/player'
  private GET_ALL_PATH = '/all'

  constructor(private http: HttpClient) { }

  // TODO: Update this to load some players while writing the name (when we have hundreds or thousands of players)
  // we won't want to load all the players
  getAllNames(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl + this.PLAYER_PATH + this.GET_ALL_PATH);
  }

}
