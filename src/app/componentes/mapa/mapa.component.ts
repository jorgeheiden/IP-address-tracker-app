import { Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet'
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit(): void {}

  
  ngAfterViewInit(): void{
    const map = new Map('map').setView([51.505, -0.09], 13);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

}

}
