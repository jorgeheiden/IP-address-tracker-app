import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { MapaComponent } from './componentes/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatosComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
