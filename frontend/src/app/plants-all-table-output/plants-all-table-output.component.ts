import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Mainlayout, MainlayoutComponent } from '../mainlayout/mainlayout.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plants-all-table-output',
  templateUrl: './plants-all-table-output.component.html',
  styleUrls: ['./plants-all-table-output.component.scss']
})
export class PlantsAllTableOutputComponent implements AfterViewInit, OnInit {

  mainlayout: Mainlayout;

  @Input() overviewTable: any;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'Anlagenübersicht', cols: 2, rows: 1, dataref: "should load data PlantsAllTableData1 from restservice data/plants-all/table/view1"},
        { title: 'Ertragsübersicht', cols: 2, rows: 1 , dataref: "should load data PlantsAllTableData2 from restservice data/plants-all/table/view2"},
        { title: 'text data 1', cols: 1, rows: 1 , dataref: "should load data TextAllData1 from restservice data/plants-all/table/view2"},
        { title: 'text data 2', cols: 1, rows: 2, dataref: "should load data TextAllData2 from restservice data/plants-all/table/view2"},
        { title: 'text data 3', cols: 1, rows: 1, dataref: "should load data TextAllData3 from restservice data/plants-all/table/view2"}
      ];
    })
  );

  constructor(
              private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver, 
              private mainlayoutComp: MainlayoutComponent
              ) {
      this.mainlayout =  mainlayoutComp;
  }

  token: String;
  customerId : String;

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.customerId = localStorage.getItem('customerId');

  }

  ngAfterViewInit(): void{
/*    
    this.route.queryParams.subscribe(params => {
      console.log("async queryparams " + JSON.stringify(params));
    });
    this.route.parent.params.subscribe(params => {
        this.plantUniqName=params.uniqname;
    });

*/

    this.mainlayout.updateTitle("Ertrag aller Anlagen (Tabelle)");

  }
}
