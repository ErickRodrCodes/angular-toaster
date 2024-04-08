import { Component, inject } from '@angular/core';
import { ScreenToastPosition, ToastComponent, ToastType, ToasterService, ToasterWrapperComponent } from '@angular-toaster/toaster'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-wrapper',
  standalone: true,
  imports: [CommonModule,ToastComponent,ToasterWrapperComponent],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.css',
})
export class PageWrapperComponent {
  private toasterService = inject(ToasterService);

  public runToast(position:ScreenToastPosition, message:string, type:ToastType = 'info'){
    this.toasterService.displayToast({
      position,
      message,
      type
    })
  }
}
