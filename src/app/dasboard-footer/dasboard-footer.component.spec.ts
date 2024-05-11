import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardFooterComponent } from './dasboard-footer.component';

describe('DasboardFooterComponent', () => {
  let component: DasboardFooterComponent;
  let fixture: ComponentFixture<DasboardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasboardFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasboardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
