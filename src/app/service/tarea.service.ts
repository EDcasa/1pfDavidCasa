import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPlaceHolder } from '../models/JsonPlaceHolder';
import { map, Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  public URLSERVICE = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { 
  }

  getPromiseJsonPlaceHolder():Promise<JsonPlaceHolder>{
    return new Promise<JsonPlaceHolder>((resolve, reject)=>{
      return this.http.get<JsonPlaceHolder>(`${this.URLSERVICE}`).subscribe({
        next: (res:JsonPlaceHolder)=>{
          resolve(res);
        },
        error: (err:any)=>{
          reject(err);
        }
      });
    })
  }

  getObservableJsonPlaceHolder(): Observable<JsonPlaceHolder> {
    return this.http
      .get<JsonPlaceHolder>(
        this.URLSERVICE
      );
  }

  getFiltered(users:any, filtered:string){
    return of(users).pipe(
      map(c => {
        if (!filtered) {
          return c;
        }
        const filteredUsers: JsonPlaceHolder[] = [];
        c.filter(function(user:any) {
          if (user.userId == filtered) {
            filteredUsers.push(user);
          }
        });
        
        return filteredUsers;
      })
    );
  }

  
}
