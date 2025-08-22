// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _data: any[] = [];

  setData(data: any[]) {
    this._data = data;
  }

  getData(){
    return this._data
  }
}
