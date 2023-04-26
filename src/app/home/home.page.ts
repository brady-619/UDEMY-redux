import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador/contador.actions';
import { AppState } from '../contador/app.reducers';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contador = 10;

  constructor(private store: Store<AppState>) {


    
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });



  }

  incrementar() {
    // console.log("Incrementa")
    // this.contador ++

    this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    // console.log("Decrementa")
    // this.contador --
    this.store.dispatch(actions.decrementar());
  }
}
