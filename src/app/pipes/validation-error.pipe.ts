import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'validationError',
    standalone: true,
    pure: false,
})
export class ValidationErrorPipe implements PipeTransform {
    constructor(private translateService: TranslateService) {}
    transform(
        control: AbstractControl,
        fieldName: string = 'Field',
        message?: string
    ): string {
        // Custom Error messages
        // Required Error
        if (control.hasError('required')) {
            if (message) {
                return message;
            } else {
                return `${fieldName} ${this.translateService.instant(
                    'validation.isRequired'
                )}.`;
            }
        }

        // Email Error
        if (control.hasError('email')) {
            return `${fieldName} ${this.translateService.instant(
                'validation.notValid'
            )}.`;
        }

        // Min Length Error
        if (control.hasError('minlength')) {
            return `${fieldName} ${this.translateService.instant(
                'validation.minLength'
            )} ${control.getError('minlength').requiredLength}`;
        }

        // Max Length Error
        if (control.hasError('maxlength')) {
            return `${fieldName} ${this.translateService.instant(
                'validation.maxLength'
            )} ${control.getError('maxlength').requiredLength}`;
        }

        //pattern Error
        if (control.hasError('pattern')) {
            return `${fieldName} ${this.translateService.instant(
                'validation.notValid'
            )}.`;
        }

        return '';
    }
}
