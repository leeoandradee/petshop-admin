import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Address } from 'src/app/model/address.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'https://viacep.com.br/ws/';

  getCep(cep: String) {
    return this.http.get<Address>(this.url + cep + '/json/');
  }

}
