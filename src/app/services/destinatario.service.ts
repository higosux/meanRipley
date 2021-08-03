import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destinatario } from '../models/destinatario';

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  url = 'https://meanripley.herokuapp.com/api/destinatarios';

  constructor(private http: HttpClient) {

   }

  getDestinatarios() {
    return this.http.get<any>(this.url);
  } 

  nuevoDestinatario(destinatario: Destinatario){

    return this.http.post(this.url, destinatario);

  }

  eliminarDestinatario(destinatario: Destinatario){

    return this.http.post(this.url, destinatario._id);

  }
}
