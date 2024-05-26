import { NgModule } from '@angular/core';
import { ShareContentFormComponent } from './components/share-content-form/share-content-form.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextAreaComponent } from '../../shared/components/text-area/text-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SelectComponent } from '../../shared/components/select/select.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShareContentFormComponent,
      },
    ]),
    TextAreaComponent,
    FormsModule,
    ButtonComponent,
    SelectComponent,
    ReactiveFormsModule,
  ],
  declarations: [ShareContentFormComponent],
})
export class ShareContentModule {}
