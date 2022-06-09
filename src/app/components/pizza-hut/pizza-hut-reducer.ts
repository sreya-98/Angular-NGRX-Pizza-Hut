import {createReducer, on} from "@ngrx/store";
import {buyPizza} from "./pizza-hut-actions";

let initialState = {
  pizzaCount : 5
}

export const pizzaReducer = createReducer(initialState, on(buyPizza, (store) => {
  return {
    pizzaCount: store.pizzaCount - 1 ? store.pizzaCount - 1 : 0
  }
}))
