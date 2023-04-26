import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

import * as actions from '../contador.actions'

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent  implements OnInit {


  // @Input()
  // contador!: number;


  // @Output()
  // contadorCambio = new EventEmitter<number>();

contador:any;


  constructor( private store:Store<AppState>) { }

  ngOnInit() {

    // 1 obtengo valor del store
    this.store.select('contador').subscribe(contador=> this.contador=contador)



  }





  reset(){
    // this.contador=0;
    // this.contadorCambio.emit(0);

    this.store.dispatch(actions.reset());

  }

}
