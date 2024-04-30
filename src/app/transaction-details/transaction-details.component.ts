import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.css'
})
export class TransactionDetailsComponent {
  details: any;
  idj: string = "";
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idj = params['id']; // Access the 'id' parameter from the URL
      this.idj = this.idj.replace(":", "");
      this.idj = this.idj.replace("'", "");
      console.log('Test ID:', this.idj);
    });

    const url: string ="/assets/data/" + this.idj +".json";
    console.log(url);
    this.http.get(url).subscribe((response) => {
      this.details = response;
    })
    console.log(this.details);
  }
}
