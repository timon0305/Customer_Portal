import {Component, AfterViewInit, OnInit, ChangeDetectorRef} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Mainlayout, MainlayoutComponent } from '../mainlayout/mainlayout.component';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-plants-single-table-status',
  templateUrl: './plants-single-table-status.component.html',
  styleUrls: ['./plants-single-table-status.component.scss']
})
export class PlantsSingleTableStatusComponent implements AfterViewInit, OnInit {

  plantUniqName: string;
  mainlayout: Mainlayout;
  constructor(
              private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver, 
              private mainlayoutComp: MainlayoutComponent,
              private ref: ChangeDetectorRef
              ) {
      this.mainlayout =  mainlayoutComp;
  }
  dataSource: MatTableDataSource<UniqStatus>;

  Performances = [
    {icon: 'check', title: 'Kostal Inverters',status: '15.320'},
    {icon: 'check', title: 'Senec Store',status: '2.500'},
    {icon: 'warning', title: 'Solar Watt Storage',status: '2.150'},
    {icon: 'check', title: 'Consumer',status: '870'},
    {icon: 'check', title: 'Network Connection Point',status: '10.660'},
  ];

  data: UniqStatus[]= [];
  displayedColumns = ['date', 'detail'];

  uniqStatus = [
    {date: '2020.04.03 14:11', detail: 'Batterietemperatur zu warm Es droht Notabschaltung.\n' +
        'Service wurde benachrichtigt'},
    {date: '2020.04.03 17:10', detail: 'Batterietemperature ok'}
  ];

  ngOnInit(): void {
    // @ts-ignore
    this.dataSource = new MatTableDataSource(this.uniqStatus);
    this.ref.detectChanges();
  }

  ngAfterViewInit(): void{
    this.route.parent.params.subscribe(params => {
        this.plantUniqName=params.uniqname;
        this.mainlayout.updateTitle("Anlage " + this.plantUniqName + " Tabelle Status");
    });
  }
}
export interface UniqStatus {
  date: string;
  detail: string;
}
