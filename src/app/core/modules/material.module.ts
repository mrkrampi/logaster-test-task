import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatRadioModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatDividerModule,
  MatRadioModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule {
}
