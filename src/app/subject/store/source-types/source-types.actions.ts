import { Action } from '@ngrx/store'

import { SourceType } from '../../../shared/models/source-type.model'

export enum SourceTypeActionTypes {
  Load = '[SourceType] Load',
  LoadFromApi = '[SourceType] LoadFromApi',
  LoadFromApiSuccess = '[SourceType] LoadFromApiSuccess',
  LoadSuccess = '[SourceType] LoadSuccess',
  LoadFail = '[SourceType] LoadFail',
  Destroy = '[SourceType] Destroy'
}

export class Load implements Action {
  readonly type = SourceTypeActionTypes.Load
}

export class LoadFromApi implements Action {
  readonly type = SourceTypeActionTypes.LoadFromApi
}

export class LoadSuccess implements Action {
  readonly type = SourceTypeActionTypes.LoadSuccess
}

export class LoadFromApiSuccess implements Action {
  readonly type = SourceTypeActionTypes.LoadFromApiSuccess

  constructor(public payload: SourceType[]) {}
}

export class LoadFail implements Action {
  readonly type = SourceTypeActionTypes.LoadFail
}

export class Destroy implements Action {
  readonly type = SourceTypeActionTypes.Destroy
}

export type SourceTypeActions =
  | Load
  | LoadFromApi
  | LoadFromApiSuccess
  | LoadSuccess
  | LoadFail
  | Destroy
