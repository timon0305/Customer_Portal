import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OverviewtableDataSource, OverviewtableItem } from './overviewtable-datasource';

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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'plant', 'status', 'peakPower', 'energyToday', 'energyYesterday', 'energy7Days', 'energy30Days', 'specificAnualYield'];//, 'specificAnualYield'];

  ngOnInit() {
    this.dataSource = new OverviewtableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
