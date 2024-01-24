import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  upper:string='MARVELLOUS INFOSYSTEM';
  lower:string='marvellous infosystems';
  DText:any=undefined;

   Upper(){
    this.DText=this.upper;
    return this.DText;
   }
   Lower(){
    this.DText=this.lower
    return this.DText;
   }
}
