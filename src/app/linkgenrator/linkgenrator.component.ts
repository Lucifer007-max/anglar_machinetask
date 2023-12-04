import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-linkgenrator',
  standalone:true,
  template: `<a href="https://www.youtube.com/watch?v={{params.data.VideoId}}" target="_blank">{{ params.value }}</a>`
})
export class LinkgenratorComponent  implements ICellRendererAngularComp {
  // This Componnent is generate URL Links
  params: any;

  agInit(params: any): void {
    this.params = params;
    // console.log(params)
  }

  refresh(params: any): boolean {
    return false;
  }
}
