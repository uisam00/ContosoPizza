import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-pizza-crud',
  templateUrl: './pizza-crud.component.html',
  styleUrls: ['./pizza-crud.component.css']
})
export class PizzaCrudComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  navigateToPizzaCreate(): void {
    this.router.navigate(['/pizzas/adicionar']);
  }

}
