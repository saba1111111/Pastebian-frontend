import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ContentService } from '../../../../shared/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css'],
})
export class DisplayContentComponent implements OnInit, OnDestroy {
  content: string = '';
  expireAt: number = Date.now();
  expireIn: number = 0;
  private intervalId!: any;

  constructor(
    private readonly contentService: ContentService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly zone: NgZone
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const contentId = params['id'];

      this.contentService.findContent(contentId).subscribe({
        next: (contentData) => {
          this.content = contentData.content;
          this.expireAt = contentData.expireAt;
          this.startCountDown();
        },
        error: () => this.router.navigate(['/share-content/content-not-found']),
      });
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCountDown(): void {
    this.updateRemainingTime();

    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.zone.run(() => {
          this.updateRemainingTime();
        });
      }, 1000);
    });
  }

  updateRemainingTime(): void {
    this.expireIn = this.expireAt - Date.now();

    if (this.expireIn <= 0) {
      clearInterval(this.intervalId);
      this.router.navigate(['/share-content/content-not-found']);
    }
  }
}
