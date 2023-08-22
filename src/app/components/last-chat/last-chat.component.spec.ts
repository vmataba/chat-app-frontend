import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastChatComponent } from './last-chat.component';

describe('LastChatComponent', () => {
  let component: LastChatComponent;
  let fixture: ComponentFixture<LastChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
