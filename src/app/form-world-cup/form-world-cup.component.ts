import { Component,OnInit } from '@angular/core';
import { PositionsTableComponent } from '../positions-table/positions-table.component';
import { HttpHandlerService } from '../http-handler.service';
import { ChampionShip } from '../models/champion-ship';
@Component({
  selector: 'app-form-world-cup',
  standalone: true,
  imports: [PositionsTableComponent],
  templateUrl: './form-world-cup.component.html',
  styleUrl: './form-world-cup.component.css'
})
export class FormWorldCupComponent implements OnInit {
  public ChampionShipList = [new ChampionShip("a",1)]
  public GroupList = []
  constructor(private httpHandler:HttpHandlerService){}
  UserChampionShipSelected():void{
    this.httpHandler.GetGroupsByChampionShips('1').subscribe(
      (data:any) => {
        this.GroupList = data
        console.log(this.GroupList)
      },
      (error:any) => {
        console.error('Un Error en el get',error)
      }
    )
  }
  ngOnInit(): void {
    this.httpHandler.GetChampionShips().subscribe(
      (data) => {
        this.ChampionShipList = data
        console.log(this.ChampionShipList)
      },
      (error) => {
        console.error('Un Error en el get',error)
      }
    )
  }
}
