import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  template: `
  <div class="container">
  
    <h1>Marvellous infosystem</h1>
  </div>

    <h1>=====================================================</h1>
 
    <h1>This is textfield : </h1>
 
    <input id="inputField" [(ngModel)]="inputText" placeholder="Type here" />
    <button (click)="displayInput()">submit</button>


    <p>Textfield is: <span style="color: blue;">{{ displayedText }}</span></p>
    


  
  `,
  styles: [`
    .container {
      color:blue;
    }
  `]
})

export class AppComponent {
  inputText: string = '';
  displayedText: string = '';
  

  displayInput() {
    this.displayedText = this.inputText;
  }
}
