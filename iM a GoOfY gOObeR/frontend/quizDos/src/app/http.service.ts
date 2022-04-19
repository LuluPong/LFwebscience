import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private testing_ = 'http://localhost:3000/test'

  constructor(private httpClient: HttpClient) { }

  public testRun() {
    console.log('checkpoint 1');
    return this.httpClient.get(this.testing_);
  }
}
