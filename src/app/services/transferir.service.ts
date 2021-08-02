import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferir } from '../models/transferir';

@Injectable({
  providedIn: 'root'
})
export class TransferirService {

  url = 'https://meanripley.herokuapp.com/api/transferencia';

  constructor(private http: HttpClient) { }

  nuevaTransferencia(transferir: Transferir){

    return this.http.post(this.url, transferir);

  }
}
