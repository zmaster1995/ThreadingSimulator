import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',

})
export class ApiRequestService {

  private get URL(): string
  {
    return window.location.protocol + "//" + window.location.host;
  }

  constructor(private http:HttpClient, private spinner: NgxSpinnerService) {
  }
 
    simulate(execProgram: any) {
        return this.http.post(this.URL + "/Execute", execProgram, { withCredentials: true })
          .pipe(catchError(this.handleError.bind(this)));
    }
    
    private handleError(error: HttpErrorResponse) {
      alert(error.message);
      
      this.spinner.hide();

      return throwError(error);
    }
}
