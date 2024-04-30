import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrl: './bonjour.component.css'
})
export class BonjourComponent {
  polices: string[] = ["Arial", "Georgia", "Helvetica", "Impact"];

  helloForm = new FormGroup({
    name: new FormControl(''),
    police: new FormControl(this.polices[0]),
    align: new FormControl('left')
  });
}
