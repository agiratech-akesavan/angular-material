import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    const newReq=request.clone({
      url:"https://jsonplaceholder.typicode.com/"+request.url,
      headers:request.headers.set("autherization","testing-Interceptor"),
    })
    return next.handle(newReq);
  }
}
