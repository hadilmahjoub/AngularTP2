import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  logs: string[] = [];

  loger(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  info(message: string) {
    this.logs.push(message);
    console.info(message);
  }

  debuger(message: string) {
    this.logs.push(message);
    console.debug(message);
  }

  avertir(message: string) {
    this.logs.push(message);
    console.warn(message);
  }
  
  erreur(message: string) {
    this.logs.push(message);
    console.error(message);
  }
}
