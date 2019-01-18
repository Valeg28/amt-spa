import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-profilo-ass-info',
  templateUrl: './profilo-ass-info.component.html',
  styleUrls: ['./profilo-ass-info.component.css']
})
export class ProfiloAssInfoComponent implements OnInit {

  associato;
  idAssociato = '5c4106db813e6f13da42c693';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAssociato()
  }

  getAssociato() {
    try {
      this.http.get('http://217.69.14.8/api/associato/' + this.idAssociato).subscribe(resp => {
        //console.log(resp)
        this.associato = resp;
      })
    } catch (error) {
      console.log(error)
    }
    
  }

}
