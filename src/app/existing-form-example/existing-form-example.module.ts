import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExistingFormExampleComponent} from './existing-form-example.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ExistingFormExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ExistingFormExampleComponent
      }
    ])
  ],
  providers: []
})
export class ExistingFormExampleModule {
}
