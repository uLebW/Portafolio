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
      icono: "https://img.icons8.com/?size=100&id=5NOAGB6F7wM4&format=png&color=000000",
      titulo: "Ionic"
    }
    , {
      icono: "https://img.icons8.com/?size=100&id=t9oCxEN7McHZ&format=png&color=000000",
      titulo: "NODE-Js"
    }
    , {
      icono: "https://img.icons8.com/?size=100&id=23028&format=png&color=000000",
      titulo: "HTML5"
    }
    , {
      icono: "https://img.icons8.com/?size=100&id=38272&format=png&color=000000",
      titulo: "CSS3"
    }
    , {
      icono: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
      titulo: "Java SpringBoot"
    },
    {
      icono:"https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000",
      titulo:"Supabase"
    }]
  constructor() { }

  ngOnInit() {
  }

}
