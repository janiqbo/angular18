import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpartsComponent } from './allparts.component';

describe('AllpartsComponent', () => {
  let component: AllpartsComponent;
  let fixture: ComponentFixture<AllpartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllpartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
