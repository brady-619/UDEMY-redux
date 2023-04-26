// va a recibir las acciones

import { createReducer,on } from "@ngrx/store";
import  * as actions  from "./contador.actions";



export const initialState = 20;

const _contadorReducer = createReducer(
    initialState,
    on(actions.incrementar, state => state + 1),
    on(actions.decrementar, state => state - 1),
    on(actions.multiplicar, (state,{numero})=> state * numero),
// 2 su reducer
    on(actions.dividir, (state,{numero})=> state / numero),// 2 su reducer
    on(actions.reset, state => initialState),

  );


  export function contadorReducer(state:any,action:any){
    return _contadorReducer(state,action)
  }





// export function contadorReducer(state: number=10, action:Action ){

// switch(action.type){

//     case incrementar.type:
//         return state+1;

//     case decrementar.type:
//         return state-1;

//     default:
//         return state;



//} }