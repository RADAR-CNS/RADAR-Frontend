import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'

import * as fromSubject from '../../../store'
import * as sensorsDataActions from '../../../store/sensors-data/sensors-data.actions'

@Component({
  selector: 'app-source-volume',
  template: `
    <div class="background"></div>
    <app-chart-base-bar
      class="chart"
      *ngIf="data"
      [chartData]="data"
      [hasXAxis]="true"
      [hasBrush]="true"
      [categorical]="false"
      [margin]="{ top: 8, right: 36, bottom: 32, left: 63 }"
      (brushMove)="onBrushMove($event)"
    ></app-chart-base-bar>
  `,
  styleUrls: ['./source-volume.component.scss']
})
export class SourceVolumeComponent {
  @Input() data

  constructor(private store: Store<fromSubject.State>) {}

  onBrushMove(date: any) {
    this.store.dispatch(
      new sensorsDataActions.SetTimeFrame({
        startDateTime: date[0].toISOString(),
        endDateTime: date[1].toISOString()
      })
    )
  }
}
