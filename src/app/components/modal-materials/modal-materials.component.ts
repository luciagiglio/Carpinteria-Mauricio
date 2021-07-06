import { Component, OnInit } from '@angular/core';

import materiales from '../../../assets/datos/materials.json';

interface Material{
  id:string;
  image:string;
}


@Component({
  selector: 'app-modal-materials',
  templateUrl: './modal-materials.component.html',
  styleUrls: ['./modal-materials.component.css']
})
export class ModalMaterialsComponent implements OnInit {

  constructor() { }
  material: Material[]=materiales;

  

  ngOnInit(): void {

  }

}
