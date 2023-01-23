import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  apiasincrona20 = environment.apiURL + "posts/"

  getasincrona20():Observable<any>{
    return this.http.get(this.apiasincrona20,{observe:"response"})
  }

}
