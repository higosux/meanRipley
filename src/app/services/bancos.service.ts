import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  url = 'https://bast.dev/api/banks.php'
  constructor(private http: HttpClient) {
    
   }

  getBancos() {
    return this.http.get<any>(this.url);
  } 
}
