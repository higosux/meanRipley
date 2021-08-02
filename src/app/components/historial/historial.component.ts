import { Component, OnInit } from '@angular/core';
import { Historial } from 'src/app/models/historial';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  listaHistorial!: Historial[];

  constructor(private _historialService: HistorialService) { }

  ngOnInit(): void {
    this.obtenerHistorial();
  }

  obtenerHistorial(): void {

    this._historialService.getHistorial().subscribe(data => {
        
        this.listaHistorial = data;
  
      }, error => {
        console.log(error);
      })
  }

}
