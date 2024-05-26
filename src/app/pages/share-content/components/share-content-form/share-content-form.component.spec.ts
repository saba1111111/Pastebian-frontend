import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareContentFormComponent } from './share-content-form.component';

describe('ShareContentFormComponent', () => {
  let component: ShareContentFormComponent;
  let fixture: ComponentFixture<ShareContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareContentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
