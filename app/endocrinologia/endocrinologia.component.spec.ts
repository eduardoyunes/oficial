import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndocrinologiaComponent } from './endocrinologia.component';

describe('EndocrinologiaComponent', () => {
  let component: EndocrinologiaComponent;
  let fixture: ComponentFixture<EndocrinologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndocrinologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndocrinologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
