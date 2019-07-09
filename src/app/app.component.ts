import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgWebWorker';
  
  calcFibonacci(val){
    alert("fib 0! " + val);
  }
}

