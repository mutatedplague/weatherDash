import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'code', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'min', sortable: true, filter: true },
    { field: 'max', sortable: true, filter: true }
  ];

  // rowData: Observable<any[]>;

  constructor(private weather: WeatherService) {
  

    
  }

  ngOnInit(): void {
  }

}
