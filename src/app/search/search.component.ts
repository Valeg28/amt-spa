import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  provincia = '';
  associati = [];
  ngOnInit() {
    // this.getAssociati();
  }

  getAssociati() {
    console.log('getAssociati');
    try {
            this.http.get('http://localhost/api/associato/search/' + this.provincia).subscribe(resp => {
                  this.associati = [];
                  const associati: any = resp;
                  if (resp != null) {
                    for (const associato of associati) {
                      this.associati.push(associato);
                      console.log(associato);
                    }
                  }
              }, err => {
                  console.log(err);
              });
    } catch (e) {
        console.log('errore getAssociato' + e);
    }
  }

}
