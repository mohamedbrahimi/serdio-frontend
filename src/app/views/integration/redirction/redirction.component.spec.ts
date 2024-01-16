import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirctionComponent } from './redirction.component';

describe('RedirctionComponent', () => {
  let component: RedirctionComponent;
  let fixture: ComponentFixture<RedirctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirctionComponent]
    });
    fixture = TestBed.createComponent(RedirctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
