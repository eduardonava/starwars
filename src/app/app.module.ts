import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamenComponent } from './examen/examen.component';
import { RouterModule } from '@angular/router';
import { OrdenarComponent } from './ordenar/ordenar.component';
import { ResidentesComponent } from './residentes/residentes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamenComponent,
    OrdenarComponent,
    ResidentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
