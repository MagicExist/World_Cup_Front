import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  private apiGetChampionShipsUrl = "http://localhost:5027/Api/GetChampionship"
  private apiGetChampionShipsByGroupsUrl = "http://localhost:5027/Api/GetGroupsByChampionShipId/{id}"

  constructor(private http:HttpClient) { }
  GetChampionShips():Observable<any>{
    return this.http.get(this.apiGetChampionShipsUrl)
  }

  GetGroupsByChampionShips(championShipId:number):Observable<any>{
    const url = this.apiGetChampionShipsByGroupsUrl.replace("{id}",championShipId.toString())
    return this.http.get(url)
  }
}
