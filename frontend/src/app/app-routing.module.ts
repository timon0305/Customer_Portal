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
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./core/auth/_guard/auth.guard";
import {PropertyComponent} from "./property/property.component";
import {HelpComponent} from "./help/help.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [

  {
    path: '',
    redirectTo : Constants.URlOpermikus,
    pathMatch: 'full'
  },
  {
    path: Constants.URlOpermikus,
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: Constants.UrlApple,
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  { 
     path: Constants.UrlAllUnits,
     canActivate: [AuthGuard],
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
  { path:
    Constants.UrlHelp,
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        component: HelpComponent
      }
    ]
  },
  {
    path: Constants.UrlProperties,
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        component: PropertyComponent
      }
    ]
  },

  //catchall
  { path: '**',   redirectTo: Constants.UrlAllUnitsTableOutput }
  //{ path: '**', component: MainlayoutComponent, pathMatch: 'full'}
];


@NgModule({
//  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
