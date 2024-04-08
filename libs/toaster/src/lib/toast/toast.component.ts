import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ToastType = 'info' | 'success' | 'error' | 'warning';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  @Input() message = '';
  @Input() type:ToastType = 'info';
}
