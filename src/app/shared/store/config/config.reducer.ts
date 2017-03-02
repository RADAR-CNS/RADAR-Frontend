import * as configAction from './config.actions'
import { Config } from './config.model'

export interface State extends Config {
  loading: boolean
}

const initialState: State = {
  loading: false,
  descriptive_statistic: []
}

export function reducer (state = initialState, action: configAction.Actions): State {
  switch (action.type) {

    case configAction.Types.LOAD: {
      return Object.assign({}, state, {
        loading: true
      })
    }

    case configAction.Types.LOAD_SUCCESS: {
      const payload = action.payload
      return {
        loading: false,
        descriptive_statistic: payload.descriptive_statistic
      }
    }

    default:
      return state
  }
}

export const getLoading = (state: State) => state.loading
export const getDescriptiveStatistic = (state: State) => state.descriptive_statistic
