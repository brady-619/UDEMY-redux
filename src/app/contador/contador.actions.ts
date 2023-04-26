// le van a decir al reducer que hacer

import {createAction, props } from '@ngrx/store'

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');


//1 creo su acccion
export const multiplicar = createAction(
    '[Contador] Multiplicar',
    props<{numero:number}>()
    );



//1 creo su acccion
export const dividir = createAction(
    '[Contador] Dividir',
    props<{numero:number}>()
    );





//1 creo su acccion
export const reset = createAction(
    '[Contador] Reset',
    // props<{numero:number}>()
    );