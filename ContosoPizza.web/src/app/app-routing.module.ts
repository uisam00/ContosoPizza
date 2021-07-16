import { PizzaUpdateComponent } from './components/pizza/pizza-update/pizza-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from'./views/home/home.component'
import { PizzaCrudComponent } from './views/pizza-crud/pizza-crud.component'
import { PizzaCreateComponent } from './components/pizza/pizza-create/pizza-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pizzas",
    component: PizzaCrudComponent
  },
  {
    path: 'pizzas/adicionar',
    component:PizzaCreateComponent
  },
  {
    path: 'pizzas/editar/:id',
    component:PizzaCreateComponent
  }

  // {
  //   path: 'pizzas/editar/:id',
  //   component:PizzaUpdateComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
