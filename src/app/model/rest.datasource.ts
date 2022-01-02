import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

export const REST_URL = new InjectionToken('rest-url');
@Injectable()
export class RestDataSource {
  constructor(
    private http: HttpClient,
    @Inject(REST_URL) private url: string
  ) { }

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
