import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationListComponent } from './housing-location-list.component';

describe('HousingLocationListComponent', () => {
  let component: HousingLocationListComponent;
  let fixture: ComponentFixture<HousingLocationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HousingLocationListComponent],
    });
    fixture = TestBed.createComponent(HousingLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
