import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipDisplayComponent } from './championship-display.component';

describe('ChampionshipDisplayComponent', () => {
  let component: ChampionshipDisplayComponent;
  let fixture: ComponentFixture<ChampionshipDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
