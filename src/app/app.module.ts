import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaEstudantesComponent } from './estudantes/lista-estudantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudantesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
