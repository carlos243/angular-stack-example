import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable()
export class LoggerService {

  constructor() { }

  public debug(mensage : string, ...optionalParams: any[]){
    if (environment.production) return;
    console.debug(mensage, optionalParams);
  }

}
