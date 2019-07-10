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
  worker : any;

  constructor(){
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('./app.worker', { type: 'module' });
      this.worker.onmessage = ({ data }) => {
        this.longProcessOutput += `${data}` + "\n";
      };
    } else {
      console.log("Web Workers are not supported by your browser");
    }
  }

  longLoop(){
    this.longProcessOutput = "";
    // the following line starts the long process on the Web Worker
    // by sending a message to the Web Worker
    this.worker.postMessage("start looping...");
  }
}