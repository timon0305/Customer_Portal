import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";
import {StatusTableDataSource, StatusTableItem} from './statustable-datasources';

@Component({
  selector: 'app-statustable',
  templateUrl: './statustable.component.html',
  styleUrls: ['./statustable.component.scss']
})
export class StatustableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<StatusTableItem>;
  dataSource: StatusTableDataSource;
  originalDataSource: StatusTableDataSource;

  displayedColumns = ['plant', 'state', 'pv', 'storage', 'heading', 'otherConsumer', 'grid'];

  constructor(
    private def: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.originalDataSource = new StatusTableDataSource();
    this.dataSource = new StatusTableDataSource();
  }

  applyFilter(filterValue: string) {
    this.table.dataSource = null;
    if (filterValue != '') {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();

      this.dataSource.data = this.dataSource.data.filter(item =>
        item.plant.toLowerCase().indexOf(filterValue) > -1);
      this.table.dataSource = this.dataSource;
    } else {
      this.dataSource.data = this.originalDataSource.data;
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
