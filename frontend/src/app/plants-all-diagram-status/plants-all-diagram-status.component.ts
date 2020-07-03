import { Component, AfterViewInit, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Mainlayout, MainlayoutComponent } from '../mainlayout/mainlayout.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plants-all-diagram-status',
  templateUrl: './plants-all-diagram-status.component.html',
  styleUrls: ['./plants-all-diagram-status.component.scss']
})
export class PlantsAllDiagramStatusComponent implements AfterViewInit, OnInit {

  mainlayout: Mainlayout;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
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
/*    
    this.route.queryParams.subscribe(params => {
      console.log("async queryparams " + JSON.stringify(params));
    });
    this.route.parent.params.subscribe(params => {
        this.plantUniqName=params.uniqname;
    });

*/

    this.mainlayout.updateTitle("Status aller Anlagen (Diagramme)");

  }
}
