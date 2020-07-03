import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavService } from "./nav.service";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PlantsAllTableOutputComponent } from './plants-all-table-output/plants-all-table-output.component';
import { PlantsAllTableStatusComponent } from './plants-all-table-status/plants-all-table-status.component';
import { PlantsAllDiagramOutputComponent } from './plants-all-diagram-output/plants-all-diagram-output.component';
import { PlantsAllDiagramStatusComponent } from './plants-all-diagram-status/plants-all-diagram-status.component';
import { PlantsSingleTableOutputComponent } from './plants-single-table-output/plants-single-table-output.component';
import { PlantsSingleTableStatusComponent } from './plants-single-table-status/plants-single-table-status.component';
import { PlantsSingleDiagramOutputComponent } from './plants-single-diagram-output/plants-single-diagram-output.component';
import { PlantsSingleDiagramStatusComponent } from './plants-single-diagram-status/plants-single-diagram-status.component';
import { OverviewtableComponent } from './table/overviewtable/overviewtable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { StatustableComponent } from './table/statustable/statustable.component';
import { PropertyComponent } from './property/property.component';
import { HelpComponent } from './help/help.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import {ChartsModule} from "ng2-charts";
import { DoughnutChartComponent } from './chart/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './chart/radar-chart/radar-chart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import {DatePipe} from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

//import { Constants } from './constants';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    MenuListItemComponent,
    PlantsAllTableOutputComponent,
    PlantsAllTableStatusComponent,
    PlantsAllDiagramOutputComponent,
    PlantsAllDiagramStatusComponent,
    PlantsSingleTableOutputComponent,
    PlantsSingleTableStatusComponent,
    PlantsSingleDiagramOutputComponent,
    PlantsSingleDiagramStatusComponent,
    OverviewtableComponent,
    LoginComponent,
    StatustableComponent,
    PropertyComponent,
    HelpComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatCheckboxModule,
    ChartsModule,
    //Constants
  ],
  providers: [
    Title, 
    NavService,
    MainlayoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
