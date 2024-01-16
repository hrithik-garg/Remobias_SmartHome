import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() public cls!: string;
    @Input() public buttonName: string = '';
    @Input() public buttonType: string = '';
    @Input() public type: string = 'button';
    @Input() public icon: string = '';

    @Output() onBtnClick: EventEmitter<any> = new EventEmitter();

    onClick = () => {
        this.onBtnClick.emit();
    }
}