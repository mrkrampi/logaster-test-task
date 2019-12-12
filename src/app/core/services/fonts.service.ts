import {Injectable} from '@angular/core';
import * as WebFont from 'webfontloader';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontsService {
  loadedFonts = ['helvetica', 'Sans-Serif'];
  private subject = new BehaviorSubject(null);

  constructor() {
  }

  load(font: string): void {
    if (!this.loadedFonts.find(f => f === font)) {
      WebFont.load({
        google: {
          families: [font]
        },
        active: () => {
          this.loadedFonts = this.loadedFonts.concat(font);
          this.subject.next(null);
        }
      });
    }
    this.subject.next(null);
  }

  getStatus(): Observable<any> {
    return this.subject.asObservable();
  }
}
