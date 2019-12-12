import {Component, OnInit} from '@angular/core';
import {LogosService} from '../core/services/logos.service';
import {LogoModel} from '../core/models/logo-model';

@Component({
  selector: 'app-logos-list',
  templateUrl: './logos-list.component.html',
  styleUrls: ['./logos-list.component.scss']
})
export class LogosListComponent implements OnInit {
  logos: LogoModel[];

  constructor(private logosService: LogosService) {
    this.loadLogos();
  }

  ngOnInit() {
  }

  loadLogos(): void {
    this.logosService.getLogos().subscribe((logos: LogoModel[]) => {
      this.logos = logos;
    });
  }
}
