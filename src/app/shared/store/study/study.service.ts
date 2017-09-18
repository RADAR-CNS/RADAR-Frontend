import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { ENV } from '../../../../environments/environment'
import { Study } from './study.model'

@Injectable()
export class StudyService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Study[]> {
    // TODO: Change when API is ready
    return this.http
      .get<any>(`${ENV.PARAMS.API_LOCAL}/mock-all-studies.json`)
      .filter(d => d !== null)
      .map(res => res.dataset)
  }

  getById(id): Observable<Study> {
    // TODO: Change when API is ready
    return this.http
      .get<any>(`${ENV.PARAMS.API_LOCAL}/mock-all-studies.json`)
      .filter(d => d !== null)
      .map(res => res.dataset)
      .map(res => res.filter((data: Study) => data.id === id)[0] || null)
  }
}
