import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  obtenerLocalizacionPredeterminada(): Observable<any> {
   return this.http.get<any>(`${environment.ipGeolocalizaion.url}${environment.ipGeolocalizaion.key}`)
    //return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bd9c22a52cd4798f4a301517813a7d2a')
  }
  obtenerDatosPorIp(dato:any){
    return this.http.get<any>(`${environment.ipGeolocalizaion.url}${environment.ipGeolocalizaion.key}&ipAddress=${dato}`)
  }
  obtenerDatosPorDominio(dato:any){
    return this.http.get<any>(`${environment.ipGeolocalizaion.url}${environment.ipGeolocalizaion.key}&domain=${dato}`)
  }

}
