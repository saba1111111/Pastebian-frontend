import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentExpireTimeOptions } from '../../constants/content-expire-time-options.constants';
import { ContentService } from '../../../../shared/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-content-form',
  templateUrl: './share-content-form.component.html',
  styleUrl: './share-content-form.component.css',
})
export class ShareContentFormComponent implements OnInit {
  contentExpireOptions = ContentExpireTimeOptions;
  defaultContentExpireTime = ContentExpireTimeOptions[0].value;
  content: string = '';
  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contentService: ContentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['', Validators.required],
      expireAt: [this.defaultContentExpireTime, Validators.required],
    });
  }

  onSubmit(): void {
    this.contentService.createContent(this.form.value).subscribe({
      next: (data) => this.router.navigate([`/share-content/${data.id}`]),
      error: (error) => console.log(error),
    });
  }
}
