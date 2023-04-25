import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent  implements OnInit {


  @Input()
  contador!: number; 
   @Output()
  cambiocontador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}




  multiplicar(){
    this.contador *=2;
    this.cambiocontador.emit(this.contador)
  }

  dividir(){
    this.contador /=2;
    this.cambiocontador.emit(this.contador)

  }


  resetNieto(nuevoContador:any){
    this.contador = nuevoContador
    this.cambiocontador.emit(this.contador)

  }


}
