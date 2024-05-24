import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//vistas 
import { RegistroComponent } from './page/registro/registro.component';
import { InicioSesionComponent } from './page/inicio-sesion/inicio-sesion.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent,
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    RegistroComponent,
    InicioSesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

]
})
export class AutentificacionModule { }
