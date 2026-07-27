import { Component, inject, OnInit } from '@angular/core';
import { RutaChecker } from 'src/app/services/ruta-checker';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.page.html',
  styleUrls: ['./trabajos.page.scss'],
  standalone:false
})
export class TrabajosPage implements OnInit {
      //chequeador de ruta asi sexchad
  private routeCh = inject(RutaChecker);
  ocultarBtn$ = this.routeCh.ocultarBtn$;

  constructor() { }

  ngOnInit() {
  }

}
