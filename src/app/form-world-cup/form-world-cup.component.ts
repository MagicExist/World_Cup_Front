import { Component,OnInit } from '@angular/core';
import { PositionsTableComponent } from '../positions-table/positions-table.component';
import { HttpHandlerService } from '../http-handler.service';
import { ChampionShip } from '../models/champion-ship';
import { FormsModule } from '@angular/forms';
import {Group} from '../models/Group'
@Component({
  selector: 'app-form-world-cup',
  standalone: true,
  imports: [PositionsTableComponent,FormsModule],
  templateUrl: './form-world-cup.component.html',
  styleUrl: './form-world-cup.component.css'
})
export class FormWorldCupComponent implements OnInit {
  public ChampionShipList = [new ChampionShip(0,"a",1)]
  public GroupList = [new Group()]
  public selectedChampionShip:any = null
  public selectedGroup:Group = new Group()
  constructor(private httpHandler:HttpHandlerService){}
  UserChampionShipSelected():void{
    this.httpHandler.GetGroupsByChampionShips(this.selectedChampionShip.id).subscribe(
      (data:any) => {
        this.GroupList = data
        console.log(this.GroupList)
      },
      (error:any) => {
        console.error('Un Error en el get',error)
      }
    )
  }

  UserGroupSelected():void{
    console.log(this.selectedGroup)
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
