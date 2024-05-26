import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'share-content',
    pathMatch: 'full',
  },
  {
    path: 'share-content',
    loadChildren: () =>
      import('./pages/share-content/share-content.module').then(
        (m) => m.ShareContentModule
      ),
  },
  {
    path: 'share-content/content-not-found',
    loadChildren: () =>
      import('./pages/content-not-found/content-not-found.module').then(
        (m) => m.ContentNotFoundModule
      ),
  },
  {
    path: 'share-content/:id',
    loadChildren: () =>
      import('./pages/view-content/view-content.module').then(
        (m) => m.ViewContentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
