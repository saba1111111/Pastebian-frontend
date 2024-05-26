import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentNotFoundComponent } from './components/content-not-found/content-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContentNotFoundComponent,
      },
    ]),
  ],
  declarations: [ContentNotFoundComponent],
})
export class ContentNotFoundModule {}
