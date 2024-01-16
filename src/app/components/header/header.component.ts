import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ImageComponent } from '../image/image.component';
import { HeadingComponent } from '../heading/heading.component';
import { LANGUAGE_OPTIONS, default_imgs } from 'src/app/constants/constants';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownInterface } from 'src/app/models/dropdown.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ImageComponent, HeadingComponent, TranslateModule, DropdownComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  userName: string = "Chris";
  profilePhoto: string = default_imgs.profile_picture;
  languageForm!: FormGroup;
  subscription!: Subscription;
  languageOptions!: DropdownInterface[];

  constructor(public translateService: TranslateService,
    private fb: FormBuilder,){}

  ngOnInit(): void {
    this.createForm();
    this.getLanguageOptions();
    this.setTranslationsLanguage();
    this.subscribeFormChanges();
  }
 
  createForm = () => {
      this.languageForm = this.fb.group({
          language: ['de'],
      });
  };

  private getLanguageOptions = () => {
      this.languageOptions = LANGUAGE_OPTIONS;
  };

  private setTranslationsLanguage = () => {
      const languageValues = this.languageOptions.map(
          (lang) => lang.value as string,
      );
      this.translateService.addLangs(languageValues);
      const defaultLang =
          this.languageOptions.find((lang) => lang.value == 'de') ||
          this.languageOptions[0];
      this.switchLang(defaultLang.value as string);
  };

  subscribeFormChanges = () => {
      this.languageForm.controls['language'].valueChanges.subscribe(
          (value) => {
              this.switchLang(value);
          },
      );
  };
  switchLang(lang: string) {
    this.translateService.use(lang);
  }
}
