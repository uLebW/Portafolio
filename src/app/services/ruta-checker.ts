import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RutaChecker {
  //Primero el inicializamos el router e injectamos
  private router = inject(Router);

  private OcultarBtn= new BehaviorSubject<Boolean>(false);
  ocultarBtn$ = this.OcultarBtn.asObservable();
  

  constructor(){
    this.escuchar();
  }

  private escuchar(){
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd) 
    ).subscribe((event: NavigationEnd)=>{

      const Rutas=['/home','/trabajos','/habilidades'];
      const debeOcultar = Rutas.includes(event.urlAfterRedirects);
      this.OcultarBtn.next(debeOcultar);
    });
  }
}
