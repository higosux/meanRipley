import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historial } from '../models/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  url = 'https://meanripley.herokuapp.com/api/historial';

  constructor(private http: HttpClient) { }

  getHistorial(): Observable<any> {
    return this.http.get(this.url);
  } 
}
