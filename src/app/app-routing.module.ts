import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'form-example',
    loadChildren: () => import('./form-example/form-example.module').then(value => value.FormExampleModule),
  },
  {
    path: 'http-client-example',
    loadChildren: () => import('./http-client-example/http-client-example.module').then(value => value.HttpClientExampleModule),
  },
  {
    path: 'existing-form-example',
    loadChildren: () => import('./existing-form-example/existing-form-example.module').then(value => value.ExistingFormExampleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
