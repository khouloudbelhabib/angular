import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListederendezvousComponent } from './listederendezvous.component';

describe('ListederendezvousComponent', () => {
  let component: ListederendezvousComponent;
  let fixture: ComponentFixture<ListederendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListederendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListederendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
