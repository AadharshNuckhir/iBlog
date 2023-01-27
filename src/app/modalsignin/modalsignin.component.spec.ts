import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsigninComponent } from './modalsignin.component';

describe('ModalsigninComponent', () => {
  let component: ModalsigninComponent;
  let fixture: ComponentFixture<ModalsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
