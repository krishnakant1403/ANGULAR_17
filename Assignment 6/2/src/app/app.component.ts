import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputText: string = '';
  displayedText: string = '';

  displayInput() {
    this.displayedText = this.inputText;
  }
}
