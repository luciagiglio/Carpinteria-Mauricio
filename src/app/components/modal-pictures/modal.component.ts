import { Component, OnInit } from '@angular/core';

import datos from '../../../assets/datos/info.json';


interface Imagenes{
  image:string;
  title:string;

}

@Component({
  selector: 'app-modal-pictures',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  info: Imagenes[]=datos;
 
  ngOnInit(): void {
    console.log(datos);
  }

  
}
