// @ts-ignore
import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import { MatPaginator } from '@angular/material/paginator';
// @ts-ignore
import { MatSort } from '@angular/material/sort';
// @ts-ignore
import { MatTable } from '@angular/material/table';
import { OverviewtableDataSource, OverviewtableItem } from './overviewtable-datasource';

// @ts-ignore
@Component({
  selector: 'app-overviewtable',
  templateUrl: './overviewtable.component.html',
  styleUrls: ['./overviewtable.component.scss']
})
export class OverviewtableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<OverviewtableItem>;
  dataSource: OverviewtableDataSource;
  originalDataSource: OverviewtableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'plant', 'status', 'peakPower', 'energyToday', 'energyYesterday', 'energy7Days', 'energy30Days', 'specificAnualYield'];//, 'specificAnualYield'];

  constructor (
    private def: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.originalDataSource = new OverviewtableDataSource();
    this.dataSource = new OverviewtableDataSource();
  }

  applyFilter(filterValue: string) {
    this.table.dataSource = null;
    console.log('change event =================', filterValue);
    if (filterValue != '') {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();

      this.dataSource.data = this.dataSource.data.filter(item => item.plant.toLowerCase().indexOf(filterValue) > -1 );// = filterValue;
      console.log('filter result == ', this.dataSource, ', == ', filterValue)
      this.table.dataSource = this.dataSource;
    } else {
      this.dataSource.data = this.originalDataSource.data;
      console.log('all == ', this.originalDataSource)
      this.table.dataSource = this.dataSource;
    }

    this.def.detectChanges();
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
