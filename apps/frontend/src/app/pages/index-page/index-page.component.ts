import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [CommonModule, PageWrapperComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css',
})
export class IndexPageComponent {}
