import { Component } from '@angular/core';
import { PositionsTableComponent } from '../positions-table/positions-table.component';

@Component({
  selector: 'app-form-world-cup',
  standalone: true,
  imports: [PositionsTableComponent],
  templateUrl: './form-world-cup.component.html',
  styleUrl: './form-world-cup.component.css'
})
export class FormWorldCupComponent {

}
