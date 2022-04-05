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
  private dbTopAPI = "http://localhost:3000/db";
  public db_spec = `http://localhost:3000/db/`;

  public etl_ = `http://localhost:3000/lab6`;

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


  // Get --------------------------------------------------
  public getfullCol() {
    return this.httpClient.get(this.dbTopAPI);
  }
  
  public getSpecCol(docID: number) {
    this.db_spec = `http://localhost:3000/db/${docID}`
    return this.httpClient.get(this.db_spec);
  }

  // Post --------------------------------------------------

  public addDoc(content_: string) {
    return this.httpClient.post(this.dbTopAPI, JSON.parse(content_));
  }

  public addDoc_Dup(content_: string) {
    return this.httpClient.post(this.dbTopAPI, JSON.parse(content_));
  }

  // Put ---------------------------------------------------

  public upDate(content_: string) {
    return this.httpClient.put(this.dbTopAPI, JSON.parse(content_))
  }

  public upDateSpec(docID: number, content_: string) {
    console.log('checkpoint 2')
    this.db_spec = `http://localhost:3000/db/${docID}`
    return this.httpClient.put(this.db_spec, JSON.parse(content_))
  }

  // Delete -------------------------------------------------

  public deleteSpec(docID: string) {
    this.db_spec = `http://localhost:3000/db/${docID}`
    return this.httpClient.delete(this.db_spec)
  }
  
  public deleteFIN() {
    return this.httpClient.delete(this.dbTopAPI)
  }

  public deleteFIN_Dup() {
    return this.httpClient.delete(this.etl_)
  }

}
