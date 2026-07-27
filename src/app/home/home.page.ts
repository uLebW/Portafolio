import { Component, inject } from '@angular/core';
import { RutaChecker } from '../services/ruta-checker';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  //chequeador de ruta asi sexchad
  private routeCh = inject(RutaChecker);
  ocultarBtn$ = this.routeCh.ocultarBtn$;

  constructor() {}




}
