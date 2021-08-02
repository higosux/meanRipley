import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import{HttpClientModule} from '@angular/common/http';


// components
import { NuevoDestinatarioComponent } from './components/nuevo-destinatario/nuevo-destinatario.component';
import { HistorialComponent } from './components/historial/historial.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { FilterPipe } from './pipes/filtro.pipe';
import { Ng9RutModule } from 'ng9-rut';

@NgModule({
  declarations: [
    AppComponent,
    NuevoDestinatarioComponent,
    HistorialComponent,
    TransferirComponent,
    FilterPipe,
    

     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    HttpClientModule,
    Ng9RutModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
