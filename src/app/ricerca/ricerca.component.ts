import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { t } from '@angular/core/src/render3';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  provincia;
  associati = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ricerca() {
    try {
      this.http.get('http://217.69.14.8/api/associato/search/'+ this.provincia).subscribe(resp => {
        this.associati = []
        //console.log(resp.toString)
        const associati: any = resp;
        for(const ass of associati){
          this.associati.push(ass);
          console.log(ass)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

}
