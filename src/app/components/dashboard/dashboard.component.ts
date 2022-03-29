import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef } from 'ag-grid-community';
import { AppState } from 'src/app/app-state';
import { Day } from 'src/app/core/models/day.model';
import { loadDays } from 'src/app/core/store/actions/weather.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  errorMessage: string = "";

  columnDefs: ColDef[] = [
    { field: 'code', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'min', sortable: true, filter: true },
    { field: 'max', sortable: true, filter: true }
  ];
  
  rowData: Day[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('app').subscribe((data: any) => {
      this.errorMessage = data['errorMessage'];
    });

    this.store.select('days').subscribe((data: any) => {
      this.rowData = data['days'];
    });
    
    this.store.dispatch(loadDays());
  }

}
