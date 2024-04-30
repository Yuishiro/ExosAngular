import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  protected operatorList: string[] = ["+", "-", "/", "*"];

  getOperator(): string[] { return this.operatorList}
}
