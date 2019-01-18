import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utente = {
    email:'',
    password:'',
    role: 'admin'
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    try {
        this.http.post('http://217.69.14.8/api/auth/login', this.utente).subscribe(resp => {
          console.log(resp)
          alert('Sucess')
        }, err => {
          console.log(err)
          alert('error')
        })
    } catch (error) {
        console.log(error)
    }
   
  }

}
