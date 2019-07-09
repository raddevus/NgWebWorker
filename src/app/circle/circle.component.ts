import { ViewChild, Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements AfterViewInit {
  
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
  title = 'NgWebWorker';

  
  ctx: CanvasRenderingContext2D;
  LINES : number = 20;
  lineInterval : number = 0;
  gridColor : string = "lightgreen";

  @ViewChild('mainCanvas', {static: false})
  mainCanvas: ElementRef;
  
  constructor() { 
    //this.initApp();
    console.log("ctor complete");
    
   }

   ngAfterViewInit(): void {
    console.log("in after view init");
    this.ctx =   (<HTMLCanvasElement> this.mainCanvas.nativeElement).getContext('2d');
    
    //this.ctx = hce.getContext('2d');
    
    this.initApp();
    this.initBoard();
  }

  initApp()
  {
    //var theCanvas = document.getElementById("canvas");
    //var ctx = theCanvas.getContext("2d");
    
    this.ctx.canvas.height  = 650;
    this.ctx.canvas.width = this.ctx.canvas.height;

    //window.addEventListener("mousedown", mouseDownHandler);
  }
 
  initBoard(){
    console.log("initBoard...");
    this.lineInterval = Math.floor(this.ctx.canvas.width / this.LINES);
    console.log(this.lineInterval);
    this.draw();
  }
  
  draw(){
    console.log("draw...");
    this.ctx.globalAlpha = 1;
    // fill the canvas background with white
    this.ctx.fillStyle="white";
    this.ctx.fillRect(0,0,this.ctx.canvas.height,this.ctx.canvas.width);
    
    // draw the blue grid background
    for (var lineCount=0;lineCount<this.LINES;lineCount++)
    {
      this.ctx.fillStyle=this.gridColor;
      this.ctx.fillRect(0,this.lineInterval*(lineCount+1),this.ctx.canvas.width,2);
      this.ctx.fillRect(this.lineInterval*(lineCount+1),0,2,this.ctx.canvas.width);
    }
  }
}
