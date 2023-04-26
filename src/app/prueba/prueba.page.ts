import { Component, OnInit } from '@angular/core';
import { AppState } from '../contador/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  contador!: number; 

  constructor( private store:Store<AppState>) { }

  ngOnInit() {

    // 1 obtengo valor del store
    this.store.select('contador').subscribe(contador=> this.contador=contador)

console.log(this.contador)

  }
}
