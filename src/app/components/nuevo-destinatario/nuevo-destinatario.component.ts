
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutValidator } from 'ng10-rut';
import { ToastrService } from 'ngx-toastr';
import { Banco } from 'src/app/models/bancos';
import { Destinatario } from 'src/app/models/destinatario';
import { BancosService } from 'src/app/services/bancos.service';
import { DestinatarioService } from 'src/app/services/destinatario.service';


@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.css']
})
export class NuevoDestinatarioComponent implements OnInit {

  destinatarioForm: FormGroup;
  listaBancos!: Banco[];
  rut: any;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _destinatarioService: DestinatarioService,
              private _bancosService: BancosService,
              private rutValidator: RutValidator,) {

    this.destinatarioForm = this.fb.group({
      rut: ['', [Validators.required, rutValidator]],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      banco: ['', Validators.required],
      tipoCuenta: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.obtenerBancos();
  }

  obtenerBancos(): void {

    this._bancosService.getBancos().subscribe(data => {
        
        this.listaBancos = data.banks;
  
      }, error => {
        this.toastr.error(error,'Error en el servicio')

      })
  }

  nuevoDestinatario(): void{

    const DESTINATARIO: Destinatario = {
      rut: this.destinatarioForm.get('rut')?.value,
      nombre: this.destinatarioForm.get('nombre')?.value,
      correo: this.destinatarioForm.get('correo')?.value,
      telefono: this.destinatarioForm.get('telefono')?.value,
      banco: this.destinatarioForm.get('banco')?.value,
      tipoCuenta: this.destinatarioForm.get('tipoCuenta')?.value,
      numeroCuenta: this.destinatarioForm.get('numeroCuenta')?.value,
    }

    this._destinatarioService.nuevoDestinatario(DESTINATARIO).subscribe(data => {
      this.toastr.success('El nuevo destinatario fue añadido con éxito','Destinatario registrado!')
      this.router.navigate(['/']);

    }, err => {
      this.toastr.error(err,'Error en el servicio')
      this.destinatarioForm.reset();

    })


  }
}
