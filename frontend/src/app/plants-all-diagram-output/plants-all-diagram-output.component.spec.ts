import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { PlantsAllDiagramOutputComponent } from './plants-all-diagram-output.component';

describe('PlantsAllDiagramOutputComponent', () => {
  let component: PlantsAllDiagramOutputComponent;
  let fixture: ComponentFixture<PlantsAllDiagramOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlantsAllDiagramOutputComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsAllDiagramOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
