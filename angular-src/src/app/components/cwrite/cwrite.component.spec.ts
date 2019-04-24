import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwriteComponent } from './cwrite.component';

describe('CwriteComponent', () => {
  let component: CwriteComponent;
  let fixture: ComponentFixture<CwriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
