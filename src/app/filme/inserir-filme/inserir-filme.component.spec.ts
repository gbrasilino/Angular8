import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFilmeComponent } from './inserir-filme.component';

describe('InserirFilmeComponent', () => {
  let component: InserirFilmeComponent;
  let fixture: ComponentFixture<InserirFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
