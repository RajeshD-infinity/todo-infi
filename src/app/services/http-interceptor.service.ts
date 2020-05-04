import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {


  constructor() {
    console.log('sdfsdfds')
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method
    const token = 'lkflsaj;lfjsaf09fsufsda09f';
    req = req.clone({
      headers: req.headers.set(
        'Authorization',
        token
      )
    });

    return next.handle(req).pipe(
      tap(evt => {
          if (evt instanceof HttpResponse) {
            console.log('evt', evt);
              if(evt) {
                console.log('data found')
              }
          }
      }),
      catchError((err: any) => {
          if(err instanceof HttpErrorResponse) {
              console.log('errrrr', err);
              //log error 
          }
          return throwError(err);
      }));

      // return next.handle(req).
      //   .catch((err: HttpErrorResponse) => {
      //       return Observable.throw(err.error);
      //   });


  }

}
