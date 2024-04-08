import { Component, DestroyRef, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import { CommonModule } from '@angular/common';
import { ToastMessage, ToasterService } from '../service/toaster.service';
import { filter } from 'rxjs';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'ToasterWrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster-wrapper.component.html',
  styleUrl: './toaster-wrapper.component.css',
})
export class ToasterWrapperComponent implements OnInit {
  @ViewChild('Toast1', {read: ViewContainerRef}) toast1!: ViewContainerRef;
  @ViewChild('Toast2', {read: ViewContainerRef}) toast2!: ViewContainerRef;
  @ViewChild('Toast3', {read: ViewContainerRef}) toast3!: ViewContainerRef;
  @ViewChild('Toast4', {read: ViewContainerRef}) toast4!: ViewContainerRef;
  @ViewChild('Toast5', {read: ViewContainerRef}) toast5!: ViewContainerRef;
  @ViewChild('Toast6', {read: ViewContainerRef}) toast6!: ViewContainerRef;
  @ViewChild('Toast7', {read: ViewContainerRef}) toast7!: ViewContainerRef;
  @ViewChild('Toast8', {read: ViewContainerRef}) toast8!: ViewContainerRef;
  @ViewChild('Toast9', {read: ViewContainerRef}) toast9!: ViewContainerRef;

  private toastService = inject(ToasterService);

  public destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.toastService.toastSubscription.pipe(
      filter((value:ToastMessage) => {
        return Object.keys(value).length === 3 && value.message !== ''
      }),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe({
      next: (toastMessage) => {
        let containerRef:ViewContainerRef;

        switch(toastMessage.position) {
          case 'top-left':
            containerRef = this.toast1;
            break;
          case 'top-center':
            containerRef = this.toast2;
            break;
          case 'top-right':
            containerRef = this.toast3;
            break;
          case 'middle-left':
            containerRef = this.toast4;
            break;
          case 'middle-center':
            containerRef = this.toast5;
            break;
          case 'middle-right':
            containerRef = this.toast6;
            break;
          case 'bottom-left':
            containerRef = this.toast7;
            break;
          case 'bottom-center':
            containerRef = this.toast8;
            break;
          case 'bottom-right':
            containerRef = this.toast9;
            break;
          default :
            containerRef = this.toast9;
            break;
        }

        const toast = containerRef.createComponent(ToastComponent);
        toast.instance.message = toastMessage.message;
        toast.instance.type = toastMessage.type

        setTimeout(() => {
          toast.destroy()
        },3000)
      }
      })
  }


}
