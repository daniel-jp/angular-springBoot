
//SERVICES
import { Angspring } from './../model/angspring';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { delay, first, tap, timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AngspringsService {

  private readonly API = "api/crudsprings";


  constructor(private httpClient: HttpClient){ }
  list(){
    return this.httpClient.get<Angspring[]>(this.API)
    .pipe(
      first(),
      delay(3000),
      tap( angsprings => console.log(arguments))
    );
  }
  loadById(id: string) {
    return this.httpClient.get<Angspring>(`${this.API}/${id}`);
  }

  save(record: Partial<Angspring>){
  return this.httpClient.post<Angspring>(this.API, record).pipe(first());
  }
  private create(record: Partial<Angspring>) {
    return this.httpClient.post<Angspring>(this.API, record).pipe(first());
  }

  private update(record: Partial<Angspring>) {
    return this.httpClient.put<Angspring>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
