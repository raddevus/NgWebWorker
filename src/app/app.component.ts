import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgWebWorker';
  longProcessOutput : string = "Long\nprocess\noutput\nwill\nappear\nhere\n";
  fibCalcStartVal : number
  
  longLoop(){
    this.longProcessOutput = "";
    for (var x = 1; x <=1000000000;x++){
      var y = x/3.2;
      if ((x % 20000000) == 0){
         this.longProcessOutput += x + "\n";
         console.log(x);
      }
    }
  }
}

