import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";

@Injectable()
export class UserService {

  constructor(protected httpClient: HttpClient) {
  }

  public login(user: any): Observable<any> {
    console.log(user);
    this.httpClient.get<any>('http://localhost:3000/response').subscribe(
      data => {
        if (data.code == '0'){
          console.log("logeado con exito");
        }
      }
    )
    return Observable.of(false);
  }


}
