// @ts-ignore
import { BrowserModule, Title } from '@angular/platform-browser';
// @ts-ignore
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// @ts-ignore
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
// @ts-ignore
import { LayoutModule } from '@angular/cdk/layout';
// @ts-ignore
import { MatToolbarModule } from '@angular/material/toolbar';
// @ts-ignore
import { MatButtonModule } from '@angular/material/button';
// @ts-ignore
import { MatSidenavModule } from '@angular/material/sidenav';
// @ts-ignore
import { MatIconModule } from '@angular/material/icon';
// @ts-ignore
import { MatListModule } from '@angular/material/list';
// @ts-ignore
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavService } from "./nav.service";
// @ts-ignore
import { MatGridListModule } from '@angular/material/grid-list';
// @ts-ignore
import { MatCardModule } from '@angular/material/card';
// @ts-ignore
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
// @ts-ignore
import { MatTableModule } from '@angular/material/table';
// @ts-ignore
import { MatPaginatorModule } from '@angular/material/paginator';
// @ts-ignore
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
// @ts-ignore
import {MatFormFieldModule} from "@angular/material/form-field";
// @ts-ignore
import {MatCheckboxModule} from "@angular/material/checkbox";
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import {MatInputModule} from "@angular/material/input";
// @ts-ignore
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
//import { Constants } from './constants';

// @ts-ignore
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
    ToastrModule.forRoot()
//    ,
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
