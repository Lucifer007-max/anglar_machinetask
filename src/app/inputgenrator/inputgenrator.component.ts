// selection-column-renderer.component.ts
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-inputgenrator',
  template: `<input type="checkbox"  [checked]="selectAllChecked" (change)="onCheckboxChange($event)">`,
})
export class InputGenrator implements ICellRendererAngularComp {
  /// This Componnent is generate Checkboxes;

  private params: IHeaderParams | undefined;
  selectAllChecked = false;

  agInit(params: IHeaderParams| any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }
  // Handle Multicheckboxes
  onCheckboxChange(event: Event): void {
    if (this.params && this.params.api) {
      console.log(event)
      this.selectAllChecked = (event.target as HTMLInputElement).checked;
      this.params.api.forEachNode((node: any) => node.setSelected(this.selectAllChecked));
    }
  }
}
