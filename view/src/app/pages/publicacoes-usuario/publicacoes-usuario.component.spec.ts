import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacoesUsuarioComponent } from './publicacoes-usuario.component';

describe('PublicacoesUsuarioComponent', () => {
  let component: PublicacoesUsuarioComponent;
  let fixture: ComponentFixture<PublicacoesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacoesUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacoesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
