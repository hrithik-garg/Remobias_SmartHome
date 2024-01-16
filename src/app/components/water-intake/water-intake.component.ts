import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../heading/heading.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-water-intake',
  standalone: true,
  imports: [CommonModule, HeadingComponent, KnobModule, FormsModule, TranslateModule],
  templateUrl: './water-intake.component.html',
  styleUrls: ['./water-intake.component.scss']
})
export class WaterIntakeComponent {

  value: string = '0';           
  currentWater: number = 0;   
  totalValue: number = 4000;          

  addWaterIntake(water: number) {
    this.currentWater += water;
    if(this.currentWater >= this.totalValue){
      this.value = '100';
    }
    else{
      this.value = ((this.currentWater / this.totalValue) * 100).toFixed(1);
    }
  }
}
