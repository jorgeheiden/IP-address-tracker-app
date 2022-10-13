import { ServiceService } from './../../servicios/service.service';
import { Component, Input, OnInit, } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  map!:any
  
  @Input() set datos(valor:any){
     if(valor !== undefined){
      if(this.map !== undefined){
        this.map.remove()
      }
      
      this.map = new Map('map').setView([valor.location.lat, valor.location.lng], 6)
      marker([valor.location.lat, valor.location.lng]).addTo(this.map)
      this.mapa()
     }
  }
  constructor() {}

  ngOnInit(): void {
  
  }

    mapa(){
    //this.map = new Map('map').setView([-34.6037232, -58.3815931], 6);

     tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map); 
}
  
}
