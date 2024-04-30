import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent implements OnInit, OnDestroy{
today : Date = new Date();
interval: any;

ngOnInit() {
  this.interval = setInterval(() => {this.today = new Date()}, 1000);
}

ngOnDestroy() {
  clearInterval(this.interval);
}

}
