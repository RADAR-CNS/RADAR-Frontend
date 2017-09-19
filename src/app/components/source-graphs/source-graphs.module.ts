import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MdProgressSpinnerModule } from '@angular/material'

import { ChartsModule } from '../charts/charts.module'
import { SourceDateAxisComponent } from './source-date-axis/source-date-axis'
import { SourceGraphComponent } from './source-graph/source-graph.component'
import { SourceGraphsComponent } from './source-graphs.component'
import { SourceTooltipComponent } from './source-tooltip/source-tooltip.component'

const COMPONENTS = [
  SourceGraphsComponent,
  SourceGraphComponent,
  SourceTooltipComponent,
  SourceDateAxisComponent
]

@NgModule({
  imports: [CommonModule, ChartsModule, MdProgressSpinnerModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SourceGraphsModule {}
