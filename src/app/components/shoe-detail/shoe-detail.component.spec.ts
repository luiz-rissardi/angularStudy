import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeDetailComponent } from './shoe-detail.component';

describe('ShoeDetailComponent', () => {
  let component: ShoeDetailComponent;
  let fixture: ComponentFixture<ShoeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
