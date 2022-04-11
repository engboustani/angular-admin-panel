import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currencies: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCurrencies();
  }

  private getCurrencies() {
    this.http.get('https://localhost:7165/api/Currency').subscribe(
      response => {
        this.currencies = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
