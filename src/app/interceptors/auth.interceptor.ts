// import { HttpInterceptorFn } from '@angular/common/http';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
// debugger
//   const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
//      const clonedReq =  req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//   return next(clonedReq);
// };


import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class authInterceptor implements HttpInterceptor{
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
     const clonedReq =  req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });


      return next.handle(clonedReq);
  }
  
}