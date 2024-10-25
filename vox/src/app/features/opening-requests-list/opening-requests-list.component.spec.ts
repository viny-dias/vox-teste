import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningRequestsListComponent } from './opening-requests-list.component';

describe('OpeningRequestsListComponent', () => {
  let component: OpeningRequestsListComponent;
  let fixture: ComponentFixture<OpeningRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningRequestsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
