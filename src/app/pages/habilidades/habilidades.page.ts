import { Component, inject, OnInit } from '@angular/core';
import { RutaChecker } from 'src/app/services/ruta-checker';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
  standalone:false
})
export class HabilidadesPage implements OnInit {
    //chequeador de ruta asi sexchad
  private routeCh = inject(RutaChecker);
  ocultarBtn$ = this.routeCh.ocultarBtn$;

  constructor() { }

  ngOnInit() {
  }

}
