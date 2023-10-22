import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinearRegressionTest1Service {


  constructor(
    private readonly http: HttpClient
  ) { }

  test_1 = 'https://node-desv-service-n4ndomx.cloud.okteto.net/3a-test1'
  test_2 = 'https://node-desv-service-n4ndomx.cloud.okteto.net/3a-test2'
  test_3 = 'https://node-desv-service-n4ndomx.cloud.okteto.net/3a-test3'
  test_4 = 'https://node-desv-service-n4ndomx.cloud.okteto.net/3a-test4'



  //http opcions

  httpOpcions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getData1(): Observable<any> {
    return this.http.get<any>(this.test_1, this.httpOpcions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getData2(): Observable<any> {
    return this.http.get<any>(this.test_2, this.httpOpcions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getData3(): Observable<any> {
    return this.http.get<any>(this.test_3, this.httpOpcions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getData4(): Observable<any> {
    return this.http.get<any>(this.test_4, this.httpOpcions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code ${error.status} Mensage: ${error.message}`
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
}
