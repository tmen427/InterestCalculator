import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Student} from "../student"; 


@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private Http: HttpClient) { }

  Url: string = 'https://localhost:7008/api/Students'; 


  //the return type is an observable
  getStudents() : Observable<Student[]> {
    return this.Http.get<Student[]>(this.Url); 
  }

  postStudents(student: any) : Observable<any> {
         const headers = { 'content-type': 'application/json'}  
          const body=JSON.stringify(student);
          console.log("bro this is the type"); 
          console.log(body)
          return this.Http.post(this.Url, body,{'headers':headers}); 
  }



}
