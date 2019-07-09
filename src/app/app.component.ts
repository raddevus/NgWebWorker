import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgWebWorker';
  fibOutput : string = "test\nother\nmore\nitem\nitem 2\n";
  fibCalcStartVal : number
  
  longLoop(){
    for (var x = 1; x <=1000000000;x++){
      var y = x/3.2;
      if ((x % 20000000) == 0){
         this.fibOutput += x + "\n";
         console.log(x);
      }
    }
  }
}

