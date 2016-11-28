import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { GridService } from '../services/grid.service';
import { Tile } from '../models/tile';
import * as gridAction from '../actions/grid';

@Injectable()
export class GridEffects {

  constructor(
    private actions$: Actions,
    private gridService: GridService
  ) { }

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(gridAction.Types.LOAD)
    .switchMap(() => {
      return this.gridService.getTiles()
        .map((tiles: Tile[]) => new gridAction.LoadSuccess(tiles));
    });
}
