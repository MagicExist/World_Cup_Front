import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  private apiGetChampionShipsUrl = "http://localhost:5027/Api/GetChampionship"
  private apiGetChampionShipsByGroupsUrl = "http://localhost:5027/Api/GetTeamsByChampionShip"

  constructor(private http:HttpClient) { }
  GetChampionShips():Observable<any>{
    return this.http.get(this.apiGetChampionShipsUrl)
  }

  GetGroupsByChampionShips(championShipId:string):Observable<any>{
    const url = "http://localhost:5027/Api/1"
    console.log(url)
    return this.http.get(url)
  }
}
