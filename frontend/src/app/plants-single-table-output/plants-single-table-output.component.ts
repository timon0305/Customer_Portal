import {Component, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Mainlayout, MainlayoutComponent } from '../mainlayout/mainlayout.component';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatCheckboxChange} from '@angular/material/checkbox';
import {DatePipe, formatDate} from "@angular/common";
import {StatusTableItem} from "../table/statustable/statustable-datasources";
import {OverviewtableDataSource} from "../table/overviewtable/overviewtable-datasource";


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
  originSource : MatTableDataSource<UniqPlanOutPut>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UniqPlanOutPut>;

  constructor(
              private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver, 
              private mainlayoutComp: MainlayoutComponent,
              private ref: ChangeDetectorRef,
              ) {
    this.mainlayout =  mainlayoutComp;

  }

  data: UniqPlanOutPut[]= [];
  today= new Date();
  jsToday = '';
  jsMonth = '';
  todayEvent:string;
  monthEvent: string;

  uniqPlanData = [
    {id : 1, periodOf: '03-07-2020', to : '02-07-2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 2, periodOf: '02-07-2020', to : '01-07-2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 3, periodOf: '02-06-2020', to : '02-06-2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 4, periodOf: '02-05-2020', to : '02-05-2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 5, periodOf: '02-04-2020', to : '02-04-2020', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 6, periodOf: '02-07-2019', to : '02-07-2019', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 7, periodOf: '02-02-2019', to : '02-02-2019', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 8, periodOf: '02-01-2019', to : '02-01-2019', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 9, periodOf: '02-12-2018', to : '02-12-2018', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 10, periodOf: '02-09-2018', to : '02-09-2018', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 11, periodOf: '02-01-2018', to : '02-01-2018', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 12, periodOf: '01-01-2018', to : '01-01-2018', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 13, periodOf: '02-10-2017', to : '02-10-2017', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
    {id : 14, periodOf: '02-08-2017', to : '02-08-2017', networkConnectionPointExport: 50, import : 5, kostalInverters : 65, solarWattStorage : 15.4, senecStorageFacility : 12.5, consumer : 10.6, specificAnnualYield : 987.2},
  ];

  // @ts-ignore
  // @ts-ignore
  ngOnInit(): void {

    // @ts-ignore
    this.dataSource = new MatTableDataSource(this.uniqPlanData);
    this.ref.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // @ts-ignore
    this.originSource = new MatTableDataSource<UniqPlanOutPut>(this.uniqPlanData)
  }

  ngAfterViewInit(): void{
    this.route.parent.params.subscribe(params => {
        this.plantUniqName=params.uniqname;
        this.mainlayout.updateTitle("Anlage " + this.plantUniqName + " Tabelle Ertrag");
    });

  }

  todayClick(event) {
    if (event.checked === true) {
      this.jsToday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
      this.todayEvent = this.jsToday.slice(0, 10).trim();
      this.todayEvent = this.jsToday.slice(0, 10).toLowerCase();
      this.dataSource.data = this.dataSource.data.filter(item =>
        item.periodOf.toLowerCase().indexOf(this.todayEvent) > -1);
      this.table.dataSource = this.dataSource;
    } else {
      console.log('this=>', this.originSource);
      this.dataSource.data = this.originSource.data;
      this.table.dataSource = this.dataSource
    }
    this.ref.detectChanges()
  }

  thisMonthClick(event) {
    if (event.clicked === true) {
      this.jsMonth = formatDate(this.today, 'dd--MM-yyyy hh:mm:ss a', 'en-US', '+0530');
      this.monthEvent = this.jsMonth.slice(3, 10).trim();
      console.log(this.monthEvent)
    }
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
