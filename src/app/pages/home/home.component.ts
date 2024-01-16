import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CalendarCardComponent } from 'src/app/components/calendar-card/calendar-card.component';
import { ServiceTileComponent } from 'src/app/components/service-tile/service-tile.component';
import { default_imgs } from 'src/app/constants/constants';
import { WeatherCardComponent } from 'src/app/components/weather-card/weather-card.component';
import { WaterIntakeComponent } from 'src/app/components/water-intake/water-intake.component';
import { TrafficCardComponent } from 'src/app/components/traffic-card/traffic-card.component';
import { PToasterComponent } from 'src/app/components/p-toaster/p-toaster.component';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ImageComponent } from 'src/app/components/image/image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CalendarCardComponent, ServiceTileComponent, WeatherCardComponent, WaterIntakeComponent, TrafficCardComponent, PToasterComponent, ImageComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  media_icon_img: string = default_imgs.media_icon_img;
  person_icon_img: string = default_imgs.person_icon_img;
  phone_icon_img: string = default_imgs.phone_icon_img;
  service_call_icon_img: string = default_imgs.service_call_icon_img;
  services_icon_img: string = default_imgs.service_call_icon_img
  vehicle_icon_img: string = default_imgs.vehicle_icon_img;
  cibek_logo: string = default_imgs.cibek_logo;
  langChangeSubscription!: Subscription;

  tiles: any[] = [{icon: this.phone_icon_img, title: 'phone', color: 'blue-bg'},
                  {icon: this.vehicle_icon_img, title: 'mobility', color: 'light-green-bg', link: 'https://remobias.azurewebsites.net/'},
                  {icon: this.media_icon_img, title: 'media', color: 'dark-yellow-bg'},
                  {icon: this.service_call_icon_img, title: 'serviceCall', color: 'pink-bg'},
                  {icon: this.services_icon_img, title: 'services', color: 'purple-bg'},
                  {icon: this.person_icon_img, title: 'personal', color: 'light-red-bg'},
                  {title: 'current', color: 'dark-blue-bg'},
                  {title: 'others', color: 'light-yellow-bg'}];

}
