import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {HttpParamsModel} from './interfaces/http-params.model';


@Injectable()
export class HttpWebService {
  headersHttpClient: HttpHeaders;
  title: string = '';
  description: string = '';
  error: string = '';

  constructor(private http: HttpClient, public dialog: MatDialog) {
  }


  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  post(params: HttpParamsModel, responseType?: any): Observable<any> {
    // Call Rest API using Post.
    return this.http.post(params.uri, params.payload, {headers: params.httpHeader, responseType: responseType});
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  get(params: HttpParamsModel): Observable<any> {
    return this.http.get(params.payload)
      .pipe(catchError((err: HttpErrorResponse) => {
        console.log(err);
        this.exceptionHandler(err);
        return throwError(err.error);
      }));
  }

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  /**
   * For Showing Error Dialog
   */
  exceptionHandler(err: HttpErrorResponse): void {
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
  }
}
