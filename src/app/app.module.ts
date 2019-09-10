
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { listaEstudantesComponent } from "./estudantes/lista-estudantes.component";

@NgModule({
  declarations: [AppComponent, listaEstudantesComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}