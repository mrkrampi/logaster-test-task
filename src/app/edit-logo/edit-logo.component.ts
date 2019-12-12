import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TextModel} from '../core/models/text-model';
import {LogosService} from '../core/services/logos.service';
import {FigureModel} from '../core/models/figure-model';
import {ActivatedRoute, Router} from '@angular/router';
import {LogoModel} from '../core/models/logo-model';
import {DrawFigureService} from '../core/services/draw-figure.service';

@Component({
  selector: 'app-edit-logo',
  templateUrl: './edit-logo.component.html',
  styleUrls: ['./edit-logo.component.scss']
})
export class EditLogoComponent implements AfterViewInit {
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  context: CanvasRenderingContext2D;
  private logoForm: FormGroup;
  private logo: LogoModel;

  constructor(private formBuilder: FormBuilder,
              private logosService: LogosService,
              private router: Router,
              private route: ActivatedRoute,
              private draw: DrawFigureService) {
    this.buildForm();
    const id = Number(this.route.snapshot.params.id);
    if (Number.isInteger(id)) {
      this.logosService.getLogo(id)
        .subscribe((logo: LogoModel) => {
          this.logo = logo;
          this.buildForm();
          this.draw.drawText(this.canvas, this.context, logo.text);
          this.draw.drawFigure(this.canvas, this.context, logo.figure);
        });
    }
  }

  buildForm(): void {
    this.logoForm = this.formBuilder.group({
      figure: this.formBuilder.group({
        type: [this.logo && this.logo.figure.type || '', Validators.required],
        color: [this.logo && this.logo.figure.color || '', Validators.required]
      }),
      text: this.formBuilder.group({
        text: [this.logo && this.logo.text.text || '', Validators.required],
        font: [this.logo && this.logo.text.font || '', Validators.required],
        size: [this.logo && this.logo.text.size || 36, Validators.required],
        color: [this.logo && this.logo.text.color || '', Validators.required]
      })
    });
    this.logoForm.get('figure').valueChanges.subscribe((figure: FigureModel) =>
      this.draw.drawFigure(this.canvas, this.context, figure));
    this.logoForm.get('text').valueChanges.subscribe((text: TextModel) =>
      this.draw.drawText(this.canvas, this.context, text));
  }

  ngAfterViewInit(): void {
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
  }

  saveLogo(): void {
    if (this.logo) {
      this.logosService.updateLogo({...this.logo, ...this.logoForm.value})
        .subscribe(async () => {
          await this.router.navigate(['/']);
        });
    } else {
      this.logosService.addLogo(this.logoForm.value)
        .subscribe(async () => {
          await this.router.navigate(['/']);
        });
    }
  }
}
