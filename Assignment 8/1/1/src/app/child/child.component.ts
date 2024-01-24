import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  inputText: any;
  Dtext:any;

  Send() {
    this.Dtext=this.inputText;
    return this.Dtext;
    }
}
