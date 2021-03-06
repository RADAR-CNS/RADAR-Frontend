import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { TileModule } from '../core/components/tile/tile.module'
import { ToolbarModule } from '../core/components/toolbar/toolbar.module'
import { MaterialModule } from '../material'
import { CompliancePlotModule } from './components/compliance-plot/compliance-plot.module'
import { ComplianceToggleModule } from './components/compliance-toggle/compliance-toggle.module'
import { SubjectTableModule } from './components/subject-table/subject-table.module'
import { StudyPageComponent } from './containers/study-page.component'
import { ComplianceDataService } from './services/compliance-data.service'
import { StudyService } from './services/study.service'
import { SubjectService } from './services/subject.service'
import { reducers } from './store'
import { ComplianceDataEffects } from './store/compliance-data/compliance-data.effects'
import { StudyEffects } from './store/study/study.effects'
import { SubjectsEffects } from './store/subjects/subjects.effects'
import { routes } from './study.routing'

@NgModule({
  imports: [
    CommonModule,
    TileModule,
    ToolbarModule,
    MaterialModule,
    SubjectTableModule,
    CompliancePlotModule,
    ComplianceToggleModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('study', reducers),
    EffectsModule.forFeature([
      StudyEffects,
      SubjectsEffects,
      ComplianceDataEffects
    ])
  ],
  declarations: [StudyPageComponent],
  providers: [StudyService, SubjectService, ComplianceDataService]
})
export class StudyModule {}
