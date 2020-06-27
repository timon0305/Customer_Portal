import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface OverviewtableItem {
  id: number;
  plant: string;
  status: string;
  peakPower: number;
  energyToday: number;
  energyYesterday: number;
  energy7Days: number;
  energy30Days: number;
  specificAnualYield: number
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: OverviewtableItem[] = [
  {id: 1, plant: 'Worbis', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 2, plant: 'Duderstadt', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 3, plant: 'Leinefelde', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 4, plant: 'Göttingen', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 5, plant: 'Boron', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 6, plant: 'Carbon', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 7, plant: 'Nitrogen', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 8, plant: 'Oxygen', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 9, plant: 'Fluorine', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 10, plant: 'Neon', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 11, plant: 'Sodium', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
  {id: 12, plant: 'Magnesium', status: 'ok', peakPower: 30, energyToday: 40, energyYesterday: 100, energy7Days: 820, energy30Days: 3150, specificAnualYield: 117 },
];

/**
 * Data source for the Overviewtable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OverviewtableDataSource extends DataSource<OverviewtableItem> {
  data: OverviewtableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<OverviewtableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: OverviewtableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: OverviewtableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'plant': return compare(a.plant, b.plant, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'peakPower': return compare(+a.peakPower, +b.peakPower, isAsc);

        case 'energyToday': return compare(+a.energyToday, +b.energyToday, isAsc);
        case 'energyYesterday': return compare(+a.energyYesterday, +b.energyYesterday, isAsc);
        case 'energy7Days': return compare(+a.energy7Days, +b.energy7Days, isAsc);
        case 'energy30Days': return compare(+a.energy30Days, +b.energy30Days, isAsc);
        case 'specificAnualYield': return compare(+a.specificAnualYield, +b.specificAnualYield, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
