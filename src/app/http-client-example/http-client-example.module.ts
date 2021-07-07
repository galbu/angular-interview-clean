import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientExampleComponent} from './http-client-example.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HttpClientExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HttpClientExampleComponent
      }
    ])
  ],
  providers: []
})
export class HttpClientExampleModule {
}
