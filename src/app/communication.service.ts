import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  constructor() {}

  private messageSource = new Subject<number>();
  currentMessage = this.messageSource.asObservable();

  userPostsCommunication(mssg: number) {
    this.messageSource.next(mssg);
  }
}
