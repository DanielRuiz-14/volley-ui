import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralStats } from '../../models/generalStats.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicStatsService {

  private statisticsUrl = environment.backends.statistics;
  private BASIC_STATS_PATH = '/basic';

  constructor(private http: HttpClient) { }

  getBasicStatsBy(player_id: string): Observable<GeneralStats> {
    console.log('playerId: ' + player_id);
    return this.http.get<GeneralStats>(`${this.statisticsUrl}${this.BASIC_STATS_PATH}?playerId=${player_id}`);
  }


}
