import { CdkTableModule } from '@angular/cdk/table'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatGridListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material'

const MAT_MODULES = [
  CdkTableModule,
  MatButtonModule,
  MatGridListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
]

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MaterialModule {}