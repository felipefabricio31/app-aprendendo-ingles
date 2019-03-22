import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './Topo/topo.component';
import { PanelComponent } from './panel/panel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PanelComponent,
    TentativasComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
