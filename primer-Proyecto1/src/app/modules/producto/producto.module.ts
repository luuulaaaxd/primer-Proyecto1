import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './page/producto/producto.component';
import { EstiloComponent } from './page/estilo/estilo.component';
import { TalleComponent } from './page/talle/talle.component';
import { CombosComponent } from './page/combos/combos.component';
import { RemerasComponent } from './page/remeras/remeras.component';
import { BuzosComponent } from './page/buzos/buzos.component';


@NgModule({
  declarations: [
    ProductoComponent,
    EstiloComponent,
    TalleComponent,
    CombosComponent,
    RemerasComponent,
    BuzosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
