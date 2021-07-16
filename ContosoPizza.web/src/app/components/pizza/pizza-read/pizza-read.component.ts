import { PizzaService } from './../pizza.service';
import { Pizza } from './../pizza.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDialogComponent } from '../../template/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-pizza-read',
  templateUrl: './pizza-read.component.html',
  styleUrls: ['./pizza-read.component.css']
})
export class PizzaReadComponent implements OnInit {

  pizzas: Pizza[] = [];
  displayedColumns = ['id', 'name', 'isGlutenFree', 'action']

  constructor(
    private pizzaService : PizzaService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() : void {
    this.pizzaService.read().subscribe(pizzas => {
      this.pizzas = pizzas;
    })
  }

  deletePizza(id: string) : void {
    let nomePizza = '';
    this.pizzaService.readById(id ? id : '').subscribe(pizza => {
      nomePizza = pizza.name;
    })

    this.pizzaService.delete(id).subscribe(() => {
      this.carregarDados();
      this.pizzaService.showMessage(`A pizza ${nomePizza} foi deletada com sucesso`);
    })
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width:'350px',
      data: 'Tem certeza que quer excluir esse dado?'
    })
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.deletePizza(id);

      }
    })
  }

}
