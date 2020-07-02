import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface StatusTableItem {
  plant: string;
  state: string;
  pv: number;
  storage: string;
  heading: number;
  otherConsumer: number;
  grid: string;
}

const EXAMPLE_DATA: StatusTableItem[] = [
  {plant: 'Worbis', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820,  grid: '500W - buy from grid-' },
  {plant: 'Duderstadt', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820, grid: '500W - buy from grid-' },
  {plant: 'Leinefelde', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820, grid: '500W - buy from grid-' },
  {plant: 'Göttingen', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820,  grid: '500W - buy from grid-' },
  {plant: 'Boron', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820, grid: '500W - buy from grid-' },
  {plant: 'Carbon', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820,  grid: '500W - buy from grid-' },
  {plant: 'Nitrogen', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820,  grid: '500W - buy from grid-' },
  {plant: 'Oxygen', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820,  grid: '500W - buy from grid-' },
  {plant: 'Fluorine', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820, grid: '500W - buy from grid-' },
  { plant: 'Neon', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820, grid: '500W - buy from grid-' },
  { plant: 'Sodium', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820,  grid: '500W - buy from grid-' },
  { plant: 'Magnesium', state: 'ok', pv: 5000, storage: 'SOC: 80%, P: 2000W', heading: 0, otherConsumer: 820,  grid: '500W - buy from grid-' },
];

export class StatusTableDataSource extends DataSource<StatusTableItem> {
  data: StatusTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super()
  }

  connect(): Observable<StatusTableItem[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]))
    }))
  }
  disconnect(){}

  private getPagedData(data: StatusTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: StatusTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'plant': return compare(a.plant, b.plant, isAsc);
        case 'state': return compare(a.state, b.state, isAsc);
        case 'pv': return compare(+a.pv, +b.pv, isAsc);

        case 'storage': return compare(+a.storage, +b.storage, isAsc);
        case 'heading': return compare(+a.heading, +b.heading, isAsc);
        case 'otherConsumer': return compare(+a.otherConsumer, +b.otherConsumer, isAsc);
        case 'grid': return compare(+a.grid, +b.grid, isAsc);
        default: return 0;
      }
    })
  }
}
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
