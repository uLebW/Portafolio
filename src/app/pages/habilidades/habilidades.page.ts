import { Component, inject, OnInit } from '@angular/core';
import { RutaChecker } from 'src/app/services/ruta-checker';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
  standalone: false
})
export class HabilidadesPage implements OnInit {
  //chequeador de ruta asi sexchad
  private routeCh = inject(RutaChecker);
  ocultarBtn$ = this.routeCh.ocultarBtn$;

  protected Stack = [
    {
      icono: "https://img.icons8.com/?size=100&id=107561&format=png&color=FFFFFF",
      titulo: "Ionic",
      isFlipp: false
    }
    , {
      icono: "https://img.icons8.com/?size=100&id=t9oCxEN7McHZ&format=png&color=FFFFFF",
      titulo: "NODE-Js",
      isFlipp: false
    }
    , {
      icono: "https://img.icons8.com/?size=100&id=23028&format=png&color=FFFFFF",
      titulo: "HTML5",
      isFlipp: false
    }
    , {
      icono: "https://img.icons8.com/?size=100&id=38272&format=png&color=FFFFFF",
      titulo: "CSS3",
      isFlipp: false
    }
    , {
      icono: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
      titulo: "Java SpringBoot",
      isFlipp: false
    },
    {
      icono:"https://img.icons8.com/?size=100&id=FSy9ge3Q95lL&format=png&color=FFFFFF",
      titulo:"Supabase",
      isFlipp: false
    }]
  constructor() { }

  ngOnInit() {
  }

}
