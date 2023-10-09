import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasDetailComponent } from './pessoas-detail.component';

describe('PessoasDetailComponent', () => {
  let component: PessoasDetailComponent;
  let fixture: ComponentFixture<PessoasDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasDetailComponent]
    });
    fixture = TestBed.createComponent(PessoasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
