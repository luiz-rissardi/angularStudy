import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesPresentationComponent } from './shoes-presentation.component';

describe('ShoesPresentationComponent', () => {
  let component: ShoesPresentationComponent;
  let fixture: ComponentFixture<ShoesPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
