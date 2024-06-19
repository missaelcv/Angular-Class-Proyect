import { Component, OnInit, inject } from '@angular/core';
import { AlertService } from '../../service/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public cards: any = [];
  private alertService = inject(AlertService)

  ngOnInit() {
    this.cards =[
      {
        id: 1,
        name: 'Articulo1',
        amount: 50,
        descrition: 'lorem'
      },
      {
        id: 2,
        name: 'Articulo2',
        amount: 50,
        descrition: 'lorem'
      },
      {
        id: 3,
        name: 'Articulo3',
        amount: 50,
        descrition: 'lorem'
      },
      {
        id: 4,
        name: 'Articulo4',
        amount: 50,
        descrition: 'lorem'
      },
      {
        id: 5,
        name: 'Articulo5',
        amount: 50,
        descrition: 'lorem'
      },
    ]
  }

  //Creacion de Funcion 
  addProducts(): void{
    this.alertService.questionAlert('Desea Agregar este Producto?',
      //Si El Usuario Quiere Agregar otro producto.
      'Si,Quiero Agregar el Producto', 'Agregar', 'Cancelar').then((res)=>{
        if(res.isConfirmed){
          console.log('Si');
        } else {
          console.log('NO');
        }
      })
  }
}
