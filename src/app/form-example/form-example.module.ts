import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormExampleComponent} from './form-example.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FormExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: FormExampleComponent,
    }]),
  ],
  providers: []
})
export class FormExampleModule {
}
