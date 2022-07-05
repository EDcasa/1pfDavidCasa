import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPlaceHolder } from '../models/JsonPlaceHolder';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  public URLSERVICE = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { 
  }

  getPostJsonPlaceHolder():Promise<JsonPlaceHolder>{
    return new Promise<JsonPlaceHolder>((resolve, reject)=>{
      return this.http.get(`${this.URLSERVICE}`).pipe()
      .subscribe({
        complete: ,
        error: 
      });
    })
  }

  UpdateBug(): Observable<JsonPlaceHolder> {
    return this.http
      .get<JsonPlaceHolder>(
        this.URLSERVICE
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  
}
