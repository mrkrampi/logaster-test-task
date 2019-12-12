import {ElementRef, Injectable} from '@angular/core';
import {FigureModel} from '../models/figure-model';
import {TextModel} from '../models/text-model';
import {FontsService} from './fonts.service';

@Injectable({
  providedIn: 'root'
})
export class DrawFigureService {
  constructor(private fontService: FontsService) {
  }

  drawFigure(canvas: ElementRef, context: CanvasRenderingContext2D, formState: FigureModel): void {
    context.clearRect(0, 0, 500, 150);

    switch (formState.type) {
      case 'circle': {
        const centerX = canvas.nativeElement.width / 2;
        const centerY = canvas.nativeElement.height / 2;
        const radius = 60;

        context.beginPath();
        context.arc(centerX, centerY - 70, radius, 0, 2 * Math.PI);
        context.fillStyle = formState.color;
        context.fill();
        break;
      }
      case 'square': {
        const centerX = canvas.nativeElement.width / 2;

        context.beginPath();
        context.rect(centerX - 50, 30, 100, 100);
        context.fillStyle = formState.color;
        context.fill();
        break;
      }
      case 'triangle': {
        context.beginPath();
        context.moveTo(100, 150);
        context.lineTo(200, 15);
        context.lineTo(300, 150);
        context.fillStyle = formState.color;
        context.fill();
        break;
      }
    }
  }

  drawText(canvas: ElementRef, context: CanvasRenderingContext2D, textConf: TextModel) {
    this.fontService.load(textConf.font);
    this.fontService.getStatus().subscribe(() => {
      context.clearRect(0, 150, 500, 400);

      context.fillStyle = textConf.color;
      context.textAlign = 'center';
      context.font = `${textConf.size}px ${textConf.font}`;
      context.fillText(textConf.text, 200, 200);
    });
  }
}
