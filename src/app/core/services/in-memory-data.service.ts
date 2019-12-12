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
          font: 'Helvatica',
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
            font: 'Helvatica',
            size: 36,
            color: '#1d621d'
          },
        id: 40119837
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
            font: 'Helvatica',
            size: 36,
            color: '#1d621d'
          },
        id: 40119837
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
            font: 'Helvatica',
            size: 36,
            color: '#1d621d'
          },
        id: 40119837
      }
    ];

    return {logos};
  }

  genId(): number {
    return Math.floor(Math.random() * 100000000);
  }
}
