import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isDarkModeEnable = new Subject<boolean>();

  themes: any = {
    night: {
        '--bg-cream': '#000000',
        '--bg-skyblue': '#474747',
        '--card-bg': 'rgba(71, 71, 71, 0.40)',
        '--inner-card-bg': '#474747',
        '--font-color': '#FFF',
        '--gray': '#FFF',
        '--stroke-color': '#54EAFF',
        '--tile-bg': '#000'
    },
    day: {
        '--bg-cream': '#FDFDFD',
        '--bg-skyblue': '#E3ECFA',
        '--card-bg': 'rgba(255, 255, 255, 0.60)',
        '--inner-card-bg': 'rgba(253, 253, 253, 0.70)',
        '--font-color': '#313131',
        '--gray': 'rgba(49, 49, 49, 0.70)',
        '--stroke-color': '#0EA2B6',
        '--tile-bg': '#FFF'
    }
  }

  setTheme() {
    setInterval(() => this.updateTheme(), 1000);
  }
  
  updateTheme() {
    const currentTime = moment();
    const eveningStart = moment('18:00', 'HH:mm');
    const morningStart = moment('07:00', 'HH:mm');
    const isNightTheme = currentTime.isAfter(eveningStart) || currentTime.isBefore(morningStart);
    this.isDarkModeEnable.next(isNightTheme);
    const root = document.documentElement;
    const theme = isNightTheme ? this.themes.night : this.themes.day;
    for(let prop in theme) {
        root.style.setProperty(prop, theme[prop]);
    }
  }
}
