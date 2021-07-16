import { Pizza } from './../pizza.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from './../pizza.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-update',
  templateUrl: './pizza-update.component.html',
  styleUrls: ['./pizza-update.component.css']
})
export class PizzaUpdateComponent implements OnInit {

  pizza: Pizza = {
    name:'',
    isGlutenFree: false,
  }

  constructor(
    private pizzaService: PizzaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pizzaService.readById(id ? id : '').subscribe(pizza => {
      this.pizza = pizza;
    });
  }

  updatePizza() : void {
    this.pizzaService.update(this.pizza).subscribe(() => {
      this.pizzaService.showMessage(`A pizza ${this.pizza.name} foi atualizada com sucesso`)
      this.router.navigate(['/pizzas'])
    })
  }

  cancelPizza() : void {
    this.router.navigate(['/pizzas'])
  }

}
