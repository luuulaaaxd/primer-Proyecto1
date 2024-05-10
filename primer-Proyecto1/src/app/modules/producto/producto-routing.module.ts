import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './page/producto/producto.component';
import { BuzosComponent } from './page/buzos/buzos.component';
import { EstiloComponent } from './page/estilo/estilo.component';
import { RemerasComponent } from './page/remeras/remeras.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"buzos",component:BuzosComponent
  },
  {
    path:"estilo",component:EstiloComponent
  },
  {
    path:"remeras",component:RemerasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
