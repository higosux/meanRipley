import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Destinatario } from 'src/app/models/destinatario';
import { Transferir } from 'src/app/models/transferir';
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { TransferirService } from 'src/app/services/transferir.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {

  listaDestinatarios: Destinatario[] = [];
  transferenciaForm: FormGroup;
  
  searchValue: string = "";
  seleccionado: boolean = false;
  _id: any;
  nombre: string = "";
  rut: string = "";
  banco: string = "";
  numeroCuenta: any ;
  tipoCuenta: string = "";
  correo: string = "";


  constructor(private _destinatarioService: DestinatarioService,
              private _transferirService: TransferirService, 
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {

      this.transferenciaForm = this.fb.group({
        monto: ['', [Validators.required]]
      })

   }

  ngOnInit(): void {
    this.obtenerDestinatarios();
  }

  destinatarioSeleccionado(id: any){
    
    this.seleccionado = true;
    
    if(this.seleccionado){
  
      let destinatario = this.listaDestinatarios.find(o => o._id === id);
      
      this._id   = destinatario!._id;
      this.rut   = destinatario!.rut;
      this.nombre = destinatario!.nombre;
      this.banco = destinatario!.banco;
      this.numeroCuenta = destinatario!.numeroCuenta;
      this.tipoCuenta = destinatario!.tipoCuenta;
      this.correo = destinatario!.correo;


    }

  }

  obtenerDestinatarios(){
    this.seleccionado = false;
    this._destinatarioService.getDestinatarios().subscribe(data => {
   
      
      this.listaDestinatarios = data;

    }, error => {
      console.log(error);
    })
  }

  nuevaTransferencia(){
    
    const TRANSFERIR: Transferir = {
      destinatario: this._id,
      monto: this.transferenciaForm.get('monto')?.value,      
    }

    this._transferirService.nuevaTransferencia(TRANSFERIR).subscribe(data => {
    
      this.toastr.success('Se ha realizado la transferencia con éxito','Transferencia realizada!')
      this.router.navigate(['/']);

    }, error => {

      this.toastr.error(error,'Error en el servicio')
      this.transferenciaForm.reset();
    })

    
  }

}
