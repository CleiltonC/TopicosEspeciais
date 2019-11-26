import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListaEstudantesComponent } from "./estudantes/lista-estudantes.component";
import { SexoPipe } from "./compartilhado/sexo.pipe";
import { AlturaComponent } from "./compartilhado/altura.component";
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";


@NgModule({
  declarations: [
    AppComponent,
    ListaEstudantesComponent,
    SexoPipe,
    AlturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false // return entity after PUT/update
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
