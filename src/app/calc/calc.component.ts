import { Component } from '@angular/core';
import { Calc } from '../calc';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
 calc: Calc = {
      start: '1',
	  amount: '1',
	  operator: '+'
	 };
}
