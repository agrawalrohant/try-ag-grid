import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ag-grid';

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
  ]

  rowData = [
    { make: 'Toyoto', model: 'Innova', price: 1200000 },
    { make: 'Nexa', model: 'Ertica', price: 1000000 },
    { make: 'Maruti', model: 'Breeza', price: 1100000 }
  ];

}
