import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastprojectsComponent } from './lastprojects.component';

describe('LastprojectsComponent', () => {
  let component: LastprojectsComponent;
  let fixture: ComponentFixture<LastprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
