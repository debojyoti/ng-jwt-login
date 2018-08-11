import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {
    
    if (this.getToken()) {
      let tokenizedReq = req.clone({
        setHeaders : {
          Authorization : "Bearer "
        }
      })
  
      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }

  }

  private getToken() {
    if (!!localStorage.getItem("token")) {
      return localStorage.getItem("token")
    } else {
      return false;
    }
  }
}