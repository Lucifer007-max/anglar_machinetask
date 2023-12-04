import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-thumbnailgenrator',
  standalone:true,
  template: `<img [src]="params.data.thumbnail" alt="Thumbnail" height="250"  width="250">`,
})
export class ThumbnailGenratorComponent  implements ICellRendererAngularComp {
  // This component is use to generate Thumbnail
  params: any;
  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }
}
