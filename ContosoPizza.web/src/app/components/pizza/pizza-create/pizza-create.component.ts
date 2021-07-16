import { Pizza } from './../pizza.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from './../pizza.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent implements OnInit {

  pizza: Pizza = {
    name:'',
    isGlutenFree: false,
  }

  constructor(private pizzaService: PizzaService,
     private router: Router,
     private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== ''){
      this.pizzaService.readById(id ? id : '').subscribe(pizza => {
        this.pizza = pizza;
      });
    }
  }

  createOrUpdate() : void{
    if(this.pizza.id == null){
      this.createPizza()
    } else {
      this.updatePizza()
    }
  }

  updatePizza() : void {
    this.pizzaService.update(this.pizza).subscribe(() => {
      this.pizzaService.showMessage(`A pizza ${this.pizza.name} foi atualizada com sucesso`)
      this.router.navigate(['/pizzas'])
    })
  }

  createPizza() : void {
    this.pizzaService.create(this.pizza).subscribe(() => {
      this.pizzaService.showMessage(`A pizza ${this.pizza.name} foi salva com sucesso`);
      this.router.navigate(['/pizzas']);
    });
  }

  cancelPizza() : void {
    this.router.navigate(['/pizzas']);
  }
}
