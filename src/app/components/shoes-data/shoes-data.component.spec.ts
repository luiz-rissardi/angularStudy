import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesDataComponent } from './shoes-data.component';

describe('ShoesDataComponent', () => {
  let component: ShoesDataComponent;
  let fixture: ComponentFixture<ShoesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
