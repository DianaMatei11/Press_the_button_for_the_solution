import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezolvareProblemaComponent } from './rezolvare-problema.component';

describe('RezolvareProblemaComponent', () => {
  let component: RezolvareProblemaComponent;
  let fixture: ComponentFixture<RezolvareProblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezolvareProblemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezolvareProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
