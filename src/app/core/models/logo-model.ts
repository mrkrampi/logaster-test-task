import {FigureModel} from './figure-model';
import {TextModel} from './text-model';

export interface LogoModel {
  id: number;
  figure: FigureModel;
  text: TextModel;
}
