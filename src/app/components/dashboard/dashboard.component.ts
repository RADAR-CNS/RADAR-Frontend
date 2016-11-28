import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Tile } from '../../models/tile';
import * as fromRoot from '../../reducers';
import * as gridAction from '../../actions/grid';
import * as userAction from '../../actions/user';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-ui-progress *ngIf="(loading$ | async) === true"></app-ui-progress>
    <md-grid-list *ngIf="(loading$ | async) === false" cols="4" rowHeight="fit">
      <md-grid-tile *ngFor="let tile of tiles$ | async"
        [colspan]="tile.cols" [rowspan]="tile.rows">
        <app-chart-container [tile]="tile"></app-chart-container>
      </md-grid-tile>
    </md-grid-list>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles$: Observable<Tile[]>;
  loading$: Observable<boolean>;

  // TODO: update grid when MD adds responsive support
  // [https://github.com/angular/material2/blob/master/src/lib/grid-list/README.md]
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.tiles$ = this.store.let(fromRoot.getGridTiles);
    this.loading$ = this.store.let(fromRoot.getGridLoading);
  }

  ngOnInit() {
    this.store.dispatch(new gridAction.Load());
    this.store.dispatch(new userAction.Load());
  }
}
