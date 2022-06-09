import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PizzaHutComponent } from './components/pizza-hut/pizza-hut.component';

/*  NGRX */
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {pizzaReducer} from "./components/pizza-hut/pizza-hut-reducer";

@NgModule({
  declarations: [
    AppComponent,
    PizzaHutComponent
  ],
    imports: [
        BrowserModule,
      StoreModule.forRoot({ pizza : pizzaReducer}),
      StoreDevtoolsModule.instrument()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
