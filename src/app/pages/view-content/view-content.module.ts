import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayContentComponent } from './components/display-content/display-content.component';
import { TextAreaComponent } from '../../shared/components/text-area/text-area.component';
import { RemainingTimePipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DisplayContentComponent,
      },
    ]),
    TextAreaComponent,
  ],
  declarations: [DisplayContentComponent, RemainingTimePipe],
})
export class ViewContentModule {}
