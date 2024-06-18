import { Component, inject } from '@angular/core';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private alertService = inject(AlertService)

  //Creacion de Funcion 
  addProducts(): void{
    this.alertService.questionAlert('Desea Agregar este Producto?','Si,Quiero Agregar el Producto', 'Agregar', 'Cancelar')
  }
}
