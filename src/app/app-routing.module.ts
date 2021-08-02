import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HistorialComponent } from './components/historial/historial.component';
import { NuevoDestinatarioComponent } from './components/nuevo-destinatario/nuevo-destinatario.component';
import { TransferirComponent } from './components/transferir/transferir.component';


const routes: Routes = [
{ path: '', component: HistorialComponent},
{ path: 'nuevo-destinatario', component: NuevoDestinatarioComponent},
{ path: 'transferir', component: TransferirComponent},
{ path: '**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
