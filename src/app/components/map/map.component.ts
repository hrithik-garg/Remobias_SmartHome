import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { MAP_STYLE } from 'src/app/constants/map-style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MapComponent implements AfterViewInit{

    @ViewChild('gmap', {static: false}) gmapElement:any ;
    map!: google.maps.Map;
    mapJsonData: any = MAP_STYLE;

    constructor(private mapService: MapService){}

    ngAfterViewInit(): void {
        const latlng = new google.maps.LatLng(51.1657, 10.4515);
        const mapProp = {
            zoom: 14,
            center: latlng,
            clickableIcons: false,
            draggableCursor: 'arrow',
            draggingCursor: 'arrow',
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
           
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM,
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM,
            },
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM,
            },
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

        const styledMapType = new google.maps.StyledMapType(this.mapJsonData, {
            name: 'Styled',
        });
        this.map.mapTypes.set('styled_map', styledMapType);
        this.map.setMapTypeId('styled_map');
        this.mapService.setMap(this.map);
    }
}
