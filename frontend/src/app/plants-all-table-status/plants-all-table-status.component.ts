import { Component, AfterViewInit, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Mainlayout, MainlayoutComponent } from '../mainlayout/mainlayout.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plants-all-table-status',
  templateUrl: './plants-all-table-status.component.html',
  styleUrls: ['./plants-all-table-status.component.scss']
})
export class PlantsAllTableStatusComponent implements AfterViewInit, OnInit {

  mainlayout: Mainlayout;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 , id: "blafasel"},
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
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



  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.mainlayout.updateTitle("Status aller Anlagen");

  }
}
