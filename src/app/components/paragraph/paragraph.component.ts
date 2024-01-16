import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {
    @Input() public text: string = '';
    @Input() public cls: string = '';
}
