import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{
  transactions: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      const url: string ='/assets/data/transactions.json';
      this.http.get(url).subscribe((response) => {
        this.transactions = response;
      })
  }

  sort(colName: string) {
    this.transactions = this.transactions.sort((a : any, b : any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
  }
}
