// @ts-ignore
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlantsAllTableOutputComponent } from './plants-all-table-output/plants-all-table-output.component';
import { PlantsAllTableStatusComponent } from './plants-all-table-status/plants-all-table-status.component';
import { PlantsAllDiagramOutputComponent } from './plants-all-diagram-output/plants-all-diagram-output.component';
import { PlantsAllDiagramStatusComponent } from './plants-all-diagram-status/plants-all-diagram-status.component';
import { PlantsSingleTableOutputComponent } from './plants-single-table-output/plants-single-table-output.component';
import { PlantsSingleTableStatusComponent } from './plants-single-table-status/plants-single-table-status.component';
import { PlantsSingleDiagramOutputComponent } from './plants-single-diagram-output/plants-single-diagram-output.component';
import { PlantsSingleDiagramStatusComponent } from './plants-single-diagram-status/plants-single-diagram-status.component';
import { Constants } from './constants';

const routes: Routes = [
  { 
     path: Constants.UrlAllUnits,
     component: MainlayoutComponent,
     children: [
      {
        path: Constants.UrlTableOutput,
        component: PlantsAllTableOutputComponent
      },
      {
        path: Constants.UrlTableStatus,
        component: PlantsAllTableStatusComponent
      },
      {
        path: Constants.UrlDiagramOutput,
        component: PlantsAllDiagramOutputComponent
      },
      {
        path: Constants.UrlDiagramStatus,
        component: PlantsAllDiagramStatusComponent
      }
     ]
  },
  { path: Constants.UrlSingleUnit + '/:uniqname',
     component: MainlayoutComponent,
     children: [
      {
        path: Constants.UrlTableOutput,
        component: PlantsSingleTableOutputComponent
      },
      {
        path: Constants.UrlTableStatus,
        component: PlantsSingleTableStatusComponent
      },
      {
        path: Constants.UrlDiagramOutput,
        component: PlantsSingleDiagramOutputComponent
      },
      {
        path: Constants.UrlDiagramStatus,
        component: PlantsSingleDiagramStatusComponent
      }

     ]
  },
  { path: Constants.UrlHelp, component: MainlayoutComponent, pathMatch: 'full'},
  { path: Constants.UrlProperties, component: MainlayoutComponent, pathMatch: 'full'},

  //catchall
  { path: '**',   redirectTo: Constants.UrlAllUnitsTableOutput }
  //{ path: '**', component: MainlayoutComponent, pathMatch: 'full'}
];


@NgModule({
//  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
