import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public sendGetRequest(){
    return this.httpClient.get('http://localhost:3000/');
  }

  public upload(file: any){
    return this.httpClient.post('http://localhost:3000/upload', {file: file})
  }
}
