import {  Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']

})
export class HomePage {


 contador:number


  constructor() {

    this.contador=10
  }



  incrementar(){
    console.log("Incrementa")
    this.contador ++

  }
 

  decrementar(){
    console.log("Decrementa")
    this.contador --
    
  }
}
