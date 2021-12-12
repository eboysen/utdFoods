import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const requestOptions={
  withCredentials: true 
};

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  readonly ROOT_URL;
  constructor(private http:HttpClient) { 
    this.ROOT_URL='https://utd-foods.herokuapp.com';
  }

  get(uri:string){
    return this.http.get(`${this.ROOT_URL}/${uri}`,{withCredentials:true});
  }

  delete(uri:string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`,requestOptions);
  }

  post(uri:string,payload: Object){
    console.log(uri);
    console.log(payload);
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload,requestOptions);
  }

  patch(uri:string,payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${uri}`,payload);
  }

}
