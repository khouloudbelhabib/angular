import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecommendationComponent } from './list-recommendation.component';

describe('ListRecommendationComponent', () => {
  let component: ListRecommendationComponent;
  let fixture: ComponentFixture<ListRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
