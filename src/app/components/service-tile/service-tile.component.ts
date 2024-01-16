import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../heading/heading.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-service-tile',
  standalone: true,
  imports: [CommonModule, HeadingComponent],
  templateUrl: './service-tile.component.html',
  styleUrls: ['./service-tile.component.scss']
})
export class ServiceTileComponent implements OnInit{

    @ViewChild('imageIcon') imageIcon!: ElementRef<HTMLImageElement>;
    @Input() icon: string = '';
    @Input() tileName: string = '';
    @Input() cls: string = '';

    constructor(private commonService: CommonService){}

    
    ngOnInit(): void {
      this.commonService.isDarkModeEnable.subscribe((res) => {
        this.apply(res);
      })
    }

    apply(isDarkModeEnable: boolean) {
      if (this.imageIcon) {
        const iconElement = this.imageIcon.nativeElement;
        isDarkModeEnable ? iconElement.classList.add('dark-mode') : iconElement.classList.remove('dark-mode');
      }
    }    
}
