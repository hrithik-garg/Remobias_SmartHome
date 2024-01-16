import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {

    @Input() public headingType: string = '';
    @Input() public heading: string = '';
    @Input() public cls: string = '';
}
