import { Injectable } from "@angular/core";
import { ToastType } from "../toast/toast.component";
import { BehaviorSubject } from "rxjs";

type horizontalPosition = 'left' | 'center' | 'right';
type verticalPosition = 'top' | 'middle' | 'bottom';
export type ScreenToastPosition = `${verticalPosition}-${horizontalPosition}`;

export interface ToastMessage {
  message: string;
  type: ToastType;
  position: ScreenToastPosition;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  public toastMessage = new BehaviorSubject<ToastMessage>({} as ToastMessage)

  public toastSubscription = this.toastMessage.asObservable();

  public displayToast(toastData:ToastMessage) {
    const {message, type, position} = toastData
    this.toastMessage.next({
      message,type,position
    })
  }
}
