import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-p-toaster',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './p-toaster.component.html',
  styleUrls: ['./p-toaster.component.scss'],
})
export class PToasterComponent {}
