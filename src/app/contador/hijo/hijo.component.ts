import { Component,  OnInit,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

import * as actions from '../contador.actions'


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent  implements OnInit {


  contador!: number; 

  constructor( private store:Store<AppState>) { }

  ngOnInit() {

    // 1 obtengo valor del store
    this.store.select('contador').subscribe(contador=> this.contador=contador)



  }




  multiplicar(){
    // this.contador *=2;
    // this.cambiocontador.emit(this.contador)


    this.store.dispatch(actions.multiplicar({numero: 2}));
    
    
  }

  dividir(){
    // this.contador /=2;
    // this.cambiocontador.emit(this.contador)


    this.store.dispatch(actions.dividir({numero: 2}));

  }


  resetNieto(nuevoContador:any){
    // this.contador = nuevoContador
    // this.cambiocontador.emit(this.contador)

  }


}
