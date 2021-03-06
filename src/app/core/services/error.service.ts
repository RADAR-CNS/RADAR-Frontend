import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError as observableThrowError } from 'rxjs'

import { ENV } from '../../../environments/environment'

@Injectable({ providedIn: 'root' })
export class ErrorService {
  static handleError(error: HttpErrorResponse | any) {
    // TODO: add remote error logging
    !ENV.PROD && console.warn('ERROR in HttpResponse', error)
    return observableThrowError(error)
  }
}
