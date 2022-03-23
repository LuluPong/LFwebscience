import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiserver = "http://localhost:3000/api";
  private myIPapi = "http://localhost:3000/myIP";
  private anyIPapi = "http://localhost:3000/postIP";
  private linkAPI = "http://localhost:3000/getDNS";
  private dbTopAPI = "http://localhost:3000/db"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.apiserver);
  }

  public getMyIP() {
    return this.httpClient.get(this.myIPapi);
  }

  public exploreIP(ipValue: string) {
    console.log(ipValue);
    return this.httpClient.post(this.anyIPapi, JSON.parse(ipValue));
  }

  public linkToIP(linkValue: string) {
    console.log(linkValue);
    return this.httpClient.post(this.linkAPI, JSON.parse(linkValue));
  }

  public getfullCol() {
    return this.httpClient.get(this.dbTopAPI);
  }


}
