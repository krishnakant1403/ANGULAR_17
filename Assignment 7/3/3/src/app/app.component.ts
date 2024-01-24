import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3';

 DText:string = 'marvellous infosystems' ;

 toggleText() {
  if (this.DText == 'marvellous infosystems') {
    this.DText = 'education for better tomorrow';
  } 
}
 
}
