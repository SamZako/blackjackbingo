import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackbingoComponent } from './blackjackbingo.component';

describe('BlackjackbingoComponent', () => {
  let component: BlackjackbingoComponent;
  let fixture: ComponentFixture<BlackjackbingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlackjackbingoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlackjackbingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
