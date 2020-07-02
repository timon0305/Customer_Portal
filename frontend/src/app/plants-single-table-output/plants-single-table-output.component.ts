import {Component, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Mainlayout, MainlayoutComponent } from '../mainlayout/mainlayout.component';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-plants-single-table-output',
  templateUrl: './plants-single-table-output.component.html',
  styleUrls: ['./plants-single-table-output.component.scss']
})
export class PlantsSingleTableOutputComponent implements AfterViewInit, OnInit {

  plantUniqName: string;
  mainlayout: Mainlayout;

  displayedColumns: string[] = ['id', 'periodOf', 'to', 'networkConnectionPointExport', 'import', 'kostalInverters', 'solarWattStorage', 'senecStorageFacility', 'consumer', 'specificAnnualYield', 'download'];

  dataSource: MatTableDataSource<UniqPlanOutPut>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
              private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver, 
              private mainlayoutComp: MainlayoutComponent,
              private ref: ChangeDetectorRef
              ) {
    this.mainlayout =  mainlayoutComp;

  }

  data: UniqPlanOutPut[]= [];

  uniqPlanData = [
    {id : 1, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 2, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 3, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 4, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 5, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 6, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 7, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 8, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 9, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 10, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 11, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 12, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 13, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 14, periodOf: '05.06.2020', to : '05.06.2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
  ];

  ngOnInit(): void {

    // @ts-ignore
    this.dataSource = new MatTableDataSource(this.uniqPlanData);
    this.ref.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void{
    this.route.parent.params.subscribe(params => {
        this.plantUniqName=params.uniqname;
        this.mainlayout.updateTitle("Anlage " + this.plantUniqName + " Tabelle Ertrag");
    });

  }
}

export interface UniqPlanOutPut {
  id : string;
  periodOf: string;
  to : string;
  networkConnectionPointExport: number;
  import : number;
  kostalInverters : number;
  solarWattStorage : number;
  senecStorageFacility : number;
  consumer : number
  specificAnnualYield : number;
  download: string;
}
