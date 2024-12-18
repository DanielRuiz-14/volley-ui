import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralStats } from '../../models/GeneralStats.model';

@Injectable({
  providedIn: 'root'
})
export class BasicStatsService {

  private basicStatsUrl = 'http://localhost:8081/basic';

  constructor(private http: HttpClient) { }

  getBasicStatsBy(player_id: string): Observable<GeneralStats>{
    console.log('playerId: ' + player_id);
    return this.http.get<GeneralStats>(`${this.basicStatsUrl}?playerId=${player_id}`);
  }


}
