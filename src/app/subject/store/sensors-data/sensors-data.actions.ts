import { Action } from '@ngrx/store'

import { DescriptiveStatistic } from '../../../shared/enums/descriptive-statistic.enum'
import { TimeWindow } from '../../../shared/enums/time-window.enum'
import { ChartData } from '../../../shared/models/chart-data.model'
import { Sensor } from '../../../shared/models/sensor.model'
import { TimeFrame } from '../../../shared/models/time.model'

export const LOAD = '[Subject][Sensors-Data] LOAD'
export const LOAD_SUCCESS = '[Subject][Sensors-Data] LOAD_SUCCESS'
export const UPDATE_DATES = '[Subject][Sensors-Data] UPDATE_DATES'
export const SET_TOOLTIP_DATE = '[Subject][Sensors-Data] SET_TOOLTIP_DATE'
export const SET_TIME_FRAME = '[Subject][Sensors-Data] SET_TIME_FRAME'
export const SET_TIME_INTERVAL = '[Subject][Sensors-Data] SET_TIME_INTERVAL'
export const SET_DESCRIPTIVE_STATISTIC =
  '[Subject][Sensors-Data] SET_DESCRIPTIVE_STATISTIC'
export const DESTROY = '[Subject][Sensors-Data] DESTROY'

export class Load implements Action {
  readonly type = LOAD
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS

  constructor(public payload: { data: ChartData[]; sensor: Sensor }) {}
}

export class UpdateDates implements Action {
  readonly type = UPDATE_DATES
}

export class SetTooltipDate implements Action {
  readonly type = SET_TOOLTIP_DATE

  constructor(public payload: Date) {}
}

export class SetTimeFrame implements Action {
  readonly type = SET_TIME_FRAME

  constructor(public payload: TimeFrame) {}
}

export class SetTimeInterval implements Action {
  readonly type = SET_TIME_INTERVAL

  constructor(public payload: TimeWindow) {}
}

export class SetDescriptiveStatistic implements Action {
  readonly type = SET_DESCRIPTIVE_STATISTIC

  constructor(public payload: DescriptiveStatistic) {}
}

export class Destroy implements Action {
  readonly type = DESTROY
}

export type Actions =
  | Load
  | LoadSuccess
  | UpdateDates
  | SetTooltipDate
  | SetTimeFrame
  | SetTimeInterval
  | SetDescriptiveStatistic
  | Destroy