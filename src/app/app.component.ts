import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable, of } from 'rxjs';
import { RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid1', { static: false }) agGrid1: AgGridAngular;
  @ViewChild('agGrid2', { static: false }) agGrid2: AgGridAngular;

  title = 'test-ag-grid';
  rowData1: Observable<any> = of([]);
  rowData2: Observable<any> = of([]);

  columnDefs1 = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ];
  columnDefs2 = [
    { headerName: 'Make', field: 'make', rowGroup: true },
    { headerName: 'Price', field: 'price' }
  ];

  autoGroupColumnDef = { headerName: 'Model', field: 'model', cellRenderer: 'agGroupCellRenderer', cellRendererParams: { checkbox: true } };


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.rowData1 = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
    this.rowData2 = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
  }

  getSelectedRows1() {
    const selectedNodes: RowNode[] = this.agGrid1.api.getSelectedNodes();
    const selectedData: any[] = selectedNodes.map(node => node.data);
    const presentSelectedData: string = selectedData.map(node => `${node.make} ${node.model}`).join(', ');
    alert(`Selected nodes : ${presentSelectedData}`);
  }
  getSelectedRows2() {
    const selectedNodes: RowNode[] = this.agGrid1.api.getSelectedNodes();
    const selectedData: any[] = selectedNodes.map(node => node.data);
    const presentSelectedData: string = selectedData.map(node => `${node.make} ${node.model}`).join(', ');
    alert(`Selected nodes : ${presentSelectedData}`);
  }

}
