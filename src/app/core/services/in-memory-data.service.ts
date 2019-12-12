import {Injectable} from '@angular/core';
import {LogoModel} from '../models/logo-model';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const logos = [{
      figure:
        {
          type: 'square',
          color: '#fd4040'
        },
      text:
        {
          text: 'Red square',
          font: 'Helvetica',
          size: 36,
          color: '#1d3662'
        },
      id: 54259910
    },
      {
        figure:
          {
            type: 'circle',
            color: '#ec0000'
          },
        text:
          {
            text: 'Japan',
            font: 'Helvetica',
            size: 36,
            color: '#1d621d'
          },
        id: 40119837
      },
      {
        figure:
          {
            type: 'triangle',
            color: '#00ff00'
          },
        text:
          {
            text: 'Green triangle',
            font: 'Helvetica',
            size: 24,
            color: '#1d621d'
          },
        id: 40985837
      },
      {
        figure:
          {
            type: 'circle',
            color: '#ec0000'
          },
        text:
          {
            text: 'Japan',
            font: 'Helvetica',
            size: 36,
            color: '#1d621d'
          },
        id: 40716837
      }
    ];

    return {logos};
  }

  genId(): number {
    return Math.floor(Math.random() * 100000000);
  }
}
