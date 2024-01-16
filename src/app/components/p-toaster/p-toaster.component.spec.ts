import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PToasterComponent } from './p-toaster.component';

describe('PToasterComponent', () => {
  let component: PToasterComponent;
  let fixture: ComponentFixture<PToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PToasterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
