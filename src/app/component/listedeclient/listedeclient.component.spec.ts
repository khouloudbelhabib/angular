import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedeclientComponent } from './listedeclient.component';

describe('ListedeclientComponent', () => {
  let component: ListedeclientComponent;
  let fixture: ComponentFixture<ListedeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedeclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
