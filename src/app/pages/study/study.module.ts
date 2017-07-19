import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { MdGridListModule } from '@angular/material'
import { RouterModule } from '@angular/router'
import { PatientTableModule } from '../../components/tables/patient-table/patient-table.module'

import { TileModule } from '../../components/tile/tile.module'
import { ToolbarModule } from '../../components/toolbar/toolbar.module'
import { StudyService } from '../../shared/store/study/study.service'
import { SubjectService } from '../../shared/store/subject/subject.service'
import { StudyPageComponent } from './study.component'
import { routes } from './study.routing'
import { SourceService } from '../../shared/store/source/source.service'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes),
    TileModule,
    ToolbarModule,
    MdGridListModule,
    PatientTableModule
  ],
  declarations: [
    StudyPageComponent
  ],
  providers: [
    StudyService,
    SubjectService,
    SourceService
  ]
})
export class StudyPageModule {}
