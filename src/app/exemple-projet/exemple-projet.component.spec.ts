import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleProjetComponent } from './exemple-projet.component';

describe('ExempleProjetComponent', () => {
  let component: ExempleProjetComponent;
  let fixture: ComponentFixture<ExempleProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempleProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
