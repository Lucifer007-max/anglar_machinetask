import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular'; // Angular Grid Logic
import { ColDef } from 'ag-grid-community';
import { ApiService } from 'src/service/api.service';
import { LinkgenratorComponent } from '../linkgenrator/linkgenrator.component';
import { ThumbnailGenratorComponent } from '../thumbnailgenrator/thumbnailgenrator.component';
import { InputGenrator } from '../inputgenrator/inputgenrator.component';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  standalone: true,
  imports: [AgGridModule]
})
export class GridComponent implements OnInit{
  private gridApi: any;
  private gridColumnApi: any;
  constructor(private API :  ApiService) { }
  rowData:Array<String> | undefined;
  ngOnInit(): void {
    this.loadData();
  }

  // Loadin The API Data in Component
  loadData() {
    this.API.getYoutubeData().subscribe((res:any) => {
      this.totalRecordsCount = res.items.length;
      // Binding The Data Tables with API Vlues
      this.rowData = res.items.map((item: any) => ({
        thumbnail: item.snippet.thumbnails.high.url,
        PublishedOn: item.snippet.publishedAt ,
        VideoTitle: item.snippet.title,
        Description: item.snippet.description,
        VideoId: item.id.videoId,
      }));
    })
  }
  // Binding The headers
  colDefs : ColDef[]= [
    { headerCheckboxSelection: false, checkboxSelection: false,  headerCheckboxSelectionFilteredOnly: true,width: 150 , cellRenderer: InputGenrator},
    {  cellRenderer: ThumbnailGenratorComponent,  width: 350 , autoHeight: true},
    { field: "PublishedOn" , width: 120 ,},
    { field: "VideoTitle" , cellRenderer: LinkgenratorComponent ,autoHeight: true, wrapText: true,  width: 300},
    { field: "Description" , width: 700, autoHeight: true, wrapText: true },
  ];

  totalRecordsCount = 0;
  selectedRecordsCount = 0;

  onGridReady(params: any): void {
    console.log(params.api,  params)
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.calculateRecordCounts();
  }
  calculateRecordCounts(): void {
    // Listen to selection changes
    this.gridApi.addEventListener('selectionChanged', () => {
      this.selectedRecordsCount = this.gridApi.getSelectedRows().length;
      console.log(this.selectedRecordsCount )
    });
  }
}
