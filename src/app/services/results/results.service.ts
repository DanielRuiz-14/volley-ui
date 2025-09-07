import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';

@Injectable({ providedIn: 'root' })
export class ResultsService {
  private http = inject(HttpClient);
  //TODO: cambiar a tu URL real
  private api = 'http://localhost:8080/api'; // ajusta a tu URL base

  // TODO: revisar pa luego
  // getResultsByCategory(category: string): Observable<MatchResult[]> {
  //   const params = category ? new HttpParams().set('category', category) : undefined as any;
  //   return this.http.get<MatchResult[]>(`${this.api}/results`, { params });
  // }

  getCategoriesByFase(faseId: number): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.api}/sportcapp/categorias/fase/${faseId}`);
  }
}
