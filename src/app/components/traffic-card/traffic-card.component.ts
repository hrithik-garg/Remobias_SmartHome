import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { HeadingComponent } from '../heading/heading.component';
import { MapService } from 'src/app/services/map.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-traffic-card',
  standalone: true,
  imports: [CommonModule, ParagraphComponent, MapComponent, HeadingComponent, TranslateModule],
  templateUrl: './traffic-card.component.html',
  styleUrls: ['./traffic-card.component.scss']
})
export class TrafficCardComponent implements AfterViewInit{

  routePolyline!: google.maps.Polyline | null;
  map!: google.maps.Map;
  path: string =  "LINESTRING (9.66293 47.95557, 9.66218 47.95529, 9.6614 47.95489, 9.66076 47.95446, 9.66019 47.95396, 9.65968 47.9534, 9.65754 47.95067, 9.65609 47.94899, 9.65464 47.94744, 9.65353 47.94634, 9.65217 47.94507, 9.64957 47.94276, 9.64894 47.94208, 9.64791 47.94245, 9.647 47.94276, 9.64593 47.94322, 9.64538 47.94354, 9.64498 47.9438, 9.64443 47.94423, 9.64257 47.94583, 9.64198 47.94625, 9.64092 47.94696, 9.63957 47.9477, 9.63879 47.94807, 9.63788 47.94842, 9.63688 47.94875, 9.63843 47.95101, 9.63865 47.95094, 9.63865 47.95094, 9.63886 47.95087, 9.6394 47.95073, 9.63999 47.95062, 9.64058 47.95055, 9.64142 47.95051, 9.64126 47.94912, 9.64122 47.9489, 9.64115 47.94867, 9.64117 47.94854, 9.64106 47.94849, 9.64101 47.94845, 9.6409 47.94831, 9.64019 47.94753, 9.64007 47.94744, 9.63957 47.9477, 9.63855 47.94816, 9.63788 47.94842, 9.63655 47.94886, 9.63588 47.94909, 9.63561 47.94921, 9.63538 47.94889, 9.63538 47.94889, 9.63561 47.94921, 9.63588 47.94909, 9.63655 47.94886, 9.63788 47.94842, 9.63855 47.94816, 9.63957 47.9477, 9.64007 47.94744, 9.64092 47.94696, 9.64198 47.94625, 9.64257 47.94583, 9.64443 47.94423, 9.64498 47.9438, 9.64538 47.94354, 9.64593 47.94322, 9.64687 47.9428, 9.64791 47.94245, 9.64894 47.94208, 9.64957 47.94276, 9.65217 47.94507, 9.65353 47.94634, 9.65464 47.94744, 9.65609 47.94899, 9.65754 47.95067, 9.65968 47.9534, 9.66019 47.95396, 9.66076 47.95446, 9.6614 47.95489, 9.66218 47.95529, 9.66293 47.95557)";

  constructor(private mapService: MapService){}

  ngAfterViewInit(): void {
    this.getMapControl();
  }
  
  getMapControl() {
    this.mapService.getMap().subscribe((map: google.maps.Map) => {
      this.map = map;      
    });
    this.drawRoute();
  }

  drawRoute(){
    const path = this.mapService.formatPolylineCoords(this.path);
    const polylineOptions = this.addSymbolOnRoute(path);

    this.routePolyline = this.mapService.addPolyline(this.map, polylineOptions);

    // Fit the map bounds to the route
    if (this.routePolyline) {
      const bounds = new google.maps.LatLngBounds();
      this.routePolyline.getPath().forEach((latLng) => {
        bounds.extend(latLng);
      });
      this.map.fitBounds(bounds);
    }
  }

  addSymbolOnRoute(path: any){    
    return {
      path,
      strokeColor: '#ffae42',
      strokeWeight: 5,
      icons: [{
        icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        fillColor: '#FFC062',
        fillOpacity: 1,
        scale: 5,
        strokeColor: '#866522',
        strokeOpacity: 1,
        strokeWeight: 1},
        offset: '100%',
        repeat: '500px'
      }]
    } as google.maps.PolylineOptions;
  }
}
