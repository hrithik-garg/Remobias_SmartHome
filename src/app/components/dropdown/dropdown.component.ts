import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownInterface } from 'src/app/models/dropdown.model';
import { TranslateModule } from '@ngx-translate/core';
import { ValidationErrorPipe } from 'src/app/pipes/validation-error.pipe';

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [
        CommonModule,
        DropdownModule,
        ReactiveFormsModule,
        TranslateModule,
        ValidationErrorPipe,
    ],
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
    @Input() public label!: string;
    @Input() public cls!: string;
    @Input() public placeholder: string = '';
    @Input() public control!: any;
    @Input() public inputCls!: string;
    @Input() public dropdownOptions!: DropdownInterface[];
    @Input() public name!: string;
    @Input() public showLabel: boolean = true;
    @Input() public optionValue: string = 'value';
}
