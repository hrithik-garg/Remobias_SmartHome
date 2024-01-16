import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../heading/heading.component';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calendar-card',
  standalone: true,
  imports: [CommonModule, HeadingComponent, ParagraphComponent],
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnInit {
  currentDate = moment();
  day!: string;
  time!: string;
  ampm!: string;
  date!: string;
  location: string = "Augenarzt";
  intervalId!: any;
  
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.setTimeInterval();
    this.updateTime(); 
  }
  
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setTimeInterval() {
    this.intervalId = setInterval(() => {
      this.updateTime(); 
    }, 1000);
  }

  updateTime(): void {
    const currentLang = this.translateService.currentLang;
    if (currentLang === 'de') {
      moment.locale('de');
    } else {
      moment.locale('en-gb');
    }
    
    this.currentDate = moment();
    this.day = this.currentDate.format('dddd');
    this.time = this.currentDate.format(currentLang === 'de'? 'HH.mm':'HH:mm');
    this.ampm = currentLang === 'de' ? '' : this.currentDate.format('A');
    this.date = this.currentDate.format('D MMMM YYYY');
  }
}
