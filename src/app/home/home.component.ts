import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CepService } from '../services/cep-service/cep.service';
import { Address } from '../model/address.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$')]),
    phone: new FormControl('', [
      Validators.required]),
    cep: new FormControl('', [
      Validators.required]),
    address: new FormControl('', [
      Validators.required]),
    number: new FormControl('', [
      Validators.required]),
    complement: new FormControl('', []),
    district : new FormControl('', [
      Validators.required]),
  });

  address: Address;

  constructor(
    private cepService: CepService,
  ) { }

  ngOnInit(): void {
  }

  getCep() {
    this.cepService.getCep(this.customerForm.get('cep').value).subscribe(
      data => {
        this.address = data;
        console.log(this.address instanceof Address);
        if (this.address !== undefined) {
          this.customerForm.get('address').setValue(this.address.logradouro);
          this.customerForm.get('district').setValue(this.address.bairro);
        } else {
          this.customerForm.get('cep').setErrors({cep: true});
        }
        
      },
      error => {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        this.customerForm.get('cep').setErrors({cep: true});
      }
    );
  }

  getErrorMessage() {
    if (this.customerForm.get('number').hasError('required')) {
      return 'Você precisa inserir o número do endereço.';
    }

    return this.customerForm.get('number').hasError('email') ? 'Not a valid email' : '';
  }

  getCepErrorMessage() {
    if (this.customerForm.get('cep').hasError('required')) {
      return 'Você precisa inserir o número do CEP';
    } else if(this.customerForm.get('cep').value?.length < 8) {
      return 'CEP inválido';
    }

    return this.customerForm.get('cep').hasError('cep') ? 'CEP inválido' : '';
  }

  validateCep() {
    if (this.customerForm.get('cep').value?.length === 8) {
      this.getCep();
    }
  }
}
