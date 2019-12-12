import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogosListComponent} from './logos-list/logos-list.component';
import {EditLogoComponent} from './edit-logo/edit-logo.component';


const routes: Routes = [
  {
    path: 'logos',
    component: LogosListComponent
  },
  {
    path: 'create',
    component: EditLogoComponent
  },
  {
    path: 'logos/:id',
    component: EditLogoComponent
  },
  {
    path: 'logos/new',
    component: EditLogoComponent
  },
  {
    path: '**',
    redirectTo: 'logos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
