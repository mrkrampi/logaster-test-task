import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {LogoModel} from '../core/models/logo-model';
import {LogosService} from '../core/services/logos.service';
import {DrawFigureService} from '../core/services/draw-figure.service';

@Component({
  selector: 'app-logo-card',
  templateUrl: './logo-card.component.html',
  styleUrls: ['./logo-card.component.scss']
})
export class LogoCardComponent implements AfterViewInit {
  @Input() logo: LogoModel;
  @Output() deleted = new EventEmitter();
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  context: CanvasRenderingContext2D;

  constructor(private logosService: LogosService,
              private draw: DrawFigureService) {
  }

  ngAfterViewInit(): void {
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
    this.draw.drawFigure(this.canvas, this.context, this.logo.figure);
    this.draw.drawText(this.canvas, this.context, this.logo.text);
  }

  removeLogo(id: number) {
    this.logosService.removeLogo(id)
      .subscribe(() => {
        this.deleted.emit();
      });
  }
}
