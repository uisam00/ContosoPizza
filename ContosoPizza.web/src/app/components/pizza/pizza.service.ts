import { Pizza } from './pizza.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  baseURL = "http://localhost:63242/pizza/"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    }) 
  }

  create(pizza: Pizza) : Observable<Pizza> {
    return this.http.post<Pizza>(this.baseURL+'adicionar', pizza);
  }

  read() : Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.baseURL);
  }

  readById (id: string): Observable<Pizza> {
    const url = `${this.baseURL}${id}`
    return this.http.get<Pizza>(url);
  }

  update(pizza: Pizza) : Observable<Pizza> {
    const url = `${this.baseURL}editar`
    return this.http.post<Pizza>(url, pizza);
  }

  delete(id: string) : Observable<Pizza> {
    const url = `${this.baseURL}deletar`
    return this.http.post<Pizza>(url, id);
  }
}
