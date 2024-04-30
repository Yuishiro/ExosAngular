import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { OperatorService } from '../operator.service';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  calculForm = new FormGroup({
    operand1: new FormControl('0'),
    operand2: new FormControl('0'),
    operator: new FormControl('+')
  });

  constructor(private operatorService: OperatorService, private messageService: MessagesService) {}
  operatorList: string[] = this.operatorService.getOperator();

  result : Number = 0;

  submitCalcul() {
    const calcul = (this.calculForm.value.operand1) + (this.calculForm.value.operator ?? '') + (this.calculForm.value.operand2);
    console.log(calcul);
    this.result = this.calculForm.value.operator != '' ? (0, eval)(calcul) : "invalid entries";

    const time = new Date();

    console.log(this.result);
    const message = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "   " + calcul + " = " + this.result;
    
    this.messageService.add(message);
  }
}
